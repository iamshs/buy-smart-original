import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import toast, { Toaster } from 'react-hot-toast';
import Loading from "../../Loading/Loading";



const Login = () => {
  const [signInWithEmailAndPassword, user, hookError,loading] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError, ] = useSendPasswordResetEmail(
      auth);

  const [signInWithGoogle, googleUser, googleError, googleLoading] = useSignInWithGoogle(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    pass: "",
  });

  //handling Email
  const handleEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ errors, email: "Your Email is Invalid" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  //handling password
  const handlePass = (e) => {
    const passRegex = /.{8,}/;
    const validPass = passRegex.test(e.target.value);
    if (validPass) {
      setUserInfo({ ...userInfo, pass: e.target.value });
      setErrors({ ...errors, pass: "" });
    } else {
      setErrors({
        ...errors,
        pass: "Your password must be at least 8 character",
      });
      setUserInfo({ ...userInfo, pass: "" });
    }
  };

  const navigate = useNavigate();

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

   useEffect(()=>{
     if (user || googleUser) {
      navigate(from, { replace: true });
    }
    
   },[user ,googleUser,from,navigate])

   if (loading || sending || googleLoading ){
    <Loading />
   }

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.pass);
    
  };


  //hook and google error handling
  useEffect(() => {
    const error = hookError || googleError || resetError ;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast.error("Please provide a valid email");
          break;
        case "auth/popup-closed-by-user":
          toast.error("Pop-up Closed By User");
          break;

        case "auth/invalid-password":
          toast.error("Wrong password. Intruder!!");
          break;
        default:
          toast.error("something went wrong");
      }
    }
  }, [hookError, googleError]);

  return (
    <div className="login-bg flex justify-center items-center  ">
       
      <div className="login-form lg:m-12 m-16 px-6 py-3 lg:py-8 lg:px-16 rounded ">
        <h1 className="lg:text-4xl text-xl font-bold text-white mb-3">
          LOG IN
        </h1>
        <form onSubmit={handleLogin} className=" flex flex-col">
          <input
            type={"email"}
            className="auth-input mb-1"
            onChange={handleEmail}
            placeholder="Your Email.."
          />
          {errors?.email && <p className="error-message"> {errors.email} </p>}
          <input
            type={"password"}
            className="auth-input "
            onChange={handlePass}
            placeholder="Your Password.."
          />
          {errors?.pass && <p className="error-message"> {errors.pass} </p>}
          <input
            type={"submit"}
            className="auth-submit text-md font-bold py-2 lg:mt-4 mt-1 rounded"
            value="SIGN IN"
          />
         
        </form>

        <p className="text-white mt-1">
          Not a member?
          <span className="font-bold ml-1 text-black register">
            <Link to={"/register"}>Register Now</Link>
          </span>{" "}
        </p>

        <div className="flex items-center justify-center">
          <div style={{ height: "2px" }} className="bg-white w-24  "></div>
          <p className="text-white font-bold m-2">OR</p>
          <div style={{ height: "2px" }} className="bg-white w-24 "></div>
        </div>

        <div className="auth-submit font-bold py-2 mt-1 lg:mt-4 flex items-center justify-around rounded">
          <p className="text-2xl">
            <BsGoogle />
          </p>
          <p className="text-sm ">
            <input
              type={"submit"}
              onClick={() => signInWithGoogle()}
              value="SIGN IN WITH GOOGLE"
            />
          </p>
        </div>
        <p className="text-white font-bold mt-1 lg:mt-2">Forgot password? <button className="text-black register"
        onClick={async () => {
          await sendPasswordResetEmail(userInfo.email);
          toast.success('Sent email');
        }}
      >
       Reset
      </button> </p>
      </div>
      <Toaster position="top-right"
  reverseOrder={false} />
      {/* <ToastContainer  /> */}
    </div>
  );
};

export default Login;
