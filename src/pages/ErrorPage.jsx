import React from "react";
import Lottie from "lottie-react";
import error from "../assets/error.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="text-center mt-12">
      <Link to="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
      <Lottie style={{ height: "90vh" }} animationData={error} loop={true} />
    </div>
  );
};

export default ErrorPage;
