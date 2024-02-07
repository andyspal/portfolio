import React from 'react';
import '../styles/Navbar.scss';
import { BiHomeAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
const Navbar = ({ isOpen, isScrolled })  => {
  return (
    <nav className={isOpen ? 'nav-open' : ''}>
        <ul>
          <li><a href="#Home"><BiHomeAlt2/>Home</a></li>
          <li><a href="#About"><CgProfile/>About</a></li>
          <li><a href="#Contact"><MdOutlineEmail/>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;
