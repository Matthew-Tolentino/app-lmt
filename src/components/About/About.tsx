import React, { useEffect, useState } from 'react';
import './About.scss';
import hero from '../../imgs/BlueHero.jpg';
import ScrollReveal from "scrollreveal";

function About() {
  return (
    <div className='about'>
      <div className='header-section reveal-left-1'>
        <h1>Leonard Matthew Tolentino</h1>
        <h4 className='sub-title'>Full Stack Developer @ Brandes Associates</h4>
        {/* <h6>I am a full stack developer based in Los Angelas, CA</h6> */}
      </div>
      
      <div className='about-section reveal-left-2'>
        <div className='title'>
          About
        </div>
        <div>
          <p>
            Back in 2020, I decided to try my hand at web development by taking a course at my 
            university, which sparked my journey as a developer and opened the door to a complex, 
            long-term project for the Department of Defense. This opportunity has allowed me to 
            hone my skills in developing reliable and secure web applications within highly regulated
            environments.
          </p>
          <p>
            Currently, I am part of the team at Brandes Associates, where I focus on delivering 
            high-quality software solutions. I’m eager to explore new technologies, expand my skill
            set, and I look forward to exciting new opportunities.
          </p>
          <p>
            Outside of coding, you can usually find me rock climbing, hiking, or gaming — always 
            seeking the next adventure, whether it’s on the mountain or in a virtual world.
          </p>
        </div>
      </div>

      <div className='photo-section'>
        <img className="hero reveal-top-3" src={hero} alt="logo"></img>
      </div>
    </div>
  );
}

export default About;