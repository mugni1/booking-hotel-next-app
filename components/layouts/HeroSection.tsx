import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          height={1000}
          width={1000}
          priority
          className="object-cover object-center w-full h-full"
        />
        <div className="bg-black/50 absolute inset-0 backdrop-blur-xs"></div>
      </div>
      <div className="absolute flex items-center inset-0 text-white">
        <div className="container mx-auto px-5 flex flex-col items-center gap-5">
          <h1 className="text-5xl md:text-6xl font-extrabold capitalize text-center">
            Book your luxury room
          </h1>
          <p className="font-bold">Get Special offer just for you today.</p>
          <div className="flex gap-3 items-center font-bold ">
            <button className="btn btn-warning text-white">Book Now</button>
            <button className="btn btn-warning btn-outline text-white">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
