import React from 'react';
import PortfolioFilter from '../components/PortfolioFilter';

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24 space-y-16 font-sans">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Selected Portfolio & Work
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          A showcase of <span className="font-serif-italic font-normal text-accent-gold">engineering excellence.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore web platforms, AI systems, and digital brand experiences engineered for high-growth tech founders.
        </p>
      </section>

      {/* Main Filterable Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PortfolioFilter />
      </section>

    </div>
  );
}
