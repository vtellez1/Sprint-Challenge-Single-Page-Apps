import React from "react";

const CharacterCard = props => {
  return (
    <div>
      <img alt="characterpic" src={props.img}/>
      <h4>{props.name}</h4>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
    </div>

  );
};export default CharacterCard
