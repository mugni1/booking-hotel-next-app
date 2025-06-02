"use client";
import { deleteRoom } from "@/utils/actions/deleteRoom";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseCircle, IoTrashBin, IoWarning } from "react-icons/io5";

export default function DeleteBtn({ id, name }: { id: string; name: string }) {
  const [pending, setPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    setPending(true);
    const res = await deleteRoom(id);
    setPending(false);
    if (res.success == false) {
      toast.error(res.message);
    }
    if (res.success == true) {
      toast.success(res.message);
    }
  };
  return (
    <>
      {/* The button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-sm btn-error text-white"
      >
        {isOpen ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <IoTrashBin size={20} />
        )}
      </button>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        checked={isOpen}
        onChange={() => setIsOpen(isOpen)}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-xl font-bold text-error flex items-center gap-1">
            <IoWarning size={24} /> Confirm Delete
          </h3>
          <p className=" pt-2">
            Are you sure you want to delete this{" "}
            <span className="font-bold text-error">`{name}`</span> ?
          </p>
          <div className="modal-action">
            <button
              disabled={pending}
              onClick={() => handleDelete()}
              className="btn btn-error"
            >
              {pending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <span className=" flex gap-1 font-bold text-white">
                  <IoTrashBin size={20} /> Delete
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(false)} className="btn btn-info">
              <span className="flex gap-1 text-white">
                <IoCloseCircle size={20} /> Close
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
