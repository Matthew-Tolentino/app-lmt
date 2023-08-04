import React, { useState } from 'react';
import './SkillOrb.scss';
import { transform } from 'typescript';

function SkillOrb() {
  let skills = [
    'HTML',
    'CSS/SCSS',
    'Angular',
    'React',
    'Bootstrap',
    'Javascript',
    'Typescript',
    'Material UI',
    'Node.js',
  ]

  return (
    <div className="center-orb">
      Frontend
      {setChildren(skills)}
    </div>
  );
}

function setChildren(skills: string[]) {
  let angle = 360 / skills.length;
  return (
    skills.map((skill, index) => {
      let rotAngle = (angle * index) + 90;

      return (
        <div 
          className="outer-orb"
          style={{
            '--angle': `${rotAngle}deg`,
            '--negangle': `-${rotAngle}deg`
          } as React.CSSProperties}
        >
          {skill}
        </div>
      );
    })
  );
}

export default SkillOrb;