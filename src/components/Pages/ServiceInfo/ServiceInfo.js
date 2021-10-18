import { ChevronLeftIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceInfo = () => {
    const { serviceID } = useParams();
    const [services] = useServices();
    const [detailedService, setDetailedService] = useState();
    const history = useHistory();

    useEffect(() => {
        const retrievedService = services?.find(item => item.id.toString() === serviceID);
        setDetailedService(retrievedService);
    }, [services])

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div className="bg-gray-100">
            <div className="container bg-white mx-auto">
                <div className="max-w-screen-lg mx-auto xl:py-16">
                    <div className="py-10 xl:px-0 px-6">
                        <h1 className="text-2xl xl:text-5xl uppercase text-gray-600 mb-3">
                            {detailedService?.title}</h1>
                        <hr />
                        <p className="pt-10 pb-6 xl:text-lg text-gray-500 leading-relaxed">{detailedService?.description.slice(0, 270)}-</p>
                    </div>
                    <div>
                        <img src={detailedService?.image} alt="" />
                    </div>
                    <div className="py-12 xl:px-0 px-6 text-lg text-gray-500 leading-relaxed">
                        <p>{detailedService?.description.slice(250)}</p>
                    </div>
                    <button onClick={handleBack} className="bg-pink-400 px-4 py-1.5 text-white text-lg mb-4"><ChevronLeftIcon className="mr-2 inline-block w-6"></ChevronLeftIcon>Back</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;