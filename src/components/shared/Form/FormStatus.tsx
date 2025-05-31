"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function FormStatus({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button className="btn btn-warning btn-active" type="button" disabled>
          <span className="loading loading-spinner loading-md"></span>
        </button>
      ) : (
        <button type="submit" className="btn btn-warning text-white">
          {title}
        </button>
      )}
    </>
  );
}
