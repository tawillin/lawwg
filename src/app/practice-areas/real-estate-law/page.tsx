import type { Metadata } from "next";
import PracticePageLayout from "@/components/practice-areas/PracticePageLayout";
import RealEstateDiagram from "@/components/practice-areas/diagrams/RealEstateDiagram";

export const metadata: Metadata = {
  title: "Texas Real Estate Attorneys | North Texas Law Firm",
  description:
    "Real estate closings, deed preparation, title disputes, and Lady Bird Deeds for North Texas buyers, sellers, and investors. Call Willingham Law Group today.",
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
      slug="real-estate-law"
      sections={[
        {
          heading: "What is real estate law?",
          body: "Real estate law encompasses the rules, regulations, and legal processes governing the ownership, use, and transfer of land and buildings. In Texas, real estate transactions are governed by a combination of state statutes, common law, and regulatory frameworks administered by agencies such as the Texas Department of Insurance (for title insurance) and the Texas Real Estate Commission (TREC). Whether you are buying your first home in McKinney, selling commercial property in Frisco, or transferring family land through an estate plan, the legal requirements are detailed and unforgiving. Errors in deeds, title searches, or closing documents can result in clouded title, financial loss, or years of litigation. Willingham Law Group provides comprehensive real estate legal services to individuals, families, and investors across the DFW metroplex.",
        },
        {
          heading: "Lady Bird Deeds in Texas",
          body: "A Lady Bird Deed — formally known as an Enhanced Life Estate Deed — is one of the most powerful estate planning tools available in Texas real estate law. This deed allows a property owner to retain full control of their property during their lifetime, including the right to sell, mortgage, or lease the property without the remainderman's consent. Upon the owner's death, the property automatically passes to the named beneficiaries without probate. Critically, because the transfer does not occur until death, the property generally avoids Medicaid estate recovery — making Lady Bird Deeds an essential tool in Medicaid planning. Texas is one of only a handful of states that recognize this type of deed. Our attorneys draft Lady Bird Deeds for homeowners throughout Collin County, Denton County, and the greater North Texas region.",
        },
        {
          heading: "Transfer on Death Deeds",
          body: "Texas adopted the Uniform Real Property Transfer on Death Act in 2015, codified in Texas Estates Code Chapter 114. A Transfer on Death Deed (TODD) allows a property owner to designate a beneficiary who will receive the property upon the owner's death, without probate. Unlike a Lady Bird Deed, a TODD does not create a present interest in the beneficiary — it is fully revocable at any time before death by recording a revocation instrument. TODDs must be signed, acknowledged before a notary, and recorded in the county clerk's office before the owner's death to be effective. While simpler than a Lady Bird Deed in some respects, TODDs carry different implications for Medicaid planning and creditor protection. Our attorneys help clients in Plano, McKinney, and across North Texas determine which deed structure best fits their situation.",
        },
        {
          heading: "Title disputes and quiet title actions",
          body: "A title dispute arises when two or more parties claim an ownership interest in the same property, or when a defect in the chain of title prevents a clean transfer. Common causes include recording errors, forged deeds, undisclosed heirs, boundary disputes, and unreleased liens. In Texas, a quiet title action — filed under Texas Property Code Section 13.001 and related statutes — is the primary legal remedy for resolving competing claims to real property. The court examines the evidence and issues a judgment declaring who holds valid title. Quiet title actions can be complex and time-consuming, but they are often the only way to clear a defective title and restore the property's marketability. Willingham Law Group represents property owners in title disputes throughout the DFW area.",
        },
        {
          heading: "Real estate closings",
          body: "A real estate closing is the final step in a property transaction, where ownership formally transfers from seller to buyer. In Texas, closings are typically conducted by a title company or an attorney, and involve the execution of the deed, settlement of funds, payment of closing costs, and recording of documents with the county clerk. Our firm works closely with WG Title, our affiliated title company, to coordinate every aspect of the closing process. We review all closing documents — including the settlement statement, deed, deed of trust, and title insurance policy — to ensure accuracy and protect our clients' interests. Whether you are purchasing a home in Frisco or closing on a commercial property in Plano, we ensure your transaction is handled with precision and care.",
        },
        {
          heading: "Deed preparation and recording",
          body: "The deed is the legal instrument that transfers ownership of real property from one party to another. Texas recognizes several types of deeds, including general warranty deeds, special warranty deeds, quitclaim deeds, and deeds without warranties. Each carries different levels of protection for the buyer regarding title defects. A properly drafted deed must include a legal description of the property, the names of the grantor and grantee, words of conveyance, and the grantor's signature acknowledged before a notary public. Once executed, the deed must be recorded in the real property records of the county where the property is located. Our attorneys prepare and record deeds for property transfers of all types — sales, gifts, trust transfers, and estate distributions — serving clients across McKinney, Frisco, Plano, and the broader DFW metroplex.",
        },
        {
          heading: "Property ownership structures",
          body: "How you hold title to real property has significant legal, tax, and estate planning implications. Texas recognizes several forms of property ownership, including sole ownership, tenancy in common, joint tenancy with right of survivorship, and community property (for married couples). Property can also be held in a revocable living trust, an LLC, or other entity structure. Each form of ownership affects what happens to the property when an owner dies, how the property is taxed, and what creditors can reach. For married couples in Texas — a community property state — the distinction between community property and separate property is especially important. Willingham Law Group advises clients on the ownership structure that best serves their goals, whether those involve asset protection, estate planning, or investment strategy.",
        },
        {
          heading: "Real estate in estate planning",
          body: "Real property is often the most valuable asset in a family's estate, yet it is frequently the most poorly planned. Without proper planning, real estate may need to pass through probate — a process that can take months and cost thousands of dollars. Worse, if the property is titled incorrectly or a deed contains errors, heirs may face title disputes or be unable to sell the property without a court order. We help clients integrate their real estate holdings into a comprehensive estate plan using tools such as Lady Bird Deeds, Transfer on Death Deeds, revocable living trusts, and LLCs. Our goal is to ensure that your property passes to your intended beneficiaries quickly, privately, and with minimal cost. For families with property in Collin, Denton, or Dallas counties, Willingham Law Group provides the intersection of real estate and estate planning expertise that protects your legacy.",
        },
        {
          heading: "Residential and commercial transactions",
          body: "Whether you are buying a starter home in Anna or negotiating a multimillion-dollar commercial lease in Plano, legal representation protects your investment. Residential transactions involve contract review, inspection negotiations, title examination, and closing coordination. Commercial transactions add additional complexity: zoning compliance, environmental due diligence, tenant estoppels, financing contingencies, and entity structuring. Texas uses standardized TREC contract forms for most residential transactions, but commercial deals are typically negotiated on custom contracts where every clause matters. Willingham Law Group represents buyers, sellers, landlords, tenants, and investors in transactions across North Texas, ensuring that every contract protects your interests and every closing is executed correctly.",
        },
      ]}
      faqs={[
        {
          q: "What is a Lady Bird Deed and how does it work in Texas?",
          a: "A Lady Bird Deed (Enhanced Life Estate Deed) lets you keep full control of your property during your lifetime — including the right to sell or mortgage it — while automatically passing it to your named beneficiaries at death without probate. Texas is one of a few states that recognizes this deed type, and it is widely used in both estate planning and Medicaid planning.",
        },
        {
          q: "Do I need an attorney for a real estate closing in Texas?",
          a: "Texas does not legally require an attorney at closing, but having one protects your interests. An attorney can identify issues in the title commitment, review closing documents for errors, and ensure the deed is properly drafted and recorded. For complex transactions, investment properties, or estate-related transfers, legal representation is strongly recommended.",
        },
        {
          q: "What is a quiet title action?",
          a: "A quiet title action is a lawsuit filed to establish clear ownership of real property when the title is disputed or defective. Common reasons include recording errors, boundary disputes, missing heirs, or unreleased liens. The court issues a judgment resolving the competing claims and clearing the title for future transfers.",
        },
        {
          q: "What is the difference between a Transfer on Death Deed and a Lady Bird Deed?",
          a: "Both avoid probate, but they differ in important ways. A Lady Bird Deed creates an enhanced life estate and generally protects the property from Medicaid estate recovery. A Transfer on Death Deed (TODD) is simpler to execute and fully revocable but may not offer the same Medicaid protections. Your attorney can help you determine which is right for your situation.",
        },
        {
          q: "How is property divided in a Texas divorce?",
          a: "Texas is a community property state, so property acquired during the marriage is generally owned equally by both spouses. In a divorce, the court divides community property in a manner it deems just and right, which is not always 50/50. Separate property — assets owned before marriage or received as gifts or inheritance — remains with the owning spouse.",
        },
        {
          q: "Can I transfer my house to my children to avoid probate?",
          a: "Yes, but the method matters. An outright transfer (gift deed) during your lifetime may trigger gift tax issues and could affect Medicaid eligibility. A Lady Bird Deed or Transfer on Death Deed allows the property to pass at death without probate while you retain full control during your lifetime. Consult an attorney before transferring real property.",
        },
        {
          q: "What areas does Willingham Law Group serve for real estate matters?",
          a: "We serve clients throughout North Texas, including McKinney, Frisco, Plano, Allen, Prosper, Celina, Anna, Princeton, and the greater Dallas-Fort Worth area. We handle residential and commercial transactions, deed preparation, title disputes, and real estate-related estate planning.",
        },
      ]}
      relatedSlugs={["estate-planning", "probate", "business-tax-consulting"]}
    />
  );
}
