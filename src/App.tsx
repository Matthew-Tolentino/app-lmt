import React, { useEffect } from 'react';
import './App.scss';
import './styles.scss';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';

import { Reveal } from './shared/components/Reveal/Reveal';
import Projects from './components/Projects/Projects';

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
      <section id="Skills"><Skills /></section>
      <section id="Resume">Resume/CV</ section>
      <section id="Contact">Contact</ section>
    </div>
  );
}

export default App;
