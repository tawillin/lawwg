import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/contact/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Schedule a free consultation with Willingham Law Group. We're here to answer your questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Free Consultation
            </h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-4" />
            <p className="text-white/60 text-base max-w-xl">
              Tell us about your situation and we&apos;ll respond within one business day.
              The first consultation is always free.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - wider */}
            <div className="lg:col-span-3 bg-white rounded-sm shadow-sm p-8 md:p-10">
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="bg-navy-900 rounded-sm p-8 text-white">
                  <h3 className="font-serif text-xl mb-6">Contact Information</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gold-500/10 rounded-sm flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-gold-500" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Phone</p>
                        <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-gold-400 transition-colors">
                          {siteConfig.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gold-500/10 rounded-sm flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-gold-500" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Email</p>
                        <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-gold-400 transition-colors">
                          {siteConfig.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gold-500/10 rounded-sm flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-gold-500" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Address</p>
                        <address className="not-italic text-white text-sm">
                          {siteConfig.offices[0].street}<br />
                          {siteConfig.offices[0].city}, {siteConfig.offices[0].state} {siteConfig.offices[0].zip}
                        </address>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gold-500/10 rounded-sm flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-gold-500" />
                      </div>
                      <div>
                        <p className="text-white/50 text-xs uppercase tracking-wide mb-1">Hours</p>
                        <p className="text-white text-sm">{siteConfig.hours}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white border border-slate-100 rounded-sm p-6">
                  <p className="text-gold-500 text-xs font-semibold tracking-wide uppercase mb-2">
                    What to expect
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    {[
                      "We'll review your message within 24 hours",
                      "A free 30-minute consultation by phone or in person",
                      "Plain-language explanation of your options",
                      "No pressure, no commitment required",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-gold-500 mt-0.5">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
