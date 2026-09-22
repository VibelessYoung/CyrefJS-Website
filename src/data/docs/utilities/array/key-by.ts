import type { DocPage } from "../../types";

export const keyByDoc: DocPage = {
  slug: "utilities/array/key-by",

  category: "array",

  title: {
    en: "keyBy",
    fa: "keyBy",
  },

  description: {
    en: "Converts an array of objects into an object keyed by the value of a specified property.",
    fa: "یک آرایه از آبجکت‌ها را به آبجکتی تبدیل می‌کند که کلیدهای آن بر اساس مقدار یک property مشخص ساخته می‌شوند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array of objects to convert into a keyed object.",
        fa: "آرایه‌ای از آبجکت‌ها که باید به یک آبجکت کلیدگذاری‌شده تبدیل شود.",
      },
    },
    {
      name: "key",
      type: "K",
      required: true,
      description: {
        en: "The property key whose value is used as the key in the resulting object.",
        fa: "کلید property که مقدار آن به‌عنوان کلید در آبجکت خروجی استفاده می‌شود.",
      },
    },
  ],

  returns: {
    type: "Record<string, T>",
    description: {
      en: "An object where each key is created from the specified property value and maps to the corresponding array element.",
      fa: "یک آبجکت که هر کلید آن از مقدار property مشخص‌شده ساخته شده و به عنصر متناظر آرایه اشاره می‌کند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Create an object keyed by the id property of each item.",
        fa: "یک آبجکت بر اساس مقدار id هر آیتم ایجاد می‌کند.",
      },

      language: "ts",

      code: `import { keyBy } from "@cyref/js";

const users = [
  { id: "1", name: "Amir" },
  { id: "2", name: "Sara" },
  { id: "3", name: "Reza" },
];

const result = keyBy(users, "id");

console.log(result);
// {
//   "1": { id: "1", name: "Amir" },
//   "2": { id: "2", name: "Sara" },
//   "3": { id: "3", name: "Reza" },
// }`,
    },

    {
      title: {
        en: "Using another property",
        fa: "استفاده از property دیگر",
      },

      description: {
        en: "The key can be any property available on the object type.",
        fa: "کلید می‌تواند هر property موجود در نوع آبجکت باشد.",
      },

      language: "ts",

      code: `import { keyBy } from "@cyref/js";

const products = [
  { sku: "LP-01", name: "Laptop" },
  { sku: "PH-01", name: "Phone" },
  { sku: "TB-01", name: "Tablet" },
];

const result = keyBy(products, "sku");

console.log(result);
// {
//   "LP-01": { sku: "LP-01", name: "Laptop" },
//   "PH-01": { sku: "PH-01", name: "Phone" },
//   "TB-01": { sku: "TB-01", name: "Tablet" },
// }`,
    },

    {
      title: {
        en: "Duplicate keys",
        fa: "کلیدهای تکراری",
      },

      description: {
        en: "If multiple elements have the same key value, the later element replaces the previous element.",
        fa: "اگر چند عنصر مقدار یکسانی برای کلید داشته باشند، عنصر بعدی جایگزین عنصر قبلی می‌شود.",
      },

      language: "ts",

      code: `import { keyBy } from "@cyref/js";

const users = [
  { id: "1", name: "Amir" },
  { id: "2", name: "Sara" },
  { id: "1", name: "Reza" },
];

const result = keyBy(users, "id");

console.log(result);
// {
//   "1": { id: "1", name: "Reza" },
//   "2": { id: "2", name: "Sara" },
// }`,
    },

    {
      title: {
        en: "Empty array",
        fa: "آرایه خالی",
      },

      description: {
        en: "An empty array produces an empty object.",
        fa: "یک آرایه خالی، یک آبجکت خالی ایجاد می‌کند.",
      },

      language: "ts",

      code: `import { keyBy } from "@cyref/js";

const result = keyBy([], "id");

console.log(result);
// {}`,
    },
  ],

  since: "1.38.0",
};
