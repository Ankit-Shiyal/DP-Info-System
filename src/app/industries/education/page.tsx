"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, GraduationCap, Video, Users2, ShieldCheck, Database, Layers } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EducationIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF7ED', color: '#C2410C', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <GraduationCap size={16} /> EdTech & E-Learning
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Platforms built for <span style={{ color: '#EA580C' }}>engagement.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build scalable Learning Management Systems (LMS), real-time video classrooms, and student data platforms that can handle massive concurrency spikes while protecting student privacy.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#EA580C', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Your EdTech Product <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Live Classroom UI */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', animation: 'pulse 2s infinite' }}></div>
                 Live Classroom (CS-101)
               </h4>
               
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  {/* Instructor Cam */}
                  <div style={{ background: '#1E293B', borderRadius: '8px', border: '1px solid #334155', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                    Instructor Video Feed
                  </div>
                  {/* Participant Cams */}
                  <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '0.5rem' }}>
                    <div style={{ background: '#1E293B', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontSize: '0.8rem' }}>Student A</div>
                    <div style={{ background: '#1E293B', borderRadius: '8px', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontSize: '0.8rem' }}>Student B</div>
                  </div>
               </div>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#1E293B', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #334155', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10B981', fontWeight: 600 }}><Users2 size={14} /> 483 Active Viewers</div>
                  <div style={{ color: '#94A3B8' }}>Latency: 124ms</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Real-time Video Infrastructure (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Video color="#EA580C" /> WebRTC Architecture
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#FFF7ED', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #EA580C' }}>
                   <div style={{ fontWeight: 700, color: '#9A3412' }}>Signaling Server (WebSockets)</div>
                   <div style={{ fontSize: '0.85rem', color: '#C2410C' }}>Establishes initial peer connections and manages room state.</div>
                 </div>
                 <div style={{ background: '#FFF7ED', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #EA580C' }}>
                   <div style={{ fontWeight: 700, color: '#9A3412' }}>SFU (Selective Forwarding Unit)</div>
                   <div style={{ fontSize: '0.85rem', color: '#C2410C' }}>Routes video streams to multiple participants without crushing client CPU (unlike mesh networks).</div>
                 </div>
                 <div style={{ background: '#FFF7ED', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #EA580C' }}>
                   <div style={{ fontWeight: 700, color: '#9A3412' }}>TURN/STUN Relays</div>
                   <div style={{ fontSize: '0.85rem', color: '#C2410C' }}>Bypassing strict university firewalls to ensure connectivity.</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>High-Concurrency Streaming</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  A live lecture with 500 students requires vastly different architecture than a standard API. We build specialized WebRTC video pipelines that prioritize audio clarity and low latency.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Adaptive Bitrate</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Automatically degrading video quality for students on poor rural internet connections so audio never drops.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Interactive Sockets</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Syncing chat, polls, and whiteboards via Redis Pub/Sub in real-time alongside the video feed.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: FERPA Compliance (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Protecting the Student</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Student records are heavily protected by law. We engineer systems that make compliance with FERPA and COPPA structural, not an afterthought.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <ShieldCheck size={32} color="#FB923C" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>FERPA / COPPA</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Implementing strict data retention policies and parental consent gates for underage learners.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Database size={32} color="#FB923C" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Data Segregation</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Multi-tenant database architectures that guarantee School District A cannot accidentally access School District B's data.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Layers size={32} color="#FB923C" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>LTI Integration</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Seamlessly integrating custom tools into existing behemoths like Canvas or Blackboard using the LTI standard.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Scalability (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>The 8 AM Spike</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  EdTech traffic is highly predictable but incredibly violent. Traffic can spike 1000% when schools open at 8 AM. We utilize serverless compute and auto-scaling container orchestration to handle the morning rush without paying for idle servers at midnight.
                </p>
              </div>
              <div style={{ background: '#FFF7ED', padding: '2.5rem', borderRadius: '16px', border: '1px solid #FFEDD5', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#9A3412', fontSize: '1.1rem' }}>Concurrent Users</span>
                    <span style={{ fontWeight: 800, color: '#EA580C', fontSize: '1.5rem' }}>25,000+</span>
                 </div>
                 <div style={{ height: '2px', background: '#FDBA74' }}></div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 700, color: '#9A3412', fontSize: '1.1rem' }}>Auto-Scale Response Time</span>
                    <span style={{ fontWeight: 800, color: '#EA580C', fontSize: '1.5rem' }}>&lt; 3s</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
