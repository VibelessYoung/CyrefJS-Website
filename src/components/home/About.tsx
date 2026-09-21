"use client";

import { Braces, Sparkles, Zap } from "lucide-react";

import { useParams } from "next/navigation";

import { translations } from "@/i18n";

import type { Locale } from "@/types/i18n";

const features = [
  {
    key: "simple",
    icon: Braces,
    gradient: "from-blue-700 to-cyan-600",
    border: "border-blue-950",
  },
  {
    key: "fast",
    icon: Zap,
    gradient: "from-red-700 to-orange-600",
    border: "border-red-950",
  },
  {
    key: "flexible",
    icon: Sparkles,
    gradient: "from-yellow-600 to-amber-700",
    border: "border-amber-950",
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
    bg-[#030507]
    py-28
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
    overflow-hidden
  "
      >
        {/* Black base */}
        <div className="absolute inset-0 bg-[#030507]" />

        {/* Center blue atmosphere */}
        <div
          className="
      absolute
      inset-0
      bg-[radial-gradient(
        ellipse_75%_85%_at_50%_45%,
        rgba(30,64,175,0.18)_0%,
        rgba(30,64,175,0.10)_28%,
        rgba(30,64,175,0.045)_52%,
        rgba(30,64,175,0.015)_68%,
        transparent_82%
      )]
    "
        />

        {/* Soft central glow */}
        <div
          className="
      absolute
      left-1/2
      top-1/2
      h-[500px]
      w-[900px]
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-blue-600/[0.055]
      blur-[150px]
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
              dark:text-white/40
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
            dark:border-white/[0.10]
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
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Icon */}
                <div
                  className={`
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border-[5px]
                    ${feature.border}
                    bg-gradient-to-br
                    ${feature.gradient}
                  `}
                >
                  <Icon size={25} strokeWidth={1.8} className="text-white" />
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
