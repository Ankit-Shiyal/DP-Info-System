import LegalLayout from "@/components/LegalLayout";

export default function TrademarkPolicy() {
  return (
    <LegalLayout activePath="/trademark-policy">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        <div>
          <p style={{ fontSize: '0.85rem', color: '#4B61B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Last Updated: 01-Feb-2025</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.5rem' }}>Trademark Policy</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>The Acriotech brand — including our name, logo, wordmarks, and other brand assets — represents the trust, quality, and commitment to excellence that we have built with our clients and partners. This policy governs how third parties may use Acriotech's trademarks and brand assets, and what is not permitted.</p>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0' }} />

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>1. Our Trademarks</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>The following are registered and unregistered trademarks of Acriotech Pvt. Ltd.:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
            {['Acriotech™ (wordmark)', '"Acrio Tech Global"', 'The Acriotech Logo (stylized "A")', 'Acriotech color palette', 'Product brand names', 'Domain names (acriotech.com, etc.)'].map((item) => (
              <div key={item} style={{ padding: '1rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>
                {item}
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginTop: '1rem' }}>All rights in these marks are reserved by Acriotech. Unauthorized use of these marks constitutes trademark infringement and may result in legal action.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>2. Permitted Uses (No Prior Approval Required)</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>The following uses of Acriotech trademarks are generally permitted without prior written permission, provided they strictly comply with our Brand Guidelines (available at acriotech.com/brand):</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Factual Reference:</strong> You may use "Acriotech" in running text to truthfully and accurately refer to Acriotech or its services (e.g., "Our platform was built by Acriotech" or "Powered by Acriotech").</li>
            <li><strong>Press and Editorial Coverage:</strong> Journalists, analysts, and bloggers may use Acriotech trademarks in editorial or news coverage of the company, provided the coverage is factual and not misleading.</li>
            <li><strong>Technology Stack Disclosure:</strong> Developers and organizations may list Acriotech in their technology stack, partner lists, or integration directories using the standard Acriotech wordmark.</li>
            <li><strong>Academic Research:</strong> Researchers may use Acriotech trademarks in academic papers, theses, or research presentations when referring to Acriotech's products, services, or case studies.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>3. Uses Requiring Prior Written Approval</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>The following uses require explicit written permission from Acriotech's Marketing team before proceeding. Submit requests to <a href="mailto:marketing@acriotech.com" style={{ color: '#4B61B8' }}>marketing@acriotech.com</a>:</p>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Use of the Acriotech logo or logo variant in any marketing material, co-branding, co-marketing campaigns, or partner collateral.</li>
            <li>Inclusion of Acriotech trademarks in the name or title of a third-party product, service, event, or publication.</li>
            <li>Use of Acriotech brand assets in merchandise, physical goods, promotional items, or apparel.</li>
            <li>Creating derivative works based on the Acriotech logo or visual identity.</li>
            <li>Using Acriotech trademarks in paid advertising (Google Ads, social media ads, etc.).</li>
            <li>Case study or testimonial publication that references Acriotech by name.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>4. Prohibited Uses</h2>
          <div style={{ padding: '1.5rem', background: '#FEF2F2', borderRadius: '12px', border: '1px solid #FECACA', marginBottom: '1rem' }}>
            <p style={{ fontSize: '0.95rem', color: '#991B1B', lineHeight: 1.7, fontWeight: 600 }}>The following uses of Acriotech trademarks are strictly prohibited under all circumstances:</p>
          </div>
          <ul style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Misleading Association:</strong> Using Acriotech trademarks in a way that falsely suggests sponsorship, endorsement, official partnership, or affiliation with Acriotech where none exists.</li>
            <li><strong>Domain Name Squatting:</strong> Registering any domain name that incorporates "Acriotech", "Acrio Tech", or any deceptively similar variation, including with prefixes/suffixes (e.g., "get-acriotech.com", "acriotechreviews.net").</li>
            <li><strong>Social Media Impersonation:</strong> Creating social media accounts, pages, or profiles that use Acriotech's name or logo in a way that could mislead others into believing the account is operated by Acriotech.</li>
            <li><strong>Logo Alteration:</strong> Modifying, distorting, recoloring, animating, or otherwise altering the Acriotech logo or wordmark in any way not approved by our Brand Guidelines.</li>
            <li><strong>Negative or Derogatory Context:</strong> Using Acriotech trademarks in a context that is defamatory, obscene, disparaging, or likely to damage Acriotech's reputation.</li>
            <li><strong>Competitive Advertising:</strong> Using "Acriotech" as a keyword in paid search advertising without permission, or in comparative advertising that could mislead consumers about the comparative performance of a competing service.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>5. Brand Usage Guidelines Summary</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, marginBottom: '1rem' }}>When using Acriotech trademarks under permitted circumstances, observe the following guidelines:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1.5rem', background: '#F0FDF4', borderRadius: '12px', border: '1px solid #BBF7D0' }}>
              <div style={{ fontWeight: 700, color: '#166534', marginBottom: '0.75rem' }}>✓ DO</div>
              <ul style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>Use the exact spelling "Acriotech" (capital A only).</li>
                <li>Use the trademark as an adjective, not a noun or verb. ("Acriotech services", not "the Acriotech").</li>
                <li>Include a trademark notice (™) on first use if using the wordmark.</li>
                <li>Maintain clear space around the logo equal to the height of the "A" in the wordmark.</li>
                <li>Download official logo files from our brand portal.</li>
              </ul>
            </div>
            <div style={{ padding: '1.5rem', background: '#FEF2F2', borderRadius: '12px', border: '1px solid #FECACA' }}>
              <div style={{ fontWeight: 700, color: '#991B1B', marginBottom: '0.75rem' }}>✗ DON'T</div>
              <ul style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.8, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>Don't pluralize or make possessive: "Acriotechs" or "Acriotech's".</li>
                <li>Don't use the logo on backgrounds that create poor contrast.</li>
                <li>Don't combine our logo with another company's logo without approval.</li>
                <li>Don't use outdated versions of the logo.</li>
                <li>Don't use the mark in a size smaller than 80px wide digitally.</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0F172A', marginBottom: '1rem' }}>6. Reporting Trademark Misuse</h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8 }}>If you become aware of any unauthorized or infringing use of Acriotech's trademarks, please report it to our Legal team. We take brand integrity seriously and will investigate all reports promptly. Providing the URL, screenshot, or description of the misuse will help us act more quickly.</p>
        </div>

        <div style={{ padding: '2rem', background: '#EEF2FF', borderRadius: '12px', border: '1px solid #C7D2FE' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>Brand Assets & Permissions</h3>
          <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.7 }}>For official brand asset downloads, to request a specific use permission, or to report trademark misuse, contact <a href="mailto:marketing@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>marketing@acriotech.com</a> or our Legal team at <a href="mailto:legal@acriotech.com" style={{ color: '#4B61B8', fontWeight: 600 }}>legal@acriotech.com</a>.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
