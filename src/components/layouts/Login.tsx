"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

export default function Login() {
  return (
    <section className="min-h-screen container mx-auto flex justify-center items-center px-5">
      <div className="card w-full md:w-4/12 border border-base-300 bg-base-100 card-xs shadow-md p-3">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={100}
              width={100}
              className="w-4/12"
            />
            <h2 className="card-title flex justify-center font-bold text-2xl">
              SignIn
            </h2>
          </div>
          <div className="justify-end card-actions">
            <button
              onClick={() => signIn("google")}
              className="btn btn-warning w-full flex items-center"
            >
              <FaGoogle size={24} /> SignIn with Google
            </button>
            <button className="btn btn-warning w-full flex items-center">
              <FaGithub size={24} /> SignIn with Github
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
