"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, GitMerge, Layout, ShieldCheck, Search, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomSoftwareDevelopment() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F1F5F9', color: '#475569', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Code2 size={16} /> Engineering & Delivery
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Software built for your exact <br/><span style={{ color: '#2563EB' }}>operational reality.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Off-the-shelf software forces you to change your business to fit the tool. We engineer bespoke web and mobile applications that fit perfectly into your proprietary workflows.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#2563EB', color: '#FFFFFF', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Start a Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Delivery Lifecycle (Methodology) */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>How We Build</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px' }}>Agile delivery without the chaos. We combine rigorous product discovery with test-driven development to ensure predictability.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {[
              { icon: Search, title: "1. Discovery & Design", desc: "We map out user journeys, define the domain model, and create high-fidelity interactive prototypes before coding begins." },
              { icon: Layout, title: "2. Architecture Definition", desc: "Selecting the right database schemas, API boundaries, and cloud infrastructure to ensure long-term scalability." },
              { icon: GitMerge, title: "3. Iterative Development", desc: "Two-week sprints delivering working, tested software to a staging environment for your immediate review." },
              { icon: ShieldCheck, title: "4. Testing & Handoff", desc: "Automated QA, penetration testing, and thorough documentation to ensure a seamless handover to your team." }
            ].map((step, i) => (
               <div key={i} style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #E2E8F0', position: 'relative' }}>
                 <div style={{ width: '48px', height: '48px', background: '#EFF6FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <step.icon size={24} color="#2563EB" />
                 </div>
                 <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{step.title}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{step.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Domain-Driven Design (Tech Focus) */}
      <section style={{ padding: '8rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
             <div style={{ background: '#0F172A', padding: '3rem', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
               <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontFamily: 'monospace', marginBottom: '1rem' }}>// Domain Model Example</div>
               <pre style={{ margin: 0, color: '#A5B4FC', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.6 }}>
                 <code>
                   interface OrderAggregate {'{\n'}
                   {'  '}id: string;\n
                   {'  '}status: OrderStatus;\n
                   {'  '}items: OrderLineItem[];\n
                   {'  '}calculateTotal(): Money;\n
                   {'  '}dispatch(event: OrderEvent): void;\n
                   {'}'}
                 </code>
               </pre>
             </div>
             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Domain-Driven Architecture</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  We build software that mirrors your actual business logic. By utilizing Domain-Driven Design (DDD), we create bounded contexts that prevent different parts of your application from becoming hopelessly entangled.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Clean Codebases</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Business logic is isolated from UI components and database queries.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Microservice Ready</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Clear boundaries make it easy to extract services as your user base grows.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 3: Maintainability Metrics (Outcomes) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Engineered for Handover</h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 4rem auto' }}>We don't build systems to keep you dependent on us. We build them so your internal engineering team can easily take over.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#3B82F6', marginBottom: '0.5rem' }}>&gt;85%</div>
               <div style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0' }}>Test Coverage Guarantee</div>
            </div>
            <div style={{ width: '1px', background: '#334155' }}></div>
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#3B82F6', marginBottom: '0.5rem' }}>100%</div>
               <div style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0' }}>CI/CD Pipeline Automation</div>
            </div>
            <div style={{ width: '1px', background: '#334155' }}></div>
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#3B82F6', marginBottom: '0.5rem' }}>0</div>
               <div style={{ fontSize: '1rem', fontWeight: 600, color: '#E2E8F0' }}>Proprietary Lock-in</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
