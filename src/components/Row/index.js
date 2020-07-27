import React from "react";
import "./style.css";

function Row(props) {
return (
<div className="container border">
  <div className="row">
    <div className="col-sm">
    <strong>Name:</strong> {props.name}
    </div>
    <div className="col-sm">
    <strong>Occupation:</strong> {props.occupation}
    </div>
    <div className="col-sm">
    <strong>Location:</strong> {props.location}
    </div>
    <div className="col-sm">
    <strong>Phone:</strong> {props.phone}
    </div>
    <div className="col-sm " id="profilePic">
    <img alt={props.name} src={props.image} />
    </div>
  </div>
</div>
);
}


export default Row;