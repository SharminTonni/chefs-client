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
    <div className="bg dark:bg-black">
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

      <Chefs></Chefs>

      {/* 
      -----------------------Restaurant Carousel section---------------------------
      */}

      <Restaurents></Restaurents>

      {/* _--------------------------Carousel Section--------------------------- */}

      <CaouselSection></CaouselSection>

      {/* 
        -----------------Footer Section ------------------
      
       */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
