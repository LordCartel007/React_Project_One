// The Name.js
import React from "react";
import product from "../Product";

// joining name with product.name
const Name = () => {
  return (
    <h2 className="text-warning text-center" style={{ fontSize: "8vh" }}>
      {product.name}
    </h2>
  );
};

// exporting Name
export default Name;

console.log(product.name);
