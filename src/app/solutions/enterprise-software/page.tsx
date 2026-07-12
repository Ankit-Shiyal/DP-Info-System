"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, Network, ShieldAlert, Cpu, HeartHandshake, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EnterpriseSoftware() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F1F5F9', color: '#0F172A', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Building2 size={16} /> Enterprise Grade
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Software that bears the <br/><span style={{ color: '#D97706' }}>weight of your business.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            When failure is not an option. We build and maintain complex, highly secure enterprise systems designed for massive concurrency, strict compliance, and high availability.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#0F172A', color: '#FFFFFF', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Speak with a Principal Architect <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: System Integration (Tech Focus) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
               <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Complex System Integration</h2>
               <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>Enterprise software rarely exists in a vacuum. It must communicate flawlessly with legacy mainframes, modern SaaS APIs, and third-party vendors without dropping a single packet.</p>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FEF3C7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Network size={20} color="#D97706" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.2rem' }}>Event-Driven Architecture</h4>
                     <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Decoupling systems using Kafka or RabbitMQ to ensure high-throughput, fault-tolerant message delivery.</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FEF3C7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Cpu size={20} color="#D97706" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.2rem' }}>Legacy API Wrappers</h4>
                     <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Building secure REST/GraphQL wrappers around SOAP or direct-database legacy systems to safely expose data.</p>
                   </div>
                 </div>
               </div>
            </div>
            
            <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '3rem', border: '1px solid #E2E8F0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.05)' }}>
               {/* Visual Integration Hub */}
               <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                 <div style={{ display: 'inline-block', background: '#0F172A', color: '#FFFFFF', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.2rem', boxShadow: '0 10px 15px -3px rgba(15, 23, 42, 0.4)' }}>
                   Enterprise Message Bus
                 </div>
               </div>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                 {/* Connection Lines */}
                 <div style={{ position: 'absolute', top: '-2rem', left: '15%', width: '2px', height: '2rem', background: '#CBD5E1' }}></div>
                 <div style={{ position: 'absolute', top: '-2rem', left: '50%', width: '2px', height: '2rem', background: '#CBD5E1' }}></div>
                 <div style={{ position: 'absolute', top: '-2rem', right: '15%', width: '2px', height: '2rem', background: '#CBD5E1' }}></div>
                 
                 <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '8px', textAlign: 'center', width: '30%', fontSize: '0.9rem', fontWeight: 600 }}>Salesforce</div>
                 <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '8px', textAlign: 'center', width: '30%', fontSize: '0.9rem', fontWeight: 600 }}>SAP ERP</div>
                 <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '1rem', borderRadius: '8px', textAlign: 'center', width: '30%', fontSize: '0.9rem', fontWeight: 600 }}>Custom Web App</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Enterprise Security Standards (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <ShieldAlert size={48} color="#0F172A" style={{ margin: '0 auto 1.5rem auto' }} />
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Built for the Auditor</h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>Compliance is baked into our CI/CD pipelines, not added as an afterthought.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#E2E8F0', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden' }}>
            {[
              { title: "Data at Rest", desc: "AES-256 encryption across all databases and block storage by default." },
              { title: "Data in Transit", desc: "TLS 1.3 enforced for all external and internal microservice communications." },
              { title: "Access Control", desc: "Role-Based Access Control (RBAC) with mandated Multi-Factor Authentication." },
              { title: "Audit Logging", desc: "Immutable, append-only logs for all sensitive transactions and access events." }
            ].map((sec, i) => (
              <div key={i} style={{ background: '#FFFFFF', padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{sec.title}</h4>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.6 }}>{sec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Support SLA (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
             <div style={{ flex: 1 }}>
               <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Unwavering Support SLAs</h2>
               <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>Enterprise software requires enterprise backing. Our dedicated support teams provide guaranteed response times for critical severity incidents.</p>
               
               <div style={{ background: '#1E293B', borderRadius: '12px', border: '1px solid #334155', padding: '2rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '1rem' }}>
                    <div style={{ color: '#F8FAFC', fontWeight: 700 }}>Severity 1 (Critical System Down)</div>
                    <div style={{ color: '#D97706', fontWeight: 800 }}>15 Minute Response</div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '1rem' }}>
                    <div style={{ color: '#F8FAFC', fontWeight: 700 }}>Severity 2 (Core Function Impaired)</div>
                    <div style={{ color: '#38BDF8', fontWeight: 800 }}>1 Hour Response</div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ color: '#F8FAFC', fontWeight: 700 }}>Severity 3 (Minor Bug / Question)</div>
                    <div style={{ color: '#34D399', fontWeight: 800 }}>24 Hour Response</div>
                 </div>
               </div>
             </div>
             <div style={{ flexShrink: 0 }}>
                <HeartHandshake size={120} color="#334155" />
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
