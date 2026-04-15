export type Attorney = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  longBio: string;
  practiceAreas: string[];
  image?: string;
};

export const attorneys: Attorney[] = [
  {
    slug: "taylor-willingham",
    name: "Taylor Willingham",
    title: "Founding Attorney",
    bio: "Taylor Willingham brings a wealth of expertise and a deep commitment to legacy planning to his role as the founder of WG Law.",
    longBio:
      "From assisting individuals with creating a will that can help protect their children for the long-term to creating a business succession plan for a family business owner, Taylor truly enjoys helping his clients through every stage of future planning. He is highly regarded for his estate planning experience, having been selected as a guest on podcasts and television shows, and has authored five books on estate planning and elder law. Led by Taylor, the entire legal team takes pride in creating, drafting, and enforcing powerful estate plans that can protect estates of all sizes.",
    practiceAreas: ["Estate Planning", "Elder Law", "Probate", "Medicaid Planning"],
    image: "/attorneys/taylor-willingham.png",
  },
  {
    slug: "carla-alston",
    name: "Carla Alston",
    title: "Attorney",
    bio: "Carla Alston is a caring attorney who helps clients navigate uncontested divorce and estate planning with compassion and expertise.",
    longBio:
      "Carla Alston brings a compassionate, client-centered approach to her practice. She works diligently to guide clients through uncontested divorce proceedings and estate planning matters, ensuring that every client feels heard and understood throughout the legal process.",
    practiceAreas: ["Uncontested Divorce", "Estate Planning"],
    image: "/attorneys/carla-alston.png",
  },
  {
    slug: "stephan-hwang",
    name: "Stephan D. Hwang",
    title: "Attorney",
    bio: "Stephan D. Hwang has title experience since 2003 and litigation experience since 2007, covering real estate, commercial, and employment matters.",
    longBio:
      "Stephan D. Hwang brings over two decades of experience in title and real estate law. Since 2003, he has handled complex title matters, and since 2007, he has applied his litigation skills to real estate, commercial, and employment disputes. His depth of experience makes him a formidable advocate for clients facing complex legal challenges.",
    practiceAreas: ["Real Estate Law", "Business Tax Consulting"],
    image: "/attorneys/stephan-hwang.jpeg",
  },
  {
    slug: "therese-gutierrez",
    name: "Therese Gutierrez",
    title: "Attorney",
    bio: "Therese Gutierrez brings a compassionate and client-centered approach to estate planning and probate law.",
    longBio:
      "Therese Gutierrez is dedicated to helping families navigate some of life's most challenging transitions. With a warm and approachable manner, she guides clients through estate planning and probate matters with clarity and care, ensuring every client understands their options and feels confident in their decisions.",
    practiceAreas: ["Estate Planning", "Probate"],
    image: "/attorneys/therese-gutierrez.png",
  },
  {
    slug: "philip-burgess",
    name: "Philip Burgess",
    title: "Attorney",
    bio: "Philip Burgess helps clients cut through legal stress with clear advice and steady guidance in estate planning and probate matters.",
    longBio:
      "Philip Burgess is committed to making the legal process as straightforward as possible for his clients. He handles estate planning and probate matters with precision and care, always focused on delivering results that protect his clients' interests and bring peace of mind to their families.",
    practiceAreas: ["Estate Planning", "Probate"],
  },
];
