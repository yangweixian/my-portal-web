import Image from "next/image";
import {fetchProjects} from "../src/lib/sanity";

export default async function Home() {
  const projects = await fetchProjects();

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-between px-6 pb-16 pt-10 md:px-12 md:pt-16">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/40 text-xs font-semibold tracking-widest uppercase text-zinc-300">
              YW
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-medium text-zinc-100">
                我的个人门户
              </p>
              <p className="text-xs text-zinc-500">
                用内容讲述你的故事与作品。
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-3 text-xs text-zinc-500 sm:flex">
            <span className="h-px w-8 bg-zinc-800" />
            <span>基于 Next.js &amp; Sanity</span>
          </div>
        </header>

        <section className="mt-16 grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-8">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-50 md:text-5xl">
              把你的项目与想法，
              <span className="block text-zinc-400">
                都收纳在这个极简门户里。
              </span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              后台使用 Sanity 作为“云端数据库”，你在 Studio 中创建的每一个项目，
              都会自动出现在这个页面上。专注写内容，其它交给系统。
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <button className="rounded-full border border-zinc-700 bg-zinc-950 px-4 py-1.5 font-medium text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-zinc-500 hover:bg-zinc-900">
                进入管理后台
              </button>
              <a
                href="/studio"
                className="rounded-full border border-zinc-800 px-4 py-1.5 font-medium text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-100"
              >
                /studio
              </a>
              <span className="inline-flex items-center gap-2 text-[11px] text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                实时从云端读取内容
              </span>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 shadow-[0_0_120px_rgba(15,23,42,0.9)] backdrop-blur">
            <div className="flex items-center justify-between text-xs text-zinc-500">
              <span>项目列表</span>
              <span className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                {projects.length > 0
                  ? `共 ${projects.length} 个`
                  : "等待你在后台创建第一个项目"}
              </span>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-zinc-800 via-zinc-700/40 to-zinc-800" />

            {projects.length === 0 ? (
              <div className="space-y-2 rounded-xl border border-dashed border-zinc-800/80 bg-zinc-950/80 p-4 text-sm text-zinc-500">
                <p>还没有任何项目。</p>
                <p className="text-xs text-zinc-600">
                  打开 <code className="rounded bg-zinc-900 px-1.5 py-0.5">
                    /studio
                  </code>{" "}
                  ，点击“创建新项目”，发布后内容会自动出现在这里。
                </p>
              </div>
            ) : (
              <ul className="space-y-3">
                {projects.map((project) => (
                  <li
                    key={project._id}
                    className="group rounded-xl border border-zinc-800 bg-zinc-950/80 p-3 transition hover:border-zinc-600 hover:bg-zinc-900/80"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <h2 className="text-sm font-medium text-zinc-100">
                          {project.title}
                        </h2>
                        {project.summary && (
                          <p className="line-clamp-2 text-xs leading-relaxed text-zinc-500">
                            {project.summary}
                          </p>
                        )}
                      </div>
                      {project.coverImageUrl && (
                        <div className="relative h-14 w-24 overflow-hidden rounded-md border border-zinc-800/80 bg-zinc-900/80">
                          <Image
                            src={project.coverImageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                    </div>
                    {project.tags && project.tags.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-400 ring-1 ring-zinc-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <footer className="mt-16 flex items-center justify-between text-[11px] text-zinc-600">
          <span>© {new Date().getFullYear()} 我的个人门户</span>
          <span className="flex items-center gap-2">
            <span className="h-px w-6 bg-zinc-800" />
            <span>内容由 Sanity 托管 · 前端由 Next.js 驱动</span>
          </span>
        </footer>
      </main>
    </div>
  );
}

