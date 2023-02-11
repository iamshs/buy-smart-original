import { useEffect, useState } from "react";




const useProduct = () =>{
    const [array, setArray] = useState([]);
    const [loading , setLoading] = useState(true)
  
  
    
    useEffect(() => {
      fetch("products.json")
        .then((response) => response.json())
        .then((data) => {
          setArray(data);
          setLoading(false)
         
        });
    }, []);
    return [array , setArray , loading]
}

export default useProduct 