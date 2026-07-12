"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Terminal, Clock, User, ChevronRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Why We Choose PostgreSQL for Everything First",
    category: "Architecture",
    date: "Mar 12, 2026",
    author: "Elena Rodriguez",
    readTime: "8 min read",
    desc: "Before you reach for MongoDB or DynamoDB, consider that a properly tuned Postgres instance can handle 95% of 'Big Data' workloads while providing absolute relational certainty."
  },
  {
    title: "The Fallacy of 'Multi-Cloud' for Early Stage Startups",
    category: "Cloud Ops",
    date: "Feb 28, 2026",
    author: "David Chen",
    readTime: "6 min read",
    desc: "Abstracting your infrastructure to avoid vendor lock-in usually results in the worst of all worlds: high latency, lowest-common-denominator features, and massive engineering overhead."
  },
  {
    title: "Implementing RAG without Leaking PII",
    category: "AI & Machine Learning",
    date: "Feb 15, 2026",
    author: "Sarah Jenkins",
    readTime: "12 min read",
    desc: "A technical deep-dive into building Retrieval-Augmented Generation pipelines that aggressively redact Personally Identifiable Information before vector embedding."
  },
  {
    title: "Micro-Frontends: When the Cure is Worse Than the Disease",
    category: "Frontend",
    date: "Jan 30, 2026",
    author: "Marcus Thorne",
    readTime: "9 min read",
    desc: "Micro-frontends solve organizational problems, not technical ones. If your team is under 50 engineers, a clean Next.js monolith will almost always deploy faster and break less."
  }
];

export default function BlogIndex() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {false && (
        <>
      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F1F5F9', color: '#334155', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <BookOpen size={16} /> Engineering Blog
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Opinions derived from <br/><span style={{ color: '#0EA5E9' }}>production outages.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            We write about software engineering, system design, and the often messy reality of building enterprise products that people actually use.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
             {blogPosts.map((post, i) => (
                <article key={i} style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', transition: 'box-shadow 0.2s' }} className="blog-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ background: '#F0F9FF', color: '#0284C7', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
                      {post.category}
                    </span>
                    <span style={{ color: '#94A3B8', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={14} /> {post.date}
                    </span>
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.3 }}>
                    <Link href="#" style={{ textDecoration: 'none', color: 'inherit' }}>{post.title}</Link>
                  </h2>
                  <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {post.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '1.5rem' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                       <div style={{ width: '32px', height: '32px', background: '#E2E8F0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={16} color="#64748B" /></div>
                       <div>
                         <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0F172A' }}>{post.author}</div>
                         <div style={{ fontSize: '0.8rem', color: '#64748B' }}>{post.readTime}</div>
                       </div>
                     </div>
                     <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0EA5E9', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
                       Read Article <ArrowRight size={16} />
                     </Link>
                  </div>
                </article>
             ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
             <button style={{ background: '#F1F5F9', color: '#0F172A', border: '1px solid #E2E8F0', padding: '1rem 2rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}>
               Load More Articles
             </button>
          </div>
        </div>
      </section>
        </>
      )}

      <Footer />
    </div>
  );
}
