import "dotenv/config";

import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand
} from "@aws-sdk/client-s3";

const BUCKET_NAME = process.env.B2_BUCKET_NAME;

if (!BUCKET_NAME) {
    throw new Error("B2_BUCKET_NAME is not configured");
}

const s3 = new S3Client({
    region: "us-east-005",
    endpoint: "https://s3.us-east-005.backblazeb2.com",
    credentials: {
        accessKeyId: process.env.B2_KEY_ID,
        secretAccessKey: process.env.B2_APPLICATION_KEY
    }
});

export const uploadToB2 = async (
    filePath,
    objectKey,
    contentType
) => {

    const fs = await import("fs");

    const fileStream = fs.createReadStream(filePath);

    const command = new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: objectKey,
        Body: fileStream,
        ContentType: contentType
    });

    await s3.send(command);

    return {
        bucket: BUCKET_NAME,
        key: objectKey
    };
};

export const downloadFromB2 = async (
    objectKey
) => {

    const command = new GetObjectCommand({
        Bucket: BUCKET_NAME,
        Key: objectKey
    });

    return await s3.send(command);
};

export const deleteFromB2 = async (
    objectKey
) => {

    const command = new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: objectKey
    });

    return await s3.send(command);
};