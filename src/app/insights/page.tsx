"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Presentation, FileText, Newspaper, Lightbulb, Search, PlayCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const insightList = [
  { slug: "case-studies", name: "Case Studies", desc: "Detailed examinations of how we solved complex business problems for our clients, complete with metrics and technical choices.", icon: FileText },
  { slug: "tech-trends", name: "Tech Trends", desc: "Our perspective on the hype cycle. What's actually ready for production, and what should stay in the lab.", icon: Lightbulb },
  { slug: "research-reports", name: "Research Reports", desc: "Proprietary data and surveys exploring industry benchmarks, engineering velocity, and security postures.", icon: Search },
  { slug: "webinars", name: "Webinars & Events", desc: "Live and on-demand sessions with our Principal Engineers discussing system design and operational excellence.", icon: PlayCircle },
  { slug: "news-press", name: "News & Press", desc: "Company announcements, open-source contributions, and media coverage of Acriotech.", icon: Newspaper },
];

export default function InsightsIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0EA5E9', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              Knowledge Base
            </div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              We write down <span style={{ color: '#0EA5E9' }}>how we think.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem' }}>
              Transparency is our default. We open-source our architectural decisions, publish our failures, and share the exact methodologies we use to build enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section style={{ padding: '0 0 6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/insights/whitepapers" style={{ textDecoration: 'none' }}>
             <div style={{ background: '#0F172A', borderRadius: '24px', padding: '4rem', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }} className="featured-card">
                <div>
                   <div style={{ display: 'inline-block', background: '#38BDF8', color: '#0F172A', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1.5rem', textTransform: 'uppercase' }}>New Whitepaper</div>
                   <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.2 }}>The Pragmatic Guide to Microservices in 2026</h2>
                   <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>Stop breaking apart your monolith just because Netflix did it. A data-driven analysis of when distributed systems actually make financial sense.</p>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38BDF8', fontWeight: 600 }}>
                     Read the Whitepaper <ArrowRight size={18} />
                   </div>
                </div>
                <div style={{ background: '#1E293B', padding: '2rem', borderRadius: '16px', border: '1px solid #334155' }}>
                   <div style={{ width: '100%', height: '200px', background: '#334155', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                     [ Architectural Diagram Placeholder ]
                   </div>
                </div>
             </div>
          </Link>
          <style jsx>{`
            .featured-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3) !important;
            }
          `}</style>
        </div>
      </section>

      {/* Insights Grid */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {insightList.map((ind, i) => (
              <Link 
                href={`/insights/${ind.slug}`} 
                key={i} 
                style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'all 0.2s' }}
                className="insight-card"
              >
                 <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                   <ind.icon size={24} color="#0EA5E9" />
                 </div>
                 <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{ind.name}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{ind.desc}</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0EA5E9', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>
                   Browse category <ArrowRight size={16} />
                 </div>
              </Link>
            ))}
          </div>
          <style jsx>{`
            .insight-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
              border-color: #BAE6FD !important;
              background: #FFFFFF !important;
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
