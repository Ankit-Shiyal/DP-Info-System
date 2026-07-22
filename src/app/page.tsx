"use client";

import Image from "next/image";
import {
  ArrowRight, Code2, Database, Shield, Zap, Layers, Network, Server,
  Smartphone, Terminal, CircleCheck, Play, ArrowUpRight, Cloud, Activity,
  Lock, Users, MonitorSmartphone, ChevronRight, BarChart3, Globe, Clock,
  CheckCircle2, GitBranch, Cpu, Workflow, LineChart, Box, Search,
} from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// --- Hero Architecture Dashboard ---
function EngineeringArchitecture() {
  return (
    <div className="hero-architecture-wrapper" style={{ position: 'relative', width: '100%', minHeight: '400px', height: 'clamp(400px, 60vw, 600px)' }}>
      {/* Circuit Connections */}
      <svg style={{ position: 'absolute', top: '10%', left: '0', width: '100%', height: '80%', zIndex: 0 }} viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
        <path d="M 150 100 L 300 100 L 300 200 L 450 200" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
        <path d="M 150 300 L 250 300 L 250 200" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
        <path d="M 450 100 L 450 50 L 550 50" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.3" />
        <path d="M 80 250 L 80 90 L 220 90" fill="none" stroke="rgba(37,99,235,0.1)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>

      {/* Code Editor Terminal */}
      <div style={{
        position: 'absolute', top: 'var(--hero-code-top)', left: 'var(--hero-code-left)',
        width: 'var(--hero-code-width)', zIndex: 2,
        background: 'var(--dark)', color: '#fff', padding: '1.25rem',
        borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 20px 40px -10px rgba(15,23,42,0.3)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.5rem' }}>
          <Terminal size={14} color="var(--accent)" /> <span style={{ fontSize: '0.75rem', color: '#8892B0' }}>api/v2/core.ts</span>
        </div>
        <pre style={{ fontSize: '0.75rem', lineHeight: 1.8, margin: 0, fontFamily: 'monospace' }}>
          <span style={{ color: '#C678DD' }}>import</span> {'{'} <span style={{ color: '#E5C07B' }}>Engine</span> {'}'} <span style={{ color: '#C678DD' }}>from</span> <span style={{ color: '#98C379' }}>'@acriotech/core'</span>;
          <br /><br />
          <span style={{ color: '#C678DD' }}>export const</span> <span style={{ color: '#61AFEF' }}>Cluster</span> = <span style={{ color: '#E5C07B' }}>new</span> <span style={{ color: '#E5C07B' }}>Engine</span>({'{'}
          <br />  <span style={{ color: '#E5C07B' }}>region</span>: <span style={{ color: '#98C379' }}>"global-1"</span>,
          <br />  <span style={{ color: '#E5C07B' }}>scaling</span>: <span style={{ color: '#D19A66' }}>true</span>
          <br />{'}'});
        </pre>
      </div>

      {/* Cloud Architecture Panel */}
      <div style={{
        position: 'absolute', top: 'var(--hero-db-top)', left: 'var(--hero-db-left)', right: 'var(--hero-db-right)',
        width: 'var(--hero-db-width)', zIndex: 2,
        background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)',
        padding: '1.5rem', borderRadius: '16px',
        border: '1px solid rgba(226,232,240,0.6)',
        boxShadow: '0 20px 40px -10px rgba(15,23,42,0.1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Cloud size={18} color="var(--primary)" />
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Cloud Infrastructure</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ background: 'var(--bg-section)', padding: '0.75rem 1rem', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={14} color="var(--accent)" /> Primary DB</div>
            <span style={{ color: 'var(--success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)' }} /> Synced</span>
          </div>
          <div style={{ background: 'var(--bg-section)', padding: '0.75rem 1rem', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', border: '1px solid var(--border-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Database size={14} color="var(--text-tertiary)" /> Replica</div>
            <span style={{ color: 'var(--text-tertiary)' }}>Standby</span>
          </div>
        </div>
        {/* Mini status bar */}
        <div style={{ marginTop: '0.75rem', height: '3px', borderRadius: '2px', background: '#E2E8F0', overflow: 'hidden' }}>
          <div style={{ width: '72%', height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg, #22C55E, #16A34A)' }} />
        </div>
      </div>

      {/* Deployment Pipeline */}
      <div style={{
        position: 'absolute', top: '62%', left: '50%', transform: 'translateX(-50%)',
        width: '260px', zIndex: 2,
        background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)',
        padding: '0.875rem 1.25rem', borderRadius: '14px',
        border: '1px solid rgba(226,232,240,0.6)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {['Build', 'Test', 'Deploy'].map((phase, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: i < 3 ? 'rgba(37,99,235,0.1)' : '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.45rem', fontWeight: 800, color: '#2563EB' }}>{i + 1}</span>
              </div>
              <span style={{ fontSize: '0.6rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{phase}</span>
              {i < 2 && <ChevronRight size={10} color="#CBD5E1" />}
            </div>
          ))}
          <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={10} color="#22C55E" />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div style={{ position: 'absolute', top: 'var(--hero-ai-top)', left: 'var(--hero-ai-left)', right: 'var(--hero-ai-right)', zIndex: 3 }}>
        <div style={{
          padding: '0.65rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem',
          background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)',
          borderRadius: '100px', border: '1px solid rgba(226,232,240,0.6)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
        }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(6,182,212,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={12} color="var(--accent)" />
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>AI Engine Connected</div>
        </div>
      </div>

      <div style={{ position: 'absolute', top: 'var(--hero-trust-top)', bottom: 'var(--hero-trust-bottom)', left: 'var(--hero-trust-left)', right: 'var(--hero-trust-right)', zIndex: 3 }}>
        <div style={{
          padding: '0.65rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem',
          background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)',
          borderRadius: '100px', border: '1px solid rgba(226,232,240,0.6)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
        }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={12} color="var(--primary)" />
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>Zero-Trust Security</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 'var(--hero-deploy-bottom)', left: 'var(--hero-deploy-left)', right: 'var(--hero-deploy-right)', transform: 'var(--hero-deploy-transform)', zIndex: 3 }}>
        <div style={{
          padding: '0.65rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem',
          background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(16px)',
          borderRadius: '100px', border: '1px solid rgba(226,232,240,0.6)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
        }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'rgba(6,182,212,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Activity size={12} color="var(--accent)" />
          </div>
          <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>Deployment Active</div>
        </div>
      </div>
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              border: `1px solid ${isOpen ? 'rgba(37,99,235,0.15)' : 'var(--border-light)'}`,
              overflow: 'hidden',
              transition: 'border-color 200ms ease',
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: '100%',
                padding: '1.15rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', margin: 0, lineHeight: 1.4 }}>
                {faq.q}
              </h3>
              <div style={{
                color: 'var(--primary)',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 200ms ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: '24px',
                height: '24px',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </button>
            {isOpen && (
              <div>
                <div style={{ padding: '0 1.5rem 1.25rem 1.5rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            )}
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
      <NavBar />

      {/* ════════════════════════════════════════ */}
      {/*  HERO — editorial + enterprise dashboard */}
      {/* ════════════════════════════════════════ */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'clamp(100px, 15vh, 140px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '50%', height: '60%', background: 'radial-gradient(circle, rgba(6,182,212,0.02) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div className="hero-text-container" style={{ paddingRight: '1rem' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <Code2 size={12} color="var(--primary)" />
                Enterprise Software Engineering
              </div>
              <h1 className="hero-title" style={{ fontSize: 'var(--font-hero)', marginBottom: '1.25rem', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em' }}>
                Enterprise Software,<br />
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Built Without Compromise.</span>
              </h1>
              <p style={{ fontSize: 'var(--font-body)', marginBottom: '2.5rem', maxWidth: '520px', lineHeight: 1.7 }}>
                We partner with ambitious businesses to design, engineer and evolve enterprise software, AI platforms and cloud solutions that become the foundation of long-term growth.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <a href="/contact-us" className="btn-primary" style={{ textDecoration: 'none' }}>
                Start a Project <ArrowRight size={16} className="arrow" />
              </a>
              <a href="/work" className="btn-secondary" style={{ textDecoration: 'none' }}>
                View Our Work
              </a>
            </div>

            {/* Expertise badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                { label: 'Enterprise Software', color: 'var(--primary)' },
                { label: 'Artificial Intelligence', color: 'var(--accent)' },
                { label: 'Cloud Infrastructure', color: '#22C55E' },
                { label: 'Automation', color: '#F59E0B' },
                { label: 'Digital Products', color: '#EC4899' },
              ].map((item, i) => (
                <span key={i} style={{
                  fontSize: '0.6rem', fontWeight: 600, color: item.color,
                  padding: '0.25rem 0.7rem', borderRadius: '100px',
                  background: `${item.color}08`, border: `1px solid ${item.color}15`,
                }}>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <EngineeringArchitecture />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  ENTERPRISE METRICS — premium stat cards */}
      {/* ════════════════════════════════════════ */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: 'var(--dark)', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(37,99,235,0.12) 0%, rgba(15,23,42,0) 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {[
              { icon: <Server size={20} />, num: "80+", label: "Production Systems", desc: "Mission-critical applications built, deployed, and actively managed.", progress: 85 },
              { icon: <Activity size={20} />, num: "15M+", label: "Daily API Requests", desc: "High-throughput microservices engineered for secure, scalable operations.", progress: 92 },
              { icon: <Shield size={20} />, num: "99.99%", label: "Uptime Guarantee", desc: "Fault-tolerant cloud environments designed for business continuity.", progress: 99 },
              { icon: <Users size={20} />, num: "40+", label: "Active Partnerships", desc: "Long-term engineering engagements with mid-market and enterprise leaders.", progress: 78 },
            ].map((stat, i) => (
              <div
                key={i}
                className="metric-card"
                style={{
                  padding: '2rem',
                  background: 'rgba(255,255,255,0.02)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.04)',
                  textAlign: 'left',
                  transition: 'border-color 200ms ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(37,99,235,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ color: 'var(--accent)' }}>{stat.icon}</span>
                </div>
                <div style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '0.35rem' }}>{stat.num}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: 700, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, margin: '0 0 1rem 0' }}>{stat.desc}</p>
                {/* Progress bar */}
                <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                  <div style={{ width: `${stat.progress}%`, height: '100%', borderRadius: '2px', background: 'linear-gradient(90deg, #2563EB, #06B6D4)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  CORE CAPABILITIES — premium bento grid  */}
      {/* ════════════════════════════════════════ */}
      <section id="services" className="section-padding">
        <div className="container">
          <div
            className="section-header-flex"
            style={{ marginBottom: 'var(--spacing-section-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
          >
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <Layers size={12} color="var(--primary)" />
                Capabilities
              </div>
              <h2 style={{ fontSize: 'var(--font-h2)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>Core Capabilities</h2>
              <p style={{ fontSize: '1rem', maxWidth: '480px', marginTop: '0.75rem' }}>We solve complex engineering problems through specialized technical domains.</p>
            </div>
            <a href="/services" className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              View All Capabilities
            </a>
          </div>

          <div className="bento-grid">
            {/* Large Featured Card — Enterprise Software */}
            <div
              className="bento-card"
              style={{ gridColumn: 'span 8', minHeight: '400px', position: 'relative', background: 'linear-gradient(135deg, var(--dark) 0%, var(--dark-800) 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Server size={26} color="var(--accent)" />
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: '#FFFFFF' }}>Enterprise Software</h3>
                <p style={{ maxWidth: '440px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>Bespoke, mission-critical applications engineered for uncompromising stability, security, and infinite scalability within complex organizational structures.</p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {['Microservices', 'Event-Driven', 'CQRS', 'Domain-Driven'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.55rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', padding: '0.2rem 0.55rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                  <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: '#60A5FA', textDecoration: 'none' }}>
                    Explore Enterprise Services <ArrowRight size={12} />
                  </a>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
            </div>

            {/* AI Card */}
            <div
              className="bento-card"
              style={{ gridColumn: 'span 4', background: 'var(--card-bg)' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(6,182,212,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Zap size={24} color="var(--accent)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Artificial Intelligence</h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Intelligent neural systems designed to automate workflows and extract cognitive value from enterprise data.</p>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                  {['LLMs', 'NLP', 'Computer Vision'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.55rem', fontWeight: 600, color: 'var(--text-tertiary)', padding: '0.15rem 0.5rem', borderRadius: '100px', border: '1px solid var(--border)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud Card */}
            <div
              className="bento-card"
              style={{ gridColumn: 'span 4', background: 'var(--card-bg)' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(37,99,235,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Cloud size={24} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Cloud Infrastructure</h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Resilient, highly-available cloud environments engineered for zero downtime and global scale.</p>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                  {['AWS', 'GCP', 'Azure', 'K8s'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.55rem', fontWeight: 600, color: 'var(--text-tertiary)', padding: '0.15rem 0.5rem', borderRadius: '100px', border: '1px solid var(--border)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Digital Products Card */}
            <div
              className="bento-card"
              style={{ gridColumn: 'span 4', background: 'var(--card-bg)' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <MonitorSmartphone size={24} color="#6366F1" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Digital Products</h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Native and cross-platform applications delivering premium user experiences.</p>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                  {['React Native', 'Flutter', 'Swift'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.55rem', fontWeight: 600, color: 'var(--text-tertiary)', padding: '0.15rem 0.5rem', borderRadius: '100px', border: '1px solid var(--border)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* API & Automation Card */}
            <div
              className="bento-card"
              style={{ gridColumn: 'span 4', background: 'var(--card-bg)' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Network size={24} color="#22C55E" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>API & Automation</h3>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>Robust microservices that act as the connective tissue for digital ecosystems.</p>
              <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                  {['REST', 'GraphQL', 'gRPC'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.55rem', fontWeight: 600, color: 'var(--text-tertiary)', padding: '0.15rem 0.5rem', borderRadius: '100px', border: '1px solid var(--border)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  ARCHITECTURE EXCELLENCE — case studies  */}
      {/* ════════════════════════════════════════ */}
      <section id="portfolio" className="section-padding" style={{ background: 'var(--bg-section)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--spacing-section-sm)' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <Box size={12} color="var(--primary)" />
                Selected Work
              </div>
              <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: 'var(--text-primary)', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Architecture Excellence</h2>
            </div>
            <a href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--primary)', fontSize: '0.95rem' }}>
              Explore Case Studies <ArrowRight size={16} />
            </a>
          </div>

          <div className="case-study-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Case Study 1 */}
            <div className="case-study-card" style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid var(--border)', overflow: 'hidden', transition: 'border-color 200ms ease, box-shadow 200ms ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.15)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: 'var(--bg-section)' }}>
                <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" alt="Cloud Infrastructure" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.75) 100%)' }} />
                {/* Overlay badge */}
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  <div style={{ padding: '0.4rem 0.85rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Cloud Infrastructure
                  </div>
                </div>
                {/* Bottom stat */}
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', display: 'flex', gap: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Throughput</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>15M req/day</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Uptime</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#22C55E' }}>99.99%</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  {['Kubernetes', 'Terraform', 'AWS'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.6rem', fontWeight: 600, color: 'var(--text-tertiary)', padding: '0.2rem 0.6rem', borderRadius: '100px', background: '#F8FAFC', border: '1px solid var(--border-light)' }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Distributed Cloud Architecture</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Engineered a highly available, multi-region cloud infrastructure scaling automatically to handle over 15 million daily requests.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="case-study-card" style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid var(--border)', overflow: 'hidden', transition: 'border-color 200ms ease, box-shadow 200ms ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.15)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.04)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'relative', height: '280px', overflow: 'hidden', background: 'var(--bg-section)' }}>
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Cybersecurity Fabric" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.75) 100%)' }} />
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  <div style={{ padding: '0.4rem 0.85rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Cybersecurity
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', display: 'flex', gap: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Latency</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>5&mu;s</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Coverage</div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#22C55E' }}>10K nodes</div>
                  </div>
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  {['Rust', 'WebAssembly', 'eBPF'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.6rem', fontWeight: 600, color: 'var(--text-tertiary)', padding: '0.2rem 0.6rem', borderRadius: '100px', background: '#F8FAFC', border: '1px solid var(--border-light)' }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Zero-Trust Network Fabric</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                  Architected a low-latency, kernel-level network security fabric providing real-time threat mitigation across thousands of enterprise nodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  ENGINEERING WORKFLOW — timeline         */}
      {/* ════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ marginBottom: 'var(--spacing-section-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <GitBranch size={12} color="var(--primary)" />
                Methodology
              </div>
              <h2 className="workflow-title" style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: 'var(--text-primary)', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Engineering<br />Workflow</h2>
            </div>
            <p style={{ maxWidth: '400px', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, paddingBottom: '0.5rem' }}>
              A disciplined, systematic approach to building complex software systems that scale effortlessly.
            </p>
          </div>

          <div className="workflow-timeline">
            {[
              { id: "01", title: 'Discovery & Audit', desc: 'Deep technical analysis of existing systems, identifying bottlenecks and architectural requirements.', icon: Search },
              { id: "02", title: 'System Architecture', desc: 'Designing resilient, scalable foundations mapping out data models, microservices, and infrastructure.', icon: LineChart },
              { id: "03", title: 'UI/UX Engineering', desc: 'Crafting intuitive interfaces backed by robust design systems and precise component architecture.', icon: MonitorSmartphone },
              { id: "04", title: 'Development Sprints', desc: 'Agile execution with rigorous peer reviews, automated testing, and continuous integration.', icon: Cpu },
              { id: "05", title: 'Deployment & QA', desc: 'Zero-downtime deployments with comprehensive load testing, security audits, and compliance checks.', icon: Cloud },
              { id: "06", title: 'Scale & Support', desc: 'Proactive monitoring, performance optimization, and dedicated enterprise SLA support.', icon: Activity },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="workflow-step">
                  <div className="workflow-line" />
                  <div className="workflow-card" style={{
                    padding: '2rem',
                    background: '#F8FAFC',
                    borderRadius: '24px',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    position: 'relative',
                    transition: 'border-color 200ms ease, box-shadow 200ms ease',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    {/* Step Number */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                      <div className="workflow-dot" style={{
                        width: '44px', height: '44px', borderRadius: '12px',
                        background: index === 0 ? 'rgba(37,99,235,0.1)' : index === 1 ? 'rgba(6,182,212,0.1)' : index === 2 ? 'rgba(99,102,241,0.1)' : index === 3 ? 'rgba(34,197,94,0.1)' : index === 4 ? 'rgba(245,158,11,0.1)' : 'rgba(236,72,153,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{
                          fontSize: '0.7rem', fontWeight: 800, fontFamily: 'monospace',
                          color: index === 0 ? '#2563EB' : index === 1 ? '#06B6D4' : index === 2 ? '#6366F1' : index === 3 ? '#22C55E' : index === 4 ? '#F59E0B' : '#EC4899',
                        }}>{step.id}</span>
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>{`
          .workflow-timeline {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            position: relative;
            padding-left: 2rem;
          }
          .workflow-timeline::before {
            content: '';
            position: absolute;
            left: 22px;
            top: 22px;
            bottom: 22px;
            width: 2px;
            background: linear-gradient(180deg, #2563EB, #06B6D4, #6366F1, #22C55E, #F59E0B, #EC4899);
            opacity: 0.2;
          }
          .workflow-step {
            position: relative;
          }
          @media (max-width: 768px) {
            .workflow-timeline { padding-left: 1.25rem; }
            .workflow-timeline::before { left: 14px; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  FAQ — two-column: editorial + accordion */}
      {/* ════════════════════════════════════════ */}
      <section className="section-padding" style={{ background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="faq-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Left: Editorial */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <CircleCheck size={12} color="var(--primary)" />
                Questions & Answers
              </div>
              <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: 'var(--text-primary)', fontWeight: 800, margin: '0 0 1rem 0', lineHeight: 1.1 }}>Frequently Asked Questions</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Everything you need to know about working with Acriotech. Can&apos;t find what you&apos;re looking for? Reach out to our team directly.
              </p>
              <a href="/contact-us" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontWeight: 600, color: 'var(--primary)', fontSize: '0.9rem', textDecoration: 'none',
                borderBottom: '2px solid var(--primary)', paddingBottom: '0.15rem',
              }}>
                Contact our team <ArrowRight size={14} />
              </a>
            </div>

            {/* Right: Accordion */}
            <div>
              <FAQAccordion />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .faq-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  FINAL CTA — premium enterprise CTA      */}
      {/* ════════════════════════════════════════ */}
      <section className="dark-section" style={{ position: 'relative', padding: 'calc(var(--spacing-section) * 1.5) 0', overflow: 'hidden', background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-20%', left: '20%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', transform: 'translateY(10%)' }} />
          <div style={{ position: 'absolute', bottom: '-20%', right: '10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Trust row */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {[
              { icon: <Shield size={12} />, label: 'ISO 27001 Ready' },
              { icon: <Lock size={12} />, label: 'GDPR Compliant' },
              { icon: <Cloud size={12} />, label: 'Cloud Native' },
            ].map((badge, i) => (
              <div key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                padding: '0.3rem 0.75rem', borderRadius: '100px',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
              }}>
                {badge.icon}
                {badge.label}
              </div>
            ))}
          </div>

          <h2 className="cta-title" style={{ fontSize: 'var(--font-hero)', marginBottom: '1.5rem', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: '#FFFFFF' }}>
            Let&apos;s Build Software<br />
            <span style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              That Stands The Test of Time.
            </span>
          </h2>

          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Ready to engineer software that scales with your ambition? Start a conversation with our technical team.
          </p>

          {/* Mini stat row */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {[
              { value: '50+', label: 'Enterprise Clients' },
              { value: '120+', label: 'Projects Delivered' },
              { value: '45+', label: 'Engineers' },
              { value: '99.97%', label: 'Avg. Uptime' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>{s.value}</div>
                <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="cta-buttons-flex" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'center' }}>
            <a href="/work" style={{
              padding: '1rem 2.5rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: 'var(--dark)',
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 200ms ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#F1F5F9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; }}
            >
              Explore Our Work
            </a>

            <a href="/contact-us" style={{
              padding: '1rem 2.5rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#FFFFFF',
              background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: '12px',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 200ms ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
