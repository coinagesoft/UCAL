import connectDb from "@/lib/db";
import Category from "@/models/Categories";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    await connectDb();

    const categories = await Category.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(categories);
  }catch (error) {
    console.log(error);

    return NextResponse.json(
        {
            error: error.message
        },
        {
            status: 500
        }
    );
}
}