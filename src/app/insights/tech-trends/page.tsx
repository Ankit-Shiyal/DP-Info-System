"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Lightbulb, Zap, TrendingDown, RefreshCcw } from "lucide-react";
import Link from "next/link";

const trends = [
  {
    title: "The Great 'Repatriation' from Cloud to Bare Metal",
    status: "Trending Up",
    icon: Zap,
    color: "#10B981",
    desc: "Following DHH's lead with 37signals, many mid-sized SaaS companies are realizing that AWS premiums for managed services outweigh the DevOps costs of racking their own servers.",
    takeaway: "If your compute workload is predictable and highly intensive, the cloud is no longer the default answer."
  },
  {
    title: "AI Coding Assistants (Copilot, Cursor, etc.)",
    status: "Mainstream Adoption",
    icon: RefreshCcw,
    color: "#3B82F6",
    desc: "We have moved past the hype phase. AI assistants are now a baseline requirement for engineering velocity, shifting the bottleneck from writing boilerplate to system architecture and code review.",
    takeaway: "Junior engineers must now index heavily on debugging and system design, as raw syntax generation is commoditized."
  },
  {
    title: "Blockchain for Enterprise Supply Chain",
    status: "Trending Down",
    icon: TrendingDown,
    color: "#EF4444",
    desc: "After billions invested in pilot programs, enterprise blockchain (like IBM TradeLens) is largely being shuttered. A centralized PostgreSQL database with strict RBAC and immutable append-only logs solves the problem faster and cheaper.",
    takeaway: "Avoid distributed ledger technology unless you operate in a truly trustless, multi-party adversarial environment."
  }
];

export default function TechTrendsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFFBEB', color: '#D97706', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Lightbulb size={16} /> Tech Trends
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Cutting through the <span style={{ color: '#D97706' }}>hype cycle.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            Our unfiltered perspective on what is actually ready for enterprise production, what is an expensive distraction, and where the industry is inevitably heading.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             {trends.map((trend, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: trend.color }}></div>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: trend.color, fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', background: `${trend.color}15`, padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                      <trend.icon size={16} /> {trend.status}
                    </div>
                 </div>
                 
                 <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.2 }}>{trend.title}</h2>
                 <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>{trend.desc}</p>
                 
                 <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #CBD5E1' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Acriotech Takeaway</div>
                    <p style={{ color: '#334155', fontWeight: 500, margin: 0, lineHeight: 1.5 }}>{trend.takeaway}</p>
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
