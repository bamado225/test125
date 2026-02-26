
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const logos = [
    { name: 'HBO', src: 'https://en.wikipedia.org/wiki/Special:FilePath/HBO_logo.svg', darkInvert: true },
    { name: 'Showtime', src: 'https://en.wikipedia.org/wiki/Special:FilePath/Showtime.svg', darkInvert: false },
    { name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', darkInvert: false },
    { name: 'Comedy Central', src: 'https://en.wikipedia.org/wiki/Special:FilePath/Comedy_Central_2018.svg', darkInvert: true },
    { name: 'A&E', src: 'https://en.wikipedia.org/wiki/Special:FilePath/A%26E_Network_logo.svg', darkInvert: true },
  ];

  const roles = [
    { icon: 'fa-gavel', label: 'The Legal Mind', desc: 'Former NYC Asst. District Attorney who dissects scripts & contracts.' },
    { icon: 'fa-microphone', label: 'The Comedian', desc: 'National headliner for 12+ years. HBO, Showtime, Netflix.' },
    { icon: 'fa-film', label: 'The Actor', desc: 'SAG-AFTRA. 40+ years. Over 40+ guest starring roles, 200+ commercials, and dozens of web series and micro mini-dramas.' },
    { icon: 'fa-book', label: 'The Author', desc: '4 authoritative books on acting, branding & the business of Hollywood.' },
    { icon: 'fa-building', label: 'The Corporate Trainer', desc: 'Commanding presence coaching for Fortune 500 leaders.' },
    { icon: 'fa-brain', label: 'The Life Coach', desc: 'Keeps you sane when the silence is deafening.' },
  ];

  const results = [
    { stat: '40+', label: 'Years in the Industry' },
    { stat: '4,000+', label: 'Auditions Under His Belt' },
    { stat: '200+', label: 'National Commercials' },
    { stat: '1000%', label: 'More Opportunities' },
  ];

  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2959&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in-up py-32">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-6">
            The 24/7 Celebrity Mentor
          </p>
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
            Your Secret Weapon<br />
            <span className="text-gold-gradient italic">in a Town That Eats</span><br />
            Hopes for Breakfast.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            90% of actors quit. Not because of talent — because they had no guide.
          </p>
          <p className="text-white text-xl md:text-2xl font-serif italic mb-12">
            You need more than a teacher. You need <span className="text-primary font-bold not-italic">Kent Kasper.</span>
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/schedule" className="px-10 py-5 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
              Get Your 24/7 Ally
            </Link>
            <Link to="/success-stories" className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
              See the Results
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-primary text-xl"></i>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
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

      {/* ── SWISS ARMY KNIFE ── */}
      <section className="py-28 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">What Is Kent Kasper?</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white mb-6 leading-tight">
              The "Swiss Army Knife"<br /><span className="text-primary italic">of Show Business.</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              He is a one-man conglomerate of career firepower. Every angle of Hollywood — covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <div key={idx} className="group bg-white dark:bg-surface-dark border dark:border-white/5 p-8 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <i className={`fas ${role.icon} text-primary text-lg`}></i>
                </div>
                <h4 className="font-serif text-xl text-slate-900 dark:text-white mb-3">{role.label}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 dark:text-slate-400 text-base italic mt-14 max-w-3xl mx-auto font-light">
            Also: For 18 years, the go-to <strong className="text-primary not-italic">Dr. Phil lookalike</strong> — a masterclass in the power of persona and branding.
          </p>
        </div>
      </section>

      {/* ── PORTRAIT + PHILOSOPHY ── */}
      <section className="py-28 relative overflow-hidden bg-white dark:bg-surface-dark">
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
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Concierge Difference</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-8 leading-tight">
                Most coaches give you an hour.<br />
                <span className="text-primary italic">Kent gives you systems.</span>
              </h3>
              <div className="h-0.5 w-24 bg-primary mb-8"></div>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 font-light leading-relaxed">
                4,000+ auditions. 40 years in the trenches. He knows the truth most coaches hide: <strong className="text-primary font-bold">3% of making it is talent. 97% is mastering the business.</strong>
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-10 font-light leading-relaxed">
                His battle-tested methodology covers 150+ essential areas most actors don't even know exist — from blitzing agents in LA, NY, Atlanta & Vancouver, to engineering your brand, building your demo reel, and turning your nerves into nuclear weapons.
              </p>

              <ul className="space-y-5 mb-12">
                {[
                  'Blitz agents & managers in every major market',
                  'Engineer your Branding, Marketing & Packaging',
                  'Turn your nerves into nuclear weapons on-camera',
                ].map(item => (
                  <li key={item} className="flex items-start space-x-4">
                    <span className="w-5 h-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] flex-shrink-0">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-slate-700 dark:text-slate-200 font-medium tracking-wide text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/brand-analyzer" className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-[10px] border-b border-primary/30 pb-2 hover:border-primary transition-all">
                Explore the Method <i className="fas fa-arrow-right ml-4"></i>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-primary py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {results.map((r, i) => (
              <div key={i}>
                <p className="font-serif text-4xl md:text-5xl font-bold text-black mb-2">{r.stat}</p>
                <p className="text-black/70 text-[10px] uppercase tracking-widest font-bold">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHO HAS KENT COACHED ── */}
      <section className="py-28 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Who Has Kent Coached?</h2>
          <h3 className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white mb-6">
            Everyone.<br /><span className="text-primary italic text-3xl md:text-4xl">From Diapers to Depends.</span>
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-16">
            Families. Firefighters. Fortune 500 executives. Veterans. Global citizens from Brazil to Germany. Whether you're in your living room in Ohio or on the other side of the globe — Kent is there.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: 'fa-users',
                title: 'Real People Who Book',
                desc: 'Firefighters, doctors, teachers, bus drivers — who dropped their day jobs to book 25+ national commercials.',
              },
              {
                icon: 'fa-globe',
                title: 'Global Citizens',
                desc: 'Actors from Brazil, Germany, London & Australia who turned their origins into an advantage in the U.S. market.',
              },
              {
                icon: 'fa-star',
                title: 'The Ethically Ambiguous',
                desc: 'Your unique look isn\'t a liability — it\'s your greatest weapon. Kent will show you exactly how.',
              },
            ].map((card, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark border dark:border-white/5 p-10 hover:shadow-xl hover:-translate-y-1 transition-all">
                <i className={`fas ${card.icon} text-primary text-3xl mb-6 block`}></i>
                <h4 className="font-serif text-xl text-slate-900 dark:text-white mb-4">{card.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-10 font-light">
            Sessions available <strong className="text-slate-700 dark:text-slate-200">in-person (LA)</strong> or via <strong className="text-slate-700 dark:text-slate-200">FaceTime, Zoom, or Messenger</strong>.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-black relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-6">This Is Your Moment of Truth</p>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight leading-tight">
            Stop hoping.<br />
            <span className="text-primary italic">Start dominating.</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-6 font-light max-w-2xl mx-auto leading-relaxed">
            You can try to navigate the Hollywood minefield alone. Or you can have a <strong className="text-white">24/7 ally</strong> — a lawyer, actor, comedian, author, and mentor who has been in the trenches for four decades.
          </p>
          <p className="text-primary font-serif text-xl italic mb-12">
            Your private wizard. Your kingmaker. Your 24/7 celebrity mentor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/schedule" className="px-12 py-5 bg-primary text-black font-bold uppercase tracking-widest text-xs hover:bg-primary-hover transition-all shadow-2xl shadow-primary/20">
              Let's Build Your Empire
            </Link>
            <Link to="/success-stories" className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:border-primary hover:text-primary transition-all">
              See Client Results
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
