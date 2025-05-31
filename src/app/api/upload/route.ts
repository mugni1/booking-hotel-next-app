import { NextRequest, NextResponse } from "next/server";
import { put, del } from "@vercel/blob";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("file") as File;
  if (file.size === 0 || file.size === undefined) {
    return NextResponse.json(
      { success: false, message: "File is required" },
      { status: 400 }
    );
  }

  if (file.size > 4000000) {
    return NextResponse.json(
      {
        success: false,
        message: "File must be less than 4MB",
      },
      { status: 400 }
    );
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json(
      {
        success: false,
        message: "File must be an image",
      },
      { status: 400 }
    );
  }

  // ⚠️ The below code is for App Router Route Handlers only
  const blob = await put(Date.now() + file.name, file, {
    access: "public",
    multipart: true,
  });
  return NextResponse.json(
    {
      success: true,
      message: "Successfully upload image",
      data: blob,
    },
    { status: 200 }
  );
}

export async function DELETE(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const imageURL = searchParams.get("imageURL") as string;

  try {
    await del(imageURL);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
