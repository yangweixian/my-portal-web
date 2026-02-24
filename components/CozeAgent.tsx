"use client";

import React, { useEffect } from "react";

// Extensible options for the WebChatClient
interface WebChatClientOptions {
  config: {
    bot_id: string;
  };
  componentProps?: {
    title?: string;
  };
  auth?: {
    type: string;
    token: string;
    onRefreshToken: () => Promise<string>;
  };
  userInfo?: {
    id: string;
    nickname: string;
  };
  ui?: {
    baseCdnUrl: string;
  };
  el?: HTMLElement | null; // Add the 'el' property for embedding
}

// Define the client instance to include the showChatBot method
interface WebChatClientInstance {
  showChatBot: () => void;
}

interface CozeWebSDKType {
  WebChatClient: new (options: WebChatClientOptions) => WebChatClientInstance;
}

declare global {
  interface Window {
    CozeWebSDK: CozeWebSDKType | undefined;
  }
}

const CozeAgent: React.FC = () => {
  useEffect(() => {
    // Prevent script from running on the server
    if (typeof window === "undefined") {
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js";
    script.async = true;

    script.onload = () => {
      if (window.CozeWebSDK) {
        const isDesktop = window.innerWidth >= 1024; // Tailwind's 'lg' breakpoint

        const baseConfig: WebChatClientOptions = {
          config: {
            bot_id: "7608043554447147017",
          },
          componentProps: {
            title: "AI 办公赛道专家",
          },
          auth: {
            type: "token",
            token:
              "pat_cVKBzwa3ji6upMyI0DGqurVNawrGt89J5aaKnzRZXekVU18ZvXpaHtiSHFEHWkfK",
            onRefreshToken: async () =>
              "pat_cVKBzwa3ji6upMyI0DGqurVNawrGt89J5aaKnzRZXekVU18ZvXpaHtiSHFEHWkfK",
          },
        };

        if (isDesktop) {
          // --- Desktop: Embed the bot in the container ---
          const container = document.getElementById("coze-container");
          if (container) {
            const client = new window.CozeWebSDK.WebChatClient({
              ...baseConfig,
              el: container,
            });
            // Automatically show the chat interface
            client.showChatBot();
          }
        } else {
          // --- Mobile: Use the default floating button ---
          new window.CozeWebSDK.WebChatClient(baseConfig);
        }
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Clean up the container if the component unmounts
      const container = document.getElementById("coze-container");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  // Inject global CSS to ensure the bot is contained on desktop
  return (
    <style jsx global>{`
      @media (min-width: 1024px) {
        #coze-container > .web-chat-bot-container {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          box-shadow: none !important;
          border: none !important;
        }
        #coze-container .web-chat-bot-header {
          border-radius: 0 !important;
        }
      }
    `}</style>
  );
};

export default CozeAgent;
