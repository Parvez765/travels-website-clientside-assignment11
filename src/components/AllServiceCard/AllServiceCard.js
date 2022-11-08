import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AllServiceCard = ({ service }) => {
    const {name, img, price, description, rating,  _id} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
             <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt=""/>
                </PhotoView>
            </PhotoProvider>
            
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-left'>Price: {price}</p>
                <p className='text-left'>Description: {description.slice(0, 100)+ "..."}</p>
                <div className="card-actions justify-end">
                    <Link to={`/allservices/${_id}`}>
                    <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
    </div>
    );
};

export default AllServiceCard;