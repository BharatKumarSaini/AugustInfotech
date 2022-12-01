import './App.css';
import React from 'react';
// import "./animation.css";
// import { gsap } from "gsap/all";
import Header from './components/Header/Header';
import { Container } from './components/Header/Header.styles';
import Intro from './components/Intro/Intro';
// gsap.from('.up', {
//   scale: 0,
//   stagger: {
//     amount: 1
//   },
//   ease : 'black-out',
//   delay: 0.3,
//   duration : 3,
//   yPercent: -300,
// });


// gsap.from('.down', {
//   scale: 0,
//   opacity: 0,
//   ease : 'black-out',
//   delay: 2.5,
//   duration : 3,
// });

 
const App =() => {

  

  return (
    <Container>
      <Header/>
      <Intro/>
    </Container>
    // <React.Fragment>
    //   <div className='Container'>
    //     <div className='box down'></div>
    //     <div className='box up'></div>
    //     <div className='box up'></div>
    //     <div className='box up'></div>
    //     <div className='box up'></div>
    //     <div className='box up'></div>
    //     <div className='box up'></div>
    //     <div className='box up'></div>
    //     <div className='box up'></div>
    //   </div>
    // </React.Fragment>
  );
}

export default App;
