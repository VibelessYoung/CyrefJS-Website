import { codeToHtml } from "shiki";
import CopyButton from "./CopyButton";
interface CodeBlockProps {
  code: string;
  language?: string;
  locale?: "en" | "fa";
}
const languageLabels: Record<string, string> = {
  js: "JavaScript",
  ts: "TypeScript",
  jsx: "JSX",
  tsx: "TSX",
  bash: "Bash",
  json: "JSON",
  text: "Text",
};
export default async function CodeBlock({
  code,
  language = "text",
  locale = "en",
}: CodeBlockProps) {
  const html = await codeToHtml(code, {
    lang: language,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
  const languageLabel = languageLabels[language] ?? language;
  return (
    <div
      dir="ltr"
      className=" overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 "
    >
      {" "}
      <div className=" flex items-center justify-between border-b border-zinc-200 px-4 py-2.5 dark:border-white/10 ">
        {" "}
        <span className=" font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500 ">
          {" "}
          {languageLabel}{" "}
        </span>{" "}
        <CopyButton code={code} locale={locale} />{" "}
      </div>{" "}
      <div
        className=" overflow-x-auto p-5 font-mono text-sm leading-6 [&_pre]:m-0 [&_pre]:bg-transparent "
        dangerouslySetInnerHTML={{ __html: html }}
      />{" "}
    </div>
  );
}
