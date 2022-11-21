import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();


    ////to prevent going Login page while reloading the ProtectedRoute!
    ////it's value is True until the Observer finishes all the task! it just keep returning(by 'return' keyword) "Loading.." and waiting for 'false' value from the Observer's last line!
    const {isLoading} = useAuth();
    if(isLoading){
        return (<h4>Loading.. <Spinner animation="border" variant="primary" /></h4>);
    };


    //// creating ProtectedRoute! checking whether an user is found and taking decision which component to show based on the result!
    if (user?.email) {
        return children;
    }
    else {
        return (<Navigate to='/login'
            state={{ from: location }} replace></Navigate>)
    };


};

export default ProtectedRoute;