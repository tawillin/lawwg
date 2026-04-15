import Link from "next/link";
import Image from "next/image";
import { Phone, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { practiceAreas } from "@/data/practiceAreas";

// Brand icons removed from lucide-react v1 — using minimal SVGs
function YoutubeSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" />
    </svg>
  );
}
function FacebookSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.87v2.28h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}
function InstagramSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98C23.99 15.67 24 15.26 24 12c0-3.26-.01-3.67-.07-4.95-.2-4.35-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}
function XSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-light.png"
                alt={siteConfig.shortName}
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{siteConfig.description}</p>
            <div className="flex gap-3">
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-8 h-8 bg-navy-800 rounded-sm flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <YoutubeSvg className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-8 h-8 bg-navy-800 rounded-sm flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <FacebookSvg className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-8 h-8 bg-navy-800 rounded-sm flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <InstagramSvg className="w-4 h-4" />
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter"
                className="w-8 h-8 bg-navy-800 rounded-sm flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors">
                <XSvg className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "The Firm", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "5-Star Reviews", href: "/5-star-reviews" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-gold-400 text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="text-white/60 hover:text-gold-400 text-sm transition-colors">
                    {area.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4">Locations</h3>
            <div className="space-y-5">
              {siteConfig.offices.map((office) => (
                <div key={office.name}>
                  <p className="text-white text-xs font-semibold mb-1">{office.name}</p>
                  <address className="not-italic text-white/60 text-xs leading-relaxed">
                    {office.street.split("\n").map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                    {office.city}, {office.state} {office.zip}
                  </address>
                  <a href={office.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="text-gold-500 text-xs hover:text-gold-400 transition-colors mt-1 inline-block">
                    Map &amp; Directions [+]
                  </a>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <a href={siteConfig.phoneHref} className="text-white/70 hover:text-gold-400 text-sm transition-colors">{siteConfig.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span className="text-white/60 text-xs">{siteConfig.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <p className="text-white/30 text-xs text-center sm:text-right max-w-lg">
            The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
