import React from "react";

export default function ContactForm() {
  return (
    <section className="border border-base-300 shadow-md p-5 rounded-md">
      <form action="">
        <div className="grid grid-cols-1  md:grid-cols-2 md:gap-5">
          <fieldset className="fieldset">
            <input
              type="text"
              className="input"
              placeholder="John Doe"
              required
            />
            <p className="label text-red-500">Optional</p>
          </fieldset>
          <fieldset className="fieldset">
            <input
              type="email"
              className="input"
              placeholder="johndoe@gmail.com"
              required
            />
            <p className="label text-red-500">Optional</p>
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <input
            type="email"
            className="input w-full"
            placeholder="subject@gmail.com"
            required
          />
          <p className="label text-red-500">Optional</p>
        </fieldset>
        <fieldset className="fieldset">
          <textarea
            name=""
            id=""
            className="textarea w-full "
            rows={10}
            required
          ></textarea>
          <p className="label text-red-500">Optional</p>
        </fieldset>
        <fieldset className="fieldset">
          <button className="btn btn-warning text-white">Send Message</button>
        </fieldset>
      </form>
    </section>
  );
}
