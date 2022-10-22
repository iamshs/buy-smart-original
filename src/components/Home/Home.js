import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Card />
            <Products />
        </div>
    );
};

export default Home;