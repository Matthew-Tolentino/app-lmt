import React, { useState } from 'react';
import SkillOrb from '../../shared/components/SkillOrb/SkillOrb';
import { Skill } from '../../shared/models/Skill';
import './Skills.scss';

function Skills() {

  // Note: If you add to this array change $len in scss file
  let skillOrbs: Skill[] = [
    {
      name: 'Frontend',
      skillset: ['HTML', 'CSS/SCSS', 'Angular', 'React', 'Bootstrap', 'Material UI', 'Node.js']
    },
    {
      name: 'Backend',
      skillset: ['.Net', 'RESTful API', 'MongoDB', 'PostgreSQL', 'LINQ', 'Entity Framework']
    },
    {
      name: 'Testing',
      skillset: ['Jest', 'xUnit', 'Cypress', 'e2e', 'Regression']
    },
    {
      name: 'Languages',
      skillset: ['C#', 'JavaScript', 'TypeScript', 'Python']
    },
    {
      name: 'Dev Tech',
      skillset: ['VS Code', 'VS Proper', 'Docker', 'Unity', 'Git']
    },
  ]

  return (
    <>
      <div className="section-title">Skills</div>
      <div className='skill-grid'>
        {
          skillOrbs.map((orb, index) => {
            return (
              <div className={`orb-${index + 1} orb reveal-top-1`}>
                <SkillOrb {...orb} />
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Skills;