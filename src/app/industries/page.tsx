"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  ArrowRight, Factory, Stethoscope, GraduationCap, Truck, ShoppingBag,
  Landmark, UtensilsCrossed, Building, Rocket, ArrowUpRight,
  CheckCircle, Shield, BarChart3, Activity, Layers,
} from "lucide-react";
import Link from "next/link";

const industryList = [
  { slug: "manufacturing", name: "Manufacturing", desc: "IIoT integrations, supply chain visibility, and predictive maintenance for heavy industry.", icon: Factory, tags: ["IIoT", "SCADA", "Predictive"], stat: "12+", statLabel: "Factory Deployments" },
  { slug: "healthcare", name: "Healthcare", desc: "HIPAA-compliant patient portals, telehealth integrations, and clinical data pipelines.", icon: Stethoscope, tags: ["HIPAA", "FHIR", "Telehealth"], stat: "8+", statLabel: "Health Systems" },
  { slug: "financial-services", name: "Financial Services", desc: "High-throughput transaction systems, PCI-DSS compliance, and fintech infrastructure.", icon: Landmark, tags: ["PCI-DSS", "Fintech", "Real-Time"], stat: "$2B+", statLabel: "Transaction Volume" },
  { slug: "logistics", name: "Logistics & Supply Chain", desc: "Real-time routing engines, inventory management, and warehouse orchestration.", icon: Truck, tags: ["Routing", "WMS", "IoT"], stat: "15+", statLabel: "Logistics Partners" },
  { slug: "retail", name: "Retail & E-Commerce", desc: "Omnichannel inventory sync, headless commerce, and high-conversion storefronts.", icon: ShoppingBag, tags: ["Headless", "Omnichannel", "PIM"], stat: "30+", statLabel: "Storefronts" },
  { slug: "education", name: "Education", desc: "Scalable LMS platforms, student portals, and virtual classroom infrastructure.", icon: GraduationCap, tags: ["LMS", "LTI", "Accessibility"], stat: "500K+", statLabel: "Learners" },
  { slug: "hospitality", name: "Hospitality", desc: "Property management systems, dynamic pricing engines, and guest experience apps.", icon: UtensilsCrossed, tags: ["PMS", "Dynamic Pricing", "CRM"], stat: "200+", statLabel: "Properties" },
  { slug: "government", name: "Government & Public Sector", desc: "FedRAMP-ready architectures, public record digitization, and secure citizen portals.", icon: Building, tags: ["FedRAMP", "Zero Trust", "Digital"], stat: "6+", statLabel: "Agency Clients" },
  { slug: "startups", name: "High-Growth Startups", desc: "Rapid MVP development, technical due diligence, and scalable Series A architectures.", icon: Rocket, tags: ["MVP", "Series A", "Scale"], stat: "20+", statLabel: "Startups Backed" },
];

const heroStats = [
  { value: "9", label: "Industries Served" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "99.97%", label: "Avg. Uptime" },
  { value: "74", label: "Net Promoter Score" },
];

