import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'VP of Engineering',
    company: 'CloudScale Tech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Nexa completely transformed our SaaS platform. Their engineering team delivered an ultra-responsive web app with fluid Framer Motion micro-animations that boosted our active engagement by 180%. Exceptional work!',
    rating: 5,
    tag: 'SaaS Platform'
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Apex AI Startup',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Working with Nexa felt like having a top 1% product engineering team in-house. They took our complex AI workflow requirements and built an elegant, minimal UI that enterprise investors loved.',
    rating: 5,
    tag: 'AI Startup'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Head of Product',
    company: 'Vanguard Marketing',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'The Nexa team is unmatched in design aesthetics and delivery speed. They redesigned our enterprise marketing suite in under 6 weeks, resulting in a 240% increase in lead conversion rates.',
    rating: 5,
    tag: 'Growth Engine'
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto font-sans">
      <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-8 sm:p-14 shadow-subtle relative border border-slate-200/90 dark:border-slate-800/90">
        
        {/* Quote Icon */}
        <div className="absolute top-8 right-10 text-slate-200 dark:text-slate-800 pointer-events-none">
          <Quote className="w-20 h-20 stroke-[1]" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.35 }}
            className="relative z-10 space-y-8"
          >
            {/* Tag & Rating */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded text-[10px] font-mono tracking-widest uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                {current.tag}
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-3xl font-serif-italic text-slate-900 dark:text-slate-100 leading-relaxed">
              "{current.content}"
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center space-x-4 pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                  {current.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {current.role} • <span className="text-slate-900 dark:text-slate-200 font-semibold">{current.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between pt-8 mt-6">
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-slate-900 dark:bg-white'
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
