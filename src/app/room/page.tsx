import Room from "@/components/layouts/Room";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Room",
};
export default function Page() {
  return <Room />;
}
