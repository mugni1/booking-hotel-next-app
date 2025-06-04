import Login from "@/components/layouts/Login";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ redirect_url?: string }>;
}) {
  const { redirect_url } = await searchParams;
  let redirectURL = !redirect_url ? "/" : "/" + redirect_url;

  return <Login redirectUrl={redirectURL} />;
}
