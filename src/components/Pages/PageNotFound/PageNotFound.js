import React from 'react';
import './PageNotFound.css'
import pic from '../../../images/not-found.gif'

const PageNotFound = () => {
    return (
        <div className="container mx-auto">
            <img src={pic} alt="" className="mx-auto py-16" />
        </div>
    );
};

export default PageNotFound;