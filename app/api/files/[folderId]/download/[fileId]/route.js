import { readFile, stat } from "fs/promises";

import crypto from "crypto";

import path from "path";

import connectDb from "@/lib/db";

import Folder from "@/models/Folders";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export const runtime = "nodejs";

function getSafeFileName(file) {

    return (file.title || path.basename(file.publicId || file.fileUrl || "download"))
        .replace(/[\\/:*?"<>|]+/g, "-");
}

function getLocalPublicPath(fileUrl) {

    try {
        const url = new URL(fileUrl);

        if (url.hostname !== "localhost" && url.hostname !== "127.0.0.1") {
            return null;
        }

        const parts = decodeURIComponent(url.pathname)
            .split("/")
            .filter(Boolean);

        if (!parts.length || parts.some((part) => part === "..")) {
            return null;
        }

        return path.join(process.cwd(), "public", ...parts);
    } catch {
        return null;
    }
}

function getFileExtension(filename) {

    const extension = filename?.split(".").pop();

    return extension && extension !== filename
        ? extension.toLowerCase().replace(/[^a-z0-9]/g, "")
        : undefined;
}

function getSignedCloudinaryUrl(file) {

    if (!file.publicId) {
        return null;
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

    const apiKey = process.env.CLOUDINARY_API_KEY;

    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
        return null;
    }

    const params = {
        attachment: "false",
        expires_at: String(Math.floor(Date.now() / 1000) + 300),
        format: getFileExtension(file.title) || "pdf",
        public_id: file.publicId,
        timestamp: String(Math.floor(Date.now() / 1000)),
        type: "upload"
    };

    const signaturePayload = Object.keys(params)
        .sort()
        .map((key) => `${key}=${params[key]}`)
        .join("&");

    const signature = crypto
        .createHash("sha1")
        .update(`${signaturePayload}${apiSecret}`)
        .digest("hex");

    const searchParams = new URLSearchParams({
        ...params,
        signature,
        api_key: apiKey
    });

    return `https://api.cloudinary.com/v1_1/${cloudName}/raw/download?${searchParams.toString()}`;
}

async function fileExists(filePath) {

    try {
        const fileStat = await stat(filePath);

        return fileStat.isFile();
    } catch {
        return false;
    }
}

export async function GET(request, context) {

    try {

        await connectDb();

        const { folderId, fileId } = await context.params;

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

        const file = (folder.files || []).find(
            (item) => item._id?.toString() === fileId
        );

        if (!file) {

            return NextResponse.json(
                {
                    error: "File not found"
                },
                {
                    status: 404
                }
            );
        }

        const localPath = getLocalPublicPath(file.fileUrl);

        const cloudinaryUrl = getSignedCloudinaryUrl(file);

        if (cloudinaryUrl) {

            const cloudinaryResponse = await fetch(cloudinaryUrl);

            if (cloudinaryResponse.ok && cloudinaryResponse.body) {

                return new Response(cloudinaryResponse.body, {
                    status: 200,
                    headers: {
                        "Content-Type": file.fileType || cloudinaryResponse.headers.get("content-type") || "application/octet-stream",
                        "Content-Disposition": `attachment; filename="${getSafeFileName(file)}"`,
                        "Cache-Control": "private, no-store"
                    }
                });
            }
        }

        if (localPath && await fileExists(localPath)) {

            const body = await readFile(localPath);

            return new Response(body, {
                headers: {
                    "Content-Type": file.fileType || "application/octet-stream",
                    "Content-Disposition": `attachment; filename="${getSafeFileName(file)}"`
                }
            });
        }

        if (file.fileUrl && !localPath) {
            return NextResponse.redirect(file.fileUrl);
        }

        return NextResponse.json(
            {
                error: "File is not available on this server",
                details: file.publicId
                    ? "This file has a Cloudinary publicId, but this app is missing CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, or CLOUDINARY_API_SECRET. Add those values to .env and restart the dev server."
                    : "This file record points to a local upload path, but the PDF is not present in the Next.js public folder. Re-upload the file or move it into public using the same path."
            },
            {
                status: 404
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
