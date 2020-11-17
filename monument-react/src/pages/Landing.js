import React from 'react';
import Header from '../components/LandingHeader';

import articleImageOne from '../images/article_1.jpg';

import './Landing.css';

const Landing = (props) => {
	return (
		<div>
			<Header />
			<img src={articleImageOne} alt="Cactus"/>
		</div>
	)
}

export default Landing;
