import React from 'react';
import { FaTrash, FaUndoAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyReviewList = ({ rev, handleDelete }) => {
    const {_id, img, name, time, review } = rev
    console.log(img)

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/myreview/${id}`, {
            method: "PATCH",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        
    } 
    
    return (
        <div>
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
                            <Link to={`/customreview/${_id}`}><button onClick={()=> handleUpdate(_id)}> <FaUndoAlt></FaUndoAlt></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewList;