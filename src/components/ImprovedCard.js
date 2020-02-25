// src/components/ImprovedCard.js
import React from "react";

const improvedCard = props => {
  console.log("PROPS", props);

  return (
    <div>
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
        {
          props.hasOscars 
            ? <p>Got the Oscar Award</p>
            : <p>Great movie, but no Oscars! 😔😔😔</p>
        } 


        {/*     && OPERATOR - Short circuit evaluation */}
        { props.hasOscars && <p> GOT AN OSCAR</p> } 
        { ! props.hasOscars && <p>NO OSCARS YET 😔😔😔</p>}

      <button className="btn-delete" onClick={props.clickToDelete}>
        Delete
      </button>
    </div>
  );
};

export default improvedCard;
