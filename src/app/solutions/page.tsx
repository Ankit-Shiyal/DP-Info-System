"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, Server, Code, Cpu, Cloud, LineChart, Briefcase, CheckCircle } from "lucide-react";

const solutions = [
  {
    title: 'Enterprise Software Engineering',
    slug: 'enterprise-software',
    desc: 'Distributed systems built for scale — microservices, event-driven architecture, and sharded databases designed for high transaction volumes and zero-downtime deployments.',
    icon: Server,
    tag: 'Microservices · Kafka · PostgreSQL',
    industries: ['Financial Services', 'Healthcare', 'Logistics'],
    outcomes: 'Architecture baseline and production readiness'
  },
  {
    title: 'AI & Intelligent Automation',
    slug: 'ai-intelligent-automation',
    desc: 'Narrow, production-ready AI — OCR document pipelines, predictive forecasting engines, and anomaly detection systems trained on your proprietary data.',
    icon: Cpu,
    tag: 'TensorFlow · PyTorch · Airflow',
    industries: ['Manufacturing', 'Insurance', 'Retail'],
    outcomes: 'Defined accuracy contract and human review path'
  },
  {
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    desc: 'Replace email approval chains with a centralized platform that enforces compliance, tracks every decision, and integrates with your existing stack.',
    icon: Briefcase,
    tag: 'React · GraphQL · Lambda',
    industries: ['Legal', 'Finance', 'Healthcare'],
    outcomes: 'Traceable approvals and measurable acceptance criteria'
  },
  {
    title: 'Digital Transformation',
    slug: 'digital-transformation',
    desc: 'Decouple customer-facing frontends from creaking legacy backends. API-first architecture and incremental migration — no big-bang rewrites.',
    icon: Cloud,
    tag: 'GraphQL · Next.js · Kubernetes',
    industries: ['Retail', 'Manufacturing', 'Government'],
    outcomes: 'Reversible migration with independent release paths'
  },
  {
    title: 'Cloud & Infrastructure',
    slug: 'cloud-infrastructure',
    desc: 'Terraform-defined, Kubernetes-orchestrated infrastructure fully reproducible from source control. Reduce configuration drift and make cost ownership visible.',
    icon: Shield,
    tag: 'Terraform · K8s · AWS · Azure',
    industries: ['SaaS', 'E-Commerce', 'Media'],
    outcomes: 'Reproducible infrastructure and operational visibility'
  },
  {
    title: 'Legacy System Modernization',
    slug: 'legacy-system-modernization',
    desc: 'Extract functionality module by module using the Strangler Fig pattern. Preserve business continuity, eliminate security debt, and modernize without a full rewrite.',
    icon: Code,
    tag: 'Go · Kong · PostgreSQL',
    industries: ['Government', 'Banking', 'Insurance'],
    outcomes: 'Controlled migration with business continuity preserved'
  },
  {
    title: 'Data & Analytics',
    slug: 'data-analytics',
    desc: 'Automated ETL pipelines that consolidate data from every SaaS tool into a single warehouse. Real-time dashboards and queryable data marts — no more manual exports.',
    icon: LineChart,
    tag: 'Snowflake · dbt · Airflow',
    industries: ['E-Commerce', 'SaaS', 'Healthcare'],
    outcomes: 'Governed data models and trusted reporting'
  },
  {
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    desc: 'Full-stack engineering pods that own the complete product lifecycle — from discovery and architecture through build, deployment, and handover with full IP ownership.',
    icon: Zap,
    tag: 'Next.js · Go · React Native',
    industries: ['Startups', 'Enterprises', 'SMBs'],
    outcomes: 'Working software with documented handover'
  }
];

const differentiators = [
  { title: 'Senior delivery ownership', desc: 'Experienced engineers stay close to architecture, implementation, and production readiness throughout the engagement.' },
  { title: 'Architecture-first delivery', desc: 'We design the system before we write a line of code. Architecture reviews are included in every engagement.' },
  { title: 'You own everything', desc: 'Full IP transfer. All code, documentation, and infrastructure definitions go into your repositories on day one.' },
  { title: 'No vendor lock-in', desc: 'We build on open standards and cloud-agnostic patterns. Switching providers should never require a rewrite.' },
  { title: 'Embedded, not outsourced', desc: 'Your engineers, your Slack, your standups. We operate as an extension of your team — not a black-box vendor.' },
  { title: 'Built for audit', desc: 'Every system ships with complete documentation, runbooks, and compliance-ready audit trails from day one.' }
];

