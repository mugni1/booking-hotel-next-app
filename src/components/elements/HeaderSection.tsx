import Image from "next/image";
import React from "react";

export default function HeaderSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="relative h-40 md:h-50 w-full text-white bg-red-300">
      <div className="absolute inset-0">
        <Image
          src="/images/about-image.jpg"
          alt="image"
          height={1000}
          width={1000}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
      <div className="relative container h-full mx-auto px-5 pt-10 flex flex-col items-center justify-center">
        <h1 className="text-white font-extrabold text-3xl md:text-5xl text-center">
          {title}
        </h1>
        <p className="text-center text-white/80 font-semibold text-xs md:text-base">
          {description}
        </p>
      </div>
    </header>
  );
}
