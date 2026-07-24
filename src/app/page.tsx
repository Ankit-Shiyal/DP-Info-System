"use client";

import {
  ArrowRight, Code2, Database, Shield, Zap, Network, Server,
  Smartphone, Terminal, CircleCheck, Play, ArrowUpRight, Cloud, Activity,
  Lock, Users, MonitorSmartphone, ChevronRight, BarChart3, Globe, Clock,
  Cpu, Workflow, LineChart, Search,
  Container, Rocket, Brain, LayoutGrid,
  Bell, ShieldAlert,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Editor from "@monaco-editor/react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

// ─── FAQ Data ──────────────────────────────────────────────────────
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

// ─── FAQ Accordion ──────────────────────────────────────────────────
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            style={{
              background: isOpen ? '#F8FAFC' : '#FFFFFF',
              borderRadius: '16px',
              border: `1.5px solid ${isOpen ? '#2563EB' : '#E5E7EB'}`,
              overflow: 'hidden',
              transition: 'border-color 0.2s ease, background 0.2s ease',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                width: '100%', padding: '1.25rem 1.5rem', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center',
                background: 'transparent', border: 'none', cursor: 'pointer',
                textAlign: 'left', gap: '1.5rem',
              }}
            >
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#111827', margin: 0, lineHeight: 1.4 }}>
                {faq.q}
              </h3>
              <div
                style={{
                  flexShrink: 0, color: '#2563EB',
                  transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  fontSize: '1.25rem', fontWeight: 400, lineHeight: 1,
                }}
              >
                {isOpen ? '\u2212' : '+'}
              </div>
            </button>
            {isOpen && (
              <div style={{ padding: '0 1.5rem 1.25rem' }}>
                <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Tech Logos Grid ───────────────────────────────────────────────
const techLogos = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Node.js', color: '#339933' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AI', color: '#7C3AED' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Rust', color: '#000000' },
];

function TechGrid() {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center',
    }}>
      {techLogos.map((tech, i) => (
        <div
          key={i}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.75rem 1.5rem',
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
          }}
        >
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: `${tech.color}10`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `1px solid ${tech.color}20`,
          }}>
            <span style={{ fontSize: '0.55rem', fontWeight: 800, color: tech.color }}>{tech.name.slice(0, 2).toUpperCase()}</span>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap' }}>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Service Content (preserved from original) ─────────────────────
// ─── Enterprise-Grade Illustration Components ──────────────────────


