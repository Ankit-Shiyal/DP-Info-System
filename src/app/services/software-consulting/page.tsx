"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Lightbulb, FileText, CheckCircle2, Navigation, Layers, Code2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SoftwareConsulting() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F3F4F6', color: '#111827', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Lightbulb size={16} /> Strategic Advisory
          </div>
          <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Senior technical judgment when the <span style={{ color: '#000000', textDecoration: 'underline', textDecorationColor: '#D1D5DB' }}>path is unclear.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '800px' }}>
            Consulting turns architectural uncertainty, delivery friction, or a difficult technology choice into a decision a team can confidently act on. We bring decades of enterprise engineering experience to your boardroom.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link href="/contact-us" style={{ background: '#111827', color: '#FFFFFF', padding: '1.1rem 2.5rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', fontSize: '1.05rem' }}>
              Book an Advisory Session <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: When to Engage Us (Criteria) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#111827', color: '#FFFFFF' }}>
         <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'start' }}>
               <div>
                 <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>The Catalyst</h2>
                 <p style={{ fontSize: '1.1rem', color: '#9CA3AF', lineHeight: 1.7 }}>Organizations typically bring our consulting practice in when the cost of making the wrong technical decision outweighs the cost of the project itself.</p>
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                 {[
                   { icon: Layers, title: "Platform Stagnation", text: "Your engineering team is moving too slowly, burdened by technical debt they can't afford to fix." },
                   { icon: Navigation, title: "Technology Selection", text: "You need unbiased, vendor-neutral advice on whether to build, buy, or assemble your next core system." },
                   { icon: Code2, title: "Architecture Review", text: "Before committing millions to a new build, you need a senior architect to validate the system design." },
                   { icon: FileText, title: "M&A Due Diligence", text: "Evaluating the codebase, infrastructure, and engineering practices of an acquisition target." }
                 ].map((item, i) => (
                    <div key={i} style={{ background: '#1F2937', padding: '2rem', borderRadius: '12px', border: '1px solid #374151' }}>
                       <item.icon size={24} color="#9CA3AF" style={{ marginBottom: '1rem' }} />
                       <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F3F4F6', marginBottom: '0.75rem' }}>{item.title}</h4>
                       <p style={{ color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* NEW SECTION 2: The Consulting Process (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F9FAFB' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>How We Consult</h2>
            <p style={{ fontSize: '1.1rem', color: '#4B5563', maxWidth: '600px', margin: '0 auto' }}>We don't deliver generic PowerPoint decks. We dig into codebases, conduct stakeholder interviews, and provide actionable architecture plans.</p>
          </div>

          <div style={{ position: 'relative' }}>
             {/* Timeline Line */}
             <div style={{ position: 'absolute', left: '50%', top: '0', bottom: '0', width: '2px', background: '#E5E7EB', transform: 'translateX(-50%)', zIndex: 0 }}></div>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-section-sm)', position: 'relative', zIndex: 1 }}>
               {[
                 { phase: "Week 1-2", align: "left", title: "Discovery & Audit", text: "We embed ourselves with your team. We review architecture diagrams, read actual source code, map CI/CD pipelines, and interview key engineering and business stakeholders to understand the true friction points." },
                 { phase: "Week 3-4", align: "right", title: "Options Engineering", text: "We formulate 2-3 distinct architectural or strategic paths forward. We model the tradeoffs for each path across four dimensions: Cost, Time-to-Market, Operational Risk, and Maintainability." },
                 { phase: "Week 5", align: "left", title: "Decision & Alignment", text: "We facilitate a workshop with your leadership to present the findings, debate the tradeoffs, and force a unified decision on the technical direction." }
               ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: step.align === 'left' ? 'flex-start' : 'flex-end', width: '100%' }}>
                    <div style={{ width: '45%', background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative' }}>
                      {/* Connection Dot */}
                      <div style={{ position: 'absolute', top: '50%', [step.align === 'left' ? 'right' : 'left']: '-11%', width: '16px', height: '16px', borderRadius: '50%', background: '#111827', transform: 'translateY(-50%)', border: '4px solid #F9FAFB' }}></div>
                      
                      <div style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{step.phase}</div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>{step.title}</h3>
                      <p style={{ color: '#475569', lineHeight: 1.6 }}>{step.text}</p>
                    </div>
                  </div>
               ))}
             </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION 3: Deliverables (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             <div style={{ background: '#F3F4F6', padding: '3rem', borderRadius: '24px', border: '1px solid #E5E7EB' }}>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '2rem' }}>The Output Artifacts</h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                 {[
                   "System Context & C4 Architecture Diagrams",
                   "Prioritized Technical Debt Remediation Backlog",
                   "Target Operating Model (Team Topologies)",
                   "Cloud Cost Projection Models",
                   "Vendor Assessment Scorecards"
                 ].map((item, i) => (
                   <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                     <FileText size={20} color="#6B7280" />
                     <span style={{ fontWeight: 600, color: '#374151', fontSize: '0.95rem' }}>{item}</span>
                   </div>
                 ))}
               </div>
             </div>
             
             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '1.5rem' }}>Leave behind usable artifacts.</h2>
                <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '2rem' }}>
                  A successful consulting engagement doesn't end with a presentation. It ends with a blueprint.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.7 }}>
                  We provide concrete, developer-ready artifacts: sequence diagrams for complex workflows, API contract definitions, and a prioritized backlog that your engineering team can immediately import into Jira and begin executing against.
                </p>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
