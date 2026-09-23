import type { DocPage } from "../../types";

export const omitDoc: DocPage = {
  slug: "utilities/object/omit",
  category: "object",
  title: {
    en: "omit",
    fa: "omit",
  },
  description: {
    en: "Creates a new object without the specified own enumerable properties.",
    fa: "یک شیء جدید بدون ویژگی‌های مشخص‌شده ایجاد می‌کند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object from which properties should be omitted.",
        fa: "شیئی که باید ویژگی‌ها از آن حذف شوند.",
      },
    },
    {
      name: "keys",
      type: "K[]",
      required: true,
      description: {
        en: "An array of keys to remove from the resulting object.",
        fa: "آرایه‌ای از کلیدهایی که باید از شیء خروجی حذف شوند.",
      },
    },
  ],
  returns: {
    type: "Omit<T, K>",
    description: {
      en: "A new object containing the properties of the original object except for the specified keys.",
      fa: "یک شیء جدید شامل ویژگی‌های شیء اصلی، به‌جز کلیدهای مشخص‌شده.",
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
  role: "developer",
};

omit(user, ["age"]);
// {
//   name: "Amir",
//   role: "developer",
// }`,
    },
    {
      title: {
        en: "Omit multiple properties",
        fa: "حذف چند ویژگی",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
  role: "developer",
};

omit(user, ["age", "role"]);
// {
//   name: "Amir",
// }`,
    },
    {
      title: {
        en: "Empty keys",
        fa: "آرایه کلید خالی",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

omit(user, []);
// {
//   name: "Amir",
//   age: 22,
// }`,
    },
    {
      title: {
        en: "Omitting all properties",
        fa: "حذف تمام ویژگی‌ها",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

omit(user, ["name", "age"]);
// {}`,
    },
    {
      title: {
        en: "Original object is unchanged",
        fa: "شیء اصلی تغییر نمی‌کند",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

const result = omit(user, ["age"]);

console.log(user);
// {
//   name: "Amir",
//   age: 22,
// }`,
    },
    {
      title: {
        en: "Nested objects are preserved",
        fa: "اشیای تو در تو حفظ می‌شوند",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  profile: {
    age: 22,
  },
};

const result = omit(user, ["name"]);

result.profile.age = 25;

console.log(user.profile.age);
// 25`,
    },
    {
      title: {
        en: "Falsy values are preserved",
        fa: "مقادیر falsy حفظ می‌شوند",
      },
      language: "ts",
      code: `const data = {
  count: 0,
  active: false,
  name: "",
};

omit(data, ["active"]);
// {
//   count: 0,
//   name: "",
// }`,
    },
    {
      title: {
        en: "Undefined values",
        fa: "مقادیر undefined",
      },
      language: "ts",
      code: `const data = {
  value: undefined,
  name: "Amir",
};

omit(data, ["name"]);
// {
//   value: undefined,
// }`,
    },
  ],
  sections: [
    {
      id: "behavior",
      title: {
        en: "How it works",
        fa: "نحوه عملکرد",
      },
      content: {
        en: "The function first creates a shallow copy of the object using object spread syntax. It then deletes each key provided in the keys array from the copy.",
        fa: "این تابع ابتدا با استفاده از spread syntax یک کپی سطحی از شیء ایجاد می‌کند و سپس هر کلید موجود در آرایه keys را از کپی حذف می‌کند.",
      },
    },
    {
      id: "immutability",
      title: {
        en: "Original object",
        fa: "شیء اصلی",
      },
      content: {
        en: "The original object is not modified because the properties are deleted from a new shallow copy.",
        fa: "شیء اصلی تغییر نمی‌کند، زیرا ویژگی‌ها از یک کپی سطحی جدید حذف می‌شوند.",
      },
    },
    {
      id: "shallow",
      title: {
        en: "Shallow copy",
        fa: "کپی سطحی",
      },
      content: {
        en: "Nested objects and arrays are not cloned. Their references are copied to the resulting object, so modifying a nested value through the result can also affect the original object.",
        fa: "اشیای تو در تو و آرایه‌ها clone نمی‌شوند و reference آن‌ها به شیء خروجی منتقل می‌شود؛ بنابراین تغییر یک مقدار تو‌در‌تو از طریق خروجی می‌تواند روی شیء اصلی نیز اثر بگذارد.",
      },
    },
    {
      id: "keys",
      title: {
        en: "Type-safe keys",
        fa: "کلیدهای type-safe",
      },
      content: {
        en: "The K generic is constrained to keyof T, so TypeScript restricts the keys array to keys that exist on the input object.",
        fa: "جنریک K به keyof T محدود شده است، بنابراین TypeScript آرایه keys را به کلیدهایی که در شیء ورودی وجود دارند محدود می‌کند.",
      },
    },
  ],
  since: "1.38.0",
};
