
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  // ── Original 12 ──────────────────────────────────────────────────────────
  {
    author: 'Armen Jesralyan',
    role: 'Actor',
    quote: "I am thrilled to recommend Kent Kasper as an exceptional acting coach. I recently sat with Kent to review my career and approach to auditions and the overall business. His wealth of knowledge and guidance is extremely helpful. He was able to quickly identify my strengths and weaknesses to develop a plan to better market myself for casting directors and agents within the industry. Kent has a very affable approach towards his students. He will listen to your career story and provide insightful advice to overcome any challenges or obstacles.",
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-91e1f0a3caf5?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Leila Sounds',
    role: 'Actor & Performer',
    quote: "Kent Kasper is such an inspiration to me. I wasn't really sure if I wanted to get into acting until I met him and started taking his classes. Since then he's gotten me lots of gigs, introduced me to people in the industry, and red carpet events. He's brilliant, and has written multiple books that I've read as well that are incredibly informative. I highly recommend him as an acting coach. Anyone that's looking for a serious career in the industry needs to contact Kent Kasper.",
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Steve DiGennaro',
    role: 'Actor — Signed with Celebrity Lookalike Agency',
    quote: "I am beyond thrilled to announce that I have officially signed with a top world-wide celebrity lookalike agency in Hollywood, California, as Al Capone. I owe it all to my amazing branding, marketing and packaging coach — Audition Specialist Kent Kasper. Your guidance and support have been invaluable. Thank you for believing in me and pushing me to reach for the stars!",
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Steve DiGennaro',
    role: 'Actor — Branding & Marketing',
    quote: "Just had another amazing eye-opening session with my branding & marketing coach Kent Kasper. I am finally learning to embrace the business side of acting. The understanding of the business landscape is just as crucial for success. Coach Kent has helped me by leaps and bounds. Wish I found him much sooner.",
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Ivan Katz',
    role: 'Working Actor',
    quote: "Although I have been in the acting business now for several years, I needed a refresher on the current best methods of marketing and branding myself. We met for over an hour and went over all my acting sites, current and future strategies and additional marketing techniques. I cannot begin to tell you how valuable Kent's input was. I am immediately implementing his specific suggestions and initiating long-term marketing plans!",
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Phillip Jeon',
    role: 'Actor',
    quote: "Working with Kent was great. We had our first (of many) sessions. Before and during the session he looked at my profiles and gave me pointers of what I was missing. He definitely sold me on needing an ongoing audition coach. Near the end he gave me a bunch of homework to do. Even after the session was over he followed up, which was the thing that most stood out to me. I highly recommend his services or even just a consultation.",
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Meira Muskal',
    role: 'Actor',
    quote: "Had an amazing coaching session with Coach Kent Kasper! We strategized and focused on how to expand my horizons and how to reach my goals! With several paid gigs under my belt I am ready to take this to the next level!",
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Douglas Zeolla',
    role: 'Actor & Model',
    quote: "I'm pursuing a career in acting and modeling, and I've been fortunate to find an exceptional coach, Kent Kasper, with whom I've had a few productive sessions. I highly recommend him to anyone seeking a talented coach to help launch their career. He's a true professional and a valuable resource.",
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Heidi Damelio',
    role: 'Voice-Over Artist',
    quote: "My 2nd voice over I booked with the help of Coach Kent Kasper prepping me. His guidance makes all the difference.",
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Marla Feldman Freeman',
    role: 'Actor',
    quote: "Kent gives wonderful advice on how to package yourself. He knows what the casting directors look for and how to make yourself stand out in a competitive industry.",
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d674321?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Parent of Acting Student',
    role: 'Acting Parent',
    quote: "I cannot recommend Kent Kasper enough as an acting coach! My son recently had his first coaching session with Kent, and it was nothing short of transformative. Kent offered us a complimentary introductory session over the phone, which immediately put my son at ease. He made time for us on a Sunday, showcasing his commitment. Kent expertly guided my son through five different commercials — his insights on how to break into character were invaluable. Whether you're a seasoned actor or just starting out, I highly recommend booking a session with Kent.",
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Cameron Quinn Robles',
    role: 'Actor',
    quote: "Being with you was much more informative and fun! Thank you so much Coach Kent.",
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },

  // ── 12 Additional ────────────────────────────────────────────────────────
  {
    author: 'Tank Kelly',
    role: 'Working Actor — 5 Years with Kent',
    quote: "Kent Kasper is the real deal! His knowledge about the business is priceless. Without his guidance I wouldn't have made it to the next level. Thank you coach!",
    avatarUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Emily See',
    role: 'Recently Signed Actor',
    quote: "Within just three months I have all my marketing materials together and within 5 days of submitting I already have my first agent! This wouldn't have happened without Kent Kasper.",
    avatarUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Felix Ysais',
    role: 'TV & Film Actor',
    quote: "Kent has helped me significantly improve my audition skills. I learned more in one session than I have in any other training. He's the best!",
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Vallarie Golden',
    role: 'Film Actress',
    quote: "I booked my first feature film! Kent's coaching session made all the difference. I walked on set feeling prepared and confident. You're awesome Kent!",
    avatarUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Brian Howard',
    role: 'Represented Actor',
    quote: "Kent helped me land top tier representation in just weeks! His strategic approach and industry knowledge is unmatched. Highly recommend!",
    avatarUrl: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Lizzy M\'Safiri',
    role: 'Actor & Content Creator',
    quote: "Seriously guys! Check him out and reach out! He really knows his stuff and wants to help out, don't hesitate. @kent_kasper at KentKasper.net — he is amazing!",
    avatarUrl: 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Angela Lavigne',
    role: 'Acting Parent — Daughter Signed with Top LA Manager',
    quote: "Kent's coaching and branding helped our daughter Temper with character development, auditioning, and booking the room. We are absolutely thrilled to announce she is now signing with a top LA manager — something we never could have done without Coach Kent.",
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Youth Actor',
    role: 'Signed with Avalon Artists Group — Youth Division',
    quote: "After three years of guidance from Kent Kasper Acting Coach, I am officially signed with agent Ted Maier from the Avalon Artists Group — Youth Division! Kent's mentorship and belief in me made this possible.",
    avatarUrl: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Mirror Images Student',
    role: 'Actor — Signed with Mirror Images Agency',
    quote: "I can't believe how far I've come and the fact I'm signed with Mirror Images! Super grateful to Kent Kasper Acting Coach — he's amazing. Don't hesitate any longer to seize the opportunity. Share yourself with the world!",
    avatarUrl: 'https://images.unsplash.com/photo-1546961342-ea5f60b193a4?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Coaching Client',
    role: 'Actor',
    quote: "Coach Kent doesn't hold back with industry knowledge, and he actually CARES and is always rooting for his students. He reviewed all my materials and gave me more attention than most other acting coaches — and he gets straight down to business.",
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
  {
    author: 'Andy Rooney',
    role: 'Photographer & Industry Professional',
    quote: "Kent's book about the highs and lows in acting is a great read and easy to relate to — good laughs, and basically a reminder that everyone is not alone in this journey.",
    avatarUrl: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=400&auto=format&fit=crop',
    rating: 5
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex mb-5 text-primary gap-0.5">
    {Array.from({ length: rating }).map((_, i) => (
      <i key={i} className="fas fa-star text-xs"></i>
    ))}
  </div>
);

const SuccessStories: React.FC = () => {
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
          {testimonials.map((t, idx) => (
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

              {/* Divider */}
              <div className="h-px w-12 bg-primary/20 my-6"></div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatarUrl}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover grayscale flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider truncate">
                    {t.author}
                  </h4>
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
