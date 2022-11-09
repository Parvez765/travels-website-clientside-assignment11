import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`https://assignment11-server-side.vercel.app/services`)
            .then(res => res.json())
            .then(data => setServices(data))
        
    }, [])

    return (
        <div className='mt-16'>
            <h2 className='font-bold text-4xl'>My Services</h2>
            <div className='grid md:grid-cols-3 gap-8 justify-center container mx-auto mt-12 mb-12'>
                {
                    !services ?  <div className='flex justify-center items-center mb-5'>
                            <span class="flex h-3 w-3">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                            </span>
                        </div>
                     
                    : services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

                
            </div>
            <Link to="/allservices">
                <button className="btn mb-5">See All Services</button>
            </Link>
        </div>
    );
};

export default Services;