"use client";
import React, { useEffect } from "react";

// Type definition for Coze Web SDK on the window object
interface WebChatClientOptions {
  config: {
    bot_id: string;
  };
  componentProps: {
    title: string;
  };
  auth: {
    type: string;
    token: string;
    onRefreshToken: () => Promise<string>;
  };
  userInfo: {
    id: string;
    nickname: string;
  };
  ui: {
    baseCdnUrl: string;
  };
}

type WebChatClientInstance = object;

interface CozeWebSDKType {
  WebChatClient: new (options: WebChatClientOptions) => WebChatClientInstance;
}

declare global {
  interface Window {
    CozeWebSDK: CozeWebSDKType | undefined; // It might not be loaded yet
  }
}

// Reusable component for the main content sections
const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    className={`bg-white rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
  >
    {children}
  </section>
);

// Reusable component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
    {children}
  </h2>
);

// Reusable component for nested experience items (small cards)
const NestedExperienceItem = ({
  title,
  responsibilities,
  achievements,
}: {
  title: string;
  responsibilities: string;
  achievements: string;
}) => {
  const highlightAchievements = (text: string) => {
    // Regex to find numbers, percentages, and specific phrases like "万+", "次", "日活", "工单量", "个月", "个业务系统"
    const regex =
      /(\d+万\+?|\d+\+?次|\d+%|\d+日活|\d+\+?工单量|\d+个月|\d+个业务系统)/g;
    return text.split(regex).map((part, index) => {
      if (part.match(regex)) {
        return (
          <span key={index} className="font-bold text-blue-600 text-lg">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-slate-50/80 border border-slate-100/50 rounded-xl p-4">
      <p className="font-semibold text-gray-800 mb-2">{title}</p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <div className="bg-amber-50 border border-amber-100 p-5 rounded-xl h-full">
            <p className="font-semibold text-gray-800 mb-1">核心职责</p>
            <p className="text-slate-600 text-sm leading-snug">
              {responsibilities}
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl h-full">
            <p className="font-semibold text-gray-800 mb-1">
              商业价值与业务成果
            </p>
            <p className="text-slate-600 text-sm leading-snug">
              {highlightAchievements(achievements)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  // Coze 悬浮窗暴力注入逻辑 (原生 DOM 方式，确保必现)
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js";
    script.async = true;

    script.onload = () => {
      if (window.CozeWebSDK) {
        new window.CozeWebSDK.WebChatClient({
          config: {
            bot_id: "7608043554447147017",
          },
          componentProps: {
            title: "杨伟贤的 AI 数字分身",
          },
          auth: {
            type: "token",
            token:
              "pat_lH62R9GAwZd57PJWN8AY8uwADkzFhRPe0Ydnxt6J6wQisEqfGYRVBAGU07Ajzq0v",
            onRefreshToken: async () =>
              "pat_lH62R9GAwZd57PJWN8AY8uwADkzFhRPe0Ydnxt6J6wQisEqfGYRVBAGU07Ajzq0v",
          },
          userInfo: {
            id: "user_interview",
            nickname: "面试官",
          },
          ui: {
            baseCdnUrl: "https://lf-cdn.coze.cn",
          },
        });
      }
    };
    document.body.appendChild(script);
    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-[#F8F9FA] min-h-screen font-sans text-gray-800">
      <main className="w-[95%] max-w-[1440px] mx-auto py-12 space-y-10">
        {/* --- Module 1: Executive Profile (信息减负) --- */}
        <Section className="p-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Left side: Name and Website Description */}
            <div className="md:w-2/5 h-full flex flex-col justify-center items-center text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 !leading-tight">
                杨伟贤
              </h1>
              <p className="text-base text-gray-500 mt-2">
                Hi！欢迎来到我的个人网站
              </p>
            </div>
            {/* Right side: Basic Information */}
            <div className="md:w-3/5">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="flex flex-col gap-1 text-slate-600 text-base leading-snug">
                  <p>
                    <span className="font-semibold text-gray-800">
                      基本信息：
                    </span>
                    广东·深圳 | 1994/11
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      专业认证：
                    </span>
                    NPDP 国际认证 | 软件设计师 | 证券从业资格
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      联系方式：
                    </span>
                    17520499021 | 924204282@163.com
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      教育背景：
                    </span>
                    北京师范大学珠海分校 / 数字媒体技术 (理学学士) / 2013.09 -
                    2017.06
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* --- Module 2: Core Competencies (新增独立卡片) --- */}
        <div>
          <SectionTitle>核心能力 (Core Competencies)</SectionTitle>
          <Section className="p-6">
            <div className="flex flex-col space-y-2">
              <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl">
                <p className="font-semibold text-gray-800 mb-1">领域经验</p>
                <p className="text-slate-600 leading-snug">
                  拥有 7 年+
                  产品架构与孵化经验，深耕金融科技与企业数字化转型赛道。熟悉从 0
                  到 1
                  构筑产品生命周期，能够精准捕捉业务痛点，通过数据驱动与敏捷迭代实现产品商业价值最大化。
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
                <p className="font-semibold text-gray-800 mb-1">项目落地</p>
                <p className="text-gray-600 leading-snug">
                  具备十万级日活平台规划能力。曾主导并成功落地 IM
                  开放平台生态与高并发企业级文档矩阵，在私有化部署、高合规要求的金融级场景下，拥有极强的复杂系统重构与业务场景化改造经验。
                </p>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-xl">
                <p className="font-semibold text-gray-800 mb-1">综合素质</p>
                <p className="text-gray-600 leading-snug">
                  极具 Owner
                  意识与逆境破局能力。精通跨部门复杂协作与资源调度，能在高压环境下快速学习并拆解问题，带领跨职能研发团队高效对齐目标，保障核心战略如期兑现。
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* --- Module 3: Career Path (大卡片嵌套小卡片) --- */}
        <div>
          <SectionTitle>职业生涯 (Career Path)</SectionTitle>
          <div className="space-y-6">
            {/* 平安科技 */}
            <Section className="p-6">
              <div className="flex justify-between items-baseline mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  平安科技(深圳)有限公司
                </h3>
                <p className="text-gray-500 font-medium">
                  高级产品经理 (2020.12 - 至今)
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <NestedExperienceItem
                  title="开放生态基建"
                  responsibilities="从0到1搭建IM开放平台消息与应用生态。抽象并封装标准化前端SDK及后端API能力，打造应用自助上架、审批、分发到数据统计的全生命周期管理闭环。"
                  achievements="赋能集团数字化转型，成功支撑 500+ 内部应用高频调用，实现应用全生命周期自动化管理，每年稳定贡献超 3000万+ 次核心活跃交互，大幅降低跨部门协作摩擦成本。"
                />
                <NestedExperienceItem
                  title="AI商业化落地"
                  responsibilities="洞察智能化办公趋势，主导策划并落地【AI助理】与【AI咨询号】。将大模型能力与现有集团业务流深度融合，重塑员工日常办公与系统交互体验。"
                  achievements="突破内部数据孤岛，产品上线仅 2 个月即无缝打通集团 20+ 核心业务系统。为全集团超 20万+ 员工打造新一代智能化办公入口，显著降低组织内部信息获取成本。"
                />
                <NestedExperienceItem
                  title="协作效率重构"
                  responsibilities="聚焦金融高安全合规场景，主导云表格、多维表、云文档等SaaS协作工具的私有化改造与持续迭代，构建新一代企业级知识协同底座。"
                  achievements="深度契合金融高安全合规要求，完成场景化体验重塑，每日稳定支撑超 10万+ 名活跃员工的高并发线上协作，重构企业级知识流转链路。"
                />
              </div>
            </Section>

            {/* 凡泰极客 */}
            <Section className="p-6">
              <div className="flex justify-between items-baseline mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  凡泰极客科技有限公司
                </h3>
                <p className="text-gray-500 font-medium">
                  产品经理 (2017.10 - 2020.11)
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <NestedExperienceItem
                  title="产品建设"
                  responsibilities="深度参与企业级IM系统的核心架构设计，主导消息协作、动态审批流及智能机器人推送等关键功能矩阵的标准化落地。"
                  achievements="从 0 到 1 构筑企业级 IM 底座，沉淀标准化消息与协同能力，为后续金融客户的私有化部署和商业化 SaaS 拓展奠定坚实的产品架构基础。"
                />
                <NestedExperienceItem
                  title="项目合作（金融解决方案）"
                  responsibilities="深入一线金融客户场景，主导基础平台能力的定制化迭代，全程跟进并保障核心大客户（国盛证券、长城证券等）的私有化项目成功交付上线。"
                  achievements="打造标杆级券商服务案例，推动客户内部 IM 核心使用率从 17% 跃升至 68%，日均自动化处理工单超 300+，切实助力券商客户实现运营侧的降本增效。"
                />
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}
