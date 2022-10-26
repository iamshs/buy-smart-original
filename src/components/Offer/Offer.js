import React from 'react';
import './Offer.css'
import bg from '../../assets/bgi2.jpg'

const Offer = () => {
    return (
        <div className='offer-bg' style={{ backgroundImage: `url(${bg})` }}>
            <div className='text-center lg:text-left lg:p-20 py-4 px-2 lg:max-w-3xl  text-white'>
                <h3 className='lg:text-2xl text-xl font-bold my-5'>Limited time Offer</h3>
                <h1 className='text-4xl lg:text-6xl font-bold'>Special Edition</h1>
                <p className='font-semibold my-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                    luctus nec ullamcorper mattis, pulvinar dapibus leo. </p>

                    <h2 className='text-xl lg:text-2xl font-bold'>Buy This T-shirt At 20% Discount, Use Code OFF20</h2>
                    <button className=' bgi-btn bg-white font-bold text-sm text-black py-3.5 mt-8 px-9'>
               SHOP NOW </button>
            </div>
        </div>
    );
};

export default Offer;