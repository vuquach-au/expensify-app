console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put yourlife int he hand of a computer',
    options:[]
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}
const onRemoveAll = () => {
    app.options = [];
    render();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
}
const numbers = [55, 66, 77];
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            
            <ol>
            {
                app.options.map((op) => <li key={op}>{op}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div> 
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');


render();
