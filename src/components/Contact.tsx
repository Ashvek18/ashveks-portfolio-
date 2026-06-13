import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  Send, 
  Terminal, 
  RefreshCw, 
  Trash2, 
  Sparkles, 
  User, 
  CheckCircle,
  HelpCircle,
  ArrowUpRight,
  Cpu
} from 'lucide-react';
import { ChatMessage } from '../types';

interface ContactProps {
  chatOpenByDefault?: boolean;
}

export default function Contact({ chatOpenByDefault = false }: ContactProps) {
  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // Chatbot State
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hi! I'm Ashvek's Resume Assistant, powered by Gemini 3.5 Flash. Ask me anything about his backend skills, project architectures, or TCS core banking work!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [chatPaneOpen, setChatPaneOpen] = useState(chatOpenByDefault);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, chatLoading]);

  // Keep state synced with prop
  useEffect(() => {
    if (chatOpenByDefault) {
      setChatPaneOpen(true);
      const timer = setTimeout(() => {
        const chatSec = document.getElementById('ai-chat-card');
        if (chatSec) {
          chatSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [chatOpenByDefault]);

  // Handle Contact Form Submit
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      setFormError('All fields are required.');
      return;
    }

    setFormLoading(true);
    setFormSuccess(null);
    setFormError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          message: formMessage
        })
      });

      const data = await response.json();
      if (response.ok) {
        setFormSuccess(data.message || 'Thank you! Message received successfully.');
        setFormName('');
        setFormEmail('');
        setFormMessage('');
      } else {
        setFormError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setFormError('Network error. Unable to contact full-stack server.');
    } finally {
      setFormLoading(false);
    }
  };

  // Submit message to Chatbot API
  const handleSendMessage = async (msgText: string) => {
    if (!msgText.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: msgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, userMsg]);
    setChatMessage('');
    setChatLoading(true);

    try {
      // Package query history formatted according to /api/chat schema
      const apiHistory = chatHistory
        .filter(m => m.id !== 'welcome')
        .map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          text: m.text
        }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: msgText,
          history: apiHistory
        })
      });

      const data = await response.json();
      if (response.ok) {
        const assistantMsg: ChatMessage = {
          id: `asst-${Date.now()}`,
          role: 'assistant',
          text: data.text || "I was unable to structure an output response. Please retry.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatHistory(prev => [...prev, assistantMsg]);
      } else {
        throw new Error(data.error || 'Server error');
      }
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        text: "Error contacting Assistant Server. Ashvek's technical background is: 2+ yrs Backend Engineer, currently optimizing transaction accuracy with Spring Boot/SQL batch scripts at TCS for State Bank of India, and graduated with 8.61 CGPA IT Degree.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatHistory(prev => [...prev, errorMsg]);
    } finally {
      setChatLoading(false);
    }
  };

  const clearChatHistory = () => {
    setChatHistory([
      {
        id: 'welcome',
        role: 'assistant',
        text: "Chat cleared successfully! Let's start a fresh question about AshvekPadwal's credentials.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const presetQueries = [
    "Detail his State Bank of India highlights",
    "Explain the SmartTaxAI architecture",
    "What databases does Ashvek specialize in?",
    "Do you have his contact coordinates?"
  ];

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-zinc-900 bg-black">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-500 font-semibold bg-emerald-950/20 px-2 py-1 rounded">
              07 // Reach Out & Connect
            </span>
            <h2 className="text-3xl font-display font-medium text-white tracking-tight mt-4">
              Let's Build Something Meaningful Together
            </h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">
              Get in touch directly or contact me inorder to discuss potential opportunities or collaborations.
            </p>
          </div>
        </div>

        {/* Double-Panel Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Contact info & Mail Submit Form (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-left">
            
            {/* Context Cards */}
            <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 space-y-6">
              
              <h3 className="text-white font-semibold font-display text-sm tracking-tight border-b border-zinc-800 pb-3">
                Corporate Coordinates
              </h3>

              <div className="space-y-4">
                
                {/* Email Direct link */}
                <a
                  href="mailto:Ashwekpadwal123@gmail.com"
                  className="flex items-center gap-3.5 group text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[12px] font-mono text-zinc-500 uppercase tracking-wider leading-none">
                      Direct Email
                    </span>
                    <span className="text-sm font-medium mt-1 inline-block">
                      ashwekpadwal123@gmail.com
                    </span>
                  </div>
                </a>

                {/* LinkedIn Link */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 group text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                    <Linkedin className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[12px] font-mono text-zinc-500 uppercase tracking-wider leading-none">
                      Professional Network
                    </span>
                    <span className="text-sm font-medium mt-1 inline-block">
                      https://www.linkedin.com/in/ashvek-padwal/
                    </span>
                  </div>
                </a>

                {/* GitHub link */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 group text-zinc-400 hover:text-white transition-colors"
                >
                  <div className="h-9 w-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                    <Github className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[12px] font-mono text-zinc-500 uppercase tracking-wider leading-none">
                      Code Repositories
                    </span>
                    <span className="text-sm font-medium mt-1 inline-block">
                      https://github.com/Ashvek18
                    </span>
                  </div>
                </a>

              </div>
            </div>

            

          </div>

          {/* RIGHT PANEL: Command-Console AI Career Assistant (7 Columns) */}
          <div id="ai-chat-card" className="lg:col-span-7 flex flex-col rounded-2xl bg-zinc-950 border border-zinc-900 overflow-hidden text-left relative z-10 shadow-2xl">
            {/* Inbound Message Submit Form */}
            <div className="p-10 rounded-2xl bg-zinc-900/30 border border-zinc-900">
              <h3 className="text-white font-semibold font-display text-lg tracking-tight mb-4 text-left">
                Direct Inquiry Message
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-8 text-left">
                
                <div className="space-y-1">
                  <label className="block text-[12px] font-mono text-zinc-500 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Hiring Manager"
                    className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[12px] font-mono text-zinc-500 uppercase">
                    Your Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. recruiter@enterprise.com"
                    className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[12px] font-mono text-zinc-500 uppercase">
                    Inquiry Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Detail your roles, projects, or team collaboration options..."
                    className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-xs text-white focus:outline-none focus:border-emerald-500/50 resize-none"
                  ></textarea>
                </div>

                {/* Notifications feedback */}
                {formSuccess && (
                  <div className="p-3 bg-emerald-950/20 border border-emerald-900/50 text-emerald-400 text-xs rounded flex gap-2 items-center">
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{formSuccess}</span>
                  </div>
                )}

                {formError && (
                  <div className="p-3 bg-red-950/20 border border-red-900/50 text-red-400 text-xs rounded">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full justify-center px-4 py-3 text-xs font-semibold font-mono text-black bg-white rounded hover:bg-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer disabled:bg-zinc-800 disabled:text-zinc-600"
                >
                  {formLoading ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      Submitting inquiry logs...
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Dispatch Message
                    </>
                  )}
                </button>

              </form>
            </div>
            {/*
            {/* Console Header *//*
            <div className="bg-zinc-900/60 px-5 py-3.5 border-b border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                <div>
                  <h3 className="text-xs font-semibold text-white font-display flex items-center gap-1.5 uppercase tracking-wider">
                    <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                    Career_Assistant_v1.2
                  </h3>
                  <p className="text-[9px] text-zinc-500 font-mono">POWERED BY GEMINI-3.5-FLASH // SERVER SECURED</p>
                </div>
              </div>

              <button
                onClick={clearChatHistory}
                title="Clear conversation"
                className="p-1 px-2 rounded hover:bg-zinc-800 text-zinc-500 hover:text-zinc-300 font-mono text-[10px] flex items-center gap-1"
              >
                <Trash2 className="h-3 w-3" /> Clear Console
              </button>
            </div>

            {/* Console Chat Stream Screen *//*
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] flex gap-2.5 items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    {/* Role Icon representation *//*
                    <div className={`h-7 w-7 rounded-lg flex items-center justify-center shrink-0 border text-[10px] font-mono ${
                      msg.role === 'user' 
                        ? 'bg-zinc-900 text-zinc-300 border-zinc-800' 
                        : 'bg-emerald-950/20 text-emerald-400 border-emerald-900/30'
                    }`}>
                      {msg.role === 'user' ? <User className="h-3.5 w-3.5" /> : <Cpu className="h-3.5 w-3.5" />}
                    </div>

                    <div className={`p-3.5 rounded-2xl text-[12.5px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-zinc-900 text-zinc-200 rounded-tr-none text-left'
                        : 'bg-zinc-900/40 border border-zinc-900 text-zinc-300 rounded-tl-none whitespace-pre-wrap text-left'
                    }`}>
                      {msg.text}
                      <span className="block text-[8px] font-mono text-zinc-600 mt-1.5 uppercase">{msg.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}

              {chatLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2.5 items-start">
                    <div className="h-7 w-7 rounded-lg bg-emerald-950/20 text-emerald-400 border border-emerald-900/30 flex items-center justify-center shrink-0">
                      <Cpu className="h-3.5 w-3.5 animate-pulse" />
                    </div>
                    <div className="p-3.5 rounded-2xl text-[12.5px] leading-relaxed bg-zinc-900/30 border border-zinc-900 text-zinc-500 rounded-tl-none italic flex items-center gap-2">
                      <span className="flex h-1.5 w-1.5 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      Computing credentials response...
                    </div>
                  </div>
                </div>
              )}

              <div ref={chatEndRef}></div>
            </div>

            {/* Quick Suggestion Chips *//*
            <div className="bg-zinc-950 px-5 pt-2 pb-1 border-t border-zinc-900 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none">
              {presetQueries.map((query, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(query)}
                  disabled={chatLoading}
                  className="px-2.5 py-1 text-[10px] font-mono text-zinc-400 hover:text-emerald-400 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 rounded-md transition-all shrink-0 cursor-pointer disabled:opacity-50"
                >
                  {query}
                </button>
              ))}
            </div>

            {/* Console Input Bar *//*
            <div className="p-4 bg-zinc-900/40 border-t border-zinc-900 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                disabled={chatLoading}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage(chatMessage);
                  }
                }}
                placeholder="Ask e.g. 'Does he have Spring Boot experience?', or hit Enter..."
                className="flex-1 bg-zinc-950 border border-zinc-850 rounded px-3 py-2 text-xs text-white font-mono focus:outline-none focus:border-emerald-500/50 disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage(chatMessage)}
                disabled={chatLoading || !chatMessage.trim()}
                className="p-2.5 bg-emerald-500 text-black hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-650 rounded transition-colors shrink-0 cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            */}

          </div>

        </div>

      </div>
    </section>
  );
}
