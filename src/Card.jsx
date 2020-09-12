import React from "react";

const Card = function (props) {
  return (
    <>
      <div className="container">
        
        <h2 className="title">{props.name}</h2>
        <p className="lead-char">Lead Character: {props.leadChar}</p>
        <img className="cartoon-img" src={props.img} alt="" />
        <button className="click-btn"><a target="_blank" href={props.link}>Watch Now</a></button>
      </div>
    </>
  );
};

export default Card;
