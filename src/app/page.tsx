"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Database, Shield, Zap, Layers, Network, Server, Smartphone, Terminal, CircleCheck, Play, ArrowUpRight, Cloud, Activity, Lock, Users, MonitorSmartphone, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// --- Hero Architecture Illustration ---

function EngineeringArchitecture() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '600px' }}>
      {/* Circuit Connections (Background) */}
      <svg style={{ position: 'absolute', top: '10%', left: '0', width: '100%', height: '80%', zIndex: 0 }} viewBox="0 0 600 400">
        <motion.path d="M 150 100 L 300 100 L 300 200 L 450 200" fill="none" stroke="#7BAF35" strokeWidth="1.5" strokeDasharray="1000" initial={{ strokeDashoffset: 1000 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 4, ease: "easeInOut" }} />
        <motion.path d="M 150 300 L 250 300 L 250 200" fill="none" stroke="#7BAF35" strokeWidth="1.5" strokeDasharray="1000" initial={{ strokeDashoffset: 1000 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 3, delay: 1, ease: "easeInOut" }} />
        <motion.path d="M 450 100 L 450 50 L 550 50" fill="none" stroke="#7BAF35" strokeWidth="1.5" strokeDasharray="1000" initial={{ strokeDashoffset: 1000 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 2, delay: 2, ease: "easeInOut" }} />
        {/* Animated Data Pulses */}
        <motion.circle cx="150" cy="100" r="3" fill="#4B61B8" animate={{ cx: [150, 300, 300, 450], cy: [100, 100, 200, 200], opacity: [1, 1, 1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
      </svg>

      {/* Code Editor */}
      <motion.div 
        className="glass-panel"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ position: 'absolute', top: '5%', left: '5%', width: '280px', background: '#0F172A', color: '#fff', padding: '1.2rem', zIndex: 2 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
          <Terminal size={14} color="#7BAF35" /> <span style={{ fontSize: '0.75rem', color: '#8892B0' }}>api/v2/core.ts</span>
        </div>
        <pre style={{ fontSize: '0.75rem', lineHeight: 1.8, margin: 0, fontFamily: 'monospace' }}>
          <span style={{ color: '#C678DD' }}>import</span> {'{'} <span style={{ color: '#E5C07B' }}>Engine</span> {'}'} <span style={{ color: '#C678DD' }}>from</span> <span style={{ color: '#98C379' }}>'@acriotech/core'</span>;
          <br /><br />
          <span style={{ color: '#C678DD' }}>export const</span> <span style={{ color: '#61AFEF' }}>Cluster</span> = <span style={{ color: '#E5C07B' }}>new</span> <span style={{ color: '#E5C07B' }}>Engine</span>({'{'}
          <br />  <span style={{ color: '#E5C07B' }}>region</span>: <span style={{ color: '#98C379' }}>"global-1"</span>,
          <br />  <span style={{ color: '#E5C07B' }}>scaling</span>: <span style={{ color: '#D19A66' }}>true</span>
          <br />{'}'});
        </pre>
      </motion.div>

      {/* Database / Cloud Architecture */}
      <motion.div 
        className="glass-panel"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        style={{ position: 'absolute', top: '40%', left: '40%', width: '300px', padding: '1.5rem', zIndex: 2 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Cloud size={20} color="#4B61B8" />
          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Cloud Infrastructure</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.5)', padding: '0.8rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', border: '1px solid rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={14} color="#7BAF35" /> Primary DB</div>
            <span style={{ color: '#7BAF35', fontWeight: 600 }}>Synced</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.5)', padding: '0.8rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', border: '1px solid rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={14} color="#5B6472" /> Replica</div>
            <span style={{ color: '#5B6472' }}>Standby</span>
          </div>
        </div>
      </motion.div>

      {/* Meaningful Floating Elements */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '15%', right: '5%', zIndex: 3 }}
      >
        <div className="glass-panel" style={{ padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.8)' }}>
           <Zap size={16} color="#7BAF35" />
           <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>AI Engine Connected</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '20%', left: '15%', zIndex: 3 }}
      >
        <div className="glass-panel" style={{ padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.8)' }}>
           <Shield size={16} color="#4B61B8" />
           <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Zero-Trust Security</div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '5%', right: '20%', zIndex: 3 }}
      >
        <div className="glass-panel" style={{ padding: '0.8rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.8)' }}>
           <Activity size={16} color="#7BAF35" />
           <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Deployment Active</div>
        </div>
      </motion.div>
    </div>
  );
}

// --- Main Page ---

