import React from 'react';
import './Offer.css'
import bgi from '../../assets/bgi.jpg'

const Offer = () => {
    return (
        <div className='offer-bg'  style={{ backgroundImage: `url(${bgi})` }}>
            <div className='text-center lg:text-left lg:p-20 py-4 px-2 lg:max-w-3xl  text-black'>
                <h3 className='lg:text-2xl text-md font-bold my-5'>Limited time Offer</h3>
                <h1 className='text-xl lg:text-6xl font-bold text-yellow-300 offer-text'>Special Edition</h1>
                <p className='font-semibold my-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>

                    <h2 className='text-md lg:text-2xl font-bold text-yellow-400 lg:text-white offer-percent'>Buy This T-Shirt At 20% Discount, Use Code OFF20</h2>
                    <button className=' bgi-btn  font-bold text-sm text-white py-3.5 mt-8 px-9'>
               SHOP NOW </button>
            </div>
        </div>
    );
};

export default Offer;