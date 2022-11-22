import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "../src/components/About/About";
import Header from "../src/components/Header/Header";
import Contact from "./components/Contact/Contact/Contact";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import AddToCart from "./components/AddToCart/AddToCart";
import useProduct from "./hooks/useProduct";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Everything from "./components/Everything/Everything";
import { useState } from "react";


function App() {
 const [products] = useProduct()
 const [cartItems , setCartItems] = useState([]);
 
 const handleAddProducts = product =>{
  const productExist = cartItems.find(item=> item.id === product.id)
  if(productExist){
    setCartItems(cartItems.map((item)=>item.id === product.id ?
     {...productExist , quantity:productExist.quantity+1}:item ))
  }
  else{
    setCartItems([...cartItems,{...product, quantity:1 }])
  }
 }

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home products={products}  > </Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />} ></Route>
        <Route path="/addToCart" element={<AddToCart cartItems={cartItems} 
        handleAddProducts={handleAddProducts} />}></Route>
        <Route path="everything" element={<Everything products={products}
         handleAddProducts={handleAddProducts}   ></Everything>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
