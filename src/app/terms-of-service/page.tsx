import LegalLayout from "@/components/LegalLayout";

export default function TermsOfService() {
  return (
    <LegalLayout activePath="/terms-of-service">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Effective Date: January 1, 2026 · Last Updated: July 10, 2026</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Terms of Service</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>These Terms of Service ("Terms") constitute a legally binding agreement between you (or the organization you represent) and Acrio Tech Global Pvt. Ltd. ("Acriotech"). By accessing our websites, using our software platforms, or engaging Acriotech for professional services, you agree to these Terms in full. If you are entering into these Terms on behalf of an organization, you represent that you have the authority to bind that organization.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Services Overview</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech provides enterprise technology services including, but not limited to:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Custom enterprise software design, development, and deployment</li>
            <li>Artificial intelligence and intelligent automation solutions</li>
            <li>Cloud infrastructure architecture, migration, and management</li>
            <li>Data engineering, analytics, and business intelligence platforms</li>
            <li>Technical consulting and digital transformation advisory</li>
            <li>Managed engineering team augmentation and dedicated squads</li>
          </ul>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginTop: '1rem' }}>The specific scope, deliverables, timelines, and commercial terms for any engagement are governed by a separately executed <strong>Master Services Agreement (MSA)</strong> and accompanying <strong>Statement of Work (SOW)</strong>. In the event of any conflict between these general Terms and a signed MSA, the MSA shall control.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Account Registration and Eligibility</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>To use certain features of our services, you may be required to register an account. You agree to:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Provide accurate, current, and complete information during registration and keep it updated.</li>
            <li>Maintain the confidentiality of your account credentials and immediately notify Acriotech of any unauthorized access.</li>
            <li>Be at least 18 years of age, or the age of legal majority in your jurisdiction, to create an account.</li>
            <li>Ensure that your use of the services complies with all applicable laws in your jurisdiction.</li>
          </ul>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginTop: '1rem' }}>You are fully responsible for all activities that occur under your account. Acriotech shall not be liable for any loss or damage arising from unauthorized use of your account that is attributable to your failure to safeguard your credentials.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. Intellectual Property Rights</h2>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>3.1 Acriotech's IP</h3>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>All software, frameworks, tools, methodologies, trade secrets, and pre-existing intellectual property owned or developed by Acriotech prior to or independently of any engagement ("Acriotech Background IP") remain the sole property of Acriotech. Our delivery of services to you does not transfer ownership of any Acriotech Background IP unless explicitly stated in a signed written agreement.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>3.2 Client IP and Work Product</h3>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Subject to full payment of all fees due under the applicable SOW, all custom deliverables developed specifically for a client ("Work Product") — including custom source code, architectural designs, and documentation — shall become the property of the client upon delivery. Acriotech retains a non-exclusive, perpetual, royalty-free license to use general knowledge, skills, and techniques acquired during the engagement for other projects.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>3.3 Open Source Components</h3>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Our solutions may incorporate open-source software ("OSS"). We perform thorough open-source license audits as part of our delivery process. Any OSS components will be documented in a Software Bill of Materials (SBOM) provided alongside each major deliverable. Client obligations under applicable OSS licenses (e.g., GPL, MIT, Apache) remain the client's responsibility.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Payment Terms and Invoicing</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}><strong>Invoicing Cycle:</strong> Unless otherwise specified in the SOW, professional services are invoiced monthly in arrears. Fixed-price project deliverables are invoiced against agreed milestones.</p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}><strong>Payment Due Date:</strong> All invoices are due within thirty (30) days of the invoice date ("Net 30"). Enterprise clients may negotiate alternative payment terms in their MSA.</p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}><strong>Late Payments:</strong> Invoices not paid within 15 days of the due date accrue interest at 1.5% per month (or the maximum rate permitted by law) from the due date. Acriotech reserves the right to suspend services after 30 days of non-payment following written notice.</p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}><strong>Taxes:</strong> All fees are exclusive of applicable taxes (including GST). The client is responsible for all applicable taxes arising from the provision of services in their jurisdiction.</p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Confidentiality</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Each party agrees to treat the other party's Confidential Information with the same degree of care used to protect its own confidential information, but in no event less than reasonable care. "Confidential Information" means any non-public information disclosed by one party to the other in connection with the services, including technical, business, financial, and strategic information, source code, and client data.</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Confidentiality obligations survive termination of the agreement for a period of <strong>5 years</strong>. Obligations do not apply to information that: (a) is or becomes publicly known without breach; (b) is independently developed without use of the Confidential Information; or (c) is required to be disclosed by applicable law or court order, provided the disclosing party is given reasonable prior notice.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>6. Warranties and Disclaimers</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech warrants that it will perform all services in a professional and workmanlike manner consistent with industry standards. For custom software deliverables, Acriotech provides a <strong>90-day warranty</strong> post-delivery during which we will fix, at no additional cost, any material defects in the software that prevent it from functioning as specified in the SOW.</p>
          <div style={{ padding: '1.5rem', background: '#FEF3C7', borderRadius: '12px', border: '1px solid #FDE68A' }}>
            <p style={{ fontSize: '0.95rem', color: '#92400E', lineHeight: 1.7 }}><strong>DISCLAIMER:</strong> EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS, ALL SERVICES ARE PROVIDED "AS IS." ACRIOTECH EXPRESSLY DISCLAIMS ALL IMPLIED WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. ACRIOTECH DOES NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ALL DEFECTS WILL BE CORRECTED.</p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>7. Limitation of Liability</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ACRIOTECH BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, EVEN IF ACRIOTECH HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Acriotech's aggregate liability for all claims arising under these Terms shall not exceed the greater of (a) the total fees paid or payable by you to Acriotech in the twelve (12) months immediately preceding the event giving rise to the claim, or (b) INR 1,00,000 (Indian Rupees One Lakh). These limitations shall not apply to liability arising from: Acriotech's gross negligence or willful misconduct, death or personal injury, or fraud.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>8. Term, Termination, and Suspension</h2>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>For Convenience:</strong> Either party may terminate any SOW for convenience with 30 days written notice, subject to payment of all fees incurred up to the termination date including any non-cancellable commitments Acriotech has made in reliance on the engagement.</li>
            <li><strong>For Cause:</strong> Either party may terminate immediately upon written notice if the other party materially breaches these Terms and fails to cure the breach within 15 days of receiving notice of the breach.</li>
            <li><strong>Effect of Termination:</strong> Upon termination, each party will return or destroy the other's Confidential Information. Acriotech will provide all completed Work Product paid for up to the termination date. Sections on IP, Confidentiality, Payment, and Liability survive termination indefinitely.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>9. Governing Law and Dispute Resolution</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Specifically, the Indian Information Technology Act, 2000 (as amended), the Indian Contract Act, 1872, and applicable rules under the Companies Act, 2013 shall apply.</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>All disputes shall first be subject to good-faith negotiation. If not resolved within 30 days, the dispute shall be referred to binding arbitration under the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Ahmedabad, Gujarat, India. The arbitration shall be conducted in English. The decision of the arbitral tribunal shall be final and binding on both parties.</p>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Questions About These Terms?</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>For questions about these Terms of Service, or to request a copy of our standard MSA template, contact our Legal team at <a href="mailto:legal@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>legal@acriotech.com</a>.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
