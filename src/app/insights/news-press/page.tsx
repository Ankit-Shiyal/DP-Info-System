"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Newspaper, ArrowUpRight, Trophy, Handshake, Globe } from "lucide-react";
import Link from "next/link";

const news = [
  {
    type: "Company Milestone",
    title: "Acriotech Achieves AWS Advanced Tier Services Partner Status",
    date: "April 02, 2026",
    desc: "Recognizing our proven track record in migrating complex legacy enterprise workloads to AWS, while adhering strictly to the Well-Architected Framework.",
    icon: Trophy
  },
  {
    type: "Open Source",
    title: "Acriotech Open-Sources 'Sentinel': A Postgres RBAC Extension",
    date: "March 15, 2026",
    desc: "We are releasing our internal Row-Level Security policy generator to the open-source community to help teams secure multi-tenant SaaS applications faster.",
    icon: Globe,
    linkText: "View on GitHub"
  },
  {
    type: "Partnership",
    title: "Announcing Strategic Partnership with Vercel",
    date: "January 28, 2026",
    desc: "Acriotech joins the Vercel Agency Partner program to accelerate our delivery of high-performance, edge-rendered React applications for enterprise commerce.",
    icon: Handshake,
    linkText: "Read the Announcement"
  }
];

export default function NewsPressPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F1F5F9', color: '#475569', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Newspaper size={16} /> News & Announcements
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Company <span style={{ color: '#475569' }}>Updates.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            The latest milestones, open-source releases, and strategic partnerships from the team at Acriotech.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             {news.map((item, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '3rem', transition: 'box-shadow 0.2s', display: 'flex', gap: '2rem' }} className="news-card">
                 <div style={{ width: '64px', height: '64px', background: '#F8FAFC', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <item.icon size={28} color="#64748B" />
                 </div>
                 <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.8rem' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase' }}>{item.type}</span>
                      <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>{item.date}</span>
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.3 }}>{item.title}</h2>
                    <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{item.desc}</p>
                    {item.linkText && (
                      <Link href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0F172A', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
                        {item.linkText} <ArrowUpRight size={16} />
                      </Link>
                    )}
                 </div>
               </div>
             ))}
          </div>
          <style jsx>{`
            .news-card:hover {
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
