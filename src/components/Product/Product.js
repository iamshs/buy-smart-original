import React from "react";

const Product = ({ p }) => {
  console.log(p);
  const { gender,  image, name, price } = p;
  return (
    <div className="card bg-slate-50  ">
      <figure className="p-0">
        <img className="h-64 w-60" src={image} alt="Shoes" />
      </figure>
      <div className="pl-1 pb-3 mt-3">
        <h2 className="card-title text-2xl font-bold text-black">
          {name}
         
        </h2>
        <p className="text-sm font-thin my-2"> {gender} </p>
        <h2 className="text-lg font-semibold"> {price} </h2>
      </div>
    </div>
  );
};

export default Product;
