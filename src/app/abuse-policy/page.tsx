import LegalLayout from "@/components/LegalLayout";

export default function AbusePolicy() {
  return (
    <LegalLayout activePath="/abuse-policy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Last Updated: 01-Feb-2025</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Abuse Policy</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>Acriotech provides enterprise-grade technology infrastructure and software services. This Abuse Policy governs what constitutes unacceptable use of Acriotech's network, APIs, cloud infrastructure, software platforms, and any services provided to clients and end-users. We are committed to maintaining a safe, reliable, and law-abiding environment for all our clients, their end-users, and the broader internet community.</p>
        </div>

        <div style={{ padding: '1.5rem', background: '#FEF2F2', borderRadius: '12px', border: '1px solid #FECACA' }}>
          <p style={{ fontSize: '1rem', color: '#991B1B', lineHeight: 1.7, fontWeight: 600 }}>Zero Tolerance: Acriotech maintains a zero-tolerance policy for abuse. Violations will result in immediate service suspension, account termination, forfeiture of prepaid fees, and may be referred to law enforcement.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Scope of This Policy</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>This policy applies to:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Direct clients of Acriotech who use our professional services or hosted software platforms.</li>
            <li>End-users of enterprise software systems built and operated by Acriotech on behalf of our clients.</li>
            <li>Third parties who interact with, or attempt to interact with, Acriotech infrastructure.</li>
            <li>Acriotech employees, contractors, and partners who access internal systems.</li>
          </ul>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginTop: '1rem' }}>Regardless of where a user is located, use of Acriotech services constitutes acceptance of this Abuse Policy. Acriotech reserves the right to act on any abuse of our systems originating from any jurisdiction.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Prohibited Activities</h2>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.1 Network & Infrastructure Abuse</h3>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Denial of Service (DoS/DDoS) Attacks:</strong> Launching, facilitating, or directing distributed denial-of-service attacks against Acriotech's infrastructure, other Acriotech clients, or any third-party system.</li>
            <li><strong>Network Intrusion:</strong> Unauthorized attempts to access, probe, scan, or compromise any Acriotech or third-party network, server, database, or system.</li>
            <li><strong>Resource Hijacking:</strong> Using Acriotech's compute, storage, or network resources for purposes beyond the scope of your agreement — including unauthorized cryptocurrency mining, rendering workloads, or providing services to undisclosed third parties.</li>
            <li><strong>IP Address Spoofing:</strong> Forging, spoofing, or otherwise misrepresenting the source IP address of traffic originating from Acriotech's network.</li>
            <li><strong>Traffic Amplification:</strong> Using Acriotech systems as open proxies, relays, or reflectors to amplify traffic in attacks against third parties.</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.2 Malicious Code & Security Threats</h3>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Hosting, distributing, or transmitting malware, ransomware, spyware, adware, trojans, rootkits, or any other malicious software.</li>
            <li>Operating command-and-control (C2) infrastructure for botnets or malware campaigns.</li>
            <li>Creating, deploying, or testing exploits against production systems (production security testing requires prior written authorization from Acriotech's Security team).</li>
            <li>Hosting phishing pages, credential harvesting sites, or fraudulent impersonations of legitimate organizations.</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.3 Illegal and Harmful Content</h3>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Hosting, storing, distributing, or transmitting any content that is illegal under applicable international law, including child sexual abuse material (CSAM), content facilitating terrorism or extremist violence, or content facilitating human trafficking.</li>
            <li>Operating marketplaces for illegal goods or services, including unregulated weapons, narcotics, stolen financial data, or access credentials.</li>
            <li>Content that constitutes harassment, stalking, or targeted intimidation of an individual.</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.4 Data Integrity & Fraud</h3>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li>Unauthorized access to, exfiltration of, or tampering with another user's or organization's data stored within Acriotech-managed systems.</li>
            <li>Circumventing authentication, authorization, billing controls, or API rate limits through technical means.</li>
            <li>Creating multiple accounts to evade a suspension or circumvent usage limits.</li>
            <li>Providing false or misleading information during account registration or contracting that materially affects the nature of the services provided.</li>
          </ul>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.5 Unauthorized Use of AI Features</h3>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Using Acriotech AI infrastructure or APIs to generate child sexual abuse material, deepfakes of real individuals without their consent, or content designed to facilitate real-world violence.</li>
            <li>Attempting to extract training data, model weights, or system prompts from Acriotech AI systems through prompt injection, jailbreaking, or reverse engineering.</li>
            <li>Using AI systems to automate large-scale disinformation campaigns, impersonation attacks, or spam.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. Consequences of Policy Violations</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Upon detection or credible report of an abuse policy violation, Acriotech may take one or more of the following actions, depending on the severity, whether it is a first or repeat offense, and whether the violation was intentional:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
            {[
              { severity: 'Minor Violations', actions: 'Written warning, requirement to acknowledge policy, temporary throttling of API access.' },
              { severity: 'Moderate Violations', actions: 'Immediate suspension of the affected service or feature pending review. No refund for suspended period.' },
              { severity: 'Severe Violations', actions: 'Immediate and permanent termination of all Acriotech accounts and services. Forfeiture of all prepaid fees. Referral to industry blocklists.' },
              { severity: 'Criminal Violations', actions: 'All of the above, plus referral to law enforcement and cooperation with criminal investigations. Preservation of evidence per legal hold procedures.' },
            ].map((item) => (
              <div key={item.severity} style={{ padding: '1.25rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>{item.severity}</div>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6 }}>{item.actions}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Monitoring and Detection</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech actively monitors its network and infrastructure for abuse patterns using a combination of automated tools and human analysis. Our Security Operations Center (SOC) operates 24/7 and receives threat intelligence feeds from industry partners, ISACs, and government cybersecurity bodies to identify emerging threats.</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>By using Acriotech services, you consent to this monitoring for the purpose of enforcing this policy and maintaining the security and integrity of our infrastructure. All monitoring is conducted within the bounds of applicable law and our Privacy Policy.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Responsible Disclosure</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>If you are a security researcher who has discovered a potential vulnerability in Acriotech's systems, we strongly encourage responsible disclosure rather than exploitation. Please report your findings to our security team at <a href="mailto:security@acriotech.com" style={{ color: '#4B61B8' }}>security@acriotech.com</a> before any public disclosure. We commit to:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Acknowledging your report within 2 business days.</li>
            <li>Providing regular updates on the remediation status.</li>
            <li>Not pursuing legal action against researchers who act in good faith and within this responsible disclosure framework.</li>
            <li>Publicly acknowledging your contribution (with your permission) once the vulnerability is patched.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>6. Reporting Abuse</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>If you believe Acriotech's infrastructure, network, or a client operating on Acriotech's platform is being used for abusive purposes, please report it immediately. Provide as much detail as possible, including:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <li>The nature of the abuse (e.g., DDoS source, phishing site, spam source).</li>
            <li>IP addresses, domain names, URLs, or any other identifiers involved.</li>
            <li>Timestamps and any relevant log excerpts or screenshots.</li>
            <li>Any harm already caused to you or your organization.</li>
          </ul>
          <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}><strong>Abuse Reporting:</strong> <a href="mailto:abuse@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>abuse@acriotech.com</a><br /><strong>Security Issues:</strong> <a href="mailto:security@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>security@acriotech.com</a><br />All reports are treated confidentially. We target a first response within 24 business hours.</p>
          </div>
        </div>

      </div>
    </LegalLayout>
  );
}
