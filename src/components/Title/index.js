import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="board">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/240px-Dunder_Mifflin%2C_Inc.svg.png"></img>
      <h1 className="title">{props.children}</h1>
    </div>
  );
}

export default Title;
