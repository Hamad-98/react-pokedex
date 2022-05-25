import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="cardContainer">
      <img
        className="cardIMG"
        alt={props.current.name}
        src={props.current.picture}
      />
      <span className="cardNAME">{props.current.name}</span>
      <span className="cardDESCRIPTION">{props.current.description}</span>
    </div>
  );
}
