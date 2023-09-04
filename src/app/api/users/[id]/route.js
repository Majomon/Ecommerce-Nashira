import User from "@/models/users";
import connectMongoDb from "@/mongo/index";
import { NextResponse } from "next/server";

// Para modificar a un Usuario le paso la ID por params y los datos por Query
export async function PUT(request, { params }) {
  const { id } = params;
  // Query
  const {
    newFirstName: firstName,
    newDescription: lastName,
    newEmail: email,
    newPassword: password,
    newImage: image,
    newRol: isAdmin,
  } = await request.json();

  await connectMongoDb();
  await Users.findByIdAndUpdate(id, {
    firstName,
    lastName,
    email,
    password,
    image,
    isAdmin,
  });
  return NextResponse.json({ message: "Usuario modificado" }, { status: 200 });
}

// Para pedir u un Usuario por ID le paso el ID por params
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  const user = await User.findById(id);
  return NextResponse.json({ user }, { status: 200 });
}

// Para borrar u un Usuario por ID le paso el ID por params
export async function DELETE(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "Usuario borrado" }, { status: 200 });
}
