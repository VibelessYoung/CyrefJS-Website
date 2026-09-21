"use client";

import { Braces, Sparkles, Zap } from "lucide-react";
import { useParams } from "next/navigation";

import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

const features = [
  {
    key: "simple",
    icon: Braces,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    key: "fast",
    icon: Zap,
    gradient: "from-red-500 to-orange-400",
  },
  {
    key: "flexible",
    icon: Sparkles,
    gradient: "from-yellow-400 to-amber-500",
  },
] as const;

export default function About() {
  const params = useParams();

  const locale = params.locale as Locale;
  const t = translations[locale];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        py-28
        dark:bg-[#050505]
        sm:py-36
      "
    >
      {/* ==================================================
          Background atmosphere
      ================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-0
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
            bg-blue-500/[0.035]
            blur-[120px]
            dark:bg-blue-500/[0.06]
          "
        />

        <div
          className="
            absolute
            right-[-15%]
            bottom-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-purple-500/[0.035]
            blur-[120px]
            dark:bg-purple-500/[0.06]
          "
        />
      </div>

      {/* ==================================================
          Content
      ================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          px-5
          sm:px-8
        "
      >
        {/* Heading */}

        <div className="max-w-3xl">
          <span
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-black/35
              dark:text-white/35
            "
          >
            {t.about.eyebrow}
          </span>

          <h2
            className="
              mt-5
              text-4xl
              font-semibold
              tracking-[-0.04em]
              text-black
              dark:text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            {t.about.title}
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-black/50
              dark:text-white/50
              sm:text-lg
              sm:leading-9
            "
          >
            {t.about.description}
          </p>
        </div>

        {/* Features */}

        <div
          className="
            mt-20
            grid
            grid-cols-1
            gap-12
            border-t
            border-black/[0.08]
            pt-14
            dark:border-white/[0.08]
            sm:grid-cols-3
            sm:gap-8
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.key}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Icon */}

                <div
                  className={`
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    ${feature.gradient}
                    shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]
                  `}
                >
                  <Icon size={25} strokeWidth={1.8} className="text-white" />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      bg-white/20
                      opacity-0
                      blur-md
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-6
                    text-base
                    font-semibold
                    tracking-tight
                    text-black
                    dark:text-white
                  "
                >
                  {t.about.features[feature.key].title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    max-w-xs
                    text-sm
                    leading-7
                    text-black/45
                    dark:text-white/45
                  "
                >
                  {t.about.features[feature.key].description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
