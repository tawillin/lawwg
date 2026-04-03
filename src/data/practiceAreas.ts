export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  tagline: string;
  description: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "elder-law",
    title: "Elder Law",
    shortTitle: "Elder Law",
    icon: "Heart",
    tagline: "Planning for every stage of life",
    description:
      "We help seniors and families plan for long-term care costs, protect assets from Medicaid spend-down, establish powers of attorney, and navigate guardianship — before a crisis forces difficult decisions.",
  },
  {
    slug: "probate",
    title: "Probate Administration",
    shortTitle: "Probate",
    icon: "Scroll",
    tagline: "Guiding families through transitions",
    description:
      "When a loved one passes, we guide executors and heirs through every step of the probate process — from filing the petition to final distribution — with compassion and efficiency.",
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    shortTitle: "Estate Planning",
    icon: "Shield",
    tagline: "Protect what you've built",
    description:
      "We help you create wills, trusts, powers of attorney, and healthcare directives that protect your assets, minimize taxes, and ensure your wishes are carried out — without the cost and delay of probate.",
  },
  {
    slug: "medicaid-planning",
    title: "Medicaid Planning",
    shortTitle: "Medicaid Planning",
    icon: "HandHeart",
    tagline: "Maximize benefits. Protect assets.",
    description:
      "We help families legally convert assets to qualify for Medicaid long-term care benefits — so your loved one gets the care they need without the family being financially devastated.",
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    shortTitle: "Real Estate Law",
    icon: "Home",
    tagline: "Protecting your property interests",
    description:
      "From Lady Bird Deeds and Transfer on Death Deeds to real estate disputes and title matters, we protect your property interests at every stage of ownership.",
  },
  {
    slug: "business-tax-consulting",
    title: "Business Tax Consulting",
    shortTitle: "Business Tax",
    icon: "Building2",
    tagline: "Build on a solid foundation",
    description:
      "We help entrepreneurs choose the right entity structure, minimize tax exposure, draft operating agreements, and build a legal foundation that protects owners and positions the business for growth.",
  },
  {
    slug: "uncontested-divorce",
    title: "Uncontested Divorce",
    shortTitle: "Divorce",
    icon: "Scale",
    tagline: "A compassionate path forward",
    description:
      "When both spouses agree on key terms, an uncontested divorce offers a faster, more affordable, and less adversarial path to a new chapter — handled with sensitivity and professionalism.",
  },
];
