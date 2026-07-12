"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Cloud, Shield, Server, Activity, ArrowUpRight, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CloudInfrastructureSolution() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero - Centered with large typography and architecture graphic */}
      <section style={{ paddingTop: '10rem', paddingBottom: '4rem', textAlign: 'center', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#E0E7FF', color: '#4338CA', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <Cloud size={16} /> Cloud & Infrastructure
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Foundation for <span style={{ color: '#4338CA' }}>scale.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            We design, build, and operate cloud environments that treat infrastructure as versioned code, security as automated policy, and scaling as a default behavior.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#4338CA', color: '#FFFFFF', padding: '1.1rem 2.5rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s', fontSize: '1.05rem' }}>
              Discuss Architecture <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Architectural Diagram Visual */}
      <section style={{ paddingBottom: '6rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
         <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ background: '#0F172A', borderRadius: '24px', padding: '3rem', border: '1px solid #1E293B', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
               
               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Server size={32} color="#818CF8" style={{ marginBottom: '1rem' }} />
                  <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Compute Clusters</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>EKS/GKE orchestrated containers with horizontal pod autoscaling and zero-downtime rollouts.</div>
               </div>

               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Shield size={32} color="#34D399" style={{ marginBottom: '1rem' }} />
                  <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Zero-Trust Network</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>mTLS enforced via service mesh. Strict ingress/egress policies and private subnets by default.</div>
               </div>

               <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Activity size={32} color="#FBBF24" style={{ marginBottom: '1rem' }} />
                  <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Global CDN & Edge</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6 }}>Static assets and cached queries served at the edge for sub-50ms latency globally.</div>
               </div>

            </div>
         </div>
      </section>

      {/* NEW SECTION 1: Migration Strategy / Methodology (Staggered Layout) */}
      <section style={{ padding: '8rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>The Path to Cloud Native</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>Migrating to the cloud isn&apos;t just changing servers. It&apos;s changing how you operate. We handle the complexity so you can focus on product.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: '6rem' }}>
            <div>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#EEF2FF', lineHeight: 1, marginBottom: '1rem' }}>01</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Audit & Infrastructure as Code (IaC)</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>We don&apos;t use click-ops. The first step in any modernization is capturing your entire infrastructure state in Terraform or Pulumi. This ensures every environment (dev, staging, prod) is perfectly reproducible and peer-reviewed via Git.</p>
            </div>
            <div style={{ background: '#0F172A', padding: '2rem', borderRadius: '16px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}>
               <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }}></div>
               </div>
               <pre style={{ margin: 0, color: '#A5B4FC', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: 1.6 }}>
                 <code>
                   module "production_cluster" {'{\n'}
                   {'  '}source = "./modules/eks"\n
                   {'  '}node_groups = {'{\n'}
                   {'    '}primary = {'{\n'}
                   {'      '}instance_types = ["m5.large"]\n
                   {'      '}min_size = 3\n
                   {'      '}max_size = 15\n
                   {'    }\n'}
                   {'  }\n'}
                   {'}'}
                 </code>
               </pre>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div style={{ order: 2 }}>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: '#EEF2FF', lineHeight: 1, marginBottom: '1rem' }}>02</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Container Orchestration</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>We migrate legacy applications into isolated containers orchestrated by Kubernetes. This unlocks automatic self-healing, seamless scaling during traffic spikes, and granular resource allocation per service.</p>
            </div>
            <div style={{ order: 1, background: '#F8FAFC', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
               {/* Decorative background elements */}
               <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: '#C7D2FE', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.6 }}></div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', zIndex: 1 }}>
                 {[1, 2, 3].map((i) => (
                   <div key={i} style={{ background: '#FFFFFF', padding: '1rem 1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                       <Terminal size={18} color="#4338CA" />
                       <span style={{ fontWeight: 600, color: '#334155' }}>pod-worker-{i}a7b</span>
                     </div>
                     <span style={{ background: '#DCFCE7', color: '#166534', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>RUNNING</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION 2: FinOps & Cost Optimization (Outcomes) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>FinOps & Cost Visibility</h2>
              <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>
                Cloud waste is the silent killer of margins. We implement aggressive resource tagging, automated instance rightsizing, and spot-instance orchestration to ensure you only pay for what you actually use.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
                {["Automated idle resource termination", "Reserved instance capacity planning", "Per-service and per-team cost attribution dashboards"].map((item, i) => (
                   <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: '#E2E8F0' }}>
                     <CheckCircle2 size={20} color="#34D399" style={{ flexShrink: 0 }} /> {item}
                   </li>
                ))}
              </ul>
            </div>
            
            <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '24px', border: '1px solid #334155' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
                 <div style={{ fontSize: '0.9rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Monthly Compute Spend</div>
                 <div style={{ color: '#34D399', fontSize: '0.9rem', fontWeight: 700 }}>-32% Optimized</div>
               </div>
               {/* Faux Chart */}
               <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '150px', marginBottom: '1rem' }}>
                 <div style={{ flex: 1, background: '#475569', height: '100%', borderRadius: '4px 4px 0 0' }}></div>
                 <div style={{ flex: 1, background: '#475569', height: '90%', borderRadius: '4px 4px 0 0' }}></div>
                 <div style={{ flex: 1, background: '#4338CA', height: '60%', borderRadius: '4px 4px 0 0' }}></div>
                 <div style={{ flex: 1, background: '#4338CA', height: '68%', borderRadius: '4px 4px 0 0' }}></div>
               </div>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748B', fontSize: '0.8rem' }}>
                 <span>Q1</span><span>Q2</span><span style={{ color: '#F8FAFC' }}>Q3 (Post-Migration)</span><span>Q4 (Proj)</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Compliance & Security FAQs */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Security & Compliance Posture</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B' }}>We build environments that satisfy auditors by default, relying on policy-as-code rather than manual checklists.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: "How do you handle secrets management?", a: "We utilize HashiCorp Vault or AWS Secrets Manager. Secrets are never hardcoded in repositories; they are injected into containers at runtime and rotated automatically." },
              { q: "Are the environments SOC 2 compliant out-of-the-box?", a: "We implement CIS benchmarking and automated compliance checks via AWS Security Hub or GCP Security Command Center. You will have the technical controls ready for SOC 2 Type II audits." },
              { q: "What is the disaster recovery SLA?", a: "Because environments are defined as code and data is continuously backed up to geographically separate regions, full environment rebuilds can often be executed in under 30 minutes (RTO)." }
            ].map((faq, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={18} color="#4338CA" /> {faq.q}
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.6, margin: 0, paddingLeft: '1.7rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
