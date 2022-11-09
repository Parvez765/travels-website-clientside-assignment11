import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';


const PrivateRoute = ({children}) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthProvider)

    if (loading) {
        return <div className='flex justify-center items-center mb-5'>
            <span class="flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
        </div>
     
    }

    if (user && user?.email) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;