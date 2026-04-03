import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import RealEstateDiagram from "@/components/practice-areas/diagrams/RealEstateDiagram";

export const metadata: Metadata = {
  title: "Real Estate Law",
  description: "Residential and commercial real estate transactions, title review, and closing services for McKinney and Southlake buyers, sellers, and investors.",
};

export default function RealEstateLawPage() {
  return (
    <PracticePageLayout
      eyebrow="Real Estate Law"
      title="Real Estate Law"
      subtitle="Every real estate transaction is a significant financial event. We protect buyers, sellers, and investors throughout North Texas by ensuring every deal closes cleanly — with clear title and no surprises."
      diagramTitle="The Real Estate Transaction"
      diagramSubtitle="From signed contract to recorded deed, we guide you through every step — with title insurance protecting your investment long after closing."
      diagram={<RealEstateDiagram />}
      sections={[
        {
          heading: "Residential transactions",
          body: "WG Law assists buyers and sellers with residential real estate transactions throughout Texas. We review purchase contracts, identify title defects, coordinate with lenders, and ensure a smooth closing. Our attorneys understand the complexities that can arise — from survey issues to encumbrances — and resolve them before they become problems.",
        },
        {
          heading: "Title examination and insurance",
          body: "A thorough title examination protects your investment by uncovering liens, encumbrances, easements, or ownership gaps that could cloud your title. We work closely with WG Title, our affiliated title company, to provide comprehensive title insurance coverage — protecting you against defects that may not have been discoverable at the time of closing.",
        },
        {
          heading: "Commercial real estate",
          body: "Commercial transactions involve additional layers of complexity: zoning compliance, environmental considerations, due diligence requirements, and complex financing structures. WG Law advises commercial buyers, sellers, and investors at every stage of the transaction, from letter of intent through closing and post-closing matters.",
        },
        {
          heading: "Real estate and estate planning",
          body: "Many clients overlook the intersection of real estate and estate planning. How your property is titled — individually, jointly, or in a trust — has significant implications for probate, Medicaid eligibility, and wealth transfer. We help you align your real estate holdings with your broader estate plan, including the use of Lady Bird Deeds and Transfer on Death Deeds.",
        },
      ]}
      relatedSlugs={["estate-planning", "probate", "medicaid-planning"]}
    />
  );
}
