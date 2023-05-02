import React, { useEffect, useState } from "react";
import Chef from "../shared/Chef";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setChefs(data);
      });
  }, []);

  return (
    <>
      {loading ? (
        <progress
          className="progress progress-info w-56"
          value="70"
          max="100"
        ></progress>
      ) : (
        <div className="grid lg:grid-cols-3 w-5/6 mx-auto">
          {chefs.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      )}
    </>
  );
};

export default Chefs;
