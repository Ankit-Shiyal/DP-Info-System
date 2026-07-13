"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, UtensilsCrossed, CalendarDays, KeySquare, BedDouble, ArrowUpRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HospitalityIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF2F2', color: '#B91C1C', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <UtensilsCrossed size={16} /> Hospitality & Travel
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Engineering for the <span style={{ color: '#DC2626' }}>guest experience.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We modernize Property Management Systems (PMS), build high-conversion booking engines, and implement dynamic pricing algorithms that maximize yield for hotels, restaurants, and travel platforms.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#DC2626', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Modernize Your Tech Stack <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Booking Dashboard */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <BedDouble size={18} color="#FCA5A5" /> Live Occupancy
               </h4>
               
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                 <div style={{ background: '#1E293B', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155', textAlign: 'center' }}>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: '#F8FAFC' }}>84%</div>
                   <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>Current Occ.</div>
                 </div>
                 <div style={{ background: '#1E293B', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155', textAlign: 'center' }}>
                   <div style={{ fontSize: '2rem', fontWeight: 800, color: '#FCA5A5' }}>$240</div>
                   <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 600, textTransform: 'uppercase' }}>Current ADR</div>
                 </div>
               </div>
               
               <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '8px', color: '#34D399', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 600 }}>
                 <span>Price Surge Triggered: High Demand</span>
                 <ArrowUpRight size={16} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Dynamic Pricing Algorithms (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <ArrowUpRight color="#DC2626" /> Pricing Engine
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FEF2F2', padding: '1rem', borderRadius: '8px' }}>
                   <span style={{ fontWeight: 600, color: '#991B1B' }}>Base Rate (Standard Double)</span>
                   <span style={{ color: '#7F1D1D' }}>$150.00</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', borderBottom: '1px dashed #E2E8F0' }}>
                   <span style={{ fontSize: '0.9rem', color: '#64748B' }}>+ Local Event Multiplier (Concert)</span>
                   <span style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 600 }}>+ 25%</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', borderBottom: '1px dashed #E2E8F0' }}>
                   <span style={{ fontSize: '0.9rem', color: '#64748B' }}>+ Inventory Scarcity (&lt;10 rooms)</span>
                   <span style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 600 }}>+ 15%</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', padding: '1rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                   <span style={{ fontWeight: 700, color: '#0F172A' }}>Calculated Dynamic Rate</span>
                   <span style={{ fontWeight: 800, color: '#DC2626', fontSize: '1.1rem' }}>$215.62</span>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Algorithmic Yield Management</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  A static price list leaves money on the table. We build custom machine learning models that adjust room and table rates in real-time based on local events, weather, competitor pricing, and historical booking velocity.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Real-time Adjustments</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Pushing rate changes instantly across OTA channels (Expedia, Booking.com) without manual intervention.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Predictive Demand</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Using historical time-series data to forecast cancellations and safely overbook properties.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Unified Property View (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Taming the Fragmentation</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Hospitality tech is notoriously fragmented. We break data out of siloed legacy systems to give management a unified view of the guest.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <KeySquare size={32} color="#FCA5A5" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>PMS Integration</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Deep two-way syncs with legacy on-premise systems like Oracle OPERA using secure edge connectors.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <CalendarDays size={32} color="#FCA5A5" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Channel Managers</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Preventing double-bookings by ensuring absolute consistency across direct web, mobile, and third-party OTAs.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <UtensilsCrossed size={32} color="#FCA5A5" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ancillary Revenue</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Connecting Spa, F&B (Food & Beverage), and Room folios into a single digital guest profile.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: RevPAR (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Driving RevPAR</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  We engineer hospitality software to move the metric that matters most: Revenue Per Available Room (RevPAR). By increasing direct bookings and optimizing nightly rates, our platforms rapidly justify their cost.
                </p>
              </div>
              <div style={{ background: '#F1F5F9', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     "Increased Direct Bookings (Bypassing 15% OTA commissions)",
                     "Automated Upsells during the digital check-in flow",
                     "Reduced Front Desk Labor via mobile key integrations",
                     "Optimized Housekeeping routing based on live checkout data"
                   ].map((item, i) => (
                     <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                       <CheckCircle size={20} color="#DC2626" />
                       <span style={{ fontWeight: 600, color: '#374151', fontSize: '0.95rem' }}>{item}</span>
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
