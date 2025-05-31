import React from "react";
import FormStatus from "./FormStatus";
import FieldImageUploader from "./FieldImageUploader";

export default function CreateRoomForm() {
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
          <FieldImageUploader />
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
