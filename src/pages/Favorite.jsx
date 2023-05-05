import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { clearFromDB, removeFromDB } from "../utilites/FakeDB";
const Favorite = () => {
  const recipesCart = useLoaderData();
  const [recipes, setRecipes] = useState(recipesCart);
  console.log(recipes);

  const handleRemove = (id) => {
    removeFromDB();
    const remaining = recipes.filter((recipe) => recipe.id != id);
    setRecipes(remaining);
  };

  const handleClear = () => {
    setRecipes([]);
    clearFromDB();
  };

  return (
    <>
      {recipes ? (
        <div className=" h-full font-serif">
          <h1 className="text-center text-5xl text-amber-400">
            Add Your Favorite Recipe Here
          </h1>

          {recipes.map((recipe) => {
            return (
              <div
                key={recipe.id}
                className="card w-3/4 text-left mx-auto card-side my-12 bg-slate-200 shadow-xl"
              >
                <figure>
                  <img
                    style={{ width: "550px", height: "200px" }}
                    className="ml-3 rounded-lg"
                    src={recipe.image}
                    alt="Movie"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{recipe.recipe_name}</h2>
                  {recipe.ingredients.map((ing) => {
                    return <li className="mt-0">{ing}</li>;
                  })}
                  <p>{recipe.cooking_method}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => handleRemove(recipe.id)}
                      className="btn  bg-amber-300 text-xl text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className=" justify-end my-10 text-center">
            <button
              onClick={handleClear}
              className="btn bg-red-600 normal-case"
            >
              Remove All!!
            </button>
          </div>
        </div>
      ) : (
        <div className="font-serif">
          <h1 className="text-center text-5xl text-red-600">
            Your Favorite Recipe
          </h1>
        </div>
      )}
      );
    </>
  );
};

export default Favorite;
