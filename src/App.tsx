import React, { useEffect } from 'react';
import './App.scss';
import './styles.scss';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

import { Reveal } from './shared/components/Reveal/Reveal';

function App() {
  useEffect(() => {
    Reveal();
  }, []);

  return (
    <div className="App">
      <Menu />
      <section id="About"><About /></section>
      <section id="Experience"><Experiences /></section>
      <section id="Projects"><Projects /></section>
      {/* <section id="Skills"><Skills /></section> */}
      {/* <section id="Resume">Resume/CV</ section> */}
      <footer id="Contact"><Contact /></ footer>
    </div>
  );
}

export default App;
