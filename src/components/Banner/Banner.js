import React from 'react';
import './Banner.css'
import bg from '../../assets/bg.png'

const Banner = () => {
    return (
        <div className="hero  grid-cols-2 text-center sm-max-w-full  min-h-screen  " 
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content  text-neutral-content ">
          <div className=" max-w-md ">
            <h1 className="mb-5 text-5xl font-bold">DEW DROPS OFFER FOR COLD WINTER</h1>
            <p className="mb-5 text-2xl">25% Off On All Products</p>
            <button className="btn btn-accent text-slate-900 mx-4 rounded-none px-6  font-bold">Get Started</button>
            <button className='border shop-btn font-bold text-sm text-base-100 py-3 px-8'> FIND MORE </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;