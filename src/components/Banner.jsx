import React from "react";
import bannerImg from "../assets/banner.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero head-Bg  container mx-auto rounded-b-lg pb-72 relative mb-52">
        <div className="hero-content text-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="btn btn-primary rounded-3xl bg-white text-blue-700"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="container mx-auto absolute bottom-[-150px] ">
          <img
            className="w-3/4 mx-auto h-96 rounded-xl border-8 border-blue-100"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
