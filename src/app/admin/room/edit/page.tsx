import EditRoom from "@/components/layouts/AdminRoom/UpdateRoom";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const { id } = await searchParams;
  return <EditRoom id={id} />;
}
