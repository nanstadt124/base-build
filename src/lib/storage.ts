import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Works with any S3-compatible storage (Cloudflare R2, AWS S3, etc).
const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.STORAGE_ENDPOINT,
  credentials: {
    accessKeyId: process.env.STORAGE_ACCESS_KEY_ID!,
    secretAccessKey: process.env.STORAGE_SECRET_ACCESS_KEY!,
  },
});

const DOWNLOAD_TTL_SECONDS = 60 * 60; // 1 hour

export async function getSignedDownloadUrl(key: string): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: process.env.STORAGE_BUCKET!,
    Key: key,
    ResponseContentDisposition: `attachment; filename="${key}"`,
  });

  return getSignedUrl(s3, command, { expiresIn: DOWNLOAD_TTL_SECONDS });
}
