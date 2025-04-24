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
                    <p className="heading-sub-text">Any questions?</p>
                    <p className='heading-text'>contact</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>I am interested in freelance opportunities, especially ambitious or large-scale projects. However, if you have any other request or question, feel free to email me.</p>
                        </div>
                        <div className="contact-hello">
                            <p>Say hello</p>
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
                                <label htmlFor="name">your name</label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="enter your name"
                                required
                                />
                            </div>

                            <div className="email">
                                <label htmlFor="email">your email</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="enter your email"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label htmlFor="message">your message</label>
                                <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Hi, I need a website with a database for the sale of reinforced concrete. Will you make it beautiful? it is advisable to take it yesterday"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" className="hero-contact">
                              Send message
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
