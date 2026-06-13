import { Landmark, Briefcase, Award, Zap, Code, Shield } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Backend / Full Stack Engineer",
      client: "State Bank of India (SBI)",
      period: "Aug 2024 – Present",
      logo: <Landmark className="h-5 w-5 text-emerald-400" />,
      highlights: [
        "Contributed to enterprise systems handling over one million transactions daily with absolute reliability.",
        "Improved transaction processing accuracy through extensive server-side validations and custom data consistency routines.",
        "Designed and integrated performant REST APIs to seamlessly connect multiple internal banking systems.",
        "Built and optimized backend batch-processing solutions for bulk banking datasets exceeding one million records.",
        "Automated critical core monitoring and operations processes using Unix shell scripting and custom cron alert flows.",
        "Provided production support, root-cause investigation, and fast hotfix deployments for high-concurrency systems."
      ],
      techBadge: ["Java", "Spring Boot", "REST APIs", "SQL", "Unix Shell Scripting", "Data Validation", "Batch Processing"]
    },
    {
      company: "National Informatics Centre (NIC)",
      role: "Software Engineer Intern",
      client: "Goa Government Services",
      period: "Jul 2023 – Sep 2023",
      logo: <Briefcase className="h-5 w-5 text-zinc-400" />,
      highlights: [
        "Built secure backend business workflows for the Goa CM Scholarship Portal.",
        "Successfully enabled digital scholarship application submission, secure verification stages, and multi-tier tracking.",
        "Improved complex database queries and index layouts, enhancing request handling performance.",
        "Supported deployment of a critical public portal serving more than 10,000 students across Goa."
      ],
      techBadge: ["PHP", "MySQL", "Workflows", "Query Optimization", "Database Indexing"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative border-t border-zinc-900 bg-zinc-950">
      {/* Visual background details */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Header left rail */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 text-left">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold bg-emerald-950/20 px-2 py-1 rounded">
              02 // Work Experience
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight mt-4">
              My Professional Experience
            </h2>
            <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
              Developing, expanding, and safeguarding multi-tier systems with transactional precision. My roles combine backend speed, strict database consistency, and shell automation.
            </p>

            <div className="mt-8 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-start gap-3">
              <Award className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-zinc-200">Scale Readiness</h4>
                <p className="text-[11px] text-zinc-500 mt-1">
                  Experienced working under the high security constraints and rigorous reliability demands of national banks and state administrations.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline center content */}
          <div className="lg:col-span-8 flex flex-col space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group relative bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800/80 rounded-2xl p-6 md:p-8 transition-all duration-300 text-left"
              >
                {/* Period ribbon badge */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-zinc-800/60">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium text-white group-hover:text-emerald-400 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        {exp.role} {exp.client && <span className="text-zinc-600">| Client: {exp.client}</span>}
                      </p>
                    </div>
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full select-none self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>

                {/* Highlights list */}
                <ul className="space-y-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-2.5"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges footer */}
                <div className="mt-8 pt-6 border-t border-zinc-800/60 flex flex-wrap gap-2">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider self-center mr-2">Skills applied:</span>
                  {exp.techBadge.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono bg-zinc-950 text-zinc-400 rounded-md border border-zinc-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
