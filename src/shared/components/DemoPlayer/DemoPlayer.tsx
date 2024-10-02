import React, { useState } from 'react';
import './DemoPlayer.scss';

function DemoPlayer(props: any) {
  const { link, demoOpen, demoClose } = props;

  return (
    <>
      <div 
        className={`demo-player ${demoOpen ? 'open' : ''}`}
        onClick={demoClose}
      >
        {/* Demo Player! */}
        <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default DemoPlayer