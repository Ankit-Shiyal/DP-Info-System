"use client";

import Image from "next/image";
import {
  ArrowRight, Code2, Database, Shield, Zap, Layers, Network, Server,
  Smartphone, Terminal, CircleCheck, Play, ArrowUpRight, Cloud, Activity,
  Lock, Users, MonitorSmartphone, ChevronRight, BarChart3, Globe, Clock,
  CheckCircle2, GitBranch, Cpu, Workflow, LineChart, Box, Search,
  ChevronDown, Star, Bot, Container, Rocket, Award, MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
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

// ─── Premium Accordion ─────────────────────────────────────────────
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
              background: '#FFFFFF',
              borderRadius: '22px',
              border: `1px solid ${isOpen ? 'rgba(37,99,235,0.2)' : '#E2E8F0'}`,
              overflow: 'hidden',
              boxShadow: isOpen ? '0 8px 30px rgba(37,99,235,0.06)' : '0 2px 8px rgba(0,0,0,0.02)',
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
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0F172A', margin: 0, lineHeight: 1.4 }}>
                {faq.q}
              </h3>
              <div
                style={{
                  flexShrink: 0, color: isOpen ? '#2563EB' : '#94A3B8',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <ChevronDown size={20} />
              </div>
            </button>
            {isOpen && (
              <div style={{ padding: '0 1.5rem 1.25rem 1.5rem' }}>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Testimonial Data ──────────────────────────────────────────────
const testimonials = [
  {
    quote: "Acriotech transformed our legacy infrastructure into a modern, cloud-native platform. The engineering team's depth and professionalism are outstanding.",
    author: "Vikram Mehta",
    role: "CTO, Fintech Enterprise",
    initials: "VM",
  },
  {
    quote: "Their ability to scale our platform from thousands to millions of daily requests without any downtime was remarkable. A true engineering partner.",
    author: "Sarah Chen",
    role: "VP Engineering, HealthTech",
    initials: "SC",
  },
  {
    quote: "The AI pipeline they designed for us processes petabytes of data with incredible speed. Acriotech doesn't just build software — they build the future.",
    author: "Raj Patel",
    role: "Director of Technology, Retail Corp",
    initials: "RP",
  },
  {
    quote: "From discovery to deployment, their methodology is flawless. Our uptime has been 99.99% since migrating to their infrastructure.",
    author: "Emily Torres",
    role: "Head of Platform, SaaS Company",
    initials: "ET",
  },
];

// ─── Testimonial Carousel ──────────────────────────────────────────
function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              cursor: 'pointer',
              width: '52px', height: '52px',
              borderRadius: '50%',
              background: active === i
                ? 'linear-gradient(135deg, #2563EB, #06B6D4)'
                : '#F1F5F9',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: active === i ? '2px solid #FFFFFF' : '2px solid transparent',
              outline: active === i ? '3px solid rgba(37,99,235,0.2)' : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: active === i ? '#FFFFFF' : '#64748B' }}>
              {t.initials}
            </span>
          </div>
        ))}
      </div>
      <div style={{ minHeight: '180px', position: 'relative' }}>
        <div
          style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(226,232,240,0.6)',
            padding: '2.5rem',
            textAlign: 'center',
            maxWidth: '680px',
            margin: '0 auto',
            boxShadow: '0 20px 60px rgba(37,99,235,0.04)',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ margin: '0 auto 1.25rem', opacity: 0.15 }}>
            <path d="M10 16H4L8 8H14L10 16ZM22 16H16L20 8H26L22 16Z" fill="#0F172A" />
          </svg>
          <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
            &ldquo;{testimonials[active].quote}&rdquo;
          </p>
          <div>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A' }}>{testimonials[active].author}</span>
            <span style={{ fontSize: '0.8rem', color: '#94A3B8', marginLeft: '0.75rem' }}>{testimonials[active].role}</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '1.5rem' }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? '24px' : '6px', height: '6px',
              borderRadius: '3px',
              background: i === active ? '#2563EB' : '#CBD5E1',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
            }}
          />
        ))}
      </div>
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

