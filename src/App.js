import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "../src/components/About/About";
import Navbar from "../src/components/Navbar/Navbar";
import Contact from "./components/Contact/Contact/Contact";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import AddToCart from "./components/AddToCart/AddToCart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Everything from "./components/Everything/Everything";
import { useState } from "react";
import RequireAuth from "./components/Authentication/RequireAuth/RequireAuth";
import { useEffect } from "react";

function App() {
  const [array, setArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        setArray(data);
        setLoading(false);
      });
  }, []);
  const [cartItems, setCartItems] = useState([]);

  const handleAddProducts = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemove = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleAllCartProducts = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Navbar cartItems={cartItems}></Navbar>
      <Routes>
        <Route path="/" element={<Home array={array} loading={loading} > </Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />}></Route>
        <Route
          path="/addToCart"
          element={
            <AddToCart
              cartItems={cartItems}
              handleAddProducts={handleAddProducts}
              handleRemove={handleRemove}
              handleAllCartProducts={handleAllCartProducts}
            />
          }
        ></Route>
        <Route
          path="everything"
          element={
            <RequireAuth>
              <Everything
                array={array}
                loading = {loading}
                handleAddProducts={handleAddProducts}
              ></Everything>
            </RequireAuth>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
