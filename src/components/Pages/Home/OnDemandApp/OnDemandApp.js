import { ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import app from '../../../../images/app.png'
import apple from '../../../../images/app-store-badge.svg'
import android from '../../../../images/google-play-badge.svg'

const OnDemandApp = () => {
    return (
        <div className="bg-blue-50">
            <div className="container mx-auto flex p-10 md:p-20 gap-x-16">
                <div className="xl:block hidden">
                    <img src={app} alt="" />
                </div>
                <div className="flex-1 xl:px-10">
                    <h1 className="text-4xl pb-8 font-bold">OneCare, On demand.</h1>
                    <p>Get convenient care from home for COVID-19 concerns, cold/flu, UTI, seasonal allergies, minor injuries and more. We offer multiple options for in-person and virtual care, including on-demand video visits. To get started, download the My OneCare app or click the learn more button below.</p>

                    <button className="bg-pink-400 px-5 py-2 mt-4 mb-16 text-white">Learn More <ChevronRightIcon className="inline-block w-6 animate-ping"></ChevronRightIcon></button>
                    <hr />
                    <div className="flex md:space-x-8 mt-8 pb-4">
                        <img className="w-1/2 h-11 md:w-auto md:h-full" src={apple} alt="" />
                        <img className="w-1/2 h-11 md:w-auto md:h-full" src={android} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnDemandApp;