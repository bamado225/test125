
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '$30B', label: 'Vertical Format Market' },
  { value: '3B+', label: 'Potential Global Viewers' },
  { value: '5', label: 'Verticals Kent Has Booked' },
  { value: '30+', label: 'Student Bookings Combined' },
];

const whatYouLearn = [
  {
    icon: 'fa-search',
    title: 'Find the Auditions',
    desc: 'Exactly where vertical film castings live — from micro-drama platforms to direct producer pipelines you won\'t find on Actors Access.',
  },
  {
    icon: 'fa-address-book',
    title: 'Connect with Decision Makers',
    desc: 'How to directly reach the producers, writers, directors, and casting directors greenlighting projects right now.',
  },
  {
    icon: 'fa-video',
    title: 'Master Vertical Technique',
    desc: 'The nuanced performance and self-tape skills specific to 9:16 — radically different from traditional TV and film auditions.',
  },
  {
    icon: 'fa-share-alt',
    title: 'Leverage Your Credits',
    desc: 'How to use your vertical bookings on social media for maximum exposure and brand amplification.',
  },
  {
    icon: 'fa-dollar-sign',
    title: 'Negotiate Like a Pro',
    desc: 'Pay, transportation, billing status — every deal point you need to protect yourself and your career.',
  },
  {
    icon: 'fa-list',
    title: 'Platform Masterlist',
    desc: 'A comprehensive list of dedicated micro-drama websites and apps — and how to cross-reference them to contact the people who run them.',
  },
];

const platforms = [
  { name: 'ReelShort', desc: 'One of the largest micro-drama platforms. Premium 9:16 productions with global distribution.' },
  { name: 'DramaBox', desc: 'Short-form serial dramas engineered for mobile-first global audiences.' },
  { name: 'Zynn / ShortMax', desc: 'Dedicated vertical streaming platforms with millions of active subscribers.' },
  { name: 'Netflix Vertical', desc: 'Netflix\'s dedicated vertical content division — prestige budgets, A-list talent.' },
  { name: 'TikTok Series', desc: 'Monetized episodic content directly inside TikTok\'s ecosystem.' },
  { name: 'YouTube Shorts+', desc: 'Evolving into premium vertical content with creator fund backing.' },
];

const celebrities = [
  { name: 'Taye Diggs', project: 'Candy Jar', note: 'Romance micro-drama — proof of prestige migration.' },
  { name: 'Hannah Stocking', project: '72M followers', note: 'Dropping the first-ever musical micro-drama.' },
  { name: 'Kris Jenner & Kim K', project: 'Platform Investors', note: 'Former Hollywood execs backed by Kardashian capital.' },
];

