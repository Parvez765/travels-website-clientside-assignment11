import React, { useState } from 'react';
import { FaTrash, FaUndoAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyReviewList = ({ rev, handleDelete, getReview }) => {
    const {_id, img, name, time, review } = rev
    console.log(img)

    const [updateReview, setUpdateReview] = useState("")
    console.log(updateReview)

    const handleUpdate = (id) => {
        const reviewMessage= {
            message : updateReview
        }
        
        fetch(`http://localhost:5000/myreview/${id}`, {
            method: "PATCH",
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

           
                

               
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  
                    <div className="modal-action">
                        <textarea className="textarea textarea-primary" placeholder="Update Review" onKeyUp={(event) => setUpdateReview(event.target.value)}></textarea>
                        
                    <label htmlFor="my-modal-6" className="btn" onClick={()=> handleUpdate(_id)}>Yay!</label>
                    </div>
                </div>
                </div>

             <div className="card w-96 bg-base-100 shadow-xl mx-auto container mt-10 mb-10">
                <div className="card-body">
                    <img className='mask mask-squircle w-1/2 mx-auto' src={img} alt="" />
                    <h2 className='text-xl font-bold mb-5'>{name}</h2>
                    <h2 className="card-title mx-auto">{review}</h2>
                    <h2>Review Time : {time}</h2>
                    <div className='flex items-center justify-between mt-5'>
                        <div>
                            <button onClick={()=> handleDelete(_id)}>
                                <FaTrash></FaTrash>
                            </button>
                        </div>
                        <div>
                        <label htmlFor="my-modal-6"><FaUndoAlt/></label>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewList;