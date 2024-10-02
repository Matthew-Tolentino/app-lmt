import React, { useEffect, useState } from 'react';
import './App.scss';
import './styles.scss';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experiences from './components/Experiences/Experiences';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

import { Reveal } from './shared/components/Reveal/Reveal';
import DemoPlayer from './shared/components/DemoPlayer/DemoPlayer';

function App() {
  const [demoLink, setDemoLink] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemoPlayer = (link: string) => {
    setDemoLink(link);
    setDemoOpen(true);
  };

  const closeDemoPlayer = () => {
    setDemoOpen(false);
    setTimeout(() => setDemoLink(null), 550);
  };

  useEffect(() => {
    Reveal();
  }, []);

  return (
    <div className="App">
      <Menu />
      <DemoPlayer 
        link = {demoLink} 
        demoOpen = {demoOpen}
        demoClose={closeDemoPlayer}
      />
      <section id="About"><About /></section>
      <section id="Experience"><Experiences /></section>
      <section id="Projects"><Projects onOpenDemoPlayer={openDemoPlayer}/></section>
      {/* <section id="Skills"><Skills /></section> */}
      {/* <section id="Resume">Resume/CV</ section> */}
      <footer id="Contact"><Contact /></ footer>
    </div>
  );
}

export default App;