export default function IndustriesIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* ════════════════════════════════════════ */}
      {/*  HERO — split: text + enterprise dashboard */}
      {/* ════════════════════════════════════════ */}
      <section className="dark-section" style={{
        paddingTop: 'var(--spacing-section)',
        paddingBottom: 'var(--spacing-section)',
        background: 'var(--dark)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 30% 45%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 30% 45%, black, transparent)',
        }} />
        <div style={{ position: 'absolute', top: '-10%', right: '0%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '5%', width: '25%', height: '40%', background: 'radial-gradient(circle, rgba(6,182,212,0.03) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

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
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem',
                background: 'rgba(6,182,212,0.06)', padding: '0.35rem 0.9rem 0.35rem 0.6rem',
                borderRadius: '100px', border: '1px solid rgba(6,182,212,0.08)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06B6D4', boxShadow: '0 0 10px rgba(6,182,212,0.4)' }} />
                Domain Expertise
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4.75rem)',
                fontWeight: 800, color: '#FFFFFF',
                letterSpacing: '-0.04em', lineHeight: 1.02,
                marginBottom: '1.25rem',
              }}>
                Engineering decisions change when{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #A78BFA, #06B6D4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>the work changes.</span>
              </h1>
              <p style={{
                fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.75, marginBottom: '2rem', maxWidth: '540px',
              }}>
                Acriotech studies the workflows, risk tolerance, data practices, and operational realities of your specific industry before recommending how a system should be built.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href="#sectors" style={{
                  padding: '0.85rem 2rem',
                  background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                  color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                  fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  transition: 'all 200ms ease',
                  boxShadow: '0 4px 14px rgba(124,58,237,0.25)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(124,58,237,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Explore sectors <ArrowRight size={16} />
                </a>
                <a href="/contact-us" style={{
                  padding: '0.85rem 2rem',
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
                  Discuss your industry <ArrowUpRight size={16} />
                </a>
              </div>
              {/* Enterprise stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {heroStats.map((s, i) => (
                  <div key={i} style={{
                    padding: '0.75rem 0.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.04)',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Enterprise Dashboard ── */}
            <div className="ind-hero-illustration" style={{ position: 'relative', height: '500px' }}>
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 440 500" fill="none">
                <path d="M80 40 L200 40 L200 140" stroke="rgba(124,58,237,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M360 200 L360 340 L240 340" stroke="rgba(124,58,237,0.1)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M50 300 L50 400 L170 400" stroke="rgba(6,182,212,0.08)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="200" cy="140" r="3" fill="rgba(124,58,237,0.3)" />
                <circle cx="240" cy="340" r="3" fill="rgba(124,58,237,0.3)" />
              </svg>

              {/* Panel 1 — Industry KPIs */}
              <div style={{
                position: 'absolute', top: '5px', left: '0',
                width: '190px', padding: '14px',
                background: 'rgba(15,23,42,0.7)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Industry KPIs</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                  {[['$2.4B', 'Processed'], ['99.97%', 'Uptime'], ['12ms', 'Latency'], ['100%', 'Compliant']].map((k, i) => (
                    <div key={i} style={{ padding: '6px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#A78BFA' }}>{k[0]}</div>
                      <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{k[1]}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 2 — Compliance Status */}
              <div style={{
                position: 'absolute', top: '100px', right: '5px',
                width: '170px', padding: '14px',
                background: 'rgba(15,23,42,0.7)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Compliance</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {[{ name: 'SOC 2', status: '✓' }, { name: 'HIPAA', status: '✓' }, { name: 'PCI-DSS', status: '✓' }, { name: 'FedRAMP', status: 'In Progress' }].map((c, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6rem' }}>
                      <span style={{ color: 'rgba(255,255,255,0.5)' }}>{c.name}</span>
                      <span style={{
                        color: c.status === '✓' ? '#22C55E' : '#F59E0B',
                        fontWeight: 600, fontSize: '0.55rem',
                        background: c.status === '✓' ? 'rgba(34,197,94,0.08)' : 'rgba(245,158,11,0.08)',
                        padding: '1px 6px', borderRadius: '4px',
                      }}>{c.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 3 — Security Score */}
              <div style={{
                position: 'absolute', top: '200px', left: '10px',
                width: '150px', padding: '14px',
                background: 'rgba(15,23,42,0.7)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Security Score</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#22C55E', letterSpacing: '-0.03em' }}>A+</div>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Zero Critical Findings</div>
                </div>
              </div>

              {/* Panel 4 — Cloud Architecture */}
              <div style={{
                position: 'absolute', top: '200px', right: '30px',
                width: '155px', padding: '14px',
                background: 'rgba(15,23,42,0.7)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Architecture</div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} style={{ flex: 1, height: '32px', borderRadius: '6px', background: i <= 2 ? 'rgba(124,58,237,0.2)' : 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.45rem', fontWeight: 700, color: i <= 2 ? '#A78BFA' : 'rgba(255,255,255,0.15)' }}>
                      {i === 1 ? 'CDN' : i === 2 ? 'API' : i === 3 ? 'DB' : 'K8s'}
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 5 — Workflow Diagram */}
              <div style={{
                position: 'absolute', bottom: '15px', left: '50%',
                transform: 'translateX(-50%)',
                width: '230px', padding: '14px',
                background: 'rgba(15,23,42,0.5)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.03)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Workflow</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  {[
                    { label: 'Ingest', color: '#7C3AED' },
                    { label: 'Process', color: '#06B6D4' },
                    { label: 'Analyze', color: '#22C55E' },
                    { label: 'Report', color: '#F59E0B' },
                    { label: 'Audit', color: '#8B5CF6' },
                  ].map((w, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: `${w.color}10`, border: `1px solid ${w.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.45rem', fontWeight: 700, color: w.color }}>{i + 1}</div>
                      <div style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.3)', textAlign: 'center' }}>{w.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Geometric accents */}
              <div style={{ position: 'absolute', top: '55%', left: '-5px', width: '18px', height: '18px', borderRadius: '5px', border: '1px solid rgba(124,58,237,0.08)' }} />
              <div style={{ position: 'absolute', bottom: '28%', right: '0', width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(6,182,212,0.04)', transform: 'rotate(45deg)' }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .ind-hero-illustration { display: none; } }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  SECTORS WE SERVE — bento grid           */}
      {/* ════════════════════════════════════════ */}
      <section id="sectors" style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)' }} />
              Sectors
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.025em' }}>
              Sectors We Serve
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-tertiary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              We bring deep technical domain knowledge to highly regulated and complex industries.
            </p>
          </div>

          <style>{`
            .ind-bento {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1.25rem;
            }
            .ind-bento .spotlight {
              grid-column: 1 / 3;
              grid-row: 1 / 3;
              padding: 40px 44px;
              border-radius: 24px;
              background: #0F172A;
              color: #FFFFFF;
              border: 1px solid rgba(255,255,255,0.04);
              display: flex;
              flex-direction: column;
              text-decoration: none;
              position: relative;
              overflow: hidden;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .ind-bento .spotlight:hover {
              border-color: rgba(124,58,237,0.25);
              transform: translateY(-2px);
              box-shadow: 0 12px 32px rgba(124,58,237,0.08);
            }
            .ind-bento .pill-card {
              padding: 28px;
              border-radius: 24px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              display: flex;
              flex-direction: column;
              text-decoration: none;
              color: inherit;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .ind-bento .pill-card:hover {
              border-color: #7C3AED;
              box-shadow: 0 6px 20px rgba(124,58,237,0.05);
              transform: translateY(-2px);
            }
            .ind-bento .std-card {
              padding: 28px;
              border-radius: 24px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              display: flex;
              flex-direction: column;
              text-decoration: none;
              color: inherit;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .ind-bento .std-card:hover {
              border-color: #7C3AED;
              box-shadow: 0 6px 20px rgba(124,58,237,0.05);
              transform: translateY(-2px);
            }
            .ind-bento .wide-card {
              grid-column: 1 / 3;
              padding: 28px;
              border-radius: 24px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              display: flex;
              flex-direction: column;
              text-decoration: none;
              color: inherit;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .ind-bento .wide-card:hover {
              border-color: #7C3AED;
              box-shadow: 0 6px 20px rgba(124,58,237,0.05);
              transform: translateY(-2px);
            }
            @media (max-width: 1024px) {
              .ind-bento { grid-template-columns: repeat(2, 1fr); }
              .ind-bento .spotlight { grid-column: 1 / -1; grid-row: auto; }
              .ind-bento .wide-card { grid-column: 1 / -1; }
            }
            @media (max-width: 640px) {
              .ind-bento { grid-template-columns: 1fr; }
              .ind-bento .spotlight { grid-column: 1; grid-row: auto; padding: 28px; }
              .ind-bento .wide-card { grid-column: 1; }
            }
          `}</style>

          <div className="ind-bento">
            {industryList.map((ind, i) => {
              const Icon = ind.icon;

              /* ── Spotlight: Manufacturing (index 0) — dark, 2×2 ── */
              if (i === 0) {
                return (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="spotlight">
                    <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div>
                      <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(124,58,237,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                        <Icon size={26} color="#A78BFA" />
                      </div>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{ind.name}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '440px', marginBottom: '1.25rem' }}>{ind.desc}</p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                        {ind.tags.map(t => (
                          <span key={t} style={{ padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.03)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.04)' }}>{t}</span>
                        ))}
                      </div>
                      {/* Mini illustration */}
                      <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {[60, 85, 40].map((w, i) => (
                            <div key={i} style={{ height: '5px', width: `${w}%`, borderRadius: '3px', background: i === 1 ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.04)' }} />
                          ))}
                        </div>
                        <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '28px' }}>
                          {[30, 50, 35, 60, 45].map((h, i) => (
                            <div key={i} style={{ width: '6px', height: `${h}%`, borderRadius: '2px', background: i >= 3 ? 'linear-gradient(180deg, #A78BFA, #7C3AED)' : 'rgba(255,255,255,0.04)' }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', gap: '1rem', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#A78BFA', fontWeight: 600, fontSize: '0.85rem' }}>
                        View industry details <ArrowRight size={14} />
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#A78BFA' }}>{ind.stat}</span>
                        <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{ind.statLabel}</span>
                      </div>
                    </div>
                  </Link>
                );
              }

              /* ── Pill right: Healthcare (index 1) + Financial Services (index 2) ── */
              if (i === 1 || i === 2) {
                return (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="pill-card">
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: i === 1 ? 'rgba(6,182,212,0.06)' : 'rgba(245,158,11,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color={i === 1 ? '#06B6D4' : '#F59E0B'} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{ind.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.55, flex: 1, marginBottom: '0.75rem' }}>{ind.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
                      {ind.tags.slice(0, 2).map(t => (
                        <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#7C3AED', background: 'rgba(124,58,237,0.04)', borderRadius: '100px' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#7C3AED', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View details <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }

              /* ── Row 3 (3 cards): Logistics, Retail, Education ── */
              if (i >= 3 && i <= 5) {
                return (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="std-card">
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(124,58,237,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="#7C3AED" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{ind.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.55, flex: 1, marginBottom: '0.5rem' }}>{ind.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.5rem' }}>
                      {ind.tags.slice(0, 2).map(t => (
                        <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#7C3AED', background: 'rgba(124,58,237,0.04)', borderRadius: '100px' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#7C3AED', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View details <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }

              /* ── Row 4: Hospitality, Government, Startups ──
                   Let's make Hospitality wide, Government + Startups on right ── */
              if (i === 6) {
                return (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="std-card wide-card">
                    <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: '1rem', alignItems: 'center', height: '100%' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(6,182,212,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={20} color="#06B6D4" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.1rem' }}>{ind.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{ind.desc}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#7C3AED', fontWeight: 600, fontSize: '0.8rem', flexShrink: 0 }}>
                        View <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                );
              }
              if (i === 7) {
                return (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="std-card">
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(34,197,94,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="#22C55E" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{ind.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.55, flex: 1, marginBottom: '0.5rem' }}>{ind.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.5rem' }}>
                      {ind.tags.slice(0, 2).map(t => (
                        <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#7C3AED', background: 'rgba(124,58,237,0.04)', borderRadius: '100px' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#7C3AED', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View details <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }
              if (i === 8) {
                return (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="std-card">
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(245,158,11,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="#F59E0B" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{ind.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.55, flex: 1, marginBottom: '0.5rem' }}>{ind.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.5rem' }}>
                      {ind.tags.slice(0, 2).map(t => (
                        <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#7C3AED', background: 'rgba(124,58,237,0.04)', borderRadius: '100px' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#7C3AED', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View details <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }

              return null;
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  MAKE RISK VISIBLE — split + flow        */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(124,58,237,0.02) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-3%', width: '200px', height: '200px', border: '1px solid #E2E8F0', borderRadius: '40px', transform: 'rotate(25deg)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'stretch',
          }}>
            {/* ── Left ── */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: '#7C3AED',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
                background: 'rgba(124,58,237,0.05)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(124,58,237,0.08)',
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7C3AED' }} />
                Engineering Standard
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800,
                color: 'var(--text-primary)', marginBottom: '1.25rem',
                letterSpacing: '-0.025em', lineHeight: 1.08,
              }}>
                Make risk visible.
              </h2>
              <p style={{
                fontSize: '1rem', color: 'var(--text-secondary)',
                lineHeight: 1.75, marginBottom: '1rem', maxWidth: '520px',
              }}>
                The right design for a retail experiment is fundamentally different from the right design for a patient workflow or a public record database.
              </p>
              <p style={{
                fontSize: '1rem', color: 'var(--text-secondary)',
                lineHeight: 1.75, marginBottom: '2rem', maxWidth: '520px',
              }}>
                Before we write code, we make data sensitivity, auditability requirements, resilience targets, and access controls explicit. We build systems that respect the actual landscape they will operate within.
              </p>
              {/* Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {[
                  { label: 'Data sensitivity & classification', desc: 'Identify PII, PHI, financial data, and IP before designing storage and access layers.' },
                  { label: 'Auditability & compliance', desc: 'Map regulatory requirements (HIPAA, PCI-DSS, FedRAMP, SOC 2) to architectural controls.' },
                  { label: 'Resilience & recovery targets', desc: 'Define RTO/RPO, failover strategy, and incident response before production.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                    padding: '0.9rem 1rem',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    transition: 'all 200ms ease-out',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7C3AED'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(124,58,237,0.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <CheckCircle size={16} color="#7C3AED" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.85rem', marginBottom: '0.1rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/contact-us" style={{
                padding: '0.9rem 2rem',
                background: 'linear-gradient(135deg, #7C3AED, #6D28D9)',
                color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                fontSize: '0.9rem', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 200ms ease', alignSelf: 'flex-start',
                boxShadow: '0 4px 14px rgba(124,58,237,0.2)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(124,58,237,0.2)'; }}
              >
                Start a risk review <ArrowUpRight size={16} />
              </a>
            </div>

            {/* ── Right: Quote Card + Risk Flow ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Quote card */}
              <div style={{
                background: '#0F172A',
                padding: '2.5rem',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
                borderLeft: '3px solid #7C3AED',
                flex: 1,
              }}>
                <div style={{ position: 'absolute', top: '-25%', right: '-15%', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <svg style={{ position: 'absolute', bottom: '20px', right: '20px', opacity: 0.04 }} width="40" height="32" viewBox="0 0 32 26" fill="white">
                  <path d="M10 26C4.477 26 0 21.523 0 16V0h10v10H6c0 5.523 4.477 10 10 10v6zm22 0c-5.523 0-10-4.477-10-10V0h10v10h-4c0 5.523 4.477 10 10 10v6z" />
                </svg>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)',
                    fontWeight: 700, color: '#FFFFFF',
                    marginBottom: '1.5rem', lineHeight: 1.4,
                  }}>
                    &ldquo;Start with the actual workflow. A process diagram is not enough if it omits exceptions, approvals, or the moment a person must override the system.&rdquo;
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#A78BFA', fontWeight: 700 }}>A</div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.85rem' }}>Acriotech Engineering Standard</div>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>Risk & Compliance Framework</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk assessment flow diagram */}
              <div style={{
                padding: '1.5rem',
                background: '#F8FAFC',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Risk Assessment Pipeline</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {[
                    { label: 'Identify', color: '#7C3AED' },
                    { label: 'Classify', color: '#06B6D4' },
                    { label: 'Design', color: '#22C55E' },
                    { label: 'Validate', color: '#F59E0B' },
                    { label: 'Monitor', color: '#8B5CF6' },
                  ].map((step, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: `${step.color}08`, border: `1px solid ${step.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', fontWeight: 700, color: step.color }}>{i + 1}</div>
                      <div style={{ fontSize: '0.55rem', fontWeight: 600, color: 'var(--text-tertiary)', textAlign: 'center' }}>{step.label}</div>
                    </div>
                  ))}
                </div>
                {/* Decorative flow arrow */}
                <div style={{ position: 'absolute', top: '46px', left: '22%', right: '22%', height: '1px', background: 'linear-gradient(90deg, #7C3AED40, #06B6D440, #22C55E40, #F59E0B40, #8B5CF640)', pointerEvents: 'none' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



