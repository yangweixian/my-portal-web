"use client";

import React, { useEffect } from "react";

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

const CozeAgent: React.FC = () => {
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
            title: "AI 办公赛道专家",
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

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible itself
};

export default CozeAgent;
