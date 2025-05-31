import { object, string } from "zod";

export const createMessageContactSchema = object({
  name: string().min(1),
  email: string().email().min(1),
  subject: string().email().min(1),
  message: string().min(10),
});
