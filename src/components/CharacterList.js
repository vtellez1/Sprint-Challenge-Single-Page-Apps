import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
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
      <div>
        {character.map(item => {
          console.log(item.name);
          return <CharacterCard 
          key = {character.id}
          name ={item.name}
          gender={item.gender}
          status ={item.status}
          species={item.species}
          img={item.image}/>
        })}
      </div>
    </section>
  );
}
