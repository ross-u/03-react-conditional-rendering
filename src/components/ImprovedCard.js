// src/components/ImprovedCard.js
import React from "react";

const improvedCard = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>

      <button className="btn-delete" onClick={props.clickToDelete}>
        Delete
      </button>
    </div>
  );
};

export default improvedCard;