const stats = [
  { value: '01', label: 'Architecture first', sub: 'clear systems before production code' },
  { value: '02', label: 'Senior delivery teams', sub: 'experienced engineers stay close to the work' },
  { value: '03', label: 'Production ownership', sub: 'code, infrastructure, and documentation included' },
  { value: '04', label: 'Measured progress', sub: 'working software over presentation milestones' }
];

const industries = [
  'Financial Services', 'Healthcare & Life Sciences', 'Manufacturing', 'Logistics & Supply Chain',
  'Retail & E-Commerce', 'Government & Public Sector', 'Insurance', 'SaaS & Technology'
];

export default function SolutionsIndexPage() {
  return (
    <div className="solution-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="dark-section solutions-hero-grid" style={{ paddingTop: '9rem', paddingBottom: '5rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="solutions-hero-inner" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem', display: 'grid', gridTemplateColumns: 'minmax(0, 1.25fr) minmax(320px, 0.75fr)', gap: 'var(--spacing-section-sm)', alignItems: 'end' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#7BAF35', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.5rem' }}>Engineering partner / Built for production</div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em', marginBottom: '1.5rem', lineHeight: 1.02, maxWidth: '720px' }}>
              Software that carries the <span style={{ color: '#7BAF35' }}>weight of the business.</span>
            </h1>
            <p style={{ fontSize: '1.08rem', color: '#A8B4C7', lineHeight: 1.75, maxWidth: '650px', marginBottom: '2.5rem' }}>
              We build the platforms, cloud infrastructure, and data systems that keep complex operations moving — with measurable delivery outcomes and an accountable engineering team.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#solutions" style={{ padding: '0.9rem 1.75rem', background: '#4B61B8', color: '#FFFFFF', borderRadius: '4px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Explore the operating model <ArrowRight size={16} />
              </a>
              <a href="/contact-us" style={{ padding: '0.9rem 1.75rem', background: 'transparent', color: '#FFFFFF', borderRadius: '4px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.22)' }}>
                Talk to an engineer
              </a>
            </div>
          </div>
          <aside style={{ borderTop: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.2)', padding: '1.25rem 0 0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Operating record</div>
              <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Selected proof points</div>
            </div>
            {stats.map((stat, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(88px, 0.45fr) 1fr', gap: '1rem', padding: '1rem 0', borderTop: '1px solid rgba(255,255,255,0.09)' }}>
                <div style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1 }}>{stat.value}</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '0.2rem' }}>{stat.label}</div>
                  <div style={{ fontSize: '0.72rem', color: '#7E8BA0' }}>{stat.sub}</div>
                </div>
              </div>
            ))}
          </aside>
        </div>
        <style jsx>{`
          @media (max-width: 800px) {
            .solutions-hero-inner {
              grid-template-columns: 1fr !important;
              gap: 3.5rem !important;
              padding: 0 1.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* ── Capability map ────────────────────────────────────────────── */}
      <section id="solutions" style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 'var(--spacing-section-sm)', alignItems: 'start', marginBottom: '3rem' }}>
            <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>CAPABILITY MAP</div>
            <h2 style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', maxWidth: '580px', lineHeight: 1.25 }}>
              Eight capabilities. One accountable delivery model.
            </h2>
            </div>
            <p style={{ fontSize: '1rem', color: '#64748B', lineHeight: 1.7, maxWidth: '620px', marginTop: '1rem', marginBottom: 0 }}>
              Engage the discipline your roadmap requires, or bring several together under one architecture, delivery plan, and operating standard.
            </p>
          </div>
          <div style={{ borderTop: '2px solid #0F172A' }}>
            {solutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <a
                  href={`/solutions/${sol.slug}`}
                  key={sol.slug}
                  style={{ display: 'grid', gridTemplateColumns: '44px 1fr 190px 20px', gap: '1.25rem', alignItems: 'center', padding: '1.25rem 0', borderBottom: '1px solid #CBD5E1', textDecoration: 'none', color: 'inherit' }}
                >
                  <span style={{ color: '#4B61B8', fontFamily: 'monospace', fontSize: '0.8rem' }}>0{index + 1}</span>
                  <span><strong style={{ display: 'block', color: '#0F172A', fontSize: '1rem' }}>{sol.title}</strong><small style={{ color: '#64748B', lineHeight: 1.5 }}>{sol.outcomes}</small></span>
                  <span style={{ color: '#64748B', fontFamily: 'monospace', fontSize: '0.7rem' }}>{sol.tag}</span>
                  <Icon size={18} color="#4B61B8" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why enterprise chooses us ─────────────────────────────────── */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>DIFFERENTIATORS</div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em', lineHeight: 1.25, marginBottom: '1.25rem' }}>
                What separates an engineering firm from a dev shop
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.75, margin: 0 }}>
                We earn trust through clear architecture, senior delivery ownership, and systems that can be operated after handover.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.25rem' }}>
              {differentiators.map((d, i) => (
                <div key={i} style={{ padding: '1.75rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                  <div style={{ width: '28px', height: '3px', background: '#4B61B8', borderRadius: '2px', marginBottom: '1rem' }} />
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{d.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.65, margin: 0 }}>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────────────── */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>INDUSTRY EXPERTISE</div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em', margin: 0 }}>Domain knowledge across 8 verticals</h2>
            </div>
            <a href="/contact-us" style={{ padding: '0.75rem 1.75rem', background: 'transparent', color: '#FFFFFF', borderRadius: '6px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
              Discuss your industry <ArrowRight size={15} />
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {industries.map((ind, i) => (
              <div key={i} style={{ padding: '1.5rem 1.75rem', background: '#0F172A' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7BAF35', marginBottom: '0.75rem' }} />
                <span style={{ fontSize: '0.875rem', color: '#CBD5E1', fontWeight: 500 }}>{ind}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement model ─────────────────────────────────────────── */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem' }}>HOW WE ENGAGE</div>
            <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.025em' }}>Three engagement models. One standard of quality.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
            {[
              { label: 'Project Delivery', title: 'Fixed-scope, fixed-timeline', desc: 'Defined deliverables, milestones, and acceptance criteria. Best for greenfield builds, platform rewrites, and integration projects with clear boundaries.', badge: 'Most Common' },
              { label: 'Engineering Pod', title: 'Embedded team, ongoing delivery', desc: 'A dedicated cross-functional team — 2–8 engineers — integrated into your organization. Full standup, sprint cycle, and code review ownership. Best for product companies scaling fast.', badge: 'Recommended' },
              { label: 'Architecture Advisory', title: 'Technical strategy and oversight', desc: 'Senior architects who design, review, and guide. Best when you have internal developers but need guidance on system design, scaling decisions, and technology choices.', badge: null }
            ].map((model, i) => (
              <div key={i} style={{ padding: '2rem', borderRadius: '10px', border: '1px solid #E2E8F0', position: 'relative' }}>
                {model.badge && (
                  <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: '#4B61B8', color: '#FFFFFF', fontSize: '0.68rem', fontWeight: 700, padding: '0.3rem 0.9rem', borderRadius: '0 0 6px 6px', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{model.badge}</div>
                )}
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#7BAF35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', marginTop: model.badge ? '0.75rem' : '0' }}>{model.label}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{model.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.7, margin: 0 }}>{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 3rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#7BAF35', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>GET STARTED</div>
          <h2 style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', letterSpacing: '-0.025em', lineHeight: 1.25 }}>
            Not sure which capability fits your situation?
          </h2>
          <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.75, marginBottom: '2rem' }}>
            We&apos;ll ask the right questions, identify gaps, and recommend a plan. 60-minute scoping call — no sales pitch, just an honest technical assessment.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', background: '#4B61B8', color: '#FFFFFF', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
              Schedule a scoping call <ArrowRight size={16} />
            </a>
            <a href="/about-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', background: 'transparent', color: '#FFFFFF', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.15)' }}>
              How we work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
