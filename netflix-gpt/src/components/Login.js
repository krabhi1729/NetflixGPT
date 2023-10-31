
import {useState} from "react";
import Header from "./Header";

const Login = () => {
const [isSignedInForm , setIsSignedInForm ] =useState(true);
const toggleSignInForm = () => {
  setIsSignedInForm(!isSignedInForm);
}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="relative right-0 left-0 bg-black top-48 w-3/12 mx-auto text-white p-10 bg-opacity-90 ">
        <h1 className="  font-bold text-3xl py-4">{isSignedInForm?"Sign In":"Sign Up"}</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2  w-full my-4 bg-gray-700 rounded-lg"
        />
        {!isSignedInForm &&
         (<input
          type="text"
          placeholder="Full Name"
          className="p-2  w-full my-4 bg-gray-700 rounded-lg"
        />)}
        <input
          type="text"
          placeholder="Password"
          className="p-2  w-full my-4 bg-gray-700 rounded-lg"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg">
          {isSignedInForm?"Sign In":"Sign Up"}
        </button>
          <div className="flex">
      <p className="text-gray-500 cursor-pointer " onClick={toggleSignInForm}>
        {isSignedInForm ? "New to Netflix ?" : "Already Registered ?"}
        {isSignedInForm && (
          <span className="cursor-pointer hover:underline ml-2 text-white">Sign Up now</span>
        )}
        {!isSignedInForm && (
          <span className="cursor-pointer hover:underline ml-2 text-white">Sign In</span>
        )}
      </p>
    </div>
      </form>
    </div>
  );
};

export default Login;
