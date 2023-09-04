import connectMongoDb from "@/mongo/index";
import Users from "@/models/users";
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
