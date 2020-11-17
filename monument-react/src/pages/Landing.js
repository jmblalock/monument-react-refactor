import React from 'react';
import Archive from '../components/LandingArchive';
import Header from '../components/LandingHeader';

import './Landing.css';

const Landing = (props) => {
	return (
		<div>
			<Header />
			<Archive />
		</div>
	)
}

export default Landing;
