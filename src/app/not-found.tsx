import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { practiceAreas } from "@/data/practiceAreas";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Browse our practice areas or contact us for help.",
};

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 bg-cream-50 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gold-500 text-6xl font-serif mb-4">404</p>
        <h1 className="font-serif text-3xl md:text-4xl text-navy-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          The page you&apos;re looking for may have been moved or no longer
          exists. Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Button href="/" variant="primary">
            Go Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <h2 className="font-serif text-xl text-navy-900 mb-4">
            Browse Our Practice Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {practiceAreas.slice(0, 7).map((pa) => (
              <Link
                key={pa.slug}
                href={`/practice-areas/${pa.slug}`}
                className="text-sm text-navy-700 hover:text-gold-600 border border-slate-200 rounded-sm px-3 py-1.5 hover:border-gold-500 transition-colors"
              >
                {pa.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
