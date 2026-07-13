"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Server, Zap, Component, Layout, Cpu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WebAppDevelopment() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FAFAFA', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#EFF6FF', color: '#1D4ED8', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Code size={16} /> Full-Stack Engineering
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Web products built for <span style={{ color: '#2563EB' }}>the operating context.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build responsive web applications that connect a thoughtful user experience to dependable domain logic, robust integrations, and strict operational ownership.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#2563EB', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Your Application <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Web Stack */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '3rem', border: '1px solid #E2E8F0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)' }}>
               <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Standard Tech Stack</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                   <div style={{ width: '40px', height: '40px', background: '#DBEAFE', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Component size={20} color="#2563EB" /></div>
                   <div>
                     <div style={{ fontWeight: 700, color: '#0F172A' }}>Frontend Framework</div>
                     <div style={{ fontSize: '0.85rem', color: '#64748B' }}>React & Next.js</div>
                   </div>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                   <div style={{ width: '40px', height: '40px', background: '#DCFCE7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Server size={20} color="#16A34A" /></div>
                   <div>
                     <div style={{ fontWeight: 700, color: '#0F172A' }}>API Layer</div>
                     <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Node.js / Go (GraphQL or REST)</div>
                   </div>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FEF3C7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Layout size={20} color="#D97706" /></div>
                   <div>
                     <div style={{ fontWeight: 700, color: '#0F172A' }}>Styling & UI</div>
                     <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Tailwind CSS / Custom CSS Modules</div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Front-end Architecture (Tech) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Component-Driven Architecture</h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>We organize code by feature, not by technical type. This allows enterprise codebases to scale to millions of lines of code without becoming a tangled mess.</p>
          </div>
          
          <div style={{ background: '#0F172A', padding: '2rem', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', overflowX: 'auto' }}>
            <pre style={{ margin: 0, color: '#E2E8F0', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.6 }}>
              <code>
                src/<br/>
                ├── components/       <span style={{ color: '#64748B' }}>// Shared, dumb UI elements (Buttons, Inputs)</span><br/>
                ├── features/         <span style={{ color: '#64748B' }}>// Domain-specific modules</span><br/>
                │   ├── authentication/ <span style={{ color: '#64748B' }}>// Everything related to auth</span><br/>
                │   │   ├── components/ <span style={{ color: '#64748B' }}>// LoginForm, SignupForm</span><br/>
                │   │   ├── hooks/      <span style={{ color: '#64748B' }}>// useAuth, useSession</span><br/>
                │   │   ├── api/        <span style={{ color: '#64748B' }}>// loginUser(), logoutUser()</span><br/>
                │   │   └── types/      <span style={{ color: '#64748B' }}>// User, SessionToken</span><br/>
                │   └── billing/<br/>
                └── app/              <span style={{ color: '#64748B' }}>// Next.js routing and page assembly</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: State Management (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Mastering Application State</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  The most common cause of bugs in modern web apps is mismanaged state. We strictly separate Server State (data from APIs) from Client State (UI toggles).
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#DBEAFE', padding: '0.5rem', borderRadius: '8px' }}><Server size={20} color="#1D4ED8" /></div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.2rem' }}>Server State Handling</h4>
                      <p style={{ color: '#64748B', fontSize: '0.95rem' }}>We use tools like React Query or SWR to handle caching, background refetching, and optimistic updates.</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#DCFCE7', padding: '0.5rem', borderRadius: '8px' }}><Cpu size={20} color="#15803D" /></div>
                    <div>
                      <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.2rem' }}>Client State Handling</h4>
                      <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Keeping global state minimal. Using Context for theme/auth, and localized state (Zustand) only when necessary.</p>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <Zap size={48} color="#F59E0B" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Optimistic UI</h3>
                <p style={{ color: '#64748B', marginBottom: '2rem' }}>We update the UI instantly before the server responds, providing a sub-50ms perceived latency for users.</p>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                   <div style={{ background: '#EFF6FF', padding: '0.5rem 1rem', borderRadius: '50px', color: '#2563EB', fontWeight: 600, fontSize: '0.9rem' }}>User Clicks "Like"</div>
                   <ArrowRight size={16} color="#94A3B8" />
                   <div style={{ background: '#DCFCE7', padding: '0.5rem 1rem', borderRadius: '50px', color: '#16A34A', fontWeight: 600, fontSize: '0.9rem' }}>UI Updates (0ms)</div>
                   <ArrowRight size={16} color="#94A3B8" />
                   <div style={{ background: '#F8FAFC', padding: '0.5rem 1rem', borderRadius: '50px', color: '#64748B', fontWeight: 600, fontSize: '0.9rem', border: '1px solid #E2E8F0' }}>Server Syncs (300ms)</div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 3: Web Vitals (Metrics) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Core Web Vitals</h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto 4rem auto' }}>Performance isn't just about SEO. It's about conversion. We engineer applications to pass Google's Core Web Vitals on mobile and desktop.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ background: '#1E293B', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
               <div style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>&lt;2.5s</div>
               <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.5rem' }}>LCP</div>
               <p style={{ color: '#64748B', fontSize: '0.85rem' }}>Largest Contentful Paint. Ensures the main content loads rapidly.</p>
            </div>
            <div style={{ background: '#1E293B', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
               <div style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>&lt;100ms</div>
               <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.5rem' }}>FID</div>
               <p style={{ color: '#64748B', fontSize: '0.85rem' }}>First Input Delay. The app responds instantly to user interaction.</p>
            </div>
            <div style={{ background: '#1E293B', padding: '2rem', borderRadius: '12px', border: '1px solid #334155' }}>
               <div style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#10B981', marginBottom: '0.5rem' }}>&lt;0.1</div>
               <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.5rem' }}>CLS</div>
               <p style={{ color: '#64748B', fontSize: '0.85rem' }}>Cumulative Layout Shift. No annoying jumping content as the page loads.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
