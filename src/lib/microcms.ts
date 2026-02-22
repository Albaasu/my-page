import { createClient } from "microcms-js-sdk";
import type { BlogPost } from "@/types";

const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

export async function getBlogList(): Promise<BlogPost[]> {
  const res = await client.getList<BlogPost>({ endpoint: "blogs" });
  return res.contents;
}

export async function getBlogDetail(id: string): Promise<BlogPost | undefined> {
  return client.getListDetail<BlogPost>({ endpoint: "blogs", contentId: id });
}
