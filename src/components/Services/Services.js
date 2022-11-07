import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => setServices(data))
        
    }, [])

    return (
        <div className='mt-16'>
            <h2 className='font-bold text-4xl'>Our Services</h2>
            <div className='grid md:grid-cols-3 gap-8 justify-center container mx-auto mt-12 mb-12'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <Link to="/allservices">
                <button className="btn mb-5">See All Services</button>
            </Link>
        </div>
    );
};

export default Services;