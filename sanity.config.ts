import { defineConfig, type SchemaTypeDefinition } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { zhHansLocale } from "@sanity/locale-zh-hans";

const projectSchema: SchemaTypeDefinition = {
  name: "project",
  title: "项目案例",
  type: "document",
  fields: [
    {
      name: "title",
      title: "标题",
      type: "string",
      validation: (rule) => rule.required().max(100),
    },
    {
      name: "summary",
      title: "简介",
      type: "text",
      rows: 3,
      validation: (rule) => rule.max(300),
    },
    {
      name: "coverImage",
      title: "封面图",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "content",
      title: "详情内容",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "tags",
      title: "标签",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!projectId) {
  // 在构建/启动阶段提示缺少配置，方便排查
  // 不直接 throw，避免在本地开发时完全阻断，但会在控制台报警告。
  console.warn(
    "[sanity.config] 缺少 NEXT_PUBLIC_SANITY_PROJECT_ID 环境变量，Sanity Studio 将无法正常连接项目。"
  );
}

export default defineConfig({
  name: "default",
  title: "我的个人门户内容",
  projectId: projectId || "missing-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    deskTool(),
    visionTool(),
    // 简体中文界面包，安装 @sanity/locale-zh-hans 后启用
    zhHansLocale(),
  ],
  schema: {
    types: [projectSchema],
  },
});
