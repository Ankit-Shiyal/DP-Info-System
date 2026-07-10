import LegalLayout from "@/components/LegalLayout";

export default function IPRComplaints() {
  return (
    <LegalLayout activePath="/ipr-complaints">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Last Updated: July 10, 2026</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Intellectual Property Rights (IPR) Complaints</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>Acriotech deeply respects the intellectual property rights of all creators, innovators, and rights holders. We have adopted comprehensive policies to prevent infringement on our platform and within the software systems we build and operate. This page outlines how to report potential IP violations and how we handle such reports.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Our Approach to Intellectual Property</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech's core business is building proprietary software. We understand better than most how vital intellectual property protection is. Our engineering processes include:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><strong>Open Source License Audits:</strong> Every project undergoes an automated and manual open-source license review before deployment. We use FOSS license compliance tools to ensure we never inadvertently incorporate GPL or other copyleft code into proprietary deliverables without proper licensing.</li>
            <li><strong>Software Bill of Materials (SBOM):</strong> We generate and maintain SBOMs for all major project deliverables, documenting every open-source and third-party component used.</li>
            <li><strong>Developer Training:</strong> All Acriotech engineers receive training on IP fundamentals — including copyright, patents, trade secrets, and open-source licensing — as part of their onboarding.</li>
            <li><strong>Client IP Ownership:</strong> Our standard contracts ensure clients own all custom-developed Work Product upon full payment, as specified in our Terms of Service.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Copyright Infringement (DMCA Takedown Procedure)</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>In accordance with the Digital Millennium Copyright Act (DMCA) of 1998 and equivalent international legislation, Acriotech has designated a Copyright Agent to receive notifications of claimed copyright infringement. If you believe that content accessible through an Acriotech-operated system infringes your copyright, you must submit a formal takedown notice.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>2.1 Required Elements of a Valid DMCA Notice</h3>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>To be legally valid, your written DMCA takedown notification must include all of the following elements (per 17 U.S.C. § 512(c)(3)):</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { num: 'i', text: 'A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.' },
              { num: 'ii', text: 'Identification of the copyrighted work claimed to have been infringed. If multiple works are covered by a single notification, a representative list of those works.' },
              { num: 'iii', text: 'Identification of the material that is claimed to be infringing or the subject of infringing activity, including information reasonably sufficient for us to locate the material (e.g., a specific URL).' },
              { num: 'iv', text: 'Your contact information: name, mailing address, telephone number, and email address.' },
              { num: 'v', text: 'A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or applicable law.' },
              { num: 'vi', text: 'A statement made under penalty of perjury that the information in the notification is accurate, and that you are the copyright owner or authorized to act on behalf of the copyright owner.' },
            ].map((item) => (
              <div key={item.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ minWidth: '28px', height: '28px', borderRadius: '50%', background: '#E2E8F0', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.85rem', marginTop: '2px' }}>{item.num}</div>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <div style={{ padding: '1.5rem', background: '#FEF3C7', borderRadius: '12px', border: '1px solid #FDE68A', marginTop: '1rem' }}>
            <p style={{ fontSize: '0.95rem', color: '#92400E', lineHeight: 1.7 }}><strong>Warning:</strong> Filing a false DMCA takedown notice can expose you to significant legal liability including damages, attorney fees, and penalties for perjury. Please ensure the accuracy and completeness of your claim before submitting.</p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. Where to Send Your DMCA Notice</h2>
          <div style={{ padding: '2rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <strong>Acriotech Designated Copyright Agent</strong><br /><br />
            Attn: Legal / IP Compliance<br />
            Acrio Tech Global Pvt. Ltd.<br />
            14, Shiv Narayan Complex, Virani Circle,<br />
            Kaliyabid, Bhavnagar - 364002<br />
            Gujarat, India<br /><br />
            <strong>Email:</strong> <a href="mailto:legal@acriotech.com" style={{ color: '#4B61B8' }}>legal@acriotech.com</a> (Subject: "DMCA Notice")<br />
            <strong>Phone:</strong> +91 [Contact Number]
          </div>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginTop: '1rem' }}>We respond to all valid DMCA notices within 5 business days. Incomplete notices will be returned for correction before processing.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. DMCA Counter-Notice Procedure</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>If you believe your material was removed or disabled due to an erroneous or misidentified DMCA notice, you may submit a written counter-notice to our Copyright Agent. A valid counter-notice must include:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <li>Your physical or electronic signature.</li>
            <li>Identification of the material that was removed or disabled and its location before removal.</li>
            <li>A statement under penalty of perjury that you have a good faith belief the material was removed or disabled as a result of mistake or misidentification.</li>
            <li>Your name, address, telephone number, and email address, and a statement that you consent to the jurisdiction of the courts in your district.</li>
          </ul>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Upon receipt of a valid counter-notice, Acriotech will forward it to the original complainant. If the complainant does not file a court action within 10-14 business days, the content may be restored.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Patent Infringement Concerns</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>If you believe an Acriotech product or service infringes a valid patent claim, please contact our Legal team at <a href="mailto:legal@acriotech.com" style={{ color: '#4B61B8' }}>legal@acriotech.com</a> with the following information:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>The patent number(s) and jurisdiction (e.g., US Patent No. XXXXXXXX).</li>
            <li>A description of how you believe our product or service infringes the specific claims of the patent.</li>
            <li>Your contact information and whether you represent the patent holder or are a licensee.</li>
          </ul>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginTop: '1rem' }}>Acriotech takes all patent concerns seriously. Our Legal and Engineering teams will review the submission in good faith. We will respond within 10 business days of receiving a complete patent concern submission.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>6. Repeat Infringer Policy</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Acriotech has adopted a policy of terminating, in appropriate circumstances, the accounts of users and clients who are found to be repeat infringers of intellectual property rights. An account may be terminated for repeated violations regardless of whether any individual violation resulted in a full takedown. We reserve the right to make this determination at our sole discretion based on the totality of circumstances.</p>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Submit an IPR Complaint</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>For all intellectual property concerns — copyright, trademark, or patent — contact our Legal team at <a href="mailto:legal@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>legal@acriotech.com</a> with "IPR Complaint" in the subject line. We aim to respond to all complete submissions within 5 business days.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
