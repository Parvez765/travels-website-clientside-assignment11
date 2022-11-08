import React from 'react';
import "./Home.css"
import img1 from "../../images/Img1-01.jpg"
import img2 from "../../images/img2-01.jpg"
import img3 from "../../images/img3-01.png"
import img4 from "../../images/Img4-01.jpg"
import Services from '../Services/Services';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <div className='grid md:grid-cols-2 mt-12 items-center justify-center'>
                <div>
                    <h2 className='text-3xl font-bold mb-6'>Welcome To<br /> <span className='text-5xl text-blue-800'>Your Desire Destination</span></h2>
                    <p className='text-xl font-bold mb-5'>Take Service From Us<br/> What Ever You Want</p>
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
            <div>
                <h2 className='mt-16 font-bold text-3xl'>About Us</h2>
                <h2 className='mt-5 mb-3 text-xl font-semibold'>TravelsCare is a travel company that is on an endless journey <br/>to make your travel experiences happier with tech-driven innovations.</h2>
                <h2 className='mt-5 mb-3 text-xl font-semibold'>We Are inspired by the explorers like you, who go every day with the passion of discovering the unseen.<br/> Wherever you want to travel, find hotels, flights, buses, tours, and more in TravelsCare and get ready for your explorations.<br/><br/>
                So, what are you waiting for?</h2>
            </div>
            <Services></Services>
            <div className='mt-16 bg-blue-600 w-3/4 conatiner mx-auto p-14 rounded-lg mb-10'>
                <h2 className='font-bold text-2xl text-white'>Subscribe Our News Letter</h2>
                <input type="text" className='mt-5 mr-4 px-10 py-3 rounded-lg' placeholder='Enter Your Email' />
                <button className='btn'>Subscribe</button>
            </div>
        </div>
    );
};

export default Home;