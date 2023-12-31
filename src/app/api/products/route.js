import Product from "@/models/products";
import connectMongoDb from "@/mongo/index";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, price, image, stock } = await request.json();
  await connectMongoDb();
  await Product.create({ title, description, price, image, stock });
  return NextResponse.json({ message: "Producto creado" }, { status: 201 });
}

export async function GET() {
  await connectMongoDb();
  const products = await Product.find();
  return NextResponse.json({ products });
}

// Tener en cuenta para cuando quiera hacer algo con "QUERYS"
/* export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product delete" }, { status: 200 });
} */
