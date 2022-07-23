import { PostData } from "@/models/Posts";
import { useState, useEffect } from "react";

export default function useTags(tagName: string) {
  const [data, setFetchedData] = useState<PostData[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(`/api/tags/${tagName}`).then((r) => r.json());
        if (resp.length > 0) {
          setFetchedData(resp);
        }
      } catch (err) {}
    };
    fetchData();
  }, []);
  return { data };
}
