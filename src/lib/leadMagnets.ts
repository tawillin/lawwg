/**
 * Client-side PDF generators for lead magnets.
 * Uses jsPDF (already installed). Import dynamically to avoid SSR issues.
 */

export type LeadMagnet = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  practiceArea: string;
  items: string[];
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "estate-planning-checklist",
    title: "Texas Estate Planning Checklist",
    subtitle: "12 steps every Texas family should take to protect their legacy",
    description:
      "A comprehensive checklist covering wills, trusts, powers of attorney, beneficiary designations, and more. Designed for Texas families by the attorneys at Willingham Law Group.",
    practiceArea: "Estate Planning",
    items: [
      "Create or update your Last Will and Testament under Texas law",
      "Establish a Revocable Living Trust to avoid probate",
      "Execute a Statutory Durable Power of Attorney (Texas Estates Code)",
      "Sign a Medical Power of Attorney (Texas Health & Safety Code Ch. 166)",
      "Complete a Directive to Physicians (Advance Directive / Living Will)",
      "Review and update all beneficiary designations (life insurance, 401k, IRA)",
      "Confirm property titles are aligned with your estate plan",
      "Consider a Lady Bird Deed or Transfer on Death Deed for real property",
      "Name guardians for minor children in your will",
      "Create a Special Needs Trust if you have a disabled family member",
      "Review your estate plan for community property implications (Texas is a community property state)",
      "Store original documents securely and inform your executor of their location",
    ],
  },
  {
    slug: "probate-timeline-guide",
    title: "Texas Probate Timeline Guide",
    subtitle: "What to expect at every stage of the probate process",
    description:
      "A step-by-step timeline of the Texas probate process, from filing the application to final distribution. Know what to expect and when.",
    practiceArea: "Probate",
    items: [
      "Week 1–2: Locate the original will and file with the county clerk (must be filed within 4 years of death)",
      "Week 2–4: File Application to Probate Will with the probate court",
      "Week 3–5: Court hearing to validate the will and appoint executor",
      "Week 4–6: Executor receives Letters Testamentary from the court",
      "Month 2: Publish Notice to Creditors (creditors have 4 months to file claims)",
      "Month 2–3: Inventory and appraise all estate assets",
      "Month 2–6: Manage and preserve estate assets during administration",
      "Month 3–6: Pay valid creditor claims, debts, and taxes",
      "Month 4–6: File estate tax returns if applicable (federal threshold: $13.61M in 2024)",
      "Month 6–8: Prepare final accounting of all receipts and disbursements",
      "Month 8–12: Distribute remaining assets to beneficiaries per the will",
      "Month 12+: File closing documents with the court (if required)",
    ],
  },
  {
    slug: "elder-law-planning-workbook",
    title: "Elder Law Planning Workbook",
    subtitle: "Essential steps for protecting aging parents in Texas",
    description:
      "A practical guide for families navigating long-term care planning, Medicaid eligibility, guardianship, and protecting seniors' rights in Texas.",
    practiceArea: "Elder Law",
    items: [
      "Assess current Powers of Attorney — are they durable and up to date?",
      "Review Medical Power of Attorney and Advance Directive for completeness",
      "Evaluate long-term care options: in-home care, assisted living, or nursing home",
      "Calculate monthly care costs in North Texas ($4,000–$9,000+ depending on level)",
      "Determine Medicaid eligibility: countable resources must be below $2,000 for applicant",
      "Identify exempt assets (homestead, one vehicle, personal effects, prepaid burial)",
      "Review the 60-month Medicaid look-back period for asset transfers",
      "Consider a Medicaid Asset Protection Trust (irrevocable, must be funded 5+ years before need)",
      "Understand Community Spouse Resource Allowance if a spouse remains at home",
      "Evaluate whether guardianship or a Supported Decision-Making Agreement is needed",
      "Document all medications, doctors, insurance policies, and financial accounts",
      "Create a family care coordination plan with emergency contacts and roles",
    ],
  },
];

export function getLeadMagnetBySlug(slug: string) {
  return leadMagnets.find((lm) => lm.slug === slug);
}

export async function generateLeadMagnetPDF(magnet: LeadMagnet) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 50;
  const contentW = pageW - margin * 2;
  let y = 50;

  // Header bar
  doc.setFillColor(15, 23, 42); // navy-900
  doc.rect(0, 0, pageW, 80, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text("WILLINGHAM LAW GROUP", margin, 35);
  doc.setFontSize(8);
  doc.setTextColor(200, 200, 200);
  doc.text("214-250-4407  |  lawwg.com  |  McKinney & Southlake, TX", margin, 52);

  y = 110;

  // Title
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(22);
  const titleLines = doc.splitTextToSize(magnet.title, contentW);
  doc.text(titleLines, margin, y);
  y += titleLines.length * 28;

  // Subtitle
  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139); // slate-500
  const subLines = doc.splitTextToSize(magnet.subtitle, contentW);
  doc.text(subLines, margin, y);
  y += subLines.length * 16 + 20;

  // Gold divider
  doc.setDrawColor(202, 138, 4); // gold-500
  doc.setLineWidth(1.5);
  doc.line(margin, y, margin + 60, y);
  y += 25;

  // Checklist items
  doc.setFontSize(10);
  magnet.items.forEach((item, i) => {
    if (y > 700) {
      doc.addPage();
      y = 50;
    }

    // Checkbox
    doc.setDrawColor(202, 138, 4);
    doc.setLineWidth(0.75);
    doc.rect(margin, y - 9, 12, 12);

    // Number
    doc.setTextColor(202, 138, 4);
    doc.setFontSize(8);
    doc.text(String(i + 1), margin + 3, y);

    // Text
    doc.setTextColor(30, 41, 59); // slate-800
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(item, contentW - 25);
    doc.text(lines, margin + 20, y);
    y += lines.length * 14 + 10;
  });

  // Footer
  y = Math.max(y + 30, 680);
  if (y > 700) {
    doc.addPage();
    y = 50;
  }
  doc.setDrawColor(226, 232, 240);
  doc.line(margin, y, pageW - margin, y);
  y += 20;
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(
    "This checklist is provided for informational purposes only and does not constitute legal advice.",
    margin,
    y
  );
  y += 14;
  doc.text(
    "For advice specific to your situation, contact Willingham Law Group at 214-250-4407 or visit lawwg.com.",
    margin,
    y
  );

  doc.save(`${magnet.slug}.pdf`);
}
