import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => {
        setMealDetails(response.data.meals[0]);
        setLoading(true);
      });
  }, [mealId, setMealDetails]);

  const {
    strMeal,
    strCategory,
    strMealThumb,
    strArea,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strTags,
    strSource,
    strYoutube,
  } = mealDetails;

  return (
    <section id="meal-details">
      <div className="container mx-auto">
        <div className="details p-10">
          {loading ? (
            <div className="shadow p-5 my-4">
              <div className="flex items-center justify-between bg-slate-50 p-3">
                {" "}
                <h1 className="text-3xl">
                  {strMeal} from {strArea}
                </h1>
                <span>{strCategory}</span>
              </div>
              <div className="h-96 my-2">
                <img
                  src={strMealThumb}
                  className="w-full h-full object-cover rounded"
                  alt={strMeal}
                />
              </div>
              <p className="py-4">{strInstructions}</p>
              <div className="ingredients flex items-center">
                <span className="px-2 cursor-pointer py-2 bg-pink-100 mx-1">
                  {strIngredient1}
                </span>
                <span className="px-2 cursor-pointer py-2 bg-pink-100 mx-1">
                  {strIngredient2}
                </span>
                <span className="px-2 cursor-pointer py-2 bg-pink-100 mx-1">
                  {strIngredient3}
                </span>
                <span className="px-2 cursor-pointer py-2 bg-pink-100 mx-1">
                  {strIngredient4}
                </span>
                <span className="px-2 cursor-pointer py-2 bg-pink-100 mx-1">
                  {strIngredient5}
                </span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 mt-10 p-3">
                <div className="tags">
                  {strTags
                    ? strTags?.split(",").map((tag, ind) => (
                        <span
                          key={tag + ind}
                          className="bg-slate-200 py-1 px-2 mx-1"
                        >
                          {tag}
                        </span>
                      ))
                    : "Not Available"}
                </div>
                <div className="btn-group">
                  {strSource && (
                    <a
                      className="px-3 py-2 bg-pink-500 mx-1 cursor-pointer text-white"
                      href={strSource}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Source
                    </a>
                  )}
                  {strYoutube && (
                    <a
                      className="px-3 py-2 bg-pink-500 mx-1 cursor-pointer text-white"
                      href={strYoutube}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center w-full">
              <img
                className="w-50 mx-auto"
                src="https://c.tenor.com/kxZxwvPdm-wAAAAC/loading-loading-screen.gif"
                alt="loader"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MealDetails;
