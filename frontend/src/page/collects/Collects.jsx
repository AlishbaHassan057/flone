import React from "react";
import Products from "./Products";
import "./c.css";

const Collects = () => {
  return (
    <>
      <div className="ww container w-75 mt-5">
        <div className="c mt-5 mb-5 ">
          <hr className="hr-left" />
          <h3 className="heading fw-bold">Featured Collection</h3>
          <hr className="hr-right" />
        </div>
        <Products />
      </div>
    </>
  );
};

export default Collects;
