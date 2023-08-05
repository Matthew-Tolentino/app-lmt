import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import './styles.scss';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import { Reveal } from './shared/components/Reveal/Reveal';

function App() {
  useEffect(() => {
    Reveal();
  }, []);

  return (
    <div className="App">
      <Menu />
      <section id="About"><About /></section>
      <section id="Skills"><Skills /></section>
      <section id="Projects">Projects</section>
      <section id="Resume">Resume/CV</ section>
      <section id="Contact">Contact</ section>
    </div>
  );
}

export default App;
