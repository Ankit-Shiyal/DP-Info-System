"use client";

import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Globe2, Heart, Laptop, Zap, Users, X, Loader2, CheckCircle2, Clock, Coffee } from "lucide-react";
import Link from "next/link";

const roles = [
  {
    title: "Backend Node.js Developer",
    dept: "Engineering",
    location: "Remote (Global)",
    type: "Full-time & Internship"
  },
  {
    title: "Full Stack Developer",
    dept: "Engineering",
    location: "Remote (Global)",
    type: "Full-time & Internship"
  },
  {
    title: "Frontend Developer",
    dept: "Engineering",
    location: "Remote (Global)",
    type: "Full-time & Internship"
  },
  {
    title: "Flutter Developer",
    dept: "Mobile Engineering",
    location: "Remote (Global)",
    type: "Full-time & Internship"
  },
  {
    title: "Go and Rust Developer",
    dept: "Engineering",
    location: "Remote (Global)",
    type: "Full-time & Internship"
  }
];

const benefits = [
  { icon: Globe2, title: "Work Anywhere", desc: "We are a remote-first organization. Work from wherever you are most productive." },
  { icon: Zap, title: "Best-in-Class Hardware", desc: "We provide you with the top-tier hardware you need to compile code fast and design seamlessly." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive global healthcare coverage, prioritizing your physical and mental well-being." },
  { icon: Laptop, title: "Continuous Learning", desc: "We sponsor your professional development through conferences, courses, and certifications." },
  { icon: Clock, title: "Flexible Hours", desc: "We focus on outcomes, not hours logged. Design your own schedule around your peak productivity windows." },
  { icon: Coffee, title: "Rest & Recharge", desc: "Unlimited paid time off with a mandatory 4-week minimum. We want you rested and avoiding burnout." }
];

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    mobile: '',
    applyAs: 'Job'
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setModalOpen(true);
    setSuccess(false);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: selectedRole }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setSuccess(true);
      // Reset form
      setFormData({ firstName: '', lastName: '', email: '', countryCode: '+1', mobile: '', applyAs: 'Job' });
    } catch (err) {
      setError("An error occurred while submitting. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA', position: 'relative' }}>
      <NavBar />

      {/* Hero Section */}
      <section style={{ paddingTop: 'var(--spacing-section)', paddingBottom: '7rem', background: '#FFFFFF', borderBottom: '1px solid #EAEAEA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FEF2F2', color: '#EF4444', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2rem' }}>
            <Users size={16} /> Join the team
          </div>
          <h1 style={{ fontSize: 'var(--font-hero)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Build systems that <br/><span style={{ color: '#EF4444' }}>matter.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#475569', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            We're looking for pragmatic engineers, designers, and thinkers who prefer solving complex problems over playing office politics. We offer roles for both full-time professionals and driven interns.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#0F172A', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
            {benefits.map((benefit, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: '#1E293B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <benefit.icon size={32} color="#EF4444" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>{benefit.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6 }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section style={{ padding: 'var(--spacing-section) 0', background: '#FAFAFA' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'var(--font-h2)', fontWeight: 800, color: '#0F172A', marginBottom: '1rem' }}>Open Positions</h2>
            <p style={{ fontSize: '1.1rem', color: '#475569' }}>Don't see a role that fits? Send your resume to <a href="mailto:careers@acriotech.com" style={{ color: '#EF4444', textDecoration: 'none', fontWeight: 600 }}>careers@acriotech.com</a></p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             {roles.map((role, i) => (
               <div key={i} style={{ background: '#FFFFFF', padding: 'clamp(1.5rem, 4vw, 2rem) clamp(1.5rem, 5vw, 3rem)', borderRadius: '12px', border: '1px solid #E2E8F0', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between', transition: 'box-shadow 0.2s' }} className="job-card">
                  <div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{role.title}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem 1rem', color: '#64748B', fontSize: '0.95rem' }}>
                      <span style={{ fontWeight: 600 }}>{role.dept}</span>
                      <span>•</span>
                      <span>{role.location}</span>
                      <span>•</span>
                      <span style={{ color: role.type === 'Internship' ? '#EF4444' : 'inherit' }}>{role.type}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleApplyClick(role.title)}
                    style={{ background: '#F8FAFC', color: '#0F172A', border: '1px solid #E2E8F0', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap', flex: '0 0 auto' }}
                  >
                    Apply Now
                  </button>
               </div>
             ))}
          </div>
          <style jsx>{`
            .job-card:hover {
              box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
              border-color: #FECACA !important;
            }
          `}</style>
        </div>
      </section>

      <Footer />

      {/* Application Modal */}
      {modalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.5)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '16px', width: '100%', maxWidth: '500px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A' }}>Application</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748B', marginTop: '0.2rem' }}>{selectedRole}</p>
              </div>
              <button onClick={() => setModalOpen(false)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94A3B8' }} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '2rem' }}>
              {success ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <CheckCircle2 size={48} color="#10B981" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Application Received</h4>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.5 }}>Our HR team will connect with you shortly.</p>
                  <button onClick={() => setModalOpen(false)} style={{ marginTop: '2rem', background: '#F1F5F9', color: '#0F172A', border: 'none', padding: '0.75rem 2rem', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Close</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 200px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>First Name</label>
                      <input type="text" required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: '1 1 200px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Last Name</label>
                      <input type="text" required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Email Address</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Mobile Number</label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <select value={formData.countryCode} onChange={e => setFormData({...formData, countryCode: e.target.value})} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem', background: '#FFFFFF', width: '100px', cursor: 'pointer' }}>
                        <option value="+1">+1 (US/CA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+91">+91 (IN)</option>
                        <option value="+61">+61 (AU)</option>
                        <option value="+81">+81 (JP)</option>
                      </select>
                      <input type="tel" required value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} style={{ flex: 1, padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem' }} />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475569' }}>Apply As</label>
                    <select value={formData.applyAs} onChange={e => setFormData({...formData, applyAs: e.target.value})} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.95rem', background: '#FFFFFF' }}>
                      <option value="Job">Full-time Job</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>

                  {error && <div style={{ color: '#EF4444', fontSize: '0.9rem' }}>{error}</div>}

                  <button type="submit" disabled={loading} style={{ background: '#EF4444', color: '#FFFFFF', border: 'none', padding: '0.9rem', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', opacity: loading ? 0.7 : 1 }}>
                    {loading ? <Loader2 className="animate-spin" size={20} /> : 'Submit Application'}
                  </button>
                  <style jsx>{`
                    .animate-spin {
                      animation: spin 1s linear infinite;
                    }
                    @keyframes spin {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                  `}</style>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
