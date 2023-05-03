import React from "react";
import { FaBeer, FaBirthdayCake, FaBlackTie, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Chef = ({ chef }) => {
  const { id, image, name, years_of_experience, num_recipes, num_likes } = chef;
  return (
    <div className="ml-0">
      <div className="card w-96 bg-slate-100 border border-rounded p-2 border-amber-400 shadow-xl mb-4">
        <figure>
          <LazyLoadImage
            effect="blur"
            className="img-fluid h-72 w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <span className="flex items-center">
            <span className="mr-2">
              Experience: {years_of_experience} Years
            </span>
            <FaBlackTie />
          </span>
          <span className="flex items-center">
            <span className="mr-2">Recipes: {num_recipes}</span>
            <FaBirthdayCake />
          </span>
          <span className="flex items-center">
            <span className="mr-2">Likes: {num_likes}</span>
            <FaThumbsUp />
          </span>
          <div className="card-actions justify-end">
            <Link to={`chef/${id}`}>
              <button className="btn btn-info">Veiw Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
