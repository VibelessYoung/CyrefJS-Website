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
        dark:bg-[#05070d]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================================
          Section atmosphere
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Top fade */}

        <div
          className="
          hidden
          dark:visible
            absolute
            inset-x-0
            top-0
            h-40
            bg-gradient-to-b
            from-black/50
            to-transparent
          "
        />

        {/* Bottom fade */}

        <div
          className="
          hidden
          dark:visible
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-black/70
            to-transparent
          "
        />

        {/* Ambient blue glow */}

        <div
          className="
            absolute
            left-[10%]
            top-1/2
            h-[450px]
            w-[450px]
            -translate-y-1/2
            rounded-full
            bg-cyan-500/[0.035]
            blur-[150px]
          "
        />

        {/* Ambient violet glow */}

        <div
          className="
            absolute
            right-[5%]
            top-1/2
            h-[450px]
            w-[450px]
            -translate-y-1/2
            rounded-full
            bg-blue-500/[0.04]
            blur-[160px]
          "
        />
      </div>

      {/* =========================================================
          Container
      ========================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1180px]
          px-5
          sm:px-8
          lg:px-0
        "
      >
        {/* =======================================================
            Main CTA card
        ======================================================== */}

        <div
          className="
            relative
            min-h-[590px]
            overflow-hidden
            rounded-[1.15rem]
            border
            border-white/[0.10]
            bg-[#102340]
            shadow-[0_30px_100px_rgba(0,0,0,0.45)]
            sm:min-h-[620px]
            lg:min-h-[680px]
          "
        >
          {/* =====================================================
              Card background
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
            "
          >
            {/* Base gradient */}

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(108deg,#193d52_0%,#173654_30%,#18345a_54%,#1d4a7d_78%,#173761_100%)]
              "
            />

            {/* Cyan light - left */}

            <div
              className="
                absolute
                left-[-10%]
                top-[-18%]
                h-[560px]
                w-[560px]
                rounded-full
                bg-cyan-400/[0.22]
                blur-[120px]
              "
            />

            {/* Blue light - right */}

            <div
              className="
                absolute
                right-[-8%]
                top-[12%]
                h-[560px]
                w-[560px]
                rounded-full
                bg-blue-500/[0.20]
                blur-[125px]
              "
            />

            {/* Center atmospheric light */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[650px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-sky-400/[0.06]
                blur-[120px]
              "
            />

            {/* Dark vignette */}

            <div
              className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,transparent_18%,rgba(4,12,25,0.10)_52%,rgba(3,8,18,0.42)_100%)]
              "
            />

            {/* =================================================
                Stars / particles
            ================================================== */}

            <div
              className="
                absolute
                inset-0
                opacity-70
                [background-image:radial-gradient(circle,rgba(255,255,255,0.40)_0.65px,transparent_0.9px)]
                [background-size:72px_72px]
                [background-position:12px_18px]
              "
            />

            <div
              className="
                absolute
                inset-0
                opacity-40
                [background-image:radial-gradient(circle,rgba(255,255,255,0.30)_0.55px,transparent_0.85px)]
                [background-size:113px_113px]
                [background-position:44px_62px]
              "
            />

            {/* Edge darkening */}

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(to_bottom,rgba(0,0,0,0.14),transparent_18%,transparent_82%,rgba(0,0,0,0.22))]
              "
            />
          </div>

          {/* =====================================================
              Card border highlight
          ====================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[1.15rem]
              ring-1
              ring-inset
              ring-white/[0.045]
            "
          />

          {/* =====================================================
              Content
          ====================================================== */}

          <div
            className="
              relative
              flex
              min-h-[590px]
              flex-col
              items-center
              justify-center
              px-6
              py-20
              text-center
              sm:min-h-[620px]
              sm:px-10
              lg:min-h-[680px]
              lg:px-16
            "
          >
            {/* =================================================
                Eyebrow
            ================================================== */}

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-white/[0.10]
                bg-white/[0.055]
                px-3.5
                py-1.5
                text-[11px]
                font-medium
                tracking-wide
                text-white/65
                shadow-[0_8px_30px_rgba(0,0,0,0.10)]
                backdrop-blur-md
              "
            >
              {t.cta.eyebrow}
            </span>

            {/* =================================================
                Title
            ================================================== */}

            <h2
              className="
                mx-auto
                mt-7
                max-w-[850px]
                text-balance
                text-[clamp(2.5rem,5.8vw,5rem)]
                font-semibold
                leading-[0.94]
                tracking-[-0.065em]
                text-white
              "
            >
              {t.cta.title}
            </h2>

            {/* =================================================
                Description
            ================================================== */}

            <p
              className="
                mx-auto
                mt-7
                max-w-[620px]
                text-pretty
                text-[13px]
                leading-7
                text-white/55
                sm:text-[15px]
                sm:leading-8
              "
            >
              {t.cta.description}
            </p>

            {/* =================================================
                Actions
            ================================================== */}

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
              {/* Get Started */}

              <Link
                href={`/${locale}#quick-start`}
                className="
                  group
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  px-7
                  text-sm
                  font-medium
                  text-indigo-600
                  shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.24)]
                  active:translate-y-0
                "
              >
                {t.cta.getStarted}

                <ArrowRight
                  size={15}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* GitHub */}

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.10]
                  bg-white/[0.045]
                  px-6
                  text-sm
                  font-medium
                  text-white/70
                  shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-white/[0.18]
                  hover:bg-white/[0.08]
                  hover:text-white
                  active:translate-y-0
                "
              >
                <Image
                  src={
                    theme === "dark"
                      ? "/Icons/GitHub-Dark.svg"
                      : "/Icons/GitHub.svg"
                  }
                  alt=""
                  width={20}
                  height={20}
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
