import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { useLoaderData, Outlet } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      <Heading title={"Explore Cutting-Edge Gadgets"}></Heading>
      {/* category tab section */}
      <div className="grid grid-cols-4 container mx-auto">
        <div className="grid-cols-1 gap-5">
          <Categories categories={categories}></Categories>
        </div>
        <div className="grid-cols-3 col-span-3">
          <Outlet></Outlet>
        </div>
      </div>

      {/* dynamic nested component */}
    </div>
  );
};

export default Home;
