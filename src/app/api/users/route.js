import User from "@/models/users";
import connectMongoDb from "@/mongo/index";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { firstName, lastName, email, password, image, isAdmin } =
    await request.json();
  await connectMongoDb();
  await User.create({ firstName, lastName, email, password, image, isAdmin });
  return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
}

export async function GET() {
  await connectMongoDb();
  const users = await User.find();
  return NextResponse.json({ users });
}
