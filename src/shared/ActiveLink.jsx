import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, chilren }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-blue-600" : "")}
    >
      {chilren}
    </NavLink>
  );
};

export default ActiveLink;
