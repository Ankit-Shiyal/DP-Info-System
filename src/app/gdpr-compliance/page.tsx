import LegalLayout from "@/components/LegalLayout";

export default function GDPRCompliance() {
  return (
    <LegalLayout activePath="/gdpr-compliance">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Last Updated: 01-Feb-2025</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>GDPR — What Acriotech is Doing About It</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>Acriotech has always honored its users' rights to data privacy and protection. We have no need to collect and process users' personal information beyond what is required for the functioning of our enterprise products, and this will never change. We have a privacy-conscious culture and view GDPR not as a compliance burden, but as an opportunity to demonstrate our values.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>What is GDPR?</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>The General Data Protection Regulation (EU) 2016/679 is a comprehensive EU-wide privacy and data protection law that came into effect on May 25, 2018. It significantly increases the obligations placed on organizations that process the personal data of EU and EEA residents, and dramatically strengthens the rights of those individuals.</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>GDPR applies to any globally operating company — not just EU-based businesses. Because Acriotech serves enterprise clients across Europe, Asia, and North America, GDPR compliance is our baseline standard for all global operations. We apply these protections to all users, regardless of their location.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>What is Personal Data?</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Personal data is any information that relates to an identified or identifiable natural person. GDPR covers a broad spectrum, including:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
            {['Name & Email', 'IP Addresses', 'Phone Numbers', 'Location Data', 'Biometric Data', 'Financial Records', 'Health Information', 'Political Opinions', 'Genetic Data'].map((item) => (
              <div key={item} style={{ padding: '0.75rem 1rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '0.9rem', fontWeight: 600, color: '#475569', textAlign: 'center' }}>{item}</div>
            ))}
          </div>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginTop: '1rem' }}>Note that <strong>special category data</strong> (health, biometric, genetic, racial origin, political opinions, religious beliefs, sexual orientation, trade union membership) requires an elevated level of protection and an explicit lawful basis for processing.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Acriotech's Role Under GDPR</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Depending on context, Acriotech assumes different roles under GDPR:</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1, padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Data Controller</div>
              <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7 }}>When we collect personal data from visitors to our website, prospective clients, or our own employees. We determine the purposes and means of processing this data.</p>
            </div>
            <div style={{ flex: 1, padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Data Processor</div>
              <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7 }}>When we process personal data on behalf of our enterprise clients as part of our software engineering services. The client is the data controller; Acriotech acts only on their documented instructions.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1.25rem' }}>How Acriotech Has Prepared for GDPR</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'Organizational Awareness & Training', body: 'We have conducted GDPR awareness programs across all departments, with mandatory annual training for engineers, sales, and operations staff. Employees handling personal data complete role-specific data protection training and sign confidentiality agreements.' },
              { title: 'Information Asset Register (IAR)', body: 'We maintain a comprehensive record of all personal data we process, including the category of data, the processing purpose, the legal basis, data retention periods, and the internal teams and third-party sub-processors with access. This register is reviewed quarterly.' },
              { title: 'Privacy by Design & by Default', body: 'Our engineering teams integrate data protection controls at the design stage of every product and system. This includes data minimization (only collecting what is strictly necessary), pseudonymization where possible, and privacy-friendly defaults in all user-facing settings.' },
              { title: 'Sub-processor Management', body: 'We maintain a vetted register of all third-party sub-processors (cloud providers, SaaS tools, payment processors) with whom we share personal data. All sub-processors have signed DPAs incorporating the EU Standard Contractual Clauses. Our sub-processor list is available to enterprise clients upon request.' },
              { title: 'Data Protection Impact Assessments (DPIA)', body: 'We conduct DPIAs for any new processing activity that is likely to result in a high risk to the rights and freedoms of natural persons — including large-scale processing, systematic monitoring, and novel AI-based systems. DPIA outcomes drive technical and organizational controls.' },
              { title: 'Data Protection Officer (DPO)', body: 'We have appointed an internal Data Protection Officer responsible for overseeing our GDPR compliance program, advising on data protection matters, acting as the point of contact for supervisory authorities, and handling individual rights requests. Contact: privacy@acriotech.com' },
              { title: 'Breach Notification Protocol', body: 'Our Security Incident Response Plan includes a 72-hour breach notification workflow. If we become aware of a personal data breach affecting EU residents, we will notify the relevant supervisory authority within 72 hours. Affected individuals will be notified without undue delay when the breach is likely to result in a high risk to their rights and freedoms.' },
              { title: 'International Data Transfers', body: 'For transfers of EU personal data to third countries, we rely on the European Commission-approved Standard Contractual Clauses (SCCs) and conduct Transfer Impact Assessments (TIAs) for transfers to jurisdictions that may not provide adequate protection.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ minWidth: '28px', height: '28px', borderRadius: '50%', background: '#4B61B8', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', marginTop: '2px' }}>{idx + 1}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>{item.title}</div>
                    <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7 }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Your Rights Under GDPR</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>If Acriotech is the data controller for your personal data, you have the following enforceable rights. All requests are handled within 30 days (extendable by 2 months for complex requests, with notification):</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Art. 15 — Right of Access:</strong> Receive a copy of your personal data and information about how it is processed.</li>
            <li><strong>Art. 16 — Right to Rectification:</strong> Have inaccurate data corrected without undue delay.</li>
            <li><strong>Art. 17 — Right to Erasure ("Right to be Forgotten"):</strong> Have your data deleted when it is no longer necessary for the original purpose.</li>
            <li><strong>Art. 18 — Right to Restriction:</strong> Request that processing be temporarily halted in certain circumstances.</li>
            <li><strong>Art. 20 — Right to Data Portability:</strong> Receive your data in a structured, machine-readable format (JSON or CSV).</li>
            <li><strong>Art. 21 — Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
            <li><strong>Art. 22 — Rights related to Automated Decision-Making:</strong> Not be subject to decisions based solely on automated processing that produce significant legal effects, without human review.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Does GDPR apply to my Indian or US company?', a: 'Yes, if you process the personal data of EU or EEA residents — even if you are located outside Europe — GDPR applies to your organization. As your software engineering partner, Acriotech will help ensure that the systems we build for you incorporate appropriate data protection controls.' },
              { q: 'What are the penalties for non-compliance?', a: 'Supervisory authorities can impose fines of up to €20 million or 4% of total global annual turnover (whichever is higher) for the most serious infringements (e.g., violations of basic processing principles or data subject rights). Less severe infringements carry fines up to €10 million or 2% of global turnover.' },
              { q: 'Can I sign a Data Processing Addendum (DPA) with Acriotech?', a: 'Yes. Enterprise clients who require a formal DPA (incorporating Standard Contractual Clauses for international transfers) can request one by emailing legal@acriotech.com. We will return a signed DPA within 5 business days.' },
              { q: 'How does Acriotech handle AI and automated decision-making?', a: 'Any AI system we build that produces legally significant automated decisions is designed with a mandatory human-review layer, explainability mechanisms, and override capabilities. We document the logic and risk factors of all AI decision systems in our DPIA register.' },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>Q: {item.q}</div>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7 }}><strong>A:</strong> {item.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Contact Our Data Protection Officer</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>For GDPR inquiries, to exercise your data subject rights, or to request a DPA, contact our Data Protection Officer at <a href="mailto:privacy@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>privacy@acriotech.com</a>. If you have unresolved concerns, you have the right to lodge a complaint with your local Data Protection Supervisory Authority.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
