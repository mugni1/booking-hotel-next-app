import { Metadata } from "next";
import HeroSection from "../components/layouts/HeroSection";
import RoomAndRates from "@/components/layouts/RoomAndRates";

export const metadata: Metadata = {
  title: "Home",
  description: "Online Booking Hotel",
};
export default function Home() {
  return (
    <>
      <HeroSection />
      <RoomAndRates />
    </>
  );
}
