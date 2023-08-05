import React from 'react';
import ScrollReveal from "scrollreveal";

export function Reveal() {
  const sr = ScrollReveal();
    const dopts = {
      origin: 'top',
      distance: '20px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true
    }

    const opts = {...dopts};

    sr.reveal('.reveal-top-1', opts);
    sr.reveal('.reveal-top-2', Object.assign(opts, { delay: 200 * 2 }));
    sr.reveal('.reveal-top-3', Object.assign(opts, { delay: 200 * 3 }));

    Object.assign(opts, dopts);
    sr.reveal('.reveal-bot-1', Object.assign(opts, {origin: 'bottom'}));
    sr.reveal('.reveal-bot-2', Object.assign(opts, { delay: 200 * 2 }));
    sr.reveal('.reveal-bot-3', Object.assign(opts, { delay: 200 * 3 }));
}