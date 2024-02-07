import React, { useState } from 'react';
import '../styles/Header.scss';
import Logo from './Logo';
import Navbar from './Navbar';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const Header = () => {

  const [header, setHeader] = useState(false);
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapseOpen((prev) => !prev);
  };

  const changeBackground = () => {
    if (window.scrollY > 0){
      setHeader(true);
    }
    else {
      setHeader(false);
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <header className={header ? 'scrolled' : '' }>
      <Logo/>
      <button className={isCollapseOpen ? 'collapse-button open' : 'collapse-button'} onClick={handleCollapseToggle}>
        {isCollapseOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
      <Navbar isOpen={isCollapseOpen} isScrolled={header}/>
    </header>
  )
}

export default Header;
