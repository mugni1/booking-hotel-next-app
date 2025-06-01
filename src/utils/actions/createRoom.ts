"use server";
import { prisma } from "@/lib/prisma";
import { createRoomSchema } from "../zod/createRoomSchema";

export const createRoom = async (
  image: string,
  prevState: any,
  formData: FormData
) => {
  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: Number(formData.get("capacity")),
    price: Number(formData.get("price")),
    amenities: formData.getAll("amenities"),
  };
  const dataValidate = createRoomSchema.safeParse(rawData);

  if (!image) {
    return {
      success: false,
      message: "Image is required",
    };
  }

  if (!dataValidate.success) {
    return {
      success: false,
      error: dataValidate.error.flatten().fieldErrors,
      message: "Please fill in all forms correctly",
    };
  }

  const { name, description, capacity, price, amenities } = dataValidate.data;
  try {
    const res = await prisma.room.create({
      data: {
        image: image as string,
        name,
        description,
        capacity,
        price,
        roomAmenities: {
          createMany: {
            data: amenities.map((item) => ({
              amenitiesId: item,
            })),
          },
        },
      },
    });
    return {
      success: true,
      message: "Successfully Created Room",
      data: res,
    };
  } catch {
    return {
      success: false,
      message: "Failed Create Room, Please try again later",
    };
  }
};
