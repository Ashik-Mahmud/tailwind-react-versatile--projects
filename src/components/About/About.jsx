import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const locationTag = location.pathname.split("/")[2];
  return (
    <section id="about">
      <div className="container mx-auto">
        <div className="title bg-slate-50 p-3 rounded-md my-4">
          <h1 className="text-3xl font-semibold">Little about me.</h1>
          <p>You will get all the details about of me here</p>
        </div>
        <div className="address my-6 p-2 bg-slate-100">
          <ul className=" bg-white p-2 rounded flex items-center space-x-5 border-b-2">
            <Link
              to={"/about/bd-address"}
              className={`text-lg ${
                locationTag === "bd-address" ? "bg-pink-500 text-white" : ""
              }  rounded  p-2 cursor-pointer`}
            >
              Bangladesh Address
            </Link>
            <Link
              to={"/about/usa-address"}
              className={`text-lg ${
                locationTag === "usa-address" ? "bg-pink-500 text-white" : ""
              }  rounded  p-2 cursor-pointer`}
            >
              USA Address
            </Link>
          </ul>
          <div className="infos p-4 bg-slate-100">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
