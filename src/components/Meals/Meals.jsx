import axios from "axios";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import MealCard from "./MealCard/MealCard";
const Meals = ({ meals, setMeals }) => {
  const [search, setSearch] = useState("");

  const handleSearchOption = () => {
    if (!search) return alert("Fil out this field now!");
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => setMeals(response.data.meals));
  };

  return (
    <section id="meals">
      <div className="container mx-auto">
        <div className="title mt-4 text-center sm:text-left bg-slate-100 p-4 rounded sm:flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Get You meals</h3>
            <span>Here will get all the meals</span>
          </div>
          <div className="search flex rounded-lg overflow-hidden mt-3 items-stretch sm:w-2/6 justify-between bg-white">
            <input
              type="search"
              className="py-3 px-4 w-full outline-none"
              placeholder="Search Your Favorite Meal"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={() => handleSearchOption()}
              className="px-5 bg-pink-500 text-white text-lg"
            >
              <FiSearch />
            </button>
          </div>
        </div>

        <div className="meals-content px-5 sm:px-0 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 my-10">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meals;
