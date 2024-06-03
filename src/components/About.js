import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile.png'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1,
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Кто я такой</p>
                    <p className='heading-text'>Обо мне</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p></p>
                        <br />
                        <p> Привет! Меня зовут Вячеслав, и мне нравится создавать вещи, которые живут в Интернете. Мой интерес к веб-разработке начался еще на 1 курсе, когда я решил попробовать себя в своем первом школьном проекте — оказалось, что создание простого веб-сайта научило меня многому в HTML и CSS!</p>
                        <br />
												<p>Но помимо этого я учусь в ГПОАУ АО АПК на факультете "Информационные технологии и программирование". Там я учусь работать с базамы данных)</p>
                        <br />
												<p>Также я участвовал в различных хакатонах и конференциях. Обажаю фотографировать и работать на фрилансе</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
