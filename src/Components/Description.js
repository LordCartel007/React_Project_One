//Description.js

// importing react and product
import React from "react";
import product from "../Product";

const Description = () => {
  return <p style={{ fontSize: "3vh" }}>{product.description}</p>;
};

// exporting Description
export default Description;
