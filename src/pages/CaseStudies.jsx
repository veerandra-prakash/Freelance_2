import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  X, 
  ShieldCheck, 
  Zap,
  BarChart3, 
  CheckCircle2,
  Award
} from 'lucide-react';

const caseStudiesData = [
  {
    id: 'paystream-ai',
    title: 'PayStream AI: Re-architecting Next-Gen Cross-Border Payments',
    category: 'Fintech',
    client: 'PayStream Inc.',
    logoText: 'PAYSTREAM',
    tagline: 'Global real-time payment settlement platform',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200',
    metrics: [
      { label: 'Transaction Speed', value: '45ms', change: '10x faster' },
      { label: 'Volume Processed', value: '$1.4B+', change: 'YoY' },
      { label: 'Fraud Detection Rate', value: '99.98%', change: '+14% boost' }
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS Lambda', 'WebSockets', 'Fintech Security'],
    summary: 'Transformed a legacy banking core into a serverless micro-payments engine handling over 50,000 requests per second with bank-grade encryption.',
    challenge: 'PayStream struggled with severe latency spikes during peak Asian-European trading hours, resulting in abandoned transactions and high gateway fees.',
    solution: 'We engineered a resilient event-driven architecture using distributed Kafka clusters, Redis Enterprise cache layer, and real-time fraud scoring algorithms.',
    results: [
      'Reduced checkout drop-off rate by 64%',
      'Eliminated multi-region server downtime during high-traffic spikes',
      'Achieved SOC-2 Type II and PCI-DSS Level 1 compliance in under 90 days'
    ],
    testimonial: {
      quote: 'Nexa brought senior architectural leadership that saved us over 8 months of guesswork. Our platform reliability is now unmatched in the fintech space.',
      author: 'Elena Rostova',
      role: 'Chief Technology Officer, PayStream'
    }
  },
  {
    id: 'medivision-health',
    title: 'MediVision: Diagnostic AI Platform for Radiologists',
    category: 'Healthtech',
    client: 'MediVision Health Labs',
    logoText: 'MEDIVISION',
    tagline: 'AI-assisted medical imaging & diagnostic suite',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
    metrics: [
      { label: 'Diagnostic Speed', value: '3.2s', change: 'per scan' },
      { label: 'Accuracy Score', value: '99.2%', change: 'Clinical Validation' },
      { label: 'Hospital Deployments', value: '140+', change: 'Worldwide' }
    ],
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI', 'HIPAA Cloud', 'DICOM Standard'],
    summary: 'Built a HIPAA-compliant web workstation allowing radiologists to annotate, analyze, and diagnose MRI/CT scans with AI-assisted tumor detection.',
    challenge: 'Radiologists faced severe burnout inspecting thousands of high-resolution DICOM slices manually, creating diagnosis backlogs across partner clinics.',
    solution: 'We designed a WebGL-powered 3D slice renderer combined with deep learning pipeline inference engines running asynchronously on GPU instances.',
    results: [
      'Accelerated urgent scan triage time from 4.5 hours to 12 minutes',
      'Engineered sub-second DICOM image streaming over web connections',
      'Secured FDA Class II SaaS software clearance'
    ],
    testimonial: {
      quote: 'The UX precision Nexa delivered is remarkable. Radiologists love using the interface, and patients receive life-saving answers in record time.',
      author: 'Dr. Marcus Vance',
      role: 'Head of Clinical Innovation'
    }
  },
  {
    id: 'nexus-cloud-saas',
    title: 'Nexus Workflow: Enterprise DevOps Orchestration Hub',
    category: 'AI SaaS',
    client: 'Nexus Cloud Systems',
    logoText: 'NEXUS',
    tagline: 'Autonomous AI workflow orchestrator',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    metrics: [
      { label: 'MRR Growth', value: '+380%', change: 'in 6 months' },
      { label: 'Active Developers', value: '250k+', change: 'Global' },
      { label: 'Deployment Time', value: '-85%', change: 'CI/CD pipeline' }
    ],
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Kubernetes', 'OpenAI API', 'Tailwind CSS'],
    summary: 'Engineered a multi-tenant cloud operations dashboard with live real-time graph visualization and AI container anomaly mitigation.',
    challenge: 'Enterprise DevOps teams were drowning in fragmented alerting dashboards, leading to high Mean-Time-To-Resolution (MTTR) during cloud outages.',
    solution: 'Nexa consolidated monitoring into a unified visual graph engine powered by generative AI root-cause synthesis and one-click auto-healing scripts.',
    results: [
      'Reduced MTTR from 58 minutes to 4 minutes on average',
      'Scaled enterprise user base from 10k to 250k daily active developers',
      'Won SaaS Product of the Year at TechCrunch Disrupt'
    ],
    testimonial: {
      quote: 'Nexa did not just write code — they helped redefine our core user experience. Product adoption exploded immediately after launch.',
      author: 'Sarah Chen',
      role: 'VP of Product, Nexus Cloud'
    }
  },
  {
    id: 'aura-luxury-ecommerce',
    title: 'Aura Atelier: Next-Gen Headless E-Commerce Experience',
    category: 'E-Commerce',
    client: 'Aura Luxury Group',
    logoText: 'AURA',
    tagline: 'Immersive 3D luxury goods marketplace',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    metrics: [
      { label: 'Conversion Rate', value: '4.8%', change: '+210% increase' },
      { label: 'Page Load Speed', value: '0.4s', change: 'Lighthouse 100' },
      { label: 'Average Order Value', value: '$840', change: '+35% lift' }
    ],
    tags: ['Three.js', 'Shopify Plus', 'Next.js', 'Stripe Connect', 'Tailwind CSS'],
    summary: 'Created a high-fashion digital flagship store complete with interactive 3D product previews, instant checkout, and personalized recommendations.',
    challenge: 'Aura was constrained by monolithic e-commerce software that caused sluggish mobile performance and rigid template designs.',
    solution: 'We built a custom headless store leveraging Shopify Storefront API with Next.js App Router and dynamic WebGL 3D model customizers.',
    results: [
      'Lighthouse performance score boosted from 42 to 99',
      'Mobile checkout completion jumped by 175%',
      'Handled Black Friday peak traffic without a single dropped cart'
    ],
    testimonial: {
      quote: 'Our brand presentation now mirrors our physical flagship boutiques in Paris and Tokyo. Nexa exceeded every expectation.',
      author: 'Antoine Laurent',
      role: 'Global Digital Director, Aura Atelier'
    }
  }
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = ['All', 'Fintech', 'Healthtech', 'AI SaaS', 'E-Commerce'];

  const filteredCases = activeCategory === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 space-y-24 font-sans">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          <Award className="w-3.5 h-3.5 text-accent-gold" />
          <span>Proven Client Impact</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Case studies in digital <span className="font-serif-italic font-normal text-accent-gold">transformation.</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore how we partner with ambitious startups and technology leaders to build high-performance products.
        </p>
      </section>

      {/* Aggregate Stats Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900/80 rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-slate-200/90 dark:border-slate-800/90 shadow-subtle">
          <div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 dark:text-white">$180M+</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-1">Client Capital Raised</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 dark:text-white">+280%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-1">Avg Conversion Growth</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 dark:text-white">99.99%</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-1">Uptime Reliability</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 dark:text-white">100+</div>
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-1">Shipped Digital Products</div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
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

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900/80 rounded-xl overflow-hidden border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 flex flex-col group shadow-subtle"
            >
              {/* Image Banner */}
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-90" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono tracking-widest uppercase bg-slate-950/90 text-slate-200 border border-slate-800">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="font-mono tracking-widest text-[11px] uppercase text-slate-300">
                    {item.client}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent-gold transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                {/* Key Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 font-mono">
                  {item.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-base font-bold text-slate-900 dark:text-white">{m.value}</div>
                      <div className="text-[10px] text-slate-500 uppercase truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 4).map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => setSelectedCase(item)}
                  className="w-full py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs uppercase tracking-wider hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center space-x-1.5 group/btn"
                >
                  <span>Read Full Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 space-y-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Close case study modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-4 pr-8">
                <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  {selectedCase.category} • {selectedCase.client}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {selectedCase.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {selectedCase.tagline}
                </p>
              </div>

              {/* Impact Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 font-mono">
                {selectedCase.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1 text-center sm:text-left">
                    <span className="text-[10px] uppercase text-slate-400">{m.label}</span>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">{m.value}</div>
                    <span className="text-xs text-emerald-500">{m.change}</span>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center font-mono uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-amber-500 mr-2" />
                    The Challenge
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    {selectedCase.challenge}
                  </p>
                </div>

                <div className="space-y-3 p-6 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center font-mono uppercase tracking-wider">
                    <Zap className="w-4 h-4 text-slate-900 dark:text-white mr-2" />
                    Solution Architecture
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>

              {/* Verified Results List */}
              <div className="space-y-4">
                <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-slate-900 dark:text-white flex items-center">
                  <BarChart3 className="w-4 h-4 text-emerald-500 mr-2" />
                  Key Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedCase.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 dark:text-slate-300 font-mono">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="p-6 rounded-xl bg-slate-950 text-white space-y-3 relative overflow-hidden">
                <div className="relative z-10 space-y-2">
                  <p className="font-serif-italic text-slate-200 text-base sm:text-lg leading-relaxed">
                    "{selectedCase.testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-bold text-white text-xs">{selectedCase.testimonial.author}</div>
                    <div className="text-[10px] font-mono text-slate-400">{selectedCase.testimonial.role}</div>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-950 p-10 sm:p-14 text-center space-y-6 border border-slate-800 shadow-dark-card">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Ready to become our next <span className="font-serif-italic text-slate-300 font-normal">case study?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Let's evaluate your technical bottlenecks and design a high-performance roadmap tailored to your growth goals.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-widest text-slate-900 bg-white rounded-full shadow-lg hover:bg-slate-100 transition-all duration-200"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-70" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
