"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, PlayCircle, Calendar, Video, Clock } from "lucide-react";
import Link from "next/link";

const webinars = [
  {
    title: "Mastering Database Sharding in Postgres",
    status: "Upcoming Live",
    date: "April 15, 2026",
    time: "1:00 PM EST",
    desc: "When vertically scaling your database isn't enough anymore. Join our Principal Data Architect to walk through a live implementation of Citus for horizontally scaling a SaaS application.",
    speaker: "Michael Chang, Principal Data Architect"
  },
  {
    title: "Zero-Downtime Migrations: A Masterclass",
    status: "On Demand",
    date: "Recorded Feb 2026",
    time: "45 min",
    desc: "How to move 10 million rows from MySQL to PostgreSQL without dropping a single write operation. A step-by-step guide to logical replication and blue-green deployments.",
    speaker: "Sarah Jenkins, VP of Engineering"
  },
  {
    title: "The React Server Components Paradigm Shift",
    status: "On Demand",
    date: "Recorded Nov 2025",
    time: "60 min",
    desc: "Stop shipping massive JS bundles to the client. A deep dive into Next.js App Router, RSCs, and how to mentally shift from client-side state to server-side rendering.",
    speaker: "Marcus Thorne, Lead Frontend Engineer"
  }
];

export default function WebinarsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section className="dark-section" style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1E293B', color: '#F43F5E', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <PlayCircle size={16} /> Webinars & Masterclasses
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Watch how we <span style={{ color: '#F43F5E' }}>build it.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6, maxWidth: '700px' }}>
            No marketing fluff, no sales pitches. Just our senior engineers sharing their screens, writing code, and explaining complex architectural patterns live.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '3rem' }}>
             {webinars.map((webinar, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden', display: 'flex', transition: 'box-shadow 0.2s' }} className="webinar-card">
                 <div style={{ width: '300px', background: '#1E293B', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', flexShrink: 0 }}>
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: webinar.status === 'Upcoming Live' ? '#F43F5E' : '#475569', color: '#FFFFFF', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                      {webinar.status}
                    </div>
                    <Video size={48} color="#475569" style={{ marginBottom: '1rem' }} />
                    <div style={{ color: '#94A3B8', fontSize: '0.9rem', fontWeight: 600 }}>Click to Watch</div>
                 </div>
                 <div style={{ padding: '3rem', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                      <span style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {webinar.date}</span>
                      <span style={{ fontSize: '0.85rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} /> {webinar.time}</span>
                    </div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.2 }}>{webinar.title}</h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{webinar.desc}</p>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0F172A', marginBottom: '2rem' }}>By {webinar.speaker}</div>
                    
                    <button style={{ background: webinar.status === 'Upcoming Live' ? '#F43F5E' : '#0F172A', color: '#FFFFFF', border: 'none', padding: '0.9rem 1.8rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                      {webinar.status === 'Upcoming Live' ? 'Register Now' : 'Watch On Demand'} <ArrowRight size={18} />
                    </button>
                 </div>
               </div>
             ))}
          </div>
          <style jsx>{`
            .webinar-card:hover {
              box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
