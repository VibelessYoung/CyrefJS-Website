"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";

import LanguageSwitcher from "@/components/navigation/LanguageSwitcher";
import ThemeButton from "@/components/navigation/ThemeButton";

import { translations } from "@/i18n";
import type { Locale } from "@/types/i18n";

const navigation = [
  {
    key: "install",
    href: "/installation",
  },
  {
    key: "docs",
    href: "/docs",
  },
  {
    key: "components",
    href: "/components",
  },
] as const;

export default function Header() {
  const params = useParams();
  const locale = params.locale as Locale;
  const t = translations[locale];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent page scroll while mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500
          ease-out
          ${
            isScrolled
              ? "border-b border-black/5 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#050505]/75"
              : "border-b border-transparent bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-20
            w-full
            max-w-7xl
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-10
          "
        >
          {/* Logo */}

          <Link
            href={`/${locale}`}
            onClick={closeMobileMenu}
            className="
              relative
              z-10
              shrink-0
              text-xl
              font-bold
              tracking-tight
              text-black
              dark:text-white
            "
          >
            <span>Cyref</span>
            <span className="text-black/40 dark:text-white/40">JS</span>
          </Link>

          {/* Desktop Navigation */}

          <nav
            aria-label="Main navigation"
            className="
              absolute
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-1
              md:flex
            "
          >
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-black/60
                  transition-all
                  duration-300
                  hover:bg-black/5
                  hover:text-black
                  dark:text-white/60
                  dark:hover:bg-white/10
                  dark:hover:text-white
                "
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}

          <div className="hidden items-center gap-1 md:flex">
            {/* Language */}

            <div
              className="
                rounded-full
                transition-colors
                duration-300
                hover:bg-black/5
                dark:hover:bg-white/10
              "
            >
              <LanguageSwitcher />
            </div>

            {/* Theme */}

            <div
              className="
                rounded-full
                transition-colors
                duration-300
                hover:bg-black/5
                dark:hover:bg-white/10
              "
            >
              <ThemeButton />
            </div>

            {/* GitHub */}

            <Link
              href="https://github.com/VibelessYoung/CyrefJS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.header.github}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-black/70
                transition-all
                duration-300
                hover:bg-black/5
                hover:text-black
                dark:text-white/70
                dark:hover:bg-white/10
                dark:hover:text-white
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="h-[18px] w-[18px]"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="
              relative
              z-10
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-black/70
              transition-all
              duration-300
              hover:bg-black/5
              hover:text-black
              md:hidden
              dark:text-white/70
              dark:hover:bg-white/10
              dark:hover:text-white
            "
          >
            {isMobileOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed
          inset-0
          z-40
          md:hidden
          ${
            isMobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
          transition-opacity
          duration-300
        `}
      >
        {/* Backdrop */}

        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMobileMenu}
          className="
            absolute
            inset-0
            cursor-default
            bg-black/10
            backdrop-blur-sm
            dark:bg-black/40
          "
        />

        {/* Menu Panel */}

        <div
          className={`
            absolute
            inset-x-4
            top-24
            overflow-hidden
            rounded-3xl
            border
            border-black/5
            bg-white/95
            shadow-2xl
            shadow-black/10
            backdrop-blur-2xl
            transition-all
            duration-500
            dark:border-white/10
            dark:bg-[#08090a]/95
            dark:shadow-black/40
            ${
              isMobileOpen
                ? "translate-y-0 scale-100"
                : "-translate-y-4 scale-[0.98]"
            }
          `}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col p-3">
            {navigation.map((item, index) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                onClick={closeMobileMenu}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-4
                  py-4
                  text-base
                  font-medium
                  text-black/65
                  transition-all
                  duration-300
                  hover:bg-black/5
                  hover:text-black
                  dark:text-white/65
                  dark:hover:bg-white/10
                  dark:hover:text-white
                "
                style={{
                  transitionDelay: isMobileOpen ? `${index * 40}ms` : "0ms",
                }}
              >
                <span>{t.nav[item.key]}</span>

                <span
                  className="
                    text-black/20
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-black/50
                    dark:text-white/20
                    dark:group-hover:text-white/50
                  "
                >
                  →
                </span>
              </Link>
            ))}

            {/* Mobile Actions */}

            <div
              className="
                mt-2
                flex
                items-center
                justify-between
                border-t
                border-black/5
                px-2
                pt-3
                dark:border-white/10
              "
            >
              <div className="flex items-center gap-1">
                <div
                  className="
                    rounded-full
                    transition-colors
                    duration-300
                    hover:bg-black/5
                    dark:hover:bg-white/10
                  "
                >
                  <LanguageSwitcher />
                </div>

                <div
                  className="
                    rounded-full
                    transition-colors
                    duration-300
                    hover:bg-black/5
                    dark:hover:bg-white/10
                  "
                >
                  <ThemeButton />
                </div>
              </div>

              <Link
                href="https://github.com/VibelessYoung/CyrefJS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.header.github}
                onClick={closeMobileMenu}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  text-black/65
                  transition-all
                  duration-300
                  hover:bg-black/5
                  hover:text-black
                  dark:text-white/65
                  dark:hover:bg-white/10
                  dark:hover:text-white
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-[18px] w-[18px]"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.13c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.26 5.68.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
