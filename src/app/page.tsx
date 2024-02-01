import HeroSection from "@/components/HeroSection";
import OverviewCard from "@/components/OverviewCard";
import Products from "@/components/Products";
import Usecase from "@/components/Usecase";
import UserGuides from "@/components/UserGuides";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OverviewCard />
      <UserGuides />
      <Usecase />
      <Products />
    </main>
  );
}
