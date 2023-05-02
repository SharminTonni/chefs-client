import React from "react";
import ActiveLink from "./ActiveLink";

const Header = () => {
  return (
    <div className="text-amber-600 lg:flex justify-around pt-10 items-center bg-transparent">
      <h1 className="text-6xl font-bold">Taste The English</h1>

      <div className="text-2xl font-semibold flex justify-between w-1/3">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/blog">Blog</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
        <ActiveLink to="/signup">Sign Up</ActiveLink>
      </div>
    </div>
  );
};

export default Header;
