import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 min-h-screen mt-28 ">
      <h1 className=" text-center text-5xl text-black font-semibold subpixel-antialiased py-20">
        
        Featured Products
      </h1>
      <hr className="w-25" />
    </div>
  );
};

export default Products;
