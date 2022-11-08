import React from 'react';
import { FaTrash } from 'react-icons/fa';


const MyReviewList = ({ rev, handleDelete }) => {
    const {_id, img, name, time, review } = rev
    console.log(img)

    
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl mx-auto container mt-10 mb-10">
                <div className="card-body">
                    <img className='mask mask-squircle w-1/2 mx-auto' src={img} alt="" />
                    <h2 className='text-xl font-bold mb-5'>{name}</h2>
                    <h2 className="card-title mx-auto">{review}</h2>
                    <h2>Review Time : {time}</h2>
                    <button onClick={()=> handleDelete(_id)}>
                        <FaTrash></FaTrash>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewList;