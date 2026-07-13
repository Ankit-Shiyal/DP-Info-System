"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Smartphone, WifiOff, ShieldCheck, AppWindow, Cpu, Layers } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileAppDevelopment() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section className="dark-section" style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', color: '#F8FAFC', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem', letterSpacing: '0.05em' }}>
            <Smartphone size={16} color="#A78BFA" /> iOS & Android Engineering
          </div>
          <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Mobile experiences that respect <br/><span style={{ color: '#A78BFA' }}>context and connectivity.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            We design and build mobile products around small screens, intermittent networks, strict device permissions, and on-the-go decision-making. 
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact-us" style={{ background: '#A78BFA', color: '#0F172A', padding: '1.1rem 2.5rem', borderRadius: '8px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Scope Your App <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Offline-First Architecture (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
               <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                  <WifiOff size={32} color="#8B5CF6" />
               </div>
               <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>The Offline-First Mandate</h2>
               <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                 Mobile users ride subways, enter elevators, and work in remote warehouses. A spinning loader on a bad 3G connection is a failure of engineering.
               </p>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <Layers size={20} color="#8B5CF6" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.2rem' }}>Local Data Persistence</h4>
                     <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Using SQLite or WatermelonDB to store data locally so the app opens instantly, regardless of network state.</p>
                   </div>
                 </div>
                 <div style={{ display: 'flex', gap: '1rem' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FFFFFF', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <ShieldCheck size={20} color="#8B5CF6" />
                   </div>
                   <div>
                     <h4 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#0F172A', marginBottom: '0.2rem' }}>Conflict Resolution</h4>
                     <p style={{ color: '#64748B', fontSize: '0.95rem' }}>CRDTs (Conflict-free Replicated Data Types) to safely merge offline edits when the device reconnects.</p>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Visual Phone Frame */}
            <div style={{ background: '#1E293B', padding: '1.5rem', borderRadius: '40px', border: '8px solid #0F172A', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', width: '320px', height: '600px', margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '120px', height: '24px', background: '#0F172A', borderRadius: '0 0 12px 12px', zIndex: 10 }}></div>
               <div style={{ background: '#F8FAFC', width: '100%', height: '100%', borderRadius: '24px', padding: '3rem 1.5rem', position: 'relative' }}>
                  <div style={{ background: '#FEE2E2', color: '#B91C1C', padding: '0.5rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <WifiOff size={14} /> Offline Mode Active
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', opacity: 0.7 }}>Form Data Saved Locally</div>
                     <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', opacity: 0.7 }}>Awaiting Sync...</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Cross-Platform Strategy (Tech) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>One Codebase, Two Platforms</h2>
             <p style={{ fontSize: '1.1rem', color: '#64748B', maxWidth: '700px', margin: '0 auto' }}>Maintaining separate Swift and Kotlin teams is expensive. We use React Native to deliver native performance from a single JavaScript codebase.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icon: Cpu, title: "Native UI Components", desc: "React Native doesn't use webviews. It compiles down to actual native iOS and Android UI elements." },
              { icon: Layers, title: "Shared Business Logic", desc: "95% of your code is shared between platforms, drastically reducing QA and development time." },
              { icon: AppWindow, title: "Over-the-Air Updates", desc: "Push critical bug fixes and UI updates directly to users without waiting for App Store approval via CodePush." }
            ].map((feat, i) => (
               <div key={i} style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                 <feat.icon size={36} color="#8B5CF6" style={{ margin: '0 auto 1.5rem auto' }} />
                 <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>{feat.title}</h4>
                 <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{feat.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: App Store Handoff (Process) */}
      <section className="dark-section" style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
         <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ background: '#1E293B', borderRadius: '24px', padding: '4rem', border: '1px solid #334155' }}>
               <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', textAlign: 'center' }}>The App Store Gauntlet</h2>
               <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                 Getting an app approved by Apple and Google is notoriously difficult. We handle the entire compliance and publishing pipeline.
               </p>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F8FAFC' }}>Privacy Policy & Data Nutrition Labels</span>
                    <ShieldCheck size={24} color="#10B981" />
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F8FAFC' }}>Certificate & Provisioning Profile Management</span>
                    <ShieldCheck size={24} color="#10B981" />
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#F8FAFC' }}>Automated Fastlane Deployment Scripts</span>
                    <ShieldCheck size={24} color="#10B981" />
                 </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
