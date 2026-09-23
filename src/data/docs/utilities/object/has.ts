import type { DocPage } from "../../types";

export const hasDoc: DocPage = {
  slug: "utilities/object/has",
  category: "object",
  title: {
    en: "has",
    fa: "has",
  },
  description: {
    en: "Checks whether an object has its own property with the specified key.",
    fa: "بررسی می‌کند که آیا یک شیء دارای ویژگی مستقیم با کلید مشخص‌شده است یا خیر.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object to check.",
        fa: "شیئی که باید بررسی شود.",
      },
    },
    {
      name: "key",
      type: "PropertyKey",
      required: true,
      description: {
        en: "The property key to check. It can be a string, number, or symbol.",
        fa: "کلید ویژگی مورد بررسی. می‌تواند رشته، عدد یا Symbol باشد.",
      },
    },
  ],
  returns: {
    type: "boolean",
    description: {
      en: "true if the object has the specified key as its own property; otherwise, false.",
      fa: "اگر شیء کلید مشخص‌شده را به‌عنوان یک ویژگی مستقیم داشته باشد true و در غیر این صورت false.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

has(user, "name");
// true

has(user, "email");
// false`,
    },
    {
      title: {
        en: "Own properties only",
        fa: "فقط ویژگی‌های مستقیم",
      },
      language: "ts",
      code: `const parent = {
  name: "Amir",
};

const user = Object.create(parent);

has(user, "name");
// false`,
    },
    {
      title: {
        en: "Inherited properties",
        fa: "ویژگی‌های ارث‌بری‌شده",
      },
      language: "ts",
      code: `const parent = {
  role: "admin",
};

const user = Object.create(parent);

has(user, "role");
// false`,
    },
    {
      title: {
        en: "Undefined values",
        fa: "مقادیر undefined",
      },
      language: "ts",
      code: `const data = {
  value: undefined,
};

has(data, "value");
// true`,
    },
    {
      title: {
        en: "Null values",
        fa: "مقادیر null",
      },
      language: "ts",
      code: `const data = {
  value: null,
};

has(data, "value");
// true`,
    },
    {
      title: {
        en: "Symbol keys",
        fa: "کلیدهای Symbol",
      },
      language: "ts",
      code: `const id = Symbol("id");

const user = {
  [id]: 123,
};

has(user, id);
// true`,
    },
    {
      title: {
        en: "Numeric keys",
        fa: "کلیدهای عددی",
      },
      language: "ts",
      code: `const data = {
  1: "one",
};

has(data, 1);
// true`,
    },
    {
      title: {
        en: "Falsy values",
        fa: "مقادیر falsy",
      },
      language: "ts",
      code: `const data = {
  count: 0,
  active: false,
  name: "",
};

has(data, "count");
// true

has(data, "active");
// true

has(data, "name");
// true`,
    },
  ],
  sections: [
    {
      id: "own-properties",
      title: {
        en: "Own properties",
        fa: "ویژگی‌های مستقیم",
      },
      content: {
        en: "The function checks only whether the key belongs directly to the object. Properties inherited through the prototype chain are not considered.",
        fa: "این تابع فقط بررسی می‌کند که کلید مستقیماً متعلق به خود شیء باشد. ویژگی‌هایی که از زنجیره prototype به ارث رسیده‌اند در نظر گرفته نمی‌شوند.",
      },
    },
    {
      id: "property-key",
      title: {
        en: "PropertyKey",
        fa: "PropertyKey",
      },
      content: {
        en: "The key parameter uses the PropertyKey type, so string, number, and symbol keys can be checked.",
        fa: "پارامتر key از نوع PropertyKey است، بنابراین می‌توان کلیدهای رشته‌ای، عددی و Symbol را بررسی کرد.",
      },
    },
    {
      id: "undefined",
      title: {
        en: "Undefined properties",
        fa: "ویژگی‌های undefined",
      },
      content: {
        en: "A property whose value is undefined still counts as an existing property. The function checks whether the key exists, not whether its value is defined.",
        fa: "ویژگی‌ای که مقدار آن undefined باشد همچنان یک ویژگی موجود محسوب می‌شود. این تابع وجود کلید را بررسی می‌کند، نه تعریف‌شده بودن مقدار آن را.",
      },
    },
  ],
  since: "1.38.0",
};
