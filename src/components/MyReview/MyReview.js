import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../context/AuthContext';
import useTitle from '../../hooks/useTitle';
import MyReviewList from './MyReviewList/MyReviewList';


const MyReview = () => {
    useTitle("My Review")

    const {user} = useContext(AuthProvider)
    
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/cutomreview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accesToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
        
    }, [user?.email])

    const handleDelete = (_id) => {
        const proceed = window.confirm("Are You Sure You Want To Delete")
        if (proceed) {
            fetch(`http://localhost:5000/myreview/${_id}`, {
                method : "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Delet Complete")
                        const remaining = reviews.filter(review => review._id !== _id)
                        setReviews(remaining)
                    }
                })
            
        }
    }
    return (
        <div>
            {
                reviews ? <h2 className='text-2xl font-bold'>You Have {reviews.length} Reviews</h2> : "No Review Found"
            } 
            <div>
                {
                    reviews.map(rev => <MyReviewList key={rev._id} rev={rev} handleDelete={handleDelete}></MyReviewList>)
                }
                
            </div>
        </div>
    );
};

export default MyReview;