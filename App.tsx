
import React, { useState, useEffect } from 'react';
import { MemoryRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import SuccessStories from './pages/SuccessStories';
import BrandAnalyzer from './pages/BrandAnalyzer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <MemoryRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/brand-analyzer" element={<BrandAnalyzer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MemoryRouter>
  );
};

export default App;
