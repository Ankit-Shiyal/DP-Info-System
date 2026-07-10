"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: '#F8FAFC', padding: '18rem 0 3rem 0', color: '#0F172A', position: 'relative', overflow: 'hidden' }}>
      
      {/* Massive Background Text */}
      <div style={{ position: 'absolute', top: '3rem', left: '0', right: '0', display: 'flex', justifyContent: 'center', fontSize: '15vw', fontWeight: 900, color: 'rgba(15,23,42,0.08)', letterSpacing: '-0.05em', pointerEvents: 'none', lineHeight: 1, whiteSpace: 'nowrap', userSelect: 'none' }}>
        ACRIOTECH
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Footer Grid */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem', marginBottom: '6rem' }}>
          
          {/* Left Column: Contact Card */}
          <div style={{ flex: '0 0 45%', minWidth: '350px' }}>
            <div style={{ padding: '2.5rem', background: '#FFFFFF', borderRadius: '16px', border: '1px solid rgba(15,23,42,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
               {/* Centered Logo Inside Box */}
               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(15,23,42,0.05)' }}>
                 <div style={{ position: 'relative', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <img src="/custom-logo.svg" alt="Acriotech Logo Mark" style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.3)' }} />
                 </div>
                 <div style={{ fontFamily: '"Nevera", sans-serif', fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', letterSpacing: '0.02em', marginTop: '4px' }}>
                   Acriotech
                 </div>
               </div>

               <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Headquarters</div>
               <p style={{ fontSize: '1rem', color: '#5B6472', lineHeight: 1.6, margin: 0, marginBottom: '2.5rem' }}>
                  14, Shiv Narayan Complex, Virani Circle,<br/>
                  Kaliyabid, Bhavnagar - 364002
               </p>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <a href="mailto:sales@acriotech.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.05rem', fontWeight: 600, color: '#0F172A', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}>
                     sales@acriotech.com <ArrowRight size={16} color="#4B61B8" />
                  </a>
                  <a href="https://www.linkedin.com/company/acrio-tech" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontSize: '1.05rem', fontWeight: 600, color: '#0F172A', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#0F172A'}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B61B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                     </svg> 
                     LinkedIn
                  </a>
               </div>
            </div>
          </div>

          {/* Middle Column: Capabilities */}
          <div style={{ flex: '0 0 20%', minWidth: '200px', paddingTop: '1rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#0F172A', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Capabilities</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1.05rem', fontWeight: 500 }}>
              <li><a href="#" style={{ color: '#5B6472', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#5B6472'}>Enterprise Software</a></li>
              <li><a href="#" style={{ color: '#5B6472', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#5B6472'}>AI Automation</a></li>
              <li><a href="#" style={{ color: '#5B6472', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#5B6472'}>Cloud Infrastructure</a></li>
              <li><a href="#" style={{ color: '#5B6472', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#5B6472'}>Data Engineering</a></li>
            </ul>
          </div>

          {/* Right Column: Company */}
          <div style={{ flex: '0 0 20%', minWidth: '200px', paddingTop: '1rem' }}>
            <h4 style={{ fontSize: '0.9rem', color: '#0F172A', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1.05rem', fontWeight: 500 }}>
              <li><a href="#" style={{ color: '#5B6472', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#5B6472'}>Work</a></li>
              <li><a href="#" style={{ color: '#5B6472', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#5B6472'}>Methodology</a></li>
              <li><a href="#" style={{ color: '#5B6472', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#5B6472'}>Insights</a></li>
              <li><a href="#" style={{ color: '#5B6472', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4B61B8'} onMouseLeave={(e) => e.currentTarget.style.color = '#5B6472'}>Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div style={{ borderTop: '1px solid rgba(15,23,42,0.1)', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          
          {/* Horizontal Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem 1.2rem', justifyContent: 'center', fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
             {[
               'Contact Us', 'Security Compliance', 'IPR Complaints', 'Anti-spam Policy', 
               'Terms of Service', 'Privacy Policy', 'Refund Policy', 'Trademark Policy', 
               'Cookie Policy', 'GDPR Compliance', 'Abuse Policy'
             ].map((link, idx, arr) => (
               <span key={link} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.2rem' }}>
                 <a href={'/' + link.toLowerCase().replace(/ /g, '-')} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>{link}</a>
                 {idx < arr.length - 1 && <span>•</span>}
               </span>
             ))}
          </div>
          
          {/* Copyright */}
          <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>
            &copy; 2026, Acrio Tech Global Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
