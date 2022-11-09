import React, { useEffect, useState } from 'react';

const ReviewItem = ({ rev }) => {
    console.log(rev)
    // const { review1, review2, reviewImg1, reviewImg2, reviewrname1, reviewrname2 } = reviews
    const { img, review, serviceName, name } = rev
    
    
    
    
    
    return (
        <div className='flex flex-col md:flex-row justify-around mx-auto container'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto container mt-10 mb-10">
                <div className="card-body">
                    <img className='mask mask-squircle w-1/2 mx-auto' src={img} alt="" />
                    <h2 className="card-title block text-center">{name}</h2>
                    <h2 className="card-title block text-center">{serviceName}</h2>
                    <h2 className='text-xl font-bold mb-5'>{review}</h2>
                   
                </div>
            </div>
           
           
        </div>
    );
};

export default ReviewItem;