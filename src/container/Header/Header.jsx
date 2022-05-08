import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {

  const navigate = useNavigate();

  const fadeLeft = {
    hidden: { opacity: 0, x: 100},
    visible: { opacity: 1, x: 0},
    exit: { opacity: 0, x: 100}
  }
  const fadeRight = {
    hidden: { opacity: 0, x: -100},
    visible: { opacity: 1, x: 0}
  }

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <motion.div variants={fadeRight} transition={{duration: 2, type: 'spring'}} initial='hidden' animate='visible' className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Fancy restaurants are beautifully, sometimes lavishly decorated. Combined with the low lighting they are very often romantic. Expect fresh flowers, tasteful artwork, candlelight, classical music, and linen tablecloths and napkins.</p>
        <button onClick={() => navigate('/explore')} type='button' className='custom__button'>Explore Menu</button>
      </motion.div>

      <div className="app__wrapper_img">
        <motion.img variants={fadeLeft} transition={{duration: 2, type: 'spring'}} initial='hidden' animate='visible' src={images.welcome} alt="header img" />
      </div>
    </div>
  )
};

export default Header;
