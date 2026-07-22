"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {
  Mail, MapPin, ArrowRight, Briefcase, HeartHandshake, MessageSquare,
  CheckCircle2, Phone, Clock, LifeBuoy, Building, Megaphone, TrendingUp,
  Users, Globe, Shield, Zap, ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const supportMetrics = [
    { label: "Avg. Response Time", value: "< 2 hours" },
    { label: "Satisfaction Rate", value: "98.7%" },
    { label: "Support Engineers", value: "12" },
    { label: "Global Offices", value: "4" },
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* ════════════════════════════════════════ */}
      {/*  HERO — split: editorial + dashboard    */}
      {/* ════════════════════════════════════════ */}
      <section style={{
        background: '#FFFFFF',
        paddingTop: '12rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--border-light)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50%', height: '60%', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <div className="contact-hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Left: Editorial */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
                textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem',
                background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
                borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
              }}>
                <Mail size={12} color="var(--primary)" />
                Get In Touch
              </div>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 4rem)',
                fontWeight: 800, color: 'var(--text-primary)',
                letterSpacing: '-0.04em', lineHeight: 1.02,
                marginBottom: '1.25rem',
              }}>
                Contact{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Acriotech</span>
              </h1>
              <p style={{
                fontSize: '1.05rem', color: 'var(--text-secondary)',
                lineHeight: 1.75, marginBottom: '2rem', maxWidth: '520px',
              }}>
                We&apos;re here to help. Route your inquiry to the right department or reach out to our global engineering team directly.
              </p>
              {/* Trust row */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                {['Enterprise-Grade Security', 'ISO 27001 Certified', '99.97% Uptime SLA'].map((badge, i) => (
                  <div key={i} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                    fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-tertiary)',
                    padding: '0.25rem 0.7rem', borderRadius: '100px',
                    background: '#F8FAFC', border: '1px solid #E2E8F0',
                  }}>
                    <Shield size={10} color="var(--primary)" />
                    {badge}
                  </div>
                ))}
              </div>
              {/* Quick stat cards */}
              <div className="hero-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.65rem' }}>
                {supportMetrics.map((s, i) => (
                  <div key={i} style={{ padding: '0.65rem 0.5rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                    <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{s.value}</div>
                    <div style={{ fontSize: '0.5rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '2px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Enterprise Support Dashboard */}
            <div className="contact-hero-ill" style={{ position: 'relative', height: '420px' }}>
              {/* Background connecting lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.2, pointerEvents: 'none' }} viewBox="0 0 440 420" fill="none">
                <path d="M100 50 L280 50 L280 180" stroke="rgba(37,99,235,0.12)" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M350 200 L350 350 L240 350" stroke="rgba(37,99,235,0.1)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="280" cy="180" r="3" fill="rgba(37,99,235,0.25)" />
                <circle cx="240" cy="350" r="3" fill="rgba(37,99,235,0.25)" />
                <path d="M70 300 L70 150 L220 150" stroke="rgba(6,182,212,0.08)" strokeWidth="1" strokeDasharray="3 3" />
              </svg>

              {/* Card 1 — Live Support */}
              <div style={{
                position: 'absolute', top: '5px', left: '5px',
                width: '190px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px rgba(34,197,94,0.4)' }} />
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Live Support</span>
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>Online — Ready to help</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>Avg. pickup: &lt; 2 min</div>
              </div>

              {/* Card 2 — Response Time */}
              <div style={{
                position: 'absolute', top: '70px', right: '5px',
                width: '175px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Response Time</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2563EB', letterSpacing: '-0.03em' }}>&lt;2</span>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>hours</span>
                </div>
                <div style={{ display: 'flex', gap: '2px', marginTop: '4px' }}>
                  {[100, 88, 95, 70, 100, 80, 92].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: '16px', borderRadius: '2px', background: h >= 90 ? 'linear-gradient(180deg, #22C55E, #16A34A)' : '#E2E8F0' }} />
                  ))}
                </div>
              </div>

              {/* Card 3 — Team Availability */}
              <div style={{
                position: 'absolute', top: '170px', left: '10px',
                width: '160px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Team Available</div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                  {[1, 1, 1, 1, 0].map((a, i) => (
                    <div key={i} style={{ width: '24px', height: '24px', borderRadius: '50%', background: a ? 'linear-gradient(135deg, #2563EB, #1D4ED8)' : '#E2E8F0', border: '2px solid #FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {a ? <Users size={10} color="#FFFFFF" /> : null}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600 }}>12 engineers online</div>
              </div>

              {/* Card 4 — Global Offices */}
              <div style={{
                position: 'absolute', top: '180px', right: '20px',
                width: '160px', padding: '14px',
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.6)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Global Offices</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {[{ flag: 'IN', city: 'Bhavnagar, India' }, { flag: 'US', city: 'San Francisco, CA' }, { flag: 'UK', city: 'London, UK' }].map((o, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      <Globe size={10} color="var(--primary)" />
                      {o.city}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 5 — Support Workflow */}
              <div style={{
                position: 'absolute', bottom: '10px', left: '50%',
                transform: 'translateX(-50%)',
                width: '240px', padding: '12px 14px',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: '14px', border: '1px solid rgba(226,232,240,0.4)',
                backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                  {['Inquiry', 'Review', 'Assign', 'Resolve'].map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: i < 3 ? '#2563EB' : '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle2 size={10} color="#FFFFFF" />
                      </div>
                      <span style={{ fontSize: '0.5rem', fontWeight: 700, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{step}</span>
                      {i < 3 && <span style={{ color: '#CBD5E1', fontSize: '0.55rem' }}>→</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .contact-hero-ill { display: none; } .contact-hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
          @media (max-width: 600px) { .hero-stats { grid-template-columns: repeat(2, 1fr) !important; } }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  CONTACT OPTIONS — bento grid            */}
      {/*  Featured: Careers | Side: Social Resp   */}
      {/*  & Feedback System                       */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#FAFAFA', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <LifeBuoy size={12} color="var(--primary)" />
              Contact Options
            </div>
          </div>

          <div className="contact-options-bento" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem',
          }}>
            {/* Featured: Careers */}
            <div className="contact-card-featured" style={{
              gridColumn: '1',
              gridRow: 'span 2',
              padding: '36px',
              background: '#0F172A',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.04)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'border-color 200ms ease, box-shadow 200ms ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(37,99,235,0.2)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,99,235,0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ position: 'absolute', top: '-30%', right: '-10%', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(37,99,235,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Briefcase size={24} color="#60A5FA" />
                </div>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.75rem', position: 'relative', zIndex: 1 }}>Careers</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                Interested in joining our engineering team? We are always looking for talented developers, cloud architects, and QA specialists who take pride in writing clean, reliable code.
              </p>
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                {['Developer', 'Cloud', 'QA', 'Architect'].map((tag, i) => (
                  <span key={i} style={{ fontSize: '0.55rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', padding: '0.2rem 0.55rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href="/company/careers" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 1.75rem',
                background: 'rgba(37,99,235,0.1)',
                color: '#60A5FA', borderRadius: '10px', fontWeight: 600,
                fontSize: '0.85rem', textDecoration: 'none',
                border: '1px solid rgba(37,99,235,0.15)',
                transition: 'all 200ms ease',
                position: 'relative', zIndex: 1,
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(37,99,235,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,99,235,0.1)'; }}
              >
                View Open Roles <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Side: Social Responsibility */}
            <div className="contact-card-side" style={{
              padding: '28px',
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              transition: 'border-color 200ms ease, box-shadow 200ms ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(37,99,235,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <HeartHandshake size={22} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Social Responsibility</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                We believe in giving back. If you represent an NGO, non-profit, or small business working on social causes, reach out to explore how we can support your technical mission.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)' }}>
                <Mail size={12} />
                <a href="mailto:responsible@acriotech.com" style={{ color: 'inherit', textDecoration: 'none' }}>responsible@acriotech.com</a>
              </div>
            </div>

            {/* Side: Feedback System */}
            <div className="contact-card-side" style={{
              padding: '28px',
              background: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              transition: 'border-color 200ms ease, box-shadow 200ms ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(6,182,212,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <MessageSquare size={22} color="var(--accent)" />
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Feedback System</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Your feedback drives our continuous improvement. Whether it&apos;s a bug report, a feature request, or general thoughts on our services, we carefully review all submissions.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}>
                <Mail size={12} />
                <a href="mailto:feedback@acriotech.com" style={{ color: 'inherit', textDecoration: 'none' }}>feedback@acriotech.com</a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .contact-options-bento { grid-template-columns: 1fr !important; }
            .contact-options-bento .contact-card-featured { grid-column: 1 !important; grid-row: auto !important; }
          }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  PARTNER WITH ACRIOTECH — split layout  */}
      {/* ════════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div className="partner-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
          }}>
            {/* Left */}
            <div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Partner with Acriotech.</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.75rem' }}>
                We work with growing organisations to find new opportunities, reduce risks, and support long-term growth. Our engineering teams can help with the following:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {['Strategic Consultancy', 'Research Solutions', 'Digital Transformation'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '8px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={14} color="var(--primary)" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              {/* Industry badges */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['Fintech', 'Healthcare', 'SaaS', 'Logistics', 'Enterprise'].map((ind, i) => (
                  <span key={i} style={{ fontSize: '0.6rem', fontWeight: 600, color: 'var(--text-tertiary)', padding: '0.25rem 0.7rem', borderRadius: '100px', background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Premium CTA Card */}
            <div style={{
              padding: '36px',
              background: '#F8FAFC',
              borderRadius: '24px',
              border: '1px solid #E2E8F0',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Enterprise Inquiries</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Whether you need a dedicated development team or a complete digital overhaul, our enterprise consultants are available.
                </p>
                {/* Mini consulting workflow */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.5rem', padding: '0.75rem 1rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                  {['Consult', 'Plan', 'Build', 'Scale'].map((phase, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: 'rgba(37,99,235,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '0.45rem', fontWeight: 800, color: '#2563EB' }}>{i + 1}</span>
                      </div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{phase}</span>
                      {i < 3 && <span style={{ color: '#CBD5E1', fontSize: '0.5rem' }}>→</span>}
                    </div>
                  ))}
                </div>
                {/* Stat row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {[
                    { value: '50+', label: 'Enterprise Clients' },
                    { value: '120+', label: 'Projects' },
                    { value: '4', label: 'Continents' },
                  ].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center', padding: '0.5rem', background: '#FFFFFF', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontWeight: 800, fontSize: '0.85rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{stat.value}</div>
                      <div style={{ fontSize: '0.5rem', color: 'var(--text-tertiary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.03em', marginTop: '1px' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
                <a href="#direct-contact" style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  padding: '0.9rem 2rem',
                  background: 'var(--dark)',
                  color: '#FFFFFF', borderRadius: '10px', fontWeight: 600,
                  fontSize: '0.9rem', textDecoration: 'none',
                  transition: 'all 200ms ease',
                  width: '100%',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--dark)'; }}
                >
                  Contact Sales <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .partner-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
        `}</style>
      </section>

      {/* ════════════════════════════════════════ */}
      {/*  DIRECT INQUIRIES — info panel + form   */}
      {/* ════════════════════════════════════════ */}
      <section id="direct-contact" style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.7rem', fontWeight: 700, color: 'var(--primary)',
              textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.75rem',
              background: 'rgba(37,99,235,0.06)', padding: '0.3rem 0.85rem 0.3rem 0.55rem',
              borderRadius: '100px', border: '1px solid rgba(37,99,235,0.08)',
            }}>
              <Mail size={12} color="var(--primary)" />
              Direct Inquiries
            </div>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.025em', marginBottom: '0.75rem' }}>Direct Inquiries</h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Fill out the form below or reach out to the right department directly.</p>
          </div>

          <div className="inquiries-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: '3rem',
            alignItems: 'start',
          }}>
            {/* Left: Premium contact info panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Quick response badge */}
              <div style={{
                padding: '12px 16px',
                background: 'rgba(34,197,94,0.06)',
                borderRadius: '14px',
                border: '1px solid rgba(34,197,94,0.1)',
                display: 'flex', alignItems: 'center', gap: '0.75rem',
              }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(34,197,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={16} color="#22C55E" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#16A34A', fontSize: '0.75rem' }}>Quick Response Guarantee</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', fontWeight: 500 }}>We respond to all inquiries within 2 hours</div>
                </div>
              </div>

              {[
                { icon: <Building size={20} color="var(--primary)" />, title: 'Enterprise Sales', desc: 'Contact our business development team.', email: 'info@acriotech.com', color: 'var(--primary)', bg: 'rgba(37,99,235,0.06)' },
                { icon: <Megaphone size={20} color="var(--text-secondary)" />, title: 'Press & Media', desc: 'For PR and media inquiries.', email: 'press@acriotech.com', color: 'var(--text-secondary)', bg: 'rgba(71,85,105,0.04)' },
                { icon: <TrendingUp size={20} color="#EF4444" />, title: 'Investor Relations', desc: 'For shareholders and financial analysts.', email: 'investors@acriotech.com', color: '#EF4444', bg: 'rgba(239,68,68,0.04)' },
                { icon: <MapPin size={20} color="var(--primary)" />, title: 'Global Headquarters', desc: 'Acriotech Global Pvt. Ltd. 14, Shiv Narayan Complex, Virani Circle, Kaliyabid, Bhavnagar - 364002 Gujarat, India', email: '', color: 'var(--primary)', bg: 'rgba(37,99,235,0.06)', isAddress: true }
              ].map((item, i) => (
                <div key={i} className="contact-info-card" style={{
                  padding: '20px 24px',
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  transition: 'border-color 200ms ease, box-shadow 200ms ease',
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.04)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: item.bg, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(226,232,240,0.5)',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.15rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)', lineHeight: 1.5, marginBottom: '0.5rem' }}>{item.desc}</p>
                    {item.email && (
                      <a href={`mailto:${item.email}`} style={{ fontSize: '0.8rem', fontWeight: 600, color: item.color, textDecoration: 'none', transition: 'opacity 200ms' }}
                        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                      >
                        {item.email}
                      </a>
                    )}
                    {item.isAddress && (
                      <a href="https://maps.google.com/?q=14,+Shiv+Narayan+Complex,+Virani+Circle,+Kaliyabid,+Bhavnagar+-+364002,+Gujarat,+India" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                        View on Google Maps <ArrowRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Social / Availability */}
              <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>
                  <Clock size={12} color="var(--primary)" />
                  Mon–Fri, 9AM–6PM IST
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-tertiary)' }}>
                  <Shield size={12} color="#22C55E" />
                  Encrypted forms
                </div>
              </div>
            </div>

            {/* Right: Premium Contact Form */}
            <div className="contact-form-wrapper" style={{
              background: 'rgba(255,255,255,0.85)',
              backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderRadius: '24px',
              boxShadow: '0 20px 50px -15px rgba(15,23,42,0.08), 0 0 0 1px rgba(226,232,240,0.6)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: '-30%', right: '-20%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.03) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.35rem', display: 'block' }}>First Name *</label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="contact-input"
                      style={{
                        width: '100%', padding: '0.8rem 1rem',
                        borderRadius: '12px', border: '1px solid var(--border)',
                        fontSize: '0.9rem', outline: 'none',
                        transition: 'border-color 200ms ease, box-shadow 200ms ease',
                        background: '#FFFFFF', fontFamily: 'inherit',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.06)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.35rem', display: 'block' }}>Last Name *</label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="contact-input"
                      style={{
                        width: '100%', padding: '0.8rem 1rem',
                        borderRadius: '12px', border: '1px solid var(--border)',
                        fontSize: '0.9rem', outline: 'none',
                        transition: 'border-color 200ms ease, box-shadow 200ms ease',
                        background: '#FFFFFF', fontFamily: 'inherit',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.06)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.35rem', display: 'block' }}>Corporate Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    style={{
                      width: '100%', padding: '0.8rem 1rem',
                      borderRadius: '12px', border: '1px solid var(--border)',
                      fontSize: '0.9rem', outline: 'none',
                      transition: 'border-color 200ms ease, box-shadow 200ms ease',
                      background: '#FFFFFF', fontFamily: 'inherit',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.06)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.35rem', display: 'block' }}>Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="contact-input"
                    style={{
                      width: '100%', padding: '0.8rem 1rem',
                      borderRadius: '12px', border: '1px solid var(--border)',
                      fontSize: '0.9rem', outline: 'none',
                      transition: 'border-color 200ms ease, box-shadow 200ms ease',
                      background: '#FFFFFF', fontFamily: 'inherit',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.06)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--secondary)', marginBottom: '0.35rem', display: 'block' }}>How can we help? *</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="contact-input"
                    style={{
                      width: '100%', padding: '0.8rem 1rem',
                      borderRadius: '12px', border: '1px solid var(--border)',
                      fontSize: '0.9rem', outline: 'none',
                      transition: 'border-color 200ms ease, box-shadow 200ms ease',
                      resize: 'vertical', fontFamily: 'inherit',
                      background: '#FFFFFF',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.06)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    marginTop: '0.5rem',
                    width: '100%',
                    padding: '1rem 2rem',
                    background: isSubmitting ? 'var(--text-tertiary)' : 'linear-gradient(135deg, #2563EB, #1D4ED8)',
                    color: '#FFFFFF',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 200ms ease',
                    boxShadow: isSubmitting ? 'none' : '0 4px 14px rgba(37,99,235,0.25)',
                  }}
                  onMouseEnter={(e) => { if (!isSubmitting) { e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.35)'; } }}
                  onMouseLeave={(e) => { if (!isSubmitting) { e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.25)'; } }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <ArrowUpRight size={16} /></>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div style={{
                    padding: '1rem',
                    background: 'rgba(34,197,94,0.08)',
                    color: '#16A34A',
                    borderRadius: '12px',
                    border: '1px solid rgba(34,197,94,0.15)',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center',
                  }}>
                    <CheckCircle2 size={16} color="#16A34A" />
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={{
                    padding: '1rem',
                    background: '#FEF2F2',
                    color: '#991B1B',
                    borderRadius: '12px',
                    border: '1px solid #FECACA',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                  }}>
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .inquiries-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
        `}</style>
      </section>

      <Footer />
    </div>
  );
}
