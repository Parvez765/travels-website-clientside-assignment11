import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthProvider)
    if (user && user?.email) {
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;