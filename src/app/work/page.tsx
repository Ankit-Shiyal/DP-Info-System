"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  ArrowRight, Briefcase, Star, Users, FolderOpen, Globe, Terminal,
  ArrowUpRight, CheckCircle, GitCommitHorizontal, BarChart3, Activity,
  Clock, Server, Cloud, Zap,
} from "lucide-react";
import Link from "next/link";

const workList = [
  { slug: "featured-projects", name: "Featured Projects", desc: "A visual portfolio of the user interfaces, dashboards, and mobile applications we've shipped for our enterprise partners.", icon: FolderOpen, count: "24+", metric: "Projects Shipped" },
  { slug: "our-clients", name: "Our Clients", desc: "From Y-Combinator seed startups to Fortune 500 institutions. See who trusts Acriotech with their core infrastructure.", icon: Users, count: "50+", metric: "Enterprise Clients" },
  { slug: "open-source", name: "Open Source", desc: "We don't just consume OSS; we contribute back. View our public repositories, NPM packages, and framework contributions.", icon: Terminal, count: "30+", metric: "Public Repos" },
];

const metrics = [
  { label: "Projects Delivered", value: "120+", icon: Briefcase },
  { label: "Uptime Average", value: "99.97%", icon: Activity },
  { label: "Engineering Team", value: "45+", icon: Users },
  { label: "Client NPS", value: "74", icon: Star },
];

