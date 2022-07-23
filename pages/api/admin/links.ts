import { Posts } from "@/models/Posts";
import type { NextApiRequest, NextApiResponse } from "next";
import Token from "../../../utils/generate-token";
type Data = {
  posts: Posts[];
  pages: Posts[];
  msg?: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const url = `https://bethel.righttool.dev/ghost/api/admin/pages/?limit=all`;
  const postUrl = `https://bethel.righttool.dev/ghost/api/admin/posts/?limit=all`;
  const headers = { Authorization: `Ghost ${Token()}` };

  const respPages = await fetch(url, { headers }).then((r) => r.json());
  const respPost = await fetch(postUrl, { headers }).then((r) => r.json());

  if (
    respPages.errors &&
    respPost.errors &&
    respPages.errors.length > 0 &&
    respPost.errors.length > 0
  ) {
    res.status(404).json({ pages: [], posts: [], msg: "not found" });
  } else {
    res.status(200).json({ posts: respPost.posts, pages: respPages.pages });
  }
}
