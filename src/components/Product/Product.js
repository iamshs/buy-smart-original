import React from "react";
import './Product.css'
import { Link, useNavigate } from 'react-router-dom';


const Product = ({ p }) => {
  
  const { gender, image, name, price,_id} = p;
  const navigate = useNavigate()

  const handleProductDetails = id =>{
      navigate(`/productDetails/${id}`)
  }

  return (
    <div className="card bg-white lg:w-72 w-full   shadow-sm p-6 lg:p-1 ">
      <figure className="p-0">
        <img className="lg:h-48 h-64 lg:w-72 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="pl-1 pb-3 mt-1">
        <h2 className="card-title text-xl font-bold text-black">{name}</h2>
        <p className="text-sm font-thin my-1"> {gender} </p>
        <h2 className="text-lg font-semibold"> {price} </h2>
      </div>
      <Link className="bgi-btn text-center py-3 text-white font-bold" to={'/everything'} >BUY NOW</Link>
      <button  onClick={() => handleProductDetails(_id)} className="cart-btn mt-1 mb-1 py-3 font-bold text-center" >VIEW DETAILS</button>
    </div>
  );
};

export default Product;
