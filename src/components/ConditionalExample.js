// src/components/ConditionalExample.js
import React from "react";

const renderTitle = propsObj => {
  if (propsObj.title) {
    return <h1>TRUE - {propsObj.title} </h1>;
  } else {
    return <h1>FALSE - No Title!</h1>;
  }
};

const ConditionalExample = props => {
  return (
    <div>
      {renderTitle(props)}

      {props.title ? <h1>TRUE</h1> : <h1>FALSE</h1>}
    </div>
  );
};

export default ConditionalExample;
