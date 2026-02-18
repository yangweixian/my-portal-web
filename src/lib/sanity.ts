import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-13";

if (!projectId) {
  console.warn(
    "[sanity] 缺少 NEXT_PUBLIC_SANITY_PROJECT_ID 环境变量，Sanity Client 将无法连接到云端项目。"
  );
}

export const sanityClient = createClient({
  projectId: projectId || "",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

export type Project = {
  _id: string;
  title: string;
  summary?: string;
  slug?: string;
  tags?: string[];
  coverImageUrl?: string;
};

export async function fetchProjects(): Promise<Project[]> {
  // 真实 Sanity 查询示例（等你配置好 Project ID 后再启用）
  const data = await sanityClient.fetch(
    `*[_type == "project"]|order(_createdAt desc){
     _id,
     title,
     summary,
     "slug": slug.current,
     "coverImageUrl": coverImage.asset->url,
     tags
   }`
  );

  return data;
}
