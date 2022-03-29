import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section id="notfound" className="grid h-[90vh] place-items-center">
      <NavLink to={"/"}>
        {" "}
        <img
          src="https://colorlib.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
          alt="404"
        />
      </NavLink>
    </section>
  );
};

export default NotFound;
