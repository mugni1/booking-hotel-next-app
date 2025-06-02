"use client";
import React, { useActionState, useEffect } from "react";
import FormStatus from "./FormStatus";
import FieldImageUploader from "./FieldImageUploader";
import { Amenities } from "@prisma/client";
import { createRoom } from "@/utils/actions/createRoom";
import { useImageUploadStore } from "@/store/imageUploadStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Room {
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  capacity: number;
  price: number;
  image: string;
  roomAmenities: { amenitiesId: string }[];
}
export default function UpdateRoomForm({
  room,
  amenities,
}: {
  room: Room;
  amenities: Amenities[];
}) {
  const router = useRouter();
  const { imageURL, setImageURL } = useImageUploadStore();
  const [state, formAction] = useActionState(
    createRoom.bind(null, imageURL),
    null
  );

  useEffect(() => {
    if (state?.success == false) {
      toast.error(state.message);
    }
    if (state?.success == true) {
      toast.success(state.message);
      setImageURL("");
      router.push("/admin/room");
    }
  }, [state]);

  useEffect(() => {
    setImageURL(room.image);
  }, []);
  return (
    <form action={formAction}>
      <section className="grid grid-cols-12 gap-5">
        <div className="shadow-md rounded-md border border-slate-300  col-span-12 md:col-span-8 p-5">
          <fieldset className="fieldset">
            <input
              type="text"
              name="name"
              defaultValue={room.name}
              className="input input-warning w-full"
              placeholder="Room Name"
            />
            <p className="label text-red-500">{state?.error?.name}</p>
          </fieldset>
          <fieldset className="fieldset">
            <textarea
              name="description"
              defaultValue={room.description}
              className="textarea textarea-warning w-full"
              placeholder="Description"
              rows={10}
            ></textarea>
            <p className="label text-red-500">{state?.error?.description}</p>
          </fieldset>
          <div className="fieldset grid grid-cols-2 md:grid-cols-5">
            {amenities?.map((ameniti, index) => (
              <label key={index} className="label">
                <input
                  defaultValue={ameniti.id}
                  defaultChecked={room.roomAmenities.some(
                    (value) => value.amenitiesId == ameniti.id
                  )}
                  type="checkbox"
                  name="amenities"
                  className="checkbox checkbox-sm checkbox-warning"
                />
                <span className="w-full overflow-hidden flex flex-nowrap text-ellipsis">
                  {ameniti.name}
                </span>
              </label>
            ))}
            <p className="label text-red-500">{state?.error?.amenities}</p>
          </div>
        </div>
        <div className="shadow-md rounded-md border border-slate-300 col-span-12  md:col-span-4 p-5">
          <FieldImageUploader />
          <fieldset className="fieldset">
            <input
              type="number"
              name="capacity"
              defaultValue={room.capacity}
              className="w-full input input-warning capitalize"
              placeholder="capacity"
            />
            <p className="label text-red-500">{state?.error?.capacity}</p>
          </fieldset>
          <fieldset className="fieldset">
            <input
              type="number"
              name="price"
              defaultValue={room.price}
              className="w-full input input-warning capitalize"
              placeholder="price"
            />
            <p className="label text-red-500">{state?.error?.price}</p>
          </fieldset>
          <fieldset className="fieldset">
            <FormStatus title="Save" />
          </fieldset>
        </div>
      </section>
    </form>
  );
}
