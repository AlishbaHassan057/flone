import React from "react";
import "./subcollect.css";

const SubBlogs = ({ data }) => {
  const handleAddToCart = () => {
    // Handle adding the item to the cart
    console.log("Added to cart:", name);
  };
  return (
    <div className="card" style={{ width: "300px" }}>
      <img src={data.image} className="card-img-top" alt="Blog Image" />
      <div className="card-body">
        <h4 className="fw-bold mt-1 card-title text-black">{data.product}</h4>
        <p className="card-text text-secondary mt-2 mb-2"> $ {data.price}</p>
        <p className="card-text text-secondary mt-2 mb-2">{data.category}</p>
        <p style={{ textAlign: "justify", color: "gray" }}>
          {data.description}
        </p>

        <button onClick={handleAddToCart} className="btns">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SubBlogs;
