import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code,
  Smartphone,
  BrainCircuit,
  Cloud,
  CheckCircle2,
  TrendingUp,
  Zap,
  Star
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import TestimonialSlider from '../components/TestimonialSlider';

export default function Home() {
  const heroAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  ];

  const servicesPreview = [
    {
      icon: Code,
      title: 'Web Application Engineering',
      desc: 'High-performance React & Next.js platforms built with scalable design systems, sub-second latency, and fluid interaction models.',
      badge: 'Core Service',
      id: 'web-development'
    },
    {
      icon: BrainCircuit,
      title: 'AI & Autonomous Workflows',
      desc: 'Custom LLM integrations, intelligent agentic automation, and real-time data pipelines designed to cut operating costs by 40%.',
      badge: 'High Demand',
      id: 'ai-solutions'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Ecosystems',
      desc: 'Cross-platform iOS & Android mobile applications engineered for 60fps animations, native API performance, and offline capability.',
      badge: 'Popular',
      id: 'mobile-apps'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Architecture',
      desc: 'Resilient Kubernetes & AWS cloud infrastructure with automated CI/CD deployment pipelines and SOC2 enterprise security.',
      badge: 'Enterprise',
      id: 'cloud-architecture'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Product Architecture & Audit', desc: 'We analyze your market position, system bottlenecks, and user workflows to produce a technical blueprint.' },
    { step: '02', title: 'Design System & UX Prototype', desc: 'Interactive high-fidelity prototypes and accessible component tokens crafted for speed and visual consistency.' },
    { step: '03', title: 'High-Velocity Engineering', desc: 'Continuous deployment cycles with daily builds, automated test coverage, and transparent Slack integration.' },
    { step: '04', title: 'Production Launch & Scale', desc: 'Zero-downtime deployment, real-time performance telemetry, and ongoing infrastructure optimization.' }
  ];

  return (
    <div className="space-y-28 sm:space-y-36 pb-20 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 lg:pt-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8 text-center lg:text-left"
            >
              {/* Monospace Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
                <span>Digital Design & Product Engineering Studio</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                We engineer <span className="font-serif-italic text-accent-gold font-normal">high-impact</span> digital products for ambitious market leaders.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Nexa Studio pairs boutique product design with enterprise software engineering. We build web applications, mobile platforms, and AI systems that turn complex workflows into intuitive software.
              </p>

              {/* CTAs & Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold text-xs uppercase tracking-widest rounded-full shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  Schedule Technical Brief
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </Link>

                <Link
                  to="/portfolio"
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase tracking-widest rounded-full border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  View Selected Work
                </Link>
              </div>

              {/* Client Avatars */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80">
                <div className="flex -space-x-2.5">
                  {heroAvatars.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Client avatar"
                      className="w-8 h-8 rounded-full border border-white dark:border-slate-900 object-cover"
                    />
                  ))}
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-1 font-mono">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="font-bold text-slate-900 dark:text-white ml-1">4.95 / 5.0</span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Endorsed by 120+ technology founders & venture partners</p>
                </div>
              </div>

            </motion.div>

            {/* Hero Right Visual Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Floating Metric 1 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-5 -left-5 z-20 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-subtle border border-slate-200 dark:border-slate-800 flex items-center space-x-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-400">Avg. Growth Rate</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">+240% Automation</p>
                  </div>
                </motion.div>

                {/* Floating Metric 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-5 -right-5 z-20 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-subtle border border-slate-200 dark:border-slate-800 flex items-center space-x-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-400">Lighthouse Rating</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">99/100 Core Vitals</p>
                  </div>
                </motion.div>

                {/* Main Dashboard Preview Card */}
                <div className="bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-dark-card space-y-6 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">nexa-system-v2.4.0</span>
                  </div>

                  <div className="space-y-4 font-mono">
                    <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-400 uppercase tracking-widest">Enterprise AI Node</span>
                        <span className="px-2 py-0.5 rounded text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">ACTIVE API</span>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">$1,420,800.00</p>
                        <p className="text-[11px] text-slate-500">Real-time revenue engine</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                        <p className="text-slate-500 text-[10px] uppercase">Latency</p>
                        <p className="text-sm font-bold text-white mt-0.5">38ms</p>
                      </div>
                      <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
                        <p className="text-slate-500 text-[10px] uppercase">Uptime</p>
                        <p className="text-sm font-bold text-white mt-0.5">99.99%</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ANIMATED COUNTERS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y border-slate-200/90 dark:border-slate-800/90 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-sans">
          
          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
              <AnimatedCounter value={250} suffix="+" />
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Projects Shipped
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
              <AnimatedCounter value={99.4} suffix="%" duration={2.5} />
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Client Satisfaction Rate
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
              <AnimatedCounter value={45} prefix="$" suffix="M+" />
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Client Value Generated
            </p>
          </div>

          <div className="space-y-1">
            <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
              <AnimatedCounter value={15} suffix="+" />
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
              Global Design Awards
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Engineered Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            High-converting digital solutions for <span className="font-serif-italic font-normal text-slate-500 dark:text-slate-400">modern teams.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            From technical architecture to high-availability deployment, we manage the complete software lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesPreview.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900/80 p-8 rounded-xl border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group shadow-subtle"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-accent-gold transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  to={`/services/${item.id}`}
                  className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                >
                  Explore Capability
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 text-white rounded-2xl p-8 sm:p-14 border border-slate-800/80 shadow-2xl space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-800 text-slate-300 border border-slate-700">
              Delivery Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              How we take your product from brief <span className="font-serif-italic text-slate-300 font-normal">to production.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-800 pt-10">
            {processSteps.map((p, idx) => (
              <div key={idx} className="space-y-3 group">
                <span className="text-3xl font-mono font-bold text-accent-gold">
                  {p.step}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Trusted by technology leaders <span className="font-serif-italic font-normal text-slate-500">worldwide.</span>
          </h2>
        </div>

        <TestimonialSlider />
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-950 p-10 sm:p-16 border border-slate-800 text-center space-y-8 shadow-dark-card">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-900 text-slate-300 border border-slate-800">
              Start Project
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Ready to engineer your next <span className="font-serif-italic text-slate-300 font-normal">digital advantage?</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Book a 30-minute technical discovery session with our engineering directors. Confidential, zero commitment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-semibold text-xs uppercase tracking-widest rounded-full shadow-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
            >
              Book Strategy Session
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-semibold text-xs uppercase tracking-widest rounded-full border border-slate-800 hover:border-slate-700 transition-colors"
            >
              Review Retainer Options
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
