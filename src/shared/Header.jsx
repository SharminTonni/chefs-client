import React, { useContext, useEffect, useState } from "react";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import food from "../assets/food.json";
import Lottie from "lottie-react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  console.log(user);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogOut = (e) => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-amber-600 lg:flex justify-around py-5 items-center dark:bg-black  lg:mx-12">
      <div className="text-center flex justify-center items-center ">
        <Lottie
          style={{ width: "100px" }}
          animationData={food}
          loop={true}
        ></Lottie>
        <p className="text-5xl font-semibold font-serif text-amber-400 ">
          The Royal Taste
        </p>
      </div>

      <div className="mx-auto text-center flex items-center gap-3">
        {user ? (
          <>
            {user?.photoURL ? (
              <>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={user?.displayName}
                >
                  <img
                    className="w-16 rounded-full text-center mx-auto"
                    src={user?.photoURL}
                    alt={user?.displayName}
                  />
                </div>
              </>
            ) : (
              <span>{user?.displayName}</span>
            )}
            <button
              onClick={handleLogOut}
              className="btn btn-warning btn-outline font-serif"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-warning btn-outline text-blue-500 font-serif">
                Log in
              </button>
            </Link>
          </>
        )}
      </div>

      <div className="text-2xl font-semibold  flex justify-between w-1/3 text-center gap-3 font-serif">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        <ActiveLink to="/favorite">Favorite</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
        <ActiveLink to="/signup">SignUp</ActiveLink>
      </div>
    </div>
  );
};

export default Header;
