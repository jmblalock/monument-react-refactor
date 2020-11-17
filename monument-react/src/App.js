import './App.css';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Blog />

      <footer>
        Here is Footer
      </footer>
    </div>
  );
}

export default App;
