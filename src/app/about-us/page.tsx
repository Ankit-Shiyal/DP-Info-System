"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, Shield, Users, Briefcase,
  BarChart3, Building, Globe, Clock, Code, Server, Cloud, GitBranch,
  Layers, Target, HeartHandshake,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Enterprise Clients" },
  { value: "120+", label: "Projects Delivered" },
  { value: "45+", label: "Engineering Team" },
  { value: "99.97%", label: "Avg. Uptime" },
];

const principles = [
  {
    num: "01", title: "Transparency", icon: HeartHandshake,
    desc: "We maintain open communication throughout the entire development lifecycle. You always know the status of your project, the budget, and the timeline."
  },
  {
    num: "02", title: "Quality Over Speed", icon: Shield,
    desc: "While we work efficiently, we never compromise on the underlying architecture. We write clean, documented code that your internal team can easily maintain later."
  },
  {
    num: "03", title: "Long-term Partnership", icon: Target,
    desc: "We don't just launch a product and leave. We provide ongoing support, maintenance, and technical guidance as your business continues to grow and evolve."
  }
];

const methodology = [
  { step: "01", title: "Discovery & Architecture", desc: "We analyze your business requirements, technical constraints, and define a scalable architecture before writing a single line of code." },
  { step: "02", title: "Agile Execution", desc: "Development is broken into clear, manageable sprints. You receive regular updates and working software at every milestone." },
  { step: "03", title: "Rigorous QA", desc: "Automated testing and manual QA processes ensure that the final product is secure, performant, and completely bug-free." },
  { step: "04", title: "Deployment & Scale", desc: "We handle the complex DevOps pipelines to seamlessly deploy your application and monitor it as your user base grows." }
];

const techGroups = [
  { category: "Cloud Infrastructure", items: ["Amazon Web Services", "Microsoft Azure", "Google Cloud Platform"], color: "#2563EB" },
  { category: "Frontend", items: ["React & Next.js"], color: "#06B6D4" },
  { category: "Backend & Data", items: ["Node.js", "PostgreSQL"], color: "#22C55E" },
  { category: "DevOps", items: ["Docker & Kubernetes"], color: "#F59E0B" },
];

