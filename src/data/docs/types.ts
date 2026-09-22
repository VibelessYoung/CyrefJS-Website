import type { Locale } from "@/types/i18n";

export type LocalizedText = Record<Locale, string>;

export type DocCategory =
  | "getting-started"
  | "array"
  | "string"
  | "object"
  | "number"
  | "date"
  | "function"
  | "type"
  | "url"
  | "validation";

export interface DocParameter {
  name: string;
  type: string;
  required?: boolean;

  description: LocalizedText;

  defaultValue?: string;
}

export interface DocExample {
  title: LocalizedText;
  description?: LocalizedText;

  language?: "js" | "ts" | "jsx" | "tsx" | "bash" | "json";

  code: string;
}

export interface DocSection {
  id: string;
  title: LocalizedText;
  content: LocalizedText;
}

export interface DocPage {
  slug: string;
  category: DocCategory;

  title: LocalizedText;
  description: LocalizedText;

  icon?: string;

  parameters?: DocParameter[];

  returns?: {
    type: string;
    description: LocalizedText;
  };

  throws?: LocalizedText[];

  examples?: DocExample[];

  sections?: DocSection[];

  since?: string;
}
