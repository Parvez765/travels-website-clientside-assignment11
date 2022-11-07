import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const {name, img, price, description, _id} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src="/1.jpg">
                <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
           
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-left'>Price: {price}</p>
                <p className='text-left'>{description.slice(0, 100)+ "..."}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;