"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Compass, Target, Map, PenTool, LayoutTemplate, Users2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductDiscovery() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FDF4FF', color: '#86198F', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Compass size={16} /> Research & Prototyping
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '2rem' }}>
                Build the <span style={{ color: '#D946EF' }}>right</span> product before building the product <span style={{ color: '#D946EF' }}>right.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                A smaller, clearer bet before a larger build. We connect user needs, business intent, and technical feasibility before your engineering team commits to a delivery shape.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#D946EF', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Start a Discovery Sprint <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Discovery Board */}
            <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '2rem', border: '1px solid #E2E8F0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '40px', height: '40px', background: '#FCD34D', borderRadius: '50%', border: '4px solid #FFFFFF' }}></div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={18} color="#D946EF" /> Opportunity Canvas
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #D946EF', fontSize: '0.9rem', color: '#475569' }}>
                  <strong>User Pain:</strong> Manual reconciliation takes 15hrs/week.
                </div>
                <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #10B981', fontSize: '0.9rem', color: '#475569' }}>
                  <strong>Business Goal:</strong> Reduce churn by 12% in Q3.
                </div>
                <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #3B82F6', fontSize: '0.9rem', color: '#475569' }}>
                  <strong>Technical Risk:</strong> Legacy API rate limits during sync.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Alignment Workshop (Activities) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>The Alignment Workshop</h2>
            <p style={{ fontSize: '1.1rem', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>Product failures rarely happen because of bad code. They happen because Sales, Product, and Engineering were solving different problems. We fix that.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { icon: Users2, title: "Stakeholder Interviews", desc: "We interview key personnel across departments to uncover hidden constraints and misaligned objectives." },
               { icon: Map, title: "Service Mapping", desc: "Visually mapping the entire customer journey, including offline processes that software must account for." },
               { icon: PenTool, title: "Assumption Testing", desc: "Identifying the riskiest assumptions in the business model and designing cheap experiments to test them." }
             ].map((activity, i) => (
               <div key={i} style={{ background: '#F8FAFC', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                 <activity.icon size={36} color="#D946EF" style={{ margin: '0 auto 1.5rem auto' }} />
                 <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{activity.title}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{activity.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: User Research Methodology (Process) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Evidence, Not Opinions</h2>
                <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>
                  The highest paid person in the room shouldn't dictate product features. We rely on rigorous qualitative and quantitative user research to drive decisions.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#E879F9', marginBottom: '0.5rem' }}>Contextual</div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Inquiry</h4>
                    <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Watching users perform tasks in their actual environment, rather than a sterile lab.</p>
                  </div>
                  <div>
                    <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#38BDF8', marginBottom: '0.5rem' }}>A/B</div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Prototyping</h4>
                    <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Testing high-fidelity Figma mockups before writing a single line of backend logic.</p>
                  </div>
                </div>
             </div>
             
             {/* Quote/Impact box */}
             <div style={{ background: '#1E293B', padding: '4rem 3rem', borderRadius: '24px', border: '1px solid #334155', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#D946EF' }}></div>
               <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#F8FAFC', lineHeight: 1.5, marginBottom: '2rem' }}>
                 "Discovery is about reducing the risk of building something nobody wants. It's the cheapest insurance policy in software development."
               </p>
               <div style={{ fontSize: '0.9rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
                 Acriotech Product Standard
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 3: Discovery Artifacts (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FDF4FF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-section-sm)' }}>
             <div style={{ flexShrink: 0 }}>
                <LayoutTemplate size={120} color="#D946EF" opacity={0.2} />
             </div>
             <div>
               <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#4A044E', marginBottom: '1.5rem' }}>The Handoff</h2>
               <p style={{ fontSize: '1.1rem', color: '#701A75', lineHeight: 1.7, marginBottom: '2rem' }}>
                 At the end of a 2-4 week discovery phase, you don't just get a report. You get the exact artifacts your engineering team needs to begin sprint planning.
               </p>
               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                 {["Clickable Prototypes", "User Story Map", "Technical Feasibility Assessment", "Prioritized MVP Scope", "Go-to-Market Strategy"].map((tag, i) => (
                    <span key={i} style={{ background: '#FFFFFF', color: '#86198F', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 700, border: '1px solid #FBCFE8' }}>
                      {tag}
                    </span>
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
