import connectDb from "@/lib/db";

import Folder from "@/models/Folders";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const runtime = "nodejs";

export async function GET(request, context) {

    try {

        await connectDb();

        const { folderId } = await context.params;

        const folder = await Folder.findById(folderId).lean();

        if (!folder) {

            return NextResponse.json(
                {
                    error: "Folder not found"
                },
                {
                    status: 404
                }
            );
        }

        return NextResponse.json(folder.files || []);

    } catch (error) {

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