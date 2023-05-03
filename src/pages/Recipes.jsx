import React, { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "./Recipe";
import { removeItem } from "localforage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Footer from "./Footer";

const Recipes = () => {
  const chefs = useLoaderData();
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://chef-server-phi.vercel.app/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setRecipes(data);
        console.log("data fetching");
      });
  }, []);
  console.log(recipes);
  return (
    <div className="  h-full">
      {loading ? (
        <progress
          className="progress progress-info w-56"
          value="70"
          max="100"
        ></progress>
      ) : (
        <>
          <div className="bg-gradient-to-r from-indigo-300 py-20 flex mt-10">
            <div>
              <img
                style={{ width: "100vw" }}
                className="lg:ml-10"
                src={chefs.image}
                alt="chef's picture"
              />
            </div>
            <div className="text-center lg:mx-auto">
              <p className="text-5xl font-bold ">{chefs.name}</p>
              <p className="mt-5 w-2/3 mx-auto">
                <i>{chefs.description}</i>
              </p>
              <p>
                <b>Experience</b>: {chefs.years_of_experience} Years
              </p>
              <p>
                <b>Recipes</b>: {chefs.num_recipes}
              </p>
              <p>
                <b>Likes</b>: {chefs.num_likes}
              </p>
            </div>
          </div>
          <h1 className="text-center text-amber-400 text-5xl font-bold mt-10">
            Recipes From Our chef
          </h1>
          <div className="mt-20 grid lg:grid-cols-3 mx-auto w-5/6 gap-5">
            {recipes.map((recipe) => (
              <Recipe key={recipe.name} recipe={recipe}></Recipe>
            ))}
          </div>
        </>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Recipes;
