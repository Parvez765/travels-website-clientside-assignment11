import React from 'react';
import "./Home.css"
import img1 from "../../images/Img1-01.jpg"
import img2 from "../../images/img2-01.jpg"
import img3 from "../../images/img3-01.png"
import img4 from "../../images/Img4-01.jpg"

const Home = () => {
    return (
        <div className='grid md:grid-cols-2 mt-12 items-center justify-center'>
            <div>
                <h2 className='text-3xl font-bold mb-6'>Welcome To<br /> <span className='text-5xl text-blue-800'>Your Desire Destination</span></h2>
                <p className='text-xl font-bold mb-5'>Take Service From Us<br/> And Make Your Tour Memorable</p>
                <button className="btn mb-8">Services</button>
            </div>
            <div>
            <div className="h-96 carousel carousel-vertical rounded-box">
                <div className="carousel-item h-full">
                        <img src={img1} alt="" />
                </div> 
                <div className="carousel-item h-full">
                        <img src={img2} alt=""/>
                </div> 
                <div className="carousel-item h-full">
                        <img src={img3} alt=""/>
                </div> 
                <div className="carousel-item h-full">
                        <img src={img4} alt="" />
                </div> 
               </div>
            </div>
        </div>
    );
};

export default Home;