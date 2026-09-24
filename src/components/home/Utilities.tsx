"use client";

import {
  Braces,
  CalendarDays,
  Clock3,
  Code2,
  Hash,
  Link2,
  List,
  ShieldCheck,
  Type,
  Zap,
} from "lucide-react";
import { useParams } from "next/navigation";

import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

const utilities = [
  {
    key: "array",
    icon: List,
    gradient: "from-blue-500 to-cyan-400",
    utilities: ["chunk()", "compact()", "flatten()", "unique()"],
  },
  {
    key: "string",
    icon: Type,
    gradient: "from-violet-500 to-fuchsia-400",
    utilities: ["capitalize()", "camelCase()", "truncate()", "slugify()"],
  },
  {
    key: "object",
    icon: Braces,
    gradient: "from-emerald-500 to-teal-400",
    utilities: ["pick()", "omit()", "get()", "set()"],
  },
  {
    key: "number",
    icon: Hash,
    gradient: "from-orange-500 to-amber-400",
    utilities: ["clamp()", "randomInt()", "roundTo()", "lerp()"],
  },
  {
    key: "date",
    icon: CalendarDays,
    gradient: "from-pink-500 to-rose-400",
    utilities: ["isDate()", "addDays()", "isBefore()", "isAfter()"],
  },
  {
    key: "function",
    icon: Zap,
    gradient: "from-yellow-400 to-orange-400",
    utilities: ["debounce()", "throttle()", "once()", "memoize()"],
  },
  {
    key: "type",
    icon: Code2,
    gradient: "from-sky-500 to-indigo-500",
    utilities: ["isString()", "isNumber()", "isArray()", "isObject()"],
  },
  {
    key: "url",
    icon: Link2,
    gradient: "from-cyan-500 to-blue-500",
    utilities: [
      "parseQuery()",
      "buildQuery()",
      "getQueryParam()",
      "setQueryParam()",
    ],
  },
  {
    key: "validation",
    icon: ShieldCheck,
    gradient: "from-red-500 to-pink-500",
    utilities: ["isEmail()", "isURL()", "isInteger()", "isPositive()"],
  },
] as const;

export default function Utilities() {
  const params = useParams();

  const locale = params.locale as Locale;
  const t = translations[locale];

  return (
    <section
      id="utilities"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        dark:bg-[#050505]
        sm:py-36
      "
    >
      {/* Background atmosphere */}
      {/* Main atmosphere */}
      <div
        className="
    absolute
    inset-0
    bg-[radial-gradient(
      ellipse_75%_80%_at_50%_40%,
      rgba(37,99,235,0.10)_0%,
      rgba(37,99,235,0.05)_30%,
      rgba(37,99,235,0.02)_55%,
      transparent_80%
    )]
    dark:bg-[radial-gradient(
      ellipse_75%_80%_at_50%_40%,
      rgba(37,99,235,0.18)_0%,
      rgba(37,99,235,0.10)_28%,
      rgba(37,99,235,0.04)_52%,
      transparent_80%
    )]
  "
      />

      {/* Blue */}
      <div
        className="
    absolute
    -left-[15%]
    bottom-[10%]
    h-[600px]
    w-[600px]
    rounded-full
    bg-blue-500/[0.05]
    blur-[150px]
    dark:bg-blue-600/[0.13]
  "
      />

      {/* Violet */}
      <div
        className="
    absolute
    -right-[15%]
    top-[10%]
    h-[600px]
    w-[600px]
    rounded-full
    bg-violet-500/[0.045]
    blur-[150px]
    dark:bg-violet-600/[0.12]
  "
      />

      {/* Center */}
      <div
        className="
    absolute
    left-1/2
    top-[50%]
    h-[600px]
    w-[1000px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-blue-500/[0.025]
    blur-[180px]
    dark:bg-blue-500/[0.065]
  "
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
    text-xs
    font-medium
    tracking-[0.12em]
    text-black/35
    dark:text-white/35
  "
          >
            {t.utilities.eyebrow}
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-semibold
              tracking-tight
              text-black
              sm:text-5xl
              dark:text-white
            "
          >
            {t.utilities.title}
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-black/55
              dark:text-white/55
              sm:text-lg
            "
          >
            {t.utilities.description}
          </p>
        </div>

        {/* Utility cards */}
        <div
          className="
            mx-auto
            mt-20
            grid
            max-w-6xl
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {utilities.map((item) => {
            const Icon = item.icon;
            const content = t.utilities.categories[item.key];

            return (
              <div
                key={item.key}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-black/[0.08]
                  bg-black/[0.015]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-black/[0.14]
                  hover:bg-black/[0.025]
                  dark:border-white/[0.08]
                  dark:bg-white/[0.02]
                  dark:hover:border-white/[0.14]
                  dark:hover:bg-white/[0.035]
                "
              >
                {/* Hover glow */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-32
                    w-32
                    rounded-full
                    bg-gradient-to-br
                    ${item.gradient}
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-20
                  `}
                />

                {/* Icon */}
                <div
                  className={`
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${item.gradient}
                    shadow-lg
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  `}
                >
                  <Icon size={21} strokeWidth={2} className="text-white" />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-black
                      dark:text-white
                    "
                  >
                    {content.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-6
                      text-black/50
                      dark:text-white/50
                    "
                  >
                    {content.description}
                  </p>
                </div>

                {/* Utility list */}
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {item.utilities.map((utility) => (
                    <span
                      key={utility}
                      dir="ltr"
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-lg
                        border
                        border-black/[0.07]
                        bg-black/[0.025]
                        px-2.5
                        py-1.5
                        font-mono
                        text-[11px]
                        text-black/55
                        transition-colors
                        duration-300
                        group-hover:border-black/10
                        group-hover:text-black/70
                        dark:border-white/[0.07]
                        dark:bg-white/[0.025]
                        dark:text-white/50
                        dark:group-hover:border-white/10
                        dark:group-hover:text-white/70
                      "
                    >
                      <span className="text-black/25 dark:text-white/25">
                        #
                      </span>
                      {utility}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div
          className="
            mx-auto
            mt-12
            flex
            max-w-xl
            items-center
            justify-center
            gap-2
            text-center
            text-xs
            text-black/40
            dark:text-white/35
          "
        >
          <Clock3 size={14} />

          <span>{t.utilities.bottomNote}</span>
        </div>
      </div>
    </section>
  );
}
