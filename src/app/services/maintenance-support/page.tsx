"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Wrench, HeartHandshake, Eye, AlertCircle, Clock, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MaintenanceSupport() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F3F4F6', color: '#374151', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Wrench size={16} /> SLA & Operations
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Steady care for software the business <span style={{ color: '#0F172A', textDecoration: 'underline', textDecorationColor: '#D1D5DB' }}>depends on.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                Maintenance is more than just closing Jira tickets. It is understanding a complex system, managing change safely, and systematically reducing the cost of its next failure.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#0F172A', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Review SLA Options <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: SLA Dashboard */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2.5rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <HeartHandshake size={18} color="#94A3B8" /> Support Metrics
               </h4>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                 <div style={{ background: '#1E293B', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                   <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>P1 Response Time</div>
                   <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#10B981' }}>&lt;15m</div>
                 </div>
                 <div style={{ background: '#1E293B', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
                   <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Uptime Target</div>
                   <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#10B981' }}>99.9%</div>
                 </div>
               </div>
               <div style={{ background: '#1E293B', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Security Patches Applied</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC' }}>Zero-Day + 24h</div>
                  </div>
                  <ShieldCheck size={28} color="#10B981" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Observability & Logging (Tech) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Eye color="#4F46E5" /> Distributed Tracing
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                 <div style={{ height: '30px', background: '#EEF2FF', borderRadius: '4px', width: '100%', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '30%', background: '#4F46E5', borderRadius: '4px 0 0 4px', color: '#FFFFFF', fontSize: '0.7rem', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontWeight: 700 }}>API Gateway</div>
                 </div>
                 <div style={{ height: '30px', background: '#EEF2FF', borderRadius: '4px', width: '100%', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '30%', top: 0, height: '100%', width: '40%', background: '#6366F1', borderRadius: '4px 0 0 4px', color: '#FFFFFF', fontSize: '0.7rem', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontWeight: 700 }}>Auth Service</div>
                 </div>
                 <div style={{ height: '30px', background: '#FEE2E2', borderRadius: '4px', width: '100%', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '70%', top: 0, height: '100%', width: '15%', background: '#EF4444', borderRadius: '4px 0 0 4px', color: '#FFFFFF', fontSize: '0.7rem', display: 'flex', alignItems: 'center', paddingLeft: '0.5rem', fontWeight: 700 }}>DB Query (Failed)</div>
                 </div>
               </div>
               <p style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '1.5rem', textAlign: 'center' }}>Trace ID: a1b2c3d4e5f6</p>
             </div>

             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Telemetry & Observability</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  You cannot fix what you cannot see. Before we assume maintenance of a legacy system, we implement strict observability standards.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Structured Logging</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Moving from grep-ing text files to queryable JSON logs in Datadog or ELK.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Alert Fatigue Reduction</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Tuning alerts so engineers only wake up at 2 AM if a critical business function is actively failing.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Incident Response Flow (Process) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>The Incident Lifecycle</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>We clarify severity, ownership, and escalation paths so urgent problems do not become improvised negotiations.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: AlertCircle, label: "1. Triage & Acknowledge", text: "Automated PagerDuty routing alerts the primary on-call engineer within 60 seconds." },
              { icon: Activity, label: "2. Mitigate", text: "The immediate goal is not to fix the root cause, but to stop the bleeding (e.g., rolling back a deployment)." },
              { icon: Wrench, label: "3. Resolve", text: "Identifying the root cause and deploying a permanent hotfix." },
              { icon: Clock, label: "4. Post-Mortem", text: "Conducting a blameless review to understand why the system allowed the failure, and updating runbooks." }
            ].map((step, i) => (
              <div key={i} style={{ background: '#1E293B', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #334155', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                 <step.icon size={28} color="#38BDF8" />
                 <div>
                   <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.2rem' }}>{step.label}</h4>
                   <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>{step.text}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: System Upgrades (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
           <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Continuous Modernization</h2>
           <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>
             Maintenance isn't just about keeping the lights on. It's about preventing the system from slowly decaying into legacy technical debt.
           </p>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
               <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Dependency Management</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>Proactively updating frameworks (React, Node, Go) before they reach End-of-Life status.</p>
             </div>
             <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
               <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Database Optimization</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>Adding missing indexes and refactoring N+1 queries as the dataset grows over time.</p>
             </div>
             <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
               <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Architecture Reviews</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>Quarterly assessments to ensure the system architecture is still appropriate for the current business scale.</p>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
