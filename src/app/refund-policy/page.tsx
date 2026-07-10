import LegalLayout from "@/components/LegalLayout";

export default function RefundPolicy() {
  return (
    <LegalLayout activePath="/refund-policy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Last Updated: July 10, 2026</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Refund & Cancellation Policy</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>Acriotech is committed to delivering measurable value on every engagement. We understand that business circumstances change, and this policy is designed to be fair to both parties. This policy applies to all services and products provided by Acrio Tech Global Pvt. Ltd., subject to any specific terms agreed in a signed Master Services Agreement (MSA) or Statement of Work (SOW).</p>
        </div>

        <div style={{ padding: '1.5rem', background: '#FEF3C7', borderRadius: '12px', border: '1px solid #FDE68A' }}>
          <p style={{ fontSize: '1rem', color: '#92400E', lineHeight: 1.7 }}><strong>Important:</strong> In the event of a conflict between this general Refund Policy and a signed MSA or SOW, the terms of the MSA/SOW shall govern.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Custom Software Development & Professional Services</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Custom software engineering engagements are unique by nature. Our teams invest significant time in discovery, architecture, design, and development. For this reason, the following terms apply:</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>1.1 Pre-Commencement Cancellations</h3>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>If an engagement is cancelled before any work has commenced (before the kickoff meeting and project setup), a full refund of any advance payment will be issued, less any non-refundable third-party costs already incurred on your behalf (e.g., software licenses, cloud setup fees). Processing of refunds takes 7-10 business days.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>1.2 Post-Commencement Cancellations</h3>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Once work has commenced and is underway, fees are non-refundable for work already delivered or in progress. Payment is due for:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
            <li>All completed milestones as defined in the SOW.</li>
            <li>Work in progress, calculated on a pro-rata basis using agreed daily/hourly rates for the current sprint or billing period.</li>
            <li>Any non-cancellable third-party commitments made on the client's behalf (e.g., reserved cloud capacity, specialized software licenses).</li>
          </ul>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Upon cancellation, Acriotech will promptly deliver all completed work product and supporting documentation to the client. We strive to make the transition as smooth as possible.</p>

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>1.3 Delivery Disputes</h3>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>If a client believes a deliverable does not materially conform to the agreed specifications in the SOW, they must raise a written dispute within <strong>14 calendar days</strong> of the delivery date. Acriotech will review the dispute and, if valid, will remedy the deficiency at no additional charge within the timeline agreed by both parties. If a dispute is not raised within 14 days, the deliverable is considered accepted.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Dedicated Engineering Teams (Retainer Model)</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>For clients who have engaged Acriotech on a dedicated team augmentation or retainer basis (monthly billing for a reserved team of engineers), the following terms apply:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Cancellation Notice Period:</strong> A minimum of <strong>30 days written notice</strong> is required to cancel or downscale a dedicated team arrangement. This allows Acriotech to make appropriate staffing arrangements for the affected engineers.</li>
            <li><strong>Monthly Fees:</strong> Monthly retainer fees are non-refundable once the billing period has commenced. Partial-month cancellations are not eligible for a pro-rated refund unless the cancellation is due to a material breach by Acriotech.</li>
            <li><strong>Scaling Down:</strong> Clients may reduce the size of their dedicated team with 30 days notice. Any pre-paid fees for removed team members for the notice period are non-refundable but will be applied as a credit toward future services.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. SaaS Subscriptions & Software Licenses</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>For any proprietary Acriotech SaaS products or licensed software platforms:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: '30-Day Money-Back Guarantee (New Subscriptions)', detail: 'For new enterprise subscriptions, if you are not satisfied with our product within the first 30 days of your initial subscription start date, you are entitled to a full refund of the first month\'s subscription fee. This guarantee applies once per organization and is not available for renewals.' },
              { label: 'Annual Subscriptions', detail: 'Annual subscriptions cancelled after the 30-day guarantee window are non-refundable, but you will retain full access to the platform for the remainder of the annual subscription period. We do not issue pro-rated refunds for unused months in an annual plan.' },
              { label: 'Monthly Subscriptions', detail: 'Monthly subscriptions may be cancelled at any time. Cancellation takes effect at the end of the current billing cycle. No partial refunds are issued for unused days in the current month.' },
              { label: 'Service Downtime Credits', detail: 'If the Acriotech platform experiences unplanned downtime exceeding the agreed SLA (e.g., 99.9% monthly uptime), eligible enterprise clients will receive service credits applied to the next invoice. Credits are the sole remedy for downtime and are not paid in cash.' },
            ].map((item) => (
              <div key={item.label} style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>{item.label}</div>
                <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. How to Request a Refund</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>To initiate a refund or cancellation, follow these steps:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', action: 'Submit a written request', detail: 'Email legal@acriotech.com with the subject line "Refund Request — [Your Company Name]". Include your invoice number, the reason for the refund request, and supporting documentation if applicable.' },
              { step: '2', action: 'Acriotech Review', detail: 'Our accounts team will review your request within 5 business days and may request additional information or schedule a call to understand the situation.' },
              { step: '3', action: 'Decision & Processing', detail: 'If your refund is approved, it will be processed to your original payment method within 7-14 business days, depending on your bank or payment processor.' },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '32px', height: '32px', borderRadius: '50%', background: '#4B61B8', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, marginTop: '2px' }}>{item.step}</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>{item.action}</div>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Billing Disputes</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>Billing disputes must be raised in writing within <strong>14 calendar days</strong> of the invoice date. Contact our Finance team at <a href="mailto:finance@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>finance@acriotech.com</a>. Late dispute claims may not be considered. We are committed to resolving all billing issues fairly and promptly.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
