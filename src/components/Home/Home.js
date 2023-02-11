import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Offer from '../Offer/Offer';
import Products from '../Products/Products';
import Service from '../Service/Service';


const Home = ({array , loading}) => {
    return (
        <div>
            <Banner />
            <Card />
            <Products array={array} loading ={loading} />
            <Offer />
            <Service />
        </div>
    );
};

export default Home;