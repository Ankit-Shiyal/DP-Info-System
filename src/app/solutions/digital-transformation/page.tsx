"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Compass, Users2, DatabaseZap, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DigitalTransformation() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: '#312E81', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', color: '#E0E7FF', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Compass size={16} /> Enterprise Modernization
              </div>
              <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Technology is only half the <span style={{ color: '#818CF8' }}>transformation.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#C7D2FE', lineHeight: 1.6, marginBottom: '3rem' }}>
                True digital transformation connects modern platforms to human behavior. We guide organizations through the technical re-platforming and the operational shifts required to survive in a digital-first economy.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#4F46E5', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}>
                  Plan Your Roadmap <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div style={{ background: '#1E1B4B', padding: '3rem', borderRadius: '24px', border: '1px solid #4338CA', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
               <h4 style={{ color: '#818CF8', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>Transformation Priorities</h4>
               <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 {[
                   { label: "Legacy Decommissioning", metric: "60% Cost Reduction" },
                   { label: "Data Democratization", metric: "Self-Service Access" },
                   { label: "Cloud-Native Shift", metric: "Agile Deployment" }
                 ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{item.label}</span>
                      <span style={{ background: 'rgba(79, 70, 229, 0.3)', color: '#A5B4FC', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>{item.metric}</span>
                    </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Transformation Roadmap (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>The Strategic Roadmap</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B' }}>Transformation fails when it attempts a "big bang" release. We execute in iterative, risk-managed phases.</p>
          </div>

          <div style={{ position: 'relative' }}>
             {/* Timeline Line */}
             <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: '#E2E8F0', zIndex: 0 }}></div>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-section-sm)', position: 'relative', zIndex: 1 }}>
               {[
                 { phase: "Assess & Align", title: "Technical & Cultural Audit", text: "We evaluate existing monolithic systems, data silos, and employee workflows to identify the highest friction points." },
                 { phase: "Pilot & Prove", title: "Vertical Slice Delivery", text: "We modernize one core business process end-to-end to prove the architecture and secure internal buy-in before scaling." },
                 { phase: "Scale & Shift", title: "Enterprise Rollout", text: "Executing the migration across departments using automated tools to minimize downtime and business disruption." },
                 { phase: "Optimize", title: "Continuous Innovation", text: "With a modern cloud foundation, we shift focus to predictive analytics and AI-driven workflow optimization." }
               ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '2rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#4F46E5', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '4px solid #F8FAFC', fontWeight: 700 }}>{i + 1}</div>
                    <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', border: '1px solid #E2E8F0', flex: 1, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                      <div style={{ fontSize: '0.85rem', color: '#4F46E5', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>{step.phase}</div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>{step.title}</h3>
                      <p style={{ color: '#475569', lineHeight: 1.6 }}>{step.text}</p>
                    </div>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Change Management (Human Element) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                <Users2 size={32} color="#4F46E5" />
              </div>
              <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>The Human Element</h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                The most elegant cloud architecture is useless if employees refuse to adopt it. We integrate change management directly into our engineering process.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Early stakeholder co-design sessions",
                  "Iterative user acceptance testing (UAT)",
                  "Customized training and documentation hubs",
                  "Post-launch adoption telemetry monitoring"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: '#0F172A', fontWeight: 500 }}>
                    <CheckCircle2 size={20} color="#4F46E5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Adoption Metrics</h3>
              <p style={{ color: '#64748B', marginBottom: '3rem' }}>We don't consider a project done until these targets are hit.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>Daily Active Usage</span>
                  <span style={{ fontWeight: 800, color: '#4F46E5', fontSize: '1.2rem' }}>92%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px' }}>
                  <div style={{ width: '92%', height: '100%', background: '#4F46E5', borderRadius: '4px' }}></div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ fontWeight: 600, color: '#334155' }}>Legacy System Sunsetting</span>
                  <span style={{ fontWeight: 800, color: '#10B981', fontSize: '1.2rem' }}>100%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#E2E8F0', borderRadius: '4px' }}>
                  <div style={{ width: '100%', height: '100%', background: '#10B981', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Core Platform Shifts (Tech) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
           <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Core Technical Shifts</h2>
           <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 4rem auto' }}>We modernize the three pillars of enterprise technology simultaneously.</p>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
             <div style={{ background: '#1E293B', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid #334155' }}>
               <DatabaseZap size={32} color="#818CF8" style={{ margin: '0 auto 1.5rem auto' }} />
               <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Data Modernization</h4>
               <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>Moving from on-premise relational silos to cloud-based data warehouses (Snowflake, BigQuery) for real-time analytics.</p>
             </div>
             <div style={{ background: '#1E293B', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid #334155' }}>
               <MapPin size={32} color="#34D399" style={{ margin: '0 auto 1.5rem auto' }} />
               <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Infrastructure Shift</h4>
               <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>Migrating from physical servers to orchestrated containers (Kubernetes) for infinite scalability and high availability.</p>
             </div>
             <div style={{ background: '#1E293B', padding: '3rem 2rem', borderRadius: '16px', border: '1px solid #334155' }}>
               <ShieldCheck size={32} color="#FBBF24" style={{ margin: '0 auto 1.5rem auto' }} />
               <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Security & Identity</h4>
               <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>Implementing Zero-Trust networking and centralized SSO (Okta, Azure AD) across all modernized applications.</p>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
