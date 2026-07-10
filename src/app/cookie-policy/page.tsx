import LegalLayout from "@/components/LegalLayout";

export default function CookiePolicy() {
  return (
    <LegalLayout activePath="/cookie-policy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Last Updated: July 10, 2026</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Cookie Policy</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>This Cookie Policy explains how Acrio Tech Global Pvt. Ltd. ("Acriotech", "we", "us", or "our") uses cookies and similar tracking technologies on our website (acriotech.com) and within our software products. We believe in full transparency, so this policy is designed to clearly explain what we collect, why, and what choices you have.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. What Are Cookies?</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used by website owners to make their websites work, work more efficiently, and to provide reporting information. Cookies set by the website owner (in this case, Acriotech) are called "first-party cookies." Cookies set by third parties are called "third-party cookies."</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>In addition to cookies, we may also use <strong>web beacons</strong> (tiny transparent images used to track email open rates and page visits), <strong>local storage</strong> (browser-based storage for application state), and <strong>session tokens</strong> (short-lived identifiers used for secure authentication). This policy covers all such technologies.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Types of Cookies We Use</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                type: 'Strictly Necessary Cookies',
                required: true,
                color: '#EEF2FF',
                border: '#C7D2FE',
                desc: 'These cookies are essential for the website to function and cannot be switched off. They are set in response to your actions such as logging in, filling in forms, or setting privacy preferences. Without them, core functions of our site and application simply do not work.',
                examples: ['Session authentication tokens', 'CSRF protection tokens', 'Load balancer routing cookies', 'Cookie consent preference storage'],
                retention: 'Session to 1 year',
                basis: 'Legitimate interest (essential function)',
              },
              {
                type: 'Performance & Analytics Cookies',
                required: false,
                color: '#F8FAFC',
                border: '#E2E8F0',
                desc: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us understand which pages are most popular, how visitors navigate the site, and where they come from. All analytics data is aggregated and anonymized where possible.',
                examples: ['Google Analytics 4 (_ga, _gid, _gat)', 'Hotjar session recordings (with PII masking)', 'Internal performance monitoring'],
                retention: '2 years (GA4 default)',
                basis: 'Consent',
              },
              {
                type: 'Functional Cookies',
                required: false,
                color: '#F8FAFC',
                border: '#E2E8F0',
                desc: 'These cookies enable enhanced functionality and personalization such as live chat, embedded video, and remembering your preferences (language, region, theme, last-used features). They may be set by us or by third-party providers whose services we have embedded.',
                examples: ['Language and locale preference', 'Video player settings (e.g., volume, subtitles)', 'Live chat widget (Intercom/Crisp)', 'Calendar booking tool (Calendly)'],
                retention: 'Up to 1 year',
                basis: 'Consent',
              },
              {
                type: 'Targeting & Marketing Cookies',
                required: false,
                color: '#F8FAFC',
                border: '#E2E8F0',
                desc: 'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not directly store personal information but uniquely identify your browser and device.',
                examples: ['LinkedIn Insight Tag', 'Google Ads conversion tracking', 'Meta Pixel (if enabled for campaigns)', 'Retargeting audience cookies'],
                retention: 'Up to 1 year',
                basis: 'Consent',
              },
            ].map((item) => (
              <div key={item.type} style={{ padding: '1.5rem', background: item.color, borderRadius: '12px', border: `1px solid ${item.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '1.05rem' }}>{item.type}</div>
                  <span style={{ padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, background: item.required ? '#4B61B8' : '#E2E8F0', color: item.required ? '#FFFFFF' : '#64748B' }}>
                    {item.required ? 'Always Active' : 'Consent Required'}
                  </span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '1rem' }}>{item.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ fontWeight: 600, color: '#0F172A' }}>Examples: </span>
                    <span style={{ color: '#64748B' }}>{item.examples.join(', ')}</span>
                  </div>
                  <div>
                    <span style={{ fontWeight: 600, color: '#0F172A' }}>Retention: </span>
                    <span style={{ color: '#64748B' }}>{item.retention}</span>
                  </div>
                </div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  <span style={{ fontWeight: 600, color: '#0F172A' }}>Legal Basis: </span>
                  <span style={{ color: '#64748B' }}>{item.basis}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. Third-Party Cookies on Our Site</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>We work with trusted third parties who may set cookies on your device when you visit our site. The key third parties whose cookies may be present include:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#0F172A', color: '#FFFFFF' }}>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Provider</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Purpose</th>
                  <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Privacy Policy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Google Analytics', 'Website usage analytics and traffic measurement', 'policies.google.com/privacy'],
                  ['Google Ads', 'Conversion tracking for paid advertising', 'policies.google.com/privacy'],
                  ['LinkedIn Insight Tag', 'B2B audience analytics and ad retargeting', 'linkedin.com/legal/privacy-policy'],
                  ['Intercom', 'Live chat and customer support', 'intercom.com/legal/privacy'],
                  ['Hotjar', 'Session heatmaps and UX research (with masking)', 'hotjar.com/legal/privacy'],
                  ['Cloudflare', 'Security, CDN, and DDoS protection', 'cloudflare.com/privacypolicy'],
                ].map(([provider, purpose, policy], idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{provider}</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#475569' }}>{purpose}</td>
                    <td style={{ padding: '0.75rem 1rem' }}><a href={`https://${policy}`} target="_blank" rel="noopener noreferrer" style={{ color: '#4B61B8', fontSize: '0.85rem' }}>{policy}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Your Cookie Choices</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>You have several options to control or manage cookies:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Cookie Preference Center:</strong> When you first visit our site, a cookie banner is displayed allowing you to accept all cookies, reject non-essential cookies, or manage your preferences category by category. You can revisit your preferences at any time via the "Cookie Settings" link in the footer.</li>
            <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings. You can set your browser to block all cookies, or to alert you when cookies are being set. Note that blocking all cookies may prevent some features of our site from working correctly. Refer to your browser's help documentation for instructions.</li>
            <li><strong>Opt-Out Tools:</strong> For analytics cookies specifically, you can opt out via the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#4B61B8' }}>Google Analytics Opt-Out Browser Add-on</a>. For targeted advertising, visit the <a href="https://youronlinechoices.eu" target="_blank" rel="noopener noreferrer" style={{ color: '#4B61B8' }}>European Interactive Digital Advertising Alliance opt-out page</a>.</li>
            <li><strong>Do Not Track:</strong> Some browsers have a "Do Not Track" feature. At this time, we do not respond to "Do Not Track" signals as there is no consistent industry standard for compliance.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Cookies in Our Enterprise Software Products</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>If you are an end-user of enterprise software developed and deployed by Acriotech on behalf of one of our clients, that software's cookie usage is governed by the privacy policy of the client organization (the data controller). Acriotech recommends that all clients include a clear cookie notice and consent mechanism in any application that sets non-essential cookies on end-user devices, and we build our software with this capability built in by default.</p>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Questions About Cookies?</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>For any questions about our use of cookies or to exercise your rights over your data, contact our Data Protection Officer at <a href="mailto:privacy@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>privacy@acriotech.com</a>.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
