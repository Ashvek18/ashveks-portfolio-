import { Landmark, Users, Calendar, Layers, ShieldCheck } from 'lucide-react';

export default function Achievements() {
  const stats = [
    {
      value: "1M+",
      label: "Daily Banking Transactions Supported",
      detail: "Worked at Indias largest bank (SBI) in TDS Module dealing with high-concurrency transaction processing systems.",
      icon: <Landmark className="h-5 w-5 text-emerald-400" />
    },
    {
      value: "10,000+",
      label: "Students Served u/ Govt Platform",
      detail: "Managed scholarship verification engine workflows within Goa administration.",
      icon: <Users className="h-5 w-5 text-emerald-400" />
    },
    {
      value: "2+",
      label: "Years of Professional Experience",
      detail: "Spanning across high value banking backends and public digital services.",
      icon: <Calendar className="h-5 w-5 text-emerald-400" />
    },
    {
      value: "1M+ Recs",
      label: "Large-Scale Data Ingestions",
      detail: "Built bulk batch processors handling millions of transaction rows per run.",
      icon: <Layers className="h-5 w-5 text-emerald-400" />
    },
    {
      value: "Enterprise",
      label: "Financial System Flows",
      detail: "Vetted expertise in security checks, database safety, and production patching.",
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />
    }
  ];

  return (
    <section className="py-24 px-6 relative border-t border-zinc-900 bg-black overflow-hidden">
      {/* Absolute glow */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold bg-emerald-950/20 px-2 py-1 rounded">
              05 // Impact Metrics
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight mt-4">
              Real Impact, Verifiable Outcomes
            </h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">
              Engineering is evaluated by numbers. Here are the core statistics representing the reliability and scale of the services I build.
            </p>
          </div>
        </div>

        {/* Horizontal & grid metrics cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors flex flex-col justify-between"
            >
              <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              
              <div>
                <span className="block text-3xl font-display font-bold text-white tracking-tight leading-none mb-2">
                  {stat.value}
                </span>
                <span className="block text-xs font-semibold text-zinc-300 font-sans leading-tight mb-2">
                  {stat.label}
                </span>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
