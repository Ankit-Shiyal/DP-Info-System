"use client";

import Image from "next/image";
import { ArrowRight, Mail, ChevronRight, Shield, Lock, Cloud, Code, MapPin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: '#F8FAFC', color: '#0F172A', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(15,23,42,0.05)' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '6rem 2rem 3rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Top Section: Brand (Left) and Links (Right) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Left Column: Brand & Hero */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
               <div style={{ position: 'relative', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <img src="/custom-logo.svg" alt="Acriotech Logo Mark" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.2)' }} />
               </div>
               <div style={{ fontFamily: '"Nevera", sans-serif', fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.02em', marginTop: '2px' }}>
                 Acriotech
               </div>
            </div>
            
            <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0, marginBottom: '1.5rem', fontWeight: 500 }}>
              Engineering Software. Building Future.
            </p>

            <h2 style={{ fontSize: '3.2rem', fontWeight: 800, lineHeight: 1.1, margin: 0, marginBottom: '1.2rem', color: '#0F172A', letterSpacing: '-0.03em' }}>
              Building<br />
              Software<br />
              <span style={{ color: '#4B61B8' }}>That Lasts.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, margin: 0, marginBottom: '1.8rem', maxWidth: '380px' }}>
              We design, engineer and scale enterprise software, AI systems and cloud platforms that help ambitious businesses grow with confidence.
            </p>

            <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: 700, color: '#4B61B8', borderBottom: '2px solid #4B61B8', paddingBottom: '0.2rem', textDecoration: 'none', marginBottom: '2rem', transition: 'opacity 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
               Let's Talk <ArrowRight size={18} />
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <a href="mailto:Info@acriotech.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', fontWeight: 500, color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                  <Mail size={20} /> Info@acriotech.com
               </a>
               
               {/* Social Links */}
               <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginTop: '0.5rem' }}>
                  <a href="#" style={{ color: '#475569', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> 
                  </a>
                  <a href="#" style={{ color: '#475569', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </a>
                  <a href="#" style={{ color: '#475569', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                  </a>
               </div>
            </div>
          </div>

          {/* Right Section: Links & Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            {/* Links Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', paddingTop: '0.5rem' }}>
              
              {/* SOLUTIONS */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solutions</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.95rem', fontWeight: 500 }}>
                  {['Enterprise Software', 'AI Automation', 'Cloud Infrastructure', 'Digital Transformation', 'Data Engineering'].map((item) => (
                    <li key={item}>
                      <a href="#" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                        {item} <ChevronRight size={14} color="#94A3B8" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SERVICES */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Services</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.95rem', fontWeight: 500 }}>
                  {['Consulting', 'Software Engineering', 'UI/UX Design', 'Cloud & DevOps', 'Quality Assurance', 'Support & Maintenance'].map((item) => (
                    <li key={item}>
                      <a href="#" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                        {item} <ChevronRight size={14} color="#94A3B8" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESOURCES */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Resources</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.95rem', fontWeight: 500 }}>
                  {['Case Studies', 'Insights', 'Engineering Blog', 'Documentation', 'Technology Stack'].map((item) => (
                    <li key={item}>
                      <a href="#" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                        {item} <ChevronRight size={14} color="#94A3B8" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPANY */}
              <div>
                <h4 style={{ fontSize: '0.95rem', color: '#0F172A', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '0.95rem', fontWeight: 500 }}>
                  {['About Acriotech', 'Our Methodology', 'Careers', 'Partners', 'Contact Us'].map((item) => (
                    <li key={item}>
                      <a href={item === 'Contact Us' ? '/contact-us' : '#'} style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}>
                        {item} <ChevronRight size={14} color="#94A3B8" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Box */}
            <div style={{ marginTop: '3rem', padding: '2.5rem 2.5rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(15,23,42,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
               <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', margin: 0, marginBottom: '0.4rem' }}>Subscribe to Insights</h4>
                  <p style={{ fontSize: '0.95rem', color: '#64748B', margin: 0 }}>Latest engineering trends and company updates.</p>
               </div>
               <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input type="email" placeholder="Email address" style={{ padding: '0.85rem 1.2rem', borderRadius: '8px', border: '1px solid #E2E8F0', outline: 'none', width: '260px', fontSize: '0.95rem', background: '#F8FAFC' }} />
                  <button style={{ padding: '0.85rem 1.8rem', borderRadius: '8px', background: '#0F172A', color: '#FFFFFF', border: 'none', fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.background = '#0F172A'}>Subscribe</button>
               </div>
            </div>
          </div>
        </div>

        {/* Middle Band: Trust Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3rem 0', borderTop: '1px solid rgba(15,23,42,0.05)', borderBottom: '1px solid rgba(15,23,42,0.05)', flexWrap: 'wrap', gap: '0' }}>
           {[
             { icon: <Shield size={28} color="#4B61B8" strokeWidth={1.5} />, line1: 'ISO', line2: 'Ready' },
             { icon: <Lock size={28} color="#22C55E" strokeWidth={1.5} />, line1: 'GDPR', line2: 'Compliant' },
             { icon: <Cloud size={28} color="#4B61B8" strokeWidth={1.5} />, line1: 'Secure', line2: 'Development' },
             { icon: <Code size={28} color="#22C55E" strokeWidth={1.5} />, line1: 'Cloud', line2: 'Native' },
             { icon: <MapPin size={28} color="#4B61B8" strokeWidth={1.5} />, line1: 'Made in', line2: 'India' }
           ].map((badge, idx, arr) => (
             <React.Fragment key={badge.line1}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  {badge.icon}
                  <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                     <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A' }}>{badge.line1}</span>
                     <span style={{ fontSize: '0.8rem', color: '#64748B' }}>{badge.line2}</span>
                  </div>
               </div>
               {idx < arr.length - 1 && (
                 <div style={{ width: '1px', height: '40px', background: 'rgba(15,23,42,0.1)', margin: '0 3rem' }} />
               )}
             </React.Fragment>
           ))}
        </div>

        {/* Bottom Legal Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3rem', gap: '1.5rem' }}>
          
          {/* Horizontal Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem 1.2rem', fontSize: '0.85rem', color: '#64748B', fontWeight: 500 }}>
             {[
               'Contact Us', 'Security Compliance', 'IPR Complaints', 'Anti-spam Policy', 
               'Terms of Service', 'Privacy Policy', 'Refund Policy', 'Trademark Policy', 
               'Cookie Policy', 'GDPR Compliance', 'Abuse Policy'
             ].map((link, idx, arr) => (
               <span key={link} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.2rem' }}>
                 <a href={'/' + link.toLowerCase().replace(/ /g, '-')} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>{link}</a>
                 {idx < arr.length - 1 && <span style={{ color: '#CBD5E1' }}>|</span>}
               </span>
             ))}
          </div>
          
          {/* Copyright */}
          <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 500, textAlign: 'center' }}>
            © 2026 Acriotech Technologies Pvt. Ltd. All rights reserved.
          </div>
          
        </div>
        
      </div>
    </footer>
  );
}
