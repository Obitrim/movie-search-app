import React, { useState } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './Home.css';
import moanaImg from './moana.jpg';
import titanImg from './titan.jpg';
import witcherImg from './witcher.jpg';
import guardiansImg from './guardians.jpg';

const Index = (props) => {
	const [slideIndex, setSlideIndex] = useState(0);

	function nextSlide(step = 1) {
		return () => {
			let currentSlideIndex = slideIndex + step;
			setSlideIndex(currentSlideIndex);
		}
	}

  return (
    <>
    	<section className="Home__IntroText">
    		<h1 className="Home__IntroText__Heading" data-aos="zoom-in-down">MovieFlix</h1>
    		<p className="Home__IntroText__Text" data-aos="slide-in-up">Get to know what a particular movie is about by searching and reading about it</p>
    		<button className="Home__IntroText__CallToAction">Search Now</button>
    	</section>
    	<section className="Home__Banner">
    		<h2 className="Home__PopularHeading">Popular</h2>
    		<div className="Home__Banner__Inner">
    			<div className="Banner__Slides" style={{ marginLeft: -100 * slideIndex + '%' }}>
	    			<img className="BannerImg" src={guardiansImg} alt="guardians of the galaxy"/>
		    		<img className="BannerImg" src={witcherImg} alt="The witcher"/>
		    		<img className="BannerImg" src={moanaImg} alt="moana"/>
		    		<img className="BannerImg" src={titanImg} alt="titan"/>
	    		</div>
	    		<div className="MovieDetails">
	    			<h2>Movie Title</h2>
	    			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatibus expedita quaerat ut dignissimos cupiditate.</p>
	    			<a href="#" className="MovieDetails__Btn">Full Details</a>
	    		</div>
	    		<div className="ControlBtns">
	    			<button type="button" className="ControlBtns__Btn ControlBtns__Btn--Prev" onClick={nextSlide(-1)} disabled={slideIndex === 0}>
	    				<ChevronLeftIcon/>
	    			</button>
	    			<button type="button" className="ControlBtns__Btn" onClick={nextSlide()} disabled={slideIndex === 3}>
	    				<ChevronRightIcon/>
	    			</button>
	    		</div>
    		</div>
    	</section>
    </>
  )
}

export default Index;