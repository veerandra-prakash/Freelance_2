import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Building2, 
  Globe, 
  Calendar,
  Check,
  ShieldCheck
} from 'lucide-react';

const serviceOptions = [
  'Custom Web App (React/Next.js)',
  'Mobile Application (iOS/Android)',
  'AI Agent / LLM Integration',
  'UI/UX Design System',
  'Cloud Architecture & DevOps',
  'Legacy Modernization'
];

const budgetRanges = [
  '$5,000 - $15,000 (MVP)',
  '$15,000 - $35,000 (Growth)',
  '$35,000 - $75,000 (Scale)',
  '$75,000+ (Enterprise Pod)'
];

const timelineOptions = [
  'Immediate (Within 2 weeks)',
  'Next Month',
  'Q4 Strategic Roadmap',
  'Just Exploring Options'
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState(['Custom Web App (React/Next.js)']);
  const [selectedBudget, setSelectedBudget] = useState('$15,000 - $35,000 (Growth)');
  const [selectedTimeline, setSelectedTimeline] = useState('Immediate (Within 2 weeks)');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timezone clocks
  const [times, setTimes] = useState({ sf: '', london: '', sg: '' });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        sf: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        sg: now.toLocaleTimeString('en-SG', { timeZone: 'Asia/Singapore', hour: '2-digit', minute: '2-digit' })
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

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
          <Sparkles className="w-3.5 h-3.5 text-accent-400" />
          <span>07 // Discovery & Brief</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-light text-slate-900 dark:text-white tracking-tight leading-none"
        >
          Let's build something <span className="font-serif-italic font-normal text-accent-400">extraordinary</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Tell us about your product vision. We review every proposal inquiry within 4 business hours and return a comprehensive architectural scoping proposal.
        </motion.p>
      </section>

      {/* Main Form & Contact Info Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Project Request Form Column */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl p-8 sm:p-12 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-6"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-light text-slate-900 dark:text-white">Project Brief Received</h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.name}</span>. A principal architecture director will analyze your criteria and send a response shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white font-mono text-xs uppercase tracking-wider hover:bg-accent-500 hover:text-dark-950 transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Step 1: Services */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs uppercase tracking-widest text-accent-400 block">
                      01 // Required Engineering Capabilities
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {serviceOptions.map((serv) => {
                        const isSelected = selectedServices.includes(serv);
                        return (
                          <button
                            type="button"
                            key={serv}
                            onClick={() => toggleService(serv)}
                            className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center space-x-2 border ${
                              isSelected
                                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-700 font-bold'
                                : 'bg-slate-100 dark:bg-dark-950 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-600'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                            <span>{serv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Budget */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs uppercase tracking-widest text-accent-400 block">
                      02 // Target Capital Budget Range
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {budgetRanges.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`p-3.5 rounded-xl text-xs font-mono text-left border transition-all ${
                            selectedBudget === b
                              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-700 font-bold'
                              : 'bg-slate-100 dark:bg-dark-950 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-600'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 3: Timeline */}
                  <div className="space-y-3">
                    <label className="font-mono text-xs uppercase tracking-widest text-accent-400 block">
                      03 // Target Kickoff Horizon
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {timelineOptions.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setSelectedTimeline(t)}
                          className={`p-2.5 rounded-lg text-[11px] font-mono text-center border transition-all ${
                            selectedTimeline === t
                              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-700 font-bold'
                              : 'bg-slate-100 dark:bg-dark-950 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-600'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Contact Info Fields */}
                  <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <label className="font-mono text-xs uppercase tracking-widest text-accent-400 block">
                      04 // Client Contact Credentials
                    </label>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Your Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="Eleanor Vance"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark-950 text-slate-900 dark:text-white text-sm border border-slate-200 dark:border-slate-800 focus:border-accent-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Work Email Address *</label>
                        <input
                          required
                          type="email"
                          placeholder="eleanor@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark-950 text-slate-900 dark:text-white text-sm border border-slate-200 dark:border-slate-800 focus:border-accent-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Company / Venture Name</label>
                      <input
                        type="text"
                        placeholder="Apex Technologies LLC"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark-950 text-slate-900 dark:text-white text-sm border border-slate-200 dark:border-slate-800 focus:border-accent-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-slate-500 dark:text-slate-400 block mb-1">Project Brief & Technical Specifications</label>
                      <textarea
                        rows={4}
                        placeholder="Outline core objectives, high-level features, performance SLAs, or legacy system bottlenecks..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-dark-950 text-slate-900 dark:text-white text-sm border border-slate-200 dark:border-slate-800 focus:border-accent-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-slate-900 text-white dark:bg-accent-500 dark:text-dark-950 font-mono text-xs uppercase tracking-widest font-bold shadow-lg hover:bg-accent-400 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full animate-spin" />
                        <span>Processing Brief...</span>
                      </span>
                    ) : (
                      <>
                        <span>Transmit Project Brief</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-slate-400 text-center flex items-center justify-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Strict Mutual NDA Protected • Complete Intellectual Privacy</span>
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* Global Office Cards & Direct Contacts */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="rounded-2xl p-6 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-normal text-slate-900 dark:text-white flex items-center">
                <Mail className="w-4 h-4 text-accent-400 mr-2" />
                Direct Engagement Lines
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase tracking-wider">New Client Partnerships</span>
                  <a href="mailto:hello@nexadigital.com" className="font-mono text-xs text-accent-400 hover:underline">
                    hello@nexadigital.com
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase tracking-wider">Direct Telephone Protocol</span>
                  <a href="tel:+18005550199" className="font-mono text-xs text-slate-900 dark:text-white hover:underline">
                    +1 (800) 555-0199
                  </a>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase tracking-wider">Retainer Client Portal</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">24/7 Priority Slack & PagerDuty channel access</span>
                </div>
              </div>
            </div>

            {/* Office Locations with Live Time Tickers */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 px-1">
                Global Engineering Hubs
              </h3>

              {[
                {
                  city: 'San Francisco (HQ)',
                  address: '425 Market St, Suite 2200, CA 94105',
                  time: times.sf,
                  tz: 'PST'
                },
                {
                  city: 'London Hub',
                  address: '10 York Road, South Bank, London SE1 7ND',
                  time: times.london,
                  tz: 'GMT'
                },
                {
                  city: 'Singapore Hub',
                  address: '1 Marina Boulevard, #28-00, Singapore 018989',
                  time: times.sg,
                  tz: 'SGT'
                }
              ].map((office, idx) => (
                <div key={idx} className="rounded-2xl p-5 bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-normal text-slate-900 dark:text-white text-sm">{office.city}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-dark-950 text-accent-400 border border-slate-200 dark:border-slate-800">
                      {office.time || '--:--'} {office.tz}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-start">
                    <MapPin className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 mt-0.5 text-slate-400" />
                    <span>{office.address}</span>
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

