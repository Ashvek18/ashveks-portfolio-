import { Server, Layout, Database, Wrench, ShieldAlert, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend Core",
      icon: <Server className="h-5 w-5 text-emerald-400" />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "API Gateways", "System integrations"]
    },
    {
      title: "Frontend Engineering",
      icon: <Layout className="h-5 w-5 text-emerald-400" />,
      skills: ["React.js", "Next.js", "TypeScript", "Responsive UI", "Tailwind CSS", "State Management"]
    },
    {
      title: "Database Architecture",
      icon: <Database className="h-5 w-5 text-emerald-400" />,
      skills: ["MongoDB", "MySQL", "Query Optimization", "Indexing Designs", "Data Normalization"]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="h-5 w-5 text-emerald-400" />,
      skills: ["Git & Version Control", "GitHub Actions", "Postman", "Unix Shell Scripting", "BASH cron automation"]
    },
    {
      title: "Engineering Practices",
      icon: <Cpu className="h-5 w-5 text-emerald-400" />,
      skills: ["Production Support", "Debugging Logs", "Data Validation", "Performance Tuning", "Root Cause Analysis", "System Reliability"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold bg-emerald-950/20 px-2 py-1 rounded">
              04 // Tech Stack & Practices
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight mt-4">
              My Technical Competencies
            </h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">
              Equipped with architectural constructs for full stack creation, centered strongly around high fidelity, performant server logic and data storage.
            </p>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-medium text-base text-white group-hover:text-emerald-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Bullet Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono bg-zinc-950 border border-zinc-900/50 hover:border-zinc-800 text-zinc-300 rounded transition-all select-none hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimalist footer line */}
              <div className="mt-6 pt-4 border-t border-zinc-800/40 text-[10px] font-mono text-zinc-600 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Verified active capability
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
