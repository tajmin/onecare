import React from 'react';
import Banner from '../Banner/Banner';
import OnDemandApp from '../OnDemandApp/OnDemandApp';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OnDemandApp></OnDemandApp>
            <Services></Services>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;