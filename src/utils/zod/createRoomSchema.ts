import { array, number, object, string, coerce } from "zod";

export const createRoomSchema = object({
  name: string().min(1),
  description: string().min(50),
  capacity: number().gt(0),
  price: number().gt(0),
  amenities: array(string()).nonempty(),
});
