"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, RefreshCcw, HardDrive, SplitSquareHorizontal, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LegacySystemModernization() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: '#FAFAFA', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEE2E2', color: '#B91C1C', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <RefreshCcw size={16} /> Technical Debt Eradication
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Retire your technical debt. <span style={{ color: '#DC2626' }}>Safely.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem' }}>
                Replacing a core legacy system is like changing the engine of an airplane mid-flight. We use proven architectural patterns to modernize monolithic systems with zero business disruption.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#DC2626', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Assess Legacy Risk <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Monolith to Microservices */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '3rem', border: '1px solid #E2E8F0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ background: '#94A3B8', width: '80px', height: '80px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyItems: 'center' }}><HardDrive size={32} color="#FFFFFF" style={{ margin: '0 auto' }} /></div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#0F172A' }}>The Monolith</div>
                      <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Fragile, undocumented, unscalable.</div>
                    </div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ArrowRight size={24} color="#CBD5E1" style={{ transform: 'rotate(90deg)' }} />
                 </div>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1, background: '#EFF6FF', height: '60px', borderRadius: '8px', border: '2px solid #BFDBFE' }}></div>
                    <div style={{ flex: 1, background: '#EFF6FF', height: '60px', borderRadius: '8px', border: '2px solid #BFDBFE' }}></div>
                    <div style={{ flex: 1, background: '#EFF6FF', height: '60px', borderRadius: '8px', border: '2px solid #BFDBFE' }}></div>
                 </div>
                 <div style={{ textAlign: 'center', fontWeight: 700, color: '#2563EB', fontSize: '0.9rem' }}>Microservice Architecture</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: The Strangler Pattern (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <SplitSquareHorizontal size={48} color="#DC2626" style={{ margin: '0 auto 1.5rem auto' }} />
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>The Strangler Fig Pattern</h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>We never advocate for a complete "rip and replace." It's too risky. Instead, we use the Strangler Pattern to systematically dismantle the monolith.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
               <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#DC2626', marginBottom: '1rem' }}>Phase 1</div>
               <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>The Facade</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>We deploy a routing proxy in front of the legacy system to intercept all traffic without changing the underlying code.</p>
             </div>
             <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
               <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#DC2626', marginBottom: '1rem' }}>Phase 2</div>
               <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Extraction</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>We identify a specific business domain (e.g., Billing), rebuild it as a modern microservice, and redirect the proxy.</p>
             </div>
             <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
               <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#DC2626', marginBottom: '1rem' }}>Phase 3</div>
               <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Elimination</h4>
               <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>Once all domains are extracted, the monolith handles zero traffic and can be safely decommissioned.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Refactoring vs Replatforming (Tech Options) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
               <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Choosing the Right Path</h2>
               <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>Not all technical debt is created equal. We analyze your codebase to determine the most cost-effective modernization strategy.</p>
               
               <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none', padding: 0 }}>
                 <li style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#38BDF8', fontWeight: 800 }}>01</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Re-hosting (Lift & Shift)</h4>
                      <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Moving the exact same system from on-prem to the cloud. Fast, but retains technical debt.</p>
                    </div>
                 </li>
                 <li style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#38BDF8', fontWeight: 800 }}>02</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Re-platforming</h4>
                      <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Minor code adjustments to take advantage of cloud-native services (e.g., swapping a self-hosted DB for Amazon RDS).</p>
                    </div>
                 </li>
                 <li style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ color: '#38BDF8', fontWeight: 800 }}>03</div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.2rem' }}>Refactoring</h4>
                      <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Rewriting the application architecture entirely to make it cloud-native. Highest ROI, but longest timeline.</p>
                    </div>
                 </li>
               </ul>
            </div>
            
            <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '16px', border: '1px solid #334155' }}>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.5rem' }}>Codebase Audit Focus</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 {["Coupling & Cohesion analysis", "Cyclomatic complexity scoring", "Test coverage gaps", "Outdated third-party dependencies"].map((item, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                       <CheckCircle size={18} color="#34D399" />
                       <span style={{ fontSize: '0.95rem', color: '#E2E8F0' }}>{item}</span>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Downtime Mitigation (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FEE2E2' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
           <Clock size={48} color="#B91C1C" style={{ margin: '0 auto 1.5rem auto' }} />
           <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#7F1D1D', marginBottom: '1.5rem' }}>Zero-Downtime Guarantee</h2>
           <p style={{ fontSize: '1.1rem', color: '#991B1B', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
             Your business cannot afford to go offline during a migration. By utilizing Blue/Green deployment strategies and real-time database replication, we guarantee cutovers that your end-users won't even notice.
           </p>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '12px', border: '1px solid #FCA5A5' }}>
                 <div style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#B91C1C', marginBottom: '0.5rem' }}>100%</div>
                 <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#7F1D1D', textTransform: 'uppercase' }}>Data Integrity Maintained</div>
              </div>
              <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '12px', border: '1px solid #FCA5A5' }}>
                 <div style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#B91C1C', marginBottom: '0.5rem' }}>&lt;1s</div>
                 <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#7F1D1D', textTransform: 'uppercase' }}>Traffic Cutover Latency</div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
