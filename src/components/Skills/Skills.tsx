import React, { useState } from 'react';
import SkillOrb from '../../shared/components/SkillOrb/SkillOrb';
import './Skills.scss';
import { Skill } from '../../shared/models/Skill';

function Skills() {
  let skillOrbs: Skill[] = [
    {
      name: 'Frontend',
      skillset: ['HTML', 'CSS/SCSS', 'Angular', 'React', 'Bootstrap', 'Javascript', 'Typescript', 'Material UI', 'Node.js']
    },
    {
      name: 'Backend',
      skillset: ['.Net', 'RESTful API', 'MongoDB', 'PostgreSQL']
    },
  ]

  return (
    <div 
      className='skill-grid'
      style={{
        '--skillsLength': skillOrbs.length
      } as React.CSSProperties}
    >
      {
        skillOrbs.map((orb) => {
          return (
            <div className={`${orb.name.toLowerCase()}-orb`}>
              <SkillOrb {...orb} />
            </div>
          );
        })
      }
    </div>
  );
}

export default Skills;