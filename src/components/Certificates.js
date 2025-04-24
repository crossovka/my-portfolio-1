import React from 'react';
import { motion } from 'framer-motion';
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../styles/Certificates.css';
import { Fancybox } from '@fancyapps/ui';

const Certificates = () => {
	const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

	const images = [
		'./images/1course/1.jpg',
		'./images/1course/2.jpg',
		'./images/1course/3.jpg',
		'./images/1course/4.jpg',
		'./images/1course/5.PNG',
		'./images/1course/6.jpg',
		'./images/1course/7.PNG',
		'./images/1course/8.jpg',
		'./images/1course/9.PNG',
		'./images/1course/10.jpg',
		'./images/1course/11.jpg',
	];
	const images2 = [
		'./images/2course/1.jpg',
		'./images/2course/2.jpg',
		'./images/2course/3.jpg',
		'./images/2course/4.PNG',
		'./images/2course/5.jpg',
		'./images/2course/6.jpg',
		'./images/2course/7.jpg',
		'./images/2course/8.jpg',
		'./images/2course/9.PNG',
		'./images/2course/10.jpg',
		'./images/2course/11.jpg',
		'./images/2course/12.jpg',
	];
	const images3 = [
		'./images/3course/1.jpg',
		'./images/3course/2.jpg',
		'./images/3course/3.jpg',
		'./images/3course/4.jpg',
		'./images/3course/5.jpg',
		'./images/3course/6.jpg',
		'./images/3course/7.jpg',
		'./images/3course/8.jpg',
		'./images/3course/9.jpg',
		'./images/3course/10.jpg',
		'./images/3course/11.jpg',
		'./images/3course/12.jpg',
	];

	return (
		<div id="certificates" className="certificates">
			<div className="container">
				<motion.div initial={{ opacity: 0 }} animate={fade} className="heading">
					<p className="heading-sub-text">My certificates</p>
					<p className="heading-text">1 course</p>
				</motion.div>
				<Swiper
					spaceBetween={15}
					slidesPerView={4}
					loop={true}
					centeredSlides={false}
					lazy={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="swiper-container"
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<div className="slide ibg">
								<img
									src={image}
									data-fancybox="gallery3"
									alt={`Slide ${index + 1}`}
									onClick={() => {
										Fancybox.show(
											<a data-fancybox="gallery3" className="fancybox-content">
												<img
													src={image}
													alt={`Slide ${index + 1}`}
													className="fancybox-image"
												/>
											</a>,
											{
												closeExisting: false,
												caption: `Slide ${index + 1}`,
											}
										);
									}}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<motion.div initial={{ opacity: 0 }} animate={fade} className="heading">
					<p className="heading-text">2 course</p>
				</motion.div>
				<Swiper
					spaceBetween={15}
					slidesPerView={4}
					loop={true}
					centeredSlides={false}
					lazy={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="swiper-container"
				>
					{images2.map((image, index) => (
						<SwiperSlide key={index}>
							<div className="slide ibg">
								<img
									src={image}
									data-fancybox="gallery"
									alt={`Slide ${index + 1}`}
									onClick={() => {
										Fancybox.show(
											<a data-fancybox="gallery" className="fancybox-content">
												<img
													src={image}
													alt={`Slide ${index + 1}`}
													className="fancybox-image"
												/>
											</a>,
											{
												closeExisting: false,
												caption: `Slide ${index + 1}`,
											}
										);
									}}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<motion.div initial={{ opacity: 0 }} animate={fade} className="heading">
					<p className="heading-text">3 course</p>
				</motion.div>
				<Swiper
					spaceBetween={15}
					slidesPerView={4}
					loop={true}
					centeredSlides={false}
					lazy={true}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className="swiper-container"
				>
					{images3.map((image, index) => (
						<SwiperSlide key={index}>
							<div className="slide ibg">
								<img
									src={image}
									data-fancybox="gallery2"
									alt={`Slide ${index + 1}`}
									onClick={() => {
										Fancybox.show(
											<a data-fancybox="gallery2" className="fancybox-content">
												<img
													src={image}
													alt={`Slide ${index + 1}`}
													className="fancybox-image"
												/>
											</a>,
											{
												closeExisting: false,
												caption: `Slide ${index + 1}`,
											}
										);
									}}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Certificates;