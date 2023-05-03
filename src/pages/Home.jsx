import React from "react";
import Header from "../shared/Header";
import "./Home.css";
import Chefs from "./Chefs";
import Footer from "./Footer";
import CaouselSection from "../shared/CaouselSection";
import Restaurents from "../shared/Restaurents";

const Home = () => {
  return (
    // -----------------banner section---------------
    // ----------------------------------------------
    <div className="bg">
      <div className="w-1/3 ms-28 mt-18 py-6 h-full">
        <div className="mt-36 font-serif">
          <h2 className="text-4xl font-bold text-amber-400">
            <i>Delicious English Food recipes for You to Try!!!</i>
          </h2>
          <p className="text-2xl font-semibold text-blue-400 mt-5">
            <i>From the World's Best Chef's</i>
          </p>
        </div>
      </div>

      {/* 
-------------- -------Chefs card section -------------------
       */}

      <div className="bg-gradient-to-r from-blue-200 py-10 mt-28">
        <h1 className="text-center mb-5 text-5xl font-bold text-amber-500 font-serif">
          Top Chefs From England
        </h1>
        <p className="text-center mb-5 text-xl font-bold text-amber-500 font-serif">
          Want to have their food on your table?
        </p>
        <p className="text-center mb-5 text-xl text-amber-500 font-serif">
          You can join their cooking course online
        </p>
        <p className="text-center mb-10 text-xl text-amber-500 font-serif">
          Please send us Your Email Address
          <br />
          <input type="text" />
          <button className="btn btn-info ml-4 font-serif">Email</button>
        </p>

        <Chefs></Chefs>
      </div>

      {/* 
      -----------------------Restaurant Carousel section---------------------------
      */}
      <div className="mt-28 text-center lg:mx-auto" style={{ width: "80vw" }}>
        <h1 className="text-center mb-10 text-5xl font-bold text-amber-500 font-serif">
          Top Restaurents of the Town
        </h1>
        <p className="text-center mb-5 text-xl font-bold text-amber-500 font-serif">
          Visit them to taste Authentic Royal Food ...
        </p>
        <Restaurents></Restaurents>
      </div>
      <div className="mt-28 text-center lg:mx-auto" style={{ width: "80vw" }}>
        <h1 className="text-center mb-10 text-5xl font-bold text-amber-500 font-serif">
          Dishes of the Week
        </h1>
        <CaouselSection></CaouselSection>
      </div>

      {/* 
        -----------------Footer Section ------------------
      
       */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
