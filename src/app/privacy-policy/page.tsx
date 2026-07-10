import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout activePath="/privacy-policy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Effective Date: January 1, 2026 · Last Updated: July 10, 2026</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Privacy Policy</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>This Privacy Policy describes how Acrio Tech Global Pvt. Ltd. ("Acriotech", "we", "us", or "our") collects, uses, processes, and shares information about you when you use our websites, software products, and professional services. We are committed to protecting your personal data and being transparent about how we handle it.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Who We Are and How to Contact Us</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech is the data controller for personal data collected through our marketing website and corporate operations. For data processed as part of our enterprise software services, Acriotech acts as a data processor on behalf of our clients (who are the data controllers).</p>
          <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <strong>Data Controller</strong><br />
            Acrio Tech Global Pvt. Ltd.<br />
            14, Shiv Narayan Complex, Virani Circle, Kaliyabid,<br />
            Bhavnagar - 364002, Gujarat, India<br /><br />
            <strong>Data Protection Officer (DPO):</strong> <a href="mailto:privacy@acriotech.com" style={{ color: '#4B61B8' }}>privacy@acriotech.com</a>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Information We Collect</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1.25rem' }}>We collect information in several ways, and we are deliberate about what we collect and why:</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.1 Information You Provide Directly</h3>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <li><strong>Contact and Account Information:</strong> Name, email address, phone number, job title, and company name when you fill out a contact form, sign up for a demo, or create an account.</li>
            <li><strong>Communications:</strong> The content of emails, messages, or support tickets you send to us. We retain these to resolve issues and improve our service.</li>
            <li><strong>Payment Information:</strong> Billing name, address, and payment card information. Note: we do not store full card numbers — this data is processed directly by our PCI-DSS Level 1 certified payment processor.</li>
            <li><strong>Project Data:</strong> Any data you upload, share, or create within our software platforms as part of your engagement with Acriotech.</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.2 Information Collected Automatically</h3>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
            <li><strong>Log Data:</strong> IP address, browser type and version, operating system, referring URLs, pages visited, time of visit, and time spent on pages. This is standard web server log data retained for 90 days.</li>
            <li><strong>Cookies and Tracking:</strong> We use strictly necessary cookies for site function, and analytics cookies (with your consent) to understand usage patterns. See our <a href="/cookie-policy" style={{ color: '#4B61B8' }}>Cookie Policy</a> for full details.</li>
            <li><strong>Device Information:</strong> Device type, screen resolution, and hardware configuration to ensure our software renders correctly across devices.</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.3 Information from Third Parties</h3>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>We may receive information about you from third-party sources such as CRM integrations, marketing partners, or public professional networks (e.g., LinkedIn) for the purpose of identifying potential enterprise clients. Any such data is handled with the same care as directly collected data.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>We use the information we collect based on specific lawful bases as required by applicable privacy laws (including GDPR):</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { basis: 'Contract Performance', uses: 'To provide and manage our software engineering services, process payments, issue invoices, and fulfill all contractual obligations under a signed Statement of Work (SOW) or Master Services Agreement (MSA).' },
              { basis: 'Legitimate Interests', uses: 'To improve our services, conduct security monitoring, prevent fraud, perform analytics, and communicate about products that may interest enterprise clients (always with an opt-out mechanism).' },
              { basis: 'Legal Obligation', uses: 'To comply with applicable laws and regulations, respond to lawful requests from government authorities, and maintain financial records as required under Indian tax law.' },
              { basis: 'Consent', uses: 'To send marketing communications, set non-essential cookies, or process data in ways not covered above. You may withdraw consent at any time without affecting the legality of prior processing.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#4B61B8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Lawful Basis: {item.basis}</div>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7 }}>{item.uses}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Data Sharing and Disclosure</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>We do not sell your personal data. We share it only in the following limited circumstances:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Service Providers (Sub-processors):</strong> We engage vetted third-party vendors to help deliver our services, including cloud hosting (AWS, GCP), communication tools, payment processors, and analytics platforms. All sub-processors are bound by Data Processing Agreements (DPAs) that meet or exceed GDPR requirements. A current list of our sub-processors is available upon request.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of substantially all assets, your data may be transferred to the acquirer. We will notify you before any such transfer occurs and before your data becomes subject to a different privacy policy.</li>
            <li><strong>Legal Requirements:</strong> We may disclose personal data if required to do so by law or in response to a valid court order, subpoena, or government request. We will attempt to notify affected individuals unless prohibited by law.</li>
            <li><strong>Protection of Rights:</strong> We may disclose data if we believe in good faith that it is necessary to protect the rights, property, or safety of Acriotech, our clients, or the public.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Your Rights as a Data Subject</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Depending on your jurisdiction, you have the following rights regarding your personal data. To exercise any of these rights, contact our DPO at <a href="mailto:privacy@acriotech.com" style={{ color: '#4B61B8' }}>privacy@acriotech.com</a>. We will respond within 30 days.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { right: 'Right of Access', desc: 'Request a copy of all personal data we hold about you.' },
              { right: 'Right to Rectification', desc: 'Request correction of inaccurate or incomplete personal data.' },
              { right: 'Right to Erasure', desc: 'Request deletion of your personal data where there is no legitimate reason to continue processing.' },
              { right: 'Right to Restriction', desc: 'Request that we restrict the processing of your data under certain conditions.' },
              { right: 'Right to Portability', desc: 'Receive your personal data in a structured, machine-readable format to transfer to another controller.' },
              { right: 'Right to Object', desc: 'Object to processing based on legitimate interests, including direct marketing.' },
            ].map((item) => (
              <div key={item.right} style={{ padding: '1.25rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>{item.right}</div>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>6. Data Retention</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected. Account data is retained for the duration of the contractual relationship plus 7 years (to satisfy financial record-keeping requirements under the Indian Companies Act, 2013). Anonymized analytics data may be retained indefinitely. Upon termination of an enterprise agreement, all client project data is securely deleted or returned within 60 days unless a longer retention period is required by law.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>7. International Data Transfers</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Acriotech is headquartered in India. If you are located in the European Economic Area (EEA) or the United Kingdom, your data may be transferred to and processed in India or other countries that may not have data protection laws equivalent to those in your jurisdiction. When we transfer personal data internationally, we use appropriate safeguards including Standard Contractual Clauses (SCCs) approved by the European Commission, and our Data Processing Addendum (DPA) incorporates these clauses by reference.</p>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Changes to This Policy</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>We may update this Privacy Policy periodically. Material changes will be communicated via email to registered account holders at least 30 days before they take effect. Continued use of our services after the effective date constitutes acceptance of the revised policy.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
