import RoomDetail from "@/components/layouts/RoomDetail";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await searchParams;
  return {
    title: name,
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <RoomDetail id={id} />;
}
