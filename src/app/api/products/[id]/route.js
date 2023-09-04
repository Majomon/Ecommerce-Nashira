import connectMongoDb from "@/mongo/index";
import Product from "@/models/products";
import { NextResponse } from "next/server";

// Para modificar un producto le paso la ID por params y los datos por Query
export async function PUT(request, { params }) {
  const { id } = params;
  // Query
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

// Para pedir un producto por ID le paso el ID por params
export async function GET(request, { params }) {
  await connectMongoDb();
  const product = await Product.findById(params.id);
  return NextResponse.json({ product }, { status: 200 });
  /*   const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
 */
}

// Para borrar un producto por ID le paso el ID por params
export async function DELETE({ params }) {
  await connectMongoDb();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Product delete" }, { status: 200 });
}
