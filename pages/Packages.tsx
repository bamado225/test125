
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const singles = [
  { duration: '90 min', price: '$299', popular: false },
  { duration: '60 min', price: '$249', popular: true },
  { duration: '30 min', price: '$179', popular: false },
];

const discountPackages = [
  { hours: '4 hrs', price: '$899', savings: 'Save $297' },
  { hours: '6 hrs', price: '$1,299', savings: 'Save $495' },
  { hours: '8 hrs', price: '$1,699', savings: 'Save $693' },
  { hours: '10 hrs', price: '$2,099', savings: 'Save $891' },
];

const brandingServices = [
  'Wardrobe consultation & color strategy',
  'Makeup & styling guidance',
  'Pre & post-photoshoot direction',
  'Resume & bio preparation',
  'Demo reel direction',
  'Mock interview coaching',
  'Agent & manager blitz strategy',
  '"How to channel emotions on camera"',
];

const auditionServices = [
  'Scene analysis & breakdown',
  'Self-tape setup & technique',
  'Slating & first impression coaching',
  'Subtext & emotional work',
  'Improv & spontaneity drills',
  'Emotional transitions',
];

const Packages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'single' | 'packages' | 'branding'>('single');

  return (
    <div className="overflow-hidden pt-20">

      {/* ── HERO ── */}
      <section className="py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-primary" style={{ left: `${(i + 1) * (100 / 11)}%` }} />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 px-5 py-2 mb-8">
            <i className="fas fa-layer-group text-primary text-xs"></i>
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">Coaching Packages</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Invest in the <span className="text-primary italic">Career You Deserve.</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Single sessions or full packages — every option includes Kent's 40+ years of industry knowledge, a free 15-minute intro call, and a plan built around you.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            <span className="flex items-center gap-2"><i className="fas fa-check text-primary"></i> Free 15-min intro call</span>
            <span className="flex items-center gap-2"><i className="fas fa-check text-primary"></i> In-person · Zoom · FaceTime</span>
            <span className="flex items-center gap-2"><i className="fas fa-check text-primary"></i> Group rates available</span>
          </div>
        </div>
      </section>

      {/* ── TABS ── */}
      <div className="bg-white dark:bg-surface-dark border-b dark:border-white/5 sticky top-20 z-30">
        <div className="max-w-5xl mx-auto px-4 flex gap-8 overflow-x-auto">
          {([
            { key: 'single', label: 'Single Sessions' },
            { key: 'packages', label: 'Discount Packages' },
            { key: 'branding', label: 'Branding Extravaganza' },
          ] as const).map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-5 text-xs uppercase tracking-widest font-bold whitespace-nowrap border-b-2 -mb-px transition-all ${
                activeTab === tab.key
                  ? 'border-primary text-primary'
                  : 'border-transparent text-slate-400 hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── SINGLE SESSIONS ── */}
      {activeTab === 'single' && (
        <section className="py-24 bg-slate-50 dark:bg-background-dark">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
                Single <span className="text-primary italic">Consultations</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-light max-w-xl mx-auto">
                One focused session with Kent. Bring your materials, your goals, and your questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {singles.map((s, i) => (
                <div key={i} className={`relative bg-white dark:bg-surface-dark p-10 text-center border-2 transition-all ${s.popular ? 'border-primary shadow-2xl shadow-primary/10 scale-105' : 'border-transparent dark:border-white/5'}`}>
                  {s.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-5 py-1.5 whitespace-nowrap">
                      <span className="text-black font-bold uppercase tracking-[0.25em] text-[10px]">Most Popular</span>
                    </div>
                  )}
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-4">{s.duration} Session</p>
                  <p className="font-serif text-6xl font-bold text-slate-900 dark:text-white mb-8">{s.price}</p>
                  <div className="h-px w-12 bg-primary/30 mx-auto mb-8"></div>
                  <ul className="space-y-3 text-left mb-10">
                    {auditionServices.slice(0, 4).map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                        <i className="fas fa-check text-primary text-xs mt-1 flex-shrink-0"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/schedule" className="block w-full py-4 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all text-center">
                    Book Now
                  </Link>
                </div>
              ))}
            </div>

            {/* What's covered */}
            <div className="bg-white dark:bg-surface-dark border dark:border-white/5 p-10">
              <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-8 text-center">What's Covered in Every Session</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                {auditionServices.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <i className="fas fa-check text-primary text-xs mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── DISCOUNT PACKAGES ── */}
      {activeTab === 'packages' && (
        <section className="py-24 bg-slate-50 dark:bg-background-dark">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
                Concierge <span className="text-primary italic">Packages</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-light max-w-xl mx-auto">
                The more you invest in yourself, the more you save. Designed for serious actors committed to the long game.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {discountPackages.map((p, i) => (
                <div key={i} className="bg-white dark:bg-surface-dark border dark:border-white/5 p-8 flex items-center justify-between hover:-translate-y-0.5 transition-all hover:shadow-xl hover:shadow-primary/5">
                  <div>
                    <p className="font-serif text-4xl font-bold text-slate-900 dark:text-white">{p.hours}</p>
                    <p className="text-primary text-[10px] uppercase tracking-widest font-bold mt-1">{p.savings}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl font-bold text-slate-900 dark:text-white">{p.price}</p>
                    <Link to="/schedule" className="mt-3 inline-block px-6 py-2.5 bg-primary text-black font-bold uppercase tracking-widest text-[10px] hover:bg-primary-hover transition-all">
                      Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Ultimate Package */}
            <div className="relative border-2 border-primary bg-white dark:bg-surface-dark p-10 md:p-14 text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-1.5 whitespace-nowrap">
                <span className="text-black font-bold uppercase tracking-[0.25em] text-[10px]">Ultimate Package</span>
              </div>
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 mt-2">Plug & Play — 12 Hours</p>
              <p className="font-serif text-7xl font-bold text-slate-900 dark:text-white mb-4">$2,599</p>
              <p className="text-slate-500 dark:text-slate-400 font-light max-w-lg mx-auto mb-8">
                The comprehensive "soup to nuts" program. Ideal for those new to the profession or returning after time away — covers everything from brand identity to booking strategy.
              </p>
              <div className="h-px w-16 bg-primary/30 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto text-left mb-10">
                {[...brandingServices.slice(0, 4), ...auditionServices.slice(0, 4)].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <i className="fas fa-check text-primary text-xs mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/schedule" className="inline-block px-14 py-5 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all shadow-xl shadow-primary/20">
                Claim This Package
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── BRANDING EXTRAVAGANZA ── */}
      {activeTab === 'branding' && (
        <section className="py-24 bg-slate-50 dark:bg-background-dark">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
                Branding <span className="text-primary italic">Extravaganza</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-light max-w-xl mx-auto">
                A 2-hour deep-dive focused entirely on your look, your image, and how to walk into a room — or onto camera — as an unforgettable brand.
              </p>
            </div>

            <div className="relative border-2 border-primary bg-white dark:bg-surface-dark p-10 md:p-14 text-center max-w-lg mx-auto mb-14">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-1.5 whitespace-nowrap">
                <span className="text-black font-bold uppercase tracking-[0.25em] text-[10px]">Branding Extravaganza</span>
              </div>
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 mt-2">2-Hour Session</p>
              <p className="font-serif text-7xl font-bold text-slate-900 dark:text-white mb-2">$479</p>
              <p className="text-slate-400 text-sm font-light mb-8">One session · Full brand transformation</p>
              <div className="h-px w-16 bg-primary/30 mx-auto mb-8"></div>
              <ul className="space-y-4 text-left mb-10 max-w-xs mx-auto">
                {brandingServices.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <i className="fas fa-check text-primary text-xs mt-1 flex-shrink-0"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/schedule" className="block w-full py-5 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all text-center">
                Book Branding Session — $479
              </Link>
            </div>

            {/* Branding + Marketing package callout */}
            <div className="bg-white dark:bg-surface-dark border dark:border-white/5 p-8 text-center">
              <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-3">Also Available</p>
              <h3 className="font-serif text-2xl text-slate-900 dark:text-white mb-4">Branding & Marketing Package</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-light max-w-lg mx-auto mb-6">
                Pre- and post-photoshoot services — wardrobe, resume & bio prep, demo reel direction, casting site optimization, one-sheets, postcards, and a full agent/manager blitz strategy.
              </p>
              <Link to="/schedule" className="inline-block px-10 py-4 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-black transition-all">
                Inquire About This Package
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── PAYMENT & EXTRAS ── */}
      <section className="py-16 bg-white dark:bg-surface-dark border-t dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Good to Know</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-gift', title: 'Free Intro Call', desc: '15-minute complimentary video chat included with any package.' },
              { icon: 'fa-users', title: 'Group Rates', desc: 'Special pricing available for couples, families, and friends.' },
              { icon: 'fa-credit-card', title: 'Easy Payment', desc: 'Cash, PayPal, Venmo, Square, and all major credit cards accepted.' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className={`fas ${item.icon} text-primary`}></i>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-2">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-primary" style={{ left: `${(i + 1) * (100 / 9)}%` }} />
          ))}
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
            Not sure which package<br />
            <span className="text-primary italic">is right for you?</span>
          </h2>
          <p className="text-slate-300 text-lg font-light mb-10 max-w-xl mx-auto">
            Start with the free 15-minute intro call. Kent will help you figure out exactly what you need.
          </p>
          <Link to="/schedule" className="inline-block px-14 py-5 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all shadow-2xl shadow-primary/20">
            Book Free Intro Call
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Packages;
