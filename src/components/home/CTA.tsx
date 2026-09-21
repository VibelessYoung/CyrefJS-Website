"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";
import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

const GITHUB_URL = "https://github.com/VibelessYoung/CyrefJS";

export default function CTA() {
  const { theme } = useTheme();
  const params = useParams();

  const locale = params.locale as Locale;
  const t = translations[locale];

  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        dark:bg-[#050505]
        sm:py-32
      "
    >
      {/* Background */}
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
        {/* Main gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[80%]
            bg-[radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.12),transparent_65%)]
            dark:bg-[radial-gradient(circle_at_50%_100%,rgba(124,58,237,0.18),transparent_65%)]
          "
        />

        {/* Blue glow */}
        <div
          className="
            absolute
            bottom-[-30%]
            left-[10%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-blue-500/[0.06]
            blur-[130px]
            dark:bg-blue-500/[0.10]
          "
        />

        {/* Purple glow */}
        <div
          className="
            absolute
            bottom-[-30%]
            right-[10%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-violet-500/[0.06]
            blur-[130px]
            dark:bg-violet-500/[0.10]
          "
        />
      </div>

      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-black/[0.08]
            bg-gradient-to-br
            from-blue-500/[0.06]
            via-violet-500/[0.05]
            to-fuchsia-500/[0.06]
            px-6
            py-16
            text-center
            shadow-2xl
            shadow-black/[0.04]
            dark:border-white/[0.08]
            dark:from-blue-500/[0.10]
            dark:via-violet-500/[0.08]
            dark:to-fuchsia-500/[0.08]
            dark:shadow-black/20
            sm:px-10
            sm:py-20
          "
        >
          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-0
              h-40
              w-80
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-500/10
              blur-[90px]
              dark:bg-violet-500/20
            "
          />

          {/* Content */}
          <div className="relative">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-black/10
                bg-white/60
                px-3.5
                py-1.5
                text-xs
                font-medium
                tracking-wide
                text-black/60
                backdrop-blur-sm
                dark:border-white/10
                dark:bg-white/[0.06]
                dark:text-white/60
              "
            >
              {t.cta.eyebrow}
            </span>

            <h2
              className="
                mx-auto
                mt-6
                max-w-3xl
                text-4xl
                font-semibold
                tracking-tight
                text-black
                sm:text-5xl
                lg:text-6xl
                dark:text-white
              "
            >
              {t.cta.title}
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
              {t.cta.description}
            </p>

            {/* Actions */}
            <div
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <Link
                href={`/${locale}#quick-start`}
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-black
                  px-6
                  text-sm
                  font-medium
                  text-white
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  dark:bg-white
                  dark:text-black
                  dark:shadow-white/5
                "
              >
                {t.cta.getStarted}

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-black/10
                  bg-white/70
                  px-6
                  text-sm
                  font-medium
                  text-black/70
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-black/20
                  hover:bg-white
                  hover:text-black
                  dark:border-white/10
                  dark:bg-white/[0.04]
                  dark:text-white/70
                  dark:hover:border-white/20
                  dark:hover:bg-white/[0.08]
                  dark:hover:text-white
                "
              >
                <Image
                  src={
                    theme === "dark"
                      ? "/Icons/GitHub-Dark.svg"
                      : "/Icons/GitHub.svg"
                  }
                  alt=""
                  width={25}
                  height={25}
                  aria-hidden="true"
                />

                {t.cta.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
