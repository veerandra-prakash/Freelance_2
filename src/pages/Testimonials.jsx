import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  CheckCircle2, 
  MessageSquare, 
  X,
  Award
} from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';

const reviewsData = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'VP of Product',
    company: 'Nexus Cloud Systems',
    category: 'Enterprise CTOs',
    rating: 5,
    quote: 'Nexa transformed our web interface from a complex technical dashboard into an intuitive product our users love. Our engagement metrics jumped 140% within the first month.',
    metric: '+140% Engagement',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Chief Technology Officer',
    company: 'PayStream Inc.',
    category: 'Startup Founders',
    rating: 5,
    quote: 'The speed and architectural rigor Nexa demonstrated during our micro-services migration was outstanding. They hit every deadline without compromising on test coverage.',
    metric: '45ms API Latency',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 3,
    name: 'Marcus Vance',
    role: 'Head of Clinical Innovation',
    company: 'MediVision Labs',
    category: 'Enterprise CTOs',
    rating: 5,
    quote: 'Building AI software in healthcare requires strict compliance and zero errors. Nexa delivered a HIPAA-grade web suite that passed audit with flying colors.',
    metric: 'FDA Class II SaaS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 4,
    name: 'Antoine Laurent',
    role: 'Global Digital Director',
    company: 'Aura Atelier',
    category: 'Design Directors',
    rating: 5,
    quote: 'Our new headless 3D e-commerce platform built by Nexa elevates our luxury brand image while outperforming every competitor on mobile load speed.',
    metric: '0.4s Page Load',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 5,
    name: 'David Kogan',
    role: 'Co-Founder & CEO',
    company: 'Veloce Mobility',
    category: 'Startup Founders',
    rating: 5,
    quote: 'Working with Nexa felt like having an elite in-house engineering team. Their proactive design suggestions saved us months of rework.',
    metric: '$12M Series A',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    verified: true
  },
  {
    id: 6,
    name: 'Jessica Taylor',
    role: 'Head of Design',
    company: 'FinPulse AI',
    category: 'Design Directors',
    rating: 5,
    quote: 'The design system Nexa crafted for our web dashboard gave us an unmatched visual edge in pitch decks and client onboarding.',
    metric: 'Design Award Winner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    verified: true
  }
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const categories = ['All', 'Startup Founders', 'Enterprise CTOs', 'Design Directors'];

  const filteredReviews = activeCategory === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.category === activeCategory);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 space-y-24 font-sans">

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Client Endorsements & Reviews
        </span>

        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          What leaders say about <span className="font-serif-italic font-normal text-accent-gold">Nexa Studio.</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Read verified feedback from CTOs, founders, and product directors who partnered with us to engineer digital platforms.
        </p>

        {/* Trust Score Widget */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-xs shadow-subtle">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900 dark:text-white">4.98 / 5.0</span>
            <span className="text-slate-500">(124 Client Reviews)</span>
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs uppercase tracking-wider hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center space-x-2 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Submit Review</span>
          </button>
        </div>
      </section>

      {/* Featured Testimonial Slider Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialSlider />
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all border ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-semibold shadow-sm'
                  : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-slate-900/80 rounded-xl p-8 border border-slate-200/90 dark:border-slate-800/90 flex flex-col justify-between space-y-6 shadow-subtle hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating & Metric Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {rev.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-serif-italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-slate-900 dark:text-white text-xs truncate">{rev.name}</span>
                    {rev.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate font-mono">
                    {rev.role}, <span className="font-semibold text-slate-900 dark:text-slate-200">{rev.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Review Submission Modal */}
      <AnimatePresence>
        {isSubmitModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-6"
            >
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close review modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Submit Client Feedback</h3>
                <p className="text-slate-500 text-xs">Share your experience collaborating with Nexa Studio.</p>
              </div>

              {submittedSuccess ? (
                <div className="py-8 text-center space-y-3 font-mono">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">Review Received</h4>
                  <p className="text-xs text-slate-500">Thank you. Your feedback has been logged.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-mono uppercase text-slate-600 dark:text-slate-400 block mb-1">Your Name</label>
                      <input required type="text" placeholder="Alex Morgan" className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs focus:outline-none border border-slate-200 dark:border-slate-700" />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase text-slate-600 dark:text-slate-400 block mb-1">Company & Title</label>
                      <input required type="text" placeholder="CTO @ TechCo" className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs focus:outline-none border border-slate-200 dark:border-slate-700" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-600 dark:text-slate-400 block mb-1">Rating</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs focus:outline-none border border-slate-200 dark:border-slate-700">
                      <option value="5">⭐⭐⭐⭐⭐ (5/5 Excellent)</option>
                      <option value="4">⭐⭐⭐⭐ (4/5 Great)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-slate-600 dark:text-slate-400 block mb-1">Feedback</label>
                    <textarea required rows={4} placeholder="Describe the impact Nexa delivered for your team..." className="w-full px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs focus:outline-none border border-slate-200 dark:border-slate-700" />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                  >
                    Submit Endorsement
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
