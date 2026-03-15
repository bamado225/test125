
import React, { useState, useEffect } from 'react';

const SECRET_KEY = 'kk_testimonials_v1';

interface StoredTestimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  avatarUrl: string;
  screenshotUrl?: string;
  socialLink?: string;
}


const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex mb-5 text-primary gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <i key={i} className="fas fa-star text-xs"></i>
    ))}
  </div>
);

const SuccessStories: React.FC = () => {
  const [added, setAdded] = useState<StoredTestimonial[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(SECRET_KEY);
    if (stored) setAdded(JSON.parse(stored));
  }, []);

  const allTestimonials = added.map(t => ({
    author: t.author,
    role: t.role,
    quote: t.quote,
    avatarUrl: t.avatarUrl,
    screenshotUrl: t.screenshotUrl,
    socialLink: t.socialLink,
    rating: 5,
  }));

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

        {/* Highlight Video */}
        <div className="relative aspect-video w-full max-w-5xl mx-auto mb-24 bg-black group overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2940&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            alt="Kent Kasper student highlights"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <button className="w-24 h-24 bg-primary text-black rounded-full flex items-center justify-center text-3xl shadow-2xl transition-all hover:scale-110 pl-2">
              <i className="fas fa-play"></i>
            </button>
            <div className="mt-10 text-center">
              <h3 className="font-serif text-3xl text-white mb-2">Real Students. Real Results.</h3>
              <p className="text-primary uppercase tracking-widest text-[10px] font-bold">Kent Kasper Coaching — Student Highlights</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-surface-dark border border-gray-100 dark:border-white/5 p-8 relative flex flex-col hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Decorative quote icon — top-right, does not overlap text */}
              <i className="fas fa-quote-left text-primary/10 dark:text-primary/10 text-4xl absolute top-6 right-6 pointer-events-none select-none"></i>

              {/* Stars */}
              <StarRating rating={t.rating ?? 5} />

              {/* Quote */}
              <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed flex-grow pr-8">
                "{t.quote}"
              </p>

              {/* Screenshot */}
              {t.screenshotUrl && (
                <div className="mt-4 mb-2">
                  <img
                    src={t.screenshotUrl}
                    alt="Social media testimonial"
                    className="w-full rounded object-contain border dark:border-white/5 max-h-48"
                  />
                </div>
              )}

              {/* Divider */}
              <div className="h-px w-12 bg-primary/20 my-6"></div>

              {/* Author */}
              <div className="flex items-center gap-4">
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
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
                    {t.socialLink && (
                      <a href={t.socialLink} target="_blank" rel="noopener noreferrer" className="text-primary/50 hover:text-primary transition-colors flex-shrink-0">
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

      </div>
    </div>
  );
};

export default SuccessStories;
