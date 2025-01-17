import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    // ACCESS REDUX STORE HERE
    const state = useSelector((state) => state.id);
    let isAuthenticated = state.id;
    return (
        <Route {...rest} render={props => (
            isAuthenticated 
            ? <Component {...props}/>
            : <Redirect to={{
                pathname: "/login",
                state: { from: props.location }
            }} />
        )} />
    );
}


export default ProtectedRoute;
