"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, FileText, TrendingUp, Building2, Zap, Server } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const cases = [
  {
    client: "FinTech Unicorn (NDA)",
    industry: "Financial Services",
    title: "Scaling a Core Banking Ledger to 10k TPS",
    metric1: { label: "Latency Reduction", value: "84%" },
    metric2: { label: "Cloud Spend ROI", value: "3.2x" },
    desc: "We rewrote an unstable Ruby on Rails monolith into a highly concurrent Go microservices architecture, utilizing event sourcing and Kafka to handle high-frequency trading volumes.",
    tags: ["Go", "Apache Kafka", "Kubernetes", "PostgreSQL"]
  },
  {
    client: "Global Logistics Provider",
    industry: "Supply Chain",
    title: "Real-time Fleet Routing with NP-Hard Constraints",
    metric1: { label: "Fuel Savings", value: "12%" },
    metric2: { label: "Route Calc Time", value: "< 2s" },
    desc: "Implemented a custom OR-Tools heuristic engine to calculate optimal delivery routes for 4,000 trucks daily, factoring in strict delivery windows and real-time traffic data.",
    tags: ["Python", "OR-Tools", "React", "WebSockets"]
  },
  {
    client: "National Health Network",
    industry: "Healthcare",
    title: "Zero-Trust Patient Data Lake",
    metric1: { label: "Compliance", value: "HIPAA/SOC2" },
    metric2: { label: "Data Ingest", value: "2TB/day" },
    desc: "Architected a secure data lake on AWS GovCloud that aggregates HL7 feeds from 40+ hospitals, using strict RBAC and automated PII redaction pipelines.",
    tags: ["AWS", "Terraform", "Python", "Snowflake"]
  }
];

export default function CaseStudiesPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section className="dark-section" style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1E293B', color: '#38BDF8', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <FileText size={16} /> Customer Success
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Proof of <span style={{ color: '#38BDF8' }}>Execution.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6, maxWidth: '700px' }}>
            We don't build toys. Read detailed technical breakdowns of how we architected, deployed, and scaled mission-critical systems for enterprise clients.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              {cases.map((cs, i) => (
                <div key={i} style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                   <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>{cs.industry}</span>
                        <div style={{ width: '4px', height: '4px', background: '#CBD5E1', borderRadius: '50%' }}></div>
                        <span style={{ fontSize: '0.9rem', color: '#0EA5E9', fontWeight: 600 }}>{cs.client}</span>
                      </div>
                      <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', lineHeight: 1.2 }}>{cs.title}</h2>
                      <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>{cs.desc}</p>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                        {cs.tags.map(tag => (
                          <span key={tag} style={{ background: '#F1F5F9', color: '#334155', padding: '0.4rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>{tag}</span>
                        ))}
                      </div>

                   </div>
                   
                   <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '56px', height: '56px', background: '#E0F2FE', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={28} color="#0EA5E9" /></div>
                        <div>
                          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>{cs.metric1.value}</div>
                          <div style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginTop: '0.3rem' }}>{cs.metric1.label}</div>
                        </div>
                      </div>
                      <div style={{ height: '1px', background: '#E2E8F0' }}></div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '56px', height: '56px', background: '#ECFDF5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Zap size={28} color="#10B981" /></div>
                        <div>
                          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>{cs.metric2.value}</div>
                          <div style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', marginTop: '0.3rem' }}>{cs.metric2.label}</div>
                        </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
