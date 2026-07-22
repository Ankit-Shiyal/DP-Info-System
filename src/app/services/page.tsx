"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  ArrowRight, Code, Database, Search, Layout, Smartphone, Network, Cloud,
  GitBranch, Cpu, ShieldCheck, HeartHandshake, Users, CheckCircle,
  ArrowUpRight, Activity, Layers, BarChart3,
} from "lucide-react";
import Link from "next/link";

const serviceList = [
  { slug: "software-consulting", name: "Software Consulting", desc: "Senior technical judgment when the architectural path is unclear.", icon: Database },
  { slug: "product-discovery", name: "Product Discovery", desc: "Connect user need, business intent, and technical feasibility.", icon: Search },
  { slug: "ui-ux-design", name: "UI & UX Design", desc: "Interfaces that make complex enterprise work easier to perform.", icon: Layout },
  { slug: "web-application-development", name: "Web App Development", desc: "Responsive web applications connecting UX to dependable domain logic.", icon: Code },
  { slug: "mobile-app-development", name: "Mobile App Development", desc: "Experiences that respect context, connectivity, and device permissions.", icon: Smartphone },
  { slug: "api-development-integration", name: "API & Integration", desc: "Interfaces between systems that handle ownership, change, and failure.", icon: Network },
  { slug: "cloud-architecture", name: "Cloud Architecture", desc: "Foundations shaped around how your team operates and scales.", icon: Cloud },
  { slug: "devops-ci-cd", name: "DevOps and CI/CD", desc: "A delivery path that connects code, infrastructure, and operational feedback.", icon: GitBranch },
  { slug: "ai-integration", name: "AI Integration", desc: "AI features with a defined job, strict bounds, and a human fallback.", icon: Cpu },
  { slug: "qa-testing", name: "QA and Testing", desc: "Quality practice matched to the exact cost and risk of failure.", icon: ShieldCheck },
  { slug: "maintenance-support", name: "Maintenance & Support", desc: "Steady care for software the business absolutely depends on.", icon: HeartHandshake },
  { slug: "dedicated-development-teams", name: "Dedicated Teams", desc: "An engineering team that fits seamlessly into your way of working.", icon: Users },
];

const tagsByService: Record<string, string[]> = {
  "software-consulting": ["Architecture", "Strategy", "Code Review"],
  "product-discovery": ["Research", "Feasibility", "Prototyping"],
  "ui-ux-design": ["Figma", "Design Systems", "Accessibility"],
  "web-application-development": ["React", "Next.js", "Node.js"],
  "mobile-app-development": ["React Native", "iOS", "Android"],
  "api-development-integration": ["REST", "GraphQL", "WebSocket"],
  "cloud-architecture": ["AWS", "Azure", "Terraform"],
  "devops-ci-cd": ["Docker", "Kubernetes", "GitHub Actions"],
  "ai-integration": ["LLMs", "Computer Vision", "NLP"],
  "qa-testing": ["Cypress", "Playwright", "Load Testing"],
  "maintenance-support": ["Monitoring", "SLA", "Runbooks"],
  "dedicated-development-teams": ["Staff Aug", "Pod Model", "Services"],
};

