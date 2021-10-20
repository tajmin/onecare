import React from 'react';
import { NavLink } from 'react-router-dom';

import './Banner.css'

const Banner = () => {
    return (
        <div id="top-banner">
            <div className="xl:container mx-auto" >

                <div className="bg-red-500 md:max-w-lg py-6 md:py-20 text-center">
                    <h1 className="text-3xl md:text-5xl text-white font-bold uppercase tracking-wider">emergency</h1>
                    <h2 className="text-xl md:text-3xl pt-5 font-semibold text-white">+1 909 3030 3022</h2>
                </div>
                <div className="backdrop-filter backdrop-blur-sm max-w-lg py-20 text-center">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider font-serif my-3">OneCare</h1>
                    <h2 className="italic font-semibold md:text-2xl text-gray-500 break-words">Specialized in cancer treatement.</h2>
                </div>
                <div className="hidden md:block bg-green-500 max-w-lg py-20 text-center">
                    <h1 className="text-white text-5xl font-bold tracking-wider uppercase pb-4">get vaccinated</h1>
                    <h2 className="text-xl text-gray-200 pb-4">Get COVID vaccine at nearest OneCare facility</h2>
                    <NavLink className="text-xl underline text-blue-600" to="/covid-update">Learn More</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;