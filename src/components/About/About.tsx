import React, { useState } from 'react';
import './About.scss';

function About() {
  return (
    <div className='about'>
      <div className='header-section'>
        <h1>Leonard Matthew Tolentino</h1>
        <h4 className='sub-title'>Full Stack Developer @ Brandes Associates</h4>
        {/* <h6>I am a full stack developer based in Los Angelas, CA</h6> */}
      </div>
      
      <div className='about-section'>
        <div className='title'>
          About
        </div>
        <div>
          <p>
            During my college career I decieded to try my hand at web development and take a 
            course at my university. I found myself throughly enjoying the development process
            and ended up creating my first web-app.
          </p>
          <p>Currently I work to build reliable and scalable products for our clients at Brandes
            Assocaites. In my free time I work on side projects to sharpen my skills as a full 
            stack developer.</p>
          <p>When I am not coding, I'm usually pickleballing, hanging out with family and friends
            or playing a competitive shooter.           
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;