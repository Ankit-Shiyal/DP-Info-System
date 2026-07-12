"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Stethoscope, ShieldCheck, FileText, Database, Lock, ActivitySquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HealthcareIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ECFEFF', color: '#0891B2', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Stethoscope size={16} /> Digital Health & Medical
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Software built for the <span style={{ color: '#0891B2' }}>clinical context.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build compliant, interoperable medical software that respects provider workflows. From EHR integrations to patient telemetry dashboards, we design for outcomes and strict privacy.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#0891B2', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Health Tech <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Patient Record Secure */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', position: 'relative' }}>
               <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: '#10B981', color: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                 <ShieldCheck size={14} /> HIPAA Compliant
               </div>
               
               <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #334155', paddingBottom: '1rem' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F8FAFC', fontWeight: 700 }}>JD</div>
                 <div>
                   <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '1.1rem' }}>Doe, John (DOB: 1982-**)</div>
                   <div style={{ color: '#0891B2', fontSize: '0.85rem', fontWeight: 600 }}>MRN: #8492-XXXX</div>
                 </div>
               </div>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', background: '#1E293B', padding: '0.75rem 1rem', borderRadius: '8px' }}>
                   <span>Encrypted Payload Size</span> <span>42 KB</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', background: '#1E293B', padding: '0.75rem 1rem', borderRadius: '8px' }}>
                   <span>FHIR Resource Type</span> <span style={{ color: '#0891B2', fontWeight: 700 }}>Observation</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', background: '#1E293B', padding: '0.75rem 1rem', borderRadius: '8px' }}>
                   <span>Access Logged By</span> <span>Dr. Smith (ID: 442)</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Clinical Workflows (Methodology) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <ActivitySquare color="#0891B2" /> Alert Fatigue Reduction
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FEE2E2', padding: '1rem', borderRadius: '8px', opacity: 0.5 }}>
                   <div style={{ fontWeight: 700, color: '#991B1B' }}>Suppressed Alert</div>
                   <div style={{ fontSize: '0.85rem', color: '#991B1B' }}>Slight BP elevation (Transient)</div>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FEE2E2', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #DC2626' }}>
                   <div style={{ fontWeight: 700, color: '#991B1B' }}>Escalated Alert</div>
                   <div style={{ fontSize: '0.85rem', color: '#991B1B' }}>Sepsis Protocol Triggered</div>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FEE2E2', padding: '1rem', borderRadius: '8px', opacity: 0.5 }}>
                   <div style={{ fontWeight: 700, color: '#991B1B' }}>Suppressed Alert</div>
                   <div style={{ fontSize: '0.85rem', color: '#991B1B' }}>Routine Medication Refill</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Respecting the Provider</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Doctors and nurses are overwhelmed by screens, clicks, and alerts. We design health tech interfaces that optimize for cognitive load, pushing relevant data to the provider only when action is required.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Fewer Clicks</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Streamlining charting and data entry to prevent physician burnout.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Actionable Dashboards</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Differentiating critical vitals from noise using intelligent thresholding.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: HL7/FHIR Data Standards (Tech) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Interoperability</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Health tech that cannot communicate with Epic or Cerner is useless. We engineer deep EHR integrations.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Database size={32} color="#0891B2" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>HL7 v2 & v3</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Parsing legacy clinical messaging feeds (ADT, ORU) using robust integration engines (Mirth Connect).</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <FileText size={32} color="#0891B2" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>FHIR APIs</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Building modern, RESTful endpoints that adhere strictly to the SMART on FHIR specifications.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <ShieldCheck size={32} color="#0891B2" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>DICOM & PACS</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Securely transferring, viewing, and annotating high-resolution radiological imagery in the cloud.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Patient Data Security (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#ECFEFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#164E63', marginBottom: '1.5rem' }}>Zero-Trust Healthcare</h2>
                <p style={{ fontSize: '1.1rem', color: '#155E75', lineHeight: 1.7 }}>
                  Medical data is the most valuable asset on the black market. We construct applications with a Zero-Trust posture, assuming the network is hostile and verifying every single request.
                </p>
              </div>
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: '16px', border: '1px solid #CFFAFE' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     "End-to-End Encryption: TLS 1.3 in transit, AES-256 at rest (Database & S3).",
                     "Immutable Audit Trails: Tracking who viewed which PHI, and exactly when.",
                     "BAA Readiness: Ensuring all cloud infrastructure partners (AWS/Azure) sign Business Associate Agreements.",
                     "De-identification pipelines: Anonymizing data before it reaches analytics or AI models."
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#F8FAFC', padding: '1rem', borderRadius: '8px' }}>
                       <Lock size={20} color="#0891B2" />
                       <span style={{ fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>{item}</span>
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
