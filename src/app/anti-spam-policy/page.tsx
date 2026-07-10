import LegalLayout from "@/components/LegalLayout";

export default function AntiSpamPolicy() {
  return (
    <LegalLayout activePath="/anti-spam-policy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Last Updated: July 10, 2026</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Anti-Spam Policy</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>Acriotech maintains a strict zero-tolerance policy against spam and unsolicited commercial communications. This policy applies to Acriotech's own communications and to all clients, partners, and users who leverage Acriotech's infrastructure, APIs, or cloud-based notification services to send communications to third parties.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Our Commitment</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Spam erodes trust in digital communication and harms individuals, businesses, and the broader internet ecosystem. Acriotech is committed to being a responsible participant in the technology industry, and we take active steps — both technically and contractually — to ensure our infrastructure is never weaponized for spam.</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Acriotech's own outbound communications (sales outreach, product announcements, newsletters, event invitations) adhere to the highest permission-based marketing standards. We only contact individuals who have given explicit consent or with whom we have a legitimate business relationship as defined under applicable anti-spam laws.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Applicable Laws</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>All communications sent using Acriotech's infrastructure must comply with all applicable anti-spam laws, including but not limited to:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { law: 'CAN-SPAM Act (USA)', detail: 'Requires truthful headers and subject lines, a clear opt-out mechanism, and the sender\'s physical postal address. Commercial emails must be identified as advertisements where applicable.' },
              { law: 'CASL — Canada\'s Anti-Spam Legislation', detail: 'Requires express or implied consent before sending commercial electronic messages (CEMs). Records of consent must be documented and retained. Unsubscribe mechanisms must function within 10 business days.' },
              { law: 'GDPR (European Union)', detail: 'Requires a lawful basis for processing contact data. Marketing consent must be freely given, specific, informed, and unambiguous. Withdrawn consent must be honored immediately.' },
              { law: 'PECR (UK)', detail: 'The Privacy and Electronic Communications Regulations require opt-in consent for direct electronic marketing to individuals.' },
              { law: 'Information Technology Act, 2000 (India)', detail: 'Section 66A (as applicable) and associated Rules prohibit sending unsolicited communications using electronic means. Acriotech complies with TRAI regulations regarding commercial communications.' },
            ].map((item) => (
              <div key={item.law} style={{ padding: '1.25rem 1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.4rem' }}>{item.law}</div>
                <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.7 }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. Acceptable Use of Acriotech Communication Infrastructure</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>If you use Acriotech-developed software or services that include email, SMS, push notification, or in-app messaging capabilities, you are bound by the following requirements:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Documented Consent:</strong> You must obtain and document prior consent from every recipient before sending commercial or promotional communications. Double opt-in is strongly recommended and may be required for high-volume senders.</li>
            <li><strong>Accurate Sender Identity:</strong> All communications must clearly identify the sending organization. You must not spoof headers, use misleading "From" addresses, or misrepresent your identity in any communication.</li>
            <li><strong>Accurate Subject Lines and Content:</strong> Subject lines and message content must not be deceptive, misleading, or designed to trick recipients into opening a message.</li>
            <li><strong>Functional Opt-Out Mechanism:</strong> Every commercial communication must include a clear, easily accessible, and functional mechanism to unsubscribe or opt out. Opt-out requests must be processed within 10 business days. You must never charge a fee or require personal information beyond an email address to process an unsubscribe.</li>
            <li><strong>No Purchased or Scraped Lists:</strong> Purchasing, renting, borrowing, or scraping email or phone number lists is strictly and unconditionally prohibited. All recipient lists must consist solely of individuals who have explicitly opted in to receive your communications.</li>
            <li><strong>Volume Limits:</strong> High-volume senders (over 5,000 emails/day) must implement SPF, DKIM, and DMARC authentication records and maintain an unsubscribe rate below 0.1% as per Google and Yahoo sender requirements.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Prohibited Activities</h2>
          <div style={{ padding: '1.5rem', background: '#FEF2F2', borderRadius: '12px', border: '1px solid #FECACA', marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.95rem', color: '#991B1B', lineHeight: 1.7, fontWeight: 600 }}>The following activities are strictly prohibited and will result in immediate service suspension and potential legal action:</p>
          </div>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Sending any unsolicited bulk commercial electronic messages (UCE/UBE).</li>
            <li>Harvesting or collecting email addresses using automated tools, web scrapers, or bots.</li>
            <li>Using Acriotech systems to send malware, phishing emails, or messages designed to deceive recipients into revealing credentials.</li>
            <li>Creating multiple accounts to circumvent rate limits, spam filters, or suspension decisions.</li>
            <li>Suppressing or forging email headers, return-path addresses, or IP addresses.</li>
            <li>Operating a mail relay that forwards or amplifies spam from third parties.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Monitoring and Enforcement</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>Acriotech employs automated systems to monitor outbound communication rates, bounce rates, spam complaint rates, and recipient engagement signals. Accounts exhibiting patterns consistent with spam activity will be automatically flagged for review.</p>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>Upon confirmation of a violation, Acriotech reserves the right to: suspend or permanently terminate the account without refund; report the activity to relevant regulatory authorities, internet service providers, and industry blocklists; and pursue civil or criminal legal remedies to the fullest extent permitted by law.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>6. Reporting Spam</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>If you have received an unsolicited communication that appears to originate from an Acriotech system or from a client using Acriotech services, please report it to us. Include the full email headers (not just the message body) so we can trace the origin accurately.</p>
          <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}><strong>Report spam to:</strong> <a href="mailto:abuse@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>abuse@acriotech.com</a><br />Our Network Operations team investigates all reports within 24 business hours and will take appropriate remedial action.</p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>7. Acriotech's Own Email Practices</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>For transparency, here is how Acriotech manages its own outbound communications:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>All marketing emails are sent only to individuals who have explicitly opted in via our website or at an in-person event, or with whom we have a legitimate business relationship.</li>
            <li>Every email includes a one-click unsubscribe link. Unsubscribes are processed within 2 business days.</li>
            <li>We maintain a global suppression list to ensure previously unsubscribed individuals are never re-added to marketing lists.</li>
            <li>All outbound email domains are authenticated with SPF, DKIM, and DMARC policies.</li>
            <li>We monitor our sender reputation scores across major ISPs on a weekly basis.</li>
          </ul>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Questions About This Policy?</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>For clarification on acceptable use of communication features within Acriotech-built software, contact <a href="mailto:legal@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>legal@acriotech.com</a>. For spam abuse reports, email <a href="mailto:abuse@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>abuse@acriotech.com</a>.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
