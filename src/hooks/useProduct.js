import { useEffect, useState } from "react";




const useProduct = () =>{
    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true)
  
  
    
    useEffect(() => {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
          setLoading(false)
         
        });
    }, []);
    return [products , setProducts]
}

export default useProduct 