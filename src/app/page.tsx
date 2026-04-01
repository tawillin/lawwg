import Hero from "@/components/home/Hero";
import TrustScorecardBanner from "@/components/home/TrustScorecardBanner";
import PracticeAreaGrid from "@/components/home/PracticeAreaGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import ReviewsSection from "@/components/home/ReviewsSection";
import BooksSection from "@/components/home/BooksSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustScorecardBanner />
      <PracticeAreaGrid />
      <AboutTeaser />
      <ReviewsSection />
      <BooksSection />
      <ContactCTA />
    </>
  );
}
