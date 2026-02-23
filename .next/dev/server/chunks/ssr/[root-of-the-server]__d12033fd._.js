module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/my-portal-web/components/CozeAgent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portal$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-portal-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const CozeAgent = ()=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$portal$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const script = document.createElement("script");
        script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.19/libs/cn/index.js";
        script.async = true;
        script.onload = ()=>{
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
                        onRefreshToken: async ()=>"pat_cVKBzwa3ji6upMyI0DGqurVNawrGt89J5aaKnzRZXekVU18ZvXpaHtiSHFEHWkfK"
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
        };
        document.body.appendChild(script);
        return ()=>{
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);
    return null; // This component doesn't render anything visible itself
};
const __TURBOPACK__default__export__ = CozeAgent;
}),
"[project]/my-portal-web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/my-portal-web/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/my-portal-web/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d12033fd._.js.map