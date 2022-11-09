import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';
import AllServiceCard from '../AllServiceCard/AllServiceCard';


const AllServices = () => {
    const allservices = useLoaderData()
    useTitle("All Services")
    // console.log(allservices)

    const {loader} = useContext(AuthProvider)
    
    if (loader) {
        return <div className='flex justify-center items-center mb-5'>
            <span class="flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
        </div>
    }
   
    return (
        <div>
            <h2 className='text-4xl font-bold'>List Of My Services</h2>
            <div className='container mx-auto mt-12 justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5'>
                {
                    allservices.map(service => <AllServiceCard key={service._id} service={service}></AllServiceCard>)
                }
            </div>
            <Link to="/">
            <button className='btn mb-10'>Go To Home</button>
            </Link>
        </div>
    );
};

export default AllServices;