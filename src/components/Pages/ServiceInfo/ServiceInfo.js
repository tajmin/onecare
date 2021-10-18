import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServiceInfo = () => {
    const { serviceID } = useParams();
    const [services] = useServices();
    const [detailedService, setDetailedService] = useState();
    console.log(serviceID);

    useEffect(() => {
        const retrievedService = services?.find(item => item.id.toString() === serviceID);
        setDetailedService(retrievedService);
    }, [services])

    return (
        <div className="bg-gray-100">
            <div className="container bg-white mx-auto">
                <div className="max-w-screen-lg mx-auto xl:py-16">
                    <div className="xl:py-10">
                        <h1 className="text-2xl xl:text-5xl uppercase text-gray-600 mb-3">
                            {detailedService?.title}</h1>
                        <hr />
                        <p className="xl:pt-10 pb-6 text-lg text-gray-500 leading-relaxed">{detailedService?.description.slice(0, 199)}-</p>
                    </div>
                    <div>
                        <img src={detailedService?.image} alt="" />
                    </div>
                    <div className="xl:py-12 text-lg text-gray-500 leading-relaxed">
                        <p>{detailedService?.description.slice(200)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;