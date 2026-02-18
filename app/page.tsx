"use client";
import React, { useEffect } from 'react';

// Type definition for Coze Web SDK on the window object
declare global {
  interface Window {
    CozeWebSDK: any;
  }
}

// Reusable component for the main content sections
const Section = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={`bg-white rounded-3xl shadow-sm border border-gray-100 ${className}`}>
    {children}
  </section>
);

// Reusable component for section titles
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
    {children}
  </h2>
);

// Reusable component for capsule tags
const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-sm whitespace-nowrap">
    {children}
  </span>
);

// Reusable component for detailed list items in the experience section
const ExperienceDetailItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <p className="font-semibold text-gray-800">
      {title}
    </p>
    <p className="text-gray-600 leading-relaxed mt-1">
      {children}
    </p>
  </div>
);

export default function Home() {
  // Coze 悬浮窗暴力注入逻辑 (原生 DOM 方式，确保必现)
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js";
    script.async = true;

    script.onload = () => {
      if (window.CozeWebSDK) {
        new window.CozeWebSDK.WebChatClient({
          config: {
            bot_id: '7608043554447147017',
          },
          componentProps: {
            title: '杨伟贤的 AI 数字分身',
          },
          auth: {
            type: 'token',
            token: 'pat_lH62R9GAwZd57PJWN8AY8uwADkzFhRPe0Ydnxt6J6wQisEqfGYRVBAGU07Ajzq0v',
            onRefreshToken: async () => 'pat_lH62R9GAwZd57PJWN8AY8uwADkzFhRPe0Ydnxt6J6wQisEqfGYRVBAGU07Ajzq0v',
          },
          userInfo: {
            id: 'user_interview',
            nickname: '面试官',
          },
          ui: {
            baseCdnUrl: 'https://lf-cdn.coze.cn',
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
      <main className="w-[95%] max-w-[1440px] mx-auto py-12 md:py-20 space-y-12">

        {/* --- Module 1: Executive Profile --- */}
        <Section className="p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 !leading-tight">杨伟贤</h1>
              <p className="text-xl text-gray-500 mt-2">AI 与金融科技产品经理</p>
              <div className="flex flex-wrap gap-2 mt-6">
                <Tag>广东·深圳</Tag>
                <Tag>NPDP 国际认证</Tag>
                <Tag>证券从业资格</Tag>
                <Tag>软件设计师</Tag>
              </div>
            </div>
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-semibold text-gray-500 text-sm tracking-wider uppercase mb-3">核心能力基建</h3>
                <ul className="space-y-2 text-gray-600 leading-relaxed">
                  <li>精通 Agent 智能体编排与企业级知识库逻辑</li>
                  <li>熟悉全牌照金融生态与高并发底层架构设计</li>
                  <li>擅长从非结构化市场噪音中剥离关键特征，构建数据驱动模型</li>
                </ul>
              </div>
              <div className="text-sm text-gray-500 border-t border-gray-100 pt-4">
                <span>北京师范大学 / 数字媒体技术 (理学学士)</span>
                <span className="mx-2">|</span>
                <span>Email: 924204282@163.com</span>
                <span className="mx-2">|</span>
                <span>7年金融科技产品孵化经验</span>
              </div>
            </div>
          </div>
        </Section>

        {/* --- Module 2: Deep-Dive Experience --- */}
        <div>
          <SectionTitle>职业生涯 (Career Path)</SectionTitle>
          <div className="space-y-8">
            <Section className="p-8 md:p-10">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xl font-bold text-gray-900">平安科技(深圳)有限公司</h3>
                <p className="text-gray-500 font-medium">高级产品经理 (2020.12 - 至今)</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                <ExperienceDetailItem title="开放生态基建">
                  主导平安集团 IM 开放平台及应用生态的从 0 到 1 建设。通过提供一整套前端 SDK 及后端 API 能力，构建完整的应用与消息生态自助上架、生命周期管理流程。支撑 500+ 集团应用高频调用，每年创造 3000万+ 次活跃交互。
                </ExperienceDetailItem>
                <ExperienceDetailItem title="AI 商业化落地">
                  前瞻性主导大模型产品创新，规划并上线【AI 助理】与【AI 咨询号】。攻克了复杂内部系统的数据孤岛难题，上线 2 个月即无缝打通集团 20+ 核心业务系统，为 20万+ 员工提供新一代智能化办公体验。
                </ExperienceDetailItem>
                <ExperienceDetailItem title="协作效率重构">
                  负责集团云表格、多维表、云文档等创新工具结合金融业态的场景化改造与体验迭代，每日支撑 10万+ 活跃员工的线上高并发协作。
                </ExperienceDetailItem>
              </div>
            </Section>

            <Section className="p-8 md:p-10">
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-xl font-bold text-gray-900">凡泰极客科技有限公司</h3>
                <p className="text-gray-500 font-medium">产品经理 (2017.10 - 2020.11)</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <ExperienceDetailItem title="企业级 IM 架构">
                  深入参与构建企业级 IM 系统的核心功能矩阵，从底层打通消息协作、复杂审批流与智能机器人自动推送工作流。
                </ExperienceDetailItem>
                <ExperienceDetailItem title="金融行业赋能">
                  主导将 IM 基础能力向头部券商客户做商业化输出。深入拆解券商痛点，落地国盛证券、长城证券项目。通过对核心业务场景的改造，实现客户内部 IM 使用率从 17% 大幅跃升至 68%，日均自动化处理工单量达到 300+。
                </ExperienceDetailItem>
              </div>
            </Section>
          </div>
        </div>

        {/* --- Module 3: Impact Metrics --- */}
        <div>
          <SectionTitle>商业价值与业务成果 (Business Value & Impact)</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Section className="p-8 text-center">
              <p className="text-5xl md:text-6xl font-bold text-blue-600">3000万+</p>
              <p className="font-semibold text-gray-800 mt-3">年活跃调用量</p>
              <p className="text-gray-500 text-sm mt-1">推动 500+ 应用上线，覆盖 20万+ 员工</p>
            </Section>
            <Section className="p-8 text-center">
              <p className="text-5xl md:text-6xl font-bold text-blue-600">20+</p>
              <p className="font-semibold text-gray-800 mt-3">打通核心业务系统</p>
              <p className="text-gray-500 text-sm mt-1">仅用 2 个月完成 AI 助理落地，支撑 10万+ DAU 协作</p>
            </Section>
            <Section className="p-8 text-center">
              <p className="text-5xl md:text-6xl font-bold text-blue-600">17% ➔ 68%</p>
              <p className="font-semibold text-gray-800 mt-3">核心工具使用率跃升</p>
              <p className="text-gray-500 text-sm mt-1">赋能头部券商数字化转型，日均解决工单 300+</p>
            </Section>
          </div>
        </div>

      </main>
    </div>
  );
}
