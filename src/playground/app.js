class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try{

            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
    
                this.setState(() => ({options: options}));
            }
        }catch(e){

        }

        console.log('running Component Did Mount');
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('running Component Did Update...saving');
        }

    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleDeleteOptions(){
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(option){
        console.log('hdo', option);
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => {
                return option !== item;
            })
        }));
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';

        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option);
    }
    render() {
        const title =  'Indecision';
        const subtitle = 'Put yourlife int he hand of a computer'
        return (
            <div>
                <Header title={title}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}
class Header extends React.Component {
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
            );
    }
}

class Action extends React.Component {
    
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                    >What should i do?</button>
            </div>
        );
    }
}
class Options extends React.Component {
    
    render() {
        return(
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {!this.props.options.length > 0 && <p>please add ooption to get stated</p>}
                {
                    this.props.options.length > 0 ? <Option 
                        options={this.props.options} 
                        handleDeleteOption={this.props.handleDeleteOption}
                        /> : 'No options'
                
                }
                
            </div> 
        );
    }
}
class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
        
    } 
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error: error}))
        if(!error){
            e.target.elements.option.value = '';

        }
    }
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.options.map((op) => 
                                <div>
                                    <li key={op}>{op}</li>
                                    <button 
                                        onClick={(e) => {
                                            this.props.handleDeleteOption(op);
                                        }}

                >Remove</button>
                                </div>
                            )
                    }
                </ol>
                
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));