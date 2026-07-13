"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Bug, Target, Shield, TestTube, CheckCircle, SearchCode } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function QATesting() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF2F2', color: '#991B1B', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Bug size={16} /> Quality Assurance
          </div>
          <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Quality matched to the <br/><span style={{ color: '#DC2626' }}>cost of failure.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Not every feature needs 100% test coverage. But core business logic must never break. We implement layered, risk-based testing strategies to give teams fast, relevant evidence before every release.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#DC2626', color: '#FFFFFF', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Audit Your QA Process <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: The Testing Pyramid (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
               <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>The Testing Pyramid</h2>
               <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                 A heavy reliance on manual clicking or slow UI tests will cripple your deployment speed. We structure QA around the Testing Pyramid: hundreds of fast unit tests at the base, and a select few end-to-end tests at the top.
               </p>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FEE2E2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <TestTube size={20} color="#DC2626" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.2rem' }}>Unit & Contract Tests (Base)</h4>
                     <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Testing individual functions and API schemas in milliseconds. Highly reliable.</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FEF2F2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Shield size={20} color="#DC2626" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.2rem' }}>Integration Tests (Middle)</h4>
                     <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Verifying that the database, cache, and business logic communicate correctly.</p>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Visual Pyramid */}
            <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
               <div style={{ width: '20%', background: '#FCA5A5', padding: '1rem', textAlign: 'center', borderRadius: '8px 8px 0 0', color: '#7F1D1D', fontWeight: 800, fontSize: '0.9rem' }}>E2E UI Tests</div>
               <div style={{ width: '50%', background: '#F87171', padding: '1.5rem', textAlign: 'center', borderRadius: '4px', color: '#FFFFFF', fontWeight: 800, fontSize: '1rem' }}>Integration / API Tests</div>
               <div style={{ width: '90%', background: '#DC2626', padding: '2rem', textAlign: 'center', borderRadius: '0 0 8px 8px', color: '#FFFFFF', fontWeight: 800, fontSize: '1.2rem' }}>Unit / Component Tests</div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Automated End-to-End (Tech) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Automated UI Testing</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>For critical user journeys (like checkout or user registration), we utilize modern headless browsers to simulate real user behavior across the full stack.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Target size={32} color="#F87171" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Playwright & Cypress</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Next-gen testing frameworks that wait for network idle instead of relying on brittle timeouts.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <SearchCode size={32} color="#F87171" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Visual Regression</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Automatically capturing screenshots during CI to catch CSS breakages before they reach production.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <CheckCircle size={32} color="#F87171" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Accessibility Scans</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Running automated Axe audits on every pull request to ensure WCAG compliance doesn't drift.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Defect Resolution Time (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Making Defects Useful</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  "It doesn't work" is not a bug report. A good QA process produces defects that engineers can actually fix. We drastically reduce Mean Time to Resolution (MTTR) by providing perfect context.
                </p>
              </div>
              <div style={{ background: '#F1F5F9', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     "Exact reproduction steps",
                     "Environment details (Browser, OS, Device)",
                     "Network payload and console logs attached",
                     "Video recording of the failure path"
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                       <CheckCircle size={20} color="#10B981" />
                       <span style={{ fontWeight: 600, color: '#374151', fontSize: '1rem' }}>{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
