import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
       
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth);

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
        setUserInfo({...userInfo , email:e.target.value})
        setErrors({...errors , email:''})
       }
       else{
        setUserInfo({...userInfo , email:''})
        setErrors({...errors , email:'Your Email is not Valid' })
       }

    }
// handle----pass
    const handlePass = e =>{
    const passRegex = /.{8,}/ ;   
    const validPass = passRegex.test(e.target.value);
    if(validPass){
        setUserInfo({...userInfo , email:e.target.value})
        setErrors({...errors , email:''});
    } 
    else{
        setErrors({...errors , email:'Your Password must be at least 8 character'})
        setUserInfo({...userInfo , email:''});
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
    
//handle---Register
    const handleRegister = e =>{
        e.preventDefault()
     }

    return (
        <div className='login-bg flex justify-center items-center  '>

            <div className='login-form lg:m-12 m-16 p-6 lg:py-12 lg:px-20 rounded '>
              <h1 className='lg:text-3xl text-2xl font-bold text-white mb-5'>REGISTER NOW</h1>
              <form onSubmit={handleRegister} className=' flex flex-col'>

               
                <input type={'email'} className='auth-input mb-3' onChange={handleEmail}
                 placeholder='Your Email..' />
                <input type={'password'} className='auth-input ' onChange={handlePass}
                 placeholder='Your Password..' />
                <input type={'password'} className='auth-input ' onChange={handleConfirmPass}
                 placeholder='Confirm Password..' />
                <input type={'submit'} className='auth-submit text-xl font-bold py-2 mt-4 rounded'
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
                    <p className='text-lg '>
                    <input type={'submit'}  value='Sign in with Google' />
                    </p>
                   
                   
                    
                </div>

            </div>
            
        </div>
    );
};
    

export default Register;