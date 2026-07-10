
import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";

const links = [
  { group: 'Policies', items: [
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Anti-spam Policy', path: '/anti-spam-policy' },
    { name: 'Abuse Policy', path: '/abuse-policy' }
  ]},
  { group: 'Compliance & Security', items: [
    { name: 'Security Compliance', path: '/security-compliance' },
    { name: 'GDPR Compliance', path: '/gdpr-compliance' }
  ]},
  { group: 'Legal', items: [
    { name: 'IPR Complaints', path: '/ipr-complaints' },
    { name: 'Trademark Policy', path: '/trademark-policy' }
  ]}
];

export default function LegalLayout({ children, activePath }: { children: React.ReactNode, activePath: string }) {
  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      
      {/* Hero Header */}
      <div style={{ background: '#0F172A', paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF' }}>Legal & Compliance Center</h1>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', marginTop: '1rem' }}>Acriotech policies, terms, and compliance information.</p>
        </div>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="container" style={{ maxWidth: '1200px', display: 'flex', gap: '4rem', padding: '4rem 0', flex: 1, alignItems: 'flex-start' }}>
        
        {/* Sidebar */}
        <aside style={{ width: '280px', flexShrink: 0, position: 'sticky', top: '100px' }}>
          {links.map((group, idx) => (
            <div key={idx} style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.5rem' }}>
                {group.group}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {group.items.map((item, i) => {
                  const isActive = activePath === item.path;
                  return (
                    <li key={i}>
                      <a href={item.path} style={{ 
                        display: 'block', 
                        padding: '0.6rem 1rem', 
                        borderRadius: '6px', 
                        fontSize: '0.95rem', 
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? '#4B61B8' : '#475569',
                        background: isActive ? '#EEF2FF' : 'transparent',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease'
                      }}>
                        {item.name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </aside>

        {/* Content */}
        <main style={{ flex: 1, background: '#FFFFFF', padding: '4rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', border: '1px solid #F1F5F9' }}>
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
