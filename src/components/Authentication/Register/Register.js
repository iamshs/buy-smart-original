import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'

import { Toaster , toast } from 'react-hot-toast';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
       
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
      const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);

    const [userInfo , setUserInfo] = useState ({
        email: "",
        pass:  "",
        confirmPass: "",
    })  ;

    const [errors , setErrors] = useState({
        email: "",
        pass : "",
        confirmPass : "",
        })
        // handle---email
    const handleEmail =e =>{
       const emailRegex = /\S+@\S+\.\S+/ ;
       const validEmail = emailRegex.test(e.target.value);
       if (validEmail){
        setUserInfo({...userInfo , email: e.target.value})
        setErrors({...errors , email:""})
       }
       else{
        setErrors({...errors , email:'Your Email is not Valid' })
        setUserInfo({...userInfo , email:""})
        
       }

    }
// handle----pass
    const handlePass = e =>{
    const passRegex = /.{8,}/ ;   
    const validPass = passRegex.test(e.target.value);
    if(validPass){
        setUserInfo({...userInfo , pass:e.target.value})
        setErrors({...errors , pass:""});
    } 
    else{
        setErrors({...errors , pass:'Your Password must be at least 8 character'})
        setUserInfo({...userInfo , pass:""});
    }
    }
//handle--confirm--pass
    const handleConfirmPass = e =>{
        if (e.target.value === userInfo.pass) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value })
            setErrors({ ...errors, confirmPass: "" })
        }
        else {
            setErrors({ ...errors, confirmPass: "Your password did not match" })
            setUserInfo({ ...userInfo, confirmPass: "" })
        }
    }

    const navigate = useNavigate()

    if (user || googleUser){
        navigate('/')
    }
    
//handle---Register
    const handleRegister = e =>{
        e.preventDefault()
        createUserWithEmailAndPassword(userInfo.email , userInfo.pass)
        console.log(userInfo.email , userInfo.pass)
     }

     useEffect(() => {
        const error = hookError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast.error("Please provide a valid email");
                    break;
                case "auth/popup-closed-by-user":
                    toast.error("Pop-up Closed By User");
                    break;
      
                case "auth/invalid-password":
                    toast.error("Wrong password. Intruder!!")
                    break;
                default:
                    toast.error("something went wrong")
            }
        }
      }, [hookError, googleError])

    return (
        <div className='login-bg flex justify-center items-center  '>

            <div className='login-form lg:m-12 m-16 p-6 lg:py-10 lg:px-16 rounded '>
              <h1 className='lg:text-2xl text-xl font-bold text-white mb-5'>REGISTER NOW</h1>
              <form onSubmit={handleRegister} className=' flex flex-col'>

               
                <input type={'email'} className='auth-input mb-3' onChange={handleEmail}
                 placeholder='Your Email..' />
                 { errors?.email && <p className='error-message' > {errors.email} </p> }
                <input type={'password'} className='auth-input ' onChange={handlePass}
                 placeholder='Your Password..' />
                   { errors?.pass && <p className='error-message' > {errors.pass} </p> }
                <input type={'password'} className='auth-input ' onChange={handleConfirmPass}
                 placeholder='Confirm Password..' />
                   { errors?.confirmPass && <p className='error-message' > {errors.confirmPass} </p> }
                <input type={'submit'} className='auth-submit text-md font-bold py-2 mt-4 rounded'
                 value='Sign Up' />

               

              </form>
            
            <p className='text-white mt-2'>Already a member?
              <span className='font-bold ml-1 text-black register'>
              <Link to={'/login'} >Sign In</Link>
                </span> </p>

                <div className='flex items-center justify-center'>
                    <div style={{ height: "2px" }} className='bg-white w-24  ' ></div>
                    <p className='text-white font-bold m-2'>OR</p>
                    <div style={{ height: "2px" }} className='bg-white w-24 ' ></div>
                </div>

                <div className='auth-submit font-bold py-2 mt-4 flex items-center justify-around rounded'>
                <p className='text-2xl'>
                    <BsGoogle  />
                    </p>
                    <p className='text-md '>
                    <input type={'submit'}  onClick={() => signInWithGoogle()}  value='Sign in with Google' />
                    </p>
                   
                   
                    
                </div>

            </div>
            <Toaster position='top-right' />
            
        </div>
    );
};
    

export default Register;