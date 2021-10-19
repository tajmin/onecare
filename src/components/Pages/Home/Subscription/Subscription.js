import React from 'react';

const Subscription = () => {
    return (
        <div className="bg-pink-400 flex">
            <div className="m-auto py-16 w-2/3 md:w-1/4">
                <h1 className="text-xl md:text-3xl text-center mb-4 text-white">Subscribe to Our Newsletter</h1>
                <p className="text-xl text-gray-700 mb-8 text-center">Stay Updated on Latest Cancer Breakthrough</p>
                <input className="w-full py-2 px-4 rounded" type="email" placeholder="Enter your email here" />
            </div>
        </div>
    );
};

export default Subscription;