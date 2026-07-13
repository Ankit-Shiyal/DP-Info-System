"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Network, Code2, Lock, Activity, BookOpen, Fingerprint } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function APIIntegration() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF3C7', color: '#B45309', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Network size={16} /> Data Portability
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Interfaces built for <span style={{ color: '#D97706' }}>resilience.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                Good APIs make ownership, change, and failure explicitly visible. We build integration boundaries that support your current workflows while anticipating future scale.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#D97706', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Integration Needs <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: API Monitor */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                     <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></div>
                     <span style={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.9rem' }}>api.acriotech.com</span>
                  </div>
                  <div style={{ color: '#10B981', fontSize: '0.85rem', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>99.99% Uptime</div>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', color: '#A5B4FC' }}>
                   <span>GET /v2/customers/1482</span> <span style={{ color: '#10B981' }}>200 OK (42ms)</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', color: '#A5B4FC' }}>
                   <span>POST /v2/payments/charge</span> <span style={{ color: '#10B981' }}>201 Created (120ms)</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', color: '#A5B4FC' }}>
                   <span>GET /v1/legacy-sync</span> <span style={{ color: '#F59E0B' }}>429 Rate Limited (12ms)</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', color: '#A5B4FC' }}>
                   <span>PUT /v2/customers/1482</span> <span style={{ color: '#10B981' }}>200 OK (55ms)</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Contract-First Design (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Code2 color="#D97706" /> OpenAPI Specification
               </h3>
               <pre style={{ margin: 0, color: '#475569', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 1.6, overflowX: 'hidden' }}>
                 <code>
                   paths:<br/>
                   &nbsp;&nbsp;/users:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;post:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;summary: Create user<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;requestBody:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required: true<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;application/json:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;schema:<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ref: '#/components/schemas/User'<br/>
                 </code>
               </pre>
             </div>

             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Contract-First Engineering</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  We write the OpenAPI (Swagger) or GraphQL schema before a single line of backend logic is coded. This creates a binding contract between front-end, back-end, and external partners.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Parallel Development</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Frontend teams can build against mock servers generated instantly from the contract.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Automated Validation</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>CI/CD pipelines automatically reject backend code if it breaks the established API contract.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: API Gateway Architecture (Tech) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Secured at the Edge</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>We use enterprise API Gateways (like Kong or AWS API Gateway) to abstract security and routing away from your core microservices.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B' }}>
                <Lock size={28} color="#D97706" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Authentication</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>JWT validation and OAuth2 scopes enforced before requests ever reach your servers.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B' }}>
                <Activity size={28} color="#D97706" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Rate Limiting</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Throttling malicious actors and preventing DDoS attacks via tiered usage plans.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B' }}>
                <Fingerprint size={28} color="#D97706" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Traceability</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Injecting correlation IDs to track requests across distributed microservices via Datadog.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Developer Experience/Docs (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FEF3C7' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem' }}>
              <div style={{ background: '#FFFFFF', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                 <BookOpen size={36} color="#B45309" />
              </div>
              <div style={{ maxWidth: '600px' }}>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#78350F', marginBottom: '1rem' }}>Developer Experience matters.</h2>
                <p style={{ fontSize: '1.1rem', color: '#92400E', lineHeight: 1.7 }}>
                  An API is only as good as its documentation. We auto-generate interactive, beautiful documentation portals (like Stripe's) directly from the code annotations, ensuring they never fall out of date.
                </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
