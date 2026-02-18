
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Work', path: '/' },
    { name: 'Coaching', path: '/brand-analyzer' },
    { name: 'Testimonials', path: '/success-stories' },
    { name: 'Schedule', path: '/schedule' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold tracking-[0.2em] text-primary">Kent Kasper Coaching</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary border-b border-primary/50 pb-1' : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              {darkMode ? <i className="fas fa-sun text-primary"></i> : <i className="fas fa-moon text-slate-600"></i>}
            </button>
            <Link
              to="/schedule"
              className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background-dark font-bold transition-all text-xs uppercase tracking-widest"
            >
              Book Now
            </Link>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl dark:text-white`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-surface-dark border-b dark:border-white/10 p-4 space-y-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-widest font-bold dark:text-white"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/schedule"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-primary text-background-dark font-bold uppercase tracking-widest"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
