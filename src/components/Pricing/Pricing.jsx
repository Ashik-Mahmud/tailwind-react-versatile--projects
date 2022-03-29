import React from "react";
import PriceCard from "./PriceCard/PriceCard";
const Pricing = ({ meals }) => {
  return (
    <section id="pricing" className="py-5">
      <div className="container mx-auto">
        <div className="title text-center my-8">
          <h1 className="text-4xl font-semibold">Pricing</h1>
          <span className="my-2">Get You Best Price</span>
        </div>
        <div className="grid sm:grid-cols-4 space-x-8 gap-5 my-10">
          {meals.slice(0, 8).map((meal) => (
            <PriceCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
