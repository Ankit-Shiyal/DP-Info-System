"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Cloud, Server, AlertTriangle, ShieldCheck, DatabaseBackup, Gauge } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CloudArchitecture() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section className="dark-section" style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', color: '#F8FAFC', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
              <Cloud size={16} color="#38BDF8" /> Infrastructure & Ops
            </div>
            <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Cloud foundations shaped around <span style={{ color: '#38BDF8' }}>how you operate.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '3rem' }}>
              We don't just provision servers. We design highly available, cost-optimized cloud architectures that reduce operational surprise and give your engineering team an honest view of responsibility.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact-us" style={{ background: '#38BDF8', color: '#0F172A', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                Audit Your Infrastructure <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Multi-Cloud vs Single-Cloud (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
               <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>The Pragmatic Cloud Strategy</h2>
               <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                 "Multi-cloud" is often an expensive distraction. We help organizations choose the right compute paradigm based on their actual team capability, not industry buzzwords.
               </p>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#EFF6FF', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Server size={20} color="#2563EB" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.2rem' }}>Deep Integration (Single Cloud)</h4>
                     <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Committing to AWS or Azure to fully leverage managed services like DynamoDB or CosmosDB, drastically reducing maintenance burden.</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#F0FDF4', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <ShieldCheck size={20} color="#16A34A" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.2rem' }}>Cloud-Agnostic (Multi-Cloud)</h4>
                     <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Using strictly Kubernetes and open-source data stores (PostgreSQL, Redis) when regulatory requirements demand zero vendor lock-in.</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
               <Gauge size={48} color="#0F172A" style={{ margin: '0 auto 1.5rem auto' }} />
               <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>FinOps & Cost Control</h3>
               <p style={{ color: '#475569', marginBottom: '2rem' }}>
                 Cloud sprawl can quietly destroy profit margins. We implement strict resource tagging, automated instance termination for non-prod environments, and reserved-instance financial modeling.
               </p>
               <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '1.5rem', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Average Cost Reduction</div>
                  <div style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#16A34A' }}>34%</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Serverless vs Containers (Tech) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Compute Selection Matrix</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Matching the workload to the correct compute primitive.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
             <div style={{ padding: '2.5rem', border: '1px solid #334155', borderRadius: '16px', background: '#1E293B' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38BDF8', marginBottom: '1rem' }}>Serverless (Functions)</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Ideal for event-driven, spiky, or unpredictable workloads. Scales to zero instantly. AWS Lambda, Azure Functions.
                </p>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700 }}>USE WHEN: Fast time-to-market is the highest priority.</div>
             </div>
             <div style={{ padding: '2.5rem', border: '1px solid #334155', borderRadius: '16px', background: '#1E293B' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#34D399', marginBottom: '1rem' }}>Containers (Kubernetes)</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Ideal for consistent, high-throughput, long-running processes requiring complex networking and absolute control.
                </p>
                <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700 }}>USE WHEN: Workloads are highly predictable and latency sensitive.</div>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Disaster Recovery (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFBEB' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-section-sm)' }}>
              <div style={{ background: '#FEF3C7', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                 <DatabaseBackup size={36} color="#B45309" />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#78350F', marginBottom: '1rem' }}>Designing for Catastrophe</h2>
                <p style={{ fontSize: '1.1rem', color: '#92400E', lineHeight: 1.7 }}>
                  Servers will die. Availability zones will go offline. We architect for failure by implementing active-active multi-region deployments, automated database failovers, and rigorous disaster recovery simulations (Game Days) to guarantee your Recovery Point Objective (RPO).
                </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
