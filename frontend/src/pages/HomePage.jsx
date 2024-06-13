import Categories from "../components/Categories";
import HeroSection from "../components/HeroSection";
import OngoingDeals from "../components/OngoingDeals";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Categories />
      <OngoingDeals />
    </>
  );
}
