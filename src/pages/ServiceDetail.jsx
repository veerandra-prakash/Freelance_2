import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowUpRight, Code, BrainCircuit, Smartphone, Cloud } from 'lucide-react';

const serviceDataMap = {
  'web-development': {
    title: 'Custom Web Application Engineering',
    tagline: 'High-performance React & Next.js web applications engineered for speed, reliability, and conversion.',
    icon: Code,
    deliverables: [
      'Full React/Next.js single-page application codebase',
      'Framer Motion interaction models & micro-animations',
      'Tailwind CSS design system & dark/light theme tokens',
      'RESTful / GraphQL API integration',
      'Lighthouse 99+ Speed & Core Web Vitals Guarantee',
      'Automated CI/CD deployment pipelines on Vercel/AWS'
    ],
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'PostgreSQL'],
    process: ['Requirement Analysis & Wireframing', 'UI/UX Interactive Mockups', 'Sprint-based Engineering', 'QA & Speed Benchmark', 'Deployment']
  },
  'ai-solutions': {
    title: 'Enterprise AI & Autonomous Workflows',
    tagline: 'Custom LLM fine-tuning, RAG vector architectures, and autonomous AI task agents.',
    icon: BrainCircuit,
    deliverables: [
      'Fine-tuned LLM model setup (OpenAI, Claude, Llama)',
      'Pinecone / Weaviate vector database index setup',
      'Custom customer support & workflow task agents',
      'Real-time streaming chat UI interface',
      'Data privacy & encryption compliance guardrails'
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'OpenAI API', 'React'],
    process: ['Data Ingestion & Cleaning', 'RAG Pipeline Design', 'Agent Logic Scripting', 'Security Guardrail Setup', 'Production Deployment']
  },
  'mobile-apps': {
    title: 'Cross-Platform Mobile Engineering',
    tagline: 'Fluid React Native mobile apps delivering native 60fps performance across iOS & Android.',
    icon: Smartphone,
    deliverables: [
      'Dual iOS and Android app releases',
      'Native camera, location & push notification engine',
      'Offline state synchronization & local database cache',
      'App Store & Google Play Store submission management'
    ],
    techStack: ['React Native', 'Expo', 'Redux Toolkit', 'Node.js', 'Firebase'],
    process: ['Mobile UX Wireframing', 'Cross-Platform Build', 'Device Testing', 'Store Deployment']
  },
  'cloud-architecture': {
    title: 'Cloud & DevOps Infrastructure',
    tagline: 'Scalable AWS & Kubernetes cloud architecture with automated CI/CD and SOC2 compliance.',
    icon: Cloud,
    deliverables: [
      'Terraform Infrastructure as Code scripts',
      'Docker containerization & Kubernetes cluster configuration',
      'Automated GitHub Actions CI/CD deployment pipeline',
      '24/7 Monitoring & Alerting with Datadog / Prometheus'
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Datadog', 'GitHub Actions'],
    process: ['Architecture Audit', 'Terraform Scripting', 'CI/CD Pipeline Setup', 'Load Testing & Handoff']
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceDataMap[id] || serviceDataMap['web-development'];

  return (
    <div className="pt-32 pb-24 space-y-16 font-sans">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <Link to="/services" className="text-xs font-mono tracking-wider uppercase text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
          ← Back to Capabilities
        </Link>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-mono">
            <service.icon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-1 max-w-2xl leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Content */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Deliverables */}
          <div className="bg-white dark:bg-slate-900/80 p-8 sm:p-10 rounded-xl border border-slate-200/90 dark:border-slate-800/90 space-y-6 shadow-subtle">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Key Scope & Deliverables</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-slate-700 dark:text-slate-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Used */}
          <div className="bg-white dark:bg-slate-900/80 p-8 sm:p-10 rounded-xl border border-slate-200/90 dark:border-slate-800/90 space-y-4 shadow-subtle">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span key={idx} className="px-3.5 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs border border-slate-200 dark:border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Execution Steps */}
          <div className="bg-white dark:bg-slate-900/80 p-8 sm:p-10 rounded-xl border border-slate-200/90 dark:border-slate-800/90 space-y-6 shadow-subtle">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Execution Process</h3>
            <div className="space-y-4">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                  <span className="w-7 h-7 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium text-sm">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sidebar Form Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-slate-950 text-white p-8 rounded-xl border border-slate-800 space-y-6 shadow-dark-card">
            <h3 className="text-xl font-bold tracking-tight text-white">
              Interested in this capability?
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Schedule a 30-minute technical discovery session with our engineering leads to outline your build scope.
            </p>
            <Link
              to="/contact"
              className="w-full py-3.5 bg-white text-slate-900 font-semibold text-xs uppercase tracking-widest rounded-full shadow-md hover:bg-slate-100 transition-colors text-center block"
            >
              Request Custom Proposal
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
