import { Metadata } from "next";
import HeroSection from "../../components/layouts/HeroSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Online Booking Hotel",
};
export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
