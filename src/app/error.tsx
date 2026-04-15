"use client";

import Button from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="pt-32 pb-20 bg-cream-50 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-navy-900 mb-4">
          Something Went Wrong
        </h1>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          We apologize for the inconvenience. Please try again, or contact our
          office directly at{" "}
          <a href="tel:214-250-4407" className="text-gold-600 hover:underline">
            214-250-4407
          </a>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" onClick={() => reset()}>
            Try Again
          </Button>
          <Button href="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </section>
  );
}
