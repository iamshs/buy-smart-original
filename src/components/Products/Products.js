import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 min-h-screen mt-28 ">
      <h1 className=" text-center text-5xl text-black font-semibold subpixel-antialiased py-20">
        
        Featured Products
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {
          products.map(p=> <Product
          key={p.id}
          p={p}
          >

          </Product>)
        }
      </div>
      
    </div>
  );
};

export default Products;
