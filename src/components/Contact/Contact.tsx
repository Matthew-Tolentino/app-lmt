import React, { useState } from 'react';
import './Contact.scss'
import { render } from 'react-dom'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail, CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <>
      <div className='section-title'>Contact Me!</div>
      <div className='contact-grid'>
        <ul className='contact-list'>
          <li><a href="https://github.com/Matthew-Tolentino"><FiGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/leonard-tolentino-b34398188/"><CiLinkedin /></a></li>
          <li><a href="mailto:lemtolen@gmail.com"><CiMail /></a></li>
        </ul>
      </div>
    </>
  )
}

export default Contact;