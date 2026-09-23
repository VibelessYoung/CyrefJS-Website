import type { DocPage } from "../../types";

export const isArrayDoc: DocPage = {
  slug: "utilities/array/is-array",
  category: "type",
  title: {
    en: "isArray",
    fa: "isArray",
  },
  description: {
    en: "Checks whether a value is an array and provides a TypeScript type guard for array narrowing.",
    fa: "بررسی می‌کند که آیا یک مقدار آرایه است یا نه و به‌عنوان type guard در TypeScript باعث narrow شدن نوع به آرایه می‌شود.",
  },
  icon: "List",
  parameters: [
    {
      name: "value",
      type: "unknown",
      required: true,
      description: {
        en: "The value to check.",
        fa: "مقداری که باید بررسی شود.",
      },
    },
  ],
  returns: {
    type: "value is unknown[]",
    description: {
      en: "Returns true when the value is an array; otherwise returns false. When true, TypeScript narrows the value to unknown[].",
      fa: "اگر مقدار آرایه باشد true و در غیر این صورت false برمی‌گرداند. در صورت true بودن، TypeScript نوع مقدار را به unknown[] محدود می‌کند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether a value is an array.",
        fa: "بررسی اینکه یک مقدار آرایه است یا خیر.",
      },
      language: "ts",
      code: `isArray([1, 2, 3]);
// true

isArray("hello");
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "Type narrowing",
      },
      description: {
        en: "The function can narrow an unknown value to unknown[] inside a conditional block.",
        fa: "این تابع می‌تواند یک مقدار unknown را داخل یک شرط به unknown[] محدود کند.",
      },
      language: "ts",
      code: `const value: unknown = [1, 2, 3];

if (isArray(value)) {
  value.length;
  // value is narrowed to unknown[]
}`,
    },
    {
      title: {
        en: "Empty arrays",
        fa: "آرایه‌های خالی",
      },
      description: {
        en: "Empty arrays are still recognized as arrays.",
        fa: "آرایه‌های خالی نیز به‌عنوان آرایه شناسایی می‌شوند.",
      },
      language: "ts",
      code: `isArray([]);
// true`,
    },
    {
      title: {
        en: "Other values",
        fa: "مقادیر دیگر",
      },
      description: {
        en: "Objects, null, primitives, and other non-array values return false.",
        fa: "آبجکت‌ها، null، مقادیر primitive و سایر مقادیر غیرآرایه‌ای false برمی‌گردانند.",
      },
      language: "ts",
      code: `isArray({});
// false

isArray(null);
// false

isArray(42);
// false

isArray("hello");
// false`,
    },
  ],
  sections: [
    {
      id: "implementation",
      title: {
        en: "Implementation",
        fa: "نحوه پیاده‌سازی",
      },
      content: {
        en: "The function delegates the runtime check directly to JavaScript's built-in Array.isArray().",
        fa: "این تابع بررسی زمان اجرا را مستقیماً به Array.isArray() داخلی JavaScript واگذار می‌کند.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type guard",
        fa: "Type guard",
      },
      content: {
        en: "The return type is `value is unknown[]`, making the function a TypeScript type guard. After a successful check, TypeScript can treat the value as an array of unknown elements within the narrowed scope.",
        fa: "نوع بازگشتی `value is unknown[]` است و باعث می‌شود تابع به‌عنوان TypeScript type guard عمل کند. پس از موفق بودن بررسی، TypeScript می‌تواند مقدار را در محدوده narrow شده به‌عنوان آرایه‌ای از عناصر unknown در نظر بگیرد.",
      },
    },
    {
      id: "runtime-behavior",
      title: {
        en: "Runtime behavior",
        fa: "رفتار در زمان اجرا",
      },
      content: {
        en: "The check recognizes actual JavaScript arrays, including empty arrays. It returns false for objects that merely resemble arrays.",
        fa: "این بررسی آرایه‌های واقعی JavaScript، از جمله آرایه‌های خالی، را شناسایی می‌کند. آبجکت‌هایی که فقط ظاهری شبیه آرایه دارند false دریافت می‌کنند.",
      },
    },
  ],
  since: "1.38.0",
};
