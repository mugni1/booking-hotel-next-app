import React from "react";
import HeaderSection from "../elements/HeaderSection";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import ContactForm from "../shared/Form/ContactForm";
export default function Contact() {
  return (
    <>
      <HeaderSection
        title="Contact Us"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, laboriosam."
      />
      <section className="w-full container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-5 py-8">
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <b className="text-base-content/80 text-sm md:text-base">
              Contact Us
            </b>
            <p className="text-2xl md:text-4xl font-extrabold capitalize">
              Get in touch today
            </p>
          </div>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            repudiandae sapiente ad fuga, excepturi harum perferendis.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-base-300">
                <IoMailOutline className="size-5 md:size-7" />
              </div>
              <div className="flex flex-col text-sm md:text-base">
                <b>Email:</b>
                <p>email-us@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-base-300">
                <IoCallOutline className="size-5 md:size-7" />
              </div>
              <div className="flex flex-col text-sm md:text-base">
                <b>Phone Number:</b>
                <p>email-us@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-base-300">
                <IoLocationOutline className="size-5 md:size-7" />
              </div>
              <div className="flex flex-col text-sm md:text-base">
                <b>Address:</b>
                <p>email-us@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
