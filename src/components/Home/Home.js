import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Card />
            <Products />
            <Offer />
            <Service />
        </div>
    );
};

export default Home;