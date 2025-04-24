import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';

const About = () => {
	const horizontal = {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', duration: 2, bounce: 0.3 },
	};

	return (
		<>
			<div className="about" id="about">
				<div className="container">
					<motion.div
						initial={{ x: '-100%', opacity: 0 }}
						whileInView={horizontal}
						viewport={{ once: true }}
						className="heading"
					>
						<p className="heading-sub-text">Who am I</p>
						<p className="heading-text">About me</p>
					</motion.div>
					<div className="split-about">
						<motion.div
							initial={{ x: '-100%', opacity: 0 }}
							whileInView={horizontal}
							className="about-content"
						>
							<p></p>
							<br />
							<p>
								{' '}
								Hi! I create selling websites!
								My interest in web development has started
								I was still in my 1st year when I decided to try my hand at my first
								academic project.
							</p>
							<p>
							He completed more than 10 sites with Wordpress integration in collaboration with the Devmark web studio,
							and more than 20 orders on the Kowork Freelance exchange.
							</p>
							<br />
							<p>
							I study at the State Pedagogical University of APK at the Faculty
							of Information Technology and Programming on 02/09/07. There I learn
							everything related to databases and programming.
							</p>
							<br />
							<p>
								He also participated and won various hackathons and conferences.
							</p>
							<br />
						</motion.div>
						<motion.div
							initial={{ x: '50', opacity: 0 }}
							whileInView={horizontal}
							className="about-img"
						>
							<img src="./images/profile.png" alt="Profile" />
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
