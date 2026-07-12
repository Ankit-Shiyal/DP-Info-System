"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Presentation, Download, FileText, Lock, LayoutTemplate } from "lucide-react";
import Link from "next/link";

const whitepapers = [
  {
    title: "The Pragmatic Guide to Microservices in 2026",
    theme: "Architecture",
    icon: LayoutTemplate,
    desc: "A data-driven analysis of when distributed systems actually make financial sense, and when you should stick to a modular monolith. Includes cost-benefit matrices based on AWS/GCP pricing.",
    pages: 42,
    date: "March 2026"
  },
  {
    title: "Zero-Trust Architecture for Cloud Native Apps",
    theme: "Security",
    icon: Lock,
    desc: "How to implement continuous verification across microservices boundaries. A practical guide to mTLS, JWT validation, and RBAC policy enforcement at the API gateway level.",
    pages: 35,
    date: "January 2026"
  },
  {
    title: "Serverless Economics: The Hidden Costs",
    theme: "FinOps",
    icon: Presentation,
    desc: "An engineering leader's guide to predicting AWS Lambda and DynamoDB bills at scale. We analyze cold start penalties, API Gateway overhead, and when to migrate back to containers.",
    pages: 28,
    date: "November 2025"
  }
];

export default function WhitepapersPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F5F3FF', color: '#7C3AED', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Presentation size={16} /> Whitepapers & Guides
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Deep architectural <span style={{ color: '#7C3AED' }}>research.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            Comprehensive, multi-page PDF guides written by our Principal Engineers. We dive past the marketing fluff into the actual code and cost structures of modern systems.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }}>
             {whitepapers.map((wp, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '3rem', display: 'flex', gap: '3rem', alignItems: 'center', transition: 'box-shadow 0.2s' }} className="wp-card">
                 <div style={{ width: '120px', height: '160px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0, gap: '1rem', boxShadow: '5px 5px 15px rgba(0,0,0,0.05)' }}>
                    <wp.icon size={32} color="#7C3AED" />
                    <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase' }}>PDF</div>
                 </div>
                 <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#7C3AED', background: '#F5F3FF', padding: '0.2rem 0.6rem', borderRadius: '4px', textTransform: 'uppercase' }}>{wp.theme}</span>
                      <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{wp.pages} Pages • {wp.date}</span>
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.2 }}>{wp.title}</h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>{wp.desc}</p>
                    
                    <a href="/sample-whitepaper.txt" download={`${wp.title}.txt`} style={{ background: '#7C3AED', color: '#FFFFFF', border: 'none', padding: '0.9rem 1.8rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', transition: 'background 0.2s', textDecoration: 'none' }}>
                      <Download size={18} /> Download Whitepaper
                    </a>
                 </div>
               </div>
             ))}
          </div>
          <style jsx>{`
            .wp-card:hover {
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
              border-color: #DDD6FE !important;
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
