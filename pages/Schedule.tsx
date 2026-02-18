
import React, { useState } from 'react';

const Schedule: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(4);
  const [selectedTime, setSelectedTime] = useState<string | null>('2:00 PM');

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const times = ['10:00 AM', '12:30 PM', '2:00 PM', '4:30 PM', '6:00 PM'];

  return (
    <div className="pt-32 pb-24 bg-slate-50 dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          <div className="animate-fade-in-up">
            <h5 className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4">Elevate Your Career</h5>
            <h1 className="font-serif text-4xl md:text-6xl text-slate-900 dark:text-white leading-tight mb-8">
              Schedule Your <br/><span className="text-primary italic">Strategy Session</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12">
              Join the ranks of actors who have transformed their brand and booked the roles they deserve. This 45-minute deep dive is your first step toward Hollywood Premium status.
            </p>

            <div className="space-y-10">
              {[
                { icon: 'star', title: 'Brand Audit', desc: 'We analyze your current materials and identify gaps.' },
                { icon: 'film', title: 'Type Strategy', desc: 'Define where you fit and how to leverage it.' },
                { icon: 'chart-line', title: 'Actionable Roadmap', desc: 'A step-by-step plan to upgrade your package.' }
              ].map(item => (
                <div key={item.title} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary">
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-white dark:bg-surface-dark border dark:border-white/5 shadow-2xl flex items-center space-x-6 italic">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop" className="w-16 h-16 rounded-full object-cover border-2 border-primary" alt="Kent Kasper" />
              <div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">"My goal isn't just to teach you acting; it's to teach you the business of being YOU."</p>
                <p className="text-primary font-bold uppercase tracking-widest text-[9px] mt-2">— Kent Kasper</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-surface-dark p-8 md:p-12 shadow-2xl border dark:border-white/5 animate-fade-in-right">
            <h2 className="font-display text-xl font-bold text-slate-800 dark:text-white mb-10 flex items-center">
              <i className="far fa-calendar-alt text-primary mr-4"></i> Select Date & Time
            </h2>

            <div className="mb-10 p-6 bg-slate-50 dark:bg-black/20 rounded-lg">
              <div className="flex justify-between items-center mb-8 px-2">
                <button className="text-slate-400 hover:text-primary"><i className="fas fa-chevron-left"></i></button>
                <span className="font-bold text-slate-800 dark:text-white uppercase tracking-widest text-xs">October 2024</span>
                <button className="text-slate-400 hover:text-primary"><i className="fas fa-chevron-right"></i></button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center text-[10px] uppercase font-bold text-slate-400 mb-4">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map(day => (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`h-10 text-xs rounded transition-all flex items-center justify-center ${
                      selectedDate === day 
                        ? 'bg-primary text-black font-bold shadow-lg shadow-primary/20' 
                        : 'text-slate-500 hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
                {times.map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 text-[10px] font-bold rounded border uppercase tracking-widest transition-all ${
                      selectedTime === t
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-slate-200 dark:border-white/10 text-slate-400 hover:border-primary/50'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-black/20 border-transparent focus:ring-primary focus:border-primary dark:text-white text-sm py-4" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Industry Role</label>
                <select className="w-full bg-slate-50 dark:bg-black/20 border-transparent focus:ring-primary focus:border-primary dark:text-white text-sm py-4">
                  <option>Actor — Beginner</option>
                  <option>Actor — Working</option>
                  <option>Stand-Up Comedian</option>
                  <option>Voice-Over Artist</option>
                  <option>Child / Teen Actor</option>
                  <option>Family / Couple</option>
                  <option>Career Transitioner</option>
                  <option>Writer / Director</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Primary Goal</label>
                <textarea rows={3} className="w-full bg-slate-50 dark:bg-black/20 border-transparent focus:ring-primary focus:border-primary dark:text-white text-sm py-4" placeholder="What is the #1 thing holding your career back?"></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs py-5 hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 mt-4">
                Confirm My Session
              </button>
              <p className="text-center text-[9px] text-slate-400 uppercase tracking-widest mt-6">Limited availability. 24h cancellation policy applies.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
