import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeDrawer from './components/ResumeDrawer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [chatOpenByDefault, setChatOpenByDefault] = useState(false);

  const handleOpenChat = () => {
    // Open chat pane and scroll down to chat panel in contact section
    setChatOpenByDefault(true);
    const chatBlock = document.getElementById('ai-chat-card');
    if (chatBlock) {
      chatBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Unset brief delay so toggle responds appropriately to clicking multiple times
    setTimeout(() => {
      setChatOpenByDefault(false);
    }, 1500);
  };

  return (
    <div className="bg-black text-zinc-100 min-h-screen selection:bg-emerald-500/20 selection:text-emerald-300 antialiased overflow-x-hidden">
      
      {/* Structural Nav Bar */}
      <Navbar onOpenChat={handleOpenChat} />

      {/* Main Core Body Sections */}
      <main className="w-full">
        {/* Hero Area */}
        <Hero 
          onOpenChat={handleOpenChat} 
          onOpenResume={() => setIsResumeOpen(true)} 
        />

        {/* Brand overview */}
        <About />

        {/* Experience details */}
        <Experience />

        {/* Visual Case Studies & Sandbox Calculators */}
        <Projects />

        {/* Categorized Skills */}
        <Skills />

        {/* Impact Cards */}
        <Achievements />

        {/* Academic Profile */}
        <Education />

        {/* Contact form & Recruiter AI chat panel */}
        <Contact chatOpenByDefault={chatOpenByDefault} />
      </main>

      {/* Footer copyright stamp */}
      <footer className="bg-black py-10 border-t border-zinc-900 text-center text-zinc-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Ashvek Padwal. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-zinc-600">
            <span>Designed & Built</span>
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-800"></span>
            <span>Using React & Tailwind CSS</span>
          </div>
        </div>
      </footer>

      {/* Full Sheet Resume Preview Drawer Overlay */}
      <ResumeDrawer 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}
