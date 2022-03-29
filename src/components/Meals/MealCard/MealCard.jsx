import React from "react";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  const { strMeal, idMeal, strArea, strMealThumb, strCategory } = meal;
  return (
    <div className="mealCard rounded shadow p-2">
      <div className="img">
        <img className="min-w-full rounded" src={strMealThumb} alt={strMeal} />
      </div>
      <div className="details my-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg">
            {strMeal} from {strArea}
          </h4>
          <span className="text-pink-500 text-sm">{strCategory}</span>
        </div>
      </div>
      <Link
        to={`/meal/${idMeal}`}
        className="bg-pink-400 text-white p-1 px-2 rounded mb-2 inline-block"
      >
        See Info
      </Link>
    </div>
  );
};

export default MealCard;
