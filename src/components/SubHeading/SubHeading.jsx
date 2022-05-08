import React from 'react';
import images from '../../constants/images';
import { motion } from 'framer-motion';

const SubHeading = ({ title }) => (
  <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </motion.div>
);

export default SubHeading;
