import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { FaCheck, FaHeart } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import { addtoDB } from "../utilites/FakeDB";

const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, image, cooking_method, rating, id } =
    recipe;

  const [isDisabled, setDisabled] = useState(false);

  const handleFavorite = (id) => {
    setDisabled(true);
    toast("added as favorite", {
      autoClose: 1000,
    });
    addtoDB(id);
  };
  return (
    <div className="card w-full bg-gradient-to-r from-indigo-400  shadow-xl image-full">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <ol>
          {ingredients.map((ing) => (
            <li className="flex items-center justify-start">
              <FaCheck />
              <span className="ml-2">{ing}</span>
            </li>
          ))}
        </ol>
        <p>
          <b>Recipe: </b>
          <i>{cooking_method}</i>
        </p>

        <div className="card-actions justify-end">
          <p className="flex items-center gap-2">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span>{rating}</span>
          </p>
          <button
            onClick={() => handleFavorite(id)}
            disabled={isDisabled}
            className="btn btn-primary"
          >
            Favorite
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
