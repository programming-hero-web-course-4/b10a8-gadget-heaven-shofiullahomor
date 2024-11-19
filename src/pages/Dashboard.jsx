import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredAddtoCart, getStoredWishList } from "../utility/AddtoDb";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Heading from "../components/Heading";

const Dashboard = () => {
  const [productList, setProductList] = useState([]);
  const [productWishList, setProductWishList] = useState([]);
  const allProduct = useLoaderData();

  useEffect(() => {
    const storedAddToWishList = getStoredWishList();
    const storedAddToWishListInt = storedAddToWishList.map((id) => id);
    // console.log(storedAddToCartList, storedAddToCartListInt, allProduct);

    const productWishList = allProduct.filter((product) =>
      storedAddToWishListInt.includes(product.id)
    );
    setProductWishList(productWishList);
  }, []);
  useEffect(() => {
    const storedAddToCartList = getStoredAddtoCart();
    const storedAddToCartListInt = storedAddToCartList.map((id) => id);
    console.log(storedAddToCartList, storedAddToCartListInt, allProduct);

    const productList = allProduct.filter((product) =>
      storedAddToCartListInt.includes(product.id)
    );
    setProductList(productList);
  }, []);
  console.log(productList);
  console.log(productWishList);
  const handleRemove = (id) => {
    removeCart(id);
    const storedAddToCartList = getStoredAddtoCart();
    setProductList(productList);
  };
  const [sort, setSort] = useState("");
  const handleSort = (sortBy) => {
    setSort(sortBy);
    if (sortBy === "price") {
      const sortedProductList = [...productList].sort(
        (a, b) => b.price - a.price
      );
      setProductList(sortedProductList);
    }
  };

  console.log(productList);
  return (
    <>
      {/* dashboard */}
      <div className="head-Bg text-white py-10">
        <Heading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>
      <div>
        <Tabs>
          <TabList className="text-center head-Bg pb-10 outline-2">
            <Tab>Cart</Tab>
            <Tab>Wish List</Tab>
          </TabList>
          <TabPanel className="container mx-auto">
            <h2>{productList.length}</h2>
            <div className="flex justify-between">
              <div>
                <h1>Cart</h1>
              </div>
              <div className="flex items-center gap-4">
                <h1>Total Cost: {productList.length} tk</h1>
                <button
                  onClick={() => handleSort("price")}
                  className="btn btn-outline btn-success"
                >
                  Sort By Price
                </button>
                <button className="btn btn-active btn-primary">Purchase</button>
              </div>
            </div>
            <div className="grid grid-cols-1">
              {productList.map(
                (product) => (
                  <div className="flex justify-between items-center gap-4  my-10 bg-slate-50 p-10 rounded-xl">
                    <div className="w-full">
                      <img
                        className="w-48 h-44"
                        src={product.product_image}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h1 className="font-bold text-xl">
                        {product.product_title}
                      </h1>
                      <p>{product.description}</p>
                      <p className="font-bold"> Price: $ {product.price}</p>
                    </div>
                    <div
                      onClick={() => handleRemove(id)}
                      className="mt-[-240px] mr-[-50px] flex items-end rounded-full bg-yellow-300 p-2 cursor-pointer"
                    >
                      <FaTrashAlt />
                    </div>
                  </div>
                )
                // <Card
                //   handleRemove={handleRemove}
                //   key={product.id}
                //   product={product}
                // ></Card>
              )}
            </div>
          </TabPanel>
          <TabPanel className="container mx-auto">
            <h2>{productWishList.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {productWishList.map((product) => (
                <Card key={product.id} product={product}></Card>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboard;
