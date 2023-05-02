import React, { useContext } from "react";
import Header from "../shared/Header";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Footer from "../pages/Footer";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { logInUser, googleSignin, githubSignin } = useContext(AuthContext);

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogle = () => {
    googleSignin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGithub = () => {
    githubSignin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLogIn}
        className="hero bg-base-200 mt-10 w-5/6 mx-auto py-10"
      >
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl mb-5 font-bold">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <label className="label">
                <span className="label-text">
                  Don't Have an Acoount?
                  <Link className="text-blue-700 hover:underline" to="/signup">
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

      <Footer></Footer>
    </div>
  );
};

export default Login;
