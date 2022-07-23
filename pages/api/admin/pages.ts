import { Posts } from "@/models/Posts";
import type { NextApiRequest, NextApiResponse } from "next";
import Token from "../../../utils/generate-token";
type Data = {
  pages: Posts[];
  msg?: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = `https://bethel.righttool.dev/ghost/api/admin/pages/?filter=uuid:${req.query.slug}&formats=html`;
  const headers = { Authorization: `Ghost ${Token()}` };

  fetch(url, { headers })
    .then((r) => r.json())
    .then((resp) => {
      if (resp.errors && resp.errors.length > 0) {
        res.status(404).json({ pages: [], msg: "not found" });
      } else {
        res.status(200).json(resp);
      }
    });
}
