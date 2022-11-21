import React, { useEffect, useState } from "react";
import useProduct from "../../hooks/useProduct";

import Product from "../Product/Product";

const Products = () => {
  const [products] = useProduct()
  console.log(products)

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

      <div className="grid grid-cols-1 lg:grid-cols-3  gap-10">
        {products.slice(0,6).map((p) => (
          <Product key={p.id} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
