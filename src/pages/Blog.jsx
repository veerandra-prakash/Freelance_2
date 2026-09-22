import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  X, 
  Share2, 
  Sparkles, 
  Tag, 
  ThumbsUp,
  Bookmark
} from 'lucide-react';

const articlesData = [
  {
    id: 1,
    title: 'Building Real-Time Microservices with Node.js & Event-Driven Architecture',
    slug: 'realtime-microservices-node-event-driven',
    category: 'Engineering',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    date: 'Sep 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'David Vance',
      role: 'Principal Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120'
    },
    excerpt: 'Discover how we scaled PayStream to handle over 50k transactions per second with sub-50ms latency using Redis Enterprise, Apache Kafka, and serverless Node handlers.',
    content: `
      ### The Challenge of Modern Payment Throughput
      In legacy monolithic architectures, database locking during high-concurrency peak hours often leads to cascaded failures. When PayStream approached us to rebuild their transaction core, our primary objective was eliminating synchronous database blocking.

      ### Architecting for Asynchronous Resilience
      We implemented an event-driven pub/sub queue leveraging Apache Kafka as the single source of truth log stream. 

      Key components of the system:
      1. **Edge Ingestion Layer**: Fast HTTP gateways running on Node.js cluster instances with ultra-fast JSON validation.
      2. **In-Memory Ledger**: State mutations held in distributed Redis Enterprise clusters with instant write-through.
      3. **Asynchronous Persistence**: Event consumers batching transactions directly into PostgreSQL.

      \`\`\`javascript
      // Sample Kafka Consumer Event Loop
      const runConsumer = async () => {
        await consumer.subscribe({ topic: 'payments-ledger', fromBeginning: false });
        await consumer.run({
          eachMessage: async ({ topic, partition, message }) => {
            const payload = JSON.parse(message.value.toString());
            await processLedgerMutation(payload);
          },
        });
      };
      \`\`\`

      ### Results & Key Takeaways
      Transitioning from synchronous REST orchestration to asynchronous event streams reduced tail latency from 850ms down to 38ms while handling a 10x surge in payload traffic during market volatility.
    `
  },
  {
    id: 2,
    title: 'The Design Systems Playbook: Crafting Accessible Glassmorphism UI',
    slug: 'design-systems-playbook-glassmorphic-ui',
    category: 'UI/UX Design',
    featured: false,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000',
    date: 'Sep 14, 2026',
    readTime: '5 min read',
    author: {
      name: 'Elena Rostova',
      role: 'Lead UI/UX Designer',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=120'
    },
    excerpt: 'Glassmorphism brings depth and sleekness to web applications, but without proper contrast standards, accessibility suffers. Here is our design tokens framework.',
    content: `
      ### Balancing Aesthetic Elegance & WCAG Standards
      Glassmorphism relies on semi-transparent backgrounds combined with multi-layered Gaussian blurs. However, improperly tuned opacity ratios can violate WCAG 2.1 AA contrast requirements.

      ### Design Token Rules for Glassmorphism
      1. **Layered Backdrop Blurs**: Always pair backdrop-filter blur (16px - 24px) with a subtle fallback background color for unsupported browsers.
      2. **High-Contrast Typography**: Text on frosted panels must maintain a contrast ratio of at least 4.5:1 against the computed blend background.
      3. **Border Accents**: Use 1px linear gradients on container borders to create sharp spatial separation without heavy drop shadows.
    `
  },
  {
    id: 3,
    title: 'Deploying Production LLM AI Agents with Multi-Turn Memory',
    slug: 'deploying-production-llm-ai-agents',
    category: 'AI & ML',
    featured: false,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=1000',
    date: 'Sep 10, 2026',
    readTime: '8 min read',
    author: {
      name: 'Marcus Chen',
      role: 'Head of AI Engineering',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
    },
    excerpt: 'How we built context-aware AI copilots that maintain state across long user sessions using vector embeddings and hybrid RAG search.',
    content: `
      ### Beyond Basic Prompting
      Standard LLM API calls are stateless. Building an AI copilot that assists enterprise users over multi-hour workflows requires sophisticated session state management and vector database indexing.

      ### Architecture Overview
      We combine Semantic Search with Pinecone vector indices and dynamic sliding-window summarization models.
    `
  },
  {
    id: 4,
    title: 'Scaling SaaS Product MRR from $10k to $100k: A Product Growth Case',
    slug: 'scaling-saas-mrr-growth-strategy',
    category: 'Product Growth',
    featured: false,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    date: 'Sep 02, 2026',
    readTime: '7 min read',
    author: {
      name: 'Sarah Chen',
      role: 'Growth Architect',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120'
    },
    excerpt: 'Analyzing the product levers, self-serve onboarding optimizations, and pricing tier adjustments that unlocked 10x ARR expansion.',
    content: `
      ### Unlocking Product-Led Growth (PLG)
      Frictionless self-serve onboarding, instant time-to-value (TTV), and transparent tier upgrades are the foundational pillars of high-growth SaaS platforms.
    `
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['All', 'Engineering', 'UI/UX Design', 'AI & ML', 'Product Growth'];

  const filteredArticles = articlesData.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articlesData.find(a => a.featured) || articlesData[0];

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
          <BookOpen className="w-3.5 h-3.5 text-accent-400" />
          <span>05 // Thought Leadership</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-light text-slate-900 dark:text-white tracking-tight leading-none"
        >
          Insights on <span className="font-serif-italic font-normal text-accent-400">engineering & scale</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Deep dives into high-performance full-stack architecture, AI agent design, WCAG-compliant interface design, and venture growth.
        </motion.p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles by topic, keyword, or stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-500/60 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Featured Article Banner */}
      {!searchQuery && activeCategory === 'All' && featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-900 grid grid-cols-1 lg:grid-cols-12 gap-0 group shadow-lg"
          >
            <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-widest font-bold bg-dark-950 text-accent-400 border border-slate-700">
                  Featured Paper
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs font-mono text-slate-500">
                  <span className="text-accent-400">{featuredArticle.category}</span>
                  <span>/</span>
                  <span>{featuredArticle.date}</span>
                  <span>/</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl lg:text-3xl font-normal text-slate-900 dark:text-white group-hover:text-accent-400 transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center space-x-3">
                  <img src={featuredArticle.author.avatar} alt={featuredArticle.author.name} className="w-9 h-9 rounded-full object-cover border border-slate-700" />
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white">{featuredArticle.author.name}</div>
                    <div className="text-[10px] font-mono text-slate-500">{featuredArticle.author.role}</div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="px-4 py-2 rounded-lg bg-slate-900 dark:bg-slate-800 text-white hover:bg-accent-500 font-mono text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-colors"
                >
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold border border-slate-700'
                  : 'bg-white dark:bg-dark-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <Search className="w-10 h-10 text-slate-500 mx-auto" />
            <h3 className="text-xl font-normal text-slate-900 dark:text-white">No articles matched</h3>
            <p className="text-slate-500 text-sm">Try resetting your search query or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-900 flex flex-col justify-between group hover:border-accent-500/40 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-dark-950/90 text-slate-200 border border-slate-800 backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-500">
                      <span>{article.date}</span>
                      <span>/</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-lg font-normal text-slate-900 dark:text-white group-hover:text-accent-400 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 mt-4">
                  <div className="flex items-center space-x-2">
                    <img src={article.author.avatar} alt={article.author.name} className="w-7 h-7 rounded-full object-cover border border-slate-700" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{article.author.name}</span>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-mono text-accent-400 hover:underline flex items-center space-x-1"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Article Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 space-y-8"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4 pr-8">
                <span className="px-2.5 py-1 rounded text-xs font-mono uppercase tracking-widest bg-accent-500/10 text-accent-400 border border-accent-500/20">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>

                <h1 className="text-2xl sm:text-4xl font-light text-slate-900 dark:text-white leading-tight">
                  {selectedArticle.title}
                </h1>

                <div className="flex items-center space-x-3 pt-2">
                  <img src={selectedArticle.author.avatar} alt={selectedArticle.author.name} className="w-10 h-10 rounded-full object-cover border border-slate-700" />
                  <div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">{selectedArticle.author.name}</div>
                    <div className="text-xs font-mono text-slate-500">{selectedArticle.author.role} • {selectedArticle.date}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden h-64 sm:h-80">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-accent-400">
                    <ThumbsUp className="w-4 h-4" />
                    <span>Helpful (42)</span>
                  </button>
                  <button className="flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-accent-400">
                    <Bookmark className="w-4 h-4" />
                    <span>Bookmark</span>
                  </button>
                </div>

                <button 
                  onClick={() => alert('Article link copied to clipboard!')}
                  className="flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-accent-400"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share Article</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

