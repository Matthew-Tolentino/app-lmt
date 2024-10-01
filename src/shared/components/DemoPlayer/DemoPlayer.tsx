import React, { useState } from 'react';
import './DemoPlayer.scss';

function DemoPlayer(props: any) {
  const { link } = props;

  return (
    <>
      <div className="demo-player">
        {/* Demo Player! */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZRrP2HGJyxc?si=1eXcNFrXEgKIwkIp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </>
  )
}

export default DemoPlayer