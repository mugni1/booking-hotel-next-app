import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

export default function About() {
  return (
    <>
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
            About Us
          </h1>
          <p className="text-center text-white/80 font-semibold text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </header>
      <section className="w-full  flex justify-center pt-8">
        <div className=" container mx-auto px-5  flex flex-col md:flex-row gap-5 py-5">
          <Image
            src="/images/about-image.jpg"
            alt="image"
            height={1000}
            width={1000}
            className=" w-full md:w-6/12 h-50 md:h-80  object-cover object-center rounded-md"
          />
          <div className="w-full md:w-6/12 space-y-5">
            <h1 className="font-extrabold text-2xl md:text-4xl">Who We Are</h1>
            <p className=" text-xs md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              dolore harum tempora corporis magnam suscipit ullam, porro totam
              adipisci perspiciatis.
            </p>
            <ul className="list-item space-y-5">
              <li className=" flex gap-5 text-xs md:text-base">
                <div className="flex flex-none">
                  <IoEyeOutline className="size-6 md:size-7" />
                </div>
                <div className="flex-1 flex-col">
                  <h3 className="font-bold text-base md:text-lg">Vision</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quidem nobis placeat doloremque aliquam et. Repudiandae
                  voluptate laborum iusto commodi ullam doloremque quasi quod
                  recusandae assumenda veritatis quibusdam voluptatibus aut
                  architecto,
                </div>
              </li>
              <li className=" flex gap-5 text-xs md:text-base">
                <div className="flex flex-none">
                  <IoLocateOutline className="size-6 md:size-7" />
                </div>
                <div className="flex-1 flex-col">
                  <h3 className="font-bold text-base md:text-lg">Mision</h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quidem nobis placeat doloremque aliquam et. Repudiandae
                  voluptate laborum iusto commodi ullam doloremque quasi quod
                  recusandae assumenda veritatis quibusdam voluptatibus aut
                  architecto,
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
