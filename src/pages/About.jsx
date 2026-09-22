import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Shield, HeartHandshake, Linkedin, Twitter, Github } from 'lucide-react';

export default function About() {
  const coreValues = [
    { icon: Target, title: 'Extreme Quality First', desc: 'We never compromise on software performance, code cleanliness, or UI polish. Every pull request undergoes peer review.' },
    { icon: Compass, title: 'Radical Transparency', desc: 'No hidden billing or vague estimates. You receive direct Slack channels, daily GitHub commits, and clear retrospectives.' },
    { icon: Shield, title: 'Security & Scalability', desc: 'Built-in security audits, GDPR/SOC2 compliance, and resilient cloud architecture designed to handle peak traffic.' },
    { icon: HeartHandshake, title: 'Long-term Growth Partner', desc: 'We operate as an extension of your product leadership team, proactively advising on system architecture and product strategy.' }
  ];

  const team = [
    {
      name: 'Alex Vance',
      role: 'Co-Founder & Chief Product Architect',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      bio: 'Ex-Google Product Lead with 12+ years of experience engineering high-concurrency SaaS applications.'
    },
    {
      name: 'Sophia Lin',
      role: 'Head of UI/UX & Design Systems',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
      bio: 'Award-winning design lead passionate about typography hierarchy, micro-interactions, and accessible web systems.'
    },
    {
      name: 'David Sterling',
      role: 'VP of AI & Cloud Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      bio: 'Specialist in distributed LLM architectures, vector search databases, and zero-latency cloud infrastructure.'
    },
    {
      name: 'Elena Rostova',
      role: 'Principal Growth & Data Strategist',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      bio: 'Data architect who has driven over $50M in enterprise digital transformation funnels.'
    }
  ];

  const milestones = [
    { year: '2021', title: 'Studio Founded', desc: 'Established in San Francisco with senior engineers supporting venture-backed startups.' },
    { year: '2023', title: 'Expanded AI Division', desc: 'Pioneered custom LLM agent frameworks and crossed 100+ production application deployments.' },
    { year: '2025', title: 'Global Practice Recognition', desc: 'Recognized as an elite digital agency with over $45M in client revenue generated.' },
    { year: '2026', title: 'Next-Gen Nexa Framework', desc: 'Launched autonomous workflow systems serving enterprise clients worldwide.' }
  ];

  return (
    <div className="pt-32 pb-24 space-y-28 font-sans">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Studio Story & Philosophy
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          We are engineers and designers building the <span className="font-serif-italic font-normal text-accent-gold">future of software.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Nexa Studio was founded to bridge the gap between slow consultancies and high-velocity engineering. We deliver senior product architecture built for speed and long-term scale.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-900/80 p-8 sm:p-12 rounded-xl border border-slate-200/90 dark:border-slate-800/90 space-y-4 shadow-subtle">
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center font-mono">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              To empower tech companies, founders, and enterprises with state-of-the-art web applications, AI workflows, and design systems that outperform market competitors.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900/80 p-8 sm:p-12 rounded-xl border border-slate-200/90 dark:border-slate-800/90 space-y-4 shadow-subtle">
            <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center font-mono">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              To set the global benchmark for digital product craftsmanship — pairing understated aesthetic design with sub-second performance and measurable financial returns.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Operating Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            The values that guide every <span className="font-serif-italic font-normal text-slate-500">commit.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/80 p-6 rounded-xl border border-slate-200/90 dark:border-slate-800/90 space-y-3 shadow-subtle">
              <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center">
                <v.icon className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">{v.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Senior Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Principal architects & <span className="font-serif-italic font-normal text-slate-500">design directors.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/80 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 space-y-4 shadow-subtle">
              <div className="aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6 pt-0 space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">{member.name}</h3>
                <p className="text-xs font-mono text-accent-gold">{member.role}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-2xl space-y-3">
          <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            Studio Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Key milestones in our <span className="font-serif-italic font-normal text-slate-500">growth.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900/80 p-6 rounded-xl border border-slate-200/90 dark:border-slate-800/90 space-y-2 shadow-subtle">
              <span className="text-2xl font-mono font-bold text-slate-900 dark:text-white">{m.year}</span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">{m.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
