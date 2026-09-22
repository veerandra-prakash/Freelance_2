import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send, CheckCircle2, Github, Twitter, Linkedin, Dribbble } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t border-slate-900 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Proposal CTA Box */}
        <div className="p-8 sm:p-14 rounded-2xl bg-slate-900/90 border border-slate-800/80 mb-20 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Q4/Q1 Client Engagements
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Have an ambitious project <span className="font-serif-italic text-slate-300 font-normal">in mind?</span>
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We design and engineer bespoke web platforms, AI systems, and mobile applications for high-velocity teams.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-slate-900 font-semibold text-xs uppercase tracking-widest rounded-full hover:bg-slate-100 transition-all duration-300 flex items-center gap-2 whitespace-nowrap shadow-lg group"
          >
            Get Free Proposal
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-7 h-7 rounded bg-white text-slate-900 flex items-center justify-center font-mono font-bold text-xs tracking-tighter">
                NX
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                NEXA<span className="font-serif-italic text-accent-gold font-normal ml-0.5">studio</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Nexa Studio is a boutique digital design & product engineering practice. We deliver enterprise-grade web applications, AI tools, and design systems for ambitious founders and brands worldwide.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-2.5 pt-2">
              {[
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Studio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services & Capabilities</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Selected Work</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing & Engagement</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Client Endorsements</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-4">Capabilities</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Web Application Engineering</li>
              <li>Design Systems & UI/UX</li>
              <li>AI & Autonomous Workflows</li>
              <li>Mobile App Development</li>
              <li>Cloud Architecture & DevOps</li>
              <li>Technical Advisory & Scale</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-4">Insights Brief</h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to our monthly dispatch on modern software engineering and digital design.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@company.com"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-slate-700 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 p-1.5 bg-white text-slate-900 rounded-md hover:bg-slate-200 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center text-xs text-emerald-400 space-x-1.5 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed to dispatch.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-mono">
          <p>© {new Date().getFullYear()} Nexa Studio Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Protocol</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
