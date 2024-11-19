import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          className={({ isActive }) => `btn ${isActive ? "bg-green-300" : ""}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
