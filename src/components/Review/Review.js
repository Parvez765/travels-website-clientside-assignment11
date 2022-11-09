import React, { useContext, useEffect, useState }  from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';
import ReviewItem from './ReviewItem/ReviewItem';

const Review = ({rev}) => {
    const location = useLocation()
   
    const {user} = useContext(AuthProvider)
    useTitle("Review")
    

    

    return (
        <div>
           
            <div>
                {
                    <ReviewItem key={rev._id} rev={rev}></ReviewItem>
                }
          </div>
          
          
        </div>
    );
};

export default Review;