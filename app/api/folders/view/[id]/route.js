import { NextResponse } from "next/server";
import db from "@/lib/db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req, context) {

  try {

    const { id } = await context.params;

    // Current Folder
    const [folderRows] = await db.execute(
      `
      SELECT *
      FROM folders
      WHERE id = ?
      `,
      [id]
    );

    if (folderRows.length === 0) {

      return NextResponse.json(
        {
          error: "Folder not found"
        },
        {
          status: 404
        }
      );
    }

    const folder = folderRows[0];

    // Child Folders
    const [childFolders] = await db.execute(
      `
      SELECT *
      FROM folders
      WHERE parent_folder_id = ?
      ORDER BY created_at DESC
      `,
      [id]
    );

    // Files
    const [files] = await db.execute(
      `
      SELECT *
      FROM files
      WHERE folder_id = ?
      ORDER BY created_at DESC
      `,
      [id]
    );

    // Breadcrumb
    let breadcrumb = [];

    let currentFolder = folder;

    while (currentFolder) {

      breadcrumb.unshift({
        id: currentFolder.id,
        name: currentFolder.name
      });

      if (!currentFolder.parent_folder_id) {
        break;
      }

      const [parentRows] = await db.execute(
        `
        SELECT *
        FROM folders
        WHERE id = ?
        `,
        [currentFolder.parent_folder_id]
      );

      currentFolder = parentRows[0];
    }

    return NextResponse.json({
      folder,
      childFolders,
      files,
      breadcrumb
    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        error: "Something went wrong"
      },
      {
        status: 500
      }
    );
  }
}
