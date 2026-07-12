"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Search, BarChart3, Download, PieChart, Users2 } from "lucide-react";
import Link from "next/link";

const reports = [
  {
    title: "State of DevOps & CI/CD 2026",
    desc: "A survey of 500+ VP of Engineering leaders on DORA metrics, MTTR (Mean Time To Recovery), and the adoption curve of Platform Engineering over traditional DevOps.",
    date: "Q1 2026",
    metric: "500+ Teams Surveyed",
    icon: BarChart3
  },
  {
    title: "The True Cost of Cloud Egress Fees",
    desc: "An analysis of AWS, GCP, and Azure billing data across 50 enterprise clients, detailing how egress bandwidth charges often dwarf compute costs in data-heavy applications.",
    date: "Q4 2025",
    metric: "50 Enterprise Bills Analyzed",
    icon: PieChart
  },
  {
    title: "Remote Developer Productivity Index",
    desc: "Comparing PR merge velocity, code churn, and incident rates between fully remote, hybrid, and fully on-premise engineering teams.",
    date: "Q3 2025",
    metric: "1M+ Commits Analyzed",
    icon: Users2
  }
];

export default function ResearchReportsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F0FDF4', color: '#16A34A', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Search size={16} /> Research & Data
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Data over <span style={{ color: '#16A34A' }}>dogma.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            We aggregate telemetry, code metrics, and leadership surveys to publish quantitative reports on how the best software teams actually operate.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }}>
             {reports.map((report, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '3rem', display: 'flex', gap: '3rem', alignItems: 'center', transition: 'box-shadow 0.2s' }} className="report-card">
                 <div style={{ width: '80px', height: '80px', background: '#F0FDF4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <report.icon size={36} color="#16A34A" />
                 </div>
                 <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#16A34A', background: '#DCFCE7', padding: '0.2rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' }}>{report.date}</span>
                      <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>{report.metric}</span>
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.2 }}>{report.title}</h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>{report.desc}</p>
                    

                 </div>
               </div>
             ))}
          </div>
          <style jsx>{`
            .report-card:hover {
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
              border-color: #BBF7D0 !important;
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
