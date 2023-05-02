import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer";
import Header from "../shared/Header";

const Main = () => {
  const navigation = useNavigation();

  return (
    <div className="w-full">
      <Header></Header>
      <div>
        {navigation.state === "loading" && (
          <progress className="progress progress-warning w-56"></progress>
        )}
      </div>
      <div className="w-full">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
