import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption = (option) => {
        console.log('hdo', option);
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => {
                return option !== item;
            })
        }));
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';

        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        this.setState({selectedOption: option});
    }
    handleClearSelectedOption = () => {
        this.setState({selectedOption: undefined});

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
    
    render() {
        const title =  'Indecision';
        const subtitle = 'Put your life in the hand of a computer'
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                            />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}