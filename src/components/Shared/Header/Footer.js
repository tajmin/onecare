import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="bg-gray-800">
            <div className="container flex flex-col md:flex-row mx-auto p-16">
                <div className="flex flex-col flex-grow">
                    <h1 className="text-lg text-green-500 py-3">Quick Links</h1>
                    <NavLink className="text-gray-300 pb-2" to="/home">Home</NavLink>
                    <NavLink className="text-gray-300 pb-2" to="/about">About</NavLink>
                    <NavLink className="text-gray-300 pb-2" to="/covid-update">COVID Update</NavLink>
                </div>
                <div className="flex flex-col flex-grow">
                    <h1 className="text-lg text-green-500 py-3">Company</h1>
                    <NavLink className="text-gray-300 pb-2" to="/">Press</NavLink>
                    <NavLink className="text-gray-300 pb-2" to="/">Disclaimer</NavLink>
                    <NavLink className="text-gray-300 pb-2" to="/">Privacy Policy</NavLink>
                </div>
                <div className="flex flex-auto">
                    <h1 className="text-lg text-green-500 py-3">Get Connected</h1>

                </div>
            </div>
        </div>
    );
};

export default Footer;