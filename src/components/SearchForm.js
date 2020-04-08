import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components'

const SearchArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default function SearchForm() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/character/") 
    .then (response =>{
      const characters = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
      );
      setData (characters);
    });
  },[query]);
  

const handleChange = event => {
  setQuery(event.target.value);
};

  return (
      <SearchArea>
        <form > 
          <input
          id="name" 
          type="text" 
          name="textfield" 
          placeholder="Search" 
          value={query} 
          onChange={handleChange}/>
        </form>
    

        {data.map((item => {
        return(<CharacterCard key={item.id} img={item.image} name={item.name} gender={item.gender} species ={item.species} status={item.status}/>)}
        ))}
    </SearchArea>
  );
}
