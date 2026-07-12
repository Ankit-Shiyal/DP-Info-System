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

// --- FAQ Component ---

const faqs = [
  { q: "What is your typical project timeline?", a: "Depending on the complexity, our initial discovery and architecture phase takes 2-4 weeks. Full deployment of MVP or v1.0 usually ranges from 3-6 months with iterative agile delivery." },
  { q: "Do you provide ongoing support after deployment?", a: "Yes, we offer enterprise SLA support, proactive infrastructure monitoring, and continuous integration of new features as part of our long-term partnership models." },
  { q: "How do you handle data security and compliance?", a: "We embed security at the architectural level (Zero-Trust principles) and ensure compliance with GDPR, HIPAA, SOC2, and other regional data protection regulations from day one." },
  { q: "Can you scale an existing, legacy architecture?", a: "Absolutely. A significant portion of our work involves auditing legacy systems, decoupling monoliths into microservices, and migrating to scalable cloud infrastructures with zero downtime." },
  { q: "What technologies do you specialize in?", a: "We specialize in modern tech stacks including React, Next.js, Node.js, Python, Rust, and Go. Our infrastructure expertise covers AWS, GCP, Azure, and Kubernetes for seamless orchestration." },
  { q: "Do you offer custom API development?", a: "Yes. We design and deploy high-performance RESTful and GraphQL APIs, ensuring secure authentication, rate limiting, and robust documentation for seamless integration." },
  { q: "How does your pricing model work?", a: "We offer both fixed-price project engagements for well-defined scopes and flexible retainer models for ongoing product development and architectural consulting." },
  { q: "What is your approach to UI/UX design?", a: "We believe enterprise software shouldn't look like legacy software. Our design process combines rigorous user research with modern, accessible, and stunning visual design systems." },
  { q: "Can you integrate AI or machine learning into our products?", a: "Absolutely. We build scalable AI data pipelines, integrate LLMs, and deploy predictive analytics models tailored to your specific business logic and datasets." },
  { q: "Do you handle DevOps and CI/CD setup?", a: "Yes, setting up robust automated testing, deployment pipelines, and infrastructure-as-code (IaC) using Terraform or Ansible is a core part of our delivery process." }
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            style={{ 
              background: '#FFFFFF', 
              borderRadius: '12px', 
              border: '1px solid rgba(15,23,42,0.05)', 
              boxShadow: '0 4px 20px rgba(15,23,42,0.02)', 
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <button 
              onClick={() => toggleFAQ(index)}
              style={{ 
                width: '100%', 
                padding: '1.5rem 2rem', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0F172A', margin: 0 }}>
                  {faq.q}
                </h3>
              </div>
              <div style={{ 
                color: '#4B61B8', 
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
                transition: 'transform 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '24px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div style={{ padding: '0 2rem 2rem 2rem' }}>
                    <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
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

      {/* Enterprise Metrics */}
      <section className="dark-section" style={{ padding: '5rem 0', background: '#0F172A', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(75, 97, 184, 0.15) 0%, rgba(15, 23, 42, 0) 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }}>
             {[
               { num: "80+", label: "Production Systems", desc: "Mission-critical applications built, deployed, and actively managed." },
               { num: "15M+", label: "Daily API Requests", desc: "High-throughput microservices engineered for secure, scalable operations." },
               { num: "99.99%", label: "Uptime Guarantee", desc: "Fault-tolerant cloud environments designed for business continuity." },
               { num: "40+", label: "Active Partnerships", desc: "Long-term engineering engagements with mid-market and enterprise leaders." }
             ].map((stat, i, arr) => (
               <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} style={{ padding: '2rem', borderRight: i < arr.length - 1 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none', textAlign: 'center' }}>
                 <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', marginBottom: '1rem' }}>{stat.num}</div>
                 <div style={{ fontSize: '1rem', color: '#60A5FA', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                 <div style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.5, maxWidth: '240px', margin: '0 auto' }}>{stat.desc}</div>
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
                 
                 {/* Real Image representation */}
                 <img className="mockup-1" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" alt="Cloud Infrastructure" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} />

                 {/* Internal Card Info */}
                 <div style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
                    <div style={{ padding: '0.5rem 1rem', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.05)', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600, color: '#0F172A', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                      Cloud Infrastructure
                    </div>
                 </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '1rem', color: '#5B6472', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                  <span>Kubernetes</span>
                  <span>•</span>
                  <span>Terraform</span>
                  <span>•</span>
                  <span>AWS</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#0F172A', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Distributed Cloud Architecture</h3>
                <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  Engineered a highly available, multi-region cloud infrastructure scaling automatically to handle over 15 million daily requests.
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
                 
                 {/* Real Image representation */}
                 <img className="mockup-2" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Cybersecurity Fabric" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }} />

                 {/* Internal Card Info */}
                 <div style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
                    <div style={{ padding: '0.5rem 1rem', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.05)', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600, color: '#0F172A', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                      Cybersecurity
                    </div>
                 </div>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '1rem', color: '#5B6472', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                  <span>Rust</span>
                  <span>•</span>
                  <span>WebAssembly</span>
                  <span>•</span>
                  <span>eBPF</span>
                </div>
                <h3 style={{ fontSize: '1.8rem', color: '#0F172A', fontWeight: 600, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Zero-Trust Network Fabric</h3>
                <p style={{ fontSize: '1.05rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  Architected a low-latency, kernel-level network security fabric providing real-time threat mitigation across thousands of enterprise nodes.
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
              <div 
                key={step.id}
                style={{ 
                  background: '#FFFFFF', 
                  borderRadius: '16px', 
                  padding: '2.5rem', 
                  border: '1px solid rgba(15,23,42,0.05)',
                  boxShadow: '0 10px 30px -10px rgba(15,23,42,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  cursor: 'default'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', marginBottom: '1.5rem', fontFamily: 'monospace', background: 'rgba(75, 97, 184, 0.05)', padding: '0.4rem 0.8rem', borderRadius: '6px', alignSelf: 'flex-start' }}>
                  // STEP {step.id}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#5B6472', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Hidden for now) */}
      {false && (
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
                { quote: "Their understanding of both complex cloud infrastructure and elegant UI design makes them a rare find.", title: "Director of Product", company: "SaaS Platform" },
                { quote: "Acriotech delivered an incredible e-commerce upgrade that boosted our conversion rates by 30%.", title: "Tech Lead", company: "Thames Retail IT (UK)" },
                { quote: "Their DevOps implementation drastically reduced our deployment time from days to hours.", title: "Head of Engineering", company: "Oakwood Logistics (UK)" },
                { quote: "The custom SaaS dashboard they built is now the core of our operations.", title: "Product Manager", company: "Maple Sync (Canada)" },
                { quote: "Excellent team. They understood our complex data requirements perfectly.", title: "Data Architect", company: "Northway Analytics (Canada)" },
                { quote: "Flawless execution on our mobile application overhaul. Highly recommend.", title: "CTO", company: "Sydney Cloud Solutions (Australia)" },
                { quote: "Their proactive communication and technical expertise made this project a breeze.", title: "Engineering Manager", company: "Coral Reef Tech (Australia)" },
                { quote: "Acriotech acts like an extension of our internal team. Fantastic architecture skills.", title: "Founder", company: "Kiwi Web Services (New Zealand)" },
                { quote: "They refactored our legacy system without any downtime. Pure wizards.", title: "Lead Developer", company: "Auckland Dynamics (New Zealand)" },
                { quote: "German engineering standards met their match! The code quality is pristine.", title: "Software Director", company: "Berlin Automatik (Germany)" },
                { quote: "A very reliable technical partner for our IoT infrastructure needs.", title: "VP of Product", company: "Munich Sensorics (Germany)" },
                { quote: "The microservices migration was handled perfectly. Minimal friction, huge performance gains.", title: "Platform Architect", company: "Bristol Financial (UK)" },
                { quote: "We were struggling with database scaling until Acriotech stepped in.", title: "Database Lead", company: "Toronto Data Co. (Canada)" },
                { quote: "They transformed our clunky internal portal into a blazing fast React application.", title: "IT Director", company: "Vindhya Motors (India)" },
                { quote: "Amazing work on the AI integration. It has saved us hundreds of man-hours.", title: "COO", company: "Kochi Tech Labs (India)" },
                { quote: "A highly skilled team that delivers exactly what they promise, on time.", title: "Technical Lead", company: "Mumbai FinServ (India)" },
                { quote: "Their cloud engineers optimized our AWS bill while improving performance.", title: "CTO", company: "Delhi Startup Hub (India)" },
                { quote: "The mobile app they delivered is robust and handles peak traffic flawlessly.", title: "Engineering Head", company: "Bengaluru Logistics (India)" },
                { quote: "Acriotech's attention to detail during the UI/UX phase was exceptional.", title: "Product Owner", company: "Pune Retail Tech (India)" },
                { quote: "They modernized our entire stack in just three months. Truly impressive.", title: "VP of Engineering", company: "Hyderabad Cloud Systems (India)" },
                { quote: "Great communication and even better code quality.", title: "Software Manager", company: "Chennai Analytics (India)" }
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
      )}

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#5B6472', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Questions & Answers</div>
            <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 700, margin: 0 }}>Frequently Asked Questions</h2>
          </div>
          <FAQAccordion />
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
