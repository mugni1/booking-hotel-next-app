"use client";
import { useImageUploadStore } from "@/store/imageUploadStore";
import clsx from "clsx";
import Image from "next/image";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function FieldImageUploader() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { loading, setLoading, imageURL, setImageURL } = useImageUploadStore();
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
    setLoading(true);
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
      setLoading(false);
    }
  };
  return (
    <>
      {/* image  */}
      <label
        htmlFor="image"
        className={clsx(
          "w-full mb-2 aspect-video cursor-pointer  flex items-center justify-center  text-gray-500 bg-gray-100 rounded-md overflow-hidden",
          imageURL.length > 1
            ? "border border-gray-300"
            : "border-dashed border-warning border-2 "
        )}
      >
        {loading ? (
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
    </>
  );
}
