import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "../shared/Header";
import { InfinitySpin } from "react-loader-spinner";

const Main = () => {
  const navigation = useNavigation();

  return (
    <div className="w-full">
      <Header></Header>
      <div>
        {navigation.state === "loading" && (
          <InfinitySpin
            width="200"
            className="mx-auto text-center"
            color="#4fa94d"
          />
        )}
      </div>

      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
