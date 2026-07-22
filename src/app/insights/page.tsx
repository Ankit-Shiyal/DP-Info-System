"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  ArrowRight, BookOpen, Presentation, FileText, Newspaper, Lightbulb,
  Search, PlayCircle, ArrowUpRight, BookMarked, Clock, Layers,
} from "lucide-react";
import Link from "next/link";

const insightList = [
  { slug: "case-studies", name: "Case Studies", desc: "Detailed examinations of how we solved complex business problems for our clients, complete with metrics and technical choices.", icon: FileText, count: "14", sub: "articles" },
  { slug: "tech-trends", name: "Tech Trends", desc: "Our perspective on the hype cycle. What's actually ready for production, and what should stay in the lab.", icon: Lightbulb, count: "22", sub: "articles" },
  { slug: "research-reports", name: "Research Reports", desc: "Proprietary data and surveys exploring industry benchmarks, engineering velocity, and security postures.", icon: Search, count: "8", sub: "reports" },
  { slug: "webinars", name: "Webinars & Events", desc: "Live and on-demand sessions with our Principal Engineers discussing system design and operational excellence.", icon: PlayCircle, count: "16", sub: "episodes" },
  { slug: "news-press", name: "News & Press", desc: "Company announcements, open-source contributions, and media coverage of Acriotech.", icon: Newspaper, count: "30+", sub: "posts" },
];

