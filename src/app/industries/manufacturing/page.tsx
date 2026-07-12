"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Factory, Activity, HardDrive, ShieldAlert, Cpu, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ManufacturingIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F1F5F9', color: '#0F172A', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Factory size={16} /> Heavy Industry & Manufacturing
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Software built for the <span style={{ color: '#F59E0B' }}>factory floor.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build Industrial IoT (IIoT) platforms, supply chain visibility tools, and predictive maintenance pipelines that connect legacy machinery to modern cloud analytics.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#F59E0B', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Manufacturing Software <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: IIoT Dashboard */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.9rem' }}>Assembly Line 4 Status</span>
                  <div style={{ color: '#10B981', fontSize: '0.85rem', fontWeight: 700, background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={14} /> Active</div>
               </div>
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                 <div style={{ background: '#1E293B', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Temp (Avg)</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F8FAFC' }}>82.4°C</div>
                 </div>
                 <div style={{ background: '#1E293B', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.2rem' }}>Vibration</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F59E0B' }}>0.8 mm/s</div>
                 </div>
               </div>
               
               <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '1rem', borderRadius: '8px', color: '#FCD34D', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                 <ShieldAlert size={16} /> Maintenance required in ~48 hours.
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: OT/IT Convergence (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <HardDrive color="#F59E0B" /> Network Architecture
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#F1F5F9', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #94A3B8', position: 'relative' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>OT Network (Air-gapped)</div>
                   <div style={{ fontSize: '0.85rem', color: '#64748B' }}>SCADA, PLCs, Modbus/OPC UA</div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <ArrowRight size={24} color="#CBD5E1" style={{ transform: 'rotate(90deg)' }} />
                 </div>
                 <div style={{ background: '#FEF3C7', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #F59E0B', position: 'relative' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>Edge Gateway</div>
                   <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Data buffering, protocol translation (MQTT)</div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <ArrowRight size={24} color="#CBD5E1" style={{ transform: 'rotate(90deg)' }} />
                 </div>
                 <div style={{ background: '#EFF6FF', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #3B82F6', position: 'relative' }}>
                   <div style={{ fontWeight: 700, color: '#0F172A' }}>IT Cloud Environment</div>
                   <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Data Lakes, ML Inference, Dashboards</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Bridging OT and IT</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Operational Technology (machinery) and Information Technology (cloud software) historically speak different languages. We build the secure edge architecture that safely transmits PLC data to the cloud.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Protocol Translation</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Converting legacy protocols like Modbus and OPC UA into modern MQTT streams.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Edge Computing</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Processing high-frequency sensor data locally before it saturates network bandwidth.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Predictive Maintenance (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Predictive Maintenance</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Moving from reactive repairs (fixing when broken) to prescriptive interventions (fixing before failure).</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Activity size={32} color="#34D399" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Telemetry Ingestion</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Streaming real-time vibration, temperature, and acoustic data into time-series databases.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Cpu size={32} color="#34D399" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Anomaly Detection</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Training machine learning models on historical failure data to identify hidden wear patterns.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <ShieldAlert size={32} color="#34D399" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Automated Dispatch</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Automatically generating work orders in your ERP when the failure threshold is approached.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Equipment Effectiveness (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Measurable OEE</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  We engineer manufacturing software specifically to drive Overall Equipment Effectiveness (OEE). By eliminating unplanned downtime and optimizing yield, these systems pay for themselves within months.
                </p>
              </div>
              <div style={{ background: '#FFFBEB', padding: '2.5rem', borderRadius: '16px', border: '1px solid #FEF3C7' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     "Availability: Decreased unplanned mechanical failures",
                     "Performance: Real-time bottleneck identification on the line",
                     "Quality: Automated computer vision for defect sorting",
                     "Safety: Automated shut-off protocols for hazardous anomalies"
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                       <CheckCircle size={20} color="#F59E0B" />
                       <span style={{ fontWeight: 600, color: '#374151', fontSize: '1rem' }}>{item}</span>
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
