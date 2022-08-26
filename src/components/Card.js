import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="card" id={props.color}>
      <div className="header">{props.header}</div>
      <div className="details">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
