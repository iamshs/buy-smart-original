import React from 'react';
import { Link } from 'react-router-dom';

const SaleOffer = () => {
    return (
        <div>
          <h1 className='font-bold text-xl lg:text-2xl 
          text-black py-8 shadow-sm border border-gray-300 pl-8 hover:text-sky-800 '>
            <Link>SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</Link>
          </h1>
        </div>
    );
};

export default SaleOffer;