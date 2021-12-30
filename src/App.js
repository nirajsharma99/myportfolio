import './App.scss';
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
import { useEffect, useState } from 'react';
import Loader from './components/loader';
import Matrix from './components/matrix';

function App() {
  const location = useLocation();
  const hash = location.hash.split('#')[1];

  const [scrollEffect, setScrollEffect] = useState({
    scrollPos: 0,
    show: true,
    className: 'App-header-1',
  });

  useEffect(() => {
    const ele = document.getElementById('hash');
    if (!ele) return;
    window.scrollTo({ top: ele.offsetTop, behavior: 'smooth' });
  }, [hash]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const { top } = document.body.getBoundingClientRect();
    setScrollEffect((prev) => ({
      scrollPos: top,
      show: top > prev.scrollPos,
      className: top ? 'App-header-2' : 'App-header-1',
    }));
  };

  return (
    <div className="App">
      <Loader />
      <Matrix />
      <header
        className={
          scrollEffect.className + (scrollEffect.show ? ' active' : ' hidden')
        }
      >
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
