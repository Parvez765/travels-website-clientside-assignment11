import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceCard from '../AllServiceCard/AllServiceCard';


const AllServices = () => {
    const allservices = useLoaderData()
    console.log(allservices)
   
    return (
        <div>
            <h2 className='text-4xl font-bold'>List Of Our Services</h2>
            <div className='container mx-auto mt-12 justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-5'>
                {
                    allservices.map(service => <AllServiceCard key={service._id} service={service}></AllServiceCard>)
                }
           </div>
        </div>
    );
};

export default AllServices;