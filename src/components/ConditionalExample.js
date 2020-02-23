// src/components/ConditionalExample.js
import React from "react";

const ConditionalExample = props => {
  return <div></div>;
};

export default ConditionalExample;
// src/components/ConditionalExample.js

import React from "react";

//  `if - else` statements don't work inside JSX expressions.
// `if - else` statements must be enclosed in a function.

const renderTitle = titleString => {
  if (titleString) {
    return <h3>TRUE - {titleString} </h3>;
  } else {
    return <h3>FALSE - {titleString}</h3>;
  }
};

// function component
const ConditionalExample = props => {
  const { title } = props;

  return <div>{renderTitle(title)}</div>;
};

export default ConditionalExample;
