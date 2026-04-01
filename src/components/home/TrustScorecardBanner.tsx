// src/components/home/TrustScorecardBanner.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TrustScorecardBanner() {
  return (
    <div className="bg-cream border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-600 text-sm">
          <span className="font-semibold text-navy-900">Not sure if you need a trust?</span>
          {" "}Answer 20 questions and find out in under 2 minutes.
        </p>
        <Link
          href="/trust-scorecard"
          className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 border border-gold-400 px-4 py-2 rounded-sm hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all duration-200"
        >
          Do I Need a Trust?
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
