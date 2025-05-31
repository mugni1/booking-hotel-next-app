"use server";

import { prisma } from "@/lib/prisma";
import { createMessageContactSchema } from "../zod/createMessageContact";

export const createMessage = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const dataValidated = createMessageContactSchema.safeParse(data);

  if (!dataValidated.success) {
    return {
      success: false,
      msg: "Please complete all form!",
      error: dataValidated.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = dataValidated.data;
  try {
    const res = await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    return {
      success: true,
      msg: "Message sended, thanks for contac us",
    };
  } catch {
    return {
      success: false,
      msg: "Failed send message, try again later!",
    };
  }
};
