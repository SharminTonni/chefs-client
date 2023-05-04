import React, { useEffect, useState } from "react";
import Chef from "../shared/Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://chef-server-phi.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setChefs(data);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <progress
          className="progress progress-info w-56"
          value="70"
          max="100"
        ></progress>
      ) : (
        <div>
          <div className="bg-slate-200 py-16 mt-28">
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
          </div>
          <div className="grid lg:grid-cols-3 text-center pb-5 lg:pl-20 bg-slate-200 w-full lg:mx-auto">
            {chefs.map((chef) => (
              <Chef key={chef.id} chef={chef}></Chef>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chefs;
