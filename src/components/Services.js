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
                    <p className="heading-sub-text">Чем я занимюсь</p>
                    <p className='heading-text'>Услуги</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Веб разработка</p>
                        <p className='services-desc'>Я использую различные технологии для разработки привлекательных, креативных, интерактивных, адаптивных и функциональных веб-сайтов. </p>
                    </div>
                    <div className="services-card">
                        <IoCamera className='services-icon' />
                        <p className='services-title'>Фотография</p>
                        <p className='services-desc'>Могу сделать фото на любом уровне для соцсетей, а также помочь сделать ваши фото лучше</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
