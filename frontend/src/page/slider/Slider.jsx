import React from "react";
import "./slider.css";

const Slider = () => {
  return (
    <>
      <div className="container-fluid  slider ">
        <div className="container w-75 mx-auto row align-items-center justify-content-around mt-4">
          <div className="col-lg-7 sliders">
            <h3 className="">Smart Products</h3>
            <h1 className="display-3 fw-normal">
              Winter Offer 2024 Collection
            </h1>
            <button
              className="btn btn-outline-dark px-1 py-3 rounded-0"
              style={{ backgroundColor: "transparent", color: "white" }}
            >
              SHOP NOW
            </button>
          </div>
          <div className="col-lg-5">
            <img
              className="mt-5 d-block slider-img"
              src="https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
