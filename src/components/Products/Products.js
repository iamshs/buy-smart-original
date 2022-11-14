import React, { useEffect, useState } from "react";

import Product from "../Product/Product";

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
    <div className="bg-gradient-to-r from-slate-100 to-slate-100 min-h-screen pt-5 lg:pt-16 pb-10 lg:pb-20">
      <h1
        className=" text-center text-3xl lg:text-5xl text-black font-semibold subpixel-antialiased 
      pt-10  lg:pt-16"
      >
        Featured Products
      </h1>

      <div className="flex items-center justify-center py-6 lg:py-10">
        <div style={{ height: "2px" }} className="bg-sky-600 w-32"></div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4  gap-10">
        {products.slice(0,8).map((p) => (
          <Product key={p.id} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
