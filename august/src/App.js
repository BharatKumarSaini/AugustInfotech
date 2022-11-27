import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import { Container } from './components/Header/Header.styles';
import Intro from './components/Intro/Intro';
 
const App =() => {
  return (
    <Container>
      <Header/>
      <Intro/>
    </Container>
  );
}

export default App;
