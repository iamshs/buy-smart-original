import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { FaUserCircle } from 'react-icons/fa';
import {BsCartCheckFill} from 'react-icons/bs';
import { RiLogoutCircleFill } from 'react-icons/ri';

const Header = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate ()
  const logout =()=>{
    signOut(auth)
    navigate('/login')
   
    
  }

  const menuItems = (
    <>

    <li className='text-lg font-bold'>
      <Link to={'/'}  >HOME</Link>
    </li>
    <li className='text-lg font-bold'>
      <Link to={'/about'} >ABOUT</Link>
    </li>
    <li className='text-lg font-bold'>
      <Link to={'/contact'} >CONTACT</Link>
    </li>
    <li className='text-3xl font-bold'>
      <Link to={'/addToCart'} >
        <span> <BsCartCheckFill />  </span>
        
      </Link>
    </li>
    <li className='text-3xl'>
    {user ? <button   onClick={logout} >
      <RiLogoutCircleFill/>
    </button> : <Link to="/login">
      <span > <FaUserCircle/> </span>
      </Link>}
     
    </li>

    </>
  )

    return (
        <div className="navbar text-white bg-opacity-75 nav ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case font-extrabold italic lg:text-4xl text-xl">buySMART</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
           {menuItems}
          </ul>
        </div>
       
      </div>
    );
};

export default Header;