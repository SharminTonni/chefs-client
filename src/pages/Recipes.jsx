import React, { useEffect, useState } from "react";
import Header from "../shared/Header";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Recipe from "./Recipe";
import { removeItem } from "localforage";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Recipes = () => {
  const chefs = useLoaderData();
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setRecipes(data);
      });
  }, []);
  console.log(recipes);
  return (
    <div className="  h-full pb-10">
      {loading ? (
        <progress
          className="progress progress-info w-56"
          value="70"
          max="100"
        ></progress>
      ) : (
        <>
          <div className="bg-gradient-to-r from-indigo-300 py-20 lg:flex mt-10 justify-around">
            <div>
              <LazyLoadImage
                effect="blur"
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
    </div>
  );
};

export default Recipes;
