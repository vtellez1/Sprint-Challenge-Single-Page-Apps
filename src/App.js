import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import styled from 'styled-components';

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
        </Links>

        <Route exact path="/" component={WelcomePage}/>
        <Route path="/character-list" component={CharacterList}/>
      </div>

    </main>
  );
}
