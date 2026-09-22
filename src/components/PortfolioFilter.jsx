import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Aura AI — Enterprise Intelligence Hub',
    category: 'AI Platforms',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'Python AI', 'Tailwind', 'FastAPI'],
    description: 'Autonomous multi-agent enterprise workflow system serving 50k+ daily operational queries with zero latency.',
    client: 'Aura Systems Inc.',
    results: '+340% Workflow Automation',
    metrics: ['0.4s Query Latency', '99.9% Uptime', '50k Active Users']
  },
  {
    id: 2,
    title: 'FinVault — Neobank Web Platform',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Stripe'],
    description: 'High-security financial dashboard for modern digital bank with real-time analytics and multi-currency transfer engines.',
    client: 'FinVault Europe',
    results: '$42M Transaction Volume',
    metrics: ['Instant Transfers', 'ISO27001 Certified', '4.9 Star Rating']
  },
  {
    id: 3,
    title: 'Zenith — AI Logistics & Fleet Tracker',
    category: 'AI Platforms',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Mapbox'],
    description: 'Predictive fleet route optimization platform saving regional logistics networks over 150k gallons of fuel monthly.',
    client: 'Zenith Logistics',
    results: '-28% Operational Costs',
    metrics: ['Real-time Telemetry', 'AI Routing', '10k Trucks']
  },
  {
    id: 4,
    title: 'Hyperion — Web3 Creator Platform',
    category: 'Brand Design',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80',
    tags: ['Brand Identity', 'UI/UX', 'Three.js', 'React'],
    description: 'Complete brand overhaul and interactive web design for top digital creator ecosystem.',
    client: 'Hyperion Collective',
    results: '2.5M Community Members',
    metrics: ['Global Reach', 'Viral Launch', 'Award Winner']
  },
  {
    id: 5,
    title: 'PulseHealth — Telemedicine App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    tags: ['React Native', 'WebRTC', 'HIPAA Cloud', 'Tailwind'],
    description: 'HIPAA-compliant telemedicine consultation app connecting patients with medical specialists in under 2 minutes.',
    client: 'Pulse Care Network',
    results: '120k Monthly Consultations',
    metrics: ['Sub-2 min Connect', 'HIPAA Secure', '4.9 App Store']
  },
  {
    id: 6,
    title: 'Orbit — SaaS Project Command Center',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    tags: ['React', 'Redux Toolkit', 'Tailwind', 'GraphQL'],
    description: 'Collaborative task and agile workflow suite built for high-velocity software engineering teams.',
    client: 'Orbit Labs',
    results: '+190% Team Productivity',
    metrics: ['Real-time Sync', 'SOC2 Compliant', 'Fortune 500 Used']
  }
];

const categories = ['All', 'Web App', 'AI Platforms', 'Mobile Apps', 'Brand Design'];

export default function PortfolioFilter() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-12">
      
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                isActive
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm font-semibold'
                  : 'bg-white dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Filterable Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900/80 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 group hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 flex flex-col shadow-subtle hover:shadow-card-hover dark:hover:shadow-dark-card"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
                <span className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded text-[10px] font-mono tracking-widest uppercase bg-slate-950/90 backdrop-blur-md text-slate-200 border border-slate-800">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-accent-gold transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.results}
                  </span>
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 hover:text-accent-gold dark:hover:text-accent-gold flex items-center gap-1 group/btn"
                  >
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 space-y-6"
            >
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-[16/9] rounded-xl overflow-hidden relative bg-slate-950">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-3 tracking-tight">
                  {activeProjectModal.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  CLIENT: <span className="text-slate-900 dark:text-white font-semibold">{activeProjectModal.client}</span>
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeProjectModal.description}
              </p>

              {/* Key Metrics */}
              <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 space-y-3">
                <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-400">Verified System Benchmarks</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeProjectModal.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 dark:text-slate-200 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs uppercase font-semibold tracking-wider shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  Schedule Technical Brief
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
