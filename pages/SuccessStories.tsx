
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  avatar_url: string;
  screenshot_url?: string;
  social_link?: string;
  created_at: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex mb-5 text-primary gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <i key={i} className="fas fa-star text-xs"></i>
    ))}
  </div>
);

const WORD_LIMIT = 50;
const truncate = (text: string) => text.split(' ').slice(0, WORD_LIMIT).join(' ') + '…';

const QuoteText: React.FC<{ quote: string }> = ({ quote }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = quote.split(' ').length > WORD_LIMIT;
  return (
    <div className="flex-grow pr-8">
      <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed">
        "{expanded || !isLong ? quote : truncate(quote)}"
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-2 text-primary text-[10px] font-bold uppercase tracking-widest hover:text-primary/70 transition-colors"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
};

const SuccessStories: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [highlighted, setHighlighted] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setTestimonials(data);
        setLoading(false);
      });
  }, []);

  const scrollToTestimonial = (id: string) => {
    const el = document.getElementById(`testimonial-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlighted(id);
      setTimeout(() => setHighlighted(null), 2000);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Results</h2>
          <h1 className="font-serif text-5xl md:text-7xl text-slate-900 dark:text-white mb-6">Success Stories</h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Join the ranks of actors who didn't just fight their type — they mastered it.
          </p>
        </div>

        {/* Photo Collage */}
        {!loading && testimonials.length > 0 && (
          <div className="mb-24">
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl text-slate-900 dark:text-white mb-2">Real Students. Real Results.</h3>
              <p className="text-primary uppercase tracking-widest text-[10px] font-bold">Kent Kasper Coaching — Student Highlights</p>
            </div>
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2 space-y-2">
              {testimonials
                .filter(t => t.avatar_url || t.screenshot_url)
                .map(t => (
                  <div
                    key={t.id}
                    onClick={() => scrollToTestimonial(t.id)}
                    className="break-inside-avoid overflow-hidden group relative cursor-pointer"
                  >
                    <img
                      src={t.screenshot_url || t.avatar_url}
                      alt={t.author}
                      className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
                      <p className="text-white text-xs font-bold uppercase tracking-widest truncate">{t.author}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        {loading ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-sm uppercase tracking-widest">Loading…</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <i className="fas fa-quote-left text-3xl mb-4 block opacity-30"></i>
            <p className="text-sm uppercase tracking-widest">No testimonials yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                id={`testimonial-${t.id}`}
                className={`group bg-white dark:bg-surface-dark border p-8 relative flex flex-col hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 ${
                  highlighted === t.id
                    ? 'border-primary shadow-2xl shadow-primary/20'
                    : 'border-gray-100 dark:border-white/5'
                }`}
              >
                <i className="fas fa-quote-left text-primary/10 dark:text-primary/10 text-4xl absolute top-6 right-6 pointer-events-none select-none"></i>

                <StarRating rating={5} />
                <QuoteText quote={t.quote} />

                {t.screenshot_url && (
                  <div className="mt-4 mb-2">
                    <img
                      src={t.screenshot_url}
                      alt="Social media testimonial"
                      className="w-full rounded object-contain border dark:border-white/5 max-h-48"
                    />
                  </div>
                )}

                <div className="h-px w-12 bg-primary/20 my-6"></div>

                <div className="flex items-center gap-4">
                  {t.avatar_url ? (
                    <img
                      src={t.avatar_url}
                      alt={t.author}
                      className="w-11 h-11 rounded-full object-cover grayscale flex-shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user text-slate-400"></i>
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider truncate">
                        {t.author}
                      </h4>
                      {t.social_link && (
                        <a href={t.social_link} target="_blank" rel="noopener noreferrer" className="text-primary/50 hover:text-primary transition-colors flex-shrink-0">
                          <i className="fas fa-link text-[10px]"></i>
                        </a>
                      )}
                    </div>
                    <p className="text-[10px] text-primary/70 uppercase tracking-widest truncate mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default SuccessStories;
