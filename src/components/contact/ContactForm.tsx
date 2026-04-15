"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { trackLead } from "@/lib/analytics";
import { CheckCircle2, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  practiceArea: z.string().min(1, "Please select a practice area"),
  message: z.string().min(10, "Please describe your situation (at least 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const practiceAreaOptions = [
  "Trusts & Estate Planning",
  "Probate Administration",
  "Elder Law",
  "Business Formation",
  "Litigation Defense",
  "Not sure / General inquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      trackLead(data.practiceArea);
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please call us directly or try again.");
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-16"
      >
        <CheckCircle2 className="w-16 h-16 text-gold-500 mb-4" />
        <h3 className="font-serif text-2xl text-navy-900 mb-2">Message Received</h3>
        <p className="text-slate-600 max-w-sm">
          Thank you for reaching out. We&apos;ll review your message and respond within one business day.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-slate-200 rounded-sm text-sm text-navy-900 placeholder:text-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors";
  const errorClass = "text-red-500 text-xs mt-1";
  const labelClass = "block text-xs font-semibold text-navy-900 uppercase tracking-wide mb-1.5";

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input {...register("name")} placeholder="Jane Smith" className={inputClass} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input {...register("email")} type="email" placeholder="jane@example.com" className={inputClass} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input {...register("phone")} type="tel" placeholder="(555) 000-0000" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Practice Area *</label>
          <select {...register("practiceArea")} className={inputClass}>
            <option value="">Select an area...</option>
            {practiceAreaOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.practiceArea && <p className={errorClass}>{errors.practiceArea.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelClass}>Tell us about your situation *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Briefly describe your legal matter and what you're hoping to accomplish..."
          className={inputClass}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {serverError && (
        <p className="text-red-500 text-sm bg-red-50 px-4 py-3 rounded-sm">{serverError}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </Button>

      <p className="text-slate-400 text-xs text-center">
        Your information is confidential and protected by attorney-client privilege.
      </p>
    </motion.form>
  );
}
