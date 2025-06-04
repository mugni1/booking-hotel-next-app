"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FaHotel } from "react-icons/fa";
import { FaGithub, FaGoogle } from "react-icons/fa6";

export default function Login({ redirectUrl }: { redirectUrl: string }) {
  return (
    <section className="min-h-screen container mx-auto flex justify-center items-center px-5">
      <div className="card w-full md:w-4/12 border border-base-300 bg-base-100 card-xs shadow-md p-3">
        <div className="card-body">
          <div className="flex items-center justify-between mb-3">
            <div className="w-6/12">
              <Link
                href={"/"}
                className="flex items-center gap-2 font-extrabold "
              >
                <FaHotel size={24} />
              </Link>
            </div>
            <h2 className="w-full text-end font-extrabold text-2xl">Signin</h2>
          </div>
          <div className="justify-end card-actions">
            <button
              onClick={() => signIn("google", { redirectTo: redirectUrl })}
              className="btn btn-warning w-full flex items-center"
            >
              <FaGoogle size={24} /> SignIn with Google
            </button>
            <button
              onClick={() => signIn("github", { redirectTo: redirectUrl })}
              className="btn btn-warning w-full flex items-center"
            >
              <FaGithub size={24} /> SignIn with Github
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
