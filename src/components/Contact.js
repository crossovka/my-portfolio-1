import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text">Есть вопросы?</p>
                    <p className='heading-text'>Связаться</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>Меня интересуют возможности фрилансера, особенно амбициозные или крупные проекты. Однако, если у вас есть другой запрос или вопрос, не стесняйтесь и пишите мне.</p>
                        </div>
                        <div className="contact-hello">
                            <p>Скажи привет</p>
                            <Link className='hello-links' to="https://t.me/comunay" target='_blank'>https://t.me/comunay</Link>
                            <a className='hello-links' href="mailto:Best-login-mail@yandex.ru" target='_blank' rel="noreferrer">Best-login-mail@yandex.ru</a>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        <form
                            name="contact-form"
                            method="POST"
                            data-netlify="true"
                            action="POST"
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-top">
                            <div className="name">
                                <label htmlFor="name">Ваше имя</label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Введите ваше имя"
                                required
                                />
                            </div>

                            <div className="email">
                                <label htmlFor="email">Ваш email</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Введите ваш email"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label htmlFor="message">Ваше сообщение</label>
                                <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Привет, мне тут сайтец нужен с базой данных для продажи железобетона. Сделаешь по красоте? желательно сдать вчера"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" className="hero-contact">
                              Отправить сообщение
                            </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
