// Image.js
import React from "react";
import product from "../Product";
// joining picture with product.image
const Picture = () => {
  return (
    <img
      src={product.image}
      alt={product.name}
      style={{ width: "58vw", height: "65vh" }}
      className="mb-2 mt-2 "
    />
  );
};

// exporting Image
export default Picture;
