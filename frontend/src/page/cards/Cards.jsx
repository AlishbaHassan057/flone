// ThreeCardsInRow.js
import React from "react";
import cardData from "./cardData";

const Cards = () => {
  return (
    <div className="container w-75">
      <div className="c mt-5 mb-5">
        <hr className="hr-left" />
        <h3 className="heading fw-bold">Our Blogs</h3>
        <hr className="hr-right" />
      </div>

      <div className="row">
        {cardData.map((card) => (
          <div key={card.id} className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src={card.imageUrl}
                className="card-img-top"
                alt={`Card ${card.id}`}
              />
              <div className="card-body">
                <h5 className="card-title text-center text-black">
                  {card.title}
                </h5>
                <p className="text-center text-secondary text-decoration-italics">
                  by Admin
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
