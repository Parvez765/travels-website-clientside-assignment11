import React from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle("Add Service")

    const handleAddService = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const img = form.img.value
        const price = form.price.value
        const rating = form.rating.value
        const description = form.detail.value

        const services = {
            name, img, price, rating, description
        }
        fetch(`https://assignment11-server-side.vercel.app/allservices`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'Success',
                        title: 'Thanks For Adding A New Service.',
                        showConfirmButton: false,
                        timer: 1500
                      })
            }
        })
    }


    return (
        <div>
            <h2 className='text-3xl font-bold'>Welcome to Add Service Page</h2>
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto mt-12 mb-12'>
                <input type="text" placeholder="Service Name" name="name" className="input input-bordered input-primary w-full" />
                <input type="text"  placeholder="Enter Service Image" name="img" className="input input-bordered input-primary w-full" />
                <input type="number" placeholder="Service Price" name="price" className="input input-bordered input-primary w-full" />
                <input type="number" placeholder="Enter Rating" name="rating" className="input input-bordered input-primary w-full" />
                
                <textarea className="textarea textarea-primary" placeholder="Enter Service Details" name="detail"></textarea>
                </div>
                <button className='btn mb-5'>Add Service</button>
            </form>
        </div>
    );
};

export default AddService;