import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section id="hero" className="bg-slate-50">
      <div className="grid place-items-center h-[80vh] text-center">
        <div className="hero-content space-y-3 px-4 sm:px-0 sm:w-[40%] w-full">
          <p className="capitalize text-xl">get started with tailwind</p>
          <h1 className="text-6xl font-semibold">
            <span className="text-pink-500">React</span> Tailwind
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            fugit maiores labore dolorem repellat alias, commodi at et quo optio
          </p>
          <button className="py-3 px-4 text-white bg-pink-500  ">
            <span className="flex items-center gap-2">
              Get Ready <BsBoxArrowUpRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
