import React from "react";

export default function LoadingRoom() {
  return (
    <section className="w-full container mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-5 py-8">
      <div className="skeleton w-full aspect-square "></div>
      <div className="skeleton w-full aspect-square "></div>
      <div className="skeleton w-full aspect-square "></div>
      <div className="skeleton w-full aspect-square "></div>
      <div className="skeleton w-full aspect-square "></div>
      <div className="skeleton w-full aspect-square "></div>
      <div className="skeleton w-full aspect-square "></div>
      <div className="skeleton w-full aspect-square "></div>
    </section>
  );
}
