import db from "@/lib/db";

import { randomUUID } from "crypto";

import { mkdir, writeFile } from "fs/promises";

import { NextResponse } from "next/server";

import path from "path";

export const dynamic = "force-dynamic";

export const runtime = "nodejs";

function slugify(value) {

    return String(value || "file")
        .replace(/\.[^/.]+$/, "")
        .replace(/[^a-zA-Z0-9]+/g, "_")
        .replace(/^_+|_+$/g, "");
}

function sanitizeFileName(value) {

    const extension = path.extname(value || "");
    const baseName = slugify(path.basename(value || "file", extension));

    return `${randomUUID()}-${baseName}${extension}`;
}

function getUploadPath(folderId, folderName, fileName) {

    const uploadFolder = `${folderId}-${slugify(folderName)}`;
    const relativeUrl = `/uploads/${uploadFolder}/${fileName}`;
    const directory = path.join(process.cwd(), "public", "uploads", uploadFolder);
    const fullPath = path.join(directory, fileName);

    return {
        directory,
        fullPath,
        relativeUrl
    };
}

export async function GET(request, context) {

    try     {

        const { folderId } = await context.params;

        const [folderRows] = await db.query(
            `SELECT * FROM folders WHERE ID = ?`,
            [folderId]
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

        const [files] = await db.query(
            `SELECT * from files WHERE folder_id = ?`,
            [folderId]
        )

        return NextResponse.json(files|| []);

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

export async function POST(request, context) {

    try {

        const { folderId } = await context.params;

        const formData = await request.formData();
        const file = formData.get("file");

        if (!file || typeof file.arrayBuffer !== "function") {

            return NextResponse.json(
                {
                    error: "File is required"
                },
                {
                    status: 400
                }
            );

        }

        const [folderRows] = await db.query(
            `SELECT * FROM folders WHERE ID = ?`,
            [folderId]
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
        const fileName = sanitizeFileName(file.name);
        const { directory, fullPath, relativeUrl } = getUploadPath(
            folderId,
            folder.name,
            fileName
        );
        const bytes = Buffer.from(await file.arrayBuffer());

        await mkdir(directory, {
            recursive: true
        });

        await writeFile(fullPath, bytes);

        const [result] = await db.query(
            `
            INSERT INTO files (name, file_url, folder_id)
            VALUES (?, ?, ?)
            `,
            [
                file.name,
                relativeUrl,
                folderId
            ]
        );

        return NextResponse.json(
            {
                id: result.insertId,
                name: file.name,
                file_url: relativeUrl,
                folder_id: Number(folderId)
            },
            {
                status: 201
            }
        );

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
