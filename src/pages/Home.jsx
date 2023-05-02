import React from "react";
import Header from "../shared/Header";
import "./Home.css";
import Chefs from "./Chefs";

const Home = () => {
  return (
    <div className="bg">
      <Header></Header>
      <div className="w-1/3 ms-28 mt-28 h-full">
        <h2 className="text-4xl font-bold text-amber-400">
          Delicious English Food recipes for You to Try!!!
        </h2>
        <p className="text-2xl font-semibold text-blue-400 mt-5">
          From the World's Best Chefs
        </p>
      </div>
      <div className="bg-gradient-to-r from-indigo-300 py-10 ">
        <h1 className="text-center mb-10 text-5xl font-bold text-amber-500">
          Top Chefs From England
        </h1>
        <Chefs></Chefs>
      </div>
    </div>
  );
};

export default Home;
