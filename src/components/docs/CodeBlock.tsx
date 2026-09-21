"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="
        group relative
        my-7 overflow-hidden
        rounded-2xl
        border border-black/[0.08]
        bg-[#fafafa]
        dark:border-white/[0.08]
        dark:bg-[#0b0b0b]
      "
    >
      <div
        className="
          flex h-11
          items-center justify-between
          border-b border-black/[0.07]
          px-4
          dark:border-white/[0.07]
        "
      >
        <span
          className="
            font-mono text-[11px]
            uppercase tracking-wider
            text-zinc-400
          "
        >
          {language}
        </span>

        <button
          type="button"
          onClick={copyCode}
          className="
            inline-flex items-center gap-1.5
            rounded-md
            px-2 py-1.5
            text-xs
            text-zinc-500
            transition-colors
            hover:bg-black/[0.05]
            hover:text-zinc-900
            dark:text-zinc-400
            dark:hover:bg-white/[0.06]
            dark:hover:text-white
          "
        >
          {copied ? (
            <>
              <Check size={13} />
              Copied
            </>
          ) : (
            <>
              <Copy size={13} />
              Copy
            </>
          )}
        </button>
      </div>

      <pre
        dir="ltr"
        className="
          overflow-x-auto
          p-5
          font-mono text-[13px]
          leading-7
          text-zinc-800
          dark:text-zinc-300
        "
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
