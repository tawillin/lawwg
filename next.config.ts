import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Attorney pages (Wix had them at root level) ──
      { source: "/taylor-willingham", destination: "/attorneys/taylor-willingham", permanent: true },
      { source: "/carla-alston", destination: "/attorneys/carla-alston", permanent: true },
      { source: "/stephan-hwang", destination: "/attorneys/stephan-hwang", permanent: true },
      { source: "/therese-gutierrez", destination: "/attorneys/therese-gutierrez", permanent: true },
      { source: "/andrea-lewandowski", destination: "/about", permanent: true },

      // ── Practice areas (Wix had them at root level) ──
      { source: "/estate-planning", destination: "/practice-areas/estate-planning", permanent: true },
      { source: "/probate", destination: "/practice-areas/probate", permanent: true },
      { source: "/elder-law", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/medicaid-planning", destination: "/practice-areas/medicaid-planning", permanent: true },
      { source: "/real-estate-law", destination: "/practice-areas/real-estate-law", permanent: true },
      { source: "/business-tax-consulting", destination: "/practice-areas/business-tax-consulting", permanent: true },
      { source: "/uncontested-divorce", destination: "/practice-areas/uncontested-divorce", permanent: true },
      { source: "/divorce", destination: "/practice-areas/uncontested-divorce", permanent: true },
      { source: "/trusts", destination: "/practice-areas/estate-planning", permanent: true },

      // ── Guardianship section → Elder Law ──
      { source: "/guardianship", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/what-is-guardianship", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/the-guardianship-process", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/guardianship-of-minors", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/guardianship-of-incapacitated-adults", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/temporary-guardianships", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/full-vs-limited-guardianships", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/responsibilites-of-a-guardian", destination: "/practice-areas/elder-law", permanent: true },
      { source: "/how-our-firm-assists-with-guardianship", destination: "/practice-areas/elder-law", permanent: true },

      // ── Medicaid sub-pages ──
      { source: "/medicaid-long-term-care", destination: "/practice-areas/medicaid-planning", permanent: true },
      { source: "/medicaid-faq", destination: "/faq", permanent: true },

      // ── Divorce sub-pages ──
      { source: "/uncontested-divorce-1", destination: "/practice-areas/uncontested-divorce", permanent: true },
      { source: "/uncontested-divorce-1-1", destination: "/practice-areas/uncontested-divorce", permanent: true },
      { source: "/uncontested-divorce-1-1-1", destination: "/practice-areas/uncontested-divorce", permanent: true },
      { source: "/uncontested-divorce-explained", destination: "/practice-areas/uncontested-divorce", permanent: true },
      { source: "/child-support", destination: "/practice-areas/uncontested-divorce", permanent: true },
      { source: "/do-i-have-to-pay", destination: "/practice-areas/uncontested-divorce", permanent: true },

      // ── Real estate sub-pages ──
      { source: "/lady-bird-deed", destination: "/practice-areas/real-estate-law", permanent: true },
      { source: "/transfer-on-death-deeds", destination: "/practice-areas/real-estate-law", permanent: true },

      // ── Probate & estate sub-pages ──
      { source: "/challenging-a-will", destination: "/practice-areas/probate", permanent: true },
      { source: "/executor-help", destination: "/practice-areas/probate", permanent: true },
      { source: "/posterity-planning", destination: "/practice-areas/estate-planning", permanent: true },
      { source: "/summer-estate-plan-checkup", destination: "/practice-areas/estate-planning", permanent: true },

      // ── About pages (Wix auto-generated slugs) ──
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us-1", destination: "/about", permanent: true },
      { source: "/about-1-2-3-1-1-2", destination: "/about", permanent: true },
      { source: "/about-1-2-3-1-1-2-1", destination: "/about", permanent: true },
      { source: "/about-1-2-3-1-1-2-1-1", destination: "/about", permanent: true },
      { source: "/about-1-2-3-1-1-2-1-1-1", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-3", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-3-1", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-3-1-1", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-4", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-4-1", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-4-1-1", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-4-1-1-1", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-4-1-1-2", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-4-2-4-1-1-1", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-5", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-5-1", destination: "/about", permanent: true },
      { source: "/about-1-2-4-2-5-1-1", destination: "/about", permanent: true },

      // ── Other Wix pages ──
      { source: "/5-star-reviews", destination: "/5-star-reviews", permanent: true },
      { source: "/law-journal", destination: "/blog", permanent: true },
      { source: "/client-feedback", destination: "/5-star-reviews", permanent: true },
      { source: "/leave-a-review", destination: "/5-star-reviews", permanent: true },
      { source: "/seminars", destination: "/about", permanent: true },
      { source: "/seminars-1", destination: "/about", permanent: true },
      { source: "/podcasts", destination: "/about", permanent: true },
      { source: "/infographics", destination: "/about", permanent: true },
      { source: "/southlake", destination: "/contact", permanent: true },
      { source: "/members", destination: "/", permanent: true },
      { source: "/job-hiring", destination: "/about", permanent: true },
      { source: "/blank-2", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
