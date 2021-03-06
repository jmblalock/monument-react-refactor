import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
	return (
		<nav>
			<a className="hamburger" href="/"><i className="fa fa-bars"></i></a>
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#gallery">Gallery</a></li>
					<li><Link to="/blog">Blog</Link></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
		</nav>
	)
};

export default Navbar;
