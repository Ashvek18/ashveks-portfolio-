import { X, Mail, Phone, MapPin, Github, Linkedin, Printer, Download } from 'lucide-react';
import { motion } from 'motion/react';

interface ResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDrawer({ isOpen, onClose }: ResumeDrawerProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    // Hide everything else and prints the resume
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `ASHVEK PADWAL
Software Engineer | Backend Engineer | Full Stack Developer
Goa, India | Ashwekpadwal123@gmail.com

SUMMARY:
Software Engineer with 2+ years of professional experience designing backend systems, REST APIs, and scalable applications. Specializes in core transaction processing, data validation, and automated shell workflows.

EDUCATION:
Goa College of Engineering
Bachelor of Information Technology | CGPA: 8.61 (Graduated 2024)

TECHNICAL SKILLS:
- Backend: Node.js, Express.js, REST APIs, JWT Authentication
- Frontend: React.js, Next.js, TypeScript, Responsive UI
- Databases: MongoDB, MySQL, Query Optimization
- Tools: Git, GitHub, Postman, Unix Shell Scripting
- Practices: Production Support, Logging, Debugging, High-Volume Batch Processing

EXPERIENCE:
Tata Consultancy Services (TCS) (Aug 2024 - Present)
Backend / Full Stack Engineer (Client: State Bank of India)
- Improved transaction processing accuracy through extensive server validations.
- Designed and integrated REST APIs connecting multiple banking systems.
- Built bulk batch processors handling over one million records per run.
- Automated core monitoring alerts using Unix shell scripting.
- Contributed to backend pipelines handling over one million transactions daily.

National Informatics Centre (NIC) (Jul 2023 - Sep 2023)
Software Engineer Intern (Client: CM Scholarship Portal)
- Designed secure digital application verification and tracking workflows.
- Optimized database query and indexing layouts, reducing request overhead.
- Supported platform serving 10,000+ public students.

CERTIFICATIONS:
- Joy of Computing with Python (NPTEL, IIT Madras, 2024)

ACHIEVEMENTS:
- Supported 1M+ daily transactions at Scale.
- Managed scholarship payout engine servicing 10,000+ student workflows.
`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Ashvek_Padwal_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Sheet panel */}
      <div className="absolute inset-y-0 right-0 max-w-4xl w-full bg-zinc-950 border-l border-zinc-900 flex flex-col shadow-2xl h-full">
        
        {/* Drawer Header (Actions) */}
        <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase bg-zinc-800 px-2 py-0.5 rounded text-zinc-400">
              Active CV
            </span>
            <span className="text-xs text-zinc-400 font-sans">Ashvek_Padwal_Resume.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print document"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Print Preview</span>
            </button>
            <button
              onClick={handleDownloadTxt}
              className="p-2 bg-emerald-500 hover:bg-emerald-400 text-black rounded text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download text format"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download Text</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Print wrapper printable content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-white text-zinc-900 print:p-0 select-text" id="printable-resume">
          
          {/* Printable style overrides */}
          <style dangerouslySetInnerHTML={{ __html: `
            @media print {
              body * {
                visibility: hidden;
              }
              #printable-resume, #printable-resume * {
                visibility: visible;
              }
              #printable-resume {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                color: #000 !important;
                background: #fff !important;
                padding: 0 !important;
                margin: 0 !important;
              }
            }
          `}} />

          <div className="max-w-3xl mx-auto space-y-8 font-sans text-left">
            
            {/* Header section */}
            <div className="border-b-2 border-zinc-900 pb-6">
              <h1 className="text-3xl md:text-4xl font-display font-medium text-black leading-none mb-2">
                ASHVEK PADWAL
              </h1>
              <p className="text-sm font-semibold tracking-wide text-zinc-600 uppercase mb-4">
                Software Engineer | Backend Engineer | Full Stack Developer
              </p>

              {/* Personal details info line */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-700 font-mono">
                <span className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  Ashwekpadwal123@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  Goa, India (Open to Remote / Hybrid)
                </span>
                <span className="flex items-center gap-1">
                  <Github className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  github.com/ashvekpadwal
                </span>
                <span className="flex items-center gap-1">
                  <Linkedin className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                  linkedin.com/in/ashvek-padwal
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase border-b border-zinc-200 pb-1">
                Professional Identity Summary
              </h2>
              <p className="text-sm text-zinc-800 leading-relaxed font-light">
                Results-driven Software Engineer with 2+ years of professional background designing backend systems, REST APIs, and robust data-driven applications. Experienced contributing to State Bank of India's core banking portal under Tata Consultancy Services, handling validation logic, query execution timings, and shell script cron automations.
              </p>
            </div>

            {/* Core Skills Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase border-b border-zinc-200 pb-1">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-800">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-zinc-900 shrink-0 select-none">Backend:</span>
                  <span className="font-light">Node.js, Express.js, REST API Designs, JWT Authentication, API Security</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-zinc-900 shrink-0 select-none">Frontend:</span>
                  <span className="font-light">React.js, Next.js, TypeScript, Responsive Interface Design, Tailwind CSS</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-zinc-900 shrink-0 select-none">Databases:</span>
                  <span className="font-light">MongoDB, MySQL, Query Execution Tuning, Schema Normalization</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-zinc-900 shrink-0 select-none">Tools & Ops:</span>
                  <span className="font-light">Git, GitHub Actions, Postman, Unix Shell Scripting, Cron, Production Support</span>
                </div>
              </div>
            </div>

            {/* Employment History */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase border-b border-zinc-200 pb-1">
                Professional Engineering Experience
              </h2>

              {/* TCS Role details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-zinc-900 text-base">Tata Consultancy Services (TCS)</span>
                    <span className="text-zinc-600 block text-xs font-semibold uppercase">Backend / Full Stack Engineer | Client: State Bank of India</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 font-semibold text-right shrink-0">Aug 2024 – Present</span>
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-zinc-800 font-light leading-relaxed">
                  <li>Incorporate technical structures safeguarding transaction processing accuracies u/s verification checkpoints.</li>
                  <li>Involved directly in systems supporting in excess of one million transaction workflows daily at scale.</li>
                  <li>Compose performant backend batch-processing models for database collections bigger than one million records.</li>
                  <li>Integrate and document REST APIs mediating links between internal central banking systems.</li>
                  <li>Develop automations and scheduled checks using Unix shell scripting and notification crons to minimize outages.</li>
                  <li>Analyze system server logs and execute hotfixes to safeguard platform uptime.</li>
                </ul>
              </div>

              {/* NIC Role details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-zinc-900 text-base">National Informatics Centre (NIC)</span>
                    <span className="text-zinc-600 block text-xs font-semibold uppercase">Software Engineer Intern | Client: CM Scholarship Portal</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 font-semibold text-right shrink-0">Jul 2023 – Sep 2023</span>
                </div>
                <ul className="list-disc pl-5 space-y-1.5 text-zinc-800 font-light leading-relaxed">
                  <li>Programmed secure digital student upload and review processes for the Goa CM Scholarship platform.</li>
                  <li>Optimized query timing indexes, saving database request payloads from timeouts.</li>
                  <li>Cooperated to push critical portal adjustments servicing over 10,000 active students in Goa.</li>
                </ul>
              </div>

            </div>

            {/* Academic Section */}
            <div className="space-y-2 text-sm">
              <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase border-b border-zinc-200 pb-1">
                Education
              </h2>
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-zinc-900">Goa College of Engineering</span>
                  <span className="text-zinc-700 block text-xs font-semibold">Bachelor of Information Technology</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 text-right font-semibold">Graduated: 2024</span>
              </div>
              <p className="text-zinc-800 font-light leading-relaxed mt-1">
                Bachelor's Degree with a Cumulative Grade Point Average of <strong className="text-black font-semibold">8.61 CGPA</strong> out of 10.0. Focused on core computer science structures, algorithm designs, web services, database administration, and project planning.
              </p>
            </div>

            {/* Certifications and credentials list */}
            <div className="space-y-2 text-sm">
              <h2 className="text-xs font-mono font-bold tracking-wider text-zinc-500 uppercase border-b border-zinc-200 pb-1">
                Certifications
              </h2>
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold text-zinc-900">Joy of Computing with Python</span>
                  <span className="text-zinc-600 block text-xs font-semibold">NPTEL (IIT Madras)</span>
                </div>
                <span className="text-xs font-mono text-zinc-500 text-right font-semibold">2024</span>
              </div>
              <p className="text-zinc-800 font-light leading-relaxed mt-1">
                Obtained technical credential focusing on programmatic solver algorithms and structural computational constructs.
              </p>
            </div>

          </div>

        </div>

        {/* Disclaimer print note */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800 text-center text-[10px] text-zinc-500 font-mono">
          Press "Print Preview" on desktop to obtain a perfectly typeset 1-page physical copy of this resume.
        </div>

      </div>
    </div>
  );
}
