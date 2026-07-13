"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutUs() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <NavBar />
      
      {/* Clean, minimalist Hero without glowing orbs or AI-style gradients */}
      <section style={{ paddingTop: '12rem', paddingBottom: '5rem', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            About Acriotech
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px' }}>
            Acriotech delivers enterprise-grade software engineering and technical consulting. 
            We design and implement high-performance systems for organizations demanding precision, security, and scale.
          </p>
        </div>
      </section>

      {/* Traditional Alternating Content Section (Our Story) */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            {/* Image Side */}
            <div style={{ position: 'relative', height: '500px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#E2E8F0' }}>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Corporate Office" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            {/* Text Side */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Acriotech started with a straightforward goal: to provide businesses with reliable, well-built software. In an industry often filled with unnecessary complexity and jargon, we wanted to be a partner that focuses purely on results.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                Over the years, we have grown from a small local team into a comprehensive technology firm. Today, we work with clients globally, delivering everything from simple web applications to complex enterprise integrations.
              </p>
              <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#3B82F6', fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none' }}>
                Contact our team <ArrowRight size={18} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Clean 3-Column Core Values */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>How We Work</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569' }}>The principles that guide our projects and client relationships.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '3rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: '#DBEAFE', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <CheckCircle2 size={20} color="#2563EB" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0F172A' }}>Transparency</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>
                We maintain open communication throughout the entire development lifecycle. You always know the status of your project, the budget, and the timeline.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: '#DBEAFE', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <CheckCircle2 size={20} color="#2563EB" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0F172A' }}>Quality Over Speed</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>
                While we work efficiently, we never compromise on the underlying architecture. We write clean, documented code that your internal team can easily maintain later.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', background: '#DBEAFE', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem' }}>
                <CheckCircle2 size={20} color="#2563EB" />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0F172A' }}>Long-term Partnership</h3>
              <p style={{ color: '#475569', lineHeight: 1.6 }}>
                We don't just launch a product and leave. We provide ongoing support, maintenance, and technical guidance as your business continues to grow and evolve.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership / Team Section */}
      <section style={{ padding: '6rem 0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Our Leadership</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569' }}>Guided by experienced technical operators and software architects.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'center' }}>
             <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Built by engineers, for enterprise.</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Unlike traditional agencies run purely by sales teams, Acriotech is led by software engineers. This means every project discussion starts with technical feasibility, architecture planning, and long-term security in mind.
              </p>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our leadership team has decades of combined experience building high-traffic platforms, migrating legacy systems, and securing corporate data. We bring this expertise to every single client engagement.
              </p>
            </div>
            <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#E2E8F0' }}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Leadership Team" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners / Stack */}
      <section style={{ padding: '6rem 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Technology Partnerships</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              We maintain active expertise in the industry's most reliable and scalable enterprise technologies.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
             {['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform', 'React & Next.js', 'Node.js', 'PostgreSQL', 'Docker & Kubernetes'].map((tech, idx) => (
               <span key={idx} style={{ padding: '0.75rem 1.5rem', background: '#FFFFFF', color: '#334155', borderRadius: '8px', fontSize: '1rem', fontWeight: 600, border: '1px solid #E2E8F0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                 {tech}
               </span>
             ))}
          </div>
        </div>
      </section>

      {/* Careers / Culture */}
      <section className="dark-section" style={{ padding: '6rem 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Join our engineering team</h2>
          <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            We are always looking for talented developers, cloud architects, and QA specialists who take pride in writing clean, reliable code. If you want to work on complex enterprise challenges, we want to hear from you.
          </p>
          <a href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2.5rem', background: '#3B82F6', color: '#FFFFFF', borderRadius: '8px', fontWeight: 600, fontSize: '1.05rem', textDecoration: 'none' }}>
            View Open Positions
          </a>
        </div>
      </section>

      {/* Engineering Methodology Section - Premium Typography Layout */}
      <section style={{ padding: '8rem 0', background: '#FFFFFF', borderTop: '1px solid #F1F5F9' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left Column: Section Title */}
            <div style={{ position: 'sticky', top: '120px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Our Methodology
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>
                A structured, disciplined approach to delivering software on time and within budget.
              </p>
            </div>

            {/* Right Column: Vertical Steps (No boxes, pure typography) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
              
              {[
                { step: "01", title: "Discovery & Architecture", desc: "We analyze your business requirements, technical constraints, and define a scalable architecture before writing a single line of code." },
                { step: "02", title: "Agile Execution", desc: "Development is broken into clear, manageable sprints. You receive regular updates and working software at every milestone." },
                { step: "03", title: "Rigorous QA", desc: "Automated testing and manual QA processes ensure that the final product is secure, performant, and completely bug-free." },
                { step: "04", title: "Deployment & Scale", desc: "We handle the complex DevOps pipelines to seamlessly deploy your application and monitor it as your user base grows." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 300, color: '#94A3B8', fontFamily: 'monospace', paddingTop: '0.25rem' }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
