"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Code, MessagesSquare, GraduationCap, Building2, Briefcase, CheckCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DedicatedTeams() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FAFAFA', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFF6FF', color: '#1D4ED8', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Users size={16} /> Engineering Capacity
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                An engineering pod that <span style={{ color: '#2563EB' }}>fits your rhythm.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                Don't outsource to a black box. Our dedicated engineering pods embed directly into your company's Slack, Jira, and deployment cycles, operating as a seamless extension of your internal team.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#2563EB', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Build Your Pod <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Pod Integration */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '3rem', border: '1px solid #E2E8F0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)', position: 'relative' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                 <div style={{ textAlign: 'center' }}>
                   <div style={{ width: '60px', height: '60px', background: '#F1F5F9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem auto' }}>
                     <Building2 size={24} color="#64748B" />
                   </div>
                   <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0F172A' }}>Your Company</div>
                 </div>
                 
                 <div style={{ flex: 1, height: '2px', background: '#E2E8F0', margin: '0 1rem', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#EFF6FF', color: '#2563EB', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid #BFDBFE' }}>Seamless Integration</div>
                 </div>
                 
                 <div style={{ textAlign: 'center' }}>
                   <div style={{ width: '60px', height: '60px', background: '#EFF6FF', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem auto' }}>
                     <Users size={24} color="#2563EB" />
                   </div>
                   <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563EB' }}>Acriotech Pod</div>
                 </div>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: '#475569', fontWeight: 500 }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="#10B981" /> Same Slack workspace</div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="#10B981" /> Same Jira board</div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={16} color="#10B981" /> Same daily standups</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Pod Composition (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Compose Around the Work</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>Team shape follows product risk. We assemble custom pods containing the exact mix of engineering, design, and management required.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { icon: Code, role: "Senior Engineers", desc: "Full-stack, Backend, or Mobile specialists who write clean, tested, and maintainable code." },
               { icon: Briefcase, role: "Delivery Lead", desc: "A technical project manager who shields engineers from meetings and ensures sprint velocity." },
               { icon: ShieldCheck, role: "QA Automation", desc: "Engineers dedicated to writing E2E tests, ensuring no regression ever reaches production." }
             ].map((member, i) => (
               <div key={i} style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                 <member.icon size={36} color="#2563EB" style={{ margin: '0 auto 1.5rem auto' }} />
                 <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{member.role}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{member.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Agile Ceremonies (Process) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>The Operating Rhythm</h2>
                <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>
                  A successful distributed team requires radical transparency. We enforce a strict operating rhythm that keeps your internal stakeholders fully aware of our progress.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Sprint Reviews</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Live demonstrations of working software at the end of every two-week cycle.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Architecture Syncs</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Weekly alignment between our Technical Leads and your internal Principal Engineers.</p>
                  </div>
                </div>
             </div>
             
             {/* Visual */}
             <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '24px', border: '1px solid #334155' }}>
                <MessagesSquare size={48} color="#38BDF8" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '1rem' }}>Overcommunication as a Default</h3>
                <p style={{ color: '#94A3B8', marginBottom: '2rem' }}>We don't wait for status meetings. We utilize public Slack channels, detailed pull request descriptions, and daily asynchronous updates.</p>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 3: Knowledge Transfer (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <GraduationCap size={48} color="#0F172A" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Engineered for Independence</h2>
          <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>
            Our ultimate goal is not to keep you dependent on us forever. We actively upskill your internal engineering team so they can take over the codebase when you are ready.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
            <div style={{ textAlign: 'center', background: '#F8FAFC', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0', flex: 1 }}>
               <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Pair Programming</div>
               <div style={{ fontSize: '0.95rem', color: '#64748B' }}>We regularly pair our senior engineers with your junior devs.</div>
            </div>
            <div style={{ textAlign: 'center', background: '#F8FAFC', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0', flex: 1 }}>
               <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Architecture Decision Records</div>
               <div style={{ fontSize: '0.95rem', color: '#64748B' }}>Documenting the "why" behind every major technical choice.</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