// ─── Why Choose Us Cards ───────────────────────────────────────────
const whyChooseUs = [
  { icon: <Award size={24} />, title: 'Enterprise-Grade Engineering', desc: 'Bespoke, mission-critical applications engineered for uncompromising stability, security, and infinite scalability within complex organizational structures.', gradient: 'linear-gradient(135deg, #2563EB, #06B6D4)' },
  { icon: <Bot size={24} />, title: 'AI-Native Approach', desc: 'Intelligent neural systems designed to automate workflows and extract cognitive value from enterprise data.', gradient: 'linear-gradient(135deg, #7C3AED, #2563EB)' },
  { icon: <Container size={24} />, title: 'Cloud-First Infrastructure', desc: 'Resilient, highly-available cloud environments engineered for zero downtime and global scale.', gradient: 'linear-gradient(135deg, #06B6D4, #2563EB)' },
  { icon: <Rocket size={24} />, title: 'End-to-End Delivery', desc: 'From discovery and architecture to deployment and ongoing support — we own the entire software lifecycle with precision.', gradient: 'linear-gradient(135deg, #2563EB, #7C3AED)' },
];

// ─── Service Content (preserved from original) ─────────────────────
// ─── Enterprise-Grade Illustration Components ──────────────────────
/* ── Enterprise Software: Full ERP/Admin Dashboard ── */
function EnterpriseDashboard() {
  return (
    <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 8px 32px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
        {/* Top Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1rem', borderBottom: '1px solid #F1F5F9', background: '#FFFFFF' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.55rem', fontWeight: 800, color: '#FFFFFF' }}>A</span>
            </div>
            <span style={{ fontSize: '0.6rem', fontWeight: 700, color: '#0F172A' }}>Acriotech ERP</span>
            <span style={{ fontSize: '0.4rem', color: '#22C55E', fontWeight: 600, background: 'rgba(34,197,94,0.08)', padding: '0.1rem 0.4rem', borderRadius: '4px', border: '1px solid rgba(34,197,94,0.12)' }}>PROD</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', gap: '0.15rem' }}>
              {['D', 'S', 'A'].map((l, i) => (
                <div key={i} style={{ width: '16px', height: '16px', borderRadius: '4px', background: i === 1 ? '#2563EB' : '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.35rem', fontWeight: 700, color: i === 1 ? '#FFFFFF' : '#94A3B8' }}>{l}</span>
                </div>
              ))}
            </div>
            <div style={{ width: '18px', height: '18px', borderRadius: '5px', background: 'linear-gradient(135deg, #2563EB, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.4rem', fontWeight: 700, color: '#FFFFFF' }}>JD</span>
            </div>
          </div>
        </div>

        <div style={{ padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {/* KPI Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.4rem' }}>
            {[
              { label: 'Total Revenue', value: '$2.4M', change: '+12.5%', color: '#0F172A', bg: '#F8FAFC' },
              { label: 'Active Users', value: '8,432', change: '+342 today', color: '#2563EB', bg: 'rgba(37,99,235,0.04)' },
              { label: 'Orders', value: '1,247', change: '+18.2%', color: '#22C55E', bg: 'rgba(34,197,94,0.04)' },
              { label: 'Growth', value: '23.1%', change: '+4.2pp', color: '#7C3AED', bg: 'rgba(124,58,237,0.04)' },
            ].map((m, i) => (
              <div key={i} style={{ background: m.bg, borderRadius: '8px', padding: '0.45rem 0.5rem', border: '1px solid rgba(0,0,0,0.03)' }}>
                <div style={{ fontSize: '0.42rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.1rem' }}>{m.label}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: m.color, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{m.value}</div>
                <div style={{ fontSize: '0.38rem', color: '#22C55E', marginTop: '0.05rem', fontWeight: 500 }}>{m.change}</div>
              </div>
            ))}
          </div>

          {/* Two-column: Data Table + User Management */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
            {/* Orders Table */}
            <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '3px', background: '#2563EB' }} />
                  <span style={{ fontSize: '0.48rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Recent Orders</span>
                </div>
                <span style={{ fontSize: '0.4rem', color: '#2563EB', fontWeight: 600 }}>View All</span>
              </div>
              <div style={{ padding: '0.4rem 0.75rem 0.6rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.2rem', fontSize: '0.38rem', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '0.2rem 0 0.3rem', borderBottom: '1px solid #F1F5F9' }}>
                  <span>Customer</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>
                {[
                  { c: 'Acme Corp', amt: '$12,400', st: 'Completed', sc: '#22C55E' },
                  { c: 'Globex Inc', amt: '$8,230', st: 'Processing', sc: '#F59E0B' },
                  { c: 'Initech', amt: '$24,100', st: 'Completed', sc: '#22C55E' },
                  { c: 'Hooli LLC', amt: '$5,670', st: 'Pending', sc: '#94A3B8' },
                ].map((r, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.2rem', padding: '0.3rem 0', fontSize: '0.42rem', borderBottom: i < 3 ? '1px solid #F8FAFC' : 'none', alignItems: 'center' }}>
                    <span style={{ fontWeight: 600, color: '#0F172A' }}>{r.c}</span>
                    <span style={{ fontWeight: 600, color: '#475569' }}>{r.amt}</span>
                    <span style={{ fontSize: '0.38rem', fontWeight: 600, color: r.sc, background: `${r.sc}10`, padding: '0.08rem 0.3rem', borderRadius: '3px', textAlign: 'center', width: 'fit-content' }}>{r.st}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Management */}
            <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '3px', background: '#7C3AED' }} />
                  <span style={{ fontSize: '0.48rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Team</span>
                </div>
                <span style={{ fontSize: '0.4rem', color: '#2563EB', fontWeight: 600 }}>+ Invite</span>
              </div>
              <div style={{ padding: '0.4rem 0.75rem 0.6rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {[
                  { n: 'Jane Doe', role: 'Admin', email: 'jane@acriotech.io' },
                  { n: 'John Smith', role: 'Developer', email: 'john@acriotech.io' },
                  { n: 'Alice Lee', role: 'Designer', email: 'alice@acriotech.io' },
                  { n: 'Bob Chen', role: 'DevOps', email: 'bob@acriotech.io' },
                ].map((u, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0', borderBottom: i < 3 ? '1px solid #F8FAFC' : 'none' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: 'linear-gradient(135deg, #2563EB, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '0.4rem', fontWeight: 700, color: '#FFFFFF' }}>{u.n.split(' ').map(w => w[0]).join('')}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.45rem', fontWeight: 600, color: '#0F172A' }}>{u.n}</div>
                      <div style={{ fontSize: '0.38rem', color: '#94A3B8' }}>{u.email}</div>
                    </div>
                    <span style={{ fontSize: '0.38rem', fontWeight: 600, color: '#64748B', background: '#F1F5F9', padding: '0.08rem 0.35rem', borderRadius: '3px', whiteSpace: 'nowrap' }}>{u.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row: Budget chart + Project overview */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
            {/* Budget / Analytics Chart */}
            <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '3px', background: '#22C55E' }} />
                  <span style={{ fontSize: '0.48rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Analytics</span>
                </div>
                <span style={{ fontSize: '0.4rem', color: '#94A3B8' }}>Q1 2026</span>
              </div>
              <div style={{ padding: '0.65rem 0.75rem' }}>
                <svg viewBox="0 0 200 50" style={{ width: '100%', height: 'auto' }}>
                  <rect x="0" y="30" width="16" height="20" rx="2" fill="rgba(37,99,235,0.15)" />
                  <rect x="22" y="18" width="16" height="32" rx="2" fill="rgba(37,99,235,0.25)" />
                  <rect x="44" y="25" width="16" height="25" rx="2" fill="rgba(37,99,235,0.20)" />
                  <rect x="66" y="10" width="16" height="40" rx="2" fill="#2563EB" />
                  <rect x="88" y="15" width="16" height="35" rx="2" fill="rgba(37,99,235,0.20)" />
                  <rect x="110" y="5" width="16" height="45" rx="2" fill="rgba(37,99,235,0.25)" />
                  <rect x="132" y="22" width="16" height="28" rx="2" fill="rgba(37,99,235,0.15)" />
                  <rect x="154" y="8" width="16" height="42" rx="2" fill="#2563EB" />
                  <rect x="176" y="20" width="16" height="30" rx="2" fill="rgba(37,99,235,0.20)" />
                  {/* Trend line */}
                  <path d="M8 35 Q30 28 Q52 32 Q74 22 Q96 26 Q118 18 Q140 24 Q162 16 Q184 20" stroke="#22C55E" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.38rem', color: '#94A3B8', marginTop: '0.3rem' }}>
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div style={{ background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0.75rem', borderBottom: '1px solid #F1F5F9', background: '#FAFBFC' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <div style={{ width: '5px', height: '5px', borderRadius: '3px', background: '#F59E0B' }} />
                  <span style={{ fontSize: '0.48rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Projects</span>
                </div>
                <span style={{ fontSize: '0.4rem', color: '#2563EB', fontWeight: 600 }}>4 active</span>
              </div>
              <div style={{ padding: '0.5rem 0.75rem 0.65rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { n: 'ERP Upgrade', p: 75, c: '#2563EB' },
                  { n: 'Mobile App v3', p: 45, c: '#7C3AED' },
                  { n: 'Cloud Migration', p: 30, c: '#06B6D4' },
                ].map((pr, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.42rem', marginBottom: '0.15rem' }}>
                      <span style={{ fontWeight: 600, color: '#0F172A' }}>{pr.n}</span>
                      <span style={{ fontWeight: 600, color: pr.c }}>{pr.p}%</span>
                    </div>
                    <div style={{ height: '4px', borderRadius: '2px', background: '#E2E8F0', overflow: 'hidden' }}>
                      <div style={{ width: `${pr.p}%`, height: '100%', borderRadius: '2px', background: pr.c }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.4rem 1rem', borderTop: '1px solid #F1F5F9', background: '#FAFBFC' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.4rem', color: '#94A3B8' }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
            <span>ERP v4.2.1 · 8 microservices</span>
          </div>
          <div style={{ fontSize: '0.4rem', color: '#94A3B8' }}>Last sync: 2m ago</div>
        </div>
      </div>
    </div>
  );
}

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

const services = [
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    desc: 'Bespoke, mission-critical applications engineered for uncompromising stability, security, and infinite scalability within complex organizational structures.',
    tags: ['Microservices', 'Event-Driven', 'CQRS', 'Domain-Driven'],
    link: '/services',
    linkText: 'Explore Enterprise Services',
    icon: <Server size={28} />,
    gradient: 'linear-gradient(135deg, #0F172A, #1E293B)',
    accentColor: '#2563EB',
    illustration: <EnterpriseDashboard />,
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    desc: 'Intelligent neural systems designed to automate workflows and extract cognitive value from enterprise data.',
    tags: ['LLMs', 'NLP', 'Computer Vision'],
    link: '/services',
    linkText: 'Explore AI Services',
    icon: <Zap size={28} />,
    gradient: 'linear-gradient(135deg, #F8FAFC, #FFFFFF)',
    accentColor: '#06B6D4',
    illustration: <AINetwork />,
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    desc: 'Resilient, highly-available cloud environments engineered for zero downtime and global scale.',
    tags: ['AWS', 'GCP', 'Azure', 'K8s'],
    link: '/services',
    linkText: 'Explore Cloud Services',
    icon: <Cloud size={28} />,
    gradient: 'linear-gradient(135deg, #F8FAFC, #FFFFFF)',
    accentColor: '#2563EB',
    illustration: <CloudDiagram />,
  },
  {
    id: 'digital-products',
    title: 'Digital Products',
    desc: 'Native and cross-platform applications delivering premium user experiences.',
    tags: ['React Native', 'Flutter', 'Swift'],
    link: '/services',
    linkText: 'Explore Product Services',
    icon: <MonitorSmartphone size={28} />,
    gradient: 'linear-gradient(135deg, #F8FAFC, #FFFFFF)',
    accentColor: '#7C3AED',
    illustration: <DigitalProductMockup />,
  },
  {
    id: 'api-automation',
    title: 'API & Automation',
    desc: 'Robust microservices that act as the connective tissue for digital ecosystems.',
    tags: ['REST', 'GraphQL', 'gRPC'],
    link: '/services',
    linkText: 'Explore API Services',
    icon: <Network size={28} />,
    gradient: 'linear-gradient(135deg, #F8FAFC, #FFFFFF)',
    accentColor: '#22C55E',
    illustration: <ApiInterface />,
  },
];

// ─── Hero Section ───────────────────────────────────────────────────
function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 'clamp(80px, 12vh, 120px)',
      background: '#F1F5F9',
    }}>
      {/* Static background mesh */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-30%', left: '-10%', width: '80vw', height: '80vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0.02) 40%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '40%', right: '-15%', width: '70vw', height: '70vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, rgba(6,182,212,0.01) 40%, transparent 70%)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '30%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 60%)' }} />
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03 }} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 4 0 L 0 0 0 4" fill="none" stroke="#0F172A" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
        <svg style={{ position: 'absolute', top: '15%', left: '5%', width: '30%', height: '40%', opacity: 0.03 }} viewBox="0 0 200 300" fill="none">
          <path d="M10 10 L100 10 L100 150 L190 150" stroke="#2563EB" strokeWidth="2" opacity="0.5" />
          <path d="M50 290 L50 180 L150 180 L150 100" stroke="#06B6D4" strokeWidth="1.5" opacity="0.5" />
          <circle cx="100" cy="10" r="3" fill="#2563EB" opacity="0.5" />
          <circle cx="190" cy="150" r="3" fill="#2563EB" opacity="0.5" />
        </svg>
        <svg style={{ position: 'absolute', bottom: '10%', right: '8%', width: '25%', height: '35%', opacity: 0.03 }} viewBox="0 0 200 300" fill="none">
          <path d="M190 290 L190 180 L80 180 L80 50" stroke="#7C3AED" strokeWidth="2" opacity="0.5" />
          <path d="M10 50 L120 50 L120 250" stroke="#2563EB" strokeWidth="1.5" opacity="0.5" />
        </svg>
      </div>

      {/* Floating UI cards (static) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
        <div style={{ position: 'absolute', top: '12%', left: '2%' }}>
          <div style={{ padding: '0.65rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '100px', border: '1px solid rgba(226,232,240,0.6)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(6,182,212,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Zap size={14} color="#06B6D4" /></div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap' }}>AI Engine Connected</span>
          </div>
        </div>
        <div style={{ position: 'absolute', top: '35%', right: '2%' }}>
          <div style={{ padding: '0.65rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '100px', border: '1px solid rgba(226,232,240,0.6)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Database size={14} color="#2563EB" /></div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap' }}>Enterprise Database</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '25%', left: '5%' }}>
          <div style={{ padding: '0.65rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '100px', border: '1px solid rgba(226,232,240,0.6)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(124,58,237,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Shield size={14} color="#7C3AED" /></div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap' }}>Zero-Trust Security</span>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '10%', right: '5%' }}>
          <div style={{ padding: '0.65rem 1.1rem', display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '100px', border: '1px solid rgba(226,232,240,0.6)', boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
            <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(34,197,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Activity size={14} color="#22C55E" /></div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0F172A', whiteSpace: 'nowrap' }}>Deployment Active</span>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '900px', padding: '0 2rem' }}>
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
            textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem',
            background: 'rgba(37,99,235,0.06)', padding: '0.4rem 1rem 0.4rem 0.7rem',
            borderRadius: '100px', border: '1px solid rgba(37,99,235,0.1)',
          }}
        >
          <Code2 size={12} color="#2563EB" />
          Enterprise Software Engineering
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)', marginBottom: '1.25rem',
            fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.04em',
            color: '#0F172A',
          }}
        >
          Enterprise Software,<br />
          <span style={{ color: '#64748B', fontWeight: 500 }}>Built Without Compromise.</span>
        </h1>

        <p
          style={{
            fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px',
            marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7, color: '#475569',
          }}
        >
          We partner with ambitious businesses to design, engineer and evolve enterprise software, AI platforms and cloud solutions that become the foundation of long-term growth.
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a
            href="/contact-us"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.25rem', background: '#0F172A', color: '#FFFFFF',
              borderRadius: '14px', fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', border: 'none', cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(15,23,42,0.15)',
            }}
          >
            Start a Project <ArrowRight size={16} />
          </a>
          <a
            href="/work"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '1rem 2.25rem', background: 'transparent', color: '#0F172A',
              borderRadius: '14px', fontWeight: 600, fontSize: '0.95rem',
              textDecoration: 'none', border: '1.5px solid #E2E8F0', cursor: 'pointer',
            }}
          >
            View Our Work
          </a>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
          {[
            { label: 'Enterprise Software', color: '#0F172A' },
            { label: 'Artificial Intelligence', color: '#2563EB' },
            { label: 'Cloud Infrastructure', color: '#22C55E' },
            { label: 'Automation', color: '#F59E0B' },
            { label: 'Digital Products', color: '#7C3AED' },
          ].map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: '0.6rem', fontWeight: 600, color: item.color,
                padding: '0.3rem 0.8rem', borderRadius: '100px',
                background: `${item.color}08`, border: `1px solid ${item.color}20`,
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Home Page ────────────────────────────────────────────────
export default function Home() {
  

  return (
    <main>
      <NavBar />

      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── STATISTICS ─── */}
      <section style={{ padding: '5rem 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 25% 40%, rgba(37,99,235,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 60%, rgba(6,182,212,0.04) 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stats-asymmetric-grid" style={{ gap: '1.25rem', alignItems: 'stretch' }}>
            {/* ── Large Hero Card: 99.99% Uptime ── */}
            <div
              style={{
                height: '100%', borderRadius: '22px', padding: '1.75rem 2rem',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.06)',
                display: 'flex', flexDirection: 'row', alignItems: 'center',
                gap: '1.75rem', position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div style={{ position: 'absolute', top: '-50%', right: '-20%', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.06), transparent 70%)', pointerEvents: 'none' }} />
              {/* Circular progress */}
              <div style={{ flexShrink: 0, position: 'relative', width: '88px', height: '88px' }}>
                <svg width="88" height="88" viewBox="0 0 88 88" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="44" cy="44" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                  <circle cx="44" cy="44" r="38" fill="none" stroke="url(#uptimeGrad)" strokeWidth="4" strokeLinecap="round" strokeDasharray={2 * Math.PI * 38} strokeDashoffset={2 * Math.PI * 38 * 0.01} />
                  <defs>
                    <linearGradient id="uptimeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22C55E" />
                      <stop offset="100%" stopColor="#16A34A" />
                    </linearGradient>
                  </defs>
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <Shield size={18} color="#22C55E" />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '2.6rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    99<span style={{ color: '#22C55E' }}>.</span>99<span style={{ fontSize: '1.4rem', color: '#22C55E', marginLeft: '0.15rem' }}>%</span>
                  </span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#22C55E', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.1rem' }}>
                  Uptime Guarantee
                </div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, margin: '0.25rem 0 0 0', maxWidth: '320px' }}>
                  Fault-tolerant cloud environments designed for business continuity.
                </p>
              </div>
            </div>

            {/* ── Right Column: 3 Compact Cards ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { icon: <Server size={16} />, num: "80+", label: "Production Systems", desc: "Mission-critical applications built, deployed, and actively managed.", color: '#60A5FA' },
                { icon: <Activity size={16} />, num: "15M+", label: "Daily API Requests", desc: "High-throughput microservices engineered for secure, scalable operations.", color: '#06B6D4' },
                { icon: <Users size={16} />, num: "40+", label: "Active Partnerships", desc: "Long-term engineering engagements with mid-market and enterprise leaders.", color: '#A78BFA' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1, borderRadius: '18px', padding: '0.9rem 1.25rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.04)',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    position: 'relative', overflow: 'hidden',
                  }}
                >
                  {/* Mini circular progress */}
                  <div style={{ flexShrink: 0, position: 'relative', width: '44px', height: '44px' }}>
                    <svg width="44" height="44" viewBox="0 0 44 44" style={{ transform: 'rotate(-90deg)' }}>
                      <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="3" />
                      <circle cx="22" cy="22" r="18" fill="none" stroke={stat.color} strokeWidth="3" strokeLinecap="round" strokeDasharray={2 * Math.PI * 18} strokeDashoffset={2 * Math.PI * 18 * 0.15} />
                    </svg>
                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${stat.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: stat.color }}>
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                      <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                        {stat.num}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.65rem', color: stat.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.3 }}>
                      {stat.label}
                    </div>
                    <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.4, margin: '0.1rem 0 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {stat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .stats-asymmetric-grid {
            display: grid !important;
            grid-template-columns: 1.2fr 0.9fr !important;
          }
          @media (max-width: 860px) {
            .stats-asymmetric-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ─── SERVICES (Core Capabilities) ─── */}
      <section id="services" style={{ padding: 'var(--spacing-section) 0', background: '#F1F5F9', position: 'relative' }}>
        <div className="container">
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <Layers size={12} color="#2563EB" />
              Capabilities
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
              <div>
                <h2 style={{ fontSize: 'var(--font-h2)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#0F172A' }}>Core Capabilities</h2>
                <p style={{ fontSize: '1rem', maxWidth: '480px', marginTop: '0.75rem', color: '#475569' }}>We solve complex engineering problems through specialized technical domains.</p>
              </div>
              <a href="/services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.7rem 1.4rem', borderRadius: '12px', fontWeight: 600,
                fontSize: '0.85rem', color: '#0F172A', textDecoration: 'none',
                border: '1.5px solid #E2E8F0',
                whiteSpace: 'nowrap',
              }}>
                View All Capabilities
              </a>
            </div>
          </div>

          {/* Zig-zag services */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {services.map((service, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={service.id} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '0', borderRadius: '24px', overflow: 'hidden',
                  background: '#FFFFFF', border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  direction: isLeft ? 'ltr' : 'rtl',
                }}>
                  {/* Illustration */}
                  <div style={{
                    padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: '#F8FAFC', minHeight: '300px', direction: 'ltr',
                  }}>
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        {service.illustration}
                      </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', direction: 'ltr' }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '14px',
                      background: `${service.accentColor}10`, border: `1px solid ${service.accentColor}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: service.accentColor, marginBottom: '1.5rem',
                    }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: '#0F172A', fontWeight: 700 }}>{service.title}</h3>
                    <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '440px' }}>
                      {service.desc}
                    </p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                      {service.tags.map((tag, ti) => (
                        <span key={ti} style={{
                          fontSize: '0.6rem', fontWeight: 600, color: service.accentColor,
                          padding: '0.2rem 0.6rem', borderRadius: '100px',
                          background: `${service.accentColor}08`, border: `1px solid ${service.accentColor}15`,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={service.link} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.8rem', fontWeight: 600, color: service.accentColor,
                      textDecoration: 'none',
                    }}>
                      {service.linkText} <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <Star size={12} color="#2563EB" />
              Why Acriotech
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800, marginBottom: '1rem' }}>
              Why Choose Us
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', maxWidth: '500px', margin: '0 auto' }}>
              We combine deep technical expertise with a commitment to engineering excellence.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '2.5rem', borderRadius: '24px',
                  background: '#FFFFFF', border: '1px solid #E2E8F0',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: item.gradient, opacity: 0.6 }} />
                <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${item.gradient}`, opacity: 0.1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#2563EB' }} />
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px', background: item.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem', color: '#FFFFFF', position: 'absolute', top: '2.5rem', left: '2.5rem',
                }}>
                  {item.icon}
                </div>
                <div style={{ paddingTop: '3.5rem' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO (Architecture Excellence) ─── */}
      <section id="portfolio" style={{ padding: 'var(--spacing-section) 0', background: '#F1F5F9', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <Box size={12} color="#2563EB" />
                Selected Work
              </div>
              <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Architecture Excellence</h2>
            </div>
            <a href="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#0F172A', fontSize: '0.95rem' }}>
              Explore Case Studies <ArrowRight size={16} />
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {/* Case Study 1 */}
            <div style={{ borderRadius: '24px', overflow: 'hidden', background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" alt="Cloud Infrastructure" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.85) 100%)' }} />
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  <div style={{ padding: '0.4rem 0.85rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 700, color: '#0F172A' }}>
                    Cloud Infrastructure
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', display: 'flex', gap: '1.5rem' }}>
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
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  {['Kubernetes', 'Terraform', 'AWS'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.6rem', fontWeight: 600, color: '#64748B', padding: '0.2rem 0.6rem', borderRadius: '100px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#0F172A', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Distributed Cloud Architecture</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  Engineered a highly available, multi-region cloud infrastructure scaling automatically to handle over 15 million daily requests.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div style={{ borderRadius: '24px', overflow: 'hidden', background: '#FFFFFF', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" alt="Cybersecurity Fabric" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" priority={false} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.85) 100%)' }} />
                <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem' }}>
                  <div style={{ padding: '0.4rem 0.85rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 700, color: '#0F172A' }}>
                    Cybersecurity
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', display: 'flex', gap: '1.5rem' }}>
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
              <div style={{ padding: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  {['Rust', 'WebAssembly', 'eBPF'].map((tag, i) => (
                    <span key={i} style={{ fontSize: '0.6rem', fontWeight: 600, color: '#64748B', padding: '0.2rem 0.6rem', borderRadius: '100px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>{tag}</span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#0F172A', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Zero-Trust Network Fabric</h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  Architected a low-latency, kernel-level network security fabric providing real-time threat mitigation across thousands of enterprise nodes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ENGINEERING WORKFLOW ─── */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <GitBranch size={12} color="#2563EB" />
                Methodology
              </div>
              <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>Engineering<br />Workflow</h2>
            </div>
            <p style={{ maxWidth: '400px', fontSize: '1rem', color: '#475569', lineHeight: 1.7, margin: 0, paddingBottom: '0.5rem' }}>
              A disciplined, systematic approach to building complex software systems that scale effortlessly.
            </p>
          </div>

          {/* Process Grid — all steps visible simultaneously */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem',
            marginTop: '2rem',
          }}>
            {[
              { id: "01", title: 'Discovery & Audit', desc: 'Deep technical analysis of existing systems, identifying bottlenecks and architectural requirements.', icon: Search },
              { id: "02", title: 'System Architecture', desc: 'Designing resilient, scalable foundations mapping out data models, microservices, and infrastructure.', icon: LineChart },
              { id: "03", title: 'UI/UX Engineering', desc: 'Crafting intuitive interfaces backed by robust design systems and precise component architecture.', icon: MonitorSmartphone },
              { id: "04", title: 'Development Sprints', desc: 'Agile execution with rigorous peer reviews, automated testing, and continuous integration.', icon: Cpu },
              { id: "05", title: 'Deployment & QA', desc: 'Zero-downtime deployments with comprehensive load testing, security audits, and compliance checks.', icon: Cloud },
              { id: "06", title: 'Scale & Support', desc: 'Proactive monitoring, performance optimization, and dedicated enterprise SLA support.', icon: Activity },
            ].map((step, index) => {
              const Icon = step.icon;
              const stepColors = ['#2563EB', '#06B6D4', '#7C3AED', '#22C55E', '#F59E0B', '#EC4899'];
              const color = stepColors[index];
              return (
                <div
                  key={step.id}
                  style={{
                    background: '#FFFFFF', borderRadius: '22px', border: '1px solid #E2E8F0',
                    padding: '2rem', display: 'flex', flexDirection: 'column',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, fontFamily: 'monospace', color: '#FFFFFF' }}>{step.id}</span>
                    </div>
                    <div style={{ width: '3px', height: '24px', borderRadius: '2px', background: color, opacity: 0.3 }} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.7, margin: '0 0 1.25rem', flex: 1 }}>{step.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Icon size={16} color={color} />
                    <span style={{ fontSize: '0.65rem', fontWeight: 600, color, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Step {step.id}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY STACK ─── */}
      <section style={{ padding: '4rem 0', background: '#F1F5F9', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ marginBottom: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <Code2 size={12} color="#2563EB" />
              Technology Stack
            </div>
            <p style={{ fontSize: '0.9rem', color: '#64748B' }}>Modern tools powering enterprise-grade engineering</p>
          </div>
        </div>
        <div className="container">
          <TechGrid />
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <MessageCircle size={12} color="#2563EB" />
              Client Stories
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800 }}>
              Trusted by Engineering Leaders
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F1F5F9', position: 'relative' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem',
            alignItems: 'start',
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: '#2563EB',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <CircleCheck size={12} color="#2563EB" />
                Questions & Answers
              </div>
              <h2 style={{ fontSize: 'var(--font-h2)', letterSpacing: '-0.03em', color: '#0F172A', fontWeight: 800, margin: '0 0 1rem 0', lineHeight: 1.1 }}>
                Frequently Asked Questions
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                Everything you need to know about working with Acriotech. Can&apos;t find what you&apos;re looking for? Reach out to our team directly.
              </p>
              <a href="/contact-us" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontWeight: 600, color: '#0F172A', fontSize: '0.9rem', textDecoration: 'none',
                borderBottom: '2px solid #0F172A', paddingBottom: '0.15rem',
              }}>
                Contact our team <ArrowRight size={14} />
              </a>
            </div>
            <div>
              <FAQAccordion />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            section > .container > div {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section style={{
        position: 'relative', padding: 'calc(var(--spacing-section) * 1.5) 0',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
      }}>
        {/* Floating background elements (static) */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div style={{ position: 'absolute', top: '-20%', left: '10%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', bottom: '-10%', right: '5%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)' }} />
          <div style={{ position: 'absolute', top: '30%', right: '20%', width: '30vw', height: '30vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {[
              { icon: <Shield size={12} />, label: 'ISO 27001 Ready' },
              { icon: <Lock size={12} />, label: 'GDPR Compliant' },
              { icon: <Cloud size={12} />, label: 'Cloud Native' },
            ].map((badge, i) => (
              <div
                key={i}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                  padding: '0.3rem 0.75rem', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {badge.icon}
                {badge.label}
              </div>
            ))}
          </div>

          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 5rem)', marginBottom: '1.5rem',
            fontWeight: 800, lineHeight: 1.06, letterSpacing: '-0.04em', color: '#FFFFFF',
          }}>
            Let&apos;s Build Software<br />
            <span style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              That Stands The Test of Time.
            </span>
          </h2>

          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', maxWidth: '520px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Ready to engineer software that scales with your ambition? Start a conversation with our technical team.
          </p>

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

          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href="/work"
              style={{
                padding: '1rem 2.5rem', fontSize: '0.95rem', fontWeight: 600,
                color: '#0F172A', background: '#FFFFFF', border: 'none',
                borderRadius: '14px', cursor: 'pointer', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                boxShadow: '0 8px 30px rgba(255,255,255,0.1)',
              }}
            >
              Explore Our Work
            </a>
            <a
              href="/contact-us"
              style={{
                padding: '1rem 2.5rem', fontSize: '0.95rem', fontWeight: 600,
                color: '#FFFFFF', background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.25)',
                borderRadius: '14px', cursor: 'pointer', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              }}
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
