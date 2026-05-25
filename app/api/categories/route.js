import db from "@/lib/db.js"

import {NextResponse} from "next/server";

export const dynamic = "force-dynamic";

export async function GET(){
    try{
      const [categories] = await db.query(
        "SELECT * FROM categories ORDER BY created_at DESC"
      )

      return NextResponse.json(categories);

    }catch(err){
      console.error(err);
      return NextResponse.json({
        error: err.message
      }, {status: 500});
    }
}