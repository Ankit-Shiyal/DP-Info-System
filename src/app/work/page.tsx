"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Briefcase, Star, Users, FolderOpen, Globe, Terminal } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const workList = [
  { slug: "featured-projects", name: "Featured Projects", desc: "A visual portfolio of the user interfaces, dashboards, and mobile applications we've shipped for our enterprise partners.", icon: FolderOpen },
  { slug: "our-clients", name: "Our Clients", desc: "From Y-Combinator seed startups to Fortune 500 institutions. See who trusts Acriotech with their core infrastructure.", icon: Users },
  { slug: "open-source", name: "Open Source", desc: "We don't just consume OSS; we contribute back. View our public repositories, NPM packages, and framework contributions.", icon: Terminal },
];

export default function WorkIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6366F1', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              Our Work
            </div>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              We ship <span style={{ color: '#6366F1' }}>production code.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, marginBottom: '3rem' }}>
              Talk is cheap. We measure our success by the stability, performance, and aesthetic quality of the software we push to production.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section style={{ padding: '0 0 6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <Link href="/work/featured-projects" style={{ textDecoration: 'none' }}>
             <div style={{ background: '#0F172A', borderRadius: '24px', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', position: 'relative', overflow: 'hidden' }} className="featured-card">
                
                {/* Simulated UI background */}
                <div style={{ position: 'absolute', right: '-10%', top: '-20%', width: '60%', height: '140%', background: 'linear-gradient(135deg, #4F46E5 0%, #0F172A 100%)', transform: 'rotate(15deg)', opacity: 0.2 }}></div>

                <div style={{ position: 'relative', zIndex: 10, maxWidth: '600px' }}>
                   <div style={{ display: 'inline-block', background: '#818CF8', color: '#0F172A', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1.5rem', textTransform: 'uppercase' }}>Featured Deployment</div>
                   <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.1 }}>Global E-Commerce Platform Rewrite</h2>
                   <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>Re-architecting a legacy monolithic storefront into a headless Next.js & Shopify Plus architecture, reducing global Time-To-Interactive (TTI) by 64%.</p>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#818CF8', fontWeight: 600 }}>
                     View Portfolio <ArrowRight size={18} />
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

      {/* Work Grid */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {workList.map((wk, i) => (
              <Link 
                href={`/work/${wk.slug}`} 
                key={i} 
                style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'all 0.2s' }}
                className="work-card"
              >
                 <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EEF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                   <wk.icon size={24} color="#6366F1" />
                 </div>
                 <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{wk.name}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{wk.desc}</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6366F1', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>
                   View details <ArrowRight size={16} />
                 </div>
              </Link>
            ))}
          </div>
          <style jsx>{`
            .work-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
              border-color: #C7D2FE !important;
              background: #FFFFFF !important;
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
