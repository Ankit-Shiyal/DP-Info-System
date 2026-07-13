"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, ShoppingBag, Layers, RefreshCcw, Smartphone, CreditCard, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RetailIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FDF4FF', color: '#C026D3', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <ShoppingBag size={16} /> Retail & E-Commerce
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Storefronts built for <span style={{ color: '#C026D3' }}>milliseconds.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                In commerce, latency is abandoned revenue. We decouple front-end experiences from heavy back-end ERPs to create headless architectures that are blisteringly fast, highly converting, and omnichannel by default.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#C026D3', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Upgrade Your Storefront <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Headless Architecture */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Headless Commerce Topology</h4>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                 <div style={{ width: '40px', height: '40px', background: '#334155', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Smartphone size={20} color="#F8FAFC" /></div>
                 <div style={{ width: '40px', height: '40px', background: '#334155', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LayoutTemplate size={20} color="#F8FAFC" /></div>
                 <div style={{ width: '40px', height: '40px', background: '#334155', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CreditCard size={20} color="#F8FAFC" /></div>
               </div>
               
               <div style={{ background: '#1E293B', borderTop: '2px dashed #C026D3', borderBottom: '2px dashed #C026D3', padding: '1rem 0', margin: '0 -2rem', textAlign: 'center', color: '#E879F9', fontWeight: 700, fontSize: '0.9rem', marginBottom: '2rem' }}>
                 GraphQL API Gateway
               </div>
               
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '0.5rem', textAlign: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
                 <div style={{ background: '#1E293B', padding: '0.5rem', borderRadius: '4px' }}>Shopify (Cart)</div>
                 <div style={{ background: '#1E293B', padding: '0.5rem', borderRadius: '4px' }}>Contentful (CMS)</div>
                 <div style={{ background: '#1E293B', padding: '0.5rem', borderRadius: '4px' }}>Algolia (Search)</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Headless Architecture (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Layers color="#C026D3" /> The Monolith is Dead
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#FDF4FF', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #C026D3' }}>
                   <div style={{ fontWeight: 700, color: '#701A75' }}>Presentation Layer (Next.js)</div>
                   <div style={{ fontSize: '0.85rem', color: '#86198F' }}>Deployed to the edge. Renders statically for instant load times.</div>
                 </div>
                 <div style={{ background: '#FDF4FF', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #C026D3' }}>
                   <div style={{ fontWeight: 700, color: '#701A75' }}>Commerce Engine</div>
                   <div style={{ fontSize: '0.85rem', color: '#86198F' }}>Shopify Plus or BigCommerce handling checkout, taxes, and fraud.</div>
                 </div>
                 <div style={{ background: '#FDF4FF', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #C026D3' }}>
                   <div style={{ fontWeight: 700, color: '#701A75' }}>Content Management</div>
                   <div style={{ fontSize: '0.85rem', color: '#86198F' }}>Sanity or Contentful allowing marketing teams to update pages without code.</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Headless Commerce</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Traditional platforms like Magento force your frontend and backend into the same codebase, resulting in sluggish performance and slow iteration. We sever that tie.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Sub-Second Loads</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Using React Server Components to deliver static HTML globally in under 200ms.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Best-of-Breed Tech</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Swap out your search provider (e.g., to Algolia) without rebuilding your entire website.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Omnichannel Sync (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>The Omnichannel Illusion</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>A customer buying online and returning in-store shouldn't break your inventory. We make the illusion of a single, unified business a technical reality.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <RefreshCcw size={32} color="#E879F9" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Real-Time Inventory</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Synchronizing physical Point of Sale (POS) data with digital storefronts via event-driven messaging (Kafka).</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <LayoutTemplate size={32} color="#E879F9" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Unified Profiles</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Consolidating identities across mobile apps, web, and physical loyalty cards into a single Customer Data Platform.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <CreditCard size={32} color="#E879F9" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>BOPIS Architecture</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Building the routing logic for "Buy Online, Pick Up In Store" that accurately reserves local inventory.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Conversion Metrics (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Engineering for Revenue</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  We do not measure our success in lines of code. We measure it in cart abandonment rate, average order value, and conversion lift.
                </p>
              </div>
              <div style={{ background: '#F8FAFC', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                 <div>
                   <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Avg. Performance Lift</div>
                   <div style={{ fontSize: '3rem', fontWeight: 800, color: '#C026D3' }}>+42%</div>
                 </div>
                 <div style={{ width: '1px', background: '#E2E8F0' }}></div>
                 <div>
                   <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Conversion Increase</div>
                   <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10B981' }}>+1.8%</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
