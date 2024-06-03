import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
  return (
    <ul className='nav-links'>
			<li onClick={handleNav} ><Link  to="//github.com/crossovka" target='_blank' className='nav-link'><BsGithub /></Link></li>
			<li onClick={handleNav} ><a  href="mailto:BEST-login-mail@yandex.ru" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
  </ul>
  )
};

export default NavLinks;
