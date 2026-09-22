"use client";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
interface CopyButtonProps {
  code: string;
  locale?: "en" | "fa";
}
export default function CopyButton({ code, locale = "en" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const isFa = locale === "fa";
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, 2000);
    } catch {
      setCopied(false);
    }
  }
  const copyLabel = copied
    ? isFa
      ? "کپی شد"
      : "Copied"
    : isFa
      ? "کپی"
      : "Copy";
  return (
    <button
      type="button"
      onClick={handleCopy}
      className=" inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/10 dark:hover:text-white "
      aria-label={copyLabel}
      title={copyLabel}
    >
      {" "}
      {copied ? (
        <>
          {" "}
          <Check className="size-3.5" /> <span>{copyLabel}</span>{" "}
        </>
      ) : (
        <>
          {" "}
          <Copy className="size-3.5" /> <span>{copyLabel}</span>{" "}
        </>
      )}{" "}
    </button>
  );
}
