"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Bot, ShieldAlert, Cpu, Fingerprint, RefreshCcw, Hand } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIIntegration() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />

      {/* Hero Section */}
      <section className="dark-section" style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF1F2', color: '#E11D48', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem' }}>
                <Bot size={16} /> Pragmatic AI
              </div>
              <h1 style={{ fontSize: '4.2rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                AI features with a <span style={{ color: '#E11D48' }}>defined job.</span>
              </h1>
              <p style={{ fontSize: '1.2rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
                We don't build useless chat widgets. We integrate AI where it can dramatically improve a real business workflow, with clear boundaries around data privacy, evaluation, and human responsibility.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact-us" style={{ background: '#E11D48', color: '#FFFFFF', padding: '1.1rem 2rem', borderRadius: '8px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'background 0.2s' }}>
                  Explore AI Readiness <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Visual: RAG System */}
            <div style={{ background: '#1E293B', borderRadius: '16px', padding: '2rem', border: '1px solid #334155', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.5)' }}>
               <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Trust Boundary</h4>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#0F172A', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FEE2E2', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Cpu size={20} color="#E11D48" /></div>
                   <div>
                     <div style={{ fontWeight: 700, color: '#F8FAFC' }}>Proprietary LLM</div>
                     <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>Self-hosted Llama 3 / Claude API</div>
                   </div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <RefreshCcw size={20} color="#475569" />
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#0F172A', padding: '1rem', borderRadius: '8px', border: '1px solid #334155' }}>
                   <div style={{ width: '40px', height: '40px', background: '#FEF3C7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShieldAlert size={20} color="#D97706" /></div>
                   <div>
                     <div style={{ fontWeight: 700, color: '#F8FAFC' }}>Guardrails Engine</div>
                     <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>PII redaction & hallucination checks</div>
                   </div>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'center' }}>
                   <ArrowRight size={20} color="#475569" style={{ transform: 'rotate(90deg)' }} />
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(16, 185, 129, 0.1)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                   <div style={{ width: '40px', height: '40px', background: '#DCFCE7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Hand size={20} color="#16A34A" /></div>
                   <div>
                     <div style={{ fontWeight: 700, color: '#10B981' }}>Human Output</div>
                     <div style={{ fontSize: '0.85rem', color: '#A7F3D0' }}>Safe, verified data returned to user</div>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW SECTION 1: Retrieval-Augmented Generation (Tech) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-sm)', alignItems: 'center' }}>
             <div>
                <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1.5rem' }}>Retrieval-Augmented Generation (RAG)</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Off-the-shelf AI models hallucinate because they lack your business context. We build RAG pipelines that force the AI to read your proprietary databases and documents before answering.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Vector Databases</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>We use Pinecone or pgvector to create searchable semantic indexes of your company data.</p>
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>Deterministic Grounding</h4>
                    <p style={{ color: '#64748B', fontSize: '0.95rem' }}>The model is strictly instructed: "If the answer is not in the provided documents, say 'I do not know'."</p>
                  </div>
                </div>
             </div>
             
             {/* Visual */}
             <div style={{ background: '#F8FAFC', padding: '3rem', borderRadius: '24px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                <Fingerprint size={48} color="#E11D48" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Proprietary Knowledge</h3>
                <p style={{ color: '#64748B', marginBottom: '2rem' }}>Your data remains yours. By using RAG, the LLM acts only as a reasoning engine, not a storage engine.</p>
             </div>
           </div>
        </div>
      </section>

      {/* NEW SECTION 2: Human-in-the-Loop (Methodology) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FDF2F8' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#831843', marginBottom: '1.5rem' }}>Human-in-the-Loop Architecture</h2>
          <p style={{ fontSize: '1.1rem', color: '#9D174D', maxWidth: '700px', margin: '0 auto 4rem auto', lineHeight: 1.6 }}>
            In highly regulated industries (Legal, Medical, Finance), AI cannot make final decisions autonomously. We engineer approval queues where AI acts as a drafter, and a human acts as the editor.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
             <div style={{ background: '#FFFFFF', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #FBCFE8', fontWeight: 700, color: '#9D174D' }}>AI Generates Draft</div>
             <ArrowRight size={24} color="#F472B6" />
             <div style={{ background: '#FFFFFF', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #FBCFE8', fontWeight: 700, color: '#9D174D' }}>Confidence Scoring</div>
             <ArrowRight size={24} color="#F472B6" />
             <div style={{ background: '#BE185D', padding: '1.5rem 2rem', borderRadius: '12px', fontWeight: 800, color: '#FFFFFF' }}>Human Review Gate</div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: AI Security/Data Privacy (Outcomes) */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3rem' }}>
              <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <ShieldAlert size={32} color="#0F172A" style={{ marginBottom: '1.5rem' }} />
                 <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Zero Data Retention</h4>
                 <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>We utilize enterprise APIs (like OpenAI Azure) with strict agreements that your data will not be used to train their base models.</p>
              </div>
              <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <Bot size={32} color="#0F172A" style={{ marginBottom: '1.5rem' }} />
                 <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Prompt Injection Defense</h4>
                 <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>Input sanitization and output parsing layers to prevent malicious actors from jailbreaking the system.</p>
              </div>
              <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                 <Cpu size={32} color="#0F172A" style={{ marginBottom: '1.5rem' }} />
                 <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>On-Premise LLMs</h4>
                 <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>For defense and healthcare, we can deploy open-weight models (Llama 3) entirely within your own VPC.</p>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
