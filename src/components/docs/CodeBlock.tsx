import { codeToHtml } from "shiki";

import CopyButton from "./CopyButton";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default async function CodeBlock({
  code,
  language = "text",
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
    defaultColor: false,
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-zinc-950">
      <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-2.5 dark:border-white/10">
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
          {language}
        </span>

        <CopyButton code={code} />
      </div>

      <div
        className="overflow-x-auto p-5 text-sm leading-7 [&_pre]:m-0 [&_pre]:bg-transparent"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
