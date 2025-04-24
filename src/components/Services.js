import React from 'react';
import "../styles/Services.css"
import {IoCamera} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What am I doing</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Web development</p>
                        <p className='services-desc'>I use various technologies to develop attractive, creative, interactive, responsive, and functional websites.</p>
                    </div>
                    <div className="services-card">
                        <IoCamera className='services-icon' />
                        <p className='services-title'>photography</p>
                        <p className='services-desc'>I can take photos at any level for social media, as well as help make your photos better.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
