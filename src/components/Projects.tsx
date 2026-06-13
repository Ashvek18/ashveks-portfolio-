import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PiggyBank, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  ExternalLink, 
  Check, 
  AlertTriangle, 
  PieChart, 
  Coins, 
  Percent, 
  Sparkles,
  ShieldAlert,
  Download,
  Terminal,
  Activity,
  Plus,
  Trash2
} from 'lucide-react';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'smarttax' | 'moneygo'>('smarttax');

  // --- SmartTaxAI Interactive Tool State ---
  const [income, setIncome] = useState<number>(1000000);
  const [deduction80C, setDeduction80C] = useState<number>(150000);
  const [deduction80D, setDeduction80D] = useState<number>(25000);
  const [otherHra, setOtherHra] = useState<number>(50000);

  // Math helper for Income Tax Calculation (India FY 2024-25 standards simplified)
  const computeOldTax = (salary: number, deductions: number) => {
    const taxable = Math.max(0, salary - deductions - 50000); // 50k standard deduction
    if (taxable <= 250000) return 0;
    let tax = 0;
    let temp = taxable;
    
    // 2.5L to 5L (5%)
    if (temp > 250000) {
      const slab = Math.min(250000, temp - 250000);
      tax += slab * 0.05;
    }
    // 5L to 10L (20%)
    if (temp > 500000) {
      const slab = Math.min(500000, temp - 500000);
      tax += slab * 0.20;
    }
    // Above 10L (30%)
    if (temp > 1000000) {
      const slab = temp - 1000000;
      tax += slab * 0.30;
    }

    // Tax rebate u/s 87A if taxable income is <= 5L
    if (taxable <= 500000) {
      return 0; // standard old rebate
    }
    return Math.round(tax + tax * 0.04); // 4% cess
  };

  const computeNewTax = (salary: number) => {
    // New regime standard deduction is 75,000 for FY24-25
    const taxable = Math.max(0, salary - 75000);
    if (taxable <= 700000) return 0; // Tax rebate u/s 87A up to 7L
    
    let tax = 0;
    let temp = taxable;

    // Slab details:
    // 0 - 3L: Nil
    // 3 - 6L: 5%
    // 6 - 9L: 10%
    // 9 - 12L: 15%
    // 12 - 15L: 20%
    // > 15L: 30%
    if (temp > 300000) {
      const slab = Math.min(300000, temp - 300000);
      tax += slab * 0.05;
    }
    if (temp > 600000) {
      const slab = Math.min(300000, temp - 600000);
      tax += slab * 0.10;
    }
    if (temp > 900000) {
      const slab = Math.min(300000, temp - 900000);
      tax += slab * 0.15;
    }
    if (temp > 1200000) {
      const slab = Math.min(300000, temp - 1200000);
      tax += slab * 0.20;
    }
    if (temp > 1500000) {
      const slab = temp - 1500000;
      tax += slab * 0.30;
    }

    return Math.round(tax + tax * 0.04); // 4% cess
  };

  const oldTotalDeduction = deduction80C + deduction80D + otherHra;
  const oldTax = computeOldTax(income, oldTotalDeduction);
  const newTax = computeNewTax(income);
  const taxSavings = Math.abs(oldTax - newTax);
  const recommendedRegime = oldTax < newTax ? "Old Tax Regime" : "New Tax Regime";

  // --- Spend Analyzer Simulator State ---
  const [statementParsed, setStatementParsed] = useState<boolean>(false);
  const [detectingLeaks, setDetectingLeaks] = useState<boolean>(false);
  const [showRecommendation, setShowRecommendation] = useState<boolean>(false);

  const sampleLeaks = [
    { name: "Unused Cloud Sandbox Subscription", type: "Subscription Leak", cost: "₹1,450/mo", severity: "high" },
    { name: "Double charge detected: Uber Cabs trip ID #9122", type: "Billing Inconsistency", cost: "₹450", severity: "medium" },
    { name: "Sub-optimal streaming package (premium mode but active on 1 screen only)", type: "Waste Alert", cost: "₹350/mo", severity: "low" },
    { name: "Active recurring SaaS checkout registered from old localhost API experiments", type: "API Leak", cost: "₹2,100/mo", severity: "high" }
  ];

  const handleAnalyzeMockStatement = () => {
    setDetectingLeaks(true);
    setTimeout(() => {
      setDetectingLeaks(false);
      setStatementParsed(true);
    }, 1200);
  };

  return (
    <section id="projects" className="py-24 px-6 relative border-t border-zinc-900 bg-black">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold bg-emerald-950/20 px-2 py-1 rounded">
              03 // Featured Projects
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight mt-4">
              My Personal Projects
            </h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">
              I believe in building software that doesn't just display static data, but computes, processes, and drives utility. Toggle below to test their interactive engines directly.
            </p>
          </div>

          {/* Toggle Tabs */}
          <div className="flex bg-zinc-950 border border-zinc-800 p-1.5 rounded-lg gap-1.5 mt-6 md:mt-0 select-none">
            <button
              onClick={() => setActiveTab('smarttax')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'smarttax'
                  ? 'bg-zinc-900 text-emerald-400 border border-zinc-800'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              SmartTaxAI
            </button>
            <button
              onClick={() => setActiveTab('moneygo')}
              className={`px-4 py-2 text-xs font-mono rounded-md transition-all cursor-pointer ${
                activeTab === 'moneygo'
                  ? 'bg-zinc-900 text-emerald-400 border border-zinc-800'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              "Where Did My Money Go?"
            </button>
          </div>
        </div>

        {/* Dynamic Project Window Case Study */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT: Project Metadata Details (5 Cols) */}
          <div className="lg:col-span-5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-zinc-800 flex flex-col justify-between text-left">
            <div>
              {/* Shield Status Badge */}
              <div className="flex items-center gap-2 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  CASE STUDY INTEGRATION
                </span>
              </div>

              {activeTab === 'smarttax' ? (
                <>
                  <h3 className="text-2xl font-display font-medium text-white mb-2">
                    SmartTaxAI
                  </h3>
                  <p className="text-zinc-400 text-sm italic mb-6">
                    A personalized tax planner and investment advisor for salaried employees.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        THE CHALLENGE
                      </h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Salaried professionals in India struggle to understand slabs, evaluate old vs. new regime trade-offs, and identify legitimate investment instruments (like 80C, 80D, HRA) to save taxes, leading to costly year-end surprises.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        THE ARCHITECTURE
                      </h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Built a logic engine calculating complex taxable income structures, validating tax rebate models, and offering customized recommendations based on salary profiles.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-display font-medium text-white mb-2">
                    Where Did My Money Go?
                  </h3>
                  <p className="text-zinc-400 text-sm italic mb-6">
                    An intelligent finance parser discovering leaks and auto-categorizing transactions.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        THE CHALLENGE
                      </h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Most consumers can see bank balances but lack visibility on subscription loops, double charges, utility fee hikes, or overall cash flow directions without manually reading messy SMS text segments or PDF logs.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">
                        THE ARCHITECTURE
                      </h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        Features secure PDF/transaction text tokenization handlers, AI spending cluster detection, and actionable cash-flow predictive scores based on recurring interval markers.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Tech Stack & Badges */}
            <div className="mt-8 pt-8 border-t border-zinc-900">
              <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">
                PROJECT TECH STACK & ENGINE
              </span>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {activeTab === 'smarttax' ? (
                  ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 rounded">
                      {tech}
                    </span>
                  ))
                ) : (
                  ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'OpenAI API'].map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 rounded">
                      {tech}
                    </span>
                  ))
                )}
              </div>
              <div className="text-zinc-600 font-mono text-[11px] flex items-center gap-1.5">
                <Terminal className="h-3 w-3" />
                <span>A Sample Interactive Simulator is functional on the right</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Sandbox Simulator (7 Cols) */}
          <div className="lg:col-span-7 bg-zinc-950/40 p-6 md:p-10 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {activeTab === 'smarttax' ? (
                <motion.div
                  key="smarttax-calc"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Card Title */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-4 text-left">
                    <div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <PiggyBank className="h-4 w-4 text-emerald-400" />
                        SmartTaxAI Interactive Tax Planner
                      </h4>
                      <p className="text-[11px] text-zinc-500">Compare tax systems side-by-side (FY 2024-25 standards)</p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/30">
                      LIVE DEMO
                    </span>
                  </div>

                  {/* Calculator Input Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-zinc-400">
                        Annual Fixed Salary (₹)
                      </label>
                      <input
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded p-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 font-mono"
                        placeholder="e.g. 1000000"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-zinc-400">
                        Section 80C Deduction (₹)
                      </label>
                      <input
                        type="number"
                        value={deduction80C}
                        onChange={(e) => setDeduction80C(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded p-2 text-sm text-white focus:outline-none focus:border-zinc-700 font-mono"
                        placeholder="PF, ELSS, Insurance (Max 1.5L)"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-zinc-400">
                        Section 80D Health (₹)
                      </label>
                      <input
                        type="number"
                        value={deduction80D}
                        onChange={(e) => setDeduction80D(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded p-2 text-sm text-white focus:outline-none focus:border-zinc-700 font-mono"
                        placeholder="Medical Insurance (Max 25k)"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-zinc-400">
                        Annual House Rent Allowances HRA (₹)
                      </label>
                      <input
                        type="number"
                        value={otherHra}
                        onChange={(e) => setOtherHra(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded p-2 text-sm text-white focus:outline-none focus:border-zinc-700 font-mono"
                        placeholder="Exempted HRA claim amount"
                      />
                    </div>

                  </div>

                  {/* Calculator Results Displays */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Old Regime Card */}
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-left">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        OLD REGIME (WITH CLAIMS)
                      </span>
                      <div className="text-2xl font-mono font-bold text-white mt-1">
                        ₹{oldTax.toLocaleString('en-IN')}
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-2">
                        Taxable amount: ₹{Math.max(0, income - oldTotalDeduction - 50000).toLocaleString('en-IN')} (incl. 50k standard deduction)
                      </p>
                    </div>

                    {/* New Regime Card */}
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 text-left">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        NEW REGIME (NO CLAIMS)
                      </span>
                      <div className="text-2xl font-mono font-bold text-white mt-1">
                        ₹{newTax.toLocaleString('en-IN')}
                      </div>
                      <p className="text-[11px] text-zinc-500 mt-2">
                        Taxable amount: ₹{Math.max(0, income - 75000).toLocaleString('en-IN')} (incl. 75k standard deduction)
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Alert Banner */}
                  <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-900/40 flex items-start gap-3 text-left">
                    <Sparkles className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <p className="font-semibold text-emerald-400">
                        {taxSavings > 0 ? (
                          <>Save ₹{taxSavings.toLocaleString('en-IN')} with {recommendedRegime}!</>
                        ) : (
                          <>Regimes yield identical tax outcomes.</>
                        )}
                      </p>
                      <p className="text-zinc-400 mt-1">
                        SmartTaxAI computes optimal slab paths and suggests systematic long-term mutual fund or home loan targets to shield your wealth effectively.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="moneygo-tool"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Card Title */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-4 text-left">
                    <div>
                      <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Activity className="h-4 w-4 text-sky-400" />
                        Where Did My Money Go?
                      </h4>
                      <p className="text-[11px] text-zinc-500">Ingest raw bank statements to crawl leak clusters</p>
                    </div>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-950/30 px-2 py-0.5 rounded border border-sky-900/30">
                      LIVE DEMO
                    </span>
                  </div>

                  {/* Simulator Area */}
                  {!statementParsed ? (
                    <div className="py-12 px-6 border border-dashed border-zinc-800 rounded-xl bg-zinc-900/10 flex flex-col items-center justify-center space-y-4">
                      <div className="h-12 w-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
                        <PieChart className="h-6 w-6" />
                      </div>
                      
                      <div className="text-center space-y-1">
                        <h5 className="text-sm font-medium text-zinc-300">No statement verified yet</h5>
                        <p className="text-xs text-zinc-500 max-w-xs">Click index generator to run sample mock transaction statement and identify leaks</p>
                      </div>

                      <button
                        onClick={handleAnalyzeMockStatement}
                        disabled={detectingLeaks}
                        className="px-4 py-2 bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-xs font-mono font-medium rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        {detectingLeaks ? (
                          <>
                            <span className="h-3 w-3 border-2 border-zinc-600 border-t-white rounded-full animate-spin"></span>
                            Tokenizing transactions...
                          </>
                        ) : (
                          <>Compile Sample Statement</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4 text-left">
                      
                      {/* Interactive Header Metrics parsed */}
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="bg-zinc-900/40 border border-zinc-900 p-2.5 rounded-lg">
                          <span className="block text-[9px] font-mono text-zinc-500">MONTHLY INCOME</span>
                          <span className="text-sm font-mono font-semibold text-white">₹1,20,000</span>
                        </div>
                        <div className="bg-zinc-900/40 border border-zinc-900 p-2.5 rounded-lg">
                          <span className="block text-[9px] font-mono text-emerald-500">HEALTH SCORE</span>
                          <span className="text-sm font-mono font-semibold text-emerald-400">82%</span>
                        </div>
                        <div className="bg-zinc-900/40 border border-zinc-900 p-2.5 rounded-lg">
                          <span className="block text-[9px] font-mono text-red-500">LEAK ESTIMATES</span>
                          <span className="text-sm font-mono font-semibold text-red-400">₹3,900</span>
                        </div>
                      </div>

                      {/* Found Leaks list */}
                      <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                        <span className="text-[10px] font-mono text-zinc-400 block mb-1">DETECTOR OUTPUT PANELS:</span>
                        {sampleLeaks.map((leak, idx) => (
                          <div key={idx} className="bg-zinc-900/60 border border-zinc-950 p-2.5 rounded-lg flex items-center justify-between">
                            <div className="flex items-start gap-2">
                              <ShieldAlert className={`h-4 w-4 mt-0.5 shrink-0 ${leak.severity === 'high' ? 'text-red-400' : 'text-zinc-500'}`} />
                              <div>
                                <h6 className="text-[12px] font-semibold text-zinc-200">{leak.name}</h6>
                                <span className="text-[9px] font-mono text-zinc-500 uppercase">{leak.type}</span>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-bold text-red-400 shrink-0">{leak.cost}</span>
                          </div>
                        ))}
                      </div>

                      {/* Recruiter button to restart parser */}
                      <div className="flex justify-between items-center pt-2 border-t border-zinc-900">
                        <button
                          onClick={() => {
                            setStatementParsed(false);
                            setShowRecommendation(false);
                          }}
                          className="text-[11px] text-zinc-500 hover:text-zinc-300 font-mono flex items-center gap-1"
                        >
                          <Trash2 className="h-3 w-3" /> Clear statement
                        </button>

                        <button
                          onClick={() => setShowRecommendation(!showRecommendation)}
                          className="px-3 py-1.5 bg-sky-950/40 border border-sky-900/40 rounded text-xs font-mono text-sky-400 hover:bg-sky-900/30 flex items-center gap-1 cursor-pointer"
                        >
                          <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                          {showRecommendation ? "Hide Recommendation" : "Formulate Recommendations"}
                        </button>
                      </div>

                      {/* AI Advice popup */}
                      {showRecommendation && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-sky-950/20 border border-sky-900/30 p-3 rounded-lg text-xs leading-relaxed text-zinc-300"
                        >
                          <h6 className="font-semibold text-sky-400 flex items-center gap-1 mb-1">
                            <Sparkles className="h-3 w-3 text-sky-400" /> Spend Intel Advice:
                          </h6>
                          Your unused sandbox accounts comprise 55% of the total cash leakage. Cancel these registered subscriptions immediately to save ₹3,550 monthly, raising your financial health score to 91%.
                        </motion.div>
                      )}

                    </div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
