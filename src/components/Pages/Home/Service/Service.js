import { ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { id, title, image, description } = props.service;
    const history = useHistory();

    const url = `/service-info/${id}`;

    const handleDetails = () => {
        history.push(url);
    }

    return (
        <div className="flex flex-1 flex-col xl:flex-row border-1 hover:shadow-lg rounded-lg bg-white space-y-4 pb-8 xl:pb-0">
            <img src={image} alt="" className="w-full xl:w-80 h-auto xl:rounded-l-lg" />
            <div className="px-6 text-left">
                <div className="h-3/4 xl:h-2/3">
                    <h2 className="text-lg xl:text-2xl font-bold uppercase">{title}</h2>
                    <p>{description.slice(0, 100)} ...</p>
                </div>
                <button onClick={handleDetails} className="bg-pink-400 px-5 py-2 xl:ml-56 mt-2 xl:mt-0 xl:mt-1 text-white">Details <ChevronRightIcon className="inline-block w-6 animate-ping"></ChevronRightIcon></button>
            </div>

        </div>
    );
};

export default Service;