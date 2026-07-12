"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Users, Building, ShieldCheck, Factory, HeartPulse, Landmark, Plane } from "lucide-react";

const industries = [
  { name: "Financial Services", icon: Landmark, count: 14 },
  { name: "Healthcare & MedTech", icon: HeartPulse, count: 18 },
  { name: "Logistics & Supply Chain", icon: Plane, count: 9 },
  { name: "Industrial & Manufacturing", icon: Factory, count: 12 },
  { name: "GovTech & Public Sector", icon: ShieldCheck, count: 6 },
];

export default function OurClientsPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      <section style={{ paddingTop: '10rem', paddingBottom: '6rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F1F5F9', color: '#475569', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
            <Users size={16} /> Client Roster
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Trusted by the <span style={{ color: '#475569' }}>Fortune 500.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            We sign strict NDAs with most of our enterprise clients. While we cannot always share their names publicly, we can share the industries we transform.
          </p>
        </div>
      </section>

      <section style={{ padding: '6rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
           <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '3rem', textAlign: 'center' }}>Enterprise Deployments by Sector</h3>
           
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {industries.map((ind, i) => (
               <div key={i} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '2rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'box-shadow 0.2s' }} className="client-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                     <div style={{ width: '48px', height: '48px', background: '#F8FAFC', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <ind.icon size={24} color="#64748B" />
                     </div>
                     <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A' }}>{ind.name}</span>
                  </div>
                  <div style={{ background: '#F1F5F9', color: '#334155', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 600 }}>
                    {ind.count} Active Deployments
                  </div>
               </div>
             ))}
           </div>
           <style jsx>{`
            .client-card:hover {
              box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
            }
          `}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
