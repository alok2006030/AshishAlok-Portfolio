import React from "react";
import "./Card.css";

const Card = ({ emoji, icon, heading, detail, tag }) => {
  return (
    <div className="card">
      {tag && <span className="card-tag">{tag}</span>}
      {icon ? (
        <div className="card-icon" aria-hidden="true">
          {icon}
        </div>
      ) : (
        emoji && <img src={emoji} alt="" />
      )}
      <span className="card-heading">{heading}</span>
      <span className="card-detail">{detail}</span>
    </div>
  );
};

export default Card;
