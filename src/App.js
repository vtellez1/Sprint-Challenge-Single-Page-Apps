import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import styled from 'styled-components';
import SearchForm from "./components/SearchForm.js";

const Links = styled.div`
display: flex;
justify-content: space-around;
padding: 2rem;
`

export default function App() {
  return (
    <main>
      <Header />
      <div>
        <Links>
        <Link to = "/"> Home</Link>
        <Link to = "/character-list">Characters</Link>
        <Link to ="/search">Search</Link>
        </Links>

        <Route exact path="/" component={WelcomePage}/>
        <Route path="/character-list" component={CharacterList}/>
        <Route path="/search" component={SearchForm}/>
      </div>

    </main>
  );
}
