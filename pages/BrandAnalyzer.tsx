
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

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

// Placeholder podcast episodes — replace src with real embed URLs
const podcasts = [
  { title: "Podcast Episode 1", src: "" },
  { title: "Podcast Episode 2", src: "" },
  { title: "Podcast Episode 3", src: "" },
];

// Placeholder TikTok videos — replace src with real TikTok embed URLs
const tiktoks = [
  { title: "TikTok Video 1", src: "" },
  { title: "TikTok Video 2", src: "" },
  { title: "TikTok Video 3", src: "" },
];

const BrandAnalyzer: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const analyzeBrand = async () => {
    if (!description) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze the following actor description and provide a brand strategy: "${description}"`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              marketType: { type: Type.STRING, description: "The actor's primary 'type' or archetype." },
              tagline: { type: Type.STRING, description: "A catchy branding tagline." },
              strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key branding strengths." },
              opportunities: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Marketing opportunities." }
            },
            required: ["marketType", "tagline", "strengths", "opportunities"]
          }
        }
      });
      const data = JSON.parse(response.text);
      setResult(data);
    } catch (error) {
      console.error("AI Analysis failed:", error);
      alert("Something went wrong with the AI analysis. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcasts.map((pod, i) => (
              <div key={i} className="bg-slate-50 dark:bg-black/20 border dark:border-white/5 rounded-lg overflow-hidden">
                {pod.src ? (
                  <iframe
                    src={pod.src}
                    title={pod.title}
                    className="w-full h-40"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-40 flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 space-y-3">
                    <i className="fas fa-microphone text-3xl text-primary/30"></i>
                    <span className="text-[10px] uppercase tracking-widest font-bold">Coming Soon</span>
                  </div>
                )}
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{pod.title}</p>
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
              href="https://www.tiktok.com/@kentkasper"
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

      {/* ── AI Brand Analyzer ── */}
      <section className="py-24 bg-white dark:bg-surface-dark border-t dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Powered by AI</p>
            <h2 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-6">Your Brand, Analyzed</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
              Use the same branding framework Kent teaches in his coaching sessions. Describe yourself as an actor and get an instant AI-powered archetype assessment — your type, your tagline, your strategy.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-surface-dark p-8 md:p-12 shadow-2xl border dark:border-white/5 rounded-lg">
            <div className="mb-10">
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Describe Your Essence</label>
              <textarea
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-white dark:bg-black/20 border-transparent focus:ring-primary focus:border-primary dark:text-white text-base py-6 px-6 resize-none rounded"
                placeholder="Example: Mid-30s, intense eyes, sharp features. Naturally fits 'young tech CEO' or 'determined detective' archetypes. Performance style is subtle and internal."
              />
            </div>

            <button
              onClick={analyzeBrand}
              disabled={loading || !description}
              className="w-full bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs py-6 hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 disabled:opacity-50 flex items-center justify-center space-x-3"
            >
              {loading ? (
                <>
                  <i className="fas fa-circle-notch fa-spin"></i>
                  <span>Analyzing Your Brand...</span>
                </>
              ) : (
                <>
                  <i className="fas fa-wand-magic-sparkles"></i>
                  <span>Generate My Brand Strategy</span>
                </>
              )}
            </button>

            {result && (
              <div className="mt-16 animate-fade-in-up">
                <div className="p-8 border-2 border-primary/20 bg-primary/5 rounded-lg mb-10">
                  <span className="text-primary font-bold uppercase tracking-[0.3em] text-[9px] mb-2 block">Your Archetype</span>
                  <h3 className="font-serif text-3xl text-slate-900 dark:text-white mb-2">{result.marketType}</h3>
                  <p className="text-primary italic font-serif text-xl">"{result.tagline}"</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-primary/20 pb-2">Core Strengths</h4>
                    <ul className="space-y-4">
                      {result.strengths.map((s: string, i: number) => (
                        <li key={i} className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                          <i className="fas fa-check text-primary/60 text-xs"></i>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-primary/20 pb-2">Market Opportunities</h4>
                    <ul className="space-y-4">
                      {result.opportunities.map((o: string, i: number) => (
                        <li key={i} className="flex items-center space-x-3 text-sm text-slate-700 dark:text-slate-300">
                          <i className="fas fa-lightbulb text-primary/60 text-xs"></i>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BrandAnalyzer;
