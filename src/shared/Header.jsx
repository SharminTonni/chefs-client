import React, { useContext } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = (e) => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-amber-600 lg:flex justify-around py-5 items-center bg-transparent">
      <div className="text-center flex justify-center items-center mb-10">
        <img
          className="w-20 mr-2 text-center rounded-full"
          src="https://www.narita-airport.jp/img/original/31997"
          alt=""
        />
        <p className="text-5xl font-semibold font-serif text-amber-400 ">
          The Royal Taste
        </p>
      </div>
      {user ? (
        <>
          {user.photoURL ? (
            <img
              title={user?.displayName}
              className="w-16 rounded-full"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <span>{user.displayName}</span>
          )}
          <button onClick={handleLogOut} className="btn btn-warning font-serif">
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="btn btn-warning text-blue-500 font-serif">
              Log in
            </button>
          </Link>
        </>
      )}

      <div className="text-2xl font-semibold flex justify-between w-1/3 font-serif">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
        <ActiveLink to="/signup">Sign Up</ActiveLink>
      </div>
    </div>
  );
};

export default Header;
