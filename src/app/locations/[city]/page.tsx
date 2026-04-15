import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locations, getLocationBySlug } from "@/data/locations";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/siteConfig";
import JsonLd from "@/components/seo/JsonLd";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  MapPin,
  Phone,
  Clock,
  Scale,
  ArrowRight,
  Building2,
  Users,
  Shield,
} from "lucide-react";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) return { title: "Location Not Found" };
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  const office = siteConfig.offices.find((o) =>
    o.name.includes(location.nearestOffice)
  );

  const mainAreas = practiceAreas.slice(0, 7);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `Willingham Law Group — ${location.name}`,
    url: `https://lawwg.com/locations/${location.slug}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: location.description,
    areaServed: {
      "@type": "City",
      name: location.name,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    parentOrganization: {
      "@type": "LegalService",
      "@id": "https://lawwg.com/#organization",
    },
    address: office
      ? {
          "@type": "PostalAddress",
          streetAddress: office.street.split("\n").pop(),
          addressLocality: office.city,
          addressRegion: office.state,
          postalCode: office.zip,
          addressCountry: "US",
        }
      : undefined,
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-gold-400" />
              <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase">
                Serving {location.name}, Texas
              </p>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
              Estate Planning &amp; Probate Attorneys in {location.name}
            </h1>
            <div className="w-12 h-0.5 bg-gold-500 mb-5" />
            <p className="text-white/70 text-lg max-w-3xl">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Schedule a Consultation
              </Button>
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="outline"
                size="lg"
                className="text-white border-white/20 hover:border-gold-500 hover:text-gold-400 hover:bg-transparent"
              >
                <Phone className="w-4 h-4 mr-2" />
                {siteConfig.phone}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 bg-cream-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Nearest Office
                </p>
                <p className="text-sm text-slate-600">
                  {location.nearestOffice} Office &mdash;{" "}
                  {location.driveTime}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Population
                </p>
                <p className="text-sm text-slate-600">
                  {location.population} residents in {location.name}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-navy-900">
                  Jurisdiction
                </p>
                <p className="text-sm text-slate-600">{location.county}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About serving this city */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-serif text-3xl text-navy-900 mb-4">
                Legal Services for {location.name} Families
              </h2>
              <div className="w-10 h-0.5 bg-gold-500 mb-6" />
              <p className="text-slate-600 mb-4 leading-relaxed">
                {location.localDetails}
              </p>
              <p className="text-slate-600 leading-relaxed">
                With offices in McKinney and Southlake, Willingham Law Group is
                well-positioned to serve {location.name} residents. Our{" "}
                {location.nearestOffice} office is{" "}
                {location.driveTime.toLowerCase() === "our office is here"
                  ? "right here in your city"
                  : `just ${location.driveTime} away`}
                , making it easy to meet with an experienced attorney.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="font-serif text-3xl text-navy-900 mb-4">
                {location.county} Court Information
              </h2>
              <div className="w-10 h-0.5 bg-gold-500 mb-6" />
              <p className="text-slate-600 mb-6 leading-relaxed">
                {location.courtInfo}
              </p>
              <div className="bg-cream-50 border border-slate-200 rounded-sm p-5">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-navy-900 mb-1">
                      Office Hours
                    </p>
                    <p className="text-sm text-slate-600">
                      {siteConfig.hours}
                    </p>
                    {office && (
                      <p className="text-sm text-slate-600 mt-2">
                        {office.street.split("\n").pop()}, {office.city},{" "}
                        {office.state} {office.zip}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Practice areas grid */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-navy-900 mb-2 text-center">
              How We Help {location.name} Clients
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Our attorneys handle a full range of estate planning, probate, and
              elder law matters for {location.name} residents.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainAreas.map((pa) => (
              <ScrollReveal key={pa.slug}>
                <Link
                  href={`/practice-areas/${pa.slug}`}
                  className="block bg-white border border-slate-200 rounded-sm p-6 hover:border-gold-500 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-gold-500" />
                    <h3 className="font-serif text-lg text-navy-900 group-hover:text-gold-600 transition-colors">
                      {pa.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3 line-clamp-3">
                    {pa.description}
                  </p>
                  <span className="text-xs font-semibold text-gold-600 flex items-center gap-1">
                    Learn More{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-gold-400">
                  {stat.number}
                </p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-navy-900 mb-4">
              Ready to Protect Your Family&apos;s Future?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Contact Willingham Law Group today to schedule a consultation.
              We&apos;re here to help {location.name} families plan with
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Schedule a Consultation
              </Button>
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="outline"
                size="lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Other locations */}
      <section className="py-12 bg-cream-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-serif text-xl text-navy-900 mb-4 text-center">
            Also Serving
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  href={`/locations/${l.slug}`}
                  className="text-sm text-navy-700 hover:text-gold-600 border border-slate-200 rounded-sm px-3 py-1.5 hover:border-gold-500 transition-colors bg-white"
                >
                  {l.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
