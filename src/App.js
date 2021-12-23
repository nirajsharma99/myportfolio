import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Social from './components/social';
import Navbar from './components/navbar/navbar';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const hash = location.hash.split('#')[1];

  useEffect(() => {
    const ele = document.getElementById('hash');
    if (!ele) return;
    window.scrollTo({ top: ele.offsetTop, behavior: 'smooth' });
  }, [hash]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="content">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <Social />
    </div>
  );
}

export default App;
