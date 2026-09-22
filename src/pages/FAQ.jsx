import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  MessageSquare, 
  Mail, 
  ArrowRight, 
  ChevronDown, 
  Sparkles,
  ShieldCheck,
  Zap,
  DollarSign,
  Code
} from 'lucide-react';

const faqCategories = [
  { id: 'all', name: 'All Questions', icon: HelpCircle },
  { id: 'general', name: 'General & Engagement', icon: Sparkles },
  { id: 'tech', name: 'Tech Stack & Engineering', icon: Code },
  { id: 'pricing', name: 'Pricing & Billing', icon: DollarSign },
  { id: 'support', name: 'Post-Launch & Support', icon: ShieldCheck }
];

const allFaqs = [
  {
    category: 'general',
    question: 'What makes Nexa Digital Agency different from standard agencies?',
    answer: 'Unlike traditional agencies that assign junior developers, Nexa pairs you with senior software architects and UI engineers. We emphasize high-code craftsmanship, automated test coverage, and transparent fixed-price sprint billing.'
  },
  {
    category: 'general',
    question: 'How quickly can our project launch sprint start?',
    answer: 'We typically initiate discovery workshops within 48 hours of contract signing. Sprint 1 kickoff and design architecture review begin in week 1.'
  },
  {
    category: 'tech',
    question: 'Which technology stacks do you specialize in?',
    answer: 'Our core full-stack stack includes React 18, Next.js App Router, TypeScript, Node.js, Fastify, Python (FastAPI/TensorFlow for AI), PostgreSQL, Redis, and Tailwind CSS with Framer Motion animations.'
  },
  {
    category: 'tech',
    question: 'Do you provide complete ownership of the IP and source code?',
    answer: 'Yes, 100%. Upon completion of payment milestones, all intellectual property, repository access, design assets, and cloud deployment pipelines are transferred directly to your organization.'
  },
  {
    category: 'pricing',
    question: 'Do you offer fixed-price projects or hourly time-and-materials?',
    answer: 'We operate primarily on fixed-scope sprint packages (Startup MVP, Growth Product, and Enterprise Custom). This guarantees no budget surprises or runaway development costs.'
  },
  {
    category: 'pricing',
    question: 'What payment terms and schedules do you support?',
    answer: 'Standard projects follow a 40/30/30 milestone payment structure (40% kickoff deposit, 30% alpha demo sign-off, 30% production deployment).'
  },
  {
    category: 'support',
    question: 'What happens after our web app goes live?',
    answer: 'All plans include post-launch warranty support (2 to 4 weeks depending on tier). We also offer monthly retainer plans for ongoing feature additions, security patching, and DevOps monitoring.'
  },
  {
    category: 'support',
    question: 'What uptime SLA guarantees do you provide?',
    answer: 'Enterprise tier applications deployed on our recommended AWS/Vercel architecture carry a 99.99% availability SLA with 1-hour incident response guarantees.'
  }
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = allFaqs.filter(faq => {
    const matchesTab = activeTab === 'all' || faq.category === activeTab;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 space-y-20">

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-accent-500/10 text-accent-400 border border-accent-500/20 font-mono text-xs uppercase tracking-widest"
        >
          <HelpCircle className="w-3.5 h-3.5 text-accent-400" />
          <span>06 // Knowledge Base</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-light text-slate-900 dark:text-white tracking-tight leading-none"
        >
          Frequently asked <span className="font-serif-italic font-normal text-accent-400">questions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Transparent details regarding our fixed-sprint pricing, intellectual property ownership, code handoff standards, and 99.99% uptime guarantees.
        </motion.p>

        {/* Live Search Bar */}
        <div className="max-w-xl mx-auto pt-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search answers (e.g. stack, IP ownership, sprint timelines)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-500/60 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {faqCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold border border-slate-700'
                    : 'bg-white dark:bg-dark-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <HelpCircle className="w-10 h-10 text-slate-500 mx-auto" />
            <h3 className="text-xl font-normal text-slate-900 dark:text-white">No matching questions</h3>
            <p className="text-slate-500 text-sm">Have a custom architectural query? Reach out to our directors directly.</p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-accent-500 text-dark-950 font-mono text-xs uppercase tracking-wider font-bold"
            >
              <span>Ask Engineering Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-900 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  >
                    <span className="font-normal text-slate-900 dark:text-white text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-lg bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-slate-800 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-400' : 'text-slate-400'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Support Prompt Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl p-8 sm:p-10 text-center space-y-4 border border-slate-800 bg-dark-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/20 text-accent-400 mx-auto flex items-center justify-center">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-light">Have a custom requirement or architectural inquiry?</h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Schedule a 30-minute discovery workshop directly with our Principal Architect for immediate estimates.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg bg-white text-dark-950 dark:bg-accent-500 dark:text-dark-950 font-mono text-xs uppercase tracking-wider font-bold hover:bg-accent-400 transition-all shadow-md"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

