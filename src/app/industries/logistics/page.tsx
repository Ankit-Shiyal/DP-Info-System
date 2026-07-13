"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Truck, MapPin, Package, Clock, ShieldCheck, Box } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LogisticsIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F4F4F5', color: '#52525B', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Truck size={16} /> Supply Chain & Logistics
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Engineering for physical <span style={{ color: '#52525B' }}>movement.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We build the digital infrastructure that orchestrates physical assets. From real-time fleet routing to warehouse management systems, we optimize the complex calculus of modern supply chains.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#3F3F46', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Optimize Your Operations <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Live Map UI */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', position: 'relative', overflow: 'hidden' }}>
               {/* Map Background Simulation */}
               <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundSize: '20px 20px', backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)' }}></div>
               
               <div style={{ position: 'relative', zIndex: 10 }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    <span style={{ color: '#F8FAFC', fontWeight: 600, fontSize: '0.9rem' }}>Fleet Tracking: Region US-East</span>
                 </div>
                 
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#1E293B', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #10B981' }}>
                     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', boxShadow: '0 0 8px #10B981' }}></div>
                     <div style={{ flex: 1 }}>
                       <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '0.9rem' }}>Truck 402 (In Transit)</div>
                       <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>ETA: 14:30 EST • 45 miles to destination</div>
                     </div>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#1E293B', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #F59E0B' }}>
                     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 8px #F59E0B' }}></div>
                     <div style={{ flex: 1 }}>
                       <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '0.9rem' }}>Truck 118 (Delayed)</div>
                       <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Traffic alert on I-95 • Re-routing calculated</div>
                     </div>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#1E293B', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #3B82F6' }}>
                     <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3B82F6' }}></div>
                     <div style={{ flex: 1 }}>
                       <div style={{ color: '#F8FAFC', fontWeight: 700, fontSize: '0.9rem' }}>Truck 892 (Loading)</div>
                       <div style={{ color: '#94A3B8', fontSize: '0.8rem' }}>Dock 4 • Pallet count: 24/40</div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Route Optimization Algorithms (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <MapPin color="#3F3F46" /> The Traveling Salesperson
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#F4F4F5', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #71717A' }}>
                   <div style={{ fontWeight: 700, color: '#3F3F46' }}>Constraints Engine</div>
                   <div style={{ fontSize: '0.85rem', color: '#52525B' }}>Driver shift limits, vehicle weight capacity, delivery time windows.</div>
                 </div>
                 <div style={{ background: '#F4F4F5', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #71717A' }}>
                   <div style={{ fontWeight: 700, color: '#3F3F46' }}>Dynamic Cost Matrix</div>
                   <div style={{ fontSize: '0.85rem', color: '#52525B' }}>Real-time API integrations with Google Maps or Mapbox for traffic/weather conditions.</div>
                 </div>
                 <div style={{ background: '#F4F4F5', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #71717A' }}>
                   <div style={{ fontWeight: 700, color: '#3F3F46' }}>Heuristic Solvers</div>
                   <div style={{ fontSize: '0.85rem', color: '#52525B' }}>Using OR-Tools or custom Python algorithms to find near-optimal routes in seconds.</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Algorithmic Dispatch</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  A human dispatcher cannot optimally route 50 vehicles to 500 stops considering traffic, load weights, and delivery windows. We build the algorithmic engines that solve these NP-hard problems in real time.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Fuel Reduction</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>A 5% increase in routing efficiency immediately drops to the bottom line.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Dynamic Re-routing</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Instantly recalculating itineraries when a truck breaks down or a priority order drops in.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Supply Chain Visibility (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>End-to-End Visibility</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>"Where is my stuff?" is the most expensive question in logistics. We build systems that eliminate the need to ask it.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Package size={32} color="#94A3B8" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Warehouse Management</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Mobile barcode scanning and RF integration for zero-error picking and putaway logic.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <Box size={32} color="#94A3B8" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>EDI / API Integrations</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Connecting your systems automatically with 3PLs, FedEx, UPS, and ocean freight carriers.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <ShieldCheck size={32} color="#94A3B8" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Chain of Custody</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Immutable digital signatures at every handover point to eliminate liability disputes.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Delivery Times (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
              <div style={{ background: '#F4F4F5', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
                 <Clock size={36} color="#3F3F46" />
              </div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Protecting the SLA</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
                  Modern customers expect Amazon-like delivery predictability. We engineer systems that provide highly accurate Estimated Times of Arrival (ETA) by factoring in historical unload times at specific docks, driver rest requirements, and predictive weather modeling.
                </p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
