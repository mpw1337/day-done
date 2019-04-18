import React from "react";
import "./Filler.css";

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%`, backgroundColor: props.color }} />;
};

export default Filler;