export default function WorkIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* ════════════════════════════════════════ */}
      {/*  HERO — split: text + enterprise dashboard */}
      {/* ════════════════════════════════════════ */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: 'var(--bg-section)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '0%', width: '55%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '0%', width: '30%', height: '40%', background: 'radial-gradient(circle, rgba(99,102,241,0.02) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}>
            {/* ── Left ── */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.35rem 0.9rem 0.35rem 0.6rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px rgba(37,99,235,0.4)' }} />
                Our Work
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4.75rem)',
                fontWeight: 800, color: 'var(--text-primary)',
                letterSpacing: '-0.04em', lineHeight: 1.02,
                marginBottom: '1.25rem',
              }}>
                We ship{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>production code.</span>
              </h1>
              <p style={{
                fontSize: '1.05rem', color: 'var(--text-secondary)',
                lineHeight: 1.75, marginBottom: '2rem', maxWidth: '520px',
              }}>
                Talk is cheap. We measure our success by the stability, performance, and aesthetic quality of the software we push to production.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href="#showcase" style={{
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
                  View featured work <ArrowRight size={16} />
                </a>
                <a href="/work/featured-projects" style={{
                  padding: '0.85rem 2rem',
                  background: 'transparent',
                  color: 'var(--text-primary)', borderRadius: '10px', fontWeight: 600,
                  fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  border: '1px solid #E2E8F0',
                  transition: 'all 200ms ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.background = 'rgba(37,99,235,0.04)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = 'transparent'; }}
                >
                  Browse all projects <ArrowUpRight size={16} />
                </a>
              </div>
              {/* Success metrics row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {metrics.map((m, i) => (
                  <div key={i} style={{
                    padding: '0.85rem 0.75rem',
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{m.value}</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Enterprise Dashboard Mockup ── */}
            <div className="work-hero-illustration" style={{ position: 'relative', height: '500px' }}>
              {/* Connection lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.25, pointerEvents: 'none' }} viewBox="0 0 440 500" fill="none">
                <path d="M100 60 L220 60 L220 160" stroke="rgba(37,99,235,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M340 200 L340 320 L240 320" stroke="rgba(37,99,235,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M60 280 L60 380 L180 380" stroke="rgba(99,102,241,0.08)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="220" cy="160" r="3" fill="rgba(37,99,235,0.3)" />
                <circle cx="240" cy="320" r="3" fill="rgba(37,99,235,0.3)" />
              </svg>

              {/* Panel 1 — Deployment Timeline */}
              <div style={{
                position: 'absolute', top: '0px', left: '5px',
                width: '195px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px',
                border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Deploy Timeline</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {[
                    { env: 'Production', status: '✓', time: '2m ago' },
                    { env: 'Staging', status: '✓', time: '15m ago' },
                    { env: 'Review', status: '⚡', time: '1h ago' },
                  ].map((d, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span style={{ color: d.status === '✓' ? '#22C55E' : '#F59E0B' }}>{d.status}</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{d.env}</span>
                      </div>
                      <span style={{ color: 'var(--text-tertiary)' }}>{d.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 2 — Git Commits */}
              <div style={{
                position: 'absolute', top: '70px', right: '5px',
                width: '185px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px',
                border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Recent Commits</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {[
                    { msg: 'fix: checkout overflow', author: 'AR', branch: 'main' },
                    { msg: 'feat: cart optimistic UI', author: 'SK', branch: 'feat/cart' },
                    { msg: 'chore: deps upgrade', author: 'AR', branch: 'main' },
                  ].map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '4px 6px', borderRadius: '6px', background: i === 0 ? 'rgba(37,99,235,0.04)' : 'transparent' }}>
                      <div style={{ width: '14px', height: '14px', borderRadius: '4px', background: i === 0 ? '#2563EB' : 'rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.45rem', fontWeight: 700, color: i === 0 ? '#FFFFFF' : '#2563EB', flexShrink: 0 }}>{c.author}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '0.6rem', color: 'var(--text-primary)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.msg}</div>
                        <div style={{ fontSize: '0.5rem', color: 'var(--text-tertiary)' }}>{c.branch}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 3 — Performance Graph */}
              <div style={{
                position: 'absolute', top: '200px', left: '15px',
                width: '160px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px',
                border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Performance</div>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '32px' }}>
                  {[25, 45, 30, 55, 40, 60, 75].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px', background: i >= 5 ? 'linear-gradient(180deg, #22C55E, #16A34A)' : '#E2E8F0' }} />
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px', fontSize: '0.5rem', color: 'var(--text-tertiary)' }}>
                  <span>Mon</span>
                  <span style={{ color: '#22C55E', fontWeight: 600 }}>+24%</span>
                </div>
              </div>

              {/* Panel 4 — API Status */}
              <div style={{
                position: 'absolute', top: '210px', right: '30px',
                width: '140px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px',
                border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>API Status</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {[
                    { name: 'GraphQL', status: '99.9%' },
                    { name: 'REST', status: '99.7%' },
                    { name: 'WebSocket', status: '99.5%' },
                  ].map((a, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>{a.name}</span>
                      <span style={{ color: '#22C55E', fontWeight: 600, fontFamily: 'monospace' }}>{a.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 5 — Architecture Flow */}
              <div style={{
                position: 'absolute', bottom: '15px', left: '50%',
                transform: 'translateX(-50%)',
                width: '220px', padding: '14px',
                background: 'rgba(15,23,42,0.08)',
                borderRadius: '14px',
                border: '1px solid rgba(226,232,240,0.4)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Architecture</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                  {[
                    { label: 'CDN', color: '#3B82F6' },
                    { label: 'API', color: '#8B5CF6' },
                    { label: 'Svc', color: '#22C55E' },
                    { label: 'DB', color: '#F59E0B' },
                  ].map((a, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: `${a.color}12`, border: `1px solid ${a.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.45rem', fontWeight: 700, color: a.color }}>{a.label}</div>
                      {i < 3 && <div style={{ width: '8px', height: '1px', background: '#E2E8F0' }} />}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6px', gap: '4px' }}>
                  {['CDN', 'API Gateway', 'Microservices', 'Postgres'].map((l, i) => (
                    <span key={i} style={{ fontSize: '0.5rem', color: 'var(--text-tertiary)', background: '#FFFFFF', padding: '1px 4px', borderRadius: '3px' }}>{l}</span>
                  ))}
                </div>
              </div>

              {/* Geometric accents */}
              <div style={{ position: 'absolute', top: '50%', left: '-5px', width: '20px', height: '20px', borderRadius: '6px', border: '1px solid rgba(37,99,235,0.08)' }} />
              <div style={{ position: 'absolute', bottom: '40%', right: '0', width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(37,99,235,0.04)', transform: 'rotate(45deg)' }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .work-hero-illustration { display: none; } }
          @media (max-width: 640px) {
            .work-hero-illustration { display: none; }
            .metrics-grid { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  FEATURED SHOWCASE — premium case study  */}
      {/* ════════════════════════════════════════ */}
      <section id="showcase" style={{ padding: '0 0 var(--spacing-section)', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div>
            <Link href="/work/featured-projects" style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'var(--dark)',
                borderRadius: '24px',
                padding: '0',
                display: 'grid',
                gridTemplateColumns: '1.1fr 0.9fr',
                transition: 'all 200ms ease-out',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '480px',
              }} className="featured-card">
                {/* Gradient background */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', right: '-5%', top: '-10%', width: '50%', height: '120%',
                  background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }} />

                {/* ── Left Content ── */}
                <div style={{ position: 'relative', zIndex: 1, padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: 'rgba(37,99,235,0.12)',
                    color: '#60A5FA', padding: '0.3rem 0.8rem',
                    borderRadius: '100px', fontSize: '0.65rem',
                    fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.06em', marginBottom: '1.25rem', alignSelf: 'flex-start',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#60A5FA' }} />
                    Featured Deployment
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                    Global E-Commerce Platform Rewrite
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '480px' }}>
                    Re-architecting a legacy monolithic storefront into a headless Next.js & Shopify Plus architecture, reducing global Time-To-Interactive (TTI) by 64%.
                  </p>
                  {/* Tech stack badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {['Next.js', 'Shopify Plus', 'GraphQL', 'AWS', 'Terraform'].map(t => (
                      <span key={t} style={{ padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.04)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.04)' }}>{t}</span>
                    ))}
                  </div>
                  {/* Project stats */}
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.75rem' }}>
                    {[
                      { label: 'Duration', value: '12 Months' },
                      { label: 'Team', value: '8 Engineers' },
                      { label: 'TTI Reduction', value: '64%' },
                      { label: 'Uptime', value: '99.97%' },
                    ].map((s, i) => (
                      <div key={i}>
                        <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF' }}>{s.value}</div>
                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#60A5FA', fontWeight: 600, fontSize: '0.9rem' }}>
                    View Portfolio <ArrowRight size={16} />
                  </div>
                </div>

                {/* ── Right: Dashboard Preview ── */}
                <div style={{
                  position: 'relative', zIndex: 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '32px',
                  overflow: 'hidden',
                }}>
                  {/* Laptop mockup */}
                  <div style={{
                    width: '100%',
                    maxWidth: '380px',
                    background: '#1E293B',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.04)',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}>
                    {/* Browser bar */}
                    <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (<div key={c} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c }} />))}
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: '6px', height: '18px', marginLeft: '4px' }} />
                    </div>
                    {/* Screen content */}
                    <div style={{ padding: '16px' }}>
                      {/* Dashboard header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                        <div>
                          <div style={{ height: '6px', width: '80px', borderRadius: '3px', background: 'rgba(255,255,255,0.08)', marginBottom: '4px' }} />
                          <div style={{ height: '4px', width: '50px', borderRadius: '2px', background: 'rgba(255,255,255,0.04)' }} />
                        </div>
                        <div style={{ height: '20px', width: '60px', borderRadius: '6px', background: 'rgba(37,99,235,0.2)' }} />
                      </div>
                      {/* KPI row */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginBottom: '14px' }}>
                        {[['8.2K', 'Visitors'], ['$24.5K', 'Revenue'], ['12.4%', 'Conv.']].map((k, i) => (
                          <div key={i} style={{ padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                            <div style={{ height: '8px', width: '30px', borderRadius: '4px', background: i === 2 ? 'rgba(37,99,235,0.3)' : 'rgba(255,255,255,0.08)', marginBottom: '3px' }} />
                            <div style={{ height: '4px', width: '24px', borderRadius: '2px', background: 'rgba(255,255,255,0.04)' }} />
                          </div>
                        ))}
                      </div>
                      {/* Chart area */}
                      <div style={{ height: '60px', display: 'flex', gap: '3px', alignItems: 'flex-end', marginBottom: '12px' }}>
                        {[30, 50, 35, 60, 45, 70, 85].map((h, i) => (
                          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px', background: i >= 5 ? 'linear-gradient(180deg, #22C55E, #16A34A)' : 'rgba(255,255,255,0.06)' }} />
                        ))}
                      </div>
                      {/* Bottom row */}
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {[40, 60, 35].map((w, i) => (
                          <div key={i} style={{ flex: 1, height: '20px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)' }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Code snippet floating overlay */}
                  <div style={{
                    position: 'absolute', bottom: '24px', right: '24px',
                    padding: '10px 12px',
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.03)',
                    fontFamily: 'monospace', fontSize: '0.5rem',
                    color: 'rgba(255,255,255,0.3)',
                    lineHeight: 1.8,
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}>
                    <div><span style={{ color: '#F472B6' }}>export</span> <span style={{ color: '#60A5FA' }}>default</span> <span style={{ color: '#FBBF24' }}>function</span> App() &#123;</div>
                    <div>&nbsp;&nbsp;<span style={{ color: '#22C55E' }}>return</span> <span style={{ color: '#60A5FA' }}>&lt;Shop</span> /&gt;</div>
                    <div>&#125;</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  WORK CATEGORIES — bento grid            */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF', position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '20%', left: '-5%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(37,99,235,0.02) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)' }} />
              Browse Portfolio
            </div>
            <h2 style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: 0 }}>
              Explore our work
            </h2>
          </div>

          <style>{`
            .work-bento {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1.25rem;
            }
            .work-bento .spotlight-card {
              grid-column: 1 / 3;
              grid-row: 1 / 3;
              padding: 36px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              border-radius: 24px;
              display: flex;
              flex-direction: column;
              text-decoration: none;
              color: inherit;
              transition: all 200ms ease-out;
              position: relative;
              overflow: hidden;
              height: 100%;
            }
            .work-bento .spotlight-card:hover {
              border-color: #2563EB;
              box-shadow: 0 8px 24px rgba(37,99,235,0.06);
              transform: translateY(-2px);
            }
            .work-bento .side-card {
              padding: 28px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              border-radius: 24px;
              display: flex;
              flex-direction: column;
              text-decoration: none;
              color: inherit;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .work-bento .side-card:hover {
              border-color: #2563EB;
              box-shadow: 0 8px 24px rgba(37,99,235,0.06);
              transform: translateY(-2px);
            }
            @media (max-width: 1024px) {
              .work-bento { grid-template-columns: repeat(2, 1fr); }
              .work-bento .spotlight-card { grid-column: 1 / -1; grid-row: auto; }
              .work-bento .side-card { grid-column: auto; }
            }
            @media (max-width: 640px) {
              .work-bento { grid-template-columns: 1fr; }
              .work-bento .spotlight-card { grid-column: 1; grid-row: auto; }
              .work-bento .side-card { grid-column: 1; }
            }
          `}</style>

          <div className="work-bento">
            {workList.map((wk, i) => {
              const Icon = wk.icon;

              /* ── Spotlight: Featured Projects (index 0) ── */
              if (i === 0) {
                return (
                  <Link key={wk.slug} href={`/work/${wk.slug}`} className="spotlight-card">
                    <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={24} color="var(--primary)" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{wk.name}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: 1.6, margin: 0 }}>{wk.desc}</p>
                      </div>
                    </div>
                    {/* Dashboard preview illustration */}
                    <div style={{
                      position: 'relative', zIndex: 1,
                      background: '#FFFFFF',
                      borderRadius: '14px',
                      border: '1px solid #E2E8F0',
                      padding: '16px',
                      marginBottom: '1.25rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                    }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '12px' }}>
                        {[['$124K', 'Revenue'], ['8.4K', 'Users'], ['64%', 'Growth'], ['12', 'Apps']].map((stat, j) => (
                          <div key={j} style={{ padding: '8px', background: '#F8FAFC', borderRadius: '8px' }}>
                            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-primary)' }}>{stat[0]}</div>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>{stat[1]}</div>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '36px' }}>
                        {[25, 50, 35, 65, 45, 70, 55, 80].map((h, j) => (
                          <div key={j} style={{ flex: 1, height: `${h}%`, borderRadius: '3px', background: j >= 6 ? 'linear-gradient(180deg, #2563EB, #1D4ED8)' : '#E2E8F0' }} />
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1, marginTop: 'auto' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {['Case Studies', 'UI Gallery', 'Dashboards'].map(t => (
                          <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#2563EB', background: 'rgba(37,99,235,0.05)', borderRadius: '100px' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', flexShrink: 0 }}>
                        View details <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              }

              /* ── Side cards: Our Clients + Open Source ── */
              return (
                <Link key={wk.slug} href={`/work/${wk.slug}`} className="side-card">
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: i === 1 ? 'rgba(99,102,241,0.06)' : 'rgba(34,197,94,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Icon size={20} color={i === 1 ? '#6366F1' : '#22C55E'} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>{wk.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>{wk.desc}</p>
                  {/* Stat display */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', padding: '10px 12px', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                    <div style={{ fontWeight: 800, fontSize: '1.15rem', color: i === 1 ? '#6366F1' : '#22C55E', letterSpacing: '-0.02em' }}>{wk.count}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.03em' }}>{wk.metric}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                    View details <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



