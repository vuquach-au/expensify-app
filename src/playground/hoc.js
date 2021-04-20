import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (

    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedInfoComponent) => {
    return(props) => (

        <div>
            {props.isAdmin && <h3>This is private info. Please don't share</h3>}
        
            <WrappedInfoComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedInfoComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedInfoComponent {...props}/>
            
            ) : (
                 <p>Please login to view the info!!!</p>
            )}
        </div>
    );
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"/>, document.getElementById('app'));