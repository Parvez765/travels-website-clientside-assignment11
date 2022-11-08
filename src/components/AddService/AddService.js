import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle("Add Service")
    return (
        <div>
            <h2 className='text-3xl font-bold'>Welcome to Add Service Page</h2>
        </div>
    );
};

export default AddService;