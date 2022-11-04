import React from 'react';
import './Login.css'
import authBg from '../../../assets/auth.jpg'
import { Link } from 'react-router-dom';

const Login = () => {


 const handleLogin = e =>{
    e.preventDefault()
 }


    return (
        <div className='login-bg flex justify-center items-center  '>

            <div className='login-form lg:m-12 m-16 p-6 lg:p-12 '>
              <h1 className='lg:text-4xl text-2xl font-bold text-white mb-5'>LOG IN</h1>
              <form onSubmit={handleLogin} className=' flex flex-col'>

                <input type={'email'} className='auth-input mb-3' placeholder='Your Email..' />
                <input type={'password'} className='auth-input ' placeholder='Your Password..' />
                <input type={'submit'} className='auth-submit text-xl font-bold py-2 mt-4' value='Sign In' />

              </form>
            
            <p className='text-white mt-2'>Not a member?
              <span className='font-semibold text-black register'>
              <Link to={'/register'} >Register Now</Link>
                </span> </p>

            </div>
            
        </div>
    );
};

export default Login;