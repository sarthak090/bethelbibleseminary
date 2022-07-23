import type { NextApiRequest, NextApiResponse } from "next";
import { Posts } from "@/models/Posts";

import Token from "../../../utils/generate-token";
type Data = {
  posts: Posts[];
  msg?: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = `https://bethel.righttool.dev/ghost/api/admin/posts/?filter=uuid:${req.query.slug}&formats=html`;
  const headers = { Authorization: `Ghost ${Token()}` };

  fetch(url, { headers })
    .then((r) => r.json())
    .then((resp) => {
      if (resp.errors && resp.errors.length > 0) {
        res.status(404).json({ posts: [], msg: "not found" });
      } else {
        res.status(200).json(resp);
      }
    });
}
