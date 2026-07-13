"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Database, Search, Layout, Smartphone, Network, Cloud, GitBranch, Cpu, ShieldCheck, HeartHandshake, Users, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceList = [
  { slug: "software-consulting", name: "Software Consulting", desc: "Senior technical judgment when the architectural path is unclear.", icon: Database },
  { slug: "product-discovery", name: "Product Discovery", desc: "Connect user need, business intent, and technical feasibility.", icon: Search },
  { slug: "ui-ux-design", name: "UI & UX Design", desc: "Interfaces that make complex enterprise work easier to perform.", icon: Layout },
  { slug: "web-application-development", name: "Web App Development", desc: "Responsive web applications connecting UX to dependable domain logic.", icon: Code },
  { slug: "mobile-app-development", name: "Mobile App Development", desc: "Experiences that respect context, connectivity, and device permissions.", icon: Smartphone },
  { slug: "api-development-integration", name: "API & Integration", desc: "Interfaces between systems that handle ownership, change, and failure.", icon: Network },
  { slug: "cloud-architecture", name: "Cloud Architecture", desc: "Foundations shaped around how your team operates and scales.", icon: Cloud },
  { slug: "devops-ci-cd", name: "DevOps and CI/CD", desc: "A delivery path that connects code, infrastructure, and operational feedback.", icon: GitBranch },
  { slug: "ai-integration", name: "AI Integration", desc: "AI features with a defined job, strict bounds, and a human fallback.", icon: Cpu },
  { slug: "qa-testing", name: "QA and Testing", desc: "Quality practice matched to the exact cost and risk of failure.", icon: ShieldCheck },
  { slug: "maintenance-support", name: "Maintenance & Support", desc: "Steady care for software the business absolutely depends on.", icon: HeartHandshake },
  { slug: "dedicated-development-teams", name: "Dedicated Teams", desc: "An engineering team that fits seamlessly into your way of working.", icon: Users },
];

export default function ServicesIndexPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section className="dark-section" style={{ paddingTop: 'var(--spacing-section)', paddingBottom: 'var(--spacing-section)', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>
              Services & Engineering Capability
            </div>
            <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              The disciplines behind <span style={{ color: '#38BDF8' }}>durable software.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '3rem' }}>
              Acriotech brings product thinking, UI design, application engineering, cloud operations, and rigorous quality practices into one accountable delivery path.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>End-to-End Capabilities</h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '600px', margin: '0 auto' }}>From early-stage product discovery to post-launch cloud maintenance, we cover the full software lifecycle.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {serviceList.map((service, i) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={i} 
                style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', transition: 'all 0.2s', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                className="service-card"
              >
                 <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                   <service.icon size={24} color="#2563EB" />
                 </div>
                 <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{service.name}</h3>
                 <p style={{ color: '#475569', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{service.desc}</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563EB', fontWeight: 600, fontSize: '0.95rem', marginTop: 'auto' }}>
                   View service <ArrowRight size={16} />
                 </div>
              </Link>
            ))}
          </div>
          <style jsx>{`
            .service-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
              border-color: #BFDBFE !important;
            }
          `}</style>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Shape the right problem.</h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                Consulting and discovery turn a broad ambition into a testable product direction. We make assumptions visible before they become expensive scope.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A' }}><CheckCircle size={20} color="#2563EB" /> Product and technical discovery</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A' }}><CheckCircle size={20} color="#2563EB" /> Architecture options with tradeoffs</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 600, color: '#0F172A' }}><CheckCircle size={20} color="#2563EB" /> Sequenced delivery plans</li>
              </ul>
            </div>
            <div style={{ background: '#0F172A', padding: '4rem', borderRadius: '24px' }}>
              <div style={{ fontSize: 'var(--font-h3)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', lineHeight: 1.3 }}>
                "Build for the operating context. Design stays connected to the constraints that determine whether software is adopted."
              </div>
              <div style={{ color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>— Acriotech Engineering Standard</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
