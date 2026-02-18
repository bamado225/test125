
import React from 'react';
import { Link } from 'react-router-dom';
import { PortfolioItem } from '../types';

const Home: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      category: 'Television',
      title: 'Mad Men, Monk & More',
      description: '25+ television credits including Mad Men, Monk, Rules of Engagement, The Tonight Show with Jay Leno, and The Jimmy Kimmel Show.',
      imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2912&auto=format&fit=crop',
      linkText: 'View Credits'
    },
    {
      category: 'Feature Film',
      title: 'Space Jam & Apollo 13',
      description: '20+ feature film credits including Space Jam, Apollo 13, Reno 911: Miami, and Husbands and Wives. 200+ national & international commercials.',
      imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2940&auto=format&fit=crop',
      linkText: 'View Credits'
    },
    {
      category: 'Stand-Up Comedy',
      title: '12 Years on the Road',
      description: 'National headliner touring comedy clubs across America. Specials on HBO, Showtime, Netflix, Comedy Central, A&E, MTV, VH1 & E!. Two USO Comedy Tours to Japan.',
      imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=2938&auto=format&fit=crop',
      linkText: 'Watch Clip'
    }
  ];

  const logos = [
    { name: 'HBO', src: 'https://en.wikipedia.org/wiki/Special:FilePath/HBO_logo.svg', darkInvert: true },
    { name: 'Showtime', src: 'https://en.wikipedia.org/wiki/Special:FilePath/Showtime.svg', darkInvert: false },
    { name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', darkInvert: false },
    { name: 'Comedy Central', src: 'https://en.wikipedia.org/wiki/Special:FilePath/Comedy_Central_2018.svg', darkInvert: true },
    { name: 'A&E', src: 'https://en.wikipedia.org/wiki/Special:FilePath/A%26E_Network_logo.svg', darkInvert: true },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2959&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-50 grayscale"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h2 className="text-primary font-bold tracking-[0.4em] text-xs md:text-sm uppercase mb-6">Master Your Type</h2>
          <h1 className="font-serif text-6xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.8]">
            KENT<br/><span className="text-gold-gradient">KASPER</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide italic">
            "Acting & Branding Coach for the modern entertainer. Don't fight your type—master it."
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/schedule" className="px-10 py-5 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
              View Packages
            </Link>
            <Link to="/success-stories" className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
              Watch Reel
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-primary text-xl"></i>
        </div>
      </section>

      {/* Client Logos */}
      <div className="bg-white dark:bg-surface-dark py-12 border-y dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-10">Clients Seen On</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 hover:opacity-100 transition-all duration-700">
            {logos.map(logo => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className={`h-8 md:h-10 w-auto object-contain${logo.darkInvert ? ' dark:invert' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-24 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Portfolio</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white">Career Highlights</h3>
            </div>
            <Link to="/success-stories" className="group text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 hover:text-primary transition-colors flex items-center">
              View Full Resume <i className="fas fa-arrow-right ml-3 transform group-hover:translate-x-2 transition-transform"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {portfolioItems.map((item, idx) => (
              <div key={idx} className="group flex flex-col bg-white dark:bg-surface-dark border dark:border-white/5 overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="p-8">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">{item.category}</span>
                  <h4 className="text-xl font-serif text-slate-900 dark:text-white mb-4">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">{item.description}</p>
                  <a href="#" className="inline-block text-[10px] font-bold uppercase tracking-widest border-b border-primary/40 pb-1 hover:border-primary transition-all">
                    {item.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 border border-primary/20 translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
              <img
                src="/kent-kasper-portrait.png"
                alt="Kent Kasper portrait"
                className="w-full h-auto transition-all duration-1000 shadow-2xl"
              />
            </div>
            
            <div className="animate-fade-in-right">
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Philosophy</h2>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white mb-10 leading-tight">
                Hollywood isn't looking for better. <span className="text-primary italic">It's looking for different.</span>
              </h3>
              <div className="h-0.5 w-24 bg-primary mb-10"></div>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 font-light leading-relaxed">
                With 35+ years as a SAG-AFTRA working actor, a law degree from Thurgood Marshall School of Law, and credits spanning Space Jam, Apollo 13, Mad Men, and two USO Comedy Tours — Kent Kasper brings an unmatched dual perspective to <strong className="text-primary font-bold">brand alignment</strong>.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-12 font-light leading-relaxed">
                We identify your unique market value, refine your package, and position you as the undeniable solution to a casting director's problem — turning you into a working actor with representation in major markets in a matter of months.
              </p>
              
              <ul className="space-y-6 mb-12">
                {['Personal Brand Analysis', 'Audition Psychology & Technique', 'Strategic Career Mapping'].map(item => (
                  <li key={item} className="flex items-center space-x-4">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px]">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium tracking-wide text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/brand-analyzer" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-[10px] border-b border-primary/30 pb-2 hover:border-primary transition-all">
                Learn About My Method <i className="fas fa-arrow-right ml-4"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight">Ready to book the room?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto">
            Stop guessing and start strategizing. Schedule your consultation today and let's define your Hollywood trajectory.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/schedule" className="px-12 py-5 bg-primary text-black font-bold uppercase tracking-widest text-xs hover:bg-primary-hover transition-all shadow-2xl shadow-primary/20">
              Book Consultation
            </Link>
            <Link to="/schedule" className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition-all">
              View Class Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
