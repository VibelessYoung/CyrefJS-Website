"use client";

import {
  Braces,
  CalendarDays,
  CheckCircle2,
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
    utilities: ["clamp()", "random()", "round()", "sum()"],
  },
  {
    key: "date",
    icon: CalendarDays,
    gradient: "from-pink-500 to-rose-400",
    utilities: ["format()", "isToday()", "isValid()", "add()"],
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
    utilities: ["parse()", "build()", "query()", "isValid()"],
  },
  {
    key: "validation",
    icon: ShieldCheck,
    gradient: "from-red-500 to-pink-500",
    utilities: ["isEmail()", "isURL()", "isUUID()", "isJSON()"],
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
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[-15%]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/5
            blur-[140px]
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute
            right-[-15%]
            top-[35%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-violet-500/5
            blur-[140px]
            dark:bg-violet-500/10
          "
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-black/10
              bg-black/[0.03]
              px-3.5
              py-1.5
              text-xs
              font-medium
              tracking-wide
              text-black/60
              dark:border-white/10
              dark:bg-white/[0.04]
              dark:text-white/60
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

          <CheckCircle2 size={14} />
        </div>
      </div>
    </section>
  );
}
