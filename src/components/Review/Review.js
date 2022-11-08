import React, { useEffect, useState }  from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ReviewItem from './ReviewItem/ReviewItem';

const Review = () => {
    const reviews = useLoaderData()
    useTitle("Review")
    const { review1, reviewImg1, reviewrname1, review2, reviewImg2,reviewrname2, name } = reviews
    console.log(review1, reviews)

    

    return (
        <div>
            <h2 className='text-3xl font-bold mt-8 mb-8'>What Our Happy Clients Says About<br/> {name}</h2>
            {
                <ReviewItem key={reviews._id} reviews={reviews}></ReviewItem>
            }
            <Link to="/"><button className='btn mb-10 mr-10'>Go Home</button></Link>
            <Link to={`/customreview/${reviews._id}`}><button className='btn btn-primary mb-10'>Add Your Review</button></Link>
        </div>
    );
};

export default Review;