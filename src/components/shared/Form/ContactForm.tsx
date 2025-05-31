"use client";
import { createMessage } from "@/utils/actions/createMessage";
import React, { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import FormStatus from "./FormStatus";

export default function ContactForm() {
  const [state, formState] = useActionState(createMessage, null);
  useEffect(() => {
    if (state?.success == true) {
      toast.success(state.msg);
    }
    if (state?.success == false) {
      toast.error(state.msg);
    }
  }, [state]);
  return (
    <section className="border border-base-300 shadow-md p-5 rounded-md">
      <form action={formState}>
        <div className="grid grid-cols-1  md:grid-cols-2 md:gap-5">
          <fieldset className="fieldset">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John Doe"
            />
            <p className="label text-red-500">{state?.error?.name}</p>
          </fieldset>
          <fieldset className="fieldset">
            <input
              type="email"
              name="email"
              className="input"
              placeholder="johndoe@gmail.com"
            />
            <p className="label text-red-500">{state?.error?.email}</p>
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <input
            type="email"
            name="subject"
            className="input w-full"
            placeholder="subject@gmail.com"
          />
          <p className="label text-red-500">{state?.error?.subject}</p>
        </fieldset>
        <fieldset className="fieldset">
          <textarea
            name="message"
            className="textarea w-full "
            placeholder="Your Message"
            rows={10}
          ></textarea>
          <p className="label text-red-500">{state?.error?.message}</p>
        </fieldset>
        <fieldset className="fieldset">
          <FormStatus title="Send Message" />
        </fieldset>
      </form>
    </section>
  );
}
