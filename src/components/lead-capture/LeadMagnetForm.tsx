"use client";

import { useState } from "react";
import { Download, Loader2, CheckCircle2 } from "lucide-react";
import type { LeadMagnet } from "@/lib/leadMagnets";
import { generateLeadMagnetPDF } from "@/lib/leadMagnets";
import { trackEvent } from "@/lib/analytics";
import Button from "@/components/ui/Button";

export default function LeadMagnetForm({ magnet }: { magnet: LeadMagnet }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !name) return;

    setLoading(true);
    setError(null);

    try {
      // Send lead info to contact API
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: "",
          practiceArea: magnet.practiceArea,
          message: `Downloaded: ${magnet.title}`,
        }),
      });

      trackEvent("lead_magnet_download", {
        event_category: "Lead Magnet",
        event_label: magnet.slug,
      });

      // Generate and download PDF
      await generateLeadMagnetPDF(magnet);
      setDownloaded(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (downloaded) {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <CheckCircle2 className="w-12 h-12 text-gold-500 mb-3" />
        <h3 className="font-serif text-xl text-navy-900 mb-2">
          Download Started
        </h3>
        <p className="text-slate-600 text-sm max-w-sm mb-4">
          Your {magnet.title} is downloading now. Check your downloads folder.
        </p>
        <button
          onClick={() => generateLeadMagnetPDF(magnet)}
          className="text-sm text-gold-600 hover:text-gold-700 underline"
        >
          Download again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-1.5">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-1.5">
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          required
          className="w-full px-4 py-3 border border-slate-200 rounded-sm text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-sm">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Preparing Download...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Download className="w-4 h-4" /> Get Free {magnet.practiceArea} Guide
          </span>
        )}
      </Button>

      <p className="text-slate-400 text-xs text-center">
        Your information is confidential. We never share your email.
      </p>
    </form>
  );
}
