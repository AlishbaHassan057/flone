// Products.js
import React from "react";
import data from "./data";

const Products = () => {
  return (
    <div className="row">
      {data.map((product) => (
        <div key={product.id} className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100">
            <img
              className="card-img-top"
              src={product.imageUrl}
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title text-black">{product.name}</h5>
              <p className="card-text text-secondary">$ {product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
