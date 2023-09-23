import React, { useState } from 'react';
import './Projects.scss';
import { Proj } from '../../shared/models/Proj';
import Project from '../../shared/components/Project/Project';

function Projects() {
  let projs: Proj[] = [
    {
      title: 'Naval Data Distribution System (NDDS)',
      description: 'Web app designed for secure global distribution of files and software to deployed ships and carriers.',
      skills: ['Angular', 'Typescript', 'HTML', 'CSS', 'Docker', '.NET', 'SQL', 'MongoDB']
    },
    {
      title: 'Email Webapp',
      description: 'Full stack email web app that handles authentication, emails, and customizable settings for users.',
      skills: ['React', 'Javascript', 'HTML', 'CSS', 'PosgreSQL', 'Node.js', 'Express']
    },
  ];

  return (
    <>
      <div className='section-title'>Projects</div>
      <div className='projects-grid'>
        {
          projs.map((proj: Proj, index: number) => {
            return (
              <Project index={index} proj={proj}/>
            );
          })
        }
      </div>
    </>
  );
}

export default Projects;