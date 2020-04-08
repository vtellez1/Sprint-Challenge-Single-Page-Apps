import React from "react";
import styled from 'styled-components'

const CharacterBox = styled.div`
background-color: lightseagreen;
display: flex;
flex-direction: column;
box-shadow: 10px 10px 8px #888888;
align-items: center;
width: 37%;
padding: 1rem;
margin: 1.5rem;
`

const CharacterCard = props => {
  return (
    <CharacterBox>
      <img alt="characterpic" src={props.img}/>
      <h4>{props.name}</h4>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
    </CharacterBox>

  );
};export default CharacterCard
