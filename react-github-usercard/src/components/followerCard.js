import React from "react";

const FollowerCard = props => {
  return (
    <div>
      <img src={props.img} alt={props.login} />
      <h1>{props.login}</h1>
    </div>
  );
};

export default FollowerCard;
