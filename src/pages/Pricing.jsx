import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ArrowUpRight, 
  Calculator, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion';
import PricingToggle from '../components/PricingToggle';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  // Estimator State
  const [selectedType, setSelectedType] = useState('webApp');
  const [selectedComplexity, setSelectedComplexity] = useState('scaled');
  const [selectedTimeline, setSelectedTimeline] = useState('standard');

  const basePrices = {
    webApp: 8000,
    mobileApp: 12000,
    aiAgent: 10000,
    fullStack: 16000
  };

  const complexityMultipliers = {
    mvp: 0.75,
    scaled: 1.0,
    enterprise: 1.6
  };

  const timelineMultipliers = {
    express: 1.25,
    standard: 1.0,
    relaxed: 0.9
  };

  const calculateEstimate = () => {
    const base = basePrices[selectedType] || 8000;
    const multComp = complexityMultipliers[selectedComplexity] || 1.0;
    const multTime = timelineMultipliers[selectedTimeline] || 1.0;
    const total = Math.round(base * multComp * multTime);
    return {
      min: Math.round(total * 0.9),
      max: Math.round(total * 1.15)
    };
  };

  const estimatedRange = calculateEstimate();

  const tiers = [
    {
      name: 'Startup MVP',
      description: 'Ideal for early-stage founders needing a high-converting web application fast.',
      monthlyPrice: 4900,
      annualPrice: 3900,
      popular: false,
      features: [
        'Custom React / Next.js Web App',
        'UI/UX Design System (Figma)',
        'Mobile Responsive Layouts',
        'Core Database Setup & Auth',
        'Vite / Vercel Hosting Pipeline',
        '2 Weeks Post-Launch Support',
        'Dedicated Slack Channel'
      ],
      cta: 'Start MVP Sprint'
    },
    {
      name: 'Growth Product',
      description: 'For scaling companies needing advanced full-stack architecture & AI integrations.',
      monthlyPrice: 9500,
      annualPrice: 7600,
      popular: true,
      features: [
        'Full-Stack Custom Application',
        'AI / LLM API Integration',
        'Advanced Analytics & Dashboards',
        'Automated CI/CD Pipeline',
        'SOC-2 / Security Best Practices',
        'Performance & SEO Optimization',
        '4 Weeks Post-Launch Support',
        'Weekly Architecture Reviews'
      ],
      cta: 'Scale Your Product'
    },
    {
      name: 'Enterprise Custom',
      description: 'Dedicated team pod for complex enterprise software & digital transformation.',
      monthlyPrice: 18500,
      annualPrice: 14800,
      popular: false,
      features: [
        'Dedicated Engineer & Designer Pod',
        'Microservices & Distributed Systems',
        'Custom AI Model Training / Fine-tuning',
        'HIPAA / PCI Compliance Engineering',
        '24/7 SLA & Uptime Guarantee',
        'Legacy Migration Strategy',
        'Unlimited Post-Launch Retainer',
        'Executive Advisory Meetings'
      ],
      cta: 'Talk to Engineering Director'
    }
  ];

  const comparisonFeatures = [
    { name: 'Custom UI/UX Design System', startup: true, growth: true, enterprise: true },
    { name: 'Responsive Web Application', startup: true, growth: true, enterprise: true },
    { name: 'Database & Auth Integration', startup: true, growth: true, enterprise: true },
    { name: 'AI / LLM Functionality', startup: false, growth: true, enterprise: true },
    { name: 'Native iOS & Android Apps', startup: false, growth: 'Add-on', enterprise: true },
    { name: 'Dedicated Lead Engineer', startup: false, growth: true, enterprise: true },
    { name: '24/7 Security Monitoring & SLA', startup: false, growth: false, enterprise: true },
    { name: 'Custom Microservices Architecture', startup: false, growth: false, enterprise: true }
  ];

  return (
    <div className="pt-32 pb-24 space-y-24 font-sans">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Transparent Retainer Pricing
        </span>

        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Invest in predictable, <span className="font-serif-italic font-normal text-accent-gold">world-class execution.</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          No hidden billing. Fixed sprint pricing with predictable delivery timelines and senior product engineering.
        </p>

        {/* Toggle Switch */}
        <div className="pt-4">
          <PricingToggle isYearly={isAnnual} setIsYearly={setIsAnnual} />
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => {
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative rounded-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? 'bg-slate-950 text-white border-2 border-slate-700 shadow-dark-card scale-105 z-10'
                    : 'bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 text-slate-900 dark:text-white shadow-subtle'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded text-[10px] font-mono tracking-widest uppercase bg-white text-slate-900 font-bold shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">{tier.name}</h3>
                    <p className={`text-xs mt-2 leading-relaxed ${tier.popular ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400'}`}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="flex items-baseline space-x-1 font-mono">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight">
                      ${price.toLocaleString()}
                    </span>
                    <span className={`text-xs ${tier.popular ? 'text-slate-400' : 'text-slate-500'}`}>
                      / mo {isAnnual ? '(annual)' : ''}
                    </span>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-200/20 dark:border-slate-800/80">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Included Deliverables</span>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2.5 text-xs">
                        <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${tier.popular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                        <span className="font-mono text-slate-700 dark:text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all ${
                      tier.popular
                        ? 'bg-white text-slate-900 shadow-md hover:bg-slate-100'
                        : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Project Cost Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 space-y-8 shadow-dark-card font-sans">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest bg-slate-900 text-slate-300 border border-slate-800">
              <Calculator className="w-3.5 h-3.5 text-accent-gold" />
              <span>Scope Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Calculate custom project scope</h2>
            <p className="text-slate-400 text-xs leading-relaxed">
              Select your system specifications below to obtain an immediate budget range estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Project Type */}
            <div className="space-y-4">
              <label className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                1. System Platform
              </label>
              <div className="space-y-2">
                {[
                  { id: 'webApp', label: 'Web Application / SaaS' },
                  { id: 'mobileApp', label: 'Cross-Platform Mobile App' },
                  { id: 'aiAgent', label: 'AI Agent & LLM Pipeline' },
                  { id: 'fullStack', label: 'Complete Ecosystem' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedType(item.id)}
                    className={`w-full p-3 rounded-lg text-left text-xs font-mono border transition-all ${
                      selectedType === item.id
                        ? 'bg-white text-slate-900 border-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Complexity */}
            <div className="space-y-4">
              <label className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                2. System Complexity
              </label>
              <div className="space-y-2">
                {[
                  { id: 'mvp', label: 'V1 Launch MVP', desc: 'Core features & speed' },
                  { id: 'scaled', label: 'Scaled Production App', desc: 'Full feature set & telemetry' },
                  { id: 'enterprise', label: 'High-Scale Enterprise System', desc: 'Multi-region, SOC-2, microservices' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedComplexity(item.id)}
                    className={`w-full p-3 rounded-lg text-left text-xs border transition-all ${
                      selectedComplexity === item.id
                        ? 'bg-white text-slate-900 border-white font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="font-mono font-semibold">{item.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Timeline & Result Card */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <label className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block">
                  3. Timeline Pace
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'express', label: 'Express Sprint (4-6 weeks)' },
                    { id: 'standard', label: 'Standard Delivery (8-10 weeks)' },
                    { id: 'relaxed', label: 'Flexible Retainer (Quarterly)' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedTimeline(item.id)}
                      className={`w-full p-3 rounded-lg text-left text-xs font-mono border transition-all ${
                        selectedTimeline === item.id
                          ? 'bg-white text-slate-900 border-white font-semibold'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimate Output Box */}
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 text-center space-y-2 font-mono">
                <span className="text-[10px] uppercase text-slate-400">Estimated Investment Range</span>
                <div className="text-2xl font-bold text-white">
                  ${estimatedRange.min.toLocaleString()} - ${estimatedRange.max.toLocaleString()}
                </div>
                <p className="text-[10px] text-slate-500">Includes UI/UX design, full-stack code & deployment</p>
                <Link
                  to="/contact"
                  className="inline-block w-full mt-2 py-2.5 rounded-full bg-white text-slate-900 font-semibold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
                >
                  Lock In Estimate Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Matrix Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center tracking-tight">
          Compare plan capabilities
        </h2>

        <div className="overflow-x-auto bg-white dark:bg-slate-900/80 rounded-xl border border-slate-200/90 dark:border-slate-800/90 p-6 shadow-subtle">
          <table className="w-full text-left border-collapse font-sans">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th className="py-4 px-4 text-xs font-mono uppercase text-slate-900 dark:text-white">Capability</th>
                <th className="py-4 px-4 text-xs font-mono uppercase text-center text-slate-900 dark:text-white">Startup MVP</th>
                <th className="py-4 px-4 text-xs font-mono uppercase text-center text-accent-gold font-bold">Growth Product</th>
                <th className="py-4 px-4 text-xs font-mono uppercase text-center text-slate-900 dark:text-white">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-xs font-mono">
              {comparisonFeatures.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3.5 px-4 font-medium text-slate-700 dark:text-slate-300">{row.name}</td>
                  <td className="py-3.5 px-4 text-center">
                    {typeof row.startup === 'boolean' ? (
                      row.startup ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <span className="text-slate-400">-</span>
                    ) : (
                      <span className="text-[11px] text-slate-500">{row.startup}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {typeof row.growth === 'boolean' ? (
                      row.growth ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <span className="text-slate-400">-</span>
                    ) : (
                      <span className="text-[11px] text-slate-900 dark:text-white">{row.growth}</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {typeof row.enterprise === 'boolean' ? (
                      row.enterprise ? <Check className="w-4 h-4 text-emerald-500 mx-auto" /> : <span className="text-slate-400">-</span>
                    ) : (
                      <span className="text-[11px] text-slate-500">{row.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center tracking-tight">
          Pricing Frequently Asked Questions
        </h2>
        <FAQAccordion items={[
          { question: "What is included in the monthly retainer?", answer: "Each retainer level includes senior product engineering, UI/UX design, direct Slack access, daily GitHub commits, weekly strategy calls, and post-launch support." },
          { question: "How fast can we launch our product?", answer: "Our Startup MVP sprint ships a production-ready Web App in 4-6 weeks. Growth and Enterprise builds typically take 8-12 weeks." },
          { question: "Do I own 100% of the IP and code?", answer: "Yes. All intellectual property, source code, designs, and database schemas belong entirely to your company upon payment." }
        ]} />
      </section>

    </div>
  );
}
