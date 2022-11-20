import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Everything = ({ products }) => {
    const navigate = useNavigate()
    const handleProductDetails = id =>{
        navigate(`/productDetails/${id}`)
    }
  return (
    <div>
      <h2 className="text-3xl font-bold pt-16 ml-2 text-center">
        Scroll to visit all Products
      </h2>
      <div className="flex items-center justify-center ml-2 mb-14 py-2 lg:py-4">
        <div style={{ height: "3px" }} className="bg-sky-600 w-32"></div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 p-4 bg-slate-200">
        {products.map((p) => (
          <div key={p.id} className="card bg-white  shadow-sm p-10 lg:p-1">
            <figure className="p-0">
              <img
                className="lg:h-64 h-96 lg:w-full w-96"
                src={p.image}
                alt="Shoes"
              />
            </figure>
            <div className="pl-1 pb-3 mt-3">
              <h2 className="card-title text-2xl font-bold text-black">
                {p.name}
              </h2>
              <p className="text-sm font-thin my-1"> {p.gender} </p>
              <h2 className="text-lg font-semibold"> {p.price} </h2>
            </div>
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star checked"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star"
                checked
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star checked"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star checked"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star checked"
              />
            </div>
            <p>
              <button
                className="cart-btn mt-2 mb-3 py-4 w-full font-bold text-center"
                onClick={() => handleProductDetails(p.id)}
              >
             BUY NOW
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Everything;
