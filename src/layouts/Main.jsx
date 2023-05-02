import React, { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";

const Main = () => {
  const navigation = useNavigation();

  return (
    <div>
      <div>
        {navigation.state === "loading" && (
          <progress className="progress progress-warning w-56"></progress>
        )}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
