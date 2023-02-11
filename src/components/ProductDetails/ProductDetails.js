import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
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
          <p className="font-semibold hover:text-teal-900 hover:font-bold">
            Continue Shopping
          </p>
        </div>
      </Link>
     
      <section className=" flex items-start justify-around py-20 ">
        <div>
         <h1> {arr.name} </h1>
        </div>
        <div className="max-w-[50%] ">
            <img className="lg:w-[35rem] lg:h-[40rem] " src={arr.image} alt='' />
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
