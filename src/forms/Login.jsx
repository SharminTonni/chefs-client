import React, { useContext, useState } from "react";
import Header from "../shared/Header";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../pages/Footer";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";

const Login = () => {
  const { logInUser, googleSignin, githubSignin, resetPassword } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  const handleGithub = () => {
    githubSignin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  };

  const handleReset = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast("please Provide Your Email Address");
      return;
    }
    resetPassword(email)
      .then((result) => {
        toast("Please Check Your Email");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLogIn}
        className="hero  bg-base-200 mt-10 w-5/6 mx-auto py-10"
      >
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl mb-5 font-bold">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <p className="text-red-600">
                  <small>{error}</small>
                </p>
                <label className="label">
                  <p>
                    <small>
                      Fogot Password?
                      <button
                        onClick={handleReset}
                        className="text-blue-400 hover:underline ml-2"
                      >
                        Reset Password
                      </button>
                    </small>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning btn-outline hover:bg-amber-400">
                  Login
                </button>
              </div>
              <label className="label">
                <span className="label-text">
                  Don't Have an Acoount?
                  <Link
                    className="text-blue-700 hover:underline ml-2"
                    to="/signup"
                  >
                    Please Sign Up
                  </Link>
                </span>
              </label>
              <hr />
              <label className="label text-center mx-auto">
                <span className="label-text text-slate-500">Or Login With</span>
              </label>
              <button
                onClick={handleGoogle}
                className="btn btn-outline btn-info"
              >
                <FaGoogle />
                <span className="ml-2">Login With Google</span>
              </button>
              <button onClick={handleGithub} className="btn btn-outline">
                <FaGithub />
                <span className="ml-2">Login With Github</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />

      <Footer></Footer>
    </div>
  );
};

export default Login;
