import React from "react";
import { BsCheck2All } from "react-icons/bs";

const PriceCard = ({ meal }) => {
  const {
    strMeal,
    strMeasure1,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
  } = meal;
  return (
    <div className="card shadow-md p-3 py-5 text-center rounded-lg">
      <div className="header bg-pink-50 text-xl font-semibold text-pink-500 text-center p-2 rounded">
        {strMeal}
      </div>
      <div className="price-text flex justify-center py-4">
        <h3 className="price text-4xl font-semibold">{strMeasure1}</h3>
        <span className="self-end">/mon</span>
      </div>
      <div className="price-table flex items-center text-center justify-center">
        <ul className="flex flex-col space-y-3 text-slate-500 text-sm">
          <li className="flex items-center gap-1">
            <BsCheck2All /> {strIngredient1}
          </li>
          <li className="flex items-center gap-1">
            <BsCheck2All /> {strIngredient2}
          </li>
          <li className="flex items-center gap-1">
            <BsCheck2All /> {strIngredient3 ? strIngredient3 : "Not Available"}
          </li>
          <li className="flex items-center gap-1">
            <BsCheck2All /> {strIngredient4 ? strIngredient4 : "Not Available"}
          </li>
          <li className="flex items-center gap-1">
            <BsCheck2All /> {strIngredient5 ? strIngredient5 : "Not Available"}
          </li>
          <li className="flex items-center gap-1">
            <BsCheck2All /> {strIngredient6 ? strIngredient6 : "Not Available"}
          </li>
        </ul>
      </div>
      <button className="mt-5 px-4 py-2 rounded bg-pink-500 text-white">
        Get Started
      </button>
    </div>
  );
};

export default PriceCard;
