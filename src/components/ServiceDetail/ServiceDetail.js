import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import Review from '../Review/Review';
import ReviewItem from '../Review/ReviewItem/ReviewItem';

const ServiceDetail = () => {
    const allservices = useLoaderData()
    console.log(allservices)
    const { user } = useContext(AuthProvider)
    useTitle("Service Details")

    const [reviews, setReviews] = useState([])
    
    
    const handleReview = () => {
        if (!user?.email) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please Login To Add A Review',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    

    const getReview = () => {

        fetch(`https://assignment11-server-side.vercel.app/servicereview?serviceName=${allservices?.name}`)
        
            .then(res => res.json())
            .then(data => setReviews(data))
        
    }

    useEffect(() => {
        getReview()
    }, [allservices?.name])
   
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
                   
                    </div>
                </div>
            </div>
            <h2 className='text-3xl font-bold mt-8 mb-8'>What Our Happy Clients Says About<br/> Our Service</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                reviews?.map(rev => <Review key={rev._id} rev={rev}></Review>)
           }
            </div>
            <Link to="/"><button className='btn mb-10 mr-10'>Go Home</button></Link>
            <div>
            
                <Link to={`/customreview/${allservices._id}`}><button onClick={handleReview} className='btn btn-primary mb-10'>Add Your Review</button></Link> 
            
            </div>
        </div>
    );
};

export default ServiceDetail;