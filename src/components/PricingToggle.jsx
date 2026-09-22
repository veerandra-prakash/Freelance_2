import React from 'react';
import { motion } from 'framer-motion';

export default function PricingToggle({ isYearly, setIsYearly }) {
  return (
    <div className="flex items-center justify-center space-x-4 font-sans">
      <span
        onClick={() => setIsYearly(false)}
        className={`text-xs uppercase font-mono tracking-wider cursor-pointer transition-colors ${
          !isYearly ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-400'
        }`}
      >
        Monthly Scope
      </span>

      <button
        onClick={() => setIsYearly(!isYearly)}
        className="w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 p-0.5 relative border border-slate-300 dark:border-slate-700 transition-colors focus:outline-none"
        aria-label="Toggle annual retainer"
      >
        <motion.div
          animate={{ x: isYearly ? 26 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="w-6 h-6 rounded-full bg-slate-900 dark:bg-white shadow-sm"
        />
      </button>

      <span
        onClick={() => setIsYearly(true)}
        className={`text-xs uppercase font-mono tracking-wider cursor-pointer flex items-center space-x-2 transition-colors ${
          isYearly ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-400'
        }`}
      >
        <span>Annual Retainer</span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          Save 20%
        </span>
      </span>
    </div>
  );
}
