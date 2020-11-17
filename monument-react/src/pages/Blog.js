import React from 'react';
import Header from '../components/BlogHeader';
import Article from '../components/BlogArticle';
import Comment from '../components/BlogArticle';
import Sidebar from '../components/BlogSidebar';

import './blog.css';

const Blog = () => {
	return (
		<div>
			<Header />
			<div className="wrap grid-wrapper">
				<Article />
				<Sidebar />
			</div>
			<Comment />
		</div>
	)
}

export default Blog;
