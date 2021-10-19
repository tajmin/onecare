import { ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import './CovidUpdate.css'
import img1 from '../../../images/vaccine.jpg'
import img2 from '../../../images/test.jpg'
import img3 from '../../../images/restriction.jpg'
import img4 from '../../../images/faq.jpg'

const CovidUpdate = () => {
    return (
        <div>
            <div id="main-container" className="flex text-center">
                <div className="m-auto">
                    <h1 className="text-3xl xl:text-5xl text-white font-bold">Get Latest Updates on COVID-19 </h1>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-16 bg-gray-100">
                    <div className="flex flex-1 flex-col hover:shadow-lg bg-white pb-2 xl:pb-0">
                        <img src={img1} alt="" className="w-full h-auto" />
                        <div className="px-4 py-6 text-left md:space-y-4">
                            <div className="py-4">
                                <h2 className="text-lg xl:text-2xl font-bold uppercase pb-4">Latest Vaccine Updates</h2>
                                <p>Learn more about vaccination program in your state, schedules and eligibility.</p>
                            </div>
                            <button className="bg-pink-400 px-5 py-2 mt-2 xl:mt-1 text-white">Details <ChevronRightIcon className="inline-block w-6 animate-ping"></ChevronRightIcon></button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col hover:shadow-lg  bg-white pb-2 xl:pb-0">
                        <img src={img2} alt="" className="w-full h-auto" />
                        <div className="px-4 py-6 text-left md:space-y-4">
                            <div className="py-4">
                                <h2 className="text-lg xl:text-2xl font-bold uppercase pb-4">Get COVID-19 Tested</h2>
                                <p>COVID-19 testing facilities, drive-by testing, rapid testing info all in one place.</p>
                            </div>
                            <button className="bg-pink-400 px-5 py-2 mt-2 xl:mt-1 text-white">Details <ChevronRightIcon className="inline-block w-6 animate-ping"></ChevronRightIcon></button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col hover:shadow-lg  bg-white pb-2 xl:pb-0">
                        <img src={img3} alt="" className="w-full h-auto" />
                        <div className="px-4 xl:py-6 text-left md:space-y-4">
                            <div className="py-4">
                                <h2 className="text-lg xl:text-2xl font-bold uppercase pb-4">Govt. Imposed Regulations</h2>
                                <p>Avoid getting fined. Get updates on your local COVID-19 regulations</p>
                            </div>
                            <button className="bg-pink-400 px-5 py-2 mt-2 xl:mt-1 text-white">Details <ChevronRightIcon className="inline-block w-6 animate-ping"></ChevronRightIcon></button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col hover:shadow-lg  bg-white pb-2 xl:pb-0">
                        <img src={img4} alt="" className="w-full h-auto" />
                        <div className="px-4 py-6 text-left md:space-y-4">
                            <div className="py-4">
                                <h2 className="text-lg xl:text-2xl font-bold uppercase pb-4">FAQ & Recommendations</h2>
                                <p>Give us a call. 24/7. We're here for you.</p>
                            </div>
                            <button className="bg-pink-400 px-5 py-2 mt-2 xl:mt-1 text-white">Details <ChevronRightIcon className="inline-block w-6 animate-ping"></ChevronRightIcon></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CovidUpdate;