export default function Home() {
  return (
    <main>
      <div className="bg-engine" />
      <div className="bg-glows" />
      <div className="bg-particles" />
      <NavBar />

      {/* Hero Section */}
      <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '140px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }}>
          <div style={{ paddingRight: '2rem' }}>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: 800 }}>
                Enterprise Software,<br />
                <span style={{ color: '#5B6472', fontWeight: 500 }}>Built Without Compromise.</span>
              </h1>
              <p style={{ fontSize: '1.15rem', marginBottom: '3rem', maxWidth: '580px' }}>
                We partner with ambitious businesses to design, engineer and evolve enterprise software, AI platforms and cloud solutions that become the foundation of long-term growth.
              </p>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem', fontSize: '0.85rem', fontWeight: 500, color: '#5B6472' }}>
              <span>Enterprise Software</span>
              <span style={{ color: '#4B61B8' }}>&bull;</span>
              <span>Artificial Intelligence</span>
              <span style={{ color: '#4B61B8' }}>&bull;</span>
              <span>Cloud Infrastructure</span>
              <span style={{ color: '#4B61B8' }}>&bull;</span>
              <span>Automation</span>
              <span style={{ color: '#4B61B8' }}>&bull;</span>
              <span>Digital Products</span>
            </motion.div>
          </div>
          
          <div>
            <EngineeringArchitecture />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding" style={{ borderTop: '1px solid rgba(15,23,42,0.05)', borderBottom: '1px solid rgba(15,23,42,0.05)', background: 'rgba(255,255,255,0.3)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
             {[
               { num: "250+", label: "Projects Delivered" },
               { num: "98%", label: "Client Retention" },
               { num: "12+", label: "Years of Experience" },
               { num: "24×7", label: "Support" }
             ].map((stat, i) => (
               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                 <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#0F172A', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>{stat.num}</div>
                 <div style={{ fontSize: '0.9rem', color: '#5B6472', fontWeight: 500 }}>{stat.label}</div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Section (Asymmetric Bento) */}
      <section id="services" className="section-padding">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h2 style={{ fontSize: '3rem' }}>Core Capabilities</h2>
              <p style={{ fontSize: '1.1rem', maxWidth: '500px', marginTop: '1rem' }}>We solve complex engineering problems through specialized technical domains.</p>
            </div>
            <button className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>View All Capabilities</button>
          </motion.div>

          <div className="bento-grid">
            {/* Large Feature Card */}
            <motion.div className="glass-panel bento-card" style={{ gridColumn: 'span 8', minHeight: '360px', position: 'relative' }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Server size={24} color="#4B61B8" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Enterprise Software</h3>
                <p style={{ maxWidth: '400px' }}>Bespoke, mission-critical applications engineered for uncompromising stability, security, and infinite scalability within complex organizational structures.</p>
              </div>
              <div className="geometric-bg-pattern"></div>
            </motion.div>
            
            {/* Square Cards */}
            <motion.div className="glass-panel bento-card" style={{ gridColumn: 'span 4' }}>
              <Zap size={24} color="#7BAF35" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Artificial Intelligence</h3>
              <p style={{ fontSize: '0.9rem' }}>Intelligent neural systems designed to automate workflows and extract cognitive value from enterprise data.</p>
            </motion.div>

            <motion.div className="glass-panel bento-card" style={{ gridColumn: 'span 4' }}>
              <Cloud size={24} color="#4B61B8" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Cloud Infrastructure</h3>
              <p style={{ fontSize: '0.9rem' }}>Resilient, highly-available cloud environments engineered for zero downtime and global scale.</p>
            </motion.div>

            <motion.div className="glass-panel bento-card" style={{ gridColumn: 'span 4' }}>
              <MonitorSmartphone size={24} color="#4B61B8" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Digital Products</h3>
              <p style={{ fontSize: '0.9rem' }}>Native and cross-platform applications delivering premium user experiences.</p>
            </motion.div>

            <motion.div className="glass-panel bento-card" style={{ gridColumn: 'span 4' }}>
              <Network size={24} color="#4B61B8" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>API & Automation</h3>
              <p style={{ fontSize: '0.9rem' }}>Robust microservices that act as the connective tissue for digital ecosystems.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding" style={{ background: '#FFFFFF', borderTop: '1px solid rgba(15,23,42,0.05)', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5B6472', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Selected Work</div>
              <h2 style={{ fontSize: '3.5rem', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>Architecture Excellence</h2>
            </div>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: '#0F172A', fontSize: '1rem', transition: 'opacity 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
              Explore Case Studies <ArrowRight size={16} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
            {/* Case Study 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ display: 'flex', flexDirection: 'column' }}
              className="case-study-card"
            >
              <div style={{ background: '#F8FAFC', borderRadius: '16px', height: '400px', marginBottom: '2rem', border: '1px solid rgba(15,23,42,0.05)', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                   onMouseEnter={(e) => {
                     const mockup = e.currentTarget.querySelector('.mockup-1') as HTMLElement;
                     if(mockup) mockup.style.transform = 'translate(-50%, -50%) scale(1.02) translateY(-5px)';
                   }}
                   onMouseLeave={(e) => {
                     const mockup = e.currentTarget.querySelector('.mockup-1') as HTMLElement;
                     if(mockup) mockup.style.transform = 'translate(-50%, -50%) scale(1) translateY(0)';
                   }}
              >
                 {/* Clean visual representation */}
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(75, 97, 184, 0.03) 0%, rgba(75, 97, 184, 0) 100%)' }}></div>
                 
                 {/* Abstract UI Mockup */}
                 <div className="mockup-1" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '340px', height: '220px', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.08)', borderRadius: '12px', boxShadow: '0 20px 40px -10px rgba(15,23,42,0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                    {/* Mock Header */}
                    <div style={{ height: '40px', borderBottom: '1px solid rgba(15,23,42,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', background: '#F8FAFC' }}>
                       <div style={{ display: 'flex', gap: '6px' }}>
                         <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E2E8F0' }}></div>
                         <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E2E8F0' }}></div>
                         <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E2E8F0' }}></div>
                       </div>
                       <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#E2E8F0' }}></div>
                    </div>
                    {/* Mock Body */}
                    <div style={{ flex: 1, display: 'flex' }}>
                       {/* Sidebar */}
                       <div style={{ width: '64px', borderRight: '1px solid rgba(15,23,42,0.05)', background: '#FFFFFF', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div style={{ width: '100%', height: '8px', background: '#4B61B8', borderRadius: '4px', opacity: 0.8 }}></div>
                          <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '4px' }}></div>
                          <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '4px' }}></div>
                          <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '4px' }}></div>
                       </div>
                       {/* Main Content */}
                       <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px', background: '#F8FAFC' }}>
                          {/* Top Chart Area */}
                          <div style={{ width: '100%', height: '60px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid rgba(15,23,42,0.05)', padding: '12px', display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
                             {[40, 70, 45, 90, 60, 30, 80, 55, 100, 65].map((h, i) => (
                               <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 3 || i === 8 ? '#4B61B8' : '#E2E8F0', borderRadius: '2px 2px 0 0' }}></div>
                             ))}
                          </div>
                          {/* Data Rows */}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[1, 2].map(i => (
                              <div key={i} style={{ width: '100%', height: '24px', background: '#FFFFFF', borderRadius: '6px', border: '1px solid rgba(15,23,42,0.05)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: '10px' }}>
                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7BAF35' }}></div>
                                <div style={{ width: '40px', height: '6px', background: '#E2E8F0', borderRadius: '3px' }}></div>
                                <div style={{ flex: 1, height: '6px', background: '#F1F5F9', borderRadius: '3px' }}></div>
                                <div style={{ width: '20px', height: '6px', background: '#E2E8F0', borderRadius: '3px' }}></div>
                              </div>
                            ))}
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Internal Card Info */}
                 <div style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
                    <div style={{ padding: '0.5rem 1rem', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.05)', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600, color: '#0F172A', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                      FinTech
                    </div>
                 </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '1rem', color: '#5B6472', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                  <span>Next.js</span>
                  <span>•</span>
                  <span>Python</span>
                  <span>•</span>
                  <span>AWS</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#0F172A', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Global Ledger Platform</h3>
                <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  Engineered a distributed ledger system capable of zero-latency transactions across 14 global regions.
                </p>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
              className="case-study-card"
            >
              <div style={{ background: '#F8FAFC', borderRadius: '16px', height: '400px', marginBottom: '2rem', border: '1px solid rgba(15,23,42,0.05)', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
                   onMouseEnter={(e) => {
                     const mockup = e.currentTarget.querySelector('.mockup-2') as HTMLElement;
                     if(mockup) mockup.style.transform = 'translate(-50%, -50%) scale(1.02) translateY(-5px)';
                   }}
                   onMouseLeave={(e) => {
                     const mockup = e.currentTarget.querySelector('.mockup-2') as HTMLElement;
                     if(mockup) mockup.style.transform = 'translate(-50%, -50%) scale(1) translateY(0)';
                   }}
              >
                 {/* Clean visual representation */}
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(123, 175, 53, 0.03) 0%, rgba(123, 175, 53, 0) 100%)' }}></div>
                 
                 {/* Abstract Architecture Diagram */}
                 <div className="mockup-2" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '340px', height: '220px', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.08)', borderRadius: '12px', boxShadow: '0 20px 40px -10px rgba(15,23,42,0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                     {/* Window Header */}
                     <div style={{ height: '32px', borderBottom: '1px solid rgba(15,23,42,0.05)', display: 'flex', alignItems: 'center', padding: '0 16px', background: '#F8FAFC' }}>
                        <div style={{ width: '60px', height: '6px', background: '#E2E8F0', borderRadius: '3px' }}></div>
                     </div>
                     {/* Canvas */}
                     <div style={{ flex: 1, position: 'relative', background: '#F8FAFC', overflow: 'hidden' }}>
                        {/* Grid Background */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '16px 16px', opacity: 0.5 }}></div>
                        
                        {/* Nodes Layout */}
                        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* SVG Connection Lines */}
                            <svg style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
                              <path d="M 80 90 L 140 90" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                              <path d="M 190 90 L 250 90" stroke="#7BAF35" strokeWidth="2" fill="none" />
                              <path d="M 165 65 L 165 40 L 250 40" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
                            </svg>
                            
                            {/* Node 1: Input */}
                            <div style={{ position: 'absolute', left: '50px', top: '70px', width: '40px', height: '40px', borderRadius: '8px', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                               <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#E2E8F0' }}></div>
                            </div>
                            
                            {/* Node 2: Processor */}
                            <div style={{ position: 'absolute', left: '140px', top: '65px', width: '50px', height: '50px', borderRadius: '12px', background: '#FFFFFF', border: '2px solid #4B61B8', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(75, 97, 184, 0.1)' }}>
                               <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: 'rgba(75, 97, 184, 0.1)' }}></div>
                            </div>
                            
                            {/* Node 3: Output */}
                            <div style={{ position: 'absolute', left: '250px', top: '70px', width: '40px', height: '40px', borderRadius: '50%', background: '#FFFFFF', border: '2px solid #7BAF35', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(123, 175, 53, 0.1)' }}>
                               <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#7BAF35' }}></div>
                            </div>

                            {/* Node 4: Secondary Output */}
                            <div style={{ position: 'absolute', left: '250px', top: '25px', width: '30px', height: '30px', borderRadius: '8px', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                               <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#E2E8F0' }}></div>
                            </div>
                            
                            {/* Floating Labels */}
                            <div style={{ position: 'absolute', left: '145px', top: '125px', fontSize: '9px', fontWeight: 700, color: '#4B61B8', background: '#FFFFFF', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(75, 97, 184, 0.2)' }}>ML ENGINE</div>
                        </div>
                     </div>
                 </div>
                 
                 {/* Floating data card */}
                 <div style={{ position: 'absolute', top: '15%', right: '10%', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.05)', padding: '10px 14px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7BAF35', boxShadow: '0 0 0 3px rgba(123, 175, 53, 0.2)' }}></div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#0F172A', letterSpacing: '0.02em' }}>99.999% Uptime</div>
                 </div>
                 
                 {/* Secondary floating card */}
                 <div style={{ position: 'absolute', bottom: '15%', left: '10%', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.05)', padding: '8px 12px', borderRadius: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: '6px', zIndex: 2 }}>
                    <div style={{ fontSize: '10px', fontWeight: 600, color: '#5B6472' }}>Processing:</div>
                    <div style={{ fontSize: '10px', fontWeight: 700, color: '#0F172A' }}>50M+ /day</div>
                 </div>

                 {/* Internal Card Info */}
                 <div style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
                    <div style={{ padding: '0.5rem 1rem', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.05)', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600, color: '#0F172A', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                      AI & Automation
                    </div>
                 </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '1rem', color: '#5B6472', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                  <span>Python</span>
                  <span>•</span>
                  <span>Go</span>
                  <span>•</span>
                  <span>Kubernetes</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#0F172A', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Autonomous Operations Engine</h3>
                <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  A distributed machine learning infrastructure designed to automate complex enterprise workflows and predict system anomalies in real-time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="section-padding" style={{ background: '#F8FAFC', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
        <div className="container">
          <div style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5B6472', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Methodology</div>
              <h2 style={{ fontSize: '3.5rem', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>Engineering<br/>Workflow</h2>
            </div>
            <p style={{ maxWidth: '400px', fontSize: '1.1rem', color: '#5B6472', lineHeight: 1.6, margin: 0, paddingBottom: '0.5rem' }}>
              A disciplined, systematic approach to building complex software systems that scale effortlessly.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { id: "01", title: 'Discovery & Audit', desc: 'Deep technical analysis of existing systems, identifying bottlenecks and architectural requirements.' },
              { id: "02", title: 'System Architecture', desc: 'Designing resilient, scalable foundations mapping out data models, microservices, and infrastructure.' },
              { id: "03", title: 'UI/UX Engineering', desc: 'Crafting intuitive interfaces backed by robust design systems and precise component architecture.' },
              { id: "04", title: 'Development Sprints', desc: 'Agile execution with rigorous peer reviews, automated testing, and continuous integration.' },
              { id: "05", title: 'Deployment & QA', desc: 'Zero-downtime deployments with comprehensive load testing, security audits, and compliance checks.' },
              { id: "06", title: 'Scale & Support', desc: 'Proactive monitoring, performance optimization, and dedicated enterprise SLA support.' }
            ].map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: '16px', 
                  padding: '2.5rem', 
                  border: '1px solid rgba(15,23,42,0.05)',
                  boxShadow: '0 10px 30px -10px rgba(15,23,42,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: 'default',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(15,23,42,0.06)';
                  e.currentTarget.style.borderColor = 'rgba(75, 97, 184, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(15,23,42,0.02)';
                  e.currentTarget.style.borderColor = 'rgba(15,23,42,0.05)';
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', marginBottom: '1.5rem', fontFamily: 'monospace', background: 'rgba(75, 97, 184, 0.05)', padding: '0.4rem 0.8rem', borderRadius: '6px', alignSelf: 'flex-start' }}>
                  // STEP {step.id}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
         <div className="container">
            <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5B6472', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Client Partnerships</div>
              <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 700, margin: 0 }}>Trusted by Engineering Leaders</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {[
                { quote: "Acriotech completely rebuilt our core processing engine. The architecture is flawless, and the stability is unmatched.", title: "VP of Engineering", company: "Global FinTech" },
                { quote: "A true engineering partner. They didn't just write code; they architected a foundation for our next decade of growth.", title: "Chief Technology Officer", company: "Enterprise Logistics" },
                { quote: "Their understanding of both complex cloud infrastructure and elegant UI design makes them a rare find.", title: "Director of Product", company: "SaaS Platform" }
              ].map((t, i) => (
                <div key={i} style={{ padding: '3rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid rgba(15,23,42,0.05)', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                   {/* Large Quote Mark */}
                   <div style={{ position: 'absolute', top: '2rem', left: '2rem', fontSize: '5rem', color: 'rgba(75, 97, 184, 0.08)', fontFamily: 'serif', lineHeight: 1 }}>"</div>
                   
                   <p style={{ fontSize: '1.1rem', color: '#0F172A', lineHeight: 1.7, marginBottom: '3rem', position: 'relative', zIndex: 1, fontWeight: 500 }}>
                     {t.quote}
                   </p>
                   
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(75, 97, 184, 0.1) 0%, rgba(75, 97, 184, 0.2) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4B61B8', fontWeight: 700, fontSize: '1rem', border: '1px solid rgba(75, 97, 184, 0.1)' }}>
                         {t.company.charAt(0)}
                      </div>
                      <div>
                         <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0F172A' }}>{t.title}</div>
                         <div style={{ fontSize: '0.8rem', color: '#5B6472', marginTop: '0.2rem' }}>{t.company}</div>
                      </div>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="dark-section" style={{ position: 'relative', padding: '14rem 0', overflow: 'hidden', background: '#0F172A', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        
        {/* Advanced Aurora Background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-20%', left: '20%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(75, 97, 184, 0.15) 0%, transparent 70%)', filter: 'blur(80px)', transform: 'translateY(10%)' }}></div>
          <div style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(123, 175, 53, 0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        </div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }}>
            
            <h2 style={{ fontSize: '5rem', marginBottom: '3rem', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#FFFFFF' }}>
              Let's Build Software<br/>
              <span style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                That Stands The Test of Time.
              </span>
            </h2>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
               <button style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 600, color: '#0F172A', background: '#FFFFFF', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.15)', transition: 'all 0.2s ease' }}
                 onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'; e.currentTarget.style.background = '#F8FAFC'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(0,0,0,0.15)'; e.currentTarget.style.background = '#FFFFFF'; }}
               >
                 Explore Our Work
               </button>
               
               <button style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF', background: 'transparent', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s ease' }}
                 onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
               >
                 Contact Us
               </button>
            </div>
            
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
