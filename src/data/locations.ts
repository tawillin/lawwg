export type Location = {
  slug: string;
  name: string;
  county: string;
  nearestOffice: "McKinney" | "Southlake";
  driveTime: string;
  population: string;
  courtInfo: string;
  description: string;
  localDetails: string;
  metaTitle: string;
  metaDescription: string;
};

export const locations: Location[] = [
  {
    slug: "dallas",
    name: "Dallas",
    county: "Dallas County",
    nearestOffice: "McKinney",
    driveTime: "35 minutes",
    population: "1.3 million",
    courtInfo:
      "Probate matters in Dallas are handled by Dallas County Probate Courts No. 1, 2, and 3, located at the George L. Allen Sr. Courts Building. Estate planning documents are typically filed with the Dallas County Clerk.",
    description:
      "Dallas families and business owners trust Willingham Law Group for estate planning, probate, and elder law services. From Highland Park to Lake Highlands, we help Dallas residents protect their assets and plan for the future.",
    localDetails:
      "Dallas is home to a vibrant economy and growing families who need comprehensive estate planning. Whether you own property in Uptown, run a business in the Design District, or are planning for retirement in East Dallas, our attorneys understand the unique needs of Dallas residents.",
    metaTitle: "Estate Planning & Probate Attorney in Dallas, TX",
    metaDescription:
      "Dallas estate planning, probate, and elder law attorneys. Willingham Law Group helps Dallas families with trusts, wills, Medicaid planning, and more. Call 214-250-4407.",
  },
  {
    slug: "fort-worth",
    name: "Fort Worth",
    county: "Tarrant County",
    nearestOffice: "Southlake",
    driveTime: "30 minutes",
    population: "958,000",
    courtInfo:
      "Tarrant County probate matters are heard in Tarrant County Probate Courts No. 1 and 2, located at the Tim Curry Criminal Justice Center complex. Guardianship proceedings are also handled through these courts.",
    description:
      "Fort Worth residents rely on Willingham Law Group for estate planning, probate, and elder law guidance. Serving families across Tarrant County, we bring decades of experience to every client relationship.",
    localDetails:
      "Fort Worth's growing population and strong sense of family heritage make estate planning essential. From the Cultural District to the Stockyards, our firm serves Fort Worth families navigating wills, trusts, probate, and long-term care planning for aging parents.",
    metaTitle: "Estate Planning & Probate Attorney in Fort Worth, TX",
    metaDescription:
      "Fort Worth estate planning and probate attorneys at Willingham Law Group. Trusts, wills, elder law, and Medicaid planning for Tarrant County families. Call 214-250-4407.",
  },
  {
    slug: "plano",
    name: "Plano",
    county: "Collin County",
    nearestOffice: "McKinney",
    driveTime: "15 minutes",
    population: "290,000",
    courtInfo:
      "Plano is in Collin County, where probate matters are handled by the Collin County Probate Court at the Collin County Courthouse in McKinney — just minutes from our office.",
    description:
      "Plano families choose Willingham Law Group for estate planning, probate, and elder law. Our McKinney office is just 15 minutes away, making it easy to get experienced legal counsel close to home.",
    localDetails:
      "Plano is one of the most affluent cities in Texas, with many families holding significant real estate, retirement accounts, and business interests. Proper estate planning is critical to protect these assets. Whether you live in West Plano or Legacy West, our attorneys can help you create a comprehensive plan.",
    metaTitle: "Estate Planning & Probate Attorney in Plano, TX",
    metaDescription:
      "Plano estate planning and probate attorneys. Willingham Law Group serves Plano families with trusts, wills, elder law, and Medicaid planning. 15 min from our McKinney office.",
  },
  {
    slug: "frisco",
    name: "Frisco",
    county: "Collin County",
    nearestOffice: "McKinney",
    driveTime: "10 minutes",
    population: "220,000",
    courtInfo:
      "Frisco falls under Collin County jurisdiction. Probate and guardianship matters are filed at the Collin County Courthouse in McKinney, where our office is conveniently located.",
    description:
      "As one of the fastest-growing cities in Texas, Frisco is home to young families and professionals who need proactive estate planning. Willingham Law Group is just minutes away in McKinney.",
    localDetails:
      "Frisco's explosive growth means many residents are establishing roots and building wealth for the first time. New homeowners, growing families, and business owners all benefit from early estate planning. From Frisco Square to The Star, our attorneys serve clients across the city.",
    metaTitle: "Estate Planning & Probate Attorney in Frisco, TX",
    metaDescription:
      "Frisco estate planning attorneys at Willingham Law Group. Trusts, wills, probate, and elder law for Frisco families. Just 10 minutes from our McKinney office. Call today.",
  },
  {
    slug: "mckinney",
    name: "McKinney",
    county: "Collin County",
    nearestOffice: "McKinney",
    driveTime: "Our office is here",
    population: "200,000",
    courtInfo:
      "Our McKinney office is steps from the Collin County Courthouse, where probate, guardianship, and estate matters are filed. This proximity allows us to handle filings efficiently and attend hearings with ease.",
    description:
      "Willingham Law Group is proudly headquartered in McKinney, Texas. Our office on Eldorado Parkway serves McKinney families with estate planning, probate, elder law, and real estate legal services.",
    localDetails:
      "McKinney has been named one of the best places to live in America, and our firm is proud to call it home. From historic downtown McKinney to the growing communities along US-380, we serve our neighbors with the same care we would give our own families.",
    metaTitle: "Estate Planning & Probate Attorney in McKinney, TX",
    metaDescription:
      "McKinney estate planning and probate attorneys. Willingham Law Group's main office is on Eldorado Pkwy. Trusts, wills, elder law, Medicaid planning. Call 214-250-4407.",
  },
  {
    slug: "southlake",
    name: "Southlake",
    county: "Tarrant County",
    nearestOffice: "Southlake",
    driveTime: "Our office is here",
    population: "32,000",
    courtInfo:
      "Southlake is in Tarrant County. Probate matters are filed at the Tarrant County Probate Courts in Fort Worth. Our Southlake office at Town Square handles all preparation and filing.",
    description:
      "Willingham Law Group has an office in Southlake Town Square, serving families across Southlake and the surrounding DFW metroplex with estate planning, probate, and elder law.",
    localDetails:
      "Southlake is known for its high quality of life and affluent community. Many Southlake families have complex estates that require sophisticated planning — multiple properties, business interests, and substantial retirement assets. Our Southlake office provides convenient access to experienced counsel.",
    metaTitle: "Estate Planning & Probate Attorney in Southlake, TX",
    metaDescription:
      "Southlake estate planning and probate attorneys at Willingham Law Group. Office at Southlake Town Square. Trusts, wills, elder law, and more. Call 214-250-4407.",
  },
  {
    slug: "allen",
    name: "Allen",
    county: "Collin County",
    nearestOffice: "McKinney",
    driveTime: "10 minutes",
    population: "108,000",
    courtInfo:
      "Allen is in Collin County. Probate and estate matters are handled at the Collin County Courthouse in McKinney, located near our main office.",
    description:
      "Allen families trust Willingham Law Group for estate planning, probate, and elder law. Our McKinney office is just a short drive from Allen, providing easy access to experienced legal counsel.",
    localDetails:
      "Allen is a family-oriented community with a growing population of professionals and retirees. From Watters Creek to the Allen Premium Outlets area, our attorneys help Allen residents with wills, trusts, powers of attorney, and long-term care planning.",
    metaTitle: "Estate Planning & Probate Attorney Serving Allen, TX",
    metaDescription:
      "Allen, TX estate planning and probate attorneys. Willingham Law Group is just 10 minutes away in McKinney. Trusts, wills, elder law, Medicaid. Call 214-250-4407.",
  },
  {
    slug: "carrollton",
    name: "Carrollton",
    county: "Denton County / Dallas County",
    nearestOffice: "McKinney",
    driveTime: "25 minutes",
    population: "142,000",
    courtInfo:
      "Carrollton spans both Denton and Dallas Counties. Probate matters are filed in the county where the decedent resided. Our attorneys handle filings in both jurisdictions.",
    description:
      "Carrollton residents choose Willingham Law Group for estate planning, probate, and elder law. We serve families across the Denton and Dallas County lines with experienced, compassionate legal counsel.",
    localDetails:
      "Carrollton's diverse and growing community includes families at every stage of life. Whether you're a young professional starting your estate plan or helping aging parents navigate long-term care options, our team provides the guidance you need.",
    metaTitle: "Estate Planning & Probate Attorney Serving Carrollton, TX",
    metaDescription:
      "Carrollton estate planning and probate attorneys. Willingham Law Group serves Carrollton families with trusts, wills, elder law, and Medicaid planning. Call 214-250-4407.",
  },
  {
    slug: "denton",
    name: "Denton",
    county: "Denton County",
    nearestOffice: "McKinney",
    driveTime: "30 minutes",
    population: "160,000",
    courtInfo:
      "Denton County probate matters are handled at the Denton County Courts at Law, located at the Denton County Courthouse in Denton. Our attorneys regularly file and appear in Denton County courts.",
    description:
      "Denton families and UNT/TWU community members trust Willingham Law Group for estate planning, probate, and elder law. We serve all of Denton County from our McKinney office.",
    localDetails:
      "Denton's unique mix of university community, growing families, and established residents creates diverse estate planning needs. From property around the historic square to new developments, our attorneys help Denton residents protect what matters most.",
    metaTitle: "Estate Planning & Probate Attorney Serving Denton, TX",
    metaDescription:
      "Denton estate planning and probate attorneys. Willingham Law Group serves Denton County families with trusts, wills, elder law, and Medicaid planning. Call 214-250-4407.",
  },
  {
    slug: "arlington",
    name: "Arlington",
    county: "Tarrant County",
    nearestOffice: "Southlake",
    driveTime: "35 minutes",
    population: "394,000",
    courtInfo:
      "Arlington is in Tarrant County. Probate matters are filed at the Tarrant County Probate Courts in Fort Worth. Our Southlake office handles preparation and coordinates filings.",
    description:
      "Arlington families rely on Willingham Law Group for estate planning, probate, and elder law services. As one of the largest cities in the DFW metroplex, Arlington residents deserve experienced legal counsel close by.",
    localDetails:
      "Arlington is the seventh-largest city in Texas, home to the Cowboys, Rangers, and hundreds of thousands of families who need estate planning. From North Arlington to the entertainment district, our firm helps residents protect their families and assets.",
    metaTitle: "Estate Planning & Probate Attorney Serving Arlington, TX",
    metaDescription:
      "Arlington estate planning and probate attorneys. Willingham Law Group serves Arlington families with trusts, wills, probate, elder law, and Medicaid planning. Call today.",
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
