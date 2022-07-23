import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  error: boolean;
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { tag, page } = req.query;
  const apiUrl: string = process.env.GHOST_API_URL || "";
  const apiKey: string = process.env.GHOST_API_KEY || "";
  const pageNo = page ? page : 1;
  const reqUrl = `${apiUrl}/pages/?page=${pageNo}&filter=tag:${tag}&order=published_at%20desc&key=${apiKey}`;
  const reqUrlPosts = `${apiUrl}/posts/?page=${pageNo}&filter=tag:${tag}&order=published_at%20desc&key=${apiKey}`;

  const resp = await fetch(reqUrl).then((r) => r.json());
  const respPosts = await fetch(reqUrlPosts).then((r) => r.json());
  if (resp.pages && resp.pages.length > 0) {
    res.status(200).json(resp.pages);
  } else if (respPosts.posts) {
    res.status(200).json(respPosts.posts);
  } else {
    res.status(404).json({ error: true, msg: "not found" });
  }
}
