"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Settings, Repeat, Layers, Clock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BusinessProcessAutomation() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section className="dark-section" style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', color: '#F8FAFC', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
              <Settings size={16} color="#38BDF8" /> Process Engineering
            </div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Orchestrate work at <span style={{ color: '#38BDF8' }}>scale.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '3rem' }}>
              We eliminate manual data entry, disconnected spreadsheets, and fragmented communication by designing end-to-end automated workflows that span your entire enterprise ecosystem.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/contact-us" style={{ background: '#38BDF8', color: '#0F172A', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.2s' }}>
                Audit Your Processes <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
             {[
               { icon: Repeat, title: "RPA Integration", desc: "Deploy headless bots to interact with legacy systems (AS/400, SAP) where APIs don't exist." },
               { icon: Layers, title: "Workflow Orchestration", desc: "Connect SaaS tools via iPaaS or custom middleware. E.g., Salesforce to Jira to NetSuite." },
               { icon: Clock, title: "Approval Routing", desc: "Rule-based engines that automatically route exceptions to the correct stakeholder." }
             ].map((feature, i) => (
                <div key={i} style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                   <feature.icon size={32} color="#0284C7" style={{ marginBottom: '1.5rem' }} />
                   <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{feature.title}</h3>
                   <p style={{ color: '#475569', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Process Mining (Methodology) */}
      <section style={{ padding: '6rem 0', background: '#F1F5F9' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Process Mining Methodology</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>We don't automate broken processes. We use data-driven process mining to map how work actually happens across your organization, identifying bottlenecks before we write a single line of code.</p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    "Event log extraction from ERPs and CRMs",
                    "Visual mapping of the 'happy path' vs reality",
                    "Identification of highest-ROI automation targets",
                    "Standardization of rules prior to bot deployment"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: '#1E293B', fontWeight: 500 }}>
                      <ShieldCheck size={20} color="#0284C7" /> {item}
                    </li>
                  ))}
                </ul>
             </div>
             <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
                {/* Visual Placeholder for Process Mining */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ background: '#E0F2FE', padding: '1rem', borderRadius: '8px', textAlign: 'center', color: '#0369A1', fontWeight: 600 }}>Order Received</div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}><ArrowRight size={24} color="#CBD5E1" style={{ transform: 'rotate(90deg)' }} /></div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ flex: 1, background: '#FEF2F2', padding: '1rem', borderRadius: '8px', textAlign: 'center', color: '#991B1B', fontWeight: 600, border: '2px dashed #FCA5A5' }}>Manual Data Entry (35m)</div>
                    <div style={{ flex: 1, background: '#DCFCE7', padding: '1rem', borderRadius: '8px', textAlign: 'center', color: '#166534', fontWeight: 600, border: '2px solid #86EFAC' }}>Automated API Sync (0.2s)</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Workflow Engine Architecture (Tech) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Enterprise Tech Stack</h2>
          <p style={{ fontSize: '1.1rem', color: '#64748B', marginBottom: '4rem' }}>We utilize industry-leading orchestration engines to ensure reliability, auditability, and scalability.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>RPA Platforms</h4>
                <p style={{ color: '#64748B', fontSize: '0.9rem' }}>UiPath, Automation Anywhere, Blue Prism</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Integration (iPaaS)</h4>
                <p style={{ color: '#64748B', fontSize: '0.9rem' }}>MuleSoft, Workato, Boomi, Zapier Enterprise</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #E2E8F0', borderRadius: '12px' }}>
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Custom Middleware</h4>
                <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Node.js, Go, Python, AWS Step Functions</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: ROI Timeline (Outcomes) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Expected Outcomes</h2>
                <p style={{ color: '#94A3B8', lineHeight: 1.6 }}>Automation projects should pay for themselves within 6-9 months. We measure success strictly through recovered employee hours and error reduction rates.</p>
              </div>
              <div style={{ display: 'flex', gap: '2rem' }}>
                 <div style={{ flex: 1, background: '#1E293B', padding: '2.5rem', borderRadius: '16px' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: '#38BDF8', marginBottom: '1rem' }}>70%</div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F8FAFC', marginBottom: '0.5rem' }}>Reduction in Manual Entry</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Frees your team to focus on cognitive, high-value decision making.</p>
                 </div>
                 <div style={{ flex: 1, background: '#1E293B', padding: '2.5rem', borderRadius: '16px' }}>
                    <div style={{ fontSize: '3rem', fontWeight: 800, color: '#34D399', marginBottom: '1rem' }}>99.9%</div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F8FAFC', marginBottom: '0.5rem' }}>Accuracy Rate</h4>
                    <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>Eliminates human error from repetitive copy-paste workflows.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
