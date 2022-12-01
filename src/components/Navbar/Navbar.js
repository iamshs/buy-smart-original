import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";


const Navbar = ({ cartItems }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  

  const menuItems = (
    <>
      <li className="text-lg font-bold">
        <Link to={"/"}>HOME</Link>
      </li>
      <li className="text-lg font-bold">
        <Link to={"/everything"}>EVERYTHING</Link>
      </li>
      <li className="text-lg font-bold">
        <Link to={"/about"}>ABOUT</Link>
      </li>
      <li className="text-lg font-bold">
        <Link to={"/contact"}>CONTACT</Link>
      </li>
    
      <li className="text-lg font-bold">
        {user ? (
          <button onClick={logout}>
           <span className="text-3xl"> <RiLogoutCircleLine/></span>
          </button>
        ) : (
          <Link to="/login">
            <span className="text-3xl "> <FaUserCircle/> </span>
          </Link>
        )}
      </li>

      <li>
        {user ? (<p className="text-lg font-bold text-yellow-200"> {user.displayName} </p>) :""}
      </li>
     

    </>
  );
  return (
    <div className="navbar text-white bg-opacity-75 nav">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact nav dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost font-extrabold normal-case text-3xl"
        >
          Buy SMART
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end lg:mr-6 ">
        {
          user && (<Link to={"/addToCart"}>
          <div className="flex items-center">
            <span className=" text-4xl">
              <BsCartCheckFill />
            </span>
            <span className="badge badge-md badge-ghost font-bold">
              {" "}
              {cartItems.length === 0 ? "" : cartItems.length}
            </span>
          </div>
        </Link>)
        }
      </div>
    </div>
  );
};

export default Navbar;
