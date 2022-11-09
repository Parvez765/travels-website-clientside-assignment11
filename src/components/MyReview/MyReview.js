import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';
import MyReviewList from './MyReviewList/MyReviewList';


const MyReview = () => {
    useTitle("My Review")

   
    const { user } = useContext(AuthProvider)
    
    
    const [reviews, setReviews] = useState([])

    const getReview = () => {

        fetch(`https://assignment11-server-side.vercel.app/customreview?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem("accesToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
        
    }

    useEffect(() => {
        getReview()
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are You Sure You Want To Delete")
        if (proceed) {
            fetch(`https://assignment11-server-side.vercel.app/deletereview/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Delet Complete")
                        const remaining = reviews.filter(review => review._id !== id)
                        setReviews(remaining)
                    }
                })
            
        }
    }

    const handleUpdate = (id, updateReview) => {
        console.log("This is",id)
        const reviewMessage= {
            message : updateReview
        }
        
        fetch(`https://assignment11-server-side.vercel.app/updatereview/${id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(reviewMessage)
        })
            .then(res => res.json())
            .then(data => getReview())
        
    } 

    return (
        <div>
            
            {
                reviews.length === 0 ?  <h2 className='text-2xl font-bold'>No Review Found</h2> : <h2 className='text-2xl font-bold'>You Have {reviews.length} Reviews</h2>
            } 
            <div>
                {
                    reviews?.map(rev => <MyReviewList key={rev._id} rev={rev} handleDelete={handleDelete} handleUpdate={handleUpdate} getReview={getReview}></MyReviewList>)
                }
                
            </div>
        </div>
    );
};

export default MyReview;