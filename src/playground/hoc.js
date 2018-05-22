// higher order component (HOC) -  A Component (HOC) that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state 

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

//...props => pass all the props properties to WrappedComponent
const widthAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/> 
        </div>
    );
};

//requireAuthentication, return higher order component
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/> 
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    );
};


const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);



// ReactDOM.render(
//     <AdminInfo isAdmin={false} info="There are the details" />,
//     document.getElementById('app')
// );



ReactDOM.render(
    <AuthInfo isAuthenticated={true} info="There are the details" />,
    document.getElementById('app')
);