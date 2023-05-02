import React, { useContext, useState } from "react";
import Header from "../shared/Header";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { space } from "postcss/lib/list";
import Footer from "../pages/Footer";

const SignUp = () => {
  const { createUser, user } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    createUser(email, password).then((result) => {
      const createdUser = result.user;
      console.log(createdUser);
      updateUser(createdUser, name);
      updatePhoto(createdUser, photo);
      form.reset();
    });
  };

  const updateUser = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then((result) => {})
      .catch((err) => console.log(err));
  };

  const updatePhoto = (user, photo) => {
    updateProfile(user, {
      photoURL: photo,
    })
      .then()
      .catch();
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setError("password must be at least 6 characters");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSignUp}
        className="hero bg-base-200 mt-10 w-5/6 mx-auto py-10"
      >
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl mb-5 font-bold">Please SignUp</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  value={password}
                  placeholder="password"
                  className="input input-bordered"
                  onChange={handlePassword}
                  required
                />
              </div>
              {error && <span className="text-red-600">{error}</span>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
              <label className="label">
                <span className="label-text">
                  Already Have an Account?{" "}
                  <Link className="text-blue-700 hover:underline" to="/login">
                    Please Login
                  </Link>
                </span>
              </label>
            </div>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
