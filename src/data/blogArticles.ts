export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "will-does-not-avoid-probate-texas",
    title:
      "A Will Does Not Avoid Probate in Texas: What Families in McKinney and Southlake Need to Know",
    excerpt:
      "Many people are surprised to learn that a will does not bypass probate. Here's what Texas families should understand about wills vs. trusts.",
    category: "Probate",
  },
  {
    slug: "dying-without-will-texas-spouse-inherit",
    title:
      "Dying Without a Will in Texas: Does Your Spouse Automatically Inherit Everything?",
    excerpt:
      "One of the most common estate planning misconceptions in Texas is that your spouse inherits everything. The reality is more complicated.",
    category: "Estate Planning",
  },
  {
    slug: "graduation-gift-medical-power-attorney",
    title:
      "The Graduation Gift No One Talks About: Why Every 18 Year Old in Texas Needs Medical Documents",
    excerpt:
      "Turning 18 means your parents can no longer make medical decisions for you. Here's why a medical power of attorney should be on every grad's list.",
    category: "Elder Law",
  },
];
