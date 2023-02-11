import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import { Rating } from "@mui/material";
const ProductDetails = () => {
  const { id } = useParams();
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../../products.json")
      .then((response) => response.json())
      .then((data) => {
        setArray(data);
        setLoading(false);
      });
  }, []);

  let arr;
  arr = array?.find((ar) => ar._id === id);
  console.log(arr);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <Link to={"/everything"}>
        <div className="flex items-center pl-2 pt-5  ">
          <p className="text-lg mr-1 ">
            <BsArrowLeft />
          </p>
          <p className="font-semibold text-xl hover:text-blue-500 hover:font-bold">
            Continue Shopping
          </p>
        </div>
      </Link>
     
      <section className=" flex flex-col-reverse lg:flex-row items-start justify-around py-20 lg:px-20 md:px-16 px-4 ">
        <div className="lg:max-w-[40%] mt-10 lg:mt-0 ">
         <h1 className="lg:text-6xl md:text-4xl text-3xl font-style font-semibold"> {arr.name} </h1>
         <h2 className="lg:text-5xl md:text-3xl text-2xl text-[#5D7D96] font-style my-6 font-bold"> Price:<span className="text-black"> $</span>{arr.price} </h2>
         <h4 className="lg:text-2xl text-lg md:text-xl mb-3  ">Gender : <span>{arr.gender} </span></h4>
         <Rating name="read-only" size="large" value={arr.rate} readOnly />
         <p className="lg:mt-24 mt-12 text-lg font-semibold">{arr.details} </p>
        
        </div>
        <div className="lg:max-w-[50%] ">
            <img className="lg:w-[30rem] md:w-[25rem] h-[22rem] w-[20rem] md:h-[28rem] lg:h-[35rem] " src={arr.image} alt='' />
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
