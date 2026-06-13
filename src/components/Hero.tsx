import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Github, Linkedin, CheckCircle, FileText, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenChat: () => void;
  onOpenResume: () => void;
}

export default function Hero({ onOpenChat, onOpenResume }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center overflow-hidden">
      {/* Background Decorative Grid - Low Opacity */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
      
      {/* Glow Effects - Stripe/Linear Style */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Copy content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
          
          {/* Status Chip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Open opportunities & collaborations</span>
          </motion.div>

          {/* Job Title / Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2"
          >
            <span className="px-2.5 py-1 text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 rounded">
              Backend Systems
            </span>
            <span className="px-2.5 py-1 text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 rounded">
              REST APIs
            </span>
            <span className="px-2.5 py-1 text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 rounded">
              Full Stack
            </span>
            <span className="px-2.5 py-1 text-xs font-mono bg-zinc-950 border border-zinc-800 text-zinc-400 rounded font-semibold text-emerald-400">
              Goa, India
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white leading-[1.1]"
          >
            Building <span className="text-zinc-400">Reliable</span> Software That Solves <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">Real-World</span> Problems
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl"
          >
            Full Stack Software Engineer with 2.1+ years of experience building backend systems, APIs, and data-driven applications. Currently contributing to SBI's core banking platform at TCS, focusing on large-scale transaction processing, system reliability, and performance optimization.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-5 py-3 bg-white text-black font-medium text-sm rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-2 group cursor-pointer"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-5 py-3 bg-zinc-900 border border-zinc-800 text-white font-medium text-sm rounded-md hover:border-zinc-700 hover:bg-zinc-800 transition-all flex items-center gap-2 cursor-pointer"
            >
              <FileText className="h-4 w-4 text-zinc-400" />
              Download Resume
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-3 bg-zinc-950 border border-zinc-900 text-zinc-300 font-medium text-sm rounded-md hover:border-zinc-800 hover:text-white transition-colors cursor-pointer"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links & Trust Flags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-6 pt-6 text-zinc-500 border-t border-zinc-900 w-full"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-600">Connect:</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/Ashvek18"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors p-1"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashvek-padwal"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ashwekpadwal123@gmail.com"
                className="hover:text-white transition-colors p-1"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            
            <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs font-mono text-emerald-500 bg-emerald-950/20 px-2 py-1 rounded">
              <Sparkles className="h-3 w-3" />
              <span>Full-Stack Software Engineer</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column - Premium Art Placeholder & Interactive Recruiter Entry */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative mt-8 lg:mt-0"
        >
          {/* Main Visual Frame */}
          <div className="relative w-full max-w-[360px] aspect-square rounded-2xl bg-zinc-950 border border-zinc-800 p-6 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-zinc-700/80 transition-all duration-300">
            {/* Visual Glass highlights */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* Upper Section of visual block: Identity info */}
            <div className="flex justify-between items-start">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Current Role
              </span>
            </div>

            {/* Middle Section: Elegant Avatar SVG + Technical stats ring */}
            <div className="flex flex-col items-center py-4">
              <div className="relative h-28 w-28 rounded-full border border-zinc-800 p-2 bg-zinc-900/40 flex items-center justify-center">
                
                {/* SVG Abstract Portrait representing backend architecture, server blocks, and deep routes */}
                <svg className="w-full h-full text-zinc-100" viewBox="0 0 100 100" fill="none">
                  {/* Outer glowing orbital ring */}
                  <circle cx="50" cy="50" r="46" stroke="#27272a" strokeWidth="1" strokeDasharray="5 5" />
                  
                  {/* Schematic nodes */}
                  <rect x="35" y="30" width="30" height="20" rx="3" fill="#18181b" stroke="#10b981" strokeWidth="1" />
                  <rect x="20" y="60" width="22" height="15" rx="3" fill="#18181b" stroke="#27272a" strokeWidth="1" />
                  <rect x="58" y="60" width="22" height="15" rx="3" fill="#18181b" stroke="#27272a" strokeWidth="1" />
                  
                  {/* Logical pipelines */}
                  <path d="M50 50 V60" stroke="#10b981" strokeWidth="1" />
                  <path d="M50 50 H31 V60" stroke="#374151" strokeWidth="1" />
                  <path d="M50 50 H69 V60" stroke="#374151" strokeWidth="1" />
                  <circle cx="50" cy="50" r="4" fill="#10b981" />
                  <circle cx="31" cy="67" r="2" fill="#64748b" />
                  <circle cx="69" cy="67" r="2" fill="#64748b" />
                  
                  <text x="50" y="42" fill="#10b981" fontSize="6" fontFamily="monospace" textAnchor="middle" fontWeight="bold">API</text>
                  <text x="31" y="70" fill="#a1a1aa" fontSize="5" fontFamily="monospace" textAnchor="middle">SQL</text>
                  <text x="69" y="70" fill="#a1a1aa" fontSize="5" fontFamily="monospace" textAnchor="middle">UI</text>
                </svg>

                {/* Mini Tech stack overlay bubble badges */}
                <div className="absolute -bottom-1 -right-1 bg-zinc-900 border border-zinc-800 rounded-full p-1.5 text-emerald-400">
                  <span className="block text-[8px] font-mono leading-none px-1 font-bold">Node</span>
                </div>
              </div>
              
              <h3 className="text-white font-display font-medium text-lg mt-4 mb-1">Ashvek Padwal</h3>
              <p className="text-zinc-500 font-mono text-[12px]">TCS Backend Engineer | SBI Client</p>
            </div>

            {/* Bottom visual section: Core status facts */}
            <div className="pt-3 border-t border-zinc-800/60 grid grid-cols-2 gap-2 text-left">
              <div className="bg-zinc-900/30 p-2 rounded border border-zinc-900/50">
                <span className="block text-[10px] font-mono text-zinc-500 leading-tight">TOTAL IMPACT</span>
                <span className="text-sm font-mono font-bold text-white leading-normal">1M+ Txn/day</span>
              </div>
              <div className="bg-zinc-900/30 p-2 rounded border border-zinc-900/50">
                <span className="block text-[10px] font-mono text-zinc-500 leading-tight">TECH FOCUS</span>
                <span className="text-sm font-mono font-bold text-emerald-400 leading-normal">API & DB</span>
              </div>
            </div>
          </div>

          {/* Quick AI Trigger Helper Widget
          <div className="mt-5 w-full max-w-[360px] bg-zinc-950/60 border border-zinc-900 p-4 rounded-xl flex items-center justify-between text-left">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-emerald-950/50 border border-emerald-900/30 flex items-center justify-center text-emerald-400 animate-pulse">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-zinc-200">Have specific hire questions?</h4>
                <p className="text-[10px] text-zinc-500">Ask Ashvek's Resume AI Chatbot</p>
              </div>
            </div>
            <button
              onClick={onOpenChat}
              className="px-3 py-1.5 text-[11px] font-medium font-mono text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md transition-all cursor-pointer"
            >
              Ask AI
            </button>
          </div> */}

        </motion.div>

      </div>
    </section>
  );
}
