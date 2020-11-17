import React from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Blog from './pages/Blog';
import Landing from './pages/Landing';
import Footer from './components/Footer';

import './App.css';

function App() {	
  return (
    <div className="App">
      <NavBar />
			<Switch>
				<Route path="/blog">
					<Blog />
				</Route>
				<Route exact path="/">
      		<Landing />
				</Route>
			</Switch>
			<Footer />
    </div>
  );
}

export default App;
