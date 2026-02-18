
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold tracking-[0.2em] text-primary mb-6 block">Kent Kasper Coaching</Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
              35+ years SAG-AFTRA. Sherman Oaks, CA. Coaching in-person & virtually worldwide via Zoom, FaceTime & video call.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.facebook.com/kent.kasper" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-lg">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/kent_kasper" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-lg">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@kentkasper" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-lg">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6">Explore</h4>
            <ul className="space-y-4 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-primary transition-colors">About Kent</Link></li>
              <li><Link to="/brand-analyzer" className="hover:text-primary transition-colors">Private Coaching</Link></li>
              <li><Link to="/schedule" className="hover:text-primary transition-colors">Class Schedule</Link></li>
              <li><Link to="/success-stories" className="hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-[10px] mb-6">Contact</h4>
            <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary/60"></i>
                <span>info@kentkasper.net</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-primary/60"></i>
                <span>Sherman Oaks, CA</span>
              </li>
              <li className="pt-2">
                <Link to="/schedule" className="text-primary hover:text-white transition-all border-b border-primary/30 pb-1">Join Newsletter</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-400">
          <p>© 2025 Kent Kasper Coaching. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
