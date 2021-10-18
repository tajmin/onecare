import React from 'react';
import useServices from '../../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();


    return (
        <div id="services">
            <div className="bg-pink-50 pt-8 pb-12">
                <h1 className="text-2xl lg:text-5xl text-center pb-10 pt-8 xl:pt-14">Our Services</h1>
                <div className="container mx-auto lg:my-12">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 p-10 shadow-lg rounded-xl bg-blue-50">
                        {
                            services?.map(service => <Service
                                key={service.id}
                                service={service}
                            >
                            </Service>)
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Services;