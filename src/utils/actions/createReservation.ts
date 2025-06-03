"use server";

import { auth } from "@/auth";
import { createReservationSchema } from "../zod/createReservationSchema";
import { redirect } from "next/navigation";

export const createReservation = async (prevState: any, formData: FormData) => {
  const session = await auth();
  if (!session || !session.user) {
    return redirect("/login");
  }

  const data = Object.fromEntries(formData.entries());
  const dataValidate = createReservationSchema.safeParse(data);

  if (!dataValidate.success) {
    return {
      success: false,
      error: dataValidate.error.flatten().fieldErrors,
      message: "Please fill out all forms correctly",
    };
  }

  return {
    success: true,
    message: "Successfully reserve this room",
  };
};
