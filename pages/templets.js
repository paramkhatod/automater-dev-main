"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Sheet, Mail, Zap, Download, Database } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function TemplatesPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const templates = [
    { 
      id: 1, 
      title: "Unlimited Emailer", 
      category: "Marketing", 
      desc: "Connect Google Sheets to Gmail to send bulk, personalized reports and emails to your entire contact list automatically.", 
      icons: [<Sheet key="1" className="text-green-500" />, <Mail key="2" className="text-blue-500" />], 
      complexity: "Intermediate",
      fileUrl: "/templates/unlimited_email.json" 
    },
    { 
      id: 2, 
      title: "Simple Email Fetch", 
      category: "Personal", 
      desc: "Instantly track incoming emails by fetching subject lines and senders, then logging them into a central Google Sheet.", 
      icons: [<Mail key="1" className="text-blue-500" />, <Database key="2" className="text-gray-500" />], 
      complexity: "Beginner",
      fileUrl: "/templates/simple_email_fetch.json"
    },
    { 
      id: 3, 
      title: "AI Email Task Extractor", 
      category: "AI & Automation", 
      desc: "Use GPT-OSS to analyze your emails, summarize content, and automatically create task entries in your spreadsheet.", 
      icons: [<Zap key="1" className="text-yellow-500" />, <Mail key="2" className="text-blue-500" />, <Sheet key="3" className="text-green-500" />], 
      complexity: "Advanced",
      fileUrl: "/templates/ai_workflow.json"
    }
  ];

  // --- UPDATED DOWNLOAD LOGIC ---
  const downloadFile = async (url) => {
    try {
      // Extract the exact filename from the URL (e.g., unlimited_email.json)
      const originalFileName = url.split('/').pop();

      const response = await fetch(url);
      if (!response.ok) throw new Error("File not found");
      
      const data = await response.json();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const downloadUrl = URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = downloadUrl;
      // Use the exact name from the public folder storage
      link.download = originalFileName; 
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error accessing the template file:", error);
      alert("Error: Ensure the file '" + url.split('/').pop() + "' exists in your public/templates/ folder.");
    }
  };

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, templates.length);
    let ctx = gsap.context(() => {
      gsap.fromTo(".template-hero-text", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.15 });
      gsap.fromTo(cardsRef.current, { y: 80, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".template-grid", start: "top 92%", toggleActions: "play none none none" }
      });
      setTimeout(() => { ScrollTrigger.refresh(); }, 100);
    }, containerRef);
    return () => ctx.revert();
  }, [templates.length]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen">
      <Head>
        <title>Templates - Automater</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      
      <header className='w-full pb-20 bg-gradient-to-b from-rose-200 to-white text-gray-800'> 
        <Navbar />
        <div className="max-w-4xl mx-auto mt-16 px-6 text-center">
          <span className="template-hero-text inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-bold mb-4 uppercase tracking-widest ">Verified Flows</span>
          <h1 className="template-hero-text text-5xl md:text-7xl font-bold font-orbitron text-gray-800 mb-6 leading-tight uppercase tracking-wider">
            Workflow <span className="text-pink-600">Library</span>
          </h1>
          <p className="template-hero-text text-lg md:text-xl text-gray-600 max-w-2xl mx-auto  leading-relaxed">
            Get started instantly by downloading these pre-built automation structures.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto pb-32 px-6">
        <div className="template-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {templates.map((template, index) => (
            <div 
              key={template.id} 
              ref={(el) => (cardsRef.current[index] = el)}
              className="group flex flex-col p-[2px] rounded-3xl bg-transparent hover:bg-gradient-to-br hover:from-pink-200 hover:to-rose-300 transition-all duration-500"
            >
              <div className="bg-white p-8 rounded-[calc(1.5rem-1px)] flex flex-col h-full border border-gray-100 shadow-sm group-hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2">
                    {template.icons.map((icon, idx) => (
                      <div key={idx} className="p-2 bg-gray-50 rounded-lg group-hover:scale-110 transition-transform">
                        {React.cloneElement(icon, { size: 24 })}
                      </div>
                    ))}
                  </div>
                  <span className={`text-[10px] font-black px-2 py-1 rounded border uppercase ${
                    template.complexity === 'Beginner' ? 'text-green-600 border-green-200 bg-green-50' :
                    template.complexity === 'Intermediate' ? 'text-blue-600 border-blue-200 bg-blue-50' :
                    'text-orange-600 border-orange-200 bg-orange-50'
                  }`}>
                    {template.complexity}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-3 font-orbitron uppercase tracking-tight h-16 line-clamp-2 leading-snug">
                  {template.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-sm italic line-clamp-3">
                  {template.desc}
                </p>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                  <button 
                    onClick={() => downloadFile(template.fileUrl)}
                    className="flex items-center gap-2 bg-pink-600 text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-pink-700 transition-all shadow-md active:scale-95"
                  >
                    <Download size={18} />
                    Download JSON
                  </button>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
                    {template.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TemplatesPage;