const VerticalCoaching: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revolution' | 'celebrities'>('revolution');

  return (
    <div className="overflow-hidden pt-20">

      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Animated vertical lines background */}
        <div className="absolute inset-0 z-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-primary"
              style={{ left: `${(i + 1) * (100 / 13)}%` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-0" />

        {/* 9:16 phone mockup silhouette */}
        <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 z-0 opacity-10 hidden lg:block">
          <div className="w-40 h-72 border-2 border-primary rounded-3xl relative">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full" />
            <div className="absolute inset-4 border border-primary/30 rounded-2xl" />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-32 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 px-5 py-2 mb-8">
            <i className="fas fa-bolt text-primary text-xs"></i>
            <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">The Vertical Revolution</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-[0.9]">
            The <span className="text-gold-gradient italic">$30 Billion</span><br />
            Format Reshaping<br />
            Hollywood.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-6 font-light leading-relaxed">
            In 40 years, I have never seen an opportunity this vast, this immediate, or this revolutionary.
          </p>
          <p className="text-white font-serif text-xl md:text-2xl italic mb-12">
            "The train is leaving the station.<br />
            <span className="text-primary">I am here to ensure you are on it."</span>
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/schedule" className="px-10 py-5 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
              Claim Your Spot
            </Link>
            <a href="#what-you-learn" className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
              See What You Learn
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="fas fa-chevron-down text-primary text-xl"></i>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="bg-primary py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="font-serif text-4xl md:text-5xl font-bold text-black mb-2">{s.value}</p>
                <p className="text-black/70 text-[10px] uppercase tracking-widest font-bold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── KENT'S MANIFESTO ── */}
      <section className="py-28 bg-white dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Tab switcher */}
          <div className="flex border-b dark:border-white/10 mb-14 gap-8">
            {(['revolution', 'celebrities'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-xs uppercase tracking-widest font-bold transition-all border-b-2 -mb-px ${
                  activeTab === tab
                    ? 'border-primary text-primary'
                    : 'border-transparent text-slate-400 hover:text-primary'
                }`}
              >
                {tab === 'revolution' ? 'The Revolution' : 'The Celebrity Shift'}
              </button>
            ))}
          </div>

          {activeTab === 'revolution' && (
            <div className="animate-fade-in-up">
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">From Kent's Desk</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-10 leading-tight">
                I've seen cable. I've seen streaming.<br />
                <span className="text-primary italic">This eclipses them both.</span>
              </h3>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg font-light leading-relaxed">
                <p>
                  As a working SAG-AFTRA actor for <strong className="text-slate-900 dark:text-white">40 years</strong> and a branding and audition specialist for the last 18, I've had a front-row seat to history. But what I am witnessing right now — this explosion of vertical content — eclipses them all.
                </p>
                <p>
                  Vertical films have exploded into a dominant economic force. <strong className="text-slate-900 dark:text-white">Netflix is launching a dedicated vertical division.</strong> Multiple streaming platforms now exist solely for 9:16 content. When you book a vertical, your face isn't just seen across the United States and its 350 million viewers — these productions target China and India, whose combined populations approach <strong className="text-primary">3 billion people</strong>.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-2 my-8">
                  <p className="font-serif text-2xl text-slate-900 dark:text-white italic">
                    "This isn't just a trend. It is a seismic, ground-up restructuring of how audiences consume stories and how careers are built."
                  </p>
                </blockquote>
                <p>
                  Make no mistake: the major studios are all-in. A-list producers, writers, and talent are being enlisted to develop premium vertical content. The question is no longer <em>if</em> this format will take over. It's <strong className="text-primary">who will be working in it.</strong>
                </p>
                <p>
                  I haven't been watching this from the sidelines — I've personally booked <strong className="text-slate-900 dark:text-white">five verticals</strong>, and select students of mine have booked upwards of <strong className="text-slate-900 dark:text-white">30 projects combined</strong>. The opportunities are real. They are accessible. They are happening right now.
                </p>
                <p className="text-xl font-medium text-slate-900 dark:text-white">
                  If you are not jumping on this bandwagon, you are not just missing a trend — you are missing the single biggest expansion of working opportunities for actors in a generation.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'celebrities' && (
            <div className="animate-fade-in-up">
              <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Proof Is Here</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-10 leading-tight">
                When A-listers show up,<br />
                <span className="text-primary italic">you know the game has changed.</span>
              </h3>
              <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg font-light leading-relaxed mb-12">
                <p>
                  <strong className="text-slate-900 dark:text-white">Taye Diggs</strong> is doing a micro-drama for <em>Candy Jar</em>. Former Hollywood executives are launching their own platforms — backed by investors like <strong className="text-slate-900 dark:text-white">Kris Jenner and Kim Kardashian</strong>. <strong className="text-slate-900 dark:text-white">Hannah Stocking</strong> — 72 million followers — is dropping the first-ever musical micro-drama.
                </p>
                <p>
                  <em>People</em> magazine just devoted an entire spread to vertical stars commanding <strong className="text-primary">$2,000 a day</strong> and becoming pseudo-celebrities in their own right.
                </p>
                <p>
                  People keep saying verticals aren't new — that Quibi tried and failed. But maybe Quibi just tried too hard. These are one-minute episodes shot vertically for your phone, packed with billionaires, werewolves, secret babies, and cliffhangers so addictive you'll pay to see the next one. <strong className="text-slate-900 dark:text-white">They're giving actors work — including me.</strong> And the formula is clearly working.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {celebrities.map((c, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-background-dark border dark:border-white/5 p-6">
                    <p className="font-serif text-lg text-slate-900 dark:text-white font-bold mb-1">{c.name}</p>
                    <p className="text-primary text-[10px] uppercase tracking-widest font-bold mb-3">{c.project}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── WHAT YOU LEARN ── */}
      <section id="what-you-learn" className="py-28 bg-slate-50 dark:bg-background-dark scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The Coaching Roadmap</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white mb-6">
              I don't report on the news.<br />
              <span className="text-primary italic">I give you the roadmap.</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-light">
              Every skill, contact, and strategy you need to book verticals — from first audition to negotiated contract.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatYouLearn.map((item, i) => (
              <div key={i} className="group bg-white dark:bg-surface-dark border dark:border-white/5 p-8 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <i className={`fas ${item.icon} text-primary text-lg`}></i>
                </div>
                <h4 className="font-serif text-xl text-slate-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-28 bg-white dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">The New Landscape</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
              Beyond TikTok & YouTube Shorts.
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-light">
              The vertical ecosystem has exploded into dedicated platforms — each with their own producers, casting directors, and active audition pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <div key={i} className="flex items-start gap-5 bg-slate-50 dark:bg-background-dark border dark:border-white/5 p-6 hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fas fa-mobile-alt text-primary text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider mb-1">{p.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-10 font-light italic">
            Kent provides a comprehensive, updated masterlist of platforms and a step-by-step guide to cross-referencing each for direct producer contact.
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-28 bg-white dark:bg-surface-dark border-y dark:border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Get Started</p>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
            One Session. <span className="text-primary italic">Career-Changing.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-light mb-14 max-w-xl mx-auto">
            Everything covered — auditions, technique, platforms, contacts, negotiation — in a single focused session with Kent.
          </p>

          <div className="relative border-2 border-primary bg-slate-50 dark:bg-background-dark p-10 md:p-14 max-w-lg mx-auto">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-1.5">
              <span className="text-black font-bold uppercase tracking-[0.25em] text-[10px]">Micro Mini Drama Coaching</span>
            </div>

            <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 mt-2">Vertical Coaching Session</p>

            <div className="flex items-end justify-center gap-2 mb-8">
              <span className="font-serif text-7xl font-bold text-slate-900 dark:text-white leading-none">$249</span>
              <span className="text-slate-400 text-sm font-light mb-2">/ session</span>
            </div>

            <div className="h-px w-16 bg-primary/30 mx-auto mb-8"></div>

            <ul className="space-y-4 text-left mb-10 max-w-xs mx-auto">
              {[
                '90-minute private session with Kent',
                'Vertical / 9:16 audition technique',
                'Platform & casting pipeline masterlist',
                'Direct contact strategy for producers & CDs',
                'Pay, billing & negotiation coaching',
                'Social media leverage for your credits',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <i className="fas fa-check text-primary text-xs mt-1 flex-shrink-0"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/schedule"
              className="block w-full py-5 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 text-center"
            >
              Book My Session — $249
            </Link>

            <p className="text-slate-400 text-[10px] uppercase tracking-widest mt-5 font-light">
              In-person (LA) · Zoom · FaceTime · Messenger
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        {/* Vertical lines accent */}
        <div className="absolute inset-0 opacity-5 z-0">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-primary" style={{ left: `${(i + 1) * (100 / 9)}%` }} />
          ))}
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] uppercase mb-6">This Is Your Moment</p>
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tight leading-tight">
            The revolution is here.<br />
            <span className="text-primary italic">Don't watch it from outside.</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            You can hope for a lucky break in a format that's already crowded. Or you can get in now — with a man who has already booked five verticals and coached students to 30+ combined bookings.
          </p>
          <p className="text-primary font-serif text-xl italic mb-12">
            "Let's build your brand for the future of film."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/schedule" className="px-12 py-5 bg-primary text-black font-bold uppercase tracking-widest text-xs hover:bg-primary-hover transition-all shadow-2xl shadow-primary/20">
              Book Your Session
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

export default VerticalCoaching;