export default function AboutUs() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* ════════════════════════════════════════ */}
      {/*  HERO — split: editorial + dashboard    */}
      {/* ════════════════════════════════════════ */}
      <section style={{
        paddingTop: 'var(--spacing-section)',
        paddingBottom: 'var(--spacing-section)',
        background: 'var(--bg-section)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-10%', right: '0%', width: '50%', height: '70%', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}>
            {/* Left */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <Building size={12} color="var(--primary)" />
                About Us
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
                fontWeight: 800, color: 'var(--text-primary)',
                letterSpacing: '-0.04em', lineHeight: 1.02,
                marginBottom: '1.25rem',
              }}>
                About{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Acriotech</span>
              </h1>
              <p style={{
                fontSize: '1.05rem', color: 'var(--text-secondary)',
                lineHeight: 1.75, marginBottom: '2rem', maxWidth: '540px',
              }}>
                Acriotech delivers enterprise-grade software engineering and technical consulting. We design and implement high-performance systems for organizations demanding precision, security, and scale.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href="/contact-us" style={{
                  padding: '0.85rem 2rem',
                  background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                  color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                  fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  transition: 'all 200ms ease',
                  boxShadow: '0 4px 14px rgba(37,99,235,0.25)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Contact our team <ArrowRight size={16} />
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {stats.map((s, i) => (
                  <div key={i} style={{ padding: '0.75rem 0.5rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontSize: '0.55rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Company Dashboard */}
            <div className="about-hero-ill" style={{ position: 'relative', height: '480px' }}>
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 440 480" fill="none">
                <path d="M90 50 L200 50 L200 150" stroke="rgba(37,99,235,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M350 210 L350 350 L240 350" stroke="rgba(37,99,235,0.1)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="200" cy="150" r="3" fill="rgba(37,99,235,0.25)" />
                <circle cx="240" cy="350" r="3" fill="rgba(37,99,235,0.25)" />
              </svg>

              {/* Card 1 — Team Overview */}
              <div style={{
                position: 'absolute', top: '5px', left: '5px',
                width: '175px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Team</div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                  {['#2563EB', '#06B6D4', '#22C55E', '#F59E0B', '#EC4899'].map(c => (
                    <div key={c} style={{ width: '20px', height: '20px', borderRadius: '50%', background: c, border: '2px solid #FFFFFF' }} />
                  ))}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600 }}>45+ Engineers</div>
              </div>

              {/* Card 2 — Global Reach */}
              <div style={{
                position: 'absolute', top: '70px', right: '5px',
                width: '165px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Global Reach</div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[70, 45, 85, 55, 35].map((w, i) => (
                    <div key={i} style={{ flex: 1, height: '24px', borderRadius: '4px', background: i === 2 ? 'linear-gradient(180deg, #2563EB, #1D4ED8)' : '#E2E8F0' }} />
                  ))}
                </div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>5 continents</div>
              </div>

              {/* Card 3 — Project Timeline */}
              <div style={{
                position: 'absolute', top: '190px', left: '10px',
                width: '170px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Projects</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {[{ status: 'Active', count: '12' }, { status: 'Completed', count: '108' }, { status: 'Maintenance', count: '24' }].map((p, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>{p.status}</span>
                      <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{p.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 4 — Architecture Stack */}
              <div style={{
                position: 'absolute', top: '200px', right: '25px',
                width: '150px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Stack</div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {['Next', 'API', 'DB', 'K8s'].map((l, i) => (
                    <div key={i} style={{ flex: 1, padding: '4px 0', borderRadius: '4px', background: i <= 1 ? 'rgba(37,99,235,0.08)' : '#F8FAFC', fontSize: '0.45rem', fontWeight: 700, color: i <= 1 ? '#2563EB' : '#94A3B8', textAlign: 'center', border: i <= 1 ? '1px solid rgba(37,99,235,0.12)' : '1px solid #E2E8F0' }}>{l}</div>
                  ))}
                </div>
              </div>

              {/* Card 5 — Company Pulse */}
              <div style={{
                position: 'absolute', bottom: '15px', left: '50%',
                transform: 'translateX(-50%)',
                width: '220px', padding: '14px',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.4)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Company Pulse</div>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '28px' }}>
                  {[30, 50, 35, 60, 45, 70, 55, 75, 60, 80].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '2px', background: i >= 7 ? 'linear-gradient(180deg, #22C55E, #16A34A)' : '#E2E8F0' }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .about-hero-ill { display: none; } }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  OUR STORY — split: large image + text */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <Clock size={12} color="var(--primary)" />
              Our Story
            </div>
          </div>
          <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '3rem', letterSpacing: '-0.02em' }}>Our Story</h2>
          <div className="story-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Left: Large premium image card */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '-12px', width: '100%', height: '100%', borderRadius: '24px', border: '1px solid rgba(37,99,235,0.06)', background: 'rgba(37,99,235,0.015)', zIndex: 0 }} />
              <div style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 32px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.02)',
                aspectRatio: '16 / 10',
                zIndex: 1,
                background: '#F8FAFC',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
                  alt="Acriotech corporate office"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              {/* Floating experience badge */}
              <div className="story-badge" style={{
                position: 'absolute', bottom: '-5px', right: '-10px',
                padding: '10px 16px',
                background: 'rgba(255,255,255,0.9)',
                borderRadius: '14px',
                border: '1px solid rgba(37,99,235,0.1)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.06)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                zIndex: 2,
                display: 'flex', alignItems: 'center', gap: '0.6rem',
              }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #1D4ED8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Clock size={14} color="#FFFFFF" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.75rem', lineHeight: 1.2 }}>10+ Years</div>
                  <div style={{ fontSize: '0.55rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>Experience</div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginTop: 0, marginBottom: '1.5rem' }}>
                Acriotech started with a straightforward goal: to provide businesses with reliable, well-built software. In an industry often filled with unnecessary complexity and jargon, we wanted to be a partner that focuses purely on results.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                Over the years, we have grown from a small local team into a comprehensive technology firm. Today, we work with clients globally, delivering everything from simple web applications to complex enterprise integrations.
              </p>
              <a href="/contact-us" style={{
                padding: '0.85rem 2rem',
                background: 'var(--dark)',
                color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                fontSize: '0.9rem', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 200ms ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--dark-800)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--dark)'; }}
              >
                Contact our team <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .story-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
            .story-badge { bottom: -5px !important; right: 0 !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  HOW WE WORK — horizontal timeline       */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <Layers size={12} color="var(--primary)" />
              Principles
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.025em' }}>How We Work</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto' }}>The principles that guide our projects and client relationships.</p>
          </div>

          <style>{`
            .principles-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1.25rem;
            }
            .principles-grid .featured {
              grid-column: 1 / 3;
              padding: 36px;
              background: #0F172A;
              border: 1px solid rgba(255,255,255,0.04);
              border-radius: 24px;
              color: #FFFFFF;
              position: relative;
              overflow: hidden;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .principles-grid .featured:hover {
              border-color: rgba(37,99,235,0.2);
              transform: translateY(-2px);
              box-shadow: 0 12px 32px rgba(37,99,235,0.08);
            }
            .principles-grid .pill {
              padding: 28px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              border-radius: 24px;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .principles-grid .pill:hover {
              border-color: #2563EB;
              box-shadow: 0 6px 20px rgba(37,99,235,0.05);
              transform: translateY(-2px);
            }
            .principles-grid .full-card {
              grid-column: 1 / -1;
              padding: 32px 36px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              border-radius: 24px;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .principles-grid .full-card:hover {
              border-color: #2563EB;
              box-shadow: 0 6px 20px rgba(37,99,235,0.05);
              transform: translateY(-2px);
            }
            @media (max-width: 1024px) {
              .principles-grid { grid-template-columns: repeat(2, 1fr); }
              .principles-grid .featured { grid-column: 1 / -1; }
              .principles-grid .full-card { grid-column: 1 / -1; }
            }
            @media (max-width: 640px) {
              .principles-grid { grid-template-columns: 1fr; }
              .principles-grid .featured { grid-column: 1; padding: 28px; }
              .principles-grid .full-card { grid-column: 1; }
            }
          `}</style>

          <div className="principles-grid">
            {principles.map((p, i) => {
              const Icon = p.icon;
              if (i === 0) {
                return (
                  <div key={i} className="featured">
                    <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', position: 'relative', zIndex: 1 }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{p.num}</span>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={20} color="#60A5FA" />
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>{p.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, position: 'relative', zIndex: 1 }}>{p.desc}</p>
                  </div>
                );
              }
              if (i === 1) {
                return (
                  <div key={i} className="pill">
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{p.num}</span>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(6,182,212,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={18} color="#06B6D4" />
                      </div>
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                  </div>
                );
              }
              return (
                <div key={i} className="full-card">
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: 'monospace' }}>{p.num}</span>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(34,197,94,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={18} color="#22C55E" />
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{p.title}</h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  LEADERSHIP — split: content + image     */}
      {/*  with floating achievement cards         */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <Users size={12} color="var(--primary)" />
              Team
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.025em' }}>Our Leadership</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>Guided by experienced technical operators and software architects.</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Left */}
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>Built by engineers, for enterprise.</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Unlike traditional agencies run purely by sales teams, Acriotech is led by software engineers. This means every project discussion starts with technical feasibility, architecture planning, and long-term security in mind.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our leadership team has decades of combined experience building high-traffic platforms, migrating legacy systems, and securing corporate data. We bring this expertise to every single client engagement.
              </p>
              {/* Achievement badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {[
                  { value: '20+', label: 'Years Combined', icon: Clock },
                  { value: '50+', label: 'Enterprise Clients', icon: Briefcase },
                  { value: '12', label: 'Industries', icon: Globe },
                ].map((a, i) => (
                  <div key={i} style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{a.value}</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.03em', marginTop: '2px' }}>{a.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image + floating glass overlay */}
            <div style={{ position: 'relative' }}>
              <div style={{
                width: '100%',
                height: '420px',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-alt)',
                position: 'relative',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Leadership Team"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(transparent, rgba(0,0,0,0.08))' }} />
              </div>
              {/* Floating glass card */}
              <div style={{
                position: 'absolute', bottom: '-5px', right: '-10px',
                padding: '14px 18px',
                background: 'rgba(255,255,255,0.9)',
                borderRadius: '14px',
                border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 8px 28px rgba(0,0,0,0.06)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: '#FFFFFF' }}>A</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.75rem' }}>Engineering-Led</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)' }}>100% technical leadership</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  TECHNOLOGY — grouped bento cards        */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <Server size={12} color="var(--primary)" />
              Technology
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.025em' }}>Technology Partnerships</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto' }}>
              We maintain active expertise in the industry's most reliable and scalable enterprise technologies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {techGroups.map((group, gi) => (
              <div key={gi} style={{
                padding: '24px',
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                transition: 'all 200ms ease-out',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = group.color; e.currentTarget.style.boxShadow = `0 4px 16px ${group.color}10`; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)'; }}
              >
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  fontSize: '0.6rem', fontWeight: 700, color: group.color,
                  textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem',
                  background: `${group.color}08`, padding: '0.25rem 0.6rem',
                  borderRadius: '100px',
                }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: group.color }} />
                  {group.category}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {group.items.map((tech, ti) => (
                    <div key={ti} style={{ padding: '0.5rem 0.65rem', background: '#F8FAFC', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--secondary)', border: '1px solid #F1F5F9' }}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  CAREERS — dark CTA with visual depth    */}
      {/* ════════════════════════════════════════ */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: 'var(--dark)', color: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 50% 60% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 50% 60% at 50% 50%, black, transparent)',
        }} />
        <div style={{ position: 'absolute', top: '-30%', left: '50%', width: '50%', height: '100%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'rgba(6,182,212,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(6,182,212,0.08)',
            }}>
              <Code size={12} color="var(--accent)" />
              Careers
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.25rem', letterSpacing: '-0.025em', lineHeight: 1.08 }}>Join our engineering team</h2>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              We are always looking for talented developers, cloud architects, and QA specialists who take pride in writing clean, reliable code. If you want to work on complex enterprise challenges, we want to hear from you.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact-us" style={{
                padding: '0.9rem 2.25rem',
                background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                fontSize: '0.9rem', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 200ms ease',
                boxShadow: '0 4px 14px rgba(37,99,235,0.25)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                View Open Positions <ArrowUpRight size={16} />
              </a>
              <a href="/company/careers" style={{
                padding: '0.9rem 2.25rem',
                background: 'transparent',
                color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                fontSize: '0.9rem', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 200ms ease',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
              >
                Learn about culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  METHODOLOGY — alternating timeline      */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <GitBranch size={12} color="var(--primary)" />
              Methodology
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.025em' }}>Our Methodology</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>A structured, disciplined approach to delivering software on time and within budget.</p>
          </div>

          <style>{`
            .method-timeline {
              position: relative;
              display: flex;
              flex-direction: column;
              gap: 4rem;
            }
            .method-timeline::before {
              content: '';
              position: absolute;
              left: 50%;
              top: 0;
              bottom: 0;
              width: 2px;
              background: linear-gradient(180deg, #2563EB, #06B6D4, #22C55E, #F59E0B);
              transform: translateX(-50%);
            }
            .method-step {
              display: flex;
              gap: 2rem;
              position: relative;
            }
            .method-step:nth-child(odd) {
              flex-direction: row;
            }
            .method-step:nth-child(even) {
              flex-direction: row-reverse;
            }
            .method-step .step-card {
              width: calc(50% - 2rem);
              padding: 32px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              border-radius: 24px;
              transition: all 200ms ease-out;
              position: relative;
            }
            .method-step .step-card:hover {
              border-color: #2563EB;
              box-shadow: 0 6px 20px rgba(37,99,235,0.05);
              transform: translateY(-2px);
            }
            .method-step .step-dot {
              position: absolute;
              left: 50%;
              top: 32px;
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: #FFFFFF;
              border: 3px solid #2563EB;
              transform: translateX(-50%);
              z-index: 1;
            }
            .method-step:nth-child(2) .step-dot { border-color: #06B6D4; }
            .method-step:nth-child(3) .step-dot { border-color: #22C55E; }
            .method-step:nth-child(4) .step-dot { border-color: #F59E0B; }
            @media (max-width: 768px) {
              .method-timeline::before { left: 20px; }
              .method-step, .method-step:nth-child(even) { flex-direction: row; }
              .method-step .step-card { width: calc(100% - 50px); margin-left: 50px; }
              .method-step .step-dot { left: 20px; }
            }
          `}</style>

          <div className="method-timeline">
            {methodology.map((item, idx) => (
              <div key={idx} className="method-step">
                <div className="step-card">
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: idx === 0 ? 'rgba(37,99,235,0.08)' : idx === 1 ? 'rgba(6,182,212,0.08)' : idx === 2 ? 'rgba(34,197,94,0.08)' : 'rgba(245,158,11,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{
                        fontSize: '0.8rem', fontWeight: 800, fontFamily: 'monospace',
                        color: idx === 0 ? '#2563EB' : idx === 1 ? '#06B6D4' : idx === 2 ? '#22C55E' : '#F59E0B',
                      }}>{item.step}</span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                </div>
                <div className="step-dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
