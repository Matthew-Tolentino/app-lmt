import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.scss';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <section id="About">About</section>
      <section id="Skills">Skills</section>
      <section id="Projects">Projects</section>
      <section id="Resume">Resume/CV</ section>
      <section id="Contact">Contact</ section>
    </div>
  );
}

export default App;
