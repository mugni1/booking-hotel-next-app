import CreateRoomForm from "@/components/shared/Form/CreateRoomForm";
import React from "react";

export default function CreateRoom() {
  return (
    <section className="pt-20 px-5 container mx-auto">
      <h1 className="md:ext-4xl text-2xl font-bold mb-2 capitalize">
        Create new room
      </h1>
      <CreateRoomForm />
    </section>
  );
}
