import React from "react";
import CharacterList from "./CharacterList";
import styled from 'styled-components'

const HeaderTitle = styled.h1`
font-size: 3.5rem;
color: darkcyan;
`

const ImgContainer = styled.div`
display: flex;
justify-content: center;
`

export default function WelcomePage() {
  

  return (
    <section className="welcome-page">
      <header>
        <HeaderTitle>Welcome to the ultimate fan site!</HeaderTitle>
      
      <ImgContainer>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </ImgContainer>

      </header>
    </section>
  );
}
