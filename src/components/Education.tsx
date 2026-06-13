import { GraduationCap, Award, MapPin, Calendar, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      institution: "Goa College of Engineering",
      degree: "Bachelor of Information Technology",
      details: [
        "Specialized in core systems, software structures, and relational paradigms.",
        "Graduated top-tier among departmental peers with a Cumulative CGPA: 8.61"
      ],
      location: "Goa, India",
      period: "2020 – 2024",
      icon: <GraduationCap className="h-5 w-5 text-emerald-400" />
    }
  ];

  const certifications = [
    {
      title: "Joy of Computing with Python",
      issuer: "NPTEL (IIT Madras)",
      detail: "Focused on algorithm design, programmatic solver paradigms, and syntax models.",
      period: "2024",
      icon: <Award className="h-5 w-5 text-emerald-400" />
    }
  ];

  return (
    <section className="py-20 px-6 relative border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Header Block */}
          <div className="lg:col-span-4 text-left">
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold bg-emerald-950/20 px-2 py-1 rounded">
              06 // Credentials
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight mt-4">
              Education & Professional Certifications
            </h2>
            <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
              Durable academic foundation in Information Technology combined directly with targeted continuous certified learning.
            </p>
          </div>

          {/* Education & Certs details (8 Cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Education Card */}
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-800/60">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-medium text-white text-base">
                          {edu.institution}
                        </h3>
                        <p className="text-xs font-mono text-zinc-400">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {edu.details.map((det, dIdx) => (
                      <li key={dIdx} className="text-zinc-400 text-xs leading-relaxed flex items-start gap-2">
                        <span className="h-1 w-1 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {edu.period}
                  </span>
                </div>
              </div>
            ))}

            {/* Certifications Card */}
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-800/60">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-medium text-white text-base">
                          {cert.title}
                        </h3>
                        <p className="text-xs font-mono text-emerald-400">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {cert.detail}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-zinc-500">
                    <BookOpen className="h-3.5 w-3.5" /> Certification Verified
                  </span>
                  <span className="flex items-center gap-1 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-900 text-zinc-500">
                    {cert.period}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