/* ── Artificial Intelligence: AI Copilot / Chat Interface ── */
function AINetwork() {
  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ background: '#0F172A', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 8px 32px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
        {/* Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '5px', background: 'linear-gradient(135deg, #06B6D4, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={11} color="#FFFFFF" />
            </div>
            <span style={{ fontSize: '0.55rem', fontWeight: 700, color: '#FFFFFF' }}>AI Copilot</span>
            <span style={{ fontSize: '0.4rem', color: '#06B6D4', fontWeight: 600, background: 'rgba(6,182,212,0.1)', padding: '0.08rem 0.4rem', borderRadius: '4px', border: '1px solid rgba(6,182,212,0.15)' }}>v3 · 4o</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <div style={{ width: '14px', height: '14px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E' }} />
          </div>
        </div>

        {/* Chat Area */}
        <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {/* Agent status badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <div style={{ display: 'flex', gap: '0.2rem' }}>
              {['Research', 'Code', 'Reason'].map((a, i) => (
                <span key={i} style={{ fontSize: '0.38rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)', padding: '0.15rem 0.4rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.06)' }}>{a}</span>
              ))}
            </div>
            <span style={{ fontSize: '0.38rem', color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>3 agents active</span>
          </div>

          {/* Message bubbles */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {/* User message */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <div style={{ background: 'rgba(37,99,235,0.2)', borderRadius: '12px 12px 4px 12px', padding: '0.5rem 0.7rem', maxWidth: '80%', border: '1px solid rgba(37,99,235,0.1)' }}>
                <span style={{ fontSize: '0.45rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                  Analyze our Q1 sales data and identify trends
                </span>
              </div>
            </div>
            {/* AI response */}
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px 12px 12px 4px', padding: '0.5rem 0.7rem', maxWidth: '85%', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.25rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'linear-gradient(135deg, #06B6D4, #2563EB)' }} />
                  <span style={{ fontSize: '0.4rem', fontWeight: 600, color: '#06B6D4' }}>Copilot</span>
                  <span style={{ fontSize: '0.35rem', color: 'rgba(255,255,255,0.25)' }}>· 2.3s</span>
                </div>
                <span style={{ fontSize: '0.45rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  I found <span style={{ color: '#06B6D4', fontWeight: 600 }}>3 key trends</span> in Q1 2026: Revenue grew 18% MoM led by the Enterprise tier (up 34%). API consumption doubled. Support tickets dropped 22% after the v3.2 deployment.
                </span>
                {/* Sparkline in response */}
                <div style={{ marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <svg width="60" height="16" viewBox="0 0 60 16">
                    <path d="M0 14 L10 12 L20 13 L30 8 L40 10 L50 4 L60 6" stroke="#22C55E" strokeWidth="1.2" fill="none" />
                  </svg>
                  <span style={{ fontSize: '0.38rem', color: 'rgba(34,197,94,0.6)', fontWeight: 600 }}>+18.2%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow automation card */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', padding: '0.5rem 0.7rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.35rem' }}>
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22C55E' }} />
              <span style={{ fontSize: '0.4rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Workflow Automation</span>
            </div>
            <div style={{ display: 'flex', gap: '0.3rem' }}>
              {['Data Ingestion', 'AI Analysis', 'Report Gen', 'Slack Notify'].map((w, i) => (
                <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '0.25rem 0.3rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <div style={{ fontSize: '0.35rem', fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>{w}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Inference stats */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.38rem', color: 'rgba(255,255,255,0.3)' }}>
            <span>Model: GPT-4o · Context: 8.2K tokens</span>
            <span>Temp: 0.3 · Cost: $0.024</span>
          </div>

          {/* Prompt input */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '0.45rem 0.65rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.3)', flex: 1 }}>Ask AI Copilot anything...</span>
            <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: 'linear-gradient(135deg, #06B6D4, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ArrowRight size={11} color="#FFFFFF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Cloud Infrastructure: Cloud Ops Dashboard ── */
function CloudDiagram() {
  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ background: '#0F172A', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cloud size={14} color="#2563EB" />
            <span style={{ fontSize: '0.55rem', fontWeight: 700, color: '#FFFFFF' }}>CloudOps Console</span>
            <span style={{ fontSize: '0.4rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>us-east-1</span>
          </div>
          <span style={{ fontSize: '0.4rem', color: '#22C55E', fontWeight: 600, background: 'rgba(34,197,94,0.1)', padding: '0.1rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(34,197,94,0.12)' }}>● All Healthy</span>
        </div>

        <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {/* Resource summary */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.4rem' }}>
            {[
              { l: 'EC2', v: '24', c: '#2563EB' },
              { l: 'RDS', v: '8', c: '#06B6D4' },
              { l: 'Lambda', v: '156', c: '#F59E0B' },
              { l: 'S3', v: '2.4TB', c: '#22C55E' },
            ].map((r, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '0.35rem 0.4rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ fontSize: '0.38rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, textTransform: 'uppercase' }}>{r.l}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: r.c }}>{r.v}</div>
              </div>
            ))}
          </div>

          {/* Two-column: K8s Cluster + Monitoring */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem' }}>
            {/* K8s Cluster */}
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.4rem 0.55rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <Container size={10} color="#2563EB" />
                <span style={{ fontSize: '0.42rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>K8s Cluster</span>
                <span style={{ fontSize: '0.35rem', color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>3 nodes</span>
              </div>
              <div style={{ padding: '0.4rem 0.55rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {[
                  { n: 'worker-1', cpu: 62, mem: 45 },
                  { n: 'worker-2', cpu: 38, mem: 52 },
                  { n: 'worker-3', cpu: 81, mem: 73 },
                  { n: 'master-0', cpu: 22, mem: 34 },
                ].map((node, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.38rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.1rem' }}>
                      <span style={{ color: 'rgba(255,255,255,0.6)' }}>{node.n}</span>
                      <span>{node.cpu}% / {node.mem}%</span>
                    </div>
                    <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                      <div style={{ width: `${node.cpu}%`, height: '100%', borderRadius: '2px', background: node.cpu > 75 ? '#F59E0B' : '#2563EB' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monitoring Graph */}
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.4rem 0.55rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Activity size={10} color="#22C55E" />
                  <span style={{ fontSize: '0.42rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Monitoring</span>
                </div>
                <span style={{ fontSize: '0.35rem', color: 'rgba(255,255,255,0.3)' }}>6h</span>
              </div>
              <div style={{ padding: '0.5rem 0.55rem' }}>
                <svg viewBox="0 0 140 50" style={{ width: '100%', height: 'auto' }}>
                  <path d="M0 45 Q15 35 Q30 40 Q45 25 Q60 30 Q75 15 Q90 20 Q105 10 Q120 15 Q135 8" stroke="#2563EB" strokeWidth="1.5" fill="none" />
                  <path d="M0 48 Q15 42 Q30 44 Q45 35 Q60 38 Q75 28 Q90 32 Q105 22 Q120 26 Q135 18" stroke="#06B6D4" strokeWidth="1.2" fill="none" opacity="0.5" />
                  <rect x="120" y="5" width="20" height="45" fill="rgba(37,99,235,0.04)" rx="2" />
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.35rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.2rem' }}>
                  <span>CPU: 42%</span>
                  <span>Mem: 58%</span>
                  <span>Net: 1.2 Gbps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deployment Pipeline */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
            <div style={{ padding: '0.4rem 0.65rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Rocket size={10} color="#22C55E" />
                <span style={{ fontSize: '0.42rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Deployment Pipeline</span>
              </div>
            </div>
            <div style={{ padding: '0.5rem 0.65rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {[
                { s: 'Build', st: 'Passed', t: '2m 14s', c: '#22C55E' },
                { s: 'Test', st: 'Passed', t: '4m 32s', c: '#22C55E' },
                { s: 'Deploy', st: 'In Progress', t: '1m 08s', c: '#2563EB' },
                { s: 'Health Check', st: 'Pending', t: '—', c: 'rgba(255,255,255,0.3)' },
              ].map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: d.c, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.42rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, minWidth: '60px' }}>{d.s}</span>
                  <div style={{ flex: 1, height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{ width: i === 2 ? '60%' : i < 2 ? '100%' : '0%', height: '100%', borderRadius: '2px', background: d.c }} />
                  </div>
                  <span style={{ fontSize: '0.38rem', color: d.c, fontWeight: 600, minWidth: '52px', textAlign: 'right' }}>{d.st}</span>
                  <span style={{ fontSize: '0.35rem', color: 'rgba(255,255,255,0.25)', minWidth: '36px', textAlign: 'right' }}>{d.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Digital Products: Premium SaaS App — Desktop + Mobile ── */
function DigitalProductMockup() {
  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '0.65rem', alignItems: 'stretch' }}>
      {/* ── Desktop App ── */}
      <div style={{ flex: 1, maxWidth: '248px', background: '#FFFFFF', borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {/* App chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.4rem 0.65rem', background: '#F8FAFC', borderBottom: '1px solid #F1F5F9' }}>
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#EF4444' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#F59E0B' }} />
          <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#22C55E' }} />
          <div style={{ flex: 1, marginLeft: '0.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E2E8F0', borderRadius: '4px', height: '10px' }}>
            <span style={{ fontSize: '0.28rem', color: '#94A3B8', fontWeight: 500 }}>app.acriotech.io/dashboard</span>
          </div>
        </div>
        {/* Sidebar + main layout */}
        <div style={{ display: 'flex', flex: 1 }}>
          {/* Sidebar */}
          <div style={{ width: '32px', background: '#0F172A', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0.4rem 0', gap: '0.35rem', flexShrink: 0 }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'linear-gradient(135deg, #2563EB, #06B6D4)' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#2563EB' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '4px', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ flex: 1 }} />
            <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#7C3AED' }} />
          </div>
          {/* Main content */}
          <div style={{ flex: 1, padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {/* Top header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.4rem', fontWeight: 700, color: '#0F172A' }}>Dashboard</div>
                <div style={{ fontSize: '0.32rem', color: '#94A3B8' }}>Welcome back, Jane</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <div style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </div>
                <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'linear-gradient(135deg, #2563EB, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.35rem', fontWeight: 700, color: '#FFFFFF' }}>J</span>
                </div>
              </div>
            </div>
            {/* KPI cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.3rem' }}>
              {[
                { l: 'Revenue', v: '$48.2K', c: '#0F172A' },
                { l: 'Users', v: '12,847', c: '#2563EB' },
              ].map((k, i) => (
                <div key={i} style={{ background: '#F8FAFC', borderRadius: '8px', padding: '0.35rem 0.45rem', border: '1px solid #F1F5F9' }}>
                  <div style={{ fontSize: '0.35rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em' }}>{k.l}</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 800, color: k.c }}>{k.v}</div>
                  <div style={{ fontSize: '0.3rem', color: '#22C55E' }}>↑ 12.4%</div>
                </div>
              ))}
            </div>
            {/* Chart area */}
            <div style={{ background: '#F8FAFC', borderRadius: '8px', border: '1px solid #F1F5F9', padding: '0.4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '0.35rem', fontWeight: 600, color: '#475569' }}>Monthly Revenue</span>
                <span style={{ fontSize: '0.3rem', color: '#2563EB', fontWeight: 600 }}>View</span>
              </div>
              <svg viewBox="0 0 160 30" style={{ width: '100%' }}>
                <path d="M0 28 Q16 22 Q32 24 Q48 16 Q64 18 Q80 10 Q96 14 Q112 6 Q128 10 Q144 4 Q160 6" stroke="#2563EB" strokeWidth="1.5" fill="none" />
                <path d="M0 30 Q16 26 Q32 28 Q48 22 Q64 24 Q80 18 Q96 20 Q112 12 Q128 16 Q144 10 Q160 12" stroke="#06B6D4" strokeWidth="1" fill="none" opacity="0.4" />
              </svg>
            </div>
            {/* Data table */}
            <div style={{ background: '#F8FAFC', borderRadius: '8px', border: '1px solid #F1F5F9', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.15rem', padding: '0.25rem 0.4rem', fontSize: '0.3rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', borderBottom: '1px solid #F1F5F9' }}>
                <span>Name</span>
                <span>Plan</span>
                <span>Status</span>
              </div>
              {[
                { n: 'Acme Corp', p: 'Enterprise', s: 'Active', sc: '#22C55E' },
                { n: 'Globex Inc', p: 'Pro', s: 'Active', sc: '#22C55E' },
                { n: 'Initech', p: 'Starter', s: 'Past Due', sc: '#F59E0B' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.15rem', padding: '0.2rem 0.4rem', fontSize: '0.35rem', borderBottom: i < 2 ? '1px solid #F1F5F9' : 'none', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: '#0F172A' }}>{row.n}</span>
                  <span style={{ color: '#475569' }}>{row.p}</span>
                  <span style={{ fontSize: '0.32rem', fontWeight: 600, color: row.sc, background: `${row.sc}10`, padding: '0.05rem 0.25rem', borderRadius: '3px', textAlign: 'center', width: 'fit-content' }}>{row.s}</span>
                </div>
              ))}
            </div>
            {/* Bottom tabs */}
            <div style={{ display: 'flex', gap: '0.2rem', marginTop: 'auto' }}>
              {['Overview', 'Analytics', 'Settings'].map((t, i) => (
                <div key={i} style={{ fontSize: '0.32rem', fontWeight: 600, color: i === 0 ? '#2563EB' : '#94A3B8', padding: '0.15rem 0.35rem', borderRadius: '4px', background: i === 0 ? 'rgba(37,99,235,0.06)' : 'transparent' }}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile App ── */}
      <div style={{ width: '92px', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#0F172A', borderRadius: '16px', padding: '0.4rem 0.3rem', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Status bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 0.15rem', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '0.3rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>9:41</span>
            <div style={{ display: 'flex', gap: '0.12rem' }}>
              <div style={{ width: '8px', height: '3px', borderRadius: '1px', background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ width: '6px', height: '3px', borderRadius: '1px', background: 'rgba(255,255,255,0.3)' }} />
            </div>
          </div>
          {/* App header */}
          <div style={{ background: 'linear-gradient(135deg, #7C3AED, #2563EB)', borderRadius: '8px', padding: '0.35rem 0.4rem', marginBottom: '0.35rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
              <span style={{ fontSize: '0.35rem', fontWeight: 700, color: '#FFFFFF' }}>Analytics</span>
              <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: 'rgba(255,255,255,0.15)' }} />
            </div>
            <div style={{ fontSize: '0.5rem', fontWeight: 800, color: '#FFFFFF' }}>$48.2K</div>
            <div style={{ fontSize: '0.3rem', color: 'rgba(255,255,255,0.6)' }}>↑ 12.4% this month</div>
          </div>
          {/* Content cards */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '7px', padding: '0.3rem' }}>
              <div style={{ height: '3px', borderRadius: '2px', background: '#E2E8F0', width: '70%', marginBottom: '0.2rem' }} />
              <div style={{ height: '3px', borderRadius: '2px', background: '#F1F5F9', width: '100%' }} />
              <div style={{ height: '3px', borderRadius: '2px', background: '#F1F5F9', width: '80%', marginTop: '0.1rem' }} />
            </div>
            <div style={{ background: '#FFFFFF', borderRadius: '7px', padding: '0.3rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                <span style={{ fontSize: '0.3rem', fontWeight: 600, color: '#0F172A' }}>Active Users</span>
                <span style={{ fontSize: '0.3rem', fontWeight: 700, color: '#2563EB' }}>847</span>
              </div>
              <svg viewBox="0 0 60 14" style={{ width: '100%' }}>
                <path d="M0 12 L8 10 L16 11 L24 6 L32 8 L40 3 L48 5 L56 2 L60 3" stroke="#2563EB" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <div style={{ background: '#FFFFFF', borderRadius: '7px', padding: '0.3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: 'linear-gradient(135deg, #7C3AED, #2563EB)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: '3px', borderRadius: '2px', background: '#E2E8F0', width: '60%', marginBottom: '0.1rem' }} />
                  <div style={{ height: '3px', borderRadius: '2px', background: '#F1F5F9', width: '40%' }} />
                </div>
              </div>
            </div>
          </div>
          {/* Tab bar */}
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0.25rem 0 0', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: 'auto' }}>
            {['H', 'S', 'P', 'M'].map((t, i) => (
              <div key={i} style={{ width: '12px', height: '12px', borderRadius: '3px', background: i === 0 ? '#2563EB' : 'rgba(255,255,255,0.06)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── API Management Platform (Postman/Stripe-style) ── */
function ApiInterface() {
  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 8px 32px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        {/* Top navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.55rem 1rem', borderBottom: '1px solid #F1F5F9', background: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: 'linear-gradient(135deg, #22C55E, #16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Network size={11} color="#FFFFFF" />
            </div>
            <span style={{ fontSize: '0.55rem', fontWeight: 700, color: '#0F172A' }}>API Platform</span>
            <span style={{ fontSize: '0.38rem', color: '#64748B', fontWeight: 500, background: '#F1F5F9', padding: '0.08rem 0.4rem', borderRadius: '4px' }}>v2.4.0</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <div style={{ width: '22px', height: '14px', borderRadius: '4px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2"><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <div style={{ width: '18px', height: '14px', borderRadius: '4px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            </div>
            <div style={{ width: '18px', height: '14px', borderRadius: '4px', background: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0.15rem' }}>
              <span style={{ fontSize: '0.3rem', fontWeight: 700, color: '#FFFFFF' }}>JD</span>
            </div>
          </div>
        </div>

        {/* Three-col nav tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC' }}>
          {['Endpoints', 'Monitor', 'Settings'].map((tab, i) => (
            <div key={i} style={{ flex: 1, textAlign: 'center', padding: '0.35rem 0', fontSize: '0.42rem', fontWeight: 600, color: i === 0 ? '#2563EB' : '#94A3B8', borderBottom: i === 0 ? '2px solid #2563EB' : '2px solid transparent' }}>
              {tab}
            </div>
          ))}
        </div>

        <div style={{ padding: '0.65rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          {/* ── Request Builder ── */}
          <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.4rem 0.65rem', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC' }}>
              <div style={{ display: 'flex', borderRadius: '6px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
                {['GET', 'POST', 'PUT', 'DEL'].map((m, i) => (
                  <div key={i} style={{ padding: '0.12rem 0.3rem', fontSize: '0.35rem', fontWeight: 700, color: i === 0 ? '#22C55E' : '#94A3B8', background: i === 0 ? 'rgba(34,197,94,0.06)' : '#FFFFFF', borderRight: i < 3 ? '1px solid #E2E8F0' : 'none' }}>{m}</div>
                ))}
              </div>
              <span style={{ flex: 1, fontSize: '0.4rem', fontWeight: 500, color: '#2563EB', fontFamily: 'monospace', background: '#F8FAFC', border: '1px solid #F1F5F9', borderRadius: '6px', padding: '0.2rem 0.4rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>/api/v2/orders/search</span>
              <div style={{ fontSize: '0.38rem', fontWeight: 600, color: '#FFFFFF', background: '#2563EB', borderRadius: '6px', padding: '0.2rem 0.5rem' }}>Send</div>
            </div>
            {/* Authorization + Headers row */}
            <div style={{ display: 'flex', gap: '0.4rem', padding: '0.35rem 0.65rem', borderBottom: '1px solid #F1F5F9', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Lock size={8} color="#22C55E" />
                <span style={{ fontSize: '0.35rem', color: '#22C55E', fontWeight: 600 }}>Bearer ••••••••</span>
              </div>
              <span style={{ fontSize: '0.35rem', color: '#CBD5E1' }}>/</span>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {['Content-Type', 'Accept'].map((h, i) => (
                  <span key={i} style={{ fontSize: '0.32rem', color: '#64748B', background: '#F1F5F9', padding: '0.05rem 0.3rem', borderRadius: '3px' }}>{h}</span>
                ))}
              </div>
            </div>
            {/* Response preview */}
            <div style={{ padding: '0.5rem 0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.38rem', fontWeight: 600, color: '#22C55E', background: 'rgba(34,197,94,0.06)', padding: '0.05rem 0.35rem', borderRadius: '3px' }}>200 OK</span>
                  <span style={{ fontSize: '0.35rem', color: '#94A3B8' }}>142ms · 2.4 KB</span>
                </div>
                <span style={{ fontSize: '0.35rem', color: '#2563EB', fontWeight: 600 }}>JSON</span>
              </div>
              <div style={{ background: '#0F172A', borderRadius: '8px', padding: '0.5rem 0.65rem', fontFamily: 'monospace', fontSize: '0.38rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>
                <div><span style={{ color: '#7C3AED' }}>{'{'}</span></div>
                <div>  <span style={{ color: '#06B6D4' }}>"status"</span>: <span style={{ color: '#22C55E' }}>"ok"</span>,</div>
                <div>  <span style={{ color: '#06B6D4' }}>"data"</span>: <span style={{ color: '#7C3AED' }}>{'{'}</span></div>
                <div>    <span style={{ color: '#06B6D4' }}>"orders"</span>: <span style={{ color: '#F59E0B' }}>142</span>,</div>
                <div>    <span style={{ color: '#06B6D4' }}>"total"</span>: <span style={{ color: '#F59E0B' }}>$24,892</span></div>
                <div>  <span style={{ color: '#7C3AED' }}>{'}'}</span></div>
                <div><span style={{ color: '#7C3AED' }}>{'}'}</span></div>
              </div>
            </div>
          </div>

          {/* ── Two-col: Webhook Builder + API Monitoring ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {/* Webhook Builder */}
            <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.4rem 0.55rem', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#7C3AED', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                <span style={{ fontSize: '0.4rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Webhooks</span>
                <span style={{ fontSize: '0.32rem', color: '#94A3B8', fontWeight: 500, marginLeft: 'auto' }}>4 active</span>
              </div>
              <div style={{ padding: '0.4rem 0.55rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {[
                  { e: 'order.created', t: 'Slack', s: '200', c: '#22C55E' },
                  { e: 'invoice.paid', t: 'Stripe', s: '200', c: '#22C55E' },
                  { e: 'user.deleted', t: 'Datadog', s: '500', c: '#EF4444' },
                  { e: 'deploy.ready', t: 'PagerDuty', s: '200', c: '#22C55E' },
                ].map((wh, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.15rem 0', borderBottom: i < 3 ? '1px solid #F8FAFC' : 'none' }}>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: wh.s === '200' ? '#22C55E' : '#EF4444', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.35rem', fontWeight: 600, color: '#2563EB', fontFamily: 'monospace', flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{wh.e}</span>
                    <span style={{ fontSize: '0.3rem', color: '#94A3B8', minWidth: '26px', textAlign: 'right' }}>{wh.t}</span>
                    <span style={{ fontSize: '0.3rem', fontWeight: 600, color: wh.c }}>{wh.s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* API Monitoring */}
            <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.4rem 0.55rem', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC' }}>
                <Activity size={10} color="#2563EB" />
                <span style={{ fontSize: '0.4rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Monitoring</span>
                <span style={{ fontSize: '0.32rem', color: '#94A3B8', fontWeight: 500, marginLeft: 'auto' }}>24h</span>
              </div>
              <div style={{ padding: '0.4rem 0.55rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.25rem', marginBottom: '0.35rem' }}>
                  <div style={{ background: '#F8FAFC', borderRadius: '6px', padding: '0.25rem 0.35rem', textAlign: 'center', border: '1px solid #F1F5F9' }}>
                    <div style={{ fontSize: '0.32rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>Avg Latency</div>
                    <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#22C55E' }}>38ms</div>
                  </div>
                  <div style={{ background: '#F8FAFC', borderRadius: '6px', padding: '0.25rem 0.35rem', textAlign: 'center', border: '1px solid #F1F5F9' }}>
                    <div style={{ fontSize: '0.32rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>Error Rate</div>
                    <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#22C55E' }}>0.12%</div>
                  </div>
                </div>
                <svg viewBox="0 0 120 22" style={{ width: '100%' }}>
                  <path d="M0 18 L10 15 L20 16 L30 10 L40 12 L50 8 L60 10 L70 5 L80 7 L90 3 L100 5 L110 2 L120 4" stroke="#2563EB" strokeWidth="1.2" fill="none" />
                  <path d="M0 20 L10 18 L20 19 L30 14 L40 16 L50 12 L60 14 L70 9 L80 11 L90 7 L100 9 L110 6 L120 8" stroke="#06B6D4" strokeWidth="0.8" fill="none" opacity="0.4" />
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.3rem', color: '#94A3B8', marginTop: '0.15rem' }}>
                  <span>p50: 24ms</span>
                  <span>p95: 62ms</span>
                  <span>p99: 145ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Integration / Auth keys row ── */}
          <div style={{ display: 'flex', gap: '0.5rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #F1F5F9', padding: '0.45rem 0.65rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.35rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.15rem' }}>API Keys</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span style={{ fontSize: '0.38rem', fontFamily: 'monospace', color: '#0F172A', fontWeight: 600 }}>sk_live_••••••••</span>
                <span style={{ fontSize: '0.3rem', color: '#64748B', background: '#E2E8F0', padding: '0.05rem 0.3rem', borderRadius: '3px' }}>Copy</span>
              </div>
            </div>
            <div style={{ width: '1px', background: '#E2E8F0' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '0.35rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: '0.15rem' }}>Rate Limit</div>
              <div style={{ fontSize: '0.5rem', fontWeight: 800, color: '#0F172A' }}>8,432<span style={{ fontSize: '0.35rem', fontWeight: 500, color: '#94A3B8' }}> / 10K min</span></div>
              <div style={{ height: '3px', borderRadius: '2px', background: '#E2E8F0', overflow: 'hidden', marginTop: '0.1rem' }}>
                <div style={{ width: '84%', height: '100%', borderRadius: '2px', background: '#2563EB' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CODE PLAYGROUND ──────────────────────────────────────────────
function CodeEditorPlayground() {
  const DEFAULT_CODE = `const platform = {\n  company: "Enterprise Software",\n  services: [\n    "Cloud Infrastructure",\n    "AI Solutions",\n    "API Development",\n    "Automation"\n  ],\n  status: "Running"\n};\n\nconsole.log("Initializing Enterprise Platform...");\nconsole.log(\`Company: \${platform.company}\`);\nconsole.log(\`Services: \${platform.services.join(", ")}\`);\nconsole.log(\`Platform Status: \${platform.status}\`);`;
  const [code, setCode] = useState(DEFAULT_CODE);
  const [output, setOutput] = useState<{ type: 'log' | 'error'; text: string; time: string }[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  function handleRun() {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    const logs: string[] = [];
    const originalLog = console.log;
    console.log = (...args: unknown[]) => {
      const text = args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' ');
      logs.push(text);
    };
    try {
      const fn = new Function(code);
      fn();
      console.log = originalLog;
      if (logs.length > 0) {
        setOutput(prev => [...prev, ...logs.map(text => ({ type: 'log' as const, text, time }))]);
      } else {
        setOutput(prev => [...prev, { type: 'log', text: '(no output)', time }]);
      }
    } catch (err: unknown) {
      console.log = originalLog;
      setOutput(prev => [...prev, { type: 'error', text: err instanceof Error ? err.toString() : String(err), time }]);
    }
  }

  function handleClear() {
    setOutput([]);
  }

  function handleReset() {
    setCode(DEFAULT_CODE);
    setOutput([]);
  }

  const btnStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
    padding: '0.4rem 0.9rem', fontSize: '0.7rem', fontWeight: 600,
    borderRadius: '8px', border: 'none', cursor: 'pointer',
    letterSpacing: '0.02em',
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Button Bar */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
        <button onClick={handleRun} style={{ ...btnStyle, background: '#22C55E', color: '#FFFFFF', boxShadow: '0 2px 8px rgba(34,197,94,0.2)' }}>
          <Play size={11} fill="#FFFFFF" /> Run
        </button>
        <button onClick={handleClear} style={{ ...btnStyle, background: '#E2E8F0', color: '#475569' }}>
          Clear Console
        </button>
        <button onClick={handleReset} style={{ ...btnStyle, background: '#E2E8F0', color: '#475569' }}>
          Reset Code
        </button>
      </div>

      {/* Monaco Editor */}
      <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
        <Editor
          height="280px"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(val) => { if (val !== undefined) setCode(val); }}
          options={{
            minimap: { enabled: false },
            fontSize: 13,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            padding: { top: 12 },
          }}
        />
      </div>

      {/* Output Terminal */}
      <div ref={terminalRef} style={{
        marginTop: '0.65rem',
        background: '#0B1120', borderRadius: '10px',
        padding: '0.65rem 0.85rem',
        maxHeight: '160px', minHeight: '60px',
        overflowY: 'auto',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        fontSize: '0.6rem', lineHeight: 1.6,
        border: '1px solid rgba(255,255,255,0.06)',
      }}>
        {output.length === 0 && (
          <span style={{ color: '#475569' }}>Click "Run" to execute the code</span>
        )}
        {output.map((entry, i) => (
          <div key={i} style={{ marginBottom: '0.3rem' }}>
            <div style={{ color: '#475569', fontSize: '0.5rem', marginBottom: '0.05rem' }}>[{entry.time}]</div>
            <div style={{ color: entry.type === 'error' ? '#EF4444' : '#22C55E', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              {entry.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────
function HeroSection() {
  const tagItems = [
    'Enterprise Software',
    'Artificial Intelligence',
    'Cloud Infrastructure',
    'Automation',
    'Digital Products',
  ];

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 'clamp(90px, 12vh, 130px)',
      background: '#F1F5F9',
    }}>
      {/* Accent shape */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-8%', right: '-3%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 60%)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '4rem', alignItems: 'center' }}>
        {/* Left: Content */}
        <div style={{ maxWidth: '540px' }}>
          <h1 style={{
            fontSize: 'clamp(2.6rem, 4.8vw, 4.8rem)', marginBottom: '1.25rem',
            fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.04em',
            color: '#0F172A',
          }}>
            Enterprise<br />
            Software,<br />
            <span style={{ color: '#94A3B8', fontWeight: 500 }}>Built Without<br />Compromise.</span>
          </h1>

          <p style={{
            fontSize: '1rem', lineHeight: 1.7, color: '#475569',
            maxWidth: '440px', marginBottom: '1.5rem',
          }}>
            We partner with ambitious businesses to design, engineer and evolve enterprise software, AI platforms and cloud solutions that become the foundation of long-term growth.
          </p>

          {/* Technology Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '2rem', alignItems: 'center' }}>
            {tagItems.map((item, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                {i > 0 && <span style={{ color: '#2563EB', fontSize: '0.5rem' }}>•</span>}
                <span style={{ fontSize: '0.65rem', fontWeight: 500, color: '#64748B' }}>{item}</span>
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', marginBottom: '2.5rem' }}>
            <a href="/contact-us" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.9rem 2rem', background: '#0F172A', color: '#FFFFFF',
              borderRadius: '12px', fontWeight: 600, fontSize: '0.9rem',
              textDecoration: 'none', border: 'none', cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}>
              Start a Project <ArrowRight size={15} />
            </a>
            <a href="/work" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontWeight: 600, fontSize: '0.85rem', color: '#0F172A',
              textDecoration: 'none', borderBottom: '1.5px solid #CBD5E1',
              paddingBottom: '0.15rem',
              transition: 'border-color 0.2s ease',
            }}>
              View selected work <ArrowUpRight size={13} />
            </a>
          </div>

        </div>

        {/* Right: Code Editor */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <CodeEditorPlayground />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > .container > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── ENTERPRISE DASHBOARD ──────────────────────────────────────────
const tabs = [
  { id: 'enterprise', label: 'Enterprise Software', icon: <Server size={16} /> },
  { id: 'ai', label: 'Artificial Intelligence', icon: <Brain size={16} /> },
  { id: 'cloud', label: 'Cloud Infrastructure', icon: <Cloud size={16} /> },
  { id: 'digital', label: 'Digital Products', icon: <LayoutGrid size={16} /> },
  { id: 'api', label: 'API & Automation', icon: <Network size={16} /> },
];

const dashboardData = {
  enterprise: {
    stats: [
      { label: 'Revenue', value: '$2.4M' },
      { label: 'Projects', value: '36' },
      { label: 'Orders', value: '1,247' },
      { label: 'Clients', value: '48' },
    ],
    activities: [
      { text: 'ERP deployment v4.2.1 completed', time: '2 min ago', type: 'done' },
      { text: 'Database optimization finished', time: '15 min ago', type: 'done' },
      { text: 'New enterprise client onboarded', time: '1 hr ago', type: 'info' },
      { text: 'Security scan completed — 0 threats', time: '2 hrs ago', type: 'done' },
      { text: 'Backup completed for all services', time: '3 hrs ago', type: 'done' },
    ],
    notifications: [
      { text: 'API endpoint updated', type: 'info' },
      { text: 'New release v4.2.1', type: 'info' },
      { text: 'SSL certificate renewed', type: 'info' },
      { text: 'Webhook delivery failed', type: 'warning' },
      { text: 'Server restarted', type: 'info' },
    ],
    status: [
      { label: 'API', ok: true }, { label: 'Database', ok: true },
      { label: 'Cache', ok: true }, { label: 'Queue', ok: false },
    ],
  },
  ai: {
    stats: [
      { label: 'Models', value: '12' },
      { label: 'Training Jobs', value: '156' },
      { label: 'Predictions', value: '84.3K' },
      { label: 'Automation', value: '8 flows' },
    ],
    activities: [
      { text: 'Model v3.2 training completed', time: '5 min ago', type: 'done' },
      { text: 'Inference pipeline deployed', time: '22 min ago', type: 'done' },
      { text: 'Dataset processed — 2.4M records', time: '1 hr ago', type: 'info' },
      { text: 'GPU cluster utilization at 94%', time: '2 hrs ago', type: 'warning' },
      { text: 'Model registry updated', time: '3 hrs ago', type: 'done' },
    ],
    notifications: [
      { text: 'Training job #482 complete', type: 'info' },
      { text: 'Model deployed to staging', type: 'info' },
      { text: 'Data pipeline error', type: 'warning' },
      { text: 'GPU cluster scaled', type: 'info' },
    ],
    status: [
      { label: 'Training', ok: true }, { label: 'Inference', ok: true },
      { label: 'Pipeline', ok: true }, { label: 'GPU', ok: false },
    ],
  },
  cloud: {
    stats: [
      { label: 'Servers', value: '47' },
      { label: 'Regions', value: '6' },
      { label: 'Storage', value: '2.4 PB' },
      { label: 'Monitoring', value: '12 alerts' },
    ],
    activities: [
      { text: 'Auto-scaled 8 instances (us-east)', time: '3 min ago', type: 'done' },
      { text: 'CDN cache refreshed globally', time: '12 min ago', type: 'done' },
      { text: 'New region deployed — ap-south-2', time: '45 min ago', type: 'info' },
      { text: 'Storage volume capacity at 82%', time: '2 hrs ago', type: 'warning' },
      { text: 'Load balancer configuration updated', time: '4 hrs ago', type: 'done' },
    ],
    notifications: [
      { text: 'Auto-scaling complete', type: 'info' },
      { text: 'Backup success — all regions', type: 'info' },
      { text: 'New region healthy', type: 'info' },
      { text: 'Storage near capacity', type: 'warning' },
    ],
    status: [
      { label: 'Compute', ok: true }, { label: 'Storage', ok: true },
      { label: 'Network', ok: true }, { label: 'CDN', ok: true },
    ],
  },
  digital: {
    stats: [
      { label: 'Users', value: '12.4K' },
      { label: 'Analytics', value: '4.8★' },
      { label: 'Growth', value: '+18.3%' },
      { label: 'Releases', value: '142' },
    ],
    activities: [
      { text: 'v5.2 released to production', time: '8 min ago', type: 'done' },
      { text: 'New onboarding flow deployed', time: '30 min ago', type: 'done' },
      { text: 'A/B test variant B winning', time: '1 hr ago', type: 'info' },
      { text: 'Crash rate dropped to 0.3%', time: '3 hrs ago', type: 'done' },
      { text: 'App store listing updated', time: '6 hrs ago', type: 'done' },
    ],
    notifications: [
      { text: 'Release v5.2 published', type: 'info' },
      { text: 'User feedback analyzed', type: 'info' },
      { text: 'A/B test significant', type: 'info' },
      { text: 'Review rating dropped', type: 'warning' },
    ],
    status: [
      { label: 'iOS', ok: true }, { label: 'Android', ok: true },
      { label: 'Web', ok: true }, { label: 'API', ok: true },
    ],
  },
  api: {
    stats: [
      { label: 'Requests', value: '2.1M' },
      { label: 'Response Time', value: '42 ms' },
      { label: 'Webhooks', value: '23' },
      { label: 'Automation Logs', value: '1,892' },
    ],
    activities: [
      { text: 'Rate limit adjusted to 10K/min', time: '1 min ago', type: 'done' },
      { text: 'New GraphQL endpoint deployed', time: '20 min ago', type: 'done' },
      { text: 'Webhook verified — stripe.payment', time: '1 hr ago', type: 'info' },
      { text: 'Response time spike detected', time: '2 hrs ago', type: 'warning' },
      { text: 'gRPC connection pool optimized', time: '4 hrs ago', type: 'done' },
    ],
    notifications: [
      { text: 'Endpoint /v3/orders live', type: 'info' },
      { text: 'Webhook signature verified', type: 'info' },
      { text: 'Rate limit increased', type: 'info' },
      { text: 'Latency spike resolved', type: 'warning' },
    ],
    status: [
      { label: 'REST', ok: true }, { label: 'GraphQL', ok: true },
      { label: 'gRPC', ok: true }, { label: 'Webhooks', ok: false },
    ],
  },
};

function EnterpriseDashboard({ activeTab, onTabChange }: { activeTab: string; onTabChange: (id: string) => void }) {
  const data = dashboardData[activeTab as keyof typeof dashboardData];
  const activeTabMeta = tabs.find(t => t.id === activeTab)!;

  const badgeBg = (type: string) =>
    type === 'warning' ? 'rgba(245,158,11,0.1)' : 'rgba(37,99,235,0.08)';
  const badgeBorder = (type: string) =>
    type === 'warning' ? '1px solid rgba(245,158,11,0.2)' : '1px solid rgba(37,99,235,0.15)';
  const dotColor = (type: string) =>
    type === 'warning' ? '#F59E0B' : type === 'done' ? '#94A3B8' : '#2563EB';

  return (
    <div className="row g-0" style={{
      background: '#1F2937', borderRadius: '14px', overflow: 'hidden',
      border: '1px solid #374151', fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Top Navigation */}
      <div className="col-12" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.25rem', height: '46px', background: '#273449',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="d-flex align-items-center gap-2">
          <div style={{ width: '20px', height: '20px', borderRadius: '5px', background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.5rem', fontWeight: 800, color: '#FFF' }}>A</span>
          </div>
          <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#F1F5F9' }}>Acriotech Platform</span>
          <span style={{ fontSize: '0.42rem', fontWeight: 600, color: '#94A3B8', background: 'rgba(148,163,184,0.1)', padding: '0.08rem 0.45rem', borderRadius: '4px', border: '1px solid rgba(148,163,184,0.2)' }}>DASHBOARD</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Bell size={13} color="#64748B" style={{ cursor: 'pointer' }} />
          <div style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.38rem', fontWeight: 700, color: '#FFF' }}>JD</span>
          </div>
        </div>
      </div>

      <div className="col-12 d-flex" style={{ minHeight: '300px' }}>
        {/* Sidebar */}
        <div style={{ width: '190px', background: '#273449', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.06)', padding: '0.4rem 0' }}>
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => onTabChange(tab.id)} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 1rem', border: 'none', cursor: 'pointer',
                background: isActive ? 'rgba(37,99,235,0.12)' : 'transparent',
                color: isActive ? '#E2E8F0' : '#64748B',
                fontWeight: isActive ? 600 : 400, fontSize: '0.7rem', textAlign: 'left',
                borderLeft: isActive ? '2px solid #2563EB' : '2px solid transparent',
                transition: 'all 0.12s ease',
              }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ opacity: isActive ? 1 : 0.45, color: isActive ? '#2563EB' : '#64748B' }}>{tab.icon}</span>
                <span style={{ fontSize: '0.65rem' }}>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-grow-1 p-3" style={{ background: '#1F2937' }}>
          <div className="d-flex align-items-center gap-1 mb-3" style={{ fontSize: '0.5rem', color: '#64748B', fontWeight: 500 }}>
            <span>Dashboard</span>
            <span>/</span>
            <span style={{ color: '#94A3B8' }}>{activeTabMeta.label}</span>
          </div>

          {/* Stats */}
          <div className="row g-2 mb-3">
            {data.stats.map((stat, i) => (
              <div key={i} className="col-6 col-md-3">
                <div style={{ background: '#273449', borderRadius: '8px', padding: '0.85rem 1rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-uppercase" style={{ fontSize: '0.43rem', fontWeight: 700, color: '#64748B', letterSpacing: '0.04em', marginBottom: '0.15rem' }}>{stat.label}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Activity + Notifications */}
          <div className="row g-3">
            <div className="col-12 col-md-7">
              <div style={{ background: '#273449', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div className="d-flex align-items-center justify-content-between px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="d-flex align-items-center gap-2">
                    <Activity size={10} color="#64748B" />
                    <span style={{ fontSize: '0.48rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Recent Activity</span>
                  </span>
                  <span style={{ fontSize: '0.42rem', color: '#2563EB', fontWeight: 600, cursor: 'pointer' }}>View all</span>
                </div>
                <div className="px-3 py-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {data.activities.map((a, i) => (
                    <div key={i} className="d-flex align-items-start gap-2">
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', marginTop: '0.3rem', flexShrink: 0, background: dotColor(a.type) }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.5rem', fontWeight: 500, color: '#CBD5E1', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.text}</div>
                        <div style={{ fontSize: '0.4rem', color: '#64748B' }}>{a.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 d-flex flex-column gap-3">
              {/* Notifications */}
              <div style={{ background: '#273449', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                <div className="d-flex align-items-center justify-content-between px-3 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="d-flex align-items-center gap-2">
                    <Bell size={10} color="#64748B" />
                    <span style={{ fontSize: '0.48rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Notifications</span>
                  </span>
                  <span style={{ fontSize: '0.42rem', color: '#64748B', fontWeight: 500 }}>
                    {data.notifications.filter(n => n.type === 'warning').length} unread
                  </span>
                </div>
                <div className="px-3 py-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  {data.notifications.map((n, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', padding: '0.2rem 0.4rem', borderRadius: '5px', background: badgeBg(n.type) }}>
                      <CircleCheck size={9} color={n.type === 'warning' ? '#F59E0B' : '#2563EB'} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.46rem', fontWeight: 500, color: '#CBD5E1' }}>{n.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div style={{ background: '#273449', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)', padding: '0.55rem 0.85rem' }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <ShieldAlert size={10} color="#64748B" />
                  <span style={{ fontSize: '0.48rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.03em' }}>System Status</span>
                </div>
                <div className="d-flex flex-wrap" style={{ gap: '0.3rem' }}>
                  {data.status.map((s, i) => (
                    <div key={i} className="d-flex align-items-center gap-1" style={{
                      padding: '0.15rem 0.5rem', borderRadius: '100px',
                      background: s.ok ? 'rgba(37,99,235,0.08)' : 'rgba(245,158,11,0.08)',
                      border: `1px solid ${s.ok ? 'rgba(37,99,235,0.15)' : 'rgba(245,158,11,0.15)'}`,
                    }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: s.ok ? '#2563EB' : '#F59E0B', display: 'inline-block' }} />
                      <span style={{ fontSize: '0.43rem', fontWeight: 600, color: s.ok ? '#60A5FA' : '#F59E0B' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.38rem', color: '#64748B', marginTop: '0.3rem' }}>
                  Uptime 99.99% · Last checked 1 min ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CAPABILITY CARDS DATA ─────────────────────────────────────────
const capabilities = [
  {
    id: 'enterprise', title: 'Enterprise Software',
    desc: 'Build scalable ERP and enterprise applications.',
    icon: Server, link: '/services',
  },
  {
    id: 'ai', title: 'Artificial Intelligence',
    desc: 'Intelligent automation powered by AI.',
    icon: Brain, link: '/services',
  },
  {
    id: 'cloud', title: 'Cloud Infrastructure',
    desc: 'Cloud-native architecture for modern businesses.',
    icon: Cloud, link: '/services',
  },
  {
    id: 'digital', title: 'Digital Products',
    desc: 'Premium web and mobile experiences.',
    icon: MonitorSmartphone, link: '/services',
  },
  {
    id: 'api', title: 'API & Automation',
    desc: 'Reliable APIs and workflow automation.',
    icon: Network, link: '/services',
  },
];

// ─── Main Home Page ────────────────────────────────────────────────
export default function Home() {
  const [activeCapability, setActiveCapability] = useState('enterprise');

  return (
    <main>
      <NavBar />

      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── STATISTICS ─── */}
      <section style={{ padding: '5rem 0', background: '#0F172A', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, background: 'radial-gradient(circle at 30% 50%, rgba(37,99,235,0.04) 0%, transparent 60%)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stats-four-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[
              {
                num: '80+',
                title: 'Production Systems',
                desc: 'Mission-critical applications built and managed.',
                meta: 'Last Deploy • Today',
              },
              {
                num: '15M+',
                title: 'Daily API Requests',
                desc: 'High-throughput APIs powering enterprise solutions.',
                meta: 'Avg Response • 148 ms',
              },
              {
                num: '99.99%',
                title: 'Uptime Guarantee',
                desc: 'Reliable cloud infrastructure with maximum availability.',
                meta: 'Status • Healthy',
              },
              {
                num: '40+',
                title: 'Active Partnerships',
                desc: 'Trusted by growing businesses and enterprise teams.',
                meta: 'Support • 24×7',
              },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: '0 2.5rem',
                borderLeft: i === 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                borderRight: '1px solid rgba(255,255,255,0.12)',
                position: 'relative',
              }}>
                {/* Number */}
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
                  {stat.num}
                </div>
                {/* Title */}
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                  {stat.title}
                </div>
                {/* Description */}
                <div style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.5, marginBottom: '0.5rem', fontWeight: 400 }}>
                  {stat.desc}
                </div>
                {/* Meta */}
                <div style={{ fontSize: '0.55rem', color: '#475569', fontWeight: 500 }}>
                  {stat.meta}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 860px) {
            .stats-four-col {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 0 !important;
            }
            .stats-four-col > div {
              border-left: 1px solid rgba(255,255,255,0.12) !important;
              border-bottom: 1px solid rgba(255,255,255,0.12) !important;
              padding: 2rem 1.5rem !important;
            }
            .stats-four-col > div:nth-child(odd) {
              border-right: 1px solid rgba(255,255,255,0.12) !important;
            }
            .stats-four-col > div:nth-child(even) {
              border-right: 1px solid rgba(255,255,255,0.12) !important;
            }
            .stats-four-col > div:nth-last-child(-n+2) {
              border-bottom: none !important;
            }
          }
          @media (max-width: 540px) {
            .stats-four-col {
              grid-template-columns: 1fr !important;
              gap: 0 !important;
            }
            .stats-four-col > div {
              border-left: 1px solid rgba(255,255,255,0.12) !important;
              border-right: 1px solid rgba(255,255,255,0.12) !important;
              border-bottom: 1px solid rgba(255,255,255,0.12) !important;
              padding: 1.5rem 1rem !important;
            }
            .stats-four-col > div:last-child {
              border-bottom: none !important;
            }
          }
        `}</style>
      </section>

      {/* ─── SERVICES (Core Capabilities) ─── */}
      <section id="services" style={{ padding: 'var(--spacing-section) 0', background: '#EEF2F7', position: 'relative' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: 'var(--font-h2)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#111827' }}>Core Capabilities</h2>
                <p style={{ fontSize: '1rem', maxWidth: '480px', marginTop: '0.75rem', color: '#64748B' }}>We solve complex engineering problems through specialized technical domains.</p>
              </div>
              <a href="/services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.4rem', borderRadius: '12px', fontWeight: 600,
                fontSize: '0.85rem', color: '#FFFFFF', textDecoration: 'none',
                background: '#2563EB', whiteSpace: 'nowrap',
              }}>
                Explore Solutions <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Capability Cards (Navigation Tabs) */}
          <div className="row g-3 mb-4 justify-content-center">
            {capabilities.map(cap => {
              const Icon = cap.icon;
              const isActive = activeCapability === cap.id;
              return (
                <div key={cap.id} className="col-12 col-sm-6 col-md-4 col-lg" style={{ display: 'flex' }}>
                  <button
                    onClick={() => setActiveCapability(cap.id)}
                    style={{
                      width: '100%', cursor: 'pointer', textAlign: 'left',
                      background: isActive ? 'rgba(37,99,235,0.06)' : '#FFFFFF',
                      borderRadius: '14px', padding: '1.25rem 1.25rem',
                      border: '1.5px solid #D7DEE8',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                      display: 'flex', flexDirection: 'column', transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'rgba(37,99,235,0.06)'; const icon = e.currentTarget.querySelector('.cap-icon'); if (icon) { (icon as HTMLElement).style.background = 'rgba(37,99,235,0.1)'; (icon as HTMLElement).style.color = '#2563EB'; } const title = e.currentTarget.querySelector('.cap-title'); if (title) { (title as HTMLElement).style.color = '#0F172A'; } } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = '#FFFFFF'; const icon = e.currentTarget.querySelector('.cap-icon'); if (icon) { (icon as HTMLElement).style.background = '#F1F5F9'; (icon as HTMLElement).style.color = '#64748B'; } const title = e.currentTarget.querySelector('.cap-title'); if (title) { (title as HTMLElement).style.color = '#111827'; } } }}
                  >
                    <div className="cap-icon" style={{
                      width: '36px', height: '36px', borderRadius: '9px',
                      background: isActive ? 'rgba(37,99,235,0.1)' : '#F1F5F9',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: isActive ? '#2563EB' : '#64748B', marginBottom: '0.75rem', flexShrink: 0,
                      transition: 'all 0.15s ease',
                    }}>
                      <Icon size={17} />
                    </div>
                    <h3 className="cap-title" style={{ fontSize: '0.82rem', fontWeight: 700, color: isActive ? '#0F172A' : '#111827', marginBottom: '0.25rem', lineHeight: 1.3, transition: 'color 0.15s ease' }}>{cap.title}</h3>
                    <p style={{ fontSize: '0.65rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>{cap.desc}</p>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Interactive Dashboard */}
          <EnterpriseDashboard activeTab={activeCapability} onTabChange={setActiveCapability} />
        </div>
      </section>

      {/* ─── PORTFOLIO (Architecture Excellence) ─── */}
      <section id="portfolio" style={{ padding: 'calc(var(--spacing-section) * 1.2) 0', background: '#F8FAFC', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', letterSpacing: '-0.03em', color: '#111827', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Architecture Excellence</h2>
              <div style={{ width: '44px', height: '3px', borderRadius: '2px', background: '#2563EB', marginTop: '0.75rem' }} />
            </div>
            <a href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600, color: '#111827', fontSize: '0.9rem', textDecoration: 'none' }}>
              Explore Case Studies <ArrowRight size={14} />
            </a>
          </div>

          <div className="row g-4 g-lg-5">
            {[
              {
                category: 'Cloud Infrastructure',
                title: 'Distributed Cloud Architecture',
                desc: 'Designed and deployed a multi-region Kubernetes cluster handling 15M daily requests with sub-5ms latency across global edge locations.',
                tags: ['Kubernetes', 'Terraform', 'AWS'],
                meta: [
                  { label: 'Industry', value: 'Enterprise' },
                  { label: 'Duration', value: '8 Months' },
                  { label: 'Team', value: '12 Engineers' },
                ],
                image: 'https://acriotech.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1558494949-ef010cbdcc31%3Fauto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D80&w=1080&q=75',
              },
              {
                category: 'Cybersecurity',
                title: 'Zero-Trust Network Fabric',
                desc: 'Architected a zero-trust security mesh with real-time threat detection and automated policy enforcement across 10,000+ distributed nodes.',
                tags: ['Rust', 'WebAssembly', 'eBPF'],
                meta: [
                  { label: 'Industry', value: 'Fintech' },
                  { label: 'Duration', value: '6 Months' },
                  { label: 'Team', value: '8 Engineers' },
                ],
                image: 'https://acriotech.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1518770660439-4636190af475%3Fauto%3Dformat%26fit%3Dcrop%26w%3D1200%26q%3D80&w=1080&q=75',
              },
            ].map((project, idx) => (
              <div key={idx} className={`col-12 col-md-6 d-flex ${idx === 0 ? 'col-lg-7' : 'col-lg-5'}`}>
                <div className="h-100 d-flex flex-column" style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1.5px solid #E5E7EB',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                }}>
                  {/* Image */}
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 100%)',
                      pointerEvents: 'none',
                    }} />
                    <span style={{
                      position: 'absolute', top: '14px', left: '14px',
                      fontSize: '0.6rem', fontWeight: 600, color: '#111827',
                      padding: '0.2rem 0.65rem', borderRadius: '100px',
                      background: '#FFFFFF',
                    }}>
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="d-flex flex-column flex-grow-1" style={{ padding: idx === 0 ? '1.75rem 2rem 2rem' : '1.5rem 1.75rem 1.75rem' }}>
                    {/* Tags */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      {project.tags.map((tag, ti) => (
                        <span key={ti} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          {ti > 0 && <span style={{ color: '#CBD5E1', fontSize: '0.3rem' }}>•</span>}
                          <span style={{ fontSize: '0.7rem', fontWeight: 500, color: '#64748B' }}>{tag}</span>
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: idx === 0 ? '1.45rem' : '1.25rem',
                      fontWeight: 700, color: '#111827',
                      margin: '0 0 0.5rem 0', letterSpacing: '-0.02em', lineHeight: 1.2,
                    }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.85rem', color: '#64748B', lineHeight: 1.7, margin: '0 0 1.25rem 0',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    }}>
                      {project.desc}
                    </p>

                    {/* Bottom section — pushed to card bottom via mt-auto */}
                    <div className="mt-auto">
                      {/* Divider */}
                      <div style={{ height: '1px', background: '#F1F5F9', marginBottom: '1rem' }} />

                      {/* Metadata */}
                      <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '1.25rem' }}>
                        {project.meta.map((m, mi) => (
                          <div key={mi}>
                            <div style={{ fontSize: '0.5rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.1rem' }}>{m.label}</div>
                            <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#111827' }}>{m.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* View Case Study */}
                      <a href="/work" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                        fontSize: '0.75rem', fontWeight: 600, color: '#2563EB', textDecoration: 'none',
                      }}>
                        View Case Study <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGINEERING WORKFLOW ─── */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC', position: 'relative' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#111827', fontWeight: 800, margin: '0 0 0.75rem 0', lineHeight: 1.1 }}>Engineering<br />Workflow</h2>
            <p style={{ maxWidth: '480px', fontSize: '1rem', color: '#64748B', lineHeight: 1.7, margin: 0 }}>
              A disciplined, systematic approach to building complex software systems that scale effortlessly.
            </p>
          </div>

          <style>{`
            .workflow-swiper .swiper-slide { height: auto; display: flex; }
            .workflow-swiper .swiper-pagination-bullet {
              width: 8px; height: 8px; border-radius: 50%;
              background: #D1D5DB; opacity: 1;
              transition: all 0.2s ease;
            }
            .workflow-swiper .swiper-pagination-bullet-active {
              background: #2563EB; width: 24px; border-radius: 4px;
            }
            .workflow-swiper .swiper-pagination {
              position: static; margin-top: 2rem;
            }
          `}</style>

          <Swiper
            className="workflow-swiper"
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              992: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {[
              { id: "01", title: 'Discovery & Audit', desc: 'Deep technical analysis of existing systems, identifying bottlenecks and architectural requirements.', icon: Search },
              { id: "02", title: 'System Architecture', desc: 'Designing resilient, scalable foundations mapping out data models, microservices, and infrastructure.', icon: LineChart },
              { id: "03", title: 'UI/UX Engineering', desc: 'Crafting intuitive interfaces backed by robust design systems and precise component architecture.', icon: MonitorSmartphone },
              { id: "04", title: 'Development Sprints', desc: 'Agile execution with rigorous peer reviews, automated testing, and continuous integration.', icon: Cpu },
              { id: "05", title: 'Deployment & QA', desc: 'Zero-downtime deployments with comprehensive load testing, security audits, and compliance checks.', icon: Cloud },
              { id: "06", title: 'Scale & Support', desc: 'Proactive monitoring, performance optimization, and dedicated enterprise SLA support.', icon: Activity },
            ].map((step) => {
              const Icon = step.icon;
              return (
                <SwiperSlide key={step.id}>
                  <div style={{
                    background: '#FFFFFF', borderRadius: '22px', border: '1px solid #E5E7EB',
                    padding: '2rem', display: 'flex', flexDirection: 'column', width: '100%',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div style={{
                        width: '44px', height: '44px', borderRadius: '12px',
                        background: '#F3F4F6', border: '1px solid #D1D5DB',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, fontFamily: 'monospace', color: '#374151' }}>{step.id}</span>
                      </div>
                      <div style={{ width: '3px', height: '24px', borderRadius: '2px', background: '#E5E7EB' }} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.7, margin: '0 0 auto', flex: 1 }}>{step.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
                      <Icon size={16} color="#2563EB" />
                      <span style={{ fontSize: '0.65rem', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Step {step.id}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC', position: 'relative' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-md-5 col-lg-4">
              <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#111827', fontWeight: 800, margin: '0 0 0.75rem 0', lineHeight: 1.1 }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.7, margin: '0 0 2rem 0' }}>
                Find quick answers to common questions about our services, development process, pricing, and ongoing support.
              </p>

              {/* CTA Card */}
              <div style={{
                background: '#FFFFFF', borderRadius: '20px', border: '1.5px solid #E5E7EB',
                padding: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex', flexDirection: 'column', gap: '1.25rem',
              }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#111827', margin: 0, lineHeight: 1.3 }}>Have a Project in Mind?</h4>
                <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                  Let's discuss your business goals and build a secure, scalable, and high-performance software solution tailored to your needs.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {['Free Technical Consultation', 'Custom Software Strategy', 'Dedicated Engineering Team'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', border: '1.5px solid #2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ color: '#2563EB', fontSize: '0.5rem', fontWeight: 700, lineHeight: 0 }}>✓</span>
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#374151' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="/contact-us" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                  padding: '0.75rem 1.5rem', borderRadius: '12px',
                  background: '#0F172A', color: '#FFFFFF',
                  fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(15,23,42,0.15)',
                  transition: 'background 0.2s ease',
                }} onMouseEnter={e => (e.currentTarget.style.background = '#1E293B')} onMouseLeave={e => (e.currentTarget.style.background = '#0F172A')}>
                  Let's Talk <ArrowRight size={13} />
                </a>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8">
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section style={{
        padding: 'calc(var(--spacing-section) * 1.25) 0',
        background: '#0F172A', textAlign: 'center', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: 'clamp(2.1rem, 4vw, 3.8rem)', fontWeight: 800,
            lineHeight: 1.15, letterSpacing: '-0.03em', margin: '0 0 1rem 0',
          }}>
            <span style={{ color: '#FFFFFF' }}>Let's Build Software</span><br />
            <span style={{ color: '#CBD5E1' }}>That Stands The Test Of Time.</span>
          </h2>

          <p style={{
            fontSize: '0.9rem', color: '#64748B', maxWidth: '480px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Building secure, scalable, and high-performance software for startups, enterprises, and growing businesses.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '2.75rem' }}>
            <a href="/work" style={{
              padding: '1rem 2.5rem', fontSize: '0.95rem', fontWeight: 600,
              color: '#0F172A', background: '#FFFFFF',
              borderRadius: '14px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
              transition: 'background 0.2s ease, color 0.2s ease',
            }} onMouseEnter={e => { e.currentTarget.style.background = '#2563EB'; e.currentTarget.style.color = '#FFFFFF'; }} onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#0F172A'; }}>
              Explore Our Work <ArrowRight size={14} />
            </a>
            <a href="/contact-us" style={{
              padding: '1rem 2.5rem', fontSize: '0.95rem', fontWeight: 600,
              color: '#FFFFFF', background: 'transparent',
              border: '1.5px solid rgba(255,255,255,0.3)',
              borderRadius: '14px', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              transition: 'border-color 0.2s ease, background 0.2s ease',
            }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.background = 'rgba(37,99,235,0.1)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'transparent'; }}>
              Contact Us
            </a>
          </div>

          <div style={{ width: '40px', height: '2px', borderRadius: '1px', background: 'rgba(255,255,255,0.08)', margin: '3rem auto 1rem' }} />

          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500, margin: 0, letterSpacing: '0.02em' }}>
            Trusted by startups, enterprises, and growing businesses.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
