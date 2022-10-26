import React from "react";
import { DynamicStar } from "react-dynamic-star";

const Product = ({ p }) => {
  
  const { gender, image, name, price } = p;
  return (
    <div className="card bg-slate-50 p-10 lg:p-2 ">
      <figure className="p-0">
        <img className="lg:h-64 h-96 lg:w-60 w-96" src={image} alt="Shoes" />
      </figure>
      <div className="pl-1 pb-3 mt-3">
        <h2 className="card-title text-2xl font-bold text-black">{name}</h2>
        <p className="text-sm font-thin my-2"> {gender} </p>
        <h2 className="text-lg font-semibold"> {price} </h2>
      </div>
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star checked" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
        <input type="radio" name="rating-1" className="mask mask-star checked" />
        <input type="radio" name="rating-1" className="mask mask-star checked" />
        <input type="radio" name="rating-1" className="mask mask-star checked" />
      </div>
    </div>
  );
};

export default Product;
