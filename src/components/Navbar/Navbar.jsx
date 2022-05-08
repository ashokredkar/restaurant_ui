import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { animateScroll } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


const NavMenu = () => {

  return (
    <ul className='app__navbar-links'>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="home">Home</Link></li>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="about">About</Link></li>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="menu">Menu</Link></li>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="awards">Awards</Link></li>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="contact">Contact</Link></li>
    </ul>
  )
};

const SmallMenu = () => {

  return (
    <ul className='app__navbar-smallscreen_links'>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="home">Home</Link></li>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="about">About</Link></li>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="menu">Menu</Link></li>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="awards">Awards</Link></li>
      <li className="p__opensans"><Link spy={true} smooth={true} className='navLink' activeClass='active' to="contact">Contact</Link></li>
    </ul>
  )
};


const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img onClick={() => animateScroll.scrollToTop()} src={images.gericht} alt="app logo" />
      </div>
      <NavMenu />
      <div className="app__navbar-login">
        <NavLink activeClassName='active' to="/login" className='p__opensans'>Log In / Register</NavLink>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggle(true)} />

        {toggle && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} onClick={() => setToggle(false)} className='overlay__close' />
            <SmallMenu />
          </div>
        )}

      </div>
    </nav>
  )
};

export default Navbar;
