
import React, { useState, useEffect, useRef } from 'react';

const SECRET_KEY = 'kk_testimonials_v1';

interface StoredTestimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  avatarUrl: string;
  screenshotUrl?: string;
  socialLink?: string;
  createdAt: string;
}

const readFile = (file: File, setter: (v: string) => void) => {
  const reader = new FileReader();
  reader.onload = () => setter(reader.result as string);
  reader.readAsDataURL(file);
};

const ImageUpload: React.FC<{
  label: string;
  hint?: string;
  preview: string;
  onImage: (v: string) => void;
  onRemove: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  square?: boolean;
}> = ({ label, hint, preview, onImage, onRemove, inputRef, square }) => {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) readFile(file, onImage);
  };

  return (
    <div>
      <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-2">
        {label} {hint && <span className="text-slate-400 font-normal normal-case tracking-normal">{hint}</span>}
      </label>

      <div
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative cursor-pointer border-2 border-dashed transition-colors p-6 flex flex-col items-center justify-center gap-3 ${
          dragging
            ? 'border-primary bg-primary/5'
            : preview
            ? 'border-primary/40 dark:border-primary/30'
            : 'border-slate-300 dark:border-white/10 hover:border-primary/60'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={e => { const f = e.target.files?.[0]; if (f) readFile(f, onImage); }}
        />

        {preview ? (
          <div className="flex flex-col items-center gap-3 w-full">
            {square ? (
              <img src={preview} alt="Preview" className="max-h-48 object-contain border dark:border-white/10" />
            ) : (
              <img src={preview} alt="Preview" className="w-20 h-20 rounded-full object-cover grayscale border-2 border-primary" />
            )}
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Drop a new image to replace</p>
          </div>
        ) : (
          <>
            <i className={`fas ${square ? 'fa-image' : 'fa-user-circle'} text-3xl text-slate-300 dark:text-white/20`}></i>
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              <span className="font-bold text-primary">Click to upload</span> or drag & drop
            </p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">PNG, JPG, WEBP</p>
          </>
        )}
      </div>

      {preview && (
        <button
          type="button"
          onClick={e => { e.stopPropagation(); onRemove(); if (inputRef.current) inputRef.current.value = ''; }}
          className="mt-2 text-[10px] text-slate-400 hover:text-red-400 uppercase tracking-widest transition-colors"
        >
          Remove
        </button>
      )}
    </div>
  );
};

