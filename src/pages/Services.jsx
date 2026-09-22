import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, Smartphone, BrainCircuit, Cloud, Layers, BarChart3, CheckCircle2, ArrowUpRight } from 'lucide-react';

const allServices = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Custom Web Application Engineering',
    desc: 'High-performance React & Next.js single-page applications, progressive web apps, and enterprise SaaS platforms built for zero latency.',
    features: ['React & Next.js Modern Stack', 'Framer Motion Interaction Models', 'SEO & Core Web Vitals 99+ Optimization', 'Real-time Telemetry & Data Feeds'],
    badge: 'Popular'
  },
  {
    id: 'ai-solutions',
    icon: BrainCircuit,
    title: 'Enterprise AI & Autonomous Workflows',
    desc: 'Custom LLM fine-tuning, RAG vector search architectures, autonomous task agents, and intelligent data extraction pipelines.',
    features: ['OpenAI & Claude LLM Integration', 'Vector Database Search (Pinecone/Weaviate)', 'Automated Workflow Pipelines', 'Custom AI Chat Agents'],
    badge: 'High Demand'
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Cross-Platform Mobile Engineering',
    desc: 'Fluid React Native & Flutter mobile apps delivering native 60fps performance across iOS & Android with offline data sync.',
    features: ['iOS & Android Dual Deployment', 'Push Notifications Engine', 'Biometric Security Authentication', 'In-App Purchasing & Stripe'],
    badge: 'Core Service'
  },
  {
    id: 'cloud-architecture',
    icon: Cloud,
    title: 'Cloud & DevOps Infrastructure',
    desc: 'Scalable AWS, GCP, and Kubernetes cloud infrastructure configured for automated CI/CD and zero-downtime releases.',
    features: ['Docker & Kubernetes Clusters', 'Infrastructure as Code (Terraform)', '24/7 Security & Monitoring', 'SOC2 Compliance Readiness'],
    badge: 'Enterprise'
  },
  {
    id: 'ui-ux-design',
    icon: Layers,
    title: 'UI/UX Design Systems & Strategy',
    desc: 'Interactive Figma prototypes, accessibility-compliant design tokens, and optimized user conversion funnels.',
    features: ['Complete Figma Design System', 'User Testing & Wireframing', 'Dark/Light Theme Tokens', 'Minimal Editorial Aesthetics'],
    badge: 'Design'
  },
  {
    id: 'growth-marketing',
    icon: BarChart3,
    title: 'Growth Marketing & Technical SEO',
    desc: 'Data-driven funnel engineering, automated conversion tracking, speed optimization, and search engine domination.',
    features: ['Technical Core Web Vitals Audit', 'Conversion Rate Optimization (CRO)', 'Analytics & Event Tracking', 'Lead Gen Funnel Design'],
    badge: 'Growth'
  }
];

const techStack = [
  { category: 'Frontend', items: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Next.js', 'TypeScript'] },
  { category: 'Backend & AI', items: ['Node.js', 'Python', 'FastAPI', 'OpenAI API', 'LangChain', 'PostgreSQL'] },
  { category: 'Cloud & Mobile', items: ['AWS', 'Docker', 'Kubernetes', 'React Native', 'Redis', 'Vercel'] }
];

export default function Services() {
  const [activeTechCategory, setActiveTechCategory] = useState('Frontend');

  const currentTech = techStack.find(t => t.category === activeTechCategory);

  return (
    <div className="pt-32 pb-24 space-y-28 font-sans">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          End-to-End Capabilities
        </span>
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Capabilities engineered to <span className="font-serif-italic font-normal text-accent-gold">outperform.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We combine senior software architecture with classic aesthetic design to build web products that drive scalable revenue.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((s) => (
            <div
              key={s.id}
              className="bg-white dark:bg-slate-900/80 p-8 rounded-xl border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-subtle"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-accent-gold transition-colors tracking-tight">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {s.desc}
                </p>

                <ul className="space-y-2 pt-2">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-700 dark:text-slate-300 space-x-2 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  to={`/services/${s.id}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  View Details
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Interactive Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-8 shadow-2xl">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Technologies We Master</h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">We leverage resilient, battle-tested modern stacks for high-velocity software engineering.</p>
          </div>

          <div className="flex justify-center space-x-2">
            {techStack.map((t) => (
              <button
                key={t.category}
                onClick={() => setActiveTechCategory(t.category)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                  activeTechCategory === t.category
                    ? 'bg-white text-slate-900 font-semibold'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {t.category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {currentTech.items.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
