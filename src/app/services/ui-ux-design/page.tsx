"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, PenTool, Accessibility, Split, MousePointerClick, Palette, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UIUXDesign() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF1F2', color: '#BE123C', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Palette size={16} /> Human-Computer Interaction
          </div>
          <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Interfaces that make complex <br/><span style={{ color: '#E11D48' }}>work easier to perform.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            We don't just make screens look pretty. We design ergonomic experiences for enterprise products where users need to understand status, make critical decisions, and recover from mistakes without friction.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#E11D48', color: '#FFFFFF', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Review Our Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: The Double Diamond Process (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>The Double Diamond</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>Our design process oscillates between divergent thinking (exploring many options) and convergent thinking (focusing on the best solution).</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
            {[
              { icon: Split, title: "1. Discover", type: "Divergent", text: "Researching the problem space broadly. User interviews, competitive analysis, and ethnographic observation." },
              { icon: MousePointerClick, title: "2. Define", type: "Convergent", text: "Synthesizing research into clear problem statements, personas, and user journey maps." },
              { icon: Sparkles, title: "3. Develop", type: "Divergent", text: "Ideating multiple design solutions. Wireframing, rapid prototyping, and A/B testing concepts." },
              { icon: PenTool, title: "4. Deliver", type: "Convergent", text: "Finalizing high-fidelity UI, interaction micro-animations, and developer handoff documentation." }
            ].map((step, i) => (
               <div key={i} style={{ background: '#F8FAFC', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #E2E8F0', position: 'relative' }}>
                 <div style={{ position: 'absolute', top: 0, right: '2rem', background: step.type === 'Divergent' ? '#DBEAFE' : '#DCFCE7', color: step.type === 'Divergent' ? '#1D4ED8' : '#15803D', padding: '0.2rem 0.6rem', borderRadius: '0 0 8px 8px', fontSize: '0.75rem', fontWeight: 700 }}>
                   {step.type}
                 </div>
                 <step.icon size={32} color="#E11D48" style={{ marginBottom: '1.5rem' }} />
                 <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{step.title}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{step.text}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Design System (Tech Focus) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             
             {/* Visual Design System UI */}
             <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '24px', border: '1px solid #334155' }}>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem' }}>Design Tokens</div>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#E11D48', borderRadius: '50%' }}></div>
                   <div style={{ width: '40px', height: '40px', background: '#3B82F6', borderRadius: '50%' }}></div>
                   <div style={{ width: '40px', height: '40px', background: '#10B981', borderRadius: '50%' }}></div>
                   <div style={{ width: '40px', height: '40px', background: '#F59E0B', borderRadius: '50%' }}></div>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem' }}>Components</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <div style={{ padding: '0.8rem 1.5rem', background: '#E11D48', color: '#FFF', borderRadius: '6px', textAlign: 'center', fontWeight: 600 }}>Primary Button</div>
                   <div style={{ padding: '0.8rem 1.5rem', background: 'transparent', color: '#E2E8F0', border: '1px solid #475569', borderRadius: '6px', textAlign: 'center', fontWeight: 600 }}>Secondary Button</div>
                </div>
             </div>

             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Scalable Design Systems</h2>
                <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>
                  We don't design isolated screens. We build comprehensive, token-based design systems in Figma that map 1:1 with React components.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Consistency</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Ensure your app looks identical on iOS, Android, and Web.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.5rem' }}>Velocity</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Engineers assemble UI from components rather than building from scratch.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 3: Accessibility Standards (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <PenTool size={32} color="#8B5CF6" style={{ margin: '0 auto 1rem auto' }} />
          <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Inclusive by Default</h2>
          <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto 4rem auto' }}>Accessibility isn't an afterthought checklist. It is a fundamental requirement of enterprise software.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-section-sm)' }}>
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>WCAG 2.1 AA</div>
               <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>Compliance Target</div>
            </div>
            <div style={{ width: '1px', background: '#E2E8F0' }}></div>
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>Keyboard-First</div>
               <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>Navigation Support</div>
            </div>
            <div style={{ width: '1px', background: '#E2E8F0' }}></div>
            <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#0F172A', marginBottom: '0.5rem' }}>4.5:1</div>
               <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase' }}>Min Contrast Ratio</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
