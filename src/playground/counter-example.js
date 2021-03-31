console.log('App.js is running');

var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>Some more info</p>
    </div> 
);
let count = 0;
const addOne = () => {
    count++;
    renderApp();

}
const minusOne = () => {
    count--;
    renderApp();
}
const reset = () => {
    count = 0;
    renderApp();
}

function renderApp(){
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button  className="button" onClick={addOne}>+1</button>
            <button  className="button" onClick={minusOne}>-1</button>
            <button  className="button" onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

var appRoot = document.getElementById('app');




renderApp();