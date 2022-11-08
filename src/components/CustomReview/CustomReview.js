import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';

const CustomReview = () => {
    useTitle("Custom Review")
    const { user } = useContext(AuthProvider)
    const allservices = useLoaderData()
    
    console.log(allservices)
    const { name, _id } = allservices
    
    
    

    
    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const img = form.img.value
        const email = form.email.value
        const review = form.review.value
        const time = Date().toString()
        
        const customReview = {
            name, img, email, review, time,
            serviceName: allservices.name,
            
            
        }
        console.log(customReview)
        fetch(`http://localhost:5000/customreview/${_id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                
            },
            body: JSON.stringify(customReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("Thanks For The Review")
                }
            })
        
        
    }

    return (
        <div>
            <h2 className='text-3xl mt-8 mb-8 font-bold'>Welcome To Review Section.<br /> Add Your Review Here</h2>
            <form onSubmit={handleFormSubmit}>
                <div className='mb-10 grid grid-cols-1 md:grid-cols-3 container mx-auto gap-5'>
                <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered input-primary w-full" />
                <input type="text" placeholder="Enter Your Image Link" name="img" className="input input-bordered input-primary w-full" />
                <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered input-primary w-full" defaultValue={user?.email ? user.email : "UnVerified" } readOnly />
                </div>
               
                <textarea className="textarea textarea-primary w-full container mx-auto mb-12" placeholder="Your Review" name="review"></textarea><br/>
                <button className='btn mb-10'>Submit</button>
            </form>
            
        </div>
    );
};

export default CustomReview;