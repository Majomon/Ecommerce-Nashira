import connectMongoDb from "@/app/mongo";
import Product from "@/app/models/products";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newPrice: price,
    newImage: image,
    newStock: stock,
    newActive: active,
  } = await request.json();
  await connectMongoDb();
  await Product.findByIdAndUpdate(id, {
    title,
    description,
    price,
    image,
    stock,
    active,
  });
  return NextResponse.json({ message: "Producto modificado" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDb();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
