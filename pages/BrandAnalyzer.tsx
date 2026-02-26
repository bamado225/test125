
import React from 'react';

const books = [
  {
    title: "Lights, Camera, Action!",
    subtitle: "Becoming a Working Actor",
    description: "The definitive insider's guide to turning passion into a paycheck. Kent breaks down the business of acting — auditions, branding, self-taping, and everything casting directors actually look for.",
    asin: "B0DRWQV7GD",
    url: "https://www.amazon.com/dp/B0DRWQV7GD",
  },
  {
    title: "Hollywoodn't",
    subtitle: "Behind the Curtain of Struggle, Triumph & Laughter",
    description: "A raw, hilarious, and deeply human memoir of 35+ years in Hollywood. Kent pulls back the curtain on what it really takes to survive — and thrive — in the entertainment industry.",
    asin: "B0DPLRXRXP",
    url: "https://www.amazon.com/dp/B0DPLRXRXP",
  },
  {
    title: "Headshots, Resumes & Agents",
    subtitle: "The Actor's Essential Toolkit",
    description: "A practical, no-nonsense playbook for building your actor's package from the ground up. Covers headshot strategy, resume formatting, and exactly how to land your first — or next — agent.",
    asin: "B0DV8VFVW6",
    url: "https://www.amazon.com/dp/B0DV8VFVW6",
  },
  {
    title: "How to Complain for Fun and Profit",
    subtitle: "A Stand-Up Comedian's Guide to Getting Results",
    description: "Twelve years as a national headliner taught Kent that humor is the world's most underrated negotiation tool. This book is part comedy, part life strategy — and entirely entertaining.",
    asin: "B0FQRB8VVS",
    url: "https://www.amazon.com/dp/B0FQRB8VVS",
  },
];

const podcasts = [
  { title: "Kent Kasper — Interview", src: "https://www.youtube.com/embed/CRfGaFZxiDE", link: "" },
  { title: "Kent Kasper — Interview", src: "https://www.youtube.com/embed/gRa7QvtGueY", link: "" },
  { title: "Kent Kasper — Interview", src: "https://www.youtube.com/embed/qdBW7aNpMyQ", link: "" },
  { title: "CooperTalk — Episode 391", src: "", link: "https://www.coopertalk.net/e/kent-kasper-episode-391/" },
];

const tiktoks = [
  { title: "TikTok Video 1", src: "https://www.tiktok.com/embed/v2/7488580691462999326?autoplay=0" },
  { title: "TikTok Video 2", src: "https://www.tiktok.com/embed/v2/7487723518986079519?autoplay=0" },
  { title: "TikTok Video 3", src: "https://www.tiktok.com/embed/v2/7486721902040337695?autoplay=0" },
  { title: "TikTok Video 4", src: "https://www.tiktok.com/embed/v2/7485953002998664494?autoplay=0" },
  { title: "TikTok Video 5", src: "https://www.tiktok.com/embed/v2/7484902502563990826?autoplay=0" },
  { title: "TikTok Video 6", src: "https://www.tiktok.com/embed/v2/7484203172559408427?autoplay=0" },
  { title: "TikTok Video 7", src: "https://www.tiktok.com/embed/v2/7483509118536338731?autoplay=0" },
];

const BrandAnalyzer: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-background-dark min-h-screen">

      {/* ── Author Hero ── */}
      <section className="pt-36 pb-20 bg-white dark:bg-surface-dark border-b dark:border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Published Author</p>
          <h1 className="font-serif text-5xl md:text-7xl text-slate-900 dark:text-white mb-6 leading-tight">
            Kent Kasper<br />
            <span className="text-primary italic">Writes the Book</span>
          </h1>
          <div className="h-0.5 w-24 bg-primary mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            After 35+ years as a SAG-AFTRA actor, stand-up comedian, and Hollywood insider, Kent Kasper turned his hard-won wisdom into a growing library of books — each one packed with the unfiltered truth about the entertainment industry that no acting class will ever teach you.
          </p>
        </div>
      </section>

      {/* ── Books ── */}
      <section className="py-24 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Available Now on Amazon</p>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white">The Books</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <div key={book.asin} className="group flex flex-col bg-white dark:bg-surface-dark border dark:border-white/5 overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-300">
                {/* Cover */}
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="block bg-slate-100 dark:bg-black/30">
                  <img
                    src={`https://images-na.ssl-images-amazon.com/images/P/${book.asin}.01.LZZZZZZZ.jpg`}
                    alt={book.title}
                    className="w-full object-cover aspect-[2/3] group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </a>
                {/* Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">{book.subtitle}</span>
                  <h3 className="font-serif text-lg text-slate-900 dark:text-white mb-3 leading-snug">{book.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{book.description}</p>
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3 bg-primary text-black font-bold uppercase tracking-[0.15em] text-[10px] hover:bg-primary-hover transition-all"
                  >
                    <i className="fab fa-amazon mr-2"></i>
                    Buy on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Podcast Appearances ── */}
      <section className="py-24 bg-white dark:bg-surface-dark border-y dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Listen In</p>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">Podcast Appearances</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-light">
              Catch Kent sharing industry insights, career advice, and unfiltered stories on podcasts across the web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {podcasts.map((pod, i) => (
              <div key={i} className="bg-slate-50 dark:bg-black/20 border dark:border-white/5 rounded-lg overflow-hidden flex flex-col">
                {pod.src ? (
                  <iframe
                    src={pod.src}
                    title={pod.title}
                    className="w-full aspect-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-video flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 space-y-3 bg-slate-100 dark:bg-black/30">
                    <i className="fas fa-microphone text-3xl text-primary/30"></i>
                  </div>
                )}
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3">{pod.title}</p>
                  {pod.link && (
                    <a
                      href={pod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-black font-bold uppercase tracking-widest text-[10px] hover:bg-primary-hover transition-all"
                    >
                      <i className="fas fa-headphones"></i>
                      <span>Listen Now</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TikTok Videos ── */}
      <section className="py-24 bg-slate-50 dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Short-Form Content</p>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">TikTok Highlights</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-light">
              Quick tips, behind-the-scenes moments, and coaching gold — follow Kent on TikTok for daily content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {tiktoks.map((vid, i) => (
              <div key={i} className="bg-white dark:bg-surface-dark border dark:border-white/5 rounded-lg overflow-hidden">
                {vid.src ? (
                  <iframe
                    src={vid.src}
                    title={vid.title}
                    className="w-full aspect-[9/16]"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[9/16] flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 space-y-3 bg-slate-50 dark:bg-black/20">
                    <i className="fab fa-tiktok text-4xl text-primary/30"></i>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Coming Soon</span>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{vid.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.tiktok.com/@clarkhenny68"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase tracking-widest text-xs transition-all"
            >
              <i className="fab fa-tiktok"></i>
              <span>Follow on TikTok</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BrandAnalyzer;
