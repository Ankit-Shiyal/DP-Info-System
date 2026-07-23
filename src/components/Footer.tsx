"use client";

import Link from "next/link";
import { ArrowRight, Mail, ChevronRight, Shield, Lock, Cloud, Code, MapPin } from "lucide-react";
import React, { useState } from "react";


export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to connect to server.');
    }
  };

  return (
    <footer style={{
      background: '#FFFFFF', color: '#0F172A', position: 'relative', overflow: 'hidden',
      borderTop: '1px solid #E2E8F0',
    }}>
      {/* Subtle top gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, #2563EB, #06B6D4, transparent)',
        opacity: 0.3,
      }} />

      <div className="container" style={{
        position: 'relative', zIndex: 1,
        padding: '5rem 2rem 2rem',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
      }}>
        {/* Main grid: Brand left, Links right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 2.5fr',
          gap: '4rem',
          marginBottom: '3rem',
        }}>
          {/* ── Brand Column ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/custom-logo.svg" alt="Acriotech Logo Mark" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '2px' }}>
                <img src="/acriotech-name-logo.png" alt="Acriotech" style={{ height: '18px', objectFit: 'contain' }} />
              </div>
            </div>

            <p style={{
              fontSize: '0.9rem', color: '#94A3B8', marginBottom: '1.5rem', fontWeight: 500,
            }}>
              Engineering Software. Building Future.
            </p>

            <h2 style={{
              fontSize: 'var(--font-h2)', fontWeight: 800, lineHeight: 1.1,
              marginBottom: '1rem', color: '#0F172A', letterSpacing: '-0.03em',
            }}>
              Building<br />
              Software<br />
              <span style={{ color: '#2563EB' }}>That Lasts.</span>
            </h2>

            <p style={{
              fontSize: '1rem', color: '#475569', lineHeight: 1.6,
              marginBottom: '1.5rem', maxWidth: '360px',
            }}>
              We design, engineer and scale enterprise software, AI systems and cloud platforms that help ambitious businesses grow with confidence.
            </p>

            <a href="/contact-us" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '1rem', fontWeight: 600, color: '#2563EB',
              textDecoration: 'none', marginBottom: '2rem',
              borderBottom: '2px solid #2563EB', paddingBottom: '0.15rem',
            }}>
              Let&apos;s Talk <ArrowRight size={16} />
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:Sales@acriotech.com" aria-label="Email Sales" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                fontSize: '0.95rem', fontWeight: 500, color: '#64748B',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: '#F1F5F9', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#2563EB',
                }}>
                  <Mail size={16} />
                </div>
                Sales@acriotech.com
              </a>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginTop: '0.25rem' }}>
                <a href="https://www.linkedin.com/company/acrio-tech" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" style={{
                  color: '#94A3B8', transition: 'all 0.2s', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  width: '40px', height: '40px', borderRadius: '12px',
                  border: '1px solid #E2E8F0', background: '#F8FAFC',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#2563EB'; e.currentTarget.style.borderColor = '#2563EB'; e.currentTarget.style.background = 'rgba(37,99,235,0.04)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#94A3B8'; e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.background = '#F8FAFC'; }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Links & Newsletter ── */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))',
              gap: '2.5rem', marginBottom: '3rem',
            }}>
              {/* SOLUTIONS */}
              <div>
                <h4 style={{
                  fontSize: '0.8rem', color: '#94A3B8', fontWeight: 700,
                  marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Solutions
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  {[
                    { label: 'Enterprise Software', href: '/solutions/enterprise-software' },
                    { label: 'AI Automation', href: '/solutions/ai-intelligent-automation' },
                    { label: 'Cloud Infrastructure', href: '/solutions/cloud-infrastructure' },
                    { label: 'Digital Transformation', href: '/solutions/digital-transformation' },
                    { label: 'Data Engineering', href: '/solutions/data-analytics' }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SERVICES */}
              <div>
                <h4 style={{
                  fontSize: '0.8rem', color: '#94A3B8', fontWeight: 700,
                  marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Services
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  {[
                    { label: 'Consulting', href: '/services/software-consulting' },
                    { label: 'Software Engineering', href: '/services/web-application-development' },
                    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
                    { label: 'Cloud & DevOps', href: '/services/devops-ci-cd' },
                    { label: 'Quality Assurance', href: '/services/qa-testing' },
                    { label: 'Support & Maintenance', href: '/services/maintenance-support' }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h4 style={{
                  fontSize: '0.8rem', color: '#94A3B8', fontWeight: 700,
                  marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Resources
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  {[
                    { label: 'Case Studies', href: '/work' },
                    { label: 'Security & Compliance', href: '/security-compliance' },
                    { label: 'Insights & News', href: '/insights' },
                    { label: 'Industries', href: '/industries' }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h4 style={{
                  fontSize: '0.8rem', color: '#94A3B8', fontWeight: 700,
                  marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Company
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', fontWeight: 500 }}>
                  {[
                    { label: 'About Acriotech', href: '/about-us' },
                    { label: 'Our Methodology', href: '/company/methodology' },
                    { label: 'Careers', href: '/company/careers' },
                    { label: 'Partners', href: '/company/partners' },
                    { label: 'Contact Us', href: '/contact-us' }
                  ].map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} style={{ color: '#64748B', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div style={{
              padding: '2rem 2.5rem',
              background: 'linear-gradient(135deg, #F8FAFC, #F1F5F9)',
              borderRadius: '20px', border: '1px solid #E2E8F0',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '1.5rem',
            }}>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', margin: 0, marginBottom: '0.3rem' }}>Subscribe to Insights</h4>
                <p style={{ fontSize: '0.9rem', color: '#94A3B8', margin: 0 }}>Latest engineering trends and company updates.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    aria-label="Email address for newsletter"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    style={{
                      padding: '0.75rem 1rem', borderRadius: '12px',
                      border: '1px solid #E2E8F0', outline: 'none',
                      width: '220px', fontSize: '0.9rem',
                      background: '#FFFFFF',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2563EB'}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={status === 'loading'}
                    style={{
                      padding: '0.75rem 1.5rem', minHeight: '44px',
                      borderRadius: '12px', background: '#0F172A', color: '#FFFFFF',
                      border: 'none', fontWeight: 600, cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      fontSize: '0.9rem', opacity: status === 'loading' ? 0.7 : 1,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#2563EB'; }}
                    onMouseLeave={(e) => { if (status !== 'loading') e.currentTarget.style.background = '#0F172A'; }}
                  >
                    {status === 'loading' ? 'Sending...' : 'Subscribe'}
                  </button>
                </div>
                {message && (
                  <p style={{
                    fontSize: '0.8rem', marginTop: '0.5rem',
                    color: status === 'success' ? '#22C55E' : '#EF4444',
                    fontWeight: 500, textAlign: 'right', width: '100%', margin: '0.5rem 0 0 0',
                  }}>
                    {message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          padding: '2.5rem 0', borderTop: '1px solid #F1F5F9',
          borderBottom: '1px solid #F1F5F9', flexWrap: 'wrap', gap: '1rem',
        }}>
          {[
            { icon: <Shield size={24} color="#0F172A" strokeWidth={1.5} />, line1: 'ISO', line2: 'Ready' },
            { icon: <Lock size={24} color="#22C55E" strokeWidth={1.5} />, line1: 'GDPR', line2: 'Compliant' },
            { icon: <Cloud size={24} color="#0F172A" strokeWidth={1.5} />, line1: 'Secure', line2: 'Development' },
            { icon: <Code size={24} color="#22C55E" strokeWidth={1.5} />, line1: 'Cloud', line2: 'Native' },
            { icon: <MapPin size={24} color="#0F172A" strokeWidth={1.5} />, line1: 'Engineered in', line2: 'Bhavnagar' }
          ].map((badge, idx, arr) => (
            <React.Fragment key={badge.line1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: '#F8FAFC', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', border: '1px solid #E2E8F0',
                }}>
                  {badge.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>{badge.line1}</span>
                  <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{badge.line2}</span>
                </div>
              </div>
              {idx < arr.length - 1 && (
                <div className="trust-divider" style={{ width: '1px', height: '32px', background: '#E2E8F0', margin: '0 2rem' }} />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Legal Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem', gap: '1.25rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem 1rem', fontSize: '0.825rem', color: '#94A3B8', fontWeight: 500 }}>
            {[
              'Contact Us', 'Security Compliance', 'IPR Complaints', 'Anti-spam Policy',
              'Terms of Service', 'Privacy Policy', 'Refund Policy', 'Trademark Policy',
              'Cookie Policy', 'GDPR Compliance', 'Abuse Policy'
            ].map((link, idx, arr) => (
              <span key={link} style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
                <a href={'/' + link.toLowerCase().replace(/ /g, '-')} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                >
                  {link}
                </a>
                {idx < arr.length - 1 && <span style={{ color: '#E2E8F0' }}>|</span>}
              </span>
            ))}
          </div>

          <div style={{ fontSize: '0.825rem', color: '#94A3B8', fontWeight: 500, textAlign: 'center' }}>
            &copy; 2026 Acriotech Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
