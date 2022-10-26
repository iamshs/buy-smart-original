import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Card />
            <Products />
            <Offer />
        </div>
    );
};

export default Home;