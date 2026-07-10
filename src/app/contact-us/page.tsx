"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FAFAFA' }}>
      <NavBar />
      
      {/* Hero Section */}
      <section style={{ background: '#0F172A', paddingTop: '10rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract Background Elements */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(75,97,184,0.15) 0%, rgba(15,23,42,0) 70%)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
        
        <div className="container" style={{ maxWidth: '1200px', position: 'relative', zIndex: 10 }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>Let's build something <span style={{ color: '#60A5FA' }}>extraordinary.</span></h1>
          <p style={{ fontSize: '1.25rem', color: '#94A3B8', maxWidth: '600px', lineHeight: 1.6 }}>Our engineering teams are ready to tackle your most complex challenges. Reach out to start the conversation.</p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '5rem 0', flex: 1 }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Contact Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Get in touch</h2>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7 }}>Whether you're looking for enterprise software development, cloud infrastructure design, or AI automation, our specialists are here to help.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} color="#3B82F6" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>Email Us</h3>
                    <p style={{ color: '#475569', marginBottom: '0.5rem' }}>Our team typically responds within 2 hours.</p>
                    <a href="mailto:hello@acriotech.com" style={{ color: '#3B82F6', fontWeight: 600, textDecoration: 'none' }}>info@acriotech.com</a>
                  </div>
                </div>

  

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} color="#EF4444" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>Global Headquarters</h3>
                    <p style={{ color: '#475569', lineHeight: 1.6 }}>14, Shiv Narayan Complex, Virani Circle,<br />Kaliyabid, Bhavnagar - 364002<br />Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ background: '#FFFFFF', padding: '3rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.05)', border: '1px solid #F1F5F9' }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>First Name *</label>
                    <input 
                      required
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                      onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Last Name *</label>
                    <input 
                      required
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                      onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                      onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Corporate Email *</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                    onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s' }}
                    onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                    onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>How can we help? *</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '1rem', outline: 'none', transition: 'border-color 0.2s', resize: 'vertical' }}
                    onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                    onBlur={(e) => e.target.style.borderColor = '#CBD5E1'}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    marginTop: '1rem',
                    background: isSubmitting ? '#475569' : '#0F172A', 
                    color: '#FFFFFF', 
                    padding: '1rem', 
                    borderRadius: '8px', 
                    fontSize: '1.05rem', 
                    fontWeight: 600,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#1E293B' }}
                  onMouseLeave={(e) => { if (!isSubmitting) e.currentTarget.style.background = '#0F172A' }}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <ArrowRight size={18} /></>
                  )}
                </button>
                {submitStatus === 'success' && (
                  <div style={{ padding: '1rem', background: '#F0FDF4', color: '#166534', borderRadius: '8px', border: '1px solid #BBF7D0', textAlign: 'center', fontWeight: 500 }}>
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div style={{ padding: '1rem', background: '#FEF2F2', color: '#991B1B', borderRadius: '8px', border: '1px solid #FECACA', textAlign: 'center', fontWeight: 500 }}>
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
