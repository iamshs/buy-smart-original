import React from "react";
import './Card.css'
import card1 from "../../assets/card-1.jpg";
import card2 from "../../assets/card-2.jpg";
import card3 from "../../assets/card-3.jpg";

const Card = () => {
  return (
    <div>
      <div className=" gap-4 grid lg:grid-cols-3 grid-cols-1 mx-5 lg:mx-20  mt-5 mb-20 lg:mb=40 lg:mt-10">
        {/* card--1 */}
        <div className="card shadow-xl image-full">
          <figure className="" >
            <img   src={card1} alt="Shoes" />
          </figure>
          <div className="card-body  card-text">
          
            <div className="card-actions ">
            <h2 className="card-title text-3xl fw-bold text-white">20% Off On Tank Tops</h2>
            <p className="text-white text-md my-3">If a dog chews shoes whose shoes does he choose?</p>
            <button className=' card-btn bg-white font-bold text-sm text-black py-3.5 mt-2 lg:mt-0 px-9'>
               SHOP NOW </button>
            </div>
          </div>
        </div>
        {/* card----2 */}

        <div className="card shadow-xl image-full">
          <figure className="" >
            <img   src={card2} alt="Shoes" />
          </figure>
          <div className="card-body  card-text">
          
            <div className="card-actions ">
            <h2 className="card-title text-3xl fw-bold text-white">Latest Eyewear For You</h2>
            <p className="text-white text-md my-3">If a dog chews shoes whose shoes does he choose?</p>
            <button className=' card-btn bg-white font-bold text-sm text-black py-3.5 mt-2 lg:mt-0 px-9'>
               SHOP NOW </button>
            </div>
          </div>
        </div>

        {/* card----3 */}
        <div className="card shadow-xl image-full">
          <figure className="" >
            <img   src={card3} alt="Shoes" />
          </figure>
          <div className="card-body  card-text">
          
            <div className="card-actions ">
            <h2 className="card-title text-3xl fw-bold text-white">Let's Lorem Suit Up!</h2>
            <p className="text-white text-md my-3">If a dog chews shoes whose shoes does he choose?</p>
            <button className=' card-btn bg-white font-bold text-sm text-black py-3.5 mt-2 lg:mt-0 px-9'>
               CHECK OUT </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Card;
