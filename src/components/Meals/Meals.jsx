import React from "react";
import MealCard from "./MealCard/MealCard";

const Meals = ({ meals }) => {
  console.log(meals);
  return (
    <section id="meals">
      <div className="container mx-auto">
        <div className="title mt-4 bg-slate-100 p-4 rounded">
          <h3 className="text-2xl font-semibold">Get You meals</h3>
          <span>Here will get all the meals</span>
        </div>

        <div className="meals-content grid grid-cols-5 gap-10 my-10">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meals;
