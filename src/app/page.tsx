import Hero from "@/components/home/Hero";
import TrustScorecardBanner from "@/components/home/TrustScorecardBanner";
import PracticeAreaGrid from "@/components/home/PracticeAreaGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import TrustBadges from "@/components/home/TrustBadges";
import WhyWillingham from "@/components/home/WhyWillingham";
import ReviewsSection from "@/components/home/ReviewsSection";
import FounderSpotlight from "@/components/home/FounderSpotlight";
import LawJournal from "@/components/home/LawJournal";
import BooksSection from "@/components/home/BooksSection";
import SocialCTA from "@/components/home/SocialCTA";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustScorecardBanner />
      <PracticeAreaGrid />
      <AboutTeaser />
      <TrustBadges />
      <WhyWillingham />
      <ReviewsSection />
      <FounderSpotlight />
      <LawJournal />
      <BooksSection />
      <SocialCTA />
      <ContactCTA />
    </>
  );
}
