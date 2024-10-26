// Price.js
import React from "react";
import product from "../Product";
// joining price with product.price
const Price = () => {
  return (
    <p className="text-success" style={{ fontSize: "5vh" }}>
      {"$"}
      {product.price}
    </p>
  );
};

// exporting Price
export default Price;
