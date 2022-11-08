import React from 'react';

const ReviewItem = ({ reviews }) => {
    const { review1, review2, reviewImg1, reviewImg2, reviewrname1, reviewrname2} = reviews
    
    return (
        <div className='flex flex-col md:flex-row justify-around mx-auto container'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto container mt-10 mb-10">
                <div className="card-body">
                    <img className='mask mask-squircle w-1/2 mx-auto' src={reviewImg1} alt="" />
                    <h2 className='text-xl font-bold mb-5'>{reviewrname1}</h2>
                    <h2 className="card-title">{review1}</h2>
                   
                </div>
            </div>
            {
                review2 &&  <div className="card w-96 bg-base-100 shadow-xl mx-auto container mt-10 mb-10">
                <div className="card-body">
                    <img className='mask mask-squircle w-1/2 mx-auto' src={reviewImg2} alt="" />
                    <h2 className='text-xl font-bold mb-5'>{reviewrname2}</h2>
                    <h2 className="card-title">{review2}</h2>
                   
                </div>
            </div>
           }
        </div>
    );
};

export default ReviewItem;