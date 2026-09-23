import type { DocPage } from "../../types";

export const invertDoc: DocPage = {
  slug: "utilities/object/invert",
  category: "object",
  title: {
    en: "invert",
    fa: "invert",
  },
  description: {
    en: "Creates a new object by using the original object's values as keys and its keys as values.",
    fa: "یک شیء جدید ایجاد می‌کند که در آن مقادیر شیء اصلی به کلید و کلیدهای شیء اصلی به مقدار تبدیل می‌شوند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object whose keys and values should be inverted.",
        fa: "شیئی که کلیدها و مقادیر آن باید معکوس شوند.",
      },
    },
  ],
  returns: {
    type: "Record<string, keyof T>",
    description: {
      en: "A new object whose stringified values from the original object are keys and whose original keys are values.",
      fa: "یک شیء جدید که کلیدهای آن مقادیر تبدیل‌شده به رشته از شیء اصلی و مقادیر آن کلیدهای شیء اصلی هستند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      language: "ts",
      code: `const roles = {
  admin: "administrator",
  user: "member",
};

invert(roles);
// {
//   administrator: "admin",
//   member: "user",
// }`,
    },
    {
      title: {
        en: "Numeric values",
        fa: "مقادیر عددی",
      },
      language: "ts",
      code: `const status = {
  pending: 1,
  success: 2,
  failed: 3,
};

invert(status);
// {
//   "1": "pending",
//   "2": "success",
//   "3": "failed",
// }`,
    },
    {
      title: {
        en: "Boolean values",
        fa: "مقادیر boolean",
      },
      language: "ts",
      code: `const flags = {
  enabled: true,
  disabled: false,
};

invert(flags);
// {
//   "true": "enabled",
//   "false": "disabled",
// }`,
    },
    {
      title: {
        en: "Duplicate values",
        fa: "مقادیر تکراری",
      },
      language: "ts",
      code: `const roles = {
  admin: "user",
  member: "user",
};

invert(roles);
// {
//   user: "member",
// }`,
    },
    {
      title: {
        en: "Values are converted to strings",
        fa: "مقادیر به رشته تبدیل می‌شوند",
      },
      language: "ts",
      code: `const data = {
  first: 10,
  second: 20,
};

invert(data);
// {
//   "10": "first",
//   "20": "second",
// }`,
    },
    {
      title: {
        en: "Empty object",
        fa: "شیء خالی",
      },
      language: "ts",
      code: `invert({});
// {}`,
    },
    {
      title: {
        en: "Original object is unchanged",
        fa: "شیء اصلی تغییر نمی‌کند",
      },
      language: "ts",
      code: `const data = {
  first: "one",
  second: "two",
};

const result = invert(data);

console.log(data);
// {
//   first: "one",
//   second: "two",
// }`,
    },
  ],
  sections: [
    {
      id: "inversion",
      title: {
        en: "How it works",
        fa: "نحوه عملکرد",
      },
      content: {
        en: "The function iterates over the object's own enumerable string-keyed properties. For each property, its value is converted to a string and used as a key in the resulting object, while the original key becomes the value.",
        fa: "این تابع روی ویژگی‌های رشته‌ای، قابل‌شمارش و مستقیم شیء پیمایش می‌کند. برای هر ویژگی، مقدار آن به رشته تبدیل شده و به‌عنوان کلید در شیء جدید قرار می‌گیرد و کلید اصلی به مقدار تبدیل می‌شود.",
      },
    },
    {
      id: "duplicate-values",
      title: {
        en: "Duplicate values",
        fa: "مقادیر تکراری",
      },
      content: {
        en: "If multiple properties have the same value after string conversion, the later property overwrites the earlier one because the result uses a single key for that value.",
        fa: "اگر چند ویژگی پس از تبدیل مقدار به رشته، مقدار یکسانی داشته باشند، ویژگی بعدی مقدار قبلی را overwrite می‌کند؛ چون نتیجه برای آن مقدار فقط یک کلید دارد.",
      },
    },
    {
      id: "enumerable-properties",
      title: {
        en: "Enumerable properties",
        fa: "ویژگی‌های قابل شمارش",
      },
      content: {
        en: "The implementation uses Object.keys, so only the object's own enumerable string-keyed properties are included. Inherited and symbol-keyed properties are ignored.",
        fa: "این implementation از Object.keys استفاده می‌کند، بنابراین فقط ویژگی‌های مستقیم، قابل‌شمارش و دارای کلید رشته‌ای وارد نتیجه می‌شوند. ویژگی‌های inherited و کلیدهای Symbol نادیده گرفته می‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
