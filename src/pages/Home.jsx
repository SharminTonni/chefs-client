import React from "react";
import Header from "../shared/Header";
import "./Home.css";
import Chefs from "./Chefs";
import Footer from "./Footer";
import CaouselSection from "../shared/CaouselSection";

const Home = () => {
  return (
    <div className="bg">
      <div className="w-1/3 ms-28 mt-18 py-6 h-full">
        <div className="mt-36 font-serif">
          <h2 className="text-4xl font-bold text-amber-400">
            <i>Delicious English Food recipes for You to Try!!!</i>
          </h2>
          <p className="text-2xl font-semibold text-blue-400 mt-5">
            <i>From the World's Best Chefs</i>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-300 py-10 mt-28">
        <h1 className="text-center mb-10 text-5xl font-bold text-amber-500 font-serif">
          Top Chefs From England
        </h1>
        <Chefs></Chefs>
      </div>

      <div className="mt-28 text-center lg:mx-auto" style={{ width: "80vw" }}>
        <CaouselSection></CaouselSection>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
