import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';
import ProfileImg from '../images/profile.png';

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
						<p className="heading-sub-text">Кто я такой</p>
						<p className="heading-text">Обо мне</p>
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
								Привет! я создаю продающие сайты!
								Мой интерес к веб-разработке начался
								еще на 1 курсе, когда я решил попробовать себя в своем первом
								учебном проекте.
							</p>
							<p>
								Завершил более 7 сайтов с интеграцией Wordpress совместно с веб-студией Devmark,
								и более 20 заказов на Фриланс бирже Kowork.
							</p>
							<br />
							<p>
								Учусь я в ГПОАУ АО АПК на факультете
								"Информационные технологии и программирование" 09.02.07. Там я познаю
								всё, что связано с базами данных и программированием.
							</p>
							<br />
							<p>
								Также участвовал и побеждал в различных хакатонах и конференциях.
							</p>
							<br />
						</motion.div>
						<motion.div
							initial={{ x: '50', opacity: 0 }}
							whileInView={horizontal}
							className="about-img"
						>
							<img src={ProfileImg} alt="Profile" />
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
