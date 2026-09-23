"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Copy,
  Download,
  Package,
  Terminal,
} from "lucide-react";
import { useState } from "react";

type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

const commands: Record<PackageManager, string> = {
  npm: "npm install @cyref/js",
  pnpm: "pnpm add @cyref/js",
  yarn: "yarn add @cyref/js",
  bun: "bun add @cyref/js",
};

const packageManagers: PackageManager[] = ["npm", "pnpm", "yarn", "bun"];

export default function InstallationPage() {
  const pathname = usePathname();

  const isFa = pathname.startsWith("/fa");
  const locale = isFa ? "fa" : "en";

  const [activeManager, setActiveManager] = useState<PackageManager>("npm");

  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(commands[activeManager]);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-white text-slate-950 dark:bg-[#050505] dark:text-white"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Blue glow */}
        <div className="absolute left-[22%] top-[18%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[140px] dark:bg-blue-500/[0.09]" />

        {/* Violet glow */}
        <div className="absolute right-[15%] top-[38%] h-[480px] w-[480px] rounded-full bg-violet-500/[0.06] blur-[150px] dark:bg-violet-500/[0.08]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-[55%] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-indigo-500/[0.035] blur-[130px] dark:bg-indigo-500/[0.045]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-500/[0.025] via-transparent to-transparent dark:from-blue-500/[0.04]" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-white via-white/60 to-transparent dark:from-[#050505] dark:via-[#050505]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035] dark:text-white/45 dark:shadow-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400/40" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400" />
            </span>

            {isFa ? "شروع کار با CyrefJS" : "Get started with CyrefJS"}
          </div>

          {/* Heading */}
          <h1 className="text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
            {isFa ? (
              <>
                نصب در چند ثانیه.
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  شروع سریع.
                </span>
              </>
            ) : (
              <>
                Install in seconds.
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  Start building.
                </span>
              </>
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base dark:text-white/45">
            {isFa
              ? "CyrefJS را به پروژه خود اضافه کنید و مجموعه‌ای از utilityهای سبک و کاربردی JavaScript را در اختیار داشته باشید."
              : "Add CyrefJS to your project and get a collection of lightweight, practical JavaScript utilities."}
          </p>
        </section>

        {/* Installation */}
        <section className="mx-auto mt-16 max-w-3xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/75 shadow-[0_25px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none">
            {/* Card header */}
            <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-4 sm:px-6 dark:border-white/10">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 dark:border-white/10 dark:bg-white/[0.035] dark:text-white/60">
                <Download size={17} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  {isFa ? "نصب پکیج" : "Install the package"}
                </h2>

                <p className="mt-0.5 text-xs text-slate-400 dark:text-white/30">
                  {isFa
                    ? "Package manager موردنظر خود را انتخاب کنید."
                    : "Choose your preferred package manager."}
                </p>
              </div>
            </div>

            {/* Package managers */}
            <div className="grid grid-cols-4 border-b border-slate-200 dark:border-white/10">
              {packageManagers.map((manager) => {
                const active = activeManager === manager;

                return (
                  <button
                    key={manager}
                    type="button"
                    onClick={() => {
                      setActiveManager(manager);
                      setCopied(false);
                    }}
                    className={`relative h-12 text-xs font-medium transition-colors ${
                      active
                        ? "text-slate-950 dark:text-white"
                        : "text-slate-400 hover:text-slate-700 dark:text-white/30 dark:hover:text-white/60"
                    }`}
                  >
                    {manager}

                    {active && (
                      <span className="absolute inset-x-5 bottom-0 h-px bg-slate-950 dark:bg-white" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Command */}
            <div className="p-4 sm:p-5">
              <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 font-mono text-sm dark:border-white/10 dark:bg-black/20">
                <Terminal
                  size={16}
                  strokeWidth={1.7}
                  className="shrink-0 text-violet-500 dark:text-violet-400"
                />

                <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-slate-700 dark:text-white/75">
                  <span className="mr-2 select-none text-slate-400 dark:text-white/25">
                    $
                  </span>
                  {commands[activeManager]}
                </code>

                <button
                  type="button"
                  onClick={copyCommand}
                  aria-label={
                    isFa ? "کپی دستور نصب" : "Copy installation command"
                  }
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {copied ? (
                    <Check
                      size={16}
                      strokeWidth={2}
                      className="text-emerald-500"
                    />
                  ) : (
                    <Copy size={16} strokeWidth={1.8} />
                  )}
                </button>
              </div>

              <p className="mt-3 text-center text-[11px] text-slate-400 dark:text-white/25">
                {copied
                  ? isFa
                    ? "دستور کپی شد."
                    : "Command copied."
                  : isFa
                    ? "برای کپی کردن روی آیکون کلیک کنید."
                    : "Click the copy icon to copy the command."}
              </p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="mx-auto mt-24 max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-500 dark:text-violet-400">
              {isFa ? "شروع سریع" : "Quick start"}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              {isFa ? "بعد از نصب چه کار کنیم؟" : "What comes next?"}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Import */}
            <div className="group rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-white/15">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-violet-500 dark:border-white/10 dark:bg-white/[0.035] dark:text-violet-300">
                  <Package size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-xs text-slate-400 dark:text-white/30">
                    01
                  </p>

                  <h3 className="text-sm font-semibold">
                    {isFa ? "ایمپورت کردن" : "Import what you need"}
                  </h3>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 dark:border-white/10">
                <pre className="overflow-x-auto p-5 text-left text-sm leading-7 text-white/80">
                  <code>{`import { isEmail } from "@cyref/js";`}</code>
                </pre>
              </div>
            </div>

            {/* Use */}
            <div className="group rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.025] dark:hover:border-white/15">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-violet-500 dark:border-white/10 dark:bg-white/[0.035] dark:text-violet-300">
                  <Terminal size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-xs text-slate-400 dark:text-white/30">
                    02
                  </p>

                  <h3 className="text-sm font-semibold">
                    {isFa ? "استفاده کنید" : "Start using it"}
                  </h3>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 dark:border-white/10">
                <pre className="overflow-x-auto p-5 text-left text-sm leading-7 text-white/80">
                  <code>{`const valid = isEmail(
  "hello@example.com"
);

console.log(valid);
// true`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Version / Requirements */}
        <section className="mx-auto mt-8 max-w-5xl">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/60 p-6 dark:border-white/10 dark:bg-white/[0.02]">
              <p className="text-xs font-medium text-slate-400 dark:text-white/30">
                {isFa ? "نسخه فعلی" : "Current version"}
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="font-mono text-lg font-semibold">1.38.0</span>

                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2 py-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                  stable
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/60 p-6 dark:border-white/10 dark:bg-white/[0.02]">
              <p className="text-xs font-medium text-slate-400 dark:text-white/30">
                {isFa ? "پشتیبانی" : "Works with"}
              </p>

              <div className="mt-3 text-sm font-medium">
                JavaScript · TypeScript
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-24 max-w-3xl text-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/70 px-6 py-12 shadow-[0_25px_80px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:px-10 dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-[80px] dark:bg-violet-500/[0.10]"
            />

            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-500 dark:text-violet-400">
                {isFa ? "آماده‌ای؟" : "Ready?"}
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                {isFa
                  ? "ابزار مناسب خودت را پیدا کن."
                  : "Find the utility you need."}
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500 dark:text-white/40">
                {isFa
                  ? "مستندات CyrefJS را بررسی کن و تمام utilityهای موجود را ببین."
                  : "Explore the CyrefJS documentation and discover all available utilities."}
              </p>

              <Link
                href={`/${locale}/docs`}
                className="group mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 text-sm font-medium text-white shadow-[0_0_35px_rgba(99,102,241,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_0_45px_rgba(99,102,241,0.18)] dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                <span>{isFa ? "مشاهده مستندات" : "Browse documentation"}</span>

                {isFa ? (
                  <ArrowRight
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                ) : (
                  <ChevronRight
                    size={15}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                )}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
