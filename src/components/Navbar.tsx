import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Menu, X, ArrowUpRight, Cpu,User } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
}

export default function Navbar({ onOpenChat }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#navbar-header"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 font-display text-white tracking-tight"
        >
          <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500 transition-colors hover:border-emerald-500/50">
            <User className="h-5 w-5" />
          </div>
          <div>
            <span className="font-bold text-gray-100 text-xl">Ashvek Padwal</span>
            {/* <span className="text-zinc-500 font-mono text-xs ml-1.5 font-medium px-1.5 py-0.5 bg-zinc-900 border border-zinc-800 rounded">
              AP
            </span> */}
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => selectSection(item.id)}
              className="text-zinc-400 font-sans text-sm hover:text-white transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        {/* <div className="hidden md:flex items-center gap-4"> */}
          {/* <button */}
            {/* onClick={onOpenChat} */}
            {/* className="px-4 py-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-900/50 hover:border-emerald-500/60 rounded-md transition-all flex items-center gap-1.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:bg-emerald-900/10 cursor-pointer" */}
          {/* > */}
            {/* <Terminal className="h-3.5 w-3.5 text-emerald-400" /> */}
            {/* AI Assistant */}
          {/* </button> */}
        {/* </div> */}

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-1 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-zinc-950 border-b border-zinc-900 px-6 py-6"
        >
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => selectSection(item.id)}
                className="text-zinc-400 text-left text-base font-sans py-1 hover:text-white border-b border-zinc-900/50 pb-2"
              >
                {item.name}
              </button>
            ))}
            {/* <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="w-full justify-center px-4 py-3 text-sm font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/50 rounded-md flex items-center gap-2"
              >
                <Terminal className="h-4 w-4" />
                Query Recruiter AI
              </button>
            </div> */}
          </div>
        </motion.div>
      )}
    </header>
  );
}
