import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components'

const CharacterInfo = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      //console.log(response.data.results);
      const character = response.data.results;
      setCharacter(character);
    })
    .catch(error => {
      console.log(error);
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <CharacterInfo>
        {character.map(item => {
          //console.log(item.name);
          return <CharacterCard 
          key = {character.id}
          name ={item.name}
          gender={item.gender}
          status ={item.status}
          species={item.species}
          img={item.image}/>
        })}
      </CharacterInfo>
     
    </section>
  );
}
