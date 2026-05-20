import connectDB from "@/lib/db";

import Folder from "@/models/Folders";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request, context) {

    try {

        await connectDB();

       const { categoryId } = await context.params;

        const folders = await Folder.find({
            categoryId
        });

        return NextResponse.json(folders);

    } catch (error) {

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