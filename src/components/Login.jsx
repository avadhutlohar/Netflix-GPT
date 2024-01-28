import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const msg = checkValidData(
      name.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMsg(msg.message);

    if (!msg.isValid) return;

    if (!isSignInForm) {
      // Sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix Background"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="sm:w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 absolute p-8 bg-black my-20 mx-auto text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-4 mb-4 w-full bg-gray-700 rounded-md"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-4 mb-4 w-full bg-gray-700 rounded-md"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-4 mb-4 w-full bg-gray-700 rounded-md"
          />
          <p className="text-lg text-red-600 p-1">{errorMsg}</p>
          <button
            className="p-4 mb-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-sm cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
