import db from "@/lib/db";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request, context) {

    try {
        const { categoryId } = await context.params;

        const [folders] = await db.query(
            `SELECT * 
            FROM folders 
            WHERE category_id = ?`,
            [categoryId]
        )
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