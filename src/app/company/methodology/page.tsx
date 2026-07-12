"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Code2, GitMerge, Server, Activity, ShieldCheck, Cpu } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    title: "Discovery & Architecture",
    icon: Cpu,
    desc: "We don't start coding until the architecture is proven. We map out data flows, define service boundaries, and select the exact stack needed for your scale."
  },
  {
    title: "Iterative Engineering",
    icon: Code2,
    desc: "Two-week sprints with tangible deliverables. No black boxes. You get access to our staging environments and issue trackers from day one."
  },
  {
    title: "Continuous Integration",
    icon: GitMerge,
    desc: "Every commit is automatically tested, linted, and deployed to preview environments. We catch regressions before they merge into the main branch."
  },
  {
    title: "Security & Auditing",
    icon: ShieldCheck,
    desc: "Penetration testing and dependency scanning are baked into our pipeline. We build systems compliant with SOC2, HIPAA, and GDPR by default."
  },
  {
    title: "Production Deployment",
    icon: Server,
    desc: "Zero-downtime deployments utilizing blue-green or canary release strategies. We manage the infrastructure so you can focus on the product."
  },
  {
    title: "Telemetry & Maintenance",
    icon: Activity,
    desc: "Post-launch, we instrument your application with comprehensive logging and tracing to proactively detect anomalies before users report them."
  }
];

export default function MethodologyPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: '10rem', paddingBottom: '7rem', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#1E293B', color: '#38BDF8', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2rem' }}>
            Our Methodology
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            How we <span style={{ color: '#38BDF8' }}>build software.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', lineHeight: 1.6, maxWidth: '700px' }}>
            We treat software engineering as a discipline, not an art. Our methodology is built on predictability, observability, and ruthless pragmatism.
          </p>
        </div>
      </section>

      {/* Process Grid */}
      <section style={{ padding: '8rem 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>The Acriotech Lifecycle</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>From architectural design to production deployment, our process is optimized for speed without sacrificing stability.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
             {steps.map((step, i) => (
               <div key={i} style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '16px', border: '1px solid #E2E8F0', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', fontSize: '4rem', fontWeight: 900, color: '#F1F5F9', zIndex: 0 }}>
                    0{i + 1}
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ width: '48px', height: '48px', background: '#E0F2FE', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                      <step.icon size={24} color="#0EA5E9" />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>{step.title}</h3>
                    <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to build something robust?</h2>
          <p style={{ fontSize: '1.15rem', color: '#94A3B8', marginBottom: '3rem' }}>Let's discuss your architecture and how our methodology can accelerate your roadmap.</p>
          <Link href="/contact-us" style={{ background: '#38BDF8', color: '#0F172A', padding: '1rem 2.5rem', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'transform 0.2s' }}>
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
