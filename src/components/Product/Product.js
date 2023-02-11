import React from "react";
import './Product.css'
import { Link, useNavigate } from 'react-router-dom';
import Loading from "../Loading/Loading";


const Product = ({ p,loading }) => {
  
  const { gender, image, name, price,_id} = p;
  const navigate = useNavigate()

  const handleProductDetails = id =>{
      navigate(`/productDetails/${id}`)
  }
  if(loading){
    return <Loading />
  }
  return (
    <div className="card bg-white lg:w-76 w-full   shadow-sm p-6 lg:p-1 ">
      <figure className="p-0">
        <img className="lg:h-80 h-64 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="pl-1 pb-3 mt-1">
        <h2 className="card-title font-style text-2xl font-bold text-black">{name}</h2>
        <p className="text-md  my-1"> {gender} </p>
        <h2 className="text-xl font-style font-semibold"> ${price} </h2>
      </div>
      <Link className="bgi-btn text-center py-3 text-white font-bold" to={'/everything'} >BUY NOW</Link>
      <button  onClick={() => handleProductDetails(_id)} className="cart-btn mt-1 mb-1 py-3 font-bold text-center" >VIEW DETAILS</button>
    </div>
  );
};

export default Product;
