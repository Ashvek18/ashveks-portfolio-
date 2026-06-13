import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// const geminiApiKey = process.env.GEMINI_API_KEY;

// // Initialize Gemini safely
// const ai = new GoogleGenAI({
//   apiKey: geminiApiKey || "placeholder",
//   httpOptions: {
//     headers: {
//       'User-Agent': 'aistudio-build',
//     }
//   }
// });

// Cache for contact messages submitted during session
const contactMessages: Array<{
  name: string;
  email: string;
  message: string;
  timestamp: string;
}> = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Endpoint for recruiter chatbot
//   app.post("/api/chat", async (req, res) => {
//     try {
//       const { message, history } = req.body;
//       if (!message) {
//         return res.status(400).json({ error: "Message is required" });
//       }

//       if (!geminiApiKey || geminiApiKey === "placeholder") {
//         // Graceful response if API key is not yet set up
//         return res.json({
//           text: "System Note: The Gemini API key is not currently configured in the environment. However, I can share that Ashvek is a Backend and Full Stack Engineer with 2+ years of experience working on State Bank of India systems at TCS, specializing in scalable APIs, high-volume transactions, and system stability!"
//         });
//       }

//       const systemInstruction = `You are a professional, helpful, and sophisticated AI Career Assistant representing Ashvek Padwal.
// Your purpose is to answer recruiters, colleagues, and visitors seeking to hire or collaborate with Ashvek.
// Maintain a highly professional, polite, objective, and confident engineering tone. Refuse to talk about unrelated topics (like weather, politics, unrelated math, jokes) unless specifically related to his career. Keep answers crisp and factual.

// Here is Ashvek's resume and background:
// - Name: Ashvek Padwal
// - Title: Software Engineer | Backend Engineer | Full Stack Developer
// - Summary: 2+ years of professional experience building reliable software systems, scalable APIs, and data-driven applications.
// - Current Role: Backend / Full Stack Engineer at Tata Consultancy Services (TCS) for the State Bank of India (August 2024 - Present).
//   Highlights:
//     * Improved transaction processing accuracy through extensive server-side validations and custom data consistency routines.
//     * Designed and integrated REST APIs connecting multiple banking systems.
//     * Built batch-processing solutions for datasets exceeding one million records.
//     * Automated core operational and monitoring processes using Unix shell scripting.
//     * Provided production support and extensive root-cause analysis for high-volume banking systems.
//     * Contributed to systems handling over one million transactions daily.
// - Past Role: Software Engineer Intern at National Informatics Centre (NIC) (July 2023 - September 2023).
//   Highlights:
//     * Built backend workflows for the Goa CM Scholarship Portal.
//     * Enabled digital application submission, verification, and tracking workflows.
//     * Improved database performance and request handling efficiency.
//     * Supported a platform serving more than 10,000 students.
// - Education: Bachelor of Information Technology, Goa College of Engineering (Graduated: 2024), CGPA: 8.61.
// - Certifications: NPTEL (IIT Madras) Certification, "Joy of Computing with Python" (2024).
// - Skills:
//   * Backend: Node.js, Express.js, REST APIs, JWT Authentication, API Security
//   * Frontend: React.js, Next.js, TypeScript, Responsive UI Development
//   * Databases: MongoDB, MySQL, Query Optimization
//   * Tools: Git, GitHub, Postman, Unix Shell Scripting
//   * Practices: Production Support, debugging, logging, data validation, performance optimization, system reliability, large-scale transaction workflows, batch processing.
// - Featured Projects:
//   1. SmartTaxAI (Tax & Investment Planner for Salaried Employees):
//      * Problem: Salaried employees struggle to analyze tax structures and optimize tax savings.
//      * Solution: Compare Old vs New Tax Regimes, analyze salary, TDS forecasting, custom investment tips.
//      * Tech: React, TypeScript, Node.js, Express, MongoDB.
//   2. Where Did My Money Go? (AI-Powered Spending Intelligence Platform):
//      * Problem: High wage-earners struggle to detail where money is leaked (e.g. subscriptions).
//      * Solution: Bank statement ingestion, pattern detection, cash flow forecasting, financial health scoring.
//      * Tech: React, TypeScript, Node.js, Express, MongoDB, OpenAI API.

// - Contact Details:
//   * Email: Ashwekpadwal123@gmail.com
//   * GitHub: github.com (or recruiter can click links on page)
//   * LinkedIn: linkedin.com (or recruiter can click links on page)
//   * Current Location: Goa, India

// Respond directly to the question from the recruiter or user. If they ask how to contact Ashvek, provide his email (Ashwekpadwal123@gmail.com) and guide them to use his contact form. Keep the reply highly professional.`;

//       const contents: any[] = [];
//       if (history && Array.isArray(history)) {
//         history.forEach((h: any) => {
//           contents.push({
//             role: h.role === "user" ? "user" : "model",
//             parts: [{ text: h.text }]
//           });
//         });
//       }
//       contents.push({
//         role: "user",
//         parts: [{ text: message }]
//       });

//       const response = await ai.models.generateContent({
//         model: "gemini-3.5-flash",
//         contents,
//         config: {
//           systemInstruction,
//           temperature: 0.7,
//         }
//       });

//       res.json({ text: response.text });
//     } catch (error: any) {
//       console.error("Gemini API Error in backend:", error);
//       res.status(500).json({ error: error.message || "Failed to generate AI response" });
//     }
//   });

  // Endpoint to handle contact form submissions
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }
    contactMessages.push({
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });
    console.log("New Contact Form Submission received:", { name, email, message });
    res.json({ success: true, message: "Thank you for reaching out! Ashvek will get back to you shortly." });
  });

  // Get contact messages (for preview / local interaction verification)
  app.get("/api/messages", (req, res) => {
    res.json({ messages: contactMessages });
  });

  // Handle Vite Dev Server or Production Static Files
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
