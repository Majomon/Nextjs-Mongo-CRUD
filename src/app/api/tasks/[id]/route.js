import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET(request, { params }) {
  try {
    connectDB();
    const taskFound = await Task.findById(params.id);

    if (!taskFound) {
      return NextResponse.json(
        { message: "Tarea no encontrada" },
        { status: 404 }
      );
    }
    return NextResponse.json(taskFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export function DELETE(request, { params }) {
  return NextResponse.json({ message: `Eliminando tarea ${params.id}` });
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const taskUpdate = await Task.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(taskUpdate);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
