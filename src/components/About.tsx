import { motion } from 'motion/react';
import { ShieldCheck, Database, Zap, GitBranch, Terminal, Landmark } from 'lucide-react';

export default function About() {
  const philosophies = [
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      title: "Reliability & Safety First",
      desc: "For apps handling millions of transactions, accuracy and data consistency checks are non-negotiable."
    },
    {
      icon: <Landmark className="h-5 w-5 text-emerald-400" />,
      title: "Mission-Critical Systems",
      desc: "Experienced in enterprise banking (SBI workflows) and public infrastructure (Scholarship portals) environments."
    },
    {
      icon: <Database className="h-5 w-5 text-emerald-400" />,
      title: "Data and Performance",
      desc: "Deep interest in relational databases, indexing, schema optimization, and secure high-performance batch operations."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative border-t border-zinc-950 bg-black">
      {/* Subtle details background */}
      {/* <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-900/50"></div> */}
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header left rail */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold bg-emerald-950/20 px-2 py-1 rounded">
              01 // Professional Brand
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight mt-4">
              Designing systems for scale, performance, and bulletproof reliability.
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-zinc-500 font-mono text-xs">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-zinc-600" />
                <span>Focus: Robust Backend Architectures</span>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="h-3.5 w-3.5 text-zinc-600" />
                <span>Interests: API Security & DB Tuning</span>
              </div>
            </div>
          </div>

          {/* Detailed Paragraph text */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-light space-y-6 text-left">
              <p>
                I am a Software Engineer with experience designing backend systems, REST APIs, and scalable applications. My professional journey has allowed me to work on large-scale banking systems, government platforms, and modern web applications that impact thousands of users.
              </p>
              <p>
                Currently, I work as a <strong className="text-emerald-400 font-medium">Backend / Full Stack Engineer</strong> at TCS for the <strong className="text-white font-medium">State Bank of India</strong>, where I work in the TDS Module of india's largest bank and contribute to critical banking workflows involving high-volume transaction processing, server validations, third-party system integrations, and live production support.
              </p>
              <p>
                Prior to that, I worked with the <strong className="text-white font-medium">National Informatics Centre (NIC)</strong>, building digital solutions for government services that streamlined educational scholarship payouts.
              </p>
              <p className="text-zinc-400 text-base">
                I enjoy finding system bottlenecks, optimizing queries for high-volume reads, and engineering systems that bring durable, tangible value directly to people's lives.
              </p>
            </div>

            {/* Core Pillars / Philosophies */}
            <div className="pt-8 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {philosophies.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors flex flex-col space-y-3"
                >
                  <div className="p-2 w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-sm font-display tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
