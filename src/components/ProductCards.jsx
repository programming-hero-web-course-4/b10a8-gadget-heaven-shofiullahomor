import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";

const ProductCards = () => {
  const data = useLoaderData();
  console.log(data);
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProduct(filteredByCategory);
    } else {
      setProduct(data.slice(0, 9));
    }
    if (category === "All Products") {
      setProduct(data);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {product.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default ProductCards;
