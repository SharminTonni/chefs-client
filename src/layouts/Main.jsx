import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "../shared/Header";
import { InfinitySpin } from "react-loader-spinner";

const Main = () => {
  const navigation = useNavigation();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="w-full dark:bg-black">
      <button
        onClick={handleTheme}
        className="btn text-center dark:text-black lg:ml-40 mt-10 text-white btn-ghost h-10 dark:bg-white bg-black "
      >
        Switch to Dark Mode
      </button>
      <Header></Header>
      <div className="">
        {navigation.state === "loading" && (
          <InfinitySpin
            width="200"
            className="mx-auto text-center"
            color="#4fa94d"
          />
        )}
      </div>

      <div className="w-full dark:bg-black">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
