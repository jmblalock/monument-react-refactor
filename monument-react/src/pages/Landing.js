import React from 'react';
import Archive from '../components/LandingArchive';
import Header from '../components/LandingHeader';
import About from '../components/About';
import Gallery from '../components/Gallery';

import './Landing.css';

const Landing = (props) => {
	return (
		<div>
			<Header />
			<Archive />
			<About />
			<Gallery />
		</div>
	)
}

export default Landing;
