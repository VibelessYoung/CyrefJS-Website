import type { DocPage } from "../../types";

export const groupByDoc: DocPage = {
  slug: "utilities/object/group-by",

  category: "array",

  title: {
    en: "groupBy",
    fa: "groupBy",
  },

  description: {
    en: "Groups array elements into an object using the value of a specified object property as the group key.",
    fa: "عناصر یک آرایه را با استفاده از مقدار یک property مشخص از هر آبجکت، در گروه‌های مختلف دسته‌بندی می‌کند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array of objects whose elements should be grouped.",
        fa: "آرایه‌ای از آبجکت‌ها که عناصر آن باید گروه‌بندی شوند.",
      },
    },
    {
      name: "key",
      type: "K",
      required: true,
      description: {
        en: "The property key whose value is used to determine the group for each element.",
        fa: "کلید property که مقدار آن برای تعیین گروه هر عنصر استفاده می‌شود.",
      },
    },
  ],

  returns: {
    type: "Record<string, T[]>",
    description: {
      en: "An object where each property represents a group and contains the array elements belonging to that group.",
      fa: "یک آبجکت که هر property آن نمایانگر یک گروه است و عناصر متعلق به آن گروه را در قالب یک آرایه نگه می‌دارد.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Group objects by the value of the specified property.",
        fa: "آبجکت‌ها را بر اساس مقدار property مشخص‌شده گروه‌بندی می‌کند.",
      },

      language: "ts",

      code: `import { groupBy } from "@cyref/js";

const users = [
  { name: "Amir", role: "developer" },
  { name: "Sara", role: "designer" },
  { name: "Reza", role: "developer" },
];

const result = groupBy(users, "role");

console.log(result);
// {
//   developer: [
//     { name: "Amir", role: "developer" },
//     { name: "Reza", role: "developer" },
//   ],
//   designer: [
//     { name: "Sara", role: "designer" },
//   ],
// }`,
    },

    {
      title: {
        en: "Group by category",
        fa: "گروه‌بندی بر اساس دسته‌بندی",
      },

      description: {
        en: "The key can be any property key available on the object type.",
        fa: "کلید می‌تواند هر property موجود در نوع آبجکت باشد.",
      },

      language: "ts",

      code: `import { groupBy } from "@cyref/js";

const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Phone", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
];

const result = groupBy(products, "category");

console.log(result);
// {
//   electronics: [
//     { name: "Laptop", category: "electronics" },
//     { name: "Phone", category: "electronics" },
//   ],
//   clothing: [
//     { name: "T-Shirt", category: "clothing" },
//   ],
// }`,
    },

    {
      title: {
        en: "Single-item groups",
        fa: "گروه‌های تک‌عضوی",
      },

      description: {
        en: "Values that occur only once create groups containing a single element.",
        fa: "مقادیر که فقط یک‌بار تکرار شده‌اند، گروه‌هایی شامل یک عنصر ایجاد می‌کنند.",
      },

      language: "ts",

      code: `import { groupBy } from "@cyref/js";

const items = [
  { id: 1, type: "a" },
  { id: 2, type: "b" },
  { id: 3, type: "a" },
];

const result = groupBy(items, "type");

console.log(result);
// {
//   a: [
//     { id: 1, type: "a" },
//     { id: 3, type: "a" },
//   ],
//   b: [
//     { id: 2, type: "b" },
//   ],
// }`,
    },

    {
      title: {
        en: "Empty array",
        fa: "آرایه خالی",
      },

      description: {
        en: "An empty input array produces an empty object.",
        fa: "یک آرایه ورودی خالی، یک آبجکت خالی برمی‌گرداند.",
      },

      language: "ts",

      code: `import { groupBy } from "@cyref/js";

const result = groupBy([], "type");

console.log(result);
// {}`,
    },
  ],

  since: "1.38.0",
};
