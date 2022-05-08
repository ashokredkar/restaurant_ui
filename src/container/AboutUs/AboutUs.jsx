import React, {useEffect} from 'react';
import images from '../../constants/images';
import './AboutUs.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {

  // const fadeLeft = {
  //   hidden: { opacity: 0, x: 100},
  //   visible: { opacity: 1, x: 0},
  //   exit: { opacity: 0, x: 100}
  // }
  // const fadeRight = {
  //   hidden: { opacity: 0, x: -100},
  //   visible: { opacity: 1, x: 0}
  // }
  // const fadeUp = {
  //   hidden: { opacity: 0, y: 100},
  //   visible: { opacity: 1, y: 0}
  // }

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div data-aos='fade-left' className="app__aboutus-content_about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda sunt rerum magnam itaque officia ad! Ea minima ratione numquam et?</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        <div data-aos='fade-up' className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>
        <div data-aos='fade-right' className="app__aboutus-content_history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="about_spoon" className='spoon__img' />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione assumenda sunt rerum magnam itaque officia ad! Ea minima ratione numquam et?</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;
