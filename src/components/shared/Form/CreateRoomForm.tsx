import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import FormStatus from "./FormStatus";

export default function CreateRoomForm() {
  return (
    <form action="">
      <section className="grid grid-cols-12 gap-5">
        <div className="shadow-md rounded-md border border-slate-300  col-span-8 p-5">
          <fieldset className="fieldset">
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Room Name"
            />
            <p className="label text-red-500">Label</p>
          </fieldset>
          <fieldset className="fieldset">
            <textarea
              name="description"
              className="textarea w-full"
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
          <label
            htmlFor="image"
            className="w-full mb-2 aspect-video cursor-pointer border-2 border-dashed flex items-center justify-center border-gray-300 text-gray-500 bg-gray-100 rounded-md p-5"
          >
            <div className="flex items-center justify-center flex-col">
              <IoCloudUploadOutline className="size-10" />
              <b>Select Image</b>
              <p className="text-xs">JPG, PNG, WEBP, or Others (max: 4mb)</p>
              <input type="file" className="hidden" id="image" />
            </div>
          </label>

          <fieldset className="fieldset">
            <input
              type="number"
              name="capacity"
              className="w-full input capitalize"
              placeholder="capacity"
            />
            <p className="label text-red-500">Label</p>
          </fieldset>
          <fieldset className="fieldset">
            <input
              type="number"
              name="price"
              className="w-full input capitalize"
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
