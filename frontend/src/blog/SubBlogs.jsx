import React from "react";
import "./subblog.css";

const SubBlogs = ({ data }) => {
  return (
    <div className="card" style={{ width: "500px" }}>
      <img
        src={data.image} // Assuming the image URL is provided in the data
        className="card-img-top"
        alt="Blog Image"
      />
      <div className="card-body">
        <h4 className="fw-bold mt-1 card-title">{data.title}</h4>
        <p className="card-text text-secondary mt-2 mb-2">Date: {data.dated}</p>
        <p style={{ textAlign: "justify", color: "#6c757d" }}>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default SubBlogs;
