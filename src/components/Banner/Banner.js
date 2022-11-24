import React from "react";
import "./Banner.css";
import bg from "../../assets/bg.jpg";


const Banner = () => {
  return (
    <div className="header-bg  " style={{ backgroundImage: `url(${bg})` }} >
      
      <h1 className=" font-bold  lg:text-5xl text-3xl text-white lg:max-w-2xl lg:pt-28 pl-6 ">
        Dewdrops Offers For
      </h1>
      <h1 className=" font-bold  lg:text-5xl text-3xl text-white max-w-lg lg:py-8 py-4 pl-6 ">
        Cold Winter!
      </h1>
   
   <h2 className="font-bold text-xl lg:text-2xl text-white pl-6 lg:py-8 py-4 ">25% Off On All Products</h2>
   <button className="bgi-btn text-base-100 mx-4 py-3.5 px-9 rounded-none px-8 lg:mb-20 mt-10 font-bold">
    Get Started
  </button>
  <button className="border shop-btn font-bold text-sm text-black bg-white py-3.5 mb-20 mt-10  px-9">
    {" "}
    FIND MORE{" "}
  </button>

    </div>
  );
};

export default Banner;
