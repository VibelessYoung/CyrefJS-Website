"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Search, Terminal } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const isFa = pathname.startsWith("/fa");

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20 text-slate-950 dark:bg-[#050505] dark:text-white"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200/40 blur-[120px] dark:bg-white/[0.025]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-white/10" />
      </div>

      <div className="relative z-10 w-full max-w-3xl text-center">
        {/* Status */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] dark:text-white/45 dark:shadow-none">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-white/40" />
          {isFa ? "صفحه پیدا نشد" : "Page not found"}
        </div>

        {/* 404 */}
        <div className="relative select-none">
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-[clamp(7rem,25vw,15rem)] font-black tracking-[-0.08em] text-slate-950/[0.035] dark:text-white/[0.025]"
          >
            404
          </span>

          <h1 className="relative text-[clamp(6rem,20vw,12rem)] font-black leading-none tracking-[-0.08em] text-slate-900 dark:text-white">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="mx-auto mt-6 max-w-xl">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 dark:border-white/10 dark:bg-white/[0.035] dark:text-white/60">
            <Terminal size={20} strokeWidth={1.6} />
          </div>

          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {isFa ? "این صفحه وجود ندارد." : "This page doesn't exist."}
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-white/45 sm:text-base">
            {isFa
              ? "به نظر می‌رسد آدرسی که دنبال آن هستید وجود ندارد یا جابه‌جا شده است."
              : "The page you're looking for doesn't exist or may have been moved."}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={isFa ? "/fa" : "/en"}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            <Home size={16} strokeWidth={1.8} />

            <span>{isFa ? "صفحه اصلی" : "Back to home"}</span>

            {isFa ? (
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            ) : (
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            )}
          </Link>

          <Link
            href={isFa ? "/fa/docs" : "/en/docs"}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 text-sm font-medium text-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.025] dark:text-white/75 dark:hover:border-white/20 dark:hover:bg-white/[0.05]"
          >
            <Search size={16} strokeWidth={1.8} />

            <span>{isFa ? "مشاهده مستندات" : "Browse documentation"}</span>
          </Link>
        </div>

        {/* Bottom path */}
        <div className="mt-10 text-xs text-slate-400 dark:text-white/25">
          <code className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 font-mono dark:border-white/10 dark:bg-white/[0.025]">
            {pathname}
          </code>
        </div>
      </div>
    </main>
  );
}
