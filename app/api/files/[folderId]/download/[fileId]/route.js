import path from "path";

import { readFile, stat } from "fs/promises";

import db from "@/lib/db";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const CONTENT_TYPES = {
    ".pdf": "application/pdf",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp"
};

function getPublicFilePath(fileUrl) {

    if (!fileUrl) {
        return null;
    }

    const normalizedUrl = String(fileUrl).replace(/\\/g, "/");

    if (/^https?:\/\//i.test(normalizedUrl)) {
        return null;
    }

    const relativePath = normalizedUrl
        .replace(/^\/+/, "")
        .replace(/^public\//, "");

    const publicDir = path.join(process.cwd(), "public");
    const filePath = path.join(publicDir, relativePath);
    const relativeToPublic = path.relative(publicDir, filePath);

    if (
        relativeToPublic.startsWith("..") ||
        path.isAbsolute(relativeToPublic)
    ) {
        return null;
    }

    return filePath;
}

function getDownloadFileName(file) {

    return String(file.name || "download")
        .replace(/["\r\n]/g, "");
}

export async function GET(request, context) {

    try {

        const { folderId, fileId } = await context.params;

        // Get file directly
        const [files] = await db.query(
            `
            SELECT *
            FROM files
            WHERE id = ?
            `,
            [fileId]
        );

        if (files.length === 0) {

            return NextResponse.json(
                {
                    error: "File not found"
                },
                {
                    status: 404
                }
            );

        }

        const file = files[0];

        // IMPORTANT
        // Check folder matches
        if (String(file.folder_id) !== String(folderId)) {

            return NextResponse.json(
                {
                    error: "Folder mismatch"
                },
                {
                    status: 404
                }
            );

        }

        const filePath = getPublicFilePath(file.file_url);

        if (!filePath) {

            return NextResponse.json(
                {
                    error: "File path is invalid or not local"
                },
                {
                    status: 404
                }
            );

        }

        try {
            await stat(filePath);
        } catch {

            return NextResponse.json(
                {
                    error: "File is missing from local storage"
                },
                {
                    status: 404
                }
            );

        }

        // Read local file
        const fileBuffer = await readFile(filePath);
        const extension = path.extname(filePath).toLowerCase();
        const fileName = getDownloadFileName(file);

        return new Response(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": CONTENT_TYPES[extension] || "application/octet-stream",
                "Content-Disposition":
                    `attachment; filename="${fileName}"`
            }
        });

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
