"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Rocket, Code2, LineChart, FileSearch, Zap, Database } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function StartupsIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF2F2', color: '#DC2626', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Rocket size={16} /> High-Growth Startups
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Engineering for <span style={{ color: '#EF4444' }}>burn rate and scale.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                Startups die when they build the wrong thing too slowly. We act as the technical co-founder for Seed and Series A companies, accelerating MVP delivery while laying a foundation that won't require a total rewrite at Series B.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#EF4444', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Accelerate Your MVP <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: MVP Dashboard */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sprint Velocity</h4>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                 <div style={{ background: '#1E293B', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #10B981' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Time to MVP</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F8FAFC' }}>8 Weeks</div>
                 </div>
                 <div style={{ background: '#1E293B', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #3B82F6' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Deployment Frequency</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F8FAFC' }}>14 / Day</div>
                 </div>
               </div>
               
               <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '1rem', borderRadius: '8px', color: '#FCA5A5', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                 <Code2 size={16} /> Focus: De-risking core business logic.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: The Seed-Stage Stack (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Zap color="#EF4444" /> The Modern Boring Stack
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#FEF2F2', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #EF4444' }}>
                   <div style={{ fontWeight: 700, color: '#7F1D1D' }}>Next.js & React</div>
                   <div style={{ fontSize: '0.85rem', color: '#991B1B' }}>Ubiquitous developer talent pool. Fast iteration.</div>
                 </div>
                 <div style={{ background: '#FEF2F2', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #EF4444' }}>
                   <div style={{ fontWeight: 700, color: '#7F1D1D' }}>PostgreSQL (Supabase/Neon)</div>
                   <div style={{ fontSize: '0.85rem', color: '#991B1B' }}>Relational certainty. Do not use NoSQL unless required.</div>
                 </div>
                 <div style={{ background: '#FEF2F2', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #EF4444' }}>
                   <div style={{ fontWeight: 700, color: '#7F1D1D' }}>Managed Auth (Clerk/Auth0)</div>
                   <div style={{ fontSize: '0.85rem', color: '#991B1B' }}>Never build login/auth from scratch when finding PMF.</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Boring Tech, Radical Product</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Early-stage companies should take market risks, not technical risks. We utilize "boring," highly-proven technology stacks that allow us to ship features rapidly without fighting experimental frameworks.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Buy vs Build</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>We leverage managed services (Stripe, SendGrid, Twilio) heavily to get to market faster.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Monolith First</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Microservices are a scaling pattern, not a starting pattern. We build clean monoliths first.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Technical Due Diligence (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Surviving Due Diligence</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>When VC firms audit your codebase for a Series A round, they look for specific red flags. We engineer your system to pass these audits flawlessly.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <FileSearch size={32} color="#FCA5A5" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Code Quality</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Enforcing strict linting (ESLint, Prettier) and static typing (TypeScript) from day one.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Database size={32} color="#FCA5A5" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Data Separation</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Ensuring multi-tenant architectures safely isolate customer data (Row-Level Security).</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Code2 size={32} color="#FCA5A5" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>IP Ownership</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Zero reliance on "black box" low-code platforms. You own 100% of the intellectual property.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Series A Scalability (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>From MVP to Enterprise</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  An MVP built by a cheap dev shop usually has to be thrown away when enterprise customers demand SSO, role-based access, and SLA guarantees. We build the "V1" with those future requirements in mind.
                </p>
              </div>
              <div style={{ background: '#F1F5F9', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                     <LineChart size={24} color="#EF4444" style={{ marginTop: '0.2rem' }} />
                     <div>
                       <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.05rem', display: 'block', marginBottom: '0.2rem' }}>Scalable Infrastructure</span>
                       <span style={{ color: '#64748B', fontSize: '0.95rem' }}>Using Vercel or AWS ECS to ensure your app doesn't crash when TechCrunch writes about you.</span>
                     </div>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                     <LineChart size={24} color="#EF4444" style={{ marginTop: '0.2rem' }} />
                     <div>
                       <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.05rem', display: 'block', marginBottom: '0.2rem' }}>Enterprise Readiness</span>
                       <span style={{ color: '#64748B', fontSize: '0.95rem' }}>Architecting for SAML/SSO and Audit Logging early, so you can close large B2B contracts.</span>
                     </div>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
