import User from "@/app/models/users";
import connectMongoDb from "@/app/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, password } = await request.json();
  await connectMongoDb();
  await User.create({ name, email, password });
  return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
}
