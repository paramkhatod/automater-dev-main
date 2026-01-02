"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { XIcon } from '@heroicons/react/outline';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function BlogsPage() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    { id: 1, title: "The AI Revolution in Grading", category: "Education", date: "Jan 02, 2026", desc: "How automation is giving teachers back 10 hours a week by streamlining repetitive feedback loop.", fullContent: "Full details on the AI Revolution: Automation in grading is not just about speed; it's about consistency. By using machine learning models to analyze student responses, Automater helps educators identify learning gaps in real-time..." },
    { id: 2, title: "Zero to Hero: Node-Based Logic", category: "Tech", date: "Dec 28, 2025", desc: "Understanding the visual programming behind Automater's flow engine and why it matters for beginners.", fullContent: "Visual logic allows non-coders to build complex systems. Our node-based engine uses a directed acyclic graph (DAG) to ensure data flows correctly between your Google Sheets and Gmail triggers..." },
    { id: 3, title: "Open Source vs. SaaS", category: "Community", date: "Dec 20, 2025", desc: "Exploring why AutoFlow remains committed to the open-source spirit while scaling for enterprise users.", fullContent: "The future of software is collaborative. By keeping our core engine open-source, we ensure that the education community can audit our security and contribute custom nodes that benefit everyone." },
    { id: 4, title: "Security for Student Data", category: "Safety", date: "Dec 15, 2025", desc: "Best practices for handling sensitive educational data within automated cloud workflows.", fullContent: "Data privacy is our top priority. Automater uses AES-256 encryption for all stored credentials and follows GDPR guidelines to ensure that student information never leaves your secure environment unauthorized." },
    { id: 5, title: "Top 5 WhatsApp Triggers", category: "Productivity", date: "Dec 10, 2025", desc: "Automate your classroom communication with these essential WhatsApp and Google Sheet integrations.", fullContent: "1. Attendance Alerts, 2. Homework Reminders, 3. Parent-Teacher Scheduling, 4. Emergency Broadcasts, 5. Automated FAQ bots for common syllabus questions." },
    { id: 6, title: "The Future of Automater", category: "Insights", date: "Dec 05, 2025", desc: "A sneak peek at our 2026 roadmap, including mobile workflow management and offline triggers.", fullContent: "In the coming year, expect a dedicated mobile app for tracking flows on the go, native integrations with Canvas and Blackboard, and an AI 'Flow Assistant' that suggests automations based on your usage." }
  ];

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, blogs.length);

    let ctx = gsap.context(() => {
      gsap.from(".blog-hero-text", { y: 60, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.15 });

      gsap.fromTo(cardsRef.current, 
        { y: 100, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".blog-grid", start: "top 90%", toggleActions: "play none none none" }
        }
      );
      
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, [blogs.length]);

  return (
    // REMOVED 'font-sans' to allow global Poppins font to work correctly
    <div ref={containerRef} className="bg-white min-h-screen">
      <Head>
        <title>Blogs - Automater</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      
      {/* Fixed gradient class typo */}
      <header className='w-full pb-16 bg-gradient-to-b from-rose-200 to-white text-gray-800'> 
        <Navbar />
        <div className="max-w-4xl mx-auto mt-10 px-6 text-center">
          <span className="blog-hero-text inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-bold mb-4 uppercase tracking-widest">Resources & News</span>
          {/* Using Orbitron for the main title to match your HeroSection */}
          <h1 className="blog-hero-text text-5xl md:text-7xl font-bold font-orbitron text-gray-800 mb-6 leading-tight tracking-wider uppercase">
            Automation <span className="text-pink-600">Insights</span>
          </h1>
          <p className="blog-hero-text text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Deep dives into the world of smart workflows.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto pb-32 px-6">
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id} 
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => setSelectedBlog(blog)}
              className="group cursor-pointer flex flex-col p-[2px] rounded-3xl bg-transparent hover:bg-gradient-to-br hover:from-pink-200 hover:to-rose-300 transition-all duration-500"
            >
              <div className="bg-white p-8 rounded-[calc(1.5rem-1px)] flex flex-col h-full border border-gray-100 shadow-sm group-hover:shadow-xl transition-all">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold text-gray-400 uppercase italic">{blog.date}</span>
                  <span className="px-3 py-1 bg-gray-50 text-gray-500 text-[10px] font-black rounded-md uppercase border border-gray-100">{blog.category}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors h-16 line-clamp-2 leading-snug">
                  {blog.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow line-clamp-3 text-sm italic">
                  {blog.desc}
                </p>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
                  <span className="text-sm font-bold text-gray-900 group-hover:underline">Read Full Article</span>
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-pink-600 transition-all duration-300">
                    <svg className="w-5 h-5 text-pink-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Full Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-rose-950/60 backdrop-blur-md" onClick={() => setSelectedBlog(null)}></div>
          <div className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[40px] shadow-2xl p-8 md:p-14 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelectedBlog(null)} className="absolute top-8 right-8 p-2 bg-gray-50 hover:bg-rose-100 rounded-full transition-colors group">
              <XIcon className="w-6 h-6 text-gray-400 group-hover:text-rose-600" />
            </button>
            <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">{selectedBlog.category}</span>
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-gray-800 mt-4 mb-8 leading-tight uppercase tracking-wider">{selectedBlog.title}</h2>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="font-bold mb-6 text-gray-800 border-l-4 border-pink-500 pl-4">{selectedBlog.desc}</p>
              <p className="whitespace-pre-line">{selectedBlog.fullContent}</p>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col">
                <span className="text-gray-400 text-xs uppercase font-bold tracking-widest">Published</span>
                <span className="text-gray-900 font-bold">{selectedBlog.date}</span>
              </div>
              <button onClick={() => setSelectedBlog(null)} className="bg-pink-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-pink-700 transition-all shadow-lg hover:shadow-pink-200">
                Back to Blogs
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default BlogsPage;