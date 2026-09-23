"use client";

import "./globals.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Home, Terminal } from "lucide-react";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function NotFound() {
  const pathname = usePathname();

  const isFa = pathname.startsWith("/fa");
  const homeHref = isFa ? "/fa" : "/en";

  return (
    <ThemeProvider>
      <main
        dir={isFa ? "rtl" : "ltr"}
        className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20 text-slate-950 dark:bg-[#050505] dark:text-white ${
          isFa ? "font-[Vazirmatn]" : "font-sans"
        }`}
      >
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Blue Glow */}
          <div className="absolute left-[35%] top-[30%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[130px] dark:bg-blue-500/[0.10]" />

          {/* Violet Glow */}
          <div className="absolute left-[65%] top-[65%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[140px] dark:bg-violet-500/[0.10]" />

          {/* Center Glow */}
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.035] blur-[100px] dark:bg-indigo-500/[0.06]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]" />

          {/* Top Ambient Gradient */}
          <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-blue-500/[0.035] via-violet-500/[0.015] to-transparent dark:from-blue-500/[0.055] dark:via-violet-500/[0.025] dark:to-transparent" />

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#050505]" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl text-center">
          {/* Status */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:text-white/45 dark:shadow-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400/40" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
            </span>

            {isFa ? "صفحه پیدا نشد" : "Page not found"}
          </div>

          {/* 404 */}
          <div className="relative select-none">
            {/* Ambient 404 Glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-[80px] dark:bg-violet-500/[0.10]"
            />

            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center text-[clamp(7rem,25vw,15rem)] font-black tracking-[-0.08em] text-violet-950/[0.035] dark:text-violet-200/[0.025]"
            >
              404
            </span>

            <h1 className="relative bg-gradient-to-br from-slate-950 via-slate-800 to-violet-600 bg-clip-text text-[clamp(6rem,20vw,12rem)] font-black leading-none tracking-[-0.08em] text-transparent dark:from-white dark:via-white dark:to-violet-300">
              404
            </h1>
          </div>

          {/* Content */}
          <div className="mx-auto mt-6 max-w-xl">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/70 text-violet-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:text-violet-300 dark:shadow-none">
              <Terminal size={20} strokeWidth={1.6} />
            </div>

            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {isFa ? "این صفحه وجود ندارد." : "This page doesn't exist."}
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-white/45 sm:text-base">
              {isFa
                ? "صفحه‌ای که به دنبال آن هستید وجود ندارد یا ممکن است جابه‌جا شده باشد."
                : "The page you're looking for doesn't exist or may have been moved."}
            </p>
          </div>

          {/* Action */}
          <div className="mt-9">
            <Link
              href={homeHref}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-medium text-white shadow-[0_0_35px_rgba(99,102,241,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_0_45px_rgba(99,102,241,0.20)] dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              <Home size={16} strokeWidth={1.8} />

              <span>{isFa ? "بازگشت به صفحه اصلی" : "Back to home"}</span>

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
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
