(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-portal-web/components/CozeAgent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portal$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portal-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const CozeAgent = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portal$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CozeAgent.useEffect": ()=>{
            const script = document.createElement("script");
            script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js";
            script.async = true;
            script.onload = ({
                "CozeAgent.useEffect": ()=>{
                    if (window.CozeWebSDK) {
                        new window.CozeWebSDK.WebChatClient({
                            config: {
                                bot_id: "7608043554447147017"
                            },
                            componentProps: {
                                title: "AI 办公赛道专家"
                            },
                            auth: {
                                type: "token",
                                token: "pat_cVKBzwa3ji6upMyI0DGqurVNawrGt89J5aaKnzRZXekVU18ZvXpaHtiSHFEHWkfK",
                                onRefreshToken: {
                                    "CozeAgent.useEffect": async ()=>"pat_cVKBzwa3ji6upMyI0DGqurVNawrGt89J5aaKnzRZXekVU18ZvXpaHtiSHFEHWkfK"
                                }["CozeAgent.useEffect"]
                            },
                            userInfo: {
                                id: "user_interview",
                                nickname: "面试官"
                            },
                            ui: {
                                baseCdnUrl: "https://lf-cdn.coze.cn"
                            }
                        });
                    }
                }
            })["CozeAgent.useEffect"];
            document.body.appendChild(script);
            return ({
                "CozeAgent.useEffect": ()=>{
                    if (document.body.contains(script)) {
                        document.body.removeChild(script);
                    }
                }
            })["CozeAgent.useEffect"];
        }
    }["CozeAgent.useEffect"], []);
    return null; // This component doesn't render anything visible itself
};
_s(CozeAgent, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = CozeAgent;
const __TURBOPACK__default__export__ = CozeAgent;
var _c;
__turbopack_context__.k.register(_c, "CozeAgent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-portal-web_components_CozeAgent_tsx_00b25701._.js.map