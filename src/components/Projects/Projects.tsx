import React, { useState } from 'react';
import './Projects.scss';
import { Proj } from '../../shared/models/Proj';
import Project from '../../shared/components/Project/Project';
import DemoPlayer from '../../shared/components/DemoPlayer/DemoPlayer';
import nddsImg from '../../imgs/NDDS_Splash_Logo.svg';
import emailAppImg from '../../imgs/EmailApp.png';

function Projects(props: any) {
  const { onOpenDemoPlayer } = props;

  let projs: Proj[] = [
    {
      title: 'Naval Data Distribution System (NDDS)',
      description: 'Web app designed for secure global distribution of files and software to deployed ships and carriers.',
      skills: ['Angular', 'Typescript', 'HTML', 'CSS', 'Docker', '.NET', 'SQL', 'MongoDB'],
      // link: "https://www.youtube.com/embed/dgJh9ie6saA?si=N8bfi5fN1sLk94Vc",
      image: nddsImg
    },
    {
      title: 'Email Webapp',
      description: 'Full stack email web app that handles authentication, emails, and customizable settings for users.',
      skills: ['React', 'Javascript', 'HTML', 'CSS', 'PosgreSQL', 'Node.js', 'Express'],
      link: 'https://www.youtube.com/embed/ZRrP2HGJyxc?si=1eXcNFrXEgKIwkIp',
      image: emailAppImg
    },
  ];

  return (
    <>
      <div className='section-title'>Projects</div>
      <div className='projects-grid'>
        {
          projs.map((proj: Proj, index: number) => {
            return (
              <Project index={index} proj={proj} onOpenDemoPlayer={onOpenDemoPlayer}/>
            );
          })
        }
      </div>
      <div><DemoPlayer /></div>
    </>
  );
}

export default Projects;