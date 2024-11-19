import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
const Card = ({ product, handleRemove }) => {
  const { product_title, id, product_image, category, price } = product || {};
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="flex relative m-2 ">
      <div className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden p-4 text-center">
        <figure className="w-full h-48 ">
          <img className=" " src={product_image} alt="" />
        </figure>
        <h1 className="font-bold text-xl">{product_title}</h1>
        <p>Price: {price}</p>
        <button
          onClick={() => navigate(`/product-detail/${id}`)}
          className="btn"
        >
          Details
        </button>
      </div>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute top-0 right-0 rounded-full bg-yellow-300 p-2 cursor-pointer"
        >
          <FaTrashAlt />
        </div>
      )}
    </div>
  );
};

export default Card;
