import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLoaderData, useLocation } from "react-router-dom";
import Heading from "../components/Heading";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { addToStoredAddtoCart, addToStoredWishList } from "../utility/AddtoDb";
const ProductDetail = () => {
  const location = useLocation();
  console.log(location);
  const data = useLoaderData();
  console.log(data);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const singleData = data.find((product) => product.id == id);
    setProduct(singleData);
  }, [data, id]);

  const handleAddToCart = (id) => {
    /**
     *
     */
    addToStoredAddtoCart(id);
  };
  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="">
      <div className="head-Bg text-white pt-10 pb-80">
        <Heading
          className="text-white"
          title={"Product Details"}
          subtitle={
            "  Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! "
          }
        ></Heading>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto mt-[-300px] p-6 border-8 mb-32">
        <figure className="w-3/5">
          <img className="w-full" src={product.product_image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.product_title}</h2>
          <p>Price: $ {product.price}</p>
          <button className="btn btn-outline btn-error">In Stock</button>
          <p>{product.description}</p>
          <p className="text-xl font-bold">Specification:</p>
          <ol type="1">
            {product.Specification?.map((p) => (
              <ul>{p}</ul>
            ))}
          </ol>
          <h2>Rating</h2>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <h2 className="rounded-full border-2 p-1 bg-slate-300">4.2</h2>
          </div>
          <div className="card-actions justify-start flex">
            <button
              onClick={() => handleAddToCart(id)}
              className="btn btn-primary"
            >
              Add to Cart <BsCart3 />
            </button>
            <button onClick={() => handleAddToWishList(id)}>
              <a className="btn   rounded-full ml-4">
                <CiHeart />
              </a>
            </button>
          </div>
        </div>
      </div>
      <h1>{product.description}</h1>
    </div>
  );
};

export default ProductDetail;
