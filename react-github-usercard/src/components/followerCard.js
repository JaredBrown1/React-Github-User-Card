import React from "react";
import styled from "styled-components";

const FollowerImg = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 50%;
`;

const FollowerCards = styled.div`
  background-color: lightblue;
  border-radius: 40%;
`;

const FollowerCard = props => {
  return (
    <FollowerCards>
      <FollowerImg src={props.img} alt={props.login} />
      <h1>{props.login}</h1>
    </FollowerCards>
  );
};

export default FollowerCard;