export default function ServicesIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* ════════════════════════════════════════ */}
      {/*  HERO — asymmetric two-column layout    */}
      {/* ════════════════════════════════════════ */}
      <section className="dark-section" style={{
        paddingTop: 'var(--spacing-section)',
        paddingBottom: 'calc(var(--spacing-section) * 1.2)',
        background: 'var(--dark)',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 55% at 25% 45%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 55% at 25% 45%, black, transparent)',
        }} />
        <div style={{ position: 'absolute', top: '-10%', right: '0%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-15%', left: '5%', width: '25%', height: '40%', background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
          }}>
            {/* ── Left Column ── */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.5rem',
                background: 'rgba(6,182,212,0.06)', padding: '0.35rem 0.9rem 0.35rem 0.6rem',
                borderRadius: '100px', border: '1px solid rgba(6,182,212,0.08)',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06B6D4', boxShadow: '0 0 8px rgba(6,182,212,0.4)' }} />
                Services & Engineering Capability
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4.75rem)',
                fontWeight: 800, color: '#FFFFFF',
                letterSpacing: '-0.04em', lineHeight: 1.02,
                marginBottom: '1.5rem',
              }}>
                The disciplines behind{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #60A5FA, #22D3EE)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>durable software.</span>
              </h1>
              <p style={{
                fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '540px',
              }}>
                Acriotech brings product thinking, UI design, application engineering, cloud operations, and rigorous quality practices into one accountable delivery path.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <a href="#capabilities" style={{
                  padding: '0.85rem 2rem',
                  background: 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                  color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                  fontSize: '0.9rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  transition: 'all 200ms ease',
                  boxShadow: '0 4px 14px rgba(37,99,235,0.25)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,99,235,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Explore capabilities <ArrowRight size={16} />
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
                  Talk to our team <ArrowUpRight size={16} />
                </a>
              </div>
              {/* Trust indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex' }}>
                  {['#2563EB', '#06B6D4', '#22C55E', '#F59E0B'].map((c, i) => (
                    <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', background: c, border: '2px solid #0F172A', marginLeft: i > 0 ? '-6px' : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 700, color: '#FFFFFF' }} />
                  ))}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.4 }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Trusted</span> by engineering teams at leading enterprises
                </div>
              </div>
            </div>

            {/* ── Right Column: Dashboard Mockup ── */}
            <div className="hero-illustration" style={{ position: 'relative', height: '480px' }}>
              {/* Connecting SVG lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.3, pointerEvents: 'none' }} viewBox="0 0 440 480" fill="none">
                <path d="M120 60 L260 60 L260 160" stroke="rgba(37,99,235,0.2)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M320 260 L320 360 L180 360" stroke="rgba(37,99,235,0.15)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M80 220 L80 320 L200 320" stroke="rgba(6,182,212,0.1)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="260" cy="160" r="3" fill="rgba(37,99,235,0.4)" />
                <circle cx="180" cy="360" r="3" fill="rgba(37,99,235,0.4)" />
                <circle cx="200" cy="320" r="3" fill="rgba(6,182,212,0.4)" />
              </svg>

              {/* Panel 1 — API Response Card */}
              <div style={{
                position: 'absolute', top: '10px', left: '10px',
                width: '200px', padding: '16px',
                background: 'rgba(15,23,42,0.7)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>API Response</div>
                  <div style={{ padding: '2px 6px', borderRadius: '4px', background: 'rgba(34,197,94,0.12)', fontSize: '0.55rem', fontWeight: 700, color: '#22C55E' }}>200 OK</div>
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                  <div><span style={{ color: '#60A5FA' }}>&#123;</span></div>
                  <div>&nbsp;&nbsp;<span style={{ color: '#22C55E' }}>"status"</span>: <span style={{ color: '#FBBF24' }}>"healthy"</span>,</div>
                  <div>&nbsp;&nbsp;<span style={{ color: '#22C55E' }}>"latency"</span>: <span style={{ color: '#FBBF24' }}>"24ms"</span>,</div>
                  <div>&nbsp;&nbsp;<span style={{ color: '#22C55E' }}>"uptime"</span>: <span style={{ color: '#FBBF24' }}>"99.97%"</span></div>
                  <div><span style={{ color: '#60A5FA' }}>&#125;</span></div>
                </div>
              </div>

              {/* Panel 2 — Analytics Card */}
              <div style={{
                position: 'absolute', top: '30px', right: '0',
                width: '180px', padding: '16px',
                background: 'rgba(15,23,42,0.7)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>System Health</div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-end', height: '40px' }}>
                  {[35, 55, 40, 70, 45, 60, 80].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '3px', background: i === 3 || i === 6 ? 'rgba(37,99,235,0.5)' : 'rgba(255,255,255,0.06)' }} />
                  ))}
                </div>
              </div>

              {/* Panel 3 — Architecture Card */}
              <div style={{
                position: 'absolute', top: '175px', right: '40px',
                width: '160px', padding: '16px',
                background: 'rgba(15,23,42,0.7)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>Architecture</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {[{ label: 'API Gateway', active: true }, { label: 'Microservices', active: true }, { label: 'Data Layer', active: false }].map((l, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 6px', borderRadius: '4px', background: l.active ? 'rgba(37,99,235,0.1)' : 'transparent', fontSize: '0.6rem', color: l.active ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: l.active ? '#2563EB' : 'rgba(255,255,255,0.15)' }} />
                      {l.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel 4 — Terminal */}
              <div style={{
                position: 'absolute', bottom: '30px', left: '20px',
                width: '195px', padding: '14px',
                background: 'rgba(0,0,0,0.45)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.03)',
                fontFamily: 'monospace', fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.35)',
              }}>
                <div style={{ display: 'flex', gap: '5px', marginBottom: '8px' }}>
                  {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
                    <div key={c} style={{ width: '6px', height: '6px', borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <div><span style={{ color: '#22C55E' }}>$</span> npm run build</div>
                <div style={{ color: 'rgba(255,255,255,0.15)' }}>&gt; Compiled successfully</div>
                <div style={{ color: '#60A5FA' }}>✓ 71 routes generated</div>
              </div>

              {/* Panel 5 — Code Snippet */}
              <div style={{
                position: 'absolute', bottom: '80px', right: '5px',
                width: '170px', padding: '14px',
                background: 'rgba(0,0,0,0.45)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.03)',
                fontFamily: 'monospace', fontSize: '0.6rem',
                color: 'rgba(255,255,255,0.3)',
                lineHeight: 1.7,
              }}>
                <div><span style={{ color: '#F472B6' }}>export</span> <span style={{ color: '#60A5FA' }}>default</span> <span style={{ color: '#FBBF24' }}>function</span> App() &#123;</div>
                <div>&nbsp;&nbsp;<span style={{ color: '#22C55E' }}>return</span> <span style={{ color: '#60A5FA' }}>&lt;Layout&gt;</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#60A5FA' }}>&lt;Dashboard</span> /&gt;</div>
                <div>&nbsp;&nbsp;<span style={{ color: '#60A5FA' }}>&lt;/Layout&gt;</span></div>
                <div>&#125;</div>
              </div>

              {/* Floating geometric accents */}
              <div style={{ position: 'absolute', top: '42%', left: '0', width: '28px', height: '28px', borderRadius: '8px', border: '1px solid rgba(37,99,235,0.12)', transform: 'rotate(12deg)' }} />
              <div style={{ position: 'absolute', bottom: '38%', right: '10px', width: '16px', height: '16px', borderRadius: '4px', background: 'rgba(37,99,235,0.06)', transform: 'rotate(45deg)' }} />
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .hero-illustration { display: none; } }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  CAPABILITIES — asymmetric bento grid   */}
      {/* ════════════════════════════════════════ */}
      <section id="capabilities" style={{ padding: 'var(--spacing-section) 0', background: 'var(--bg-section)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
              background: 'var(--primary-50)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)' }} />
              Capabilities
            </div>
            <h2 style={{
              fontSize: 'var(--font-h2)', fontWeight: 800, color: 'var(--text-primary)',
              marginBottom: '1rem', letterSpacing: '-0.025em',
            }}>
              End-to-End Capabilities
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-tertiary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              From early-stage product discovery to post-launch cloud maintenance, we cover the full software lifecycle.
            </p>
          </div>

          <style>{`
            .cap-bento {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 1.25rem;
              grid-auto-rows: auto;
            }
            .cap-bento .spotlight {
              grid-column: 1 / 3;
              grid-row: 1 / 3;
              padding: 40px 44px;
              border-radius: 24px;
              background: #0F172A;
              color: #FFFFFF;
              border: 1px solid rgba(255,255,255,0.04);
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              text-decoration: none;
              position: relative;
              overflow: hidden;
              transition: all 200ms ease-out;
            }
            .cap-bento .spotlight:hover {
              border-color: rgba(37,99,235,0.25);
              transform: translateY(-2px);
              box-shadow: 0 12px 32px rgba(37,99,235,0.08);
            }
            .cap-bento .pill-right {
              grid-column: 3 / 4;
              padding: 28px;
              border-radius: 20px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              display: flex;
              flex-direction: column;
              text-decoration: none;
              color: inherit;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .cap-bento .pill-right:hover {
              border-color: #2563EB;
              box-shadow: 0 6px 20px rgba(37,99,235,0.06);
              transform: translateY(-2px);
            }
            .cap-bento .std-card {
              padding: 28px;
              border-radius: 20px;
              background: #F8FAFC;
              border: 1px solid #E2E8F0;
              display: flex;
              flex-direction: column;
              text-decoration: none;
              color: inherit;
              transition: all 200ms ease-out;
              height: 100%;
            }
            .cap-bento .std-card:hover {
              border-color: #2563EB;
              box-shadow: 0 6px 20px rgba(37,99,235,0.06);
              transform: translateY(-2px);
            }
            .cap-bento .wide {
              grid-column: 1 / 3;
            }
            .cap-bento .end-col {
              grid-column: 3 / 4;
            }
            @media (max-width: 1024px) {
              .cap-bento { grid-template-columns: repeat(2, 1fr); }
              .cap-bento .spotlight { grid-column: 1 / -1; grid-row: auto; }
              .cap-bento .pill-right { grid-column: 1 / 2; }
              .cap-bento .wide { grid-column: 1 / -1; }
              .cap-bento .end-col { grid-column: auto; }
            }
            @media (max-width: 640px) {
              .cap-bento { grid-template-columns: 1fr; }
              .cap-bento .spotlight { padding: 28px; grid-column: 1; grid-row: auto; }
              .cap-bento .pill-right { grid-column: 1; }
              .cap-bento .wide { grid-column: 1; }
            }
          `}</style>

          <div className="cap-bento">
            {serviceList.map((service, i) => {
              const Icon = service.icon;
              const tags = tagsByService[service.slug] || [];

              /* ── Spotlight: Software Consulting (index 0) — spans 2 cols × 2 rows ── */
              if (i === 0) {
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="spotlight">
                    <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
                    <div />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                        <Icon size={26} color="#60A5FA" />
                      </div>
                      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.6rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>{service.name}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: '440px' }}>{service.desc}</p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 1, flexWrap: 'wrap', gap: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {tags.slice(0, 3).map(t => (
                          <span key={t} style={{ padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.04)' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#60A5FA', fontWeight: 600, fontSize: '0.85rem' }}>
                        View service <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                );
              }

              /* ── Right-column stacked: Product Discovery + UI & UX ── */
              if (i === 1 || i === 2) {
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="pill-right">
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{service.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, flex: 1, marginBottom: '1rem' }}>{service.desc}</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View service <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }

              /* ── Row 3 (indices 3-5): standard 3-col ── */
              if (i >= 3 && i <= 5) {
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="std-card">
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{service.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, flex: 1, marginBottom: '0.75rem' }}>{service.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
                      {tags.slice(0, 2).map(t => (
                        <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#2563EB', background: 'rgba(37,99,235,0.05)', borderRadius: '100px' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View service <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }

              /* ── Row 4 (indices 6-8): standard 3-col ── */
              if (i >= 6 && i <= 8) {
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="std-card">
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{service.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, flex: 1, marginBottom: '0.75rem' }}>{service.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
                      {tags.slice(0, 2).map(t => (
                        <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#2563EB', background: 'rgba(37,99,235,0.05)', borderRadius: '100px' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View service <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }

              /* ── Row 5: QA (wide) + Maintenance (end-col) + Dedicated Teams (end-col) ── */
              if (i === 9) {
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="std-card wide">
                    <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', gap: '1rem', alignItems: 'center', height: '100%' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={20} color="var(--primary)" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem', lineHeight: 1.3 }}>{service.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{service.desc}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', flexShrink: 0 }}>
                        View <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                );
              }
              /* Maintenance (10) */
              if (i === 10) {
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="std-card">
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{service.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, flex: 1, marginBottom: '0.75rem' }}>{service.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
                      {tags.slice(0, 2).map(t => (
                        <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#2563EB', background: 'rgba(37,99,235,0.05)', borderRadius: '100px' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View service <ArrowRight size={13} />
                    </div>
                  </Link>
                );
              }
              /* Dedicated Teams (11) */
              if (i === 11) {
                return (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="std-card">
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <Icon size={20} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>{service.name}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, flex: 1, marginBottom: '0.75rem' }}>{service.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
                      {tags.slice(0, 2).map(t => (
                        <span key={t} style={{ padding: '0.15rem 0.5rem', fontSize: '0.6rem', fontWeight: 600, color: '#2563EB', background: 'rgba(37,99,235,0.05)', borderRadius: '100px' }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                      View service <ArrowRight size={13} />
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
      {/*  SHAPE THE RIGHT PROBLEM — split layout */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
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
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem',
                background: 'var(--primary-50)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px',
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)' }} />
                Our Approach
              </div>
              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800,
                color: 'var(--text-primary)', marginBottom: '1.25rem',
                letterSpacing: '-0.025em', lineHeight: 1.08,
              }}>
                Shape the right problem.
              </h2>
              <p style={{
                fontSize: '1rem', color: 'var(--text-secondary)',
                lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '500px',
              }}>
                Consulting and discovery turn a broad ambition into a testable product direction. We make assumptions visible before they become expensive scope.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: Search, label: 'Product and technical discovery', desc: 'Understand the user need, business intent, and technical constraints before writing code.' },
                  { icon: Layers, label: 'Architecture options with tradeoffs', desc: 'Evaluate multiple architectural paths with clear cost, risk, and timeline implications.' },
                  { icon: BarChart3, label: 'Sequenced delivery plans', desc: 'Break the vision into incremental, shippable phases with measurable outcomes.' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    padding: '1.1rem 1.25rem',
                    background: '#F8FAFC',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    transition: 'all 200ms ease-out',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,99,235,0.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(37,99,235,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <item.icon size={16} color="#2563EB" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '0.15rem' }}>{item.label}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/contact-us" style={{
                padding: '0.9rem 2rem',
                background: 'var(--dark)',
                color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                fontSize: '0.9rem', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 200ms ease', alignSelf: 'flex-start',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--dark-800)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--dark)'; }}
              >
                Start a discovery <ArrowUpRight size={16} />
              </a>
            </div>

            {/* ── Right: Quote + Flow Diagram ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Quote card */}
              <div style={{
                background: '#0F172A',
                padding: '2.5rem',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
                borderLeft: '3px solid #2563EB',
              }}>
                <div style={{ position: 'absolute', top: '-25%', right: '-15%', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
                <svg style={{ position: 'absolute', bottom: '20px', right: '20px', opacity: 0.04 }} width="40" height="32" viewBox="0 0 32 26" fill="white">
                  <path d="M10 26C4.477 26 0 21.523 0 16V0h10v10H6c0 5.523 4.477 10 10 10v6zm22 0c-5.523 0-10-4.477-10-10V0h10v10h-4c0 5.523 4.477 10 10 10v6z" />
                </svg>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                    fontWeight: 700, color: '#FFFFFF',
                    marginBottom: '1.5rem', lineHeight: 1.4,
                  }}>
                    &ldquo;Build for the operating context. Design stays connected to the constraints that determine whether software is adopted.&rdquo;
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(6,182,212,0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#60A5FA', fontWeight: 700 }}>A</div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '0.85rem' }}>Acriotech Engineering Standard</div>
                      <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>Engineering Principle</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture flow diagram */}
              <div style={{
                padding: '1.75rem',
                background: '#F8FAFC',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>Discovery → Delivery Pipeline</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {[
                    { label: 'Discovery', color: '#2563EB' },
                    { label: 'Architecture', color: '#06B6D4' },
                    { label: 'Build', color: '#22C55E' },
                    { label: 'Deploy', color: '#F59E0B' },
                    { label: 'Operate', color: '#8B5CF6' },
                  ].map((step, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${step.color}10`, border: `1px solid ${step.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', fontWeight: 700, color: step.color, letterSpacing: '0.02em' }}>
                        {i + 1}
                      </div>
                      <div style={{ fontSize: '0.6rem', fontWeight: 600, color: 'var(--text-tertiary)', textAlign: 'center' }}>{step.label}</div>
                      {i < 4 && (
                        <div style={{ position: 'absolute', left: `calc(${(i + 1) * 20}% - 4px)`, top: '50%', width: 'calc(20% - 8px)', height: '1px', background: 'linear-gradient(90deg, transparent, #E2E8F0, transparent)' }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
