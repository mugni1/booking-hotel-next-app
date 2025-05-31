"use server";

import { createMessageContactSchema } from "../zod/createMessageContact";

export const createMessage = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const dataValidated = createMessageContactSchema.safeParse(data);

  if (!dataValidated.success) {
    return {
      success: false,
      msg: "Please complete all form",
      error: dataValidated.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    msg: "Your message sended",
  };
};
