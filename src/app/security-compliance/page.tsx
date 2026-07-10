import LegalLayout from "@/components/LegalLayout";

export default function SecurityCompliance() {
  return (
    <LegalLayout activePath="/security-compliance">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Last updated: July 10, 2026</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Security Compliance at Acriotech</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>At Acriotech, security is not a feature — it is the foundation. Every system we build, every line of code we ship, and every piece of infrastructure we operate is designed with a security-first mindset. Our enterprise clients trust us with their most sensitive data, and we take that responsibility with the utmost seriousness.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Our Security Philosophy</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech operates under the principle of <strong>Defense in Depth</strong> — a layered security strategy that ensures no single point of failure can compromise the integrity or confidentiality of our systems. We combine technical controls, administrative policies, and continuous human oversight to create a resilient security posture.</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Our security program is aligned with the <strong>NIST Cybersecurity Framework (CSF 2.0)</strong>, covering five core functions: Identify, Protect, Detect, Respond, and Recover. This is not a checkbox exercise — these functions drive our actual engineering and operational processes day-to-day.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { label: 'SOC 2 Type II', desc: 'Annual third-party audit verifying security, availability, and confidentiality controls.' },
            { label: 'ISO/IEC 27001:2013', desc: 'Internationally certified Information Security Management System (ISMS).' },
            { label: 'HIPAA & HITECH Ready', desc: 'PHI-safe infrastructure for healthcare clients with signed BAAs available.' },
            { label: 'OWASP Top 10 Compliance', desc: 'All web applications are hardened against the OWASP Top 10 vulnerabilities before release.' },
          ].map((cert) => (
            <div key={cert.label} style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>✓ {cert.label}</div>
              <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>{cert.desc}</p>
            </div>
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Infrastructure & Cloud Security</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>All Acriotech production systems are hosted on Tier-1 cloud providers (AWS, GCP, Azure) operating out of certified data centers with SOC 1, SOC 2, and ISO 27001 accreditations. We enforce strict network segmentation using VPCs, private subnets, and firewall rules to isolate production, staging, and development environments.</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Zero Trust Network Architecture:</strong> Every internal service-to-service call is authenticated using mutual TLS (mTLS). We do not operate a flat, trusted internal network.</li>
            <li><strong>Secrets Management:</strong> All API keys, credentials, and tokens are stored in Hardware Security Module (HSM)-backed vaults (HashiCorp Vault or AWS Secrets Manager). Hard-coded credentials are prohibited and automatically detected in CI/CD pipelines.</li>
            <li><strong>Immutable Infrastructure:</strong> Production servers are never patched in place. All changes are applied by replacing infrastructure using versioned, tested Infrastructure-as-Code (Terraform/Pulumi) templates.</li>
            <li><strong>DDoS Mitigation:</strong> All public-facing endpoints are protected by managed DDoS mitigation services with automatic traffic scrubbing and geo-blocking capabilities.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. Encryption Standards</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech mandates encryption at every layer of the data lifecycle:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#0F172A', color: '#FFFFFF' }}>
                  <th style={{ padding: '1rem', textAlign: 'left', borderRadius: '8px 0 0 0' }}>Layer</th>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Standard</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderRadius: '0 8px 0 0' }}>Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Data at Rest', 'AES-256-GCM', 'All databases, file stores, and backups are encrypted at the block and file level.'],
                  ['Data in Transit', 'TLS 1.3', 'All communication channels enforce TLS 1.3. Legacy TLS 1.0/1.1 is disabled globally.'],
                  ['Database Fields', 'AES-256 (Application-level)', 'PII fields (SSN, payment data, health records) are encrypted at the application layer before database storage.'],
                  ['Key Management', 'HSM-backed KMS', 'Encryption keys are rotated annually and stored in FIPS 140-2 Level 3 certified HSMs.'],
                  ['Backups', 'AES-256 + HMAC-SHA256', 'All backups are encrypted and their integrity is verified using HMAC before restoration.'],
                ].map(([layer, standard, details], idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #E2E8F0', background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td style={{ padding: '1rem', fontWeight: 600, color: '#0F172A' }}>{layer}</td>
                    <td style={{ padding: '1rem', color: '#4B61B8', fontFamily: 'monospace', fontWeight: 600 }}>{standard}</td>
                    <td style={{ padding: '1rem', color: '#475569' }}>{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Vulnerability Management & Penetration Testing</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech operates a continuous vulnerability management program covering our infrastructure, applications, and third-party dependencies:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Automated Scanning:</strong> Every code commit triggers automated SAST (Static Application Security Testing) and dependency vulnerability scans via integrated CI/CD pipelines. Critical or high-severity CVEs block deployment automatically.</li>
            <li><strong>DAST in Staging:</strong> Dynamic Application Security Testing (DAST) tools run against every staging deployment to detect runtime vulnerabilities including injection flaws, broken authentication, and XSS.</li>
            <li><strong>Annual Penetration Testing:</strong> We engage independent, CREST-certified security firms to conduct comprehensive black-box and gray-box penetration tests annually across our entire attack surface.</li>
            <li><strong>SLA for Remediation:</strong> Critical (CVSS 9.0+) vulnerabilities are patched within 24 hours, High (7.0-8.9) within 7 days, Medium (4.0-6.9) within 30 days.</li>
            <li><strong>Bug Bounty Program:</strong> We operate a responsible disclosure program. Security researchers who discover vulnerabilities and disclose them in good faith are publicly acknowledged and rewarded.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Access Control & Identity Management</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech enforces the principle of <strong>Least Privilege</strong> across all systems. Every employee, contractor, and automated system is granted only the minimum permissions required to perform their function.</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Multi-Factor Authentication (MFA):</strong> MFA is mandatory for all employees accessing internal systems, cloud consoles, code repositories, and production infrastructure. Hardware security keys (FIDO2/WebAuthn) are the required second factor for privileged access.</li>
            <li><strong>Single Sign-On (SSO):</strong> All internal tooling is integrated via a centralized Identity Provider (IdP). When an employee leaves, their access is immediately revoked from all connected systems through a single deprovisioning action.</li>
            <li><strong>Just-In-Time (JIT) Access:</strong> Engineers do not have standing access to production databases. Production access is granted on a time-limited, request-and-approval basis with full audit logging of all actions taken.</li>
            <li><strong>Quarterly Access Reviews:</strong> All access rights are reviewed quarterly. Unused permissions are revoked automatically.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>6. Incident Response</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech maintains a formally documented Security Incident Response Plan (SIRP) that is tested via tabletop exercises bi-annually. Our incident lifecycle follows these stages:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { phase: 'Detection & Triage', desc: '24/7 SIEM monitoring alerts our on-call Security Operations Center (SOC) team. All alerts are triaged within 15 minutes.' },
              { phase: 'Containment', desc: 'Automated playbooks execute initial containment (e.g., account lockout, network isolation) within minutes of confirmed incident classification.' },
              { phase: 'Eradication & Recovery', desc: 'Root cause is identified, affected systems are rebuilt from verified clean images, and integrity checks are run before traffic restoration.' },
              { phase: 'Customer Notification', desc: 'Affected enterprise customers are notified within 72 hours of breach confirmation, meeting GDPR and contractual SLA obligations.' },
              { phase: 'Post-Incident Review', desc: 'A formal post-mortem is conducted within 5 business days. Findings and remediation actions are documented and shared with affected parties upon request.' },
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '28px', height: '28px', borderRadius: '50%', background: '#4B61B8', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', marginTop: '2px' }}>{idx + 1}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>{item.phase}</div>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Security Inquiries & Reporting</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>To request our SOC 2 Type II report or ISO 27001 certificate, or to report a security vulnerability, contact our Security team at <a href="mailto:security@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>security@acriotech.com</a>. We respond to all security inquiries within one business day.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