const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<StoredTestimonial[]>([]);
  const [form, setForm] = useState({ author: '', role: '', quote: '', socialLink: '' });
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const [screenshotPreview, setScreenshotPreview] = useState<string>('');
  const [saved, setSaved] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const avatarRef = useRef<HTMLInputElement>(null);
  const screenshotRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(SECRET_KEY);
    if (stored) setTestimonials(JSON.parse(stored));
  }, []);

  const persist = (list: StoredTestimonial[]) => {
    localStorage.setItem(SECRET_KEY, JSON.stringify(list));
    setTestimonials(list);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.author || !form.quote) return;

    const entry: StoredTestimonial = {
      id: Date.now().toString(),
      author: form.author,
      role: form.role,
      quote: form.quote,
      avatarUrl: avatarPreview,
      screenshotUrl: screenshotPreview || undefined,
      socialLink: form.socialLink || undefined,
      createdAt: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };

    persist([entry, ...testimonials]);
    setForm({ author: '', role: '', quote: '', socialLink: '' });
    setAvatarPreview('');
    setScreenshotPreview('');
    if (avatarRef.current) avatarRef.current.value = '';
    if (screenshotRef.current) screenshotRef.current.value = '';
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleDelete = (id: string) => {
    persist(testimonials.filter(t => t.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-100 dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2">Admin Panel</p>
          <h1 className="font-serif text-4xl text-slate-900 dark:text-white">Add Testimonial</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Testimonials added here appear on the Success Stories page.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-surface-dark border dark:border-white/5 p-8 mb-12 space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-2">
                Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                value={form.author}
                onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
                required
                placeholder="e.g. Jane Smith"
                className="w-full bg-slate-50 dark:bg-background-dark border dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-2">
                Role / Title
              </label>
              <input
                type="text"
                value={form.role}
                onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                placeholder="e.g. Actor & Voice Artist"
                className="w-full bg-slate-50 dark:bg-background-dark border dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-2">
              Testimonial Text <span className="text-primary">*</span>
            </label>
            <textarea
              value={form.quote}
              onChange={e => setForm(f => ({ ...f, quote: e.target.value }))}
              required
              rows={5}
              placeholder="Enter the testimonial text..."
              className="w-full bg-slate-50 dark:bg-background-dark border dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          {/* Avatar */}
          <ImageUpload
            label="Avatar Photo"
            hint="(optional)"
            preview={avatarPreview}
            onImage={setAvatarPreview}
            onRemove={() => { setAvatarPreview(''); if (avatarRef.current) avatarRef.current.value = ''; }}
            inputRef={avatarRef}
          />

          {/* Screenshot */}
          <div className="border-t dark:border-white/5 pt-6">
            <ImageUpload
              label="Social Media / IMDB Screenshot"
              hint="(optional)"
              preview={screenshotPreview}
              onImage={setScreenshotPreview}
              onRemove={() => { setScreenshotPreview(''); if (screenshotRef.current) screenshotRef.current.value = ''; }}
              inputRef={screenshotRef}
              square
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 mb-2">
              Social Media Link <span className="text-slate-400 font-normal normal-case tracking-normal">(optional)</span>
            </label>
            <input
              type="url"
              value={form.socialLink}
              onChange={e => setForm(f => ({ ...f, socialLink: e.target.value }))}
              placeholder="https://instagram.com/username"
              className="w-full bg-slate-50 dark:bg-background-dark border dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              className="px-10 py-4 bg-primary text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary/80 transition-all"
            >
              Add Testimonial
            </button>
            {saved && (
              <span className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <i className="fas fa-check"></i> Saved!
              </span>
            )}
          </div>
        </form>

        {/* Saved testimonials list */}
        {testimonials.length > 0 && (
          <div>
            <h2 className="font-serif text-2xl text-slate-900 dark:text-white mb-6">
              Saved Testimonials <span className="text-primary">({testimonials.length})</span>
            </h2>
            <div className="space-y-4">
              {testimonials.map(t => (
                <div key={t.id} className="bg-white dark:bg-surface-dark border dark:border-white/5 p-6 flex items-start gap-5">
                  {t.avatarUrl ? (
                    <img src={t.avatarUrl} alt={t.author} className="w-12 h-12 rounded-full object-cover grayscale flex-shrink-0" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user text-slate-400"></i>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white text-sm">{t.author}</p>
                        {t.role && <p className="text-primary text-[10px] uppercase tracking-widest mt-0.5">{t.role}</p>}
                        {t.screenshotUrl && (
                          <span className="inline-flex items-center gap-1 mt-1 text-[10px] text-slate-400 uppercase tracking-widest">
                            <i className="fas fa-image text-primary/60"></i> Screenshot attached
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {t.socialLink && (
                          <a href={t.socialLink} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-xs">
                            <i className="fas fa-link"></i>
                          </a>
                        )}
                        {deleteId === t.id ? (
                          <span className="flex items-center gap-2 text-xs">
                            <button onClick={() => handleDelete(t.id)} className="text-red-400 font-bold uppercase tracking-widest hover:text-red-300 transition-colors">Delete</button>
                            <button onClick={() => setDeleteId(null)} className="text-slate-400 uppercase tracking-widest hover:text-slate-300 transition-colors">Cancel</button>
                          </span>
                        ) : (
                          <button onClick={() => setDeleteId(t.id)} className="text-slate-300 dark:text-slate-600 hover:text-red-400 transition-colors text-xs">
                            <i className="fas fa-trash"></i>
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm italic mt-3 leading-relaxed line-clamp-2">"{t.quote}"</p>
                    <p className="text-slate-300 dark:text-slate-600 text-[10px] mt-2">{t.createdAt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {testimonials.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <i className="fas fa-quote-left text-3xl mb-4 block opacity-30"></i>
            <p className="text-sm uppercase tracking-widest">No testimonials added yet</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminTestimonials;
