import './App.css';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Blog from './pages/Blog';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      {/* <Blog /> */}
      <footer>
				<div className="wrap">
					<div className="social-links">
						<a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
						<a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
						<a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
					</div>
					<input type="text" placeholder="Email Address" />
					<button type="submit">Subscribe</button>
				</div>

				<p className="copyright">&copy;2016 Sarah Holden</p>
			</footer>
    </div>
  );
}

export default App;
