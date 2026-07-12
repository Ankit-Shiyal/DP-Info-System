"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Terminal, Code2, Star, GitFork, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const repos = [
  {
    name: "acriotech/sentinel-rbac",
    desc: "A PostgreSQL extension that dynamically generates Row-Level Security (RLS) policies based on a declarative JSON schema. Used in production to secure multi-tenant SaaS applications.",
    stars: "1.2k",
    forks: "142",
    lang: "C"
  },
  {
    name: "acriotech/react-native-offline-crdt",
    desc: "A headless React Native provider that wraps SQLite and implements Conflict-free Replicated Data Types (CRDTs) for true offline-first mobile applications.",
    stars: "850",
    forks: "89",
    lang: "TypeScript"
  },
  {
    name: "acriotech/terraform-govcloud-baseline",
    desc: "A Terraform module that spins up a FedRAMP High baseline architecture in AWS GovCloud, complete with FIPS-compliant transit gateways and immutable audit logging.",
    stars: "420",
    forks: "115",
    lang: "HCL"
  }
];

export default function OpenSourcePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section className="dark-section" style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1E293B', color: '#E2E8F0', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Terminal size={16} /> Open Source
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            We don't just consume. <span style={{ color: '#94A3B8' }}>We contribute.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6, maxWidth: '700px' }}>
            A significant portion of our internal tooling is released to the community. Here are the active projects maintained by Acriotech engineers.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '2rem' }}>
             {repos.map((repo, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '3rem', transition: 'box-shadow 0.2s' }} className="repo-card">
                 <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                       <Code2 size={32} color="#0F172A" />
                       <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A' }}>{repo.name}</h2>
                    </div>
                 </div>
                 
                 <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>{repo.desc}</p>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.95rem', fontWeight: 600 }}>
                      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: repo.lang === 'C' ? '#555555' : repo.lang === 'TypeScript' ? '#3178C6' : '#844FBA' }}></div>
                      {repo.lang}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.95rem', fontWeight: 600 }}>
                      <Star size={16} /> {repo.stars}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.95rem', fontWeight: 600 }}>
                      <GitFork size={16} /> {repo.forks}
                    </div>
                 </div>
               </div>
             ))}
          </div>
          <style jsx>{`
            .repo-card:hover {
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
