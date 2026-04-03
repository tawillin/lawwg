import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Willingham Law Firm, PC — how we collect, use, and protect information submitted through lawwg.com.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-8 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Legal</p>
          <h1 className="font-serif text-4xl text-white mb-4">Privacy Policy</h1>
          <div className="w-12 h-0.5 bg-gold-500 mb-5" />
          <p className="text-white/60">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-headings:font-serif prose-headings:text-navy-900 prose-a:text-gold-600 max-w-none">
          <p>
            Willingham Law Firm, PC (&ldquo;WG Law,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
            operates the website located at lawwg.com. This Privacy Policy describes how we collect, use, and protect
            information you provide when you visit our website or submit a contact form.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you submit a contact form on our website, we collect the information you voluntarily provide,
            including your name, email address, phone number, and the content of your message. We also collect
            standard web server logs (IP address, browser type, pages visited) for security and analytics purposes.
          </p>
          <p>
            We do not collect sensitive personal information (such as Social Security numbers or financial account
            details) through this website.
          </p>

          <h2>How We Use Your Information</h2>
          <p>Information submitted through our contact form is used solely to:</p>
          <ul>
            <li>Respond to your inquiry;</li>
            <li>Schedule consultations; and</li>
            <li>Follow up on legal matters you have asked about.</li>
          </ul>
          <p>
            We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>

          <h2>Attorney-Client Relationship</h2>
          <p>
            Submission of a contact form or inquiry through this website does not create an attorney-client
            relationship. No attorney-client relationship is formed until you have met with one of our attorneys,
            discussed your matter, and signed an engagement agreement.
          </p>

          <h2>No Legal Advice</h2>
          <p>
            The information on this website is provided for general informational purposes only and does not
            constitute legal advice. You should not act or refrain from acting based on any content on this
            website without first seeking qualified legal counsel for your specific situation.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies or similar technologies for basic functionality and analytics. You can
            configure your browser to refuse cookies, though some features of the site may not function properly
            as a result.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect information submitted through our website. However, no
            transmission of data over the internet is completely secure, and we cannot guarantee the security
            of information transmitted to us.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or by phone at{" "}
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
