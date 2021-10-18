import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
        <div id="top-banner">
            <div className="xl:container mx-auto" >
                <div>
                    <div className="bg-red-500 max-w-lg py-16 text-center">
                        <h1 className="text-6xl text-white font-bold uppercase tracking-wider">emergency</h1>
                        <h2 className="text-3xl pt-4 font-semibold text-white">+1 909 3030 3022</h2>
                    </div>
                    <div className="bg-transparent max-w-lg py-16 text-center">
                        <h1 className="text-8xl font-bold tracking-wider font-serif my-3">OneCare</h1>
                        <h2 className="italic font-semibold text-2xl text-gray-500">Specialized in cancer treatement.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;