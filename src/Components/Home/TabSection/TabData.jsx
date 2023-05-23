import React, { useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TabData = ({ data }) => {

    useEffect(() => {
        AOS.init();
    }, [])

    const { ToyName, Price, ToyPicture, rating, _id } = data;

    return (
        <div className="card w-96 bg-[#fcfcfc]" data-aos="fade-up">
            <figure><img src={ToyPicture} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ToyName}</h2>
                <p className='flex items-center gap-1'>{rating} <FaStar className='text-[#1d1b11]' /></p>
                <p>Price: ${Price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`} className="btn border-none text-white button-second">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TabData;