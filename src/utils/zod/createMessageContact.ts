import { object, string } from "zod";

export const createMessageContactSchema = object({
  name: string().min(1),
  email: string().email(),
  subject: string().email(),
  message: string().min(10).max(200),
});
