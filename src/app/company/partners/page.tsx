"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Server, Cloud, Database, Lock, Hexagon } from "lucide-react";
import Link from "next/link";

const partners = [
  {
    name: "Amazon Web Services",
    tier: "Advanced Consulting Partner",
    desc: "We build globally distributed, highly available architectures on AWS using EKS, Lambda, and DynamoDB. Certified experts in Security and Database migrations.",
    icon: Cloud,
    color: "#F59E0B"
  },
  {
    name: "Google Cloud Platform",
    tier: "Premier Partner",
    desc: "Leveraging GCP's superior networking and BigQuery data warehousing to build high-throughput analytics engines and machine learning pipelines.",
    icon: Database,
    color: "#4285F4"
  },
  {
    name: "Vercel",
    tier: "Agency Partner",
    desc: "We exclusively deploy our Next.js monoliths and frontend applications on Vercel's edge network for unparalleled core web vitals and developer velocity.",
    icon: Hexagon,
    color: "#0F172A"
  },
  {
    name: "Cloudflare",
    tier: "Enterprise Partner",
    desc: "Protecting infrastructure at the edge. We implement Cloudflare Zero Trust, WAF, and DDoS mitigation for all public-facing enterprise deployments.",
    icon: Lock,
    color: "#F97316"
  }
];

export default function PartnersPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FAFAFA', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F1F5F9', color: '#475569', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2rem' }}>
            <Server size={16} /> Technology Partners
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            We stand on the <br/><span style={{ color: '#64748B' }}>shoulders of giants.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            We don't reinvent the wheel. We integrate best-in-class managed services and cloud infrastructure to deliver secure, scalable systems.
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section style={{ padding: '8rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
             {partners.map((partner, i) => (
               <div key={i} style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }} className="partner-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div style={{ width: '64px', height: '64px', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <partner.icon size={32} color={partner.color} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>{partner.name}</h3>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: partner.color, textTransform: 'uppercase' }}>{partner.tier}</div>
                    </div>
                  </div>
                  <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>{partner.desc}</p>
               </div>
             ))}
          </div>
          <style jsx>{`
            .partner-card:hover {
              box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
              border-color: #CBD5E1 !important;
              background: #FFFFFF !important;
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Want to become a partner?</h2>
          <p style={{ fontSize: '1.15rem', color: '#94A3B8', marginBottom: '3rem' }}>We are always looking for cutting-edge infrastructure and SaaS tools to accelerate our clients' roadmaps.</p>
          <Link href="/contact-us" style={{ background: '#FFFFFF', color: '#0F172A', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s' }}>
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
