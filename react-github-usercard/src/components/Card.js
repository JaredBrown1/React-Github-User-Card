import React from "react";

const Card = props => {
  return (
    <div>
      <img src={props.img} alt={props.login} />
      <h1>{props.name}</h1>
      <h4>{props.location}</h4>
      <p>{props.bio}</p>
    </div>
  );
};

export default Card;
