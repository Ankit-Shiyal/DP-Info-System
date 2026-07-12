"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, GitMerge, FileCode2, PlayCircle, BarChart, Undo2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DevOpsCICD() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ECFDF5', color: '#047857', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <GitMerge size={16} /> Continuous Delivery
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                A delivery path that makes <span style={{ color: '#10B981' }}>small changes safe.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                DevOps isn't a team; it's a practice. We connect code, infrastructure, security, and operational feedback so engineering organizations can release with confidence multiple times a day.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#10B981', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Assess Your Pipeline <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Terminal Pipeline */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}></div>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                 <div style={{ display: 'flex', gap: '1rem', color: '#A5B4FC' }}>
                   <span>$ git push origin main</span>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem', color: '#94A3B8' }}>
                   <span style={{ color: '#10B981' }}>✔</span> <span>Running unit tests... (1.2s)</span>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem', color: '#94A3B8' }}>
                   <span style={{ color: '#10B981' }}>✔</span> <span>SAST security scan... (4.5s)</span>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem', color: '#94A3B8' }}>
                   <span style={{ color: '#10B981' }}>✔</span> <span>Building Docker image... (12s)</span>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem', color: '#94A3B8' }}>
                   <span style={{ color: '#10B981' }}>✔</span> <span>Terraform apply plan... (3s)</span>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem', color: '#F8FAFC', fontWeight: 700, marginTop: '0.5rem' }}>
                   <span style={{ color: '#10B981' }}>➔</span> <span>Deployment successful. Production is live.</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Infrastructure as Code (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <FileCode2 color="#2563EB" /> Terraform Configuration
               </h3>
               <pre style={{ margin: 0, color: '#475569', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 1.6, overflowX: 'hidden' }}>
                 <code>
                   resource "aws_db_instance" "production" {'{'}<br/>
                   &nbsp;&nbsp;identifier = "acriotech-prod-db"<br/>
                   &nbsp;&nbsp;engine     = "postgres"<br/>
                   &nbsp;&nbsp;instance_class = "db.r6g.large"<br/>
                   &nbsp;&nbsp;multi_az   = true<br/>
                   &nbsp;&nbsp;storage_encrypted = true<br/>
                   <br/>
                   &nbsp;&nbsp;tags = {'{'}<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;Environment = "production"<br/>
                   &nbsp;&nbsp;&nbsp;&nbsp;ManagedBy   = "terraform"<br/>
                   &nbsp;&nbsp;{'}'}<br/>
                   {'}'}
                 </code>
               </pre>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Infrastructure as Code (IaC)</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Clicking through AWS consoles is a recipe for configuration drift and security breaches. We codify 100% of your infrastructure using Terraform or Pulumi.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Environment Parity</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Staging is a perfect replica of Production because they are spun up from the exact same code.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Peer-Reviewed Infra</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Infrastructure changes require a Pull Request, enabling static analysis and security checks before deployment.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: The Deployment Pipeline (Process) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>The Golden Pipeline</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>A deployment pipeline should make good behavior easy without pretending every risk is a checkbox.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: PlayCircle, label: "1. Build", text: "Compiling code, resolving dependencies, and packaging artifacts (Docker containers)." },
              { icon: ShieldCheck, label: "2. Verify", text: "Running unit tests, integration tests, and linting rules." },
              { icon: Zap, label: "3. Secure", text: "Scanning for CVEs in third-party libraries and running static application security testing (SAST)." },
              { icon: Undo2, label: "4. Deploy & Release", text: "Using Blue/Green or Canary deployments to shift traffic slowly, ready to automatically rollback if error rates spike." }
            ].map((step, i) => (
              <div key={i} style={{ background: '#1E293B', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #334155', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                 <step.icon size={28} color="#10B981" />
                 <div>
                   <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#F8FAFC', marginBottom: '0.2rem' }}>{step.label}</h4>
                   <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>{step.text}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: DORA Metrics (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
           <BarChart size={48} color="#0F172A" style={{ margin: '0 auto 1.5rem auto' }} />
           <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Measuring Elite Performance</h2>
           <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>
             We don't guess if a DevOps transformation was successful. We measure it using the industry-standard DORA (DevOps Research and Assessment) metrics.
           </p>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden' }}>
             {[
               { title: "Deployment Frequency", goal: "Multiple times per day", metric: "Velocity" },
               { title: "Lead Time for Changes", goal: "Under 1 hour", metric: "Velocity" },
               { title: "Change Failure Rate", goal: "Less than 5%", metric: "Stability" },
               { title: "Time to Restore Service", goal: "Under 1 hour", metric: "Stability" }
             ].map((m, i) => (
               <div key={i} style={{ background: '#FFFFFF', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                 <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>{m.metric}</div>
                 <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{m.title}</h4>
                 <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Target: {m.goal}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
