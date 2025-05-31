"use client";
import React, { useRef, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import FormStatus from "./FormStatus";
import Image from "next/image";
import toast from "react-hot-toast";

export default function CreateRoomForm() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [imageURL, setImageURL] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);

  const handleDeleteImage = async () => {
    try {
      const res = await fetch("/api/upload?imageURL=" + imageURL, {
        method: "delete",
      });
      if (!res.ok) {
        return toast.error("Failed Delete This Image");
      }
      setImageURL("");
    } catch {
      return toast.error("Failed Delete This Image");
    }
  };
  const handleImageChange = async () => {
    setLoadingUpload(true);
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current?.files[0];
    const formData = new FormData();
    formData.set("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.status != 200) {
        toast.error(data.message);
        return;
      }
      setImageURL(data.data?.url || "");
    } catch {
      toast.error("Failed upload file, try again later!");
    } finally {
      setLoadingUpload(false);
    }
  };
  return (
    <form action="">
      <section className="grid grid-cols-12 gap-5">
        <div className="shadow-md rounded-md border border-slate-300  col-span-8 p-5">
          <fieldset className="fieldset">
            <input
              type="text"
              name="name"
              className="input input-warning w-full"
              placeholder="Room Name"
            />
            <p className="label text-red-500">Label</p>
          </fieldset>
          <fieldset className="fieldset">
            <textarea
              name="description"
              className="textarea textarea-warning w-full"
              placeholder="Description"
              rows={10}
            ></textarea>
            <p className="label text-red-500">Label</p>
          </fieldset>
          <div className="fieldset grid grid-cols-5 gap-5">
            <label className="label">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-warning"
              />
              Spa
            </label>
            <label className="label">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-warning"
              />
              Spa
            </label>
            <label className="label">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-warning"
              />
              Spa
            </label>
            <label className="label">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-warning"
              />
              Spa
            </label>
          </div>
        </div>
        <div className="shadow-md rounded-md border border-slate-300  col-span-4 p-5">
          {/* image  */}
          <label
            htmlFor="image"
            className="w-full mb-2 aspect-video cursor-pointer border-2 border-dashed flex items-center justify-center border-warning text-gray-500 bg-gray-100 rounded-md overflow-hidden"
          >
            {loadingUpload ? (
              <div className="flex items-center justify-center flex-col">
                <IoCloudUploadOutline className="size-10" />
                <b>Uploading..</b>
                <span className="loading loading-bars loading-sm"></span>
              </div>
            ) : imageURL != "" || imageURL.length > 0 ? (
              <Image
                src={imageURL}
                alt="image"
                height={400}
                width={400}
                onClick={handleDeleteImage}
                className="object-cover object-center h-full w-full"
              />
            ) : (
              <div className="flex items-center justify-center flex-col">
                <IoCloudUploadOutline className="size-10" />
                <b>Select Image</b>
                <p className="text-xs">JPG, PNG, WEBP, or Others (max: 4mb)</p>
              </div>
            )}
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
              id="image"
              ref={inputFileRef}
            />
          </label>
          {/* end image  */}
          <fieldset className="fieldset">
            <input
              type="number"
              name="capacity"
              className="w-full input input-warning capitalize"
              placeholder="capacity"
            />
            <p className="label text-red-500">Label</p>
          </fieldset>
          <fieldset className="fieldset">
            <input
              type="number"
              name="price"
              className="w-full input input-warning capitalize"
              placeholder="price"
            />
            <p className="label text-red-500">Label</p>
          </fieldset>
          <fieldset className="fieldset">
            <FormStatus title="Save" />
          </fieldset>
        </div>
      </section>
    </form>
  );
}
