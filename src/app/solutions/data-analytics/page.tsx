"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Database, LineChart, BarChart3, PieChart, Layers, Filter, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DataAnalyticsSolution() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero - Left Aligned with Analytical UI Graphic */}
      <section style={{ paddingTop: '9rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F0FDF4', color: '#166534', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <BarChart3 size={16} /> Advanced Data Analytics
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '2rem' }}>
                Turn fragmented data into <span style={{ color: '#16A34A' }}>predictable growth.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build modern data stacks—from ELT pipelines to real-time dashboards—that give your executive team total visibility and predictive insight into business operations.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#16A34A', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Request Data Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Faux Dashboard UI Graphic */}
            <div style={{ background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              <div style={{ background: '#F9FAFB', padding: '1rem 1.5rem', borderBottom: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                 <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.9rem' }}>Revenue Intelligence</div>
                 <div style={{ display: 'flex', gap: '0.5rem' }}>
                   <div style={{ background: '#E5E7EB', borderRadius: '4px', padding: '0.2rem 0.5rem', fontSize: '0.7rem', color: '#4B5563', fontWeight: 600 }}>YTD</div>
                   <div style={{ background: '#16A34A', borderRadius: '4px', padding: '0.2rem 0.5rem', fontSize: '0.7rem', color: '#FFFFFF', fontWeight: 600 }}>Q3</div>
                 </div>
              </div>
              <div style={{ padding: '2rem' }}>
                 <div style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Total ARR</div>
                 <div style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                   $4.2M <span style={{ fontSize: '1rem', color: '#16A34A', display: 'flex', alignItems: 'center' }}>+18.4%</span>
                 </div>
                 {/* Faux Bar Chart */}
                 <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', height: '120px' }}>
                   {[40, 60, 45, 80, 65, 90, 75, 100].map((h, i) => (
                     <div key={i} style={{ flex: 1, background: i === 7 ? '#16A34A' : '#DCFCE7', height: `${h}%`, borderRadius: '4px 4px 0 0' }}></div>
                   ))}
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Analytics Maturity Model (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>The Data Maturity Curve</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>We help organizations move from historical reporting (what happened) to prescriptive analytics (what should we do).</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
            {[
              { level: "Phase 1", title: "Descriptive", desc: "Data consolidation, cleaning, and historical BI dashboards. 'What happened?'" },
              { level: "Phase 2", title: "Diagnostic", desc: "Deep drill-downs, anomaly detection, and root-cause analysis. 'Why did it happen?'" },
              { level: "Phase 3", title: "Predictive", desc: "Machine learning forecasting, churn prediction, and demand modeling. 'What will happen?'" },
              { level: "Phase 4", title: "Prescriptive", desc: "Automated decision engines and optimization algorithms. 'What should we do?'" }
            ].map((step, i) => (
               <div key={i} style={{ background: '#FFFFFF', padding: '2.5rem 2rem', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative' }}>
                 <div style={{ position: 'absolute', top: 0, left: '2rem', width: '40px', height: '4px', background: '#16A34A', borderRadius: '0 0 4px 4px' }}></div>
                 <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#16A34A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>{step.level}</div>
                 <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>{step.title}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>{step.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Data Pipeline Architecture (Tech Stack) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem' }}>Modern Data Stack Architecture</h2>
              <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '2rem' }}>
                Legacy monolithic databases can&apos;t scale for analytical workloads. We implement the Modern Data Stack (MDS)—separating storage, compute, and transformation—to deliver lightning-fast queries across petabytes of data.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Filter size={20} color="#34D399" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>ELT (Extract, Load, Transform)</h4>
                     <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Using Fivetran or Airbyte to stream raw data directly into the warehouse before applying dbt transformations.</p>
                   </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Database size={20} color="#60A5FA" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.3rem' }}>Cloud Data Warehousing</h4>
                     <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Centralizing analytics in Snowflake or BigQuery for unlimited scalability and zero maintenance.</p>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Dark Mode Architecture Diagram */}
            <div style={{ background: '#1E293B', padding: '3rem', borderRadius: '24px', border: '1px solid #334155' }}>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem', textAlign: 'center' }}>
                 
                 {/* Sources */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>Sources</div>
                   <div style={{ background: '#0F172A', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem' }}>PostgreSQL</div>
                   <div style={{ background: '#0F172A', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem' }}>Salesforce API</div>
                   <div style={{ background: '#0F172A', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem' }}>Stripe</div>
                 </div>

                 {/* Warehouse */}
                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                   <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>Warehouse (Snowflake)</div>
                   <div style={{ background: 'rgba(52, 211, 153, 0.1)', padding: '2rem 1rem', borderRadius: '8px', border: '1px solid rgba(52, 211, 153, 0.2)', color: '#34D399', fontWeight: 700 }}>
                     dbt Core Transform
                   </div>
                 </div>

                 {/* BI */}
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                   <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>BI & Analytics</div>
                   <div style={{ background: '#0F172A', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem' }}>Looker</div>
                   <div style={{ background: '#0F172A', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem' }}>Tableau</div>
                   <div style={{ background: '#0F172A', padding: '1rem', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem' }}>ML Models</div>
                 </div>

               </div>
            </div>
          </div>

        </div>
      </section>

      {/* NEW SECTION 3: Business Value KPIs (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>Measurable Business Value</h2>
             <p style={{ fontSize: '1.1rem', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>Data projects fail when they lack business alignment. We engineer pipelines specifically to move these core KPIs.</p>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
             {[
               { icon: LineChart, val: "CAC / LTV", title: "Customer Acquisition Insights", text: "Attribute revenue accurately across multi-touch marketing campaigns to optimize ad spend." },
               { icon: Search, val: "Net Retention", title: "Churn Prediction", text: "Identify at-risk accounts based on product usage telemetry 60 days before they cancel." },
               { icon: Layers, val: "COGS", title: "Operational Efficiency", text: "Reduce inventory carrying costs and optimize supply chain routing through real-time demand signals." }
             ].map((kpi, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#F0FDF4', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <kpi.icon size={28} color="#16A34A" />
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem' }}>{kpi.val}</div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#374151', marginBottom: '1rem' }}>{kpi.title}</h4>
                  <p style={{ color: '#6B7280', lineHeight: 1.6, fontSize: '0.95rem' }}>{kpi.text}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
