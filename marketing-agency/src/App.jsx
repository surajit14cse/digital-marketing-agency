import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true,    // Whether animation should happen only once
      offset: 100,   // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;