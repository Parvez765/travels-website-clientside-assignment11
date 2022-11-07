import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetail = () => {
    const allservices = useLoaderData()
   
    return (
        <div>
            <h2 className='text-4xl font-bold'>Thanks For Choosing<br /> {allservices.name}</h2>
            <div className="card w-96 bg-base-100 shadow-xl container mx-auto mt-12">
                <PhotoProvider>
                    <PhotoView src={allservices.img}>
                    <figure><img src={allservices.img} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
               
                <div className="card-body">
                    <h2 className="card-title">{allservices.name}</h2>
                    <p className='text-left'>Price: {allservices.price}</p>
                    <p className='text-left'>Description: {allservices.description}</p>
                    <p className='text-left'>Rating: {allservices.rating}</p>
                    <div className="card-actions justify-end">
                        <Link to="/allservices">
                        <button className="btn mr-10">See All Services</button>
                        </Link>
                    <button className="btn btn-primary">See Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;