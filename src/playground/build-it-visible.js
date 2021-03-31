console.log('Visible Toggle is running')


const details = <p>Hey. These are some details you can now see!</p>;
let visibility = false;

const onShowDetail = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visible Toggle</h1>
            <button onClick={onShowDetail}>{visibility ? 'Hide details' : 'Show Details'}</button>
            {
                visibility && details
            }
        </div>
    );
    ReactDOM.render(template, appRoot);
}
const appRoot = document.getElementById('app');
render();