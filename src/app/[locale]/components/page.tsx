"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  Code2,
  Component,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function ComponentsPage() {
  const pathname = usePathname();

  const isFa = pathname.startsWith("/fa");
  const locale = isFa ? "fa" : "en";

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20 text-slate-950 dark:bg-[#050505] dark:text-white"
    >
      {/* ================================================== */}
      {/* Background */}
      {/* ================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Blue glow */}
        <div className="absolute left-[25%] top-[25%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[140px] dark:bg-blue-500/[0.09]" />

        {/* Violet glow */}
        <div className="absolute right-[20%] top-[55%] h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[150px] dark:bg-violet-500/[0.10]" />

        {/* Indigo center */}
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.04] blur-[110px] dark:bg-indigo-500/[0.06]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-500/[0.025] via-transparent to-transparent dark:from-blue-500/[0.04]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#050505] dark:via-[#050505]/50" />
      </div>

      {/* ================================================== */}
      {/* Content */}
      {/* ================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Status */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-3.5 py-1.5 text-xs font-medium text-slate-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:text-white/45 dark:shadow-none">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400/40" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
          </span>

          {isFa ? "به‌زودی" : "Coming soon"}
        </div>

        {/* ================================================== */}
        {/* Visual */}
        {/* ================================================== */}

        <div className="relative mx-auto mb-10 h-52 w-full max-w-md">
          {/* Outer glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.10] blur-[70px] dark:bg-violet-500/[0.12]"
          />

          {/* Decorative cards */}
          <div className="absolute left-[8%] top-10 hidden h-24 w-32 -rotate-12 rounded-2xl border border-slate-200 bg-white/70 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none">
            <div className="p-4">
              <div className="h-2 w-12 rounded-full bg-slate-200 dark:bg-white/10" />
              <div className="mt-3 h-2 w-20 rounded-full bg-slate-100 dark:bg-white/[0.06]" />
              <div className="mt-2 h-2 w-14 rounded-full bg-slate-100 dark:bg-white/[0.06]" />
            </div>
          </div>

          <div className="absolute right-[8%] top-10 hidden h-24 w-32 rotate-12 rounded-2xl border border-slate-200 bg-white/70 shadow-xl backdrop-blur-xl sm:block dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none">
            <div className="flex h-full items-center justify-center">
              <Code2
                size={28}
                strokeWidth={1.3}
                className="text-blue-500/70 dark:text-blue-400/70"
              />
            </div>
          </div>

          {/* Main component card */}
          <div className="absolute left-1/2 top-1/2 flex h-32 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-slate-200 bg-white/80 shadow-[0_25px_70px_rgba(15,23,42,0.10)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/[0.07] text-violet-500 dark:border-violet-400/20 dark:bg-violet-400/[0.08] dark:text-violet-300">
              <Blocks size={30} strokeWidth={1.35} />
            </div>

            {/* corner glow */}
            <div className="absolute -right-1 -top-1 h-16 w-16 rounded-full bg-violet-500/10 blur-2xl" />
          </div>

          {/* Floating dots */}
          <span className="absolute left-[30%] top-3 h-1.5 w-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60" />
          <span className="absolute right-[28%] bottom-5 h-1.5 w-1.5 rounded-full bg-violet-500/60 dark:bg-violet-400/60" />
        </div>

        {/* ================================================== */}
        {/* Heading */}
        {/* ================================================== */}

        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-violet-500 dark:text-violet-400">
            <Sparkles size={13} strokeWidth={1.8} />

            {isFa ? "Component Library" : "Component Library"}
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            {isFa ? (
              <>
                کامپوننت‌ها
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  در راه هستند.
                </span>
              </>
            ) : (
              <>
                Components
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  are coming.
                </span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base dark:text-white/45">
            {isFa
              ? "یک مجموعه کامپوننت مدرن، قابل استفاده مجدد و هماهنگ با اکوسیستم CyrefJS در حال ساخته شدن است."
              : "A modern, reusable component library designed to fit naturally into the CyrefJS ecosystem is currently being built."}
          </p>
        </div>

        {/* ================================================== */}
        {/* Feature hints */}
        {/* ================================================== */}

        <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
          {[
            {
              icon: Component,
              en: "Reusable",
              fa: "قابل استفاده مجدد",
            },
            {
              icon: Layers3,
              en: "Composable",
              fa: "قابل ترکیب",
            },
            {
              icon: Code2,
              en: "Developer focused",
              fa: "مناسب توسعه‌دهنده",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.en}
                className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/60 px-4 py-3 text-xs font-medium text-slate-500 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.025] dark:text-white/45"
              >
                <Icon
                  size={15}
                  strokeWidth={1.6}
                  className="text-violet-500 dark:text-violet-400"
                />

                {isFa ? item.fa : item.en}
              </div>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* Actions */}
        {/* ================================================== */}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`/${locale}`}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-medium text-white shadow-[0_0_35px_rgba(99,102,241,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_0_45px_rgba(99,102,241,0.18)] dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            {isFa ? (
              <>
                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />

                <span>صفحه اصلی</span>
              </>
            ) : (
              <>
                <span>Back to home</span>

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </>
            )}
          </Link>

          <Link
            href={`/${locale}/docs`}
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 text-sm font-medium text-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.025] dark:text-white/70 dark:hover:border-white/20 dark:hover:bg-white/[0.05]"
          >
            <Code2 size={16} strokeWidth={1.8} />

            <span>{isFa ? "مشاهده مستندات" : "Browse documentation"}</span>

            {isFa ? (
              <ArrowLeft
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            ) : (
              <ArrowRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            )}
          </Link>
        </div>

        {/* Footer hint */}
        <p className="mt-10 text-[11px] text-slate-400 dark:text-white/25">
          {isFa
            ? "CyrefJS Components — در حال توسعه"
            : "CyrefJS Components — currently in development"}
        </p>
      </div>
    </main>
  );
}
