import React from 'react';

const AllServiceCard = ({ service }) => {
    const {name, img, price, description,rating,  _id} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-left'>Price: {price}</p>
                <p className='text-left'>Description: {description}</p>
                <div className="card-actions justify-end">
               
                </div>
            </div>
    </div>
    );
};

export default AllServiceCard;