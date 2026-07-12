"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, FolderOpen, Code2, Layers, Smartphone, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Global Supply Chain Dashboard",
    category: "Web Application",
    client: "Tier 1 Logistics Provider",
    desc: "A React and D3.js based visualization platform tracking over 12,000 active shipments globally in real-time.",
    tech: ["React", "D3.js", "WebSockets", "Node.js"],
    icon: Globe
  },
  {
    title: "Consumer Mobile Banking App",
    category: "Mobile Application",
    client: "Challenger Bank (NDA)",
    desc: "A fully offline-capable React Native application featuring biometric auth, remote check deposit, and instant P2P transfers.",
    tech: ["React Native", "TypeScript", "Redux", "Jest"],
    icon: Smartphone
  },
  {
    title: "Automated Underwriting Engine",
    category: "System Architecture",
    client: "Commercial Insurance",
    desc: "A microservices orchestration layer built to replace a legacy mainframe, reducing policy quote times from 4 days to 12 seconds.",
    tech: ["Go", "Kubernetes", "gRPC", "PostgreSQL"],
    icon: Layers
  },
  {
    title: "Developer Portal & API Gateway",
    category: "Developer Tools",
    client: "SaaS Unicorn",
    desc: "A self-serve portal for third-party developers to generate API keys, view documentation, and monitor rate limits.",
    tech: ["Next.js", "GraphQL", "TailwindCSS", "Kong"],
    icon: Code2
  }
];

export default function FeaturedProjectsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F5F3FF', color: '#6366F1', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <FolderOpen size={16} /> Featured Work
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            The <span style={{ color: '#6366F1' }}>Portfolio.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            A curated selection of the interfaces and architectures we've designed and deployed for enterprise clients across the globe.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
             {projects.map((proj, i) => (
               <div key={i} style={{ background: '#FFFFFF', borderRadius: '24px', border: '1px solid #E2E8F0', overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'pointer' }} className="project-card">
                 <div style={{ height: '300px', background: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: '#FFFFFF', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {proj.category}
                    </div>
                    <proj.icon size={64} color="#64748B" opacity={0.5} />
                 </div>
                 <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.9rem', color: '#6366F1', fontWeight: 700, marginBottom: '0.5rem' }}>{proj.client}</div>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', lineHeight: 1.2 }}>{proj.title}</h2>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem', flex: 1 }}>{proj.desc}</p>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {proj.tech.map(t => (
                        <span key={t} style={{ background: '#F1F5F9', color: '#475569', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>{t}</span>
                      ))}
                    </div>
                 </div>
               </div>
             ))}
           </div>
           <style jsx>{`
            .project-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
