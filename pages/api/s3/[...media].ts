// pages/api/s3/[...media].ts

import {
  mediaHandlerConfig,
  createMediaHandler,
} from "next-tinacms-s3/dist/handlers";

export const config = mediaHandlerConfig;

export default createMediaHandler({
  config: {
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY || "",
      secretAccessKey: process.env.S3_SECRET_KEY || "",
    },
    region: process.env.NEXT_PUBLIC_S3_REGION,
  },
  bucket: process.env.NEXT_PUBLIC_S3_BUCKET || "",
  authorized: async (req, _res) => {
    return true;
  },
});
