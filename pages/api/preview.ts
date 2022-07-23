import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== "secret") {
    return res.status(401).json({ message: "Invalid token" });
  }
  res.setPreviewData({});
  res.end("preview mode enabled");
};
