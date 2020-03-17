import React from "react";
import styled from "styled-components";

const UserImg = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 50%;
`;

const UserCard = styled.div`
  background-color: lightblue;
  border-radius: 35%;
`;

const Card = props => {
  return (
    <UserCard>
      <UserImg src={props.img} alt={props.login} />
      <h1>{props.name}</h1>
      <h4>{props.location}</h4>
      <p>{props.bio}</p>
    </UserCard>
  );
};

export default Card;
