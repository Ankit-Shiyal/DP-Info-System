"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Landmark, ShieldAlert, Scale, CreditCard, LockKeyhole, Activity } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinancialServicesIndustry() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F0FDF4', color: '#16A34A', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Landmark size={16} /> Fintech & Banking
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Architecture for systems <span style={{ color: '#16A34A' }}>where math must be perfect.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                Financial software doesn't just need to be fast. It needs absolute transactional integrity, immutable audit logs, and proactive defense against sophisticated fraud.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#16A34A', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Discuss Financial Architecture <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: Transaction Ledger */}
            <div style={{ background: '#0F172A', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
               <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Event Sourced Ledger</h4>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#A5B4FC' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>
                   <span>Tx_9482 (DEPOSIT)</span> <span style={{ color: '#10B981' }}>+ $4,500.00</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '0.5rem' }}>
                   <span>Tx_9483 (FEE_ASSESS)</span> <span style={{ color: '#EF4444' }}>- $12.50</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #334155', paddingBottom: '0.5rem', opacity: 0.5 }}>
                   <span>Tx_9484 (WITHDRAW)</span> <span style={{ color: '#EF4444' }}>- $8,000.00 [DECLINED_NSF]</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', fontWeight: 700, color: '#F8FAFC' }}>
                   <span>COMPUTED_BALANCE:</span> <span>$14,291.50</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Transaction Integrity (Tech) */}
      <section style={{ padding: '8rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
             
             {/* Visual */}
             <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
               <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                 <Scale color="#16A34A" /> ACID Compliance
               </h3>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ background: '#F0FDF4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #16A34A' }}>
                   <div style={{ fontWeight: 700, color: '#064E3B' }}>Atomicity</div>
                   <div style={{ fontSize: '0.85rem', color: '#065F46' }}>Either the entire money transfer succeeds, or none of it does. No partial states.</div>
                 </div>
                 <div style={{ background: '#F0FDF4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #16A34A' }}>
                   <div style={{ fontWeight: 700, color: '#064E3B' }}>Consistency</div>
                   <div style={{ fontSize: '0.85rem', color: '#065F46' }}>Account balances can never drop below zero due to concurrent requests.</div>
                 </div>
                 <div style={{ background: '#F0FDF4', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #16A34A' }}>
                   <div style={{ fontWeight: 700, color: '#064E3B' }}>Isolation & Durability</div>
                   <div style={{ fontSize: '0.85rem', color: '#065F46' }}>Transactions are locked safely, and committed data survives server crashes.</div>
                 </div>
               </div>
             </div>

             <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>The Distributed Ledger</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  In fintech, standard CRUD (Create, Read, Update, Delete) databases are dangerous. Overwriting a previous balance destroys history. We build Event Sourced architectures where every transaction is an immutable log.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Idempotent APIs</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Ensuring that a user clicking "Pay" twice due to a network lag does not charge them twice.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Double-Entry Systems</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Every credit requires a corresponding debit. The system must always balance to zero.</p>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Regulatory Compliance (Methodology) */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>Compliance as Code</h2>
             <p style={{ fontSize: '1.1rem', color: '#94A3B8', maxWidth: '700px', margin: '0 auto' }}>Regulatory requirements (KYC/AML) are not manual afterthoughts. They are built directly into the deployment pipeline.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <CreditCard size={32} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>PCI-DSS Level 1</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Tokenizing PAN data at the edge so your core application never touches sensitive cardholder information.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <LockKeyhole size={32} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>SOC 2 Type II</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Architecting strict separation of duties, ensuring no single engineer can access production databases unnoticed.</p>
             </div>
             <div style={{ padding: '2rem', border: '1px solid #334155', borderRadius: '12px', background: '#1E293B', textAlign: 'center' }}>
                <ShieldAlert size={32} color="#10B981" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>Automated KYC</h4>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5 }}>Integrating Plaid, Stripe Identity, or Alloy to automate customer onboarding without sacrificing security.</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: Threat Detection (Outcomes) */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Real-Time Fraud Prevention</h2>
                <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.7 }}>
                  Batch processing is too slow for modern financial fraud. We implement streaming architectures (like Apache Kafka) to analyze transaction behavior in milliseconds.
                </p>
              </div>
              <div style={{ background: '#F1F5F9', padding: '2.5rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                     <Activity size={24} color="#EF4444" style={{ marginTop: '0.2rem' }} />
                     <div>
                       <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.05rem', display: 'block', marginBottom: '0.2rem' }}>Velocity Checks</span>
                       <span style={{ color: '#64748B', fontSize: '0.95rem' }}>Detecting if the same IP attempts 50 micro-transactions across 10 accounts in under a minute.</span>
                     </div>
                   </div>
                   <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: '#FFFFFF', padding: '1rem', borderRadius: '8px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                     <Activity size={24} color="#EF4444" style={{ marginTop: '0.2rem' }} />
                     <div>
                       <span style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.05rem', display: 'block', marginBottom: '0.2rem' }}>Geographic Impossibility</span>
                       <span style={{ color: '#64748B', fontSize: '0.95rem' }}>Flagging a card-present transaction in London occurring 10 minutes after a withdrawal in New York.</span>
                     </div>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