export default function InsightsIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* ════════════════════════════════════════ */}
      {/*  HERO — editorial split                 */}
      {/* ════════════════════════════════════════ */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: 'var(--bg-section)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '0%', width: '50%', height: '70%', background: 'radial-gradient(circle, rgba(14,165,233,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '0%', width: '30%', height: '40%', background: 'radial-gradient(circle, rgba(6,182,212,0.02) 0%, transparent 70%)', pointerEvents: 'none' }} />

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
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: '#06B6D4',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem',
                background: 'rgba(6,182,212,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(6,182,212,0.08)',
              }}>
                <BookMarked size={12} color="#06B6D4" />
                Knowledge Base
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4.75rem)',
                fontWeight: 800, color: 'var(--text-primary)',
                letterSpacing: '-0.04em', lineHeight: 1.02,
                marginBottom: '1.25rem',
              }}>
                We write down{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>how we think.</span>
              </h1>
              <p style={{
                fontSize: '1.05rem', color: 'var(--text-secondary)',
                lineHeight: 1.75, marginBottom: '2rem', maxWidth: '540px',
              }}>
                Transparency is our default. We open-source our architectural decisions, publish our failures, and share the exact methodologies we use to build enterprise software.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="#featured-resource" style={{
                  padding: '0.85rem 2rem',
                  background: 'linear-gradient(135deg, #06B6D4, #0891B2)',
                  color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                  fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  transition: 'all 200ms ease',
                  boxShadow: '0 4px 14px rgba(6,182,212,0.25)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(6,182,212,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(6,182,212,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Featured reading <ArrowRight size={16} />
                </a>
                <a href="#categories" style={{
                  padding: '0.85rem 2rem',
                  background: 'transparent',
                  color: 'var(--text-primary)', borderRadius: '10px', fontWeight: 600,
                  fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  border: '1px solid #E2E8F0',
                  transition: 'all 200ms ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#06B6D4'; e.currentTarget.style.background = 'rgba(6,182,212,0.04)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = 'transparent'; }}
                >
                  Browse categories <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* ── Right: Engineering Notebook Illustration ── */}
            <div className="insights-hero-ill" style={{ position: 'relative', height: '440px' }}>
              {/* Notebook / publication composition */}
              {/* Document 1 — Main paper */}
              <div style={{
                position: 'absolute', top: '10px', left: '15px',
                width: '200px', padding: '18px',
                background: '#FFFFFF',
                borderRadius: '14px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 8px 28px rgba(0,0,0,0.04)',
                transform: 'rotate(-2deg)',
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
                  {[1, 2, 3].map(i => (
                    <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === 1 ? '#06B6D4' : '#E2E8F0' }} />
                  ))}
                </div>
                <div style={{ height: '6px', width: '70%', borderRadius: '3px', background: '#F1F5F9', marginBottom: '6px' }} />
                <div style={{ height: '4px', width: '45%', borderRadius: '2px', background: '#F1F5F9', marginBottom: '10px' }} />
                <div style={{ display: 'flex', gap: '4px', height: '24px', alignItems: 'flex-end' }}>
                  {[30, 50, 35, 60, 45].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '2px', background: i >= 3 ? '#06B6D4' : '#F1F5F9' }} />
                  ))}
                </div>
              </div>

              {/* Document 2 — Code snippet paper */}
              <div style={{
                position: 'absolute', top: '100px', right: '5px',
                width: '180px', padding: '14px',
                background: '#0F172A',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.04)',
                transform: 'rotate(3deg)',
                fontFamily: 'monospace', fontSize: '0.55rem',
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.8,
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                    <div key={c} style={{ width: '5px', height: '5px', borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div><span style={{ color: '#22C55E' }}>// microservices.ts</span></div>
                <div><span style={{ color: '#F472B6' }}>const</span> shouldSplit = <span style={{ color: '#60A5FA' }}>assess</span>(&#123;</div>
                <div>&nbsp;&nbsp;<span style={{ color: '#22C55E' }}>teamSize</span>: <span style={{ color: '#FBBF24' }}>8</span>,</div>
                <div>&nbsp;&nbsp;<span style={{ color: '#22C55E' }}>coupling</span>: <span style={{ color: '#FBBF24' }}>0.7</span></div>
                <div>&#125;);</div>
              </div>

              {/* Document 3 — Architecture flow paper */}
              <div style={{
                position: 'absolute', bottom: '50px', left: '30px',
                width: '155px', padding: '14px',
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                transform: 'rotate(-1deg)',
              }}>
                <div style={{ fontSize: '0.55rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Architecture</div>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {['UI', 'API', 'DB'].map((l, i) => (
                    <div key={i} style={{ flex: 1, padding: '4px', borderRadius: '4px', background: i === 1 ? 'rgba(6,182,212,0.08)' : '#F8FAFC', fontSize: '0.5rem', fontWeight: 600, color: i === 1 ? '#06B6D4' : '#94A3B8', textAlign: 'center', border: i === 1 ? '1px solid rgba(6,182,212,0.15)' : '1px solid #E2E8F0' }}>{l}</div>
                  ))}
                </div>
              </div>

              {/* Document 4 — Notebook paper overlay */}
              <div style={{
                position: 'absolute', bottom: '20px', right: '15px',
                width: '145px', padding: '12px',
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                transform: 'rotate(2deg)',
              }}>
                <div style={{ fontSize: '0.5rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Reading Time</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={12} color="#06B6D4" />
                  <span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600 }}>12 min read</span>
                </div>
              </div>

              {/* Geometric accents */}
              <div style={{ position: 'absolute', top: '45%', left: '-8px', width: '16px', height: '16px', borderRadius: '4px', border: '1px solid rgba(6,182,212,0.08)' }} />
              <div style={{ position: 'absolute', top: '30%', right: '-5px', width: '10px', height: '10px', borderRadius: '2px', background: 'rgba(6,182,212,0.04)', transform: 'rotate(45deg)' }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .insights-hero-ill { display: none; } }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  FEATURED RESOURCE — editorial showcase   */}
      {/* ════════════════════════════════════════ */}
      <section id="featured-resource" style={{ padding: '0 0 var(--spacing-section)', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div>
            <Link href="/insights/whitepapers" style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#0F172A',
                borderRadius: '24px',
                padding: '0',
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                transition: 'all 200ms ease-out',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '420px',
              }} className="featured-card">
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', right: '-5%', top: '-15%', width: '50%', height: '130%', background: 'radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

                {/* ── Left Content ── */}
                <div style={{ position: 'relative', zIndex: 1, padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: 'rgba(6,182,212,0.1)',
                    color: '#22D3EE', padding: '0.3rem 0.8rem',
                    borderRadius: '100px', fontSize: '0.6rem',
                    fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.06em', marginBottom: '1rem', alignSelf: 'flex-start',
                  }}>
                    <Layers size={12} color="#22D3EE" />
                    New Whitepaper
                  </div>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    The Pragmatic Guide to Microservices in 2026
                  </h2>
                  {/* Article metadata */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>
                      <Clock size={11} /> 12 min read
                    </div>
                    <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>Published Mar 2026</div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '480px' }}>
                    Stop breaking apart your monolith just because Netflix did it. A data-driven analysis of when distributed systems actually make financial sense.
                  </p>
                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                    {['Microservices', 'Distributed Systems', 'Architecture', 'Scalability'].map(t => (
                      <span key={t} style={{ padding: '0.2rem 0.55rem', fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.03)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.04)' }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#22D3EE', fontWeight: 600, fontSize: '0.9rem' }}>
                    Read the Whitepaper <ArrowRight size={16} />
                  </div>
                </div>

                {/* ── Right: Notebook / Architecture Preview ── */}
                <div style={{
                  position: 'relative', zIndex: 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  padding: '32px',
                  overflow: 'hidden',
                }}>
                  {/* Document preview card */}
                  <div style={{
                    width: '100%',
                    maxWidth: '320px',
                    background: '#1E293B',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.04)',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}>
                    {/* Header */}
                    <div style={{ padding: '12px 14px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (<div key={c} style={{ width: '7px', height: '7px', borderRadius: '50%', background: c }} />))}
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: '4px', height: '14px', marginLeft: '2px' }} />
                    </div>
                    {/* Document content */}
                    <div style={{ padding: '16px' }}>
                      {/* Title line */}
                      <div style={{ height: '7px', width: '75%', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', marginBottom: '8px' }} />
                      <div style={{ height: '5px', width: '50%', borderRadius: '2px', background: 'rgba(255,255,255,0.03)', marginBottom: '16px' }} />
                      {/* Body lines */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '16px' }}>
                        {[85, 70, 90, 55, 80, 65].map((w, i) => (
                          <div key={i} style={{ height: '4px', width: `${w}%`, borderRadius: '2px', background: i === 2 ? 'rgba(6,182,212,0.15)' : 'rgba(255,255,255,0.04)' }} />
                        ))}
                      </div>
                      {/* Architecture mini diagram */}
                      <div style={{ display: 'flex', gap: '4px', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                        {[
                          { label: 'UI', color: '#06B6D4' },
                          { label: 'API', color: '#3B82F6' },
                          { label: 'Svc', color: '#22C55E' },
                          { label: 'DB', color: '#F59E0B' },
                        ].map((n, i) => (
                          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                            <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: `${n.color}08`, border: `1px solid ${n.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.45rem', fontWeight: 700, color: n.color }}>{n.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Floating tag overlay */}
                  <div style={{
                    position: 'absolute', top: '28px', right: '28px',
                    padding: '6px 10px',
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.03)',
                    fontSize: '0.55rem', fontWeight: 600,
                    color: 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                  }}>
                    <span style={{ color: '#22C55E' }}>●</span> Downloadable PDF
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  RESOURCE CATEGORIES — editorial bento   */}
      {/* ════════════════════════════════════════ */}
      <section id="categories" style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(6,182,212,0.02) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: '#06B6D4',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'rgba(6,182,212,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(6,182,212,0.08)',
            }}>
              <BookOpen size={12} color="#06B6D4" />
              Library
            </div>
            <h2 style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', margin: 0 }}>
              Browse by category
            </h2>
          </div>

          <style>{`
            .insight-bento {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1.25rem;
            }
            .insight-bento .spotlight {
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
            .insight-bento .spotlight:hover {
              border-color: #06B6D4;
              box-shadow: 0 8px 24px rgba(6,182,212,0.06);
              transform: translateY(-2px);
            }
            .insight-bento .pill-card {
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
            .insight-bento .pill-card:hover {
              border-color: #06B6D4;
              box-shadow: 0 8px 24px rgba(6,182,212,0.06);
              transform: translateY(-2px);
            }
            .insight-bento .wide-card {
              grid-column: 1 / 3;
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
            .insight-bento .wide-card:hover {
              border-color: #06B6D4;
              box-shadow: 0 8px 24px rgba(6,182,212,0.06);
              transform: translateY(-2px);
            }
            .insight-bento .full-card {
              grid-column: 1 / -1;
              padding: 28px 36px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              border-radius: 24px;
              display: grid;
              grid-template-columns: auto 1fr auto;
              gap: 1.25rem;
              align-items: center;
              text-decoration: none;
              color: inherit;
              transition: all 200ms ease-out;
            }
            .insight-bento .full-card:hover {
              border-color: #06B6D4;
              box-shadow: 0 8px 24px rgba(6,182,212,0.06);
              transform: translateY(-2px);
            }
            @media (max-width: 1024px) {
              .insight-bento { grid-template-columns: repeat(2, 1fr); }
              .insight-bento .spotlight { grid-column: 1 / -1; grid-row: auto; }
              .insight-bento .wide-card { grid-column: 1 / -1; }
              .insight-bento .full-card { grid-column: 1 / -1; }
            }
            @media (max-width: 640px) {
              .insight-bento { grid-template-columns: 1fr; }
              .insight-bento .spotlight { grid-column: 1; grid-row: auto; padding: 28px; }
              .insight-bento .wide-card { grid-column: 1; }
              .insight-bento .full-card { grid-column: 1; grid-template-columns: 1fr; }
            }
          `}</style>

          <div className="insight-bento">
            {insightList.map((cat, i) => {
              const Icon = cat.icon;

              /* ── Spotlight: Case Studies (index 0) — 2×2 ── */
              if (i === 0) {
                return (
                  <Link key={cat.slug} href={`/insights/${cat.slug}`} className="spotlight">
                    <div style={{ position: 'absolute', top: '-25%', right: '-10%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(6,182,212,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={24} color="#06B6D4" />
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem', position: 'relative', zIndex: 1 }}>{cat.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', lineHeight: 1.6, flex: 1, marginBottom: '1rem', position: 'relative', zIndex: 1 }}>{cat.desc}</p>
                    {/* Mini preview */}
                    <div style={{ position: 'relative', zIndex: 1, background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '14px', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '8px' }}>
                        {['E-Commerce', 'Fintech', 'Healthcare'].map(t => (
                          <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.55rem', fontWeight: 600, color: '#06B6D4', background: 'rgba(6,182,212,0.04)', borderRadius: '100px' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '28px' }}>
                        {[25, 50, 35, 65, 45, 70, 55, 80].map((h, j) => (
                          <div key={j} style={{ flex: 1, height: `${h}%`, borderRadius: '2px', background: j >= 5 ? 'linear-gradient(180deg, #06B6D4, #0891B2)' : '#F1F5F9' }} />
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#06B6D4', fontWeight: 600, fontSize: '0.85rem' }}>
                        Browse category <ArrowRight size={14} />
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>{cat.count} {cat.sub}</span>
                    </div>
                  </Link>
                );
              }

              /* ── Right pillar: Tech Trends (index 1) ── */
              if (i === 1) {
                return (
                  <Link key={cat.slug} href={`/insights/${cat.slug}`} className="pill-card">
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(245,158,11,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="#F59E0B" />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{cat.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.55, flex: 1, marginBottom: '1rem' }}>{cat.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#06B6D4', fontWeight: 600, fontSize: '0.8rem' }}>
                        Browse <ArrowRight size={13} />
                      </div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>{cat.count} {cat.sub}</span>
                    </div>
                  </Link>
                );
              }

              /* ── Wide + pill: Research Reports (wide, index 2) + Webinars (pill col 3, index 3) ── */
              if (i === 2) {
                return (
                  <Link key={cat.slug} href={`/insights/${cat.slug}`} className="wide-card">
                    <div style={{ display: 'grid', gridTemplateColumns: '42px 1fr auto', gap: '1rem', alignItems: 'center', height: '100%' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(124,58,237,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={20} color="#7C3AED" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{cat.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{cat.desc}</p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem', flexShrink: 0 }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>{cat.count}</span>
                        <span style={{ fontSize: '0.55rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{cat.sub}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#06B6D4', fontWeight: 600, fontSize: '0.8rem', marginTop: '0.75rem' }}>
                      Browse reports <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }
              if (i === 3) {
                return (
                  <Link key={cat.slug} href={`/insights/${cat.slug}`} className="pill-card">
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(34,197,94,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="#22C55E" />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{cat.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.55, flex: 1, marginBottom: '1rem' }}>{cat.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#06B6D4', fontWeight: 600, fontSize: '0.8rem' }}>
                        Browse <ArrowRight size={13} />
                      </div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>{cat.count} {cat.sub}</span>
                    </div>
                  </Link>
                );
              }

              /* ── Full-width: News & Press (index 4) ── */
              if (i === 4) {
                return (
                  <Link key={cat.slug} href={`/insights/${cat.slug}`} className="full-card">
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(236,72,153,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={20} color="#EC4899" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.1rem' }}>{cat.name}</h3>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.5, margin: 0 }}>{cat.desc}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#EC4899' }}>{cat.count}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{cat.sub}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#06B6D4', fontWeight: 600, fontSize: '0.8rem' }}>
                        Browse <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



