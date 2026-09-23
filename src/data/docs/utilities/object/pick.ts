import type { DocPage } from "../../types";

export const pickDoc: DocPage = {
  slug: "utilities/object/pick",
  category: "object",
  title: {
    en: "pick",
    fa: "pick",
  },
  description: {
    en: "Creates a new object containing only the specified properties that exist on the object or its prototype chain.",
    fa: "یک شیء جدید شامل فقط ویژگی‌های مشخص‌شده‌ای ایجاد می‌کند که در شیء یا زنجیره prototype آن وجود دارند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object from which properties should be selected.",
        fa: "شیئی که باید ویژگی‌ها از آن انتخاب شوند.",
      },
    },
    {
      name: "keys",
      type: "K[]",
      required: true,
      description: {
        en: "An array of keys to include in the resulting object.",
        fa: "آرایه‌ای از کلیدهایی که باید در شیء خروجی قرار بگیرند.",
      },
    },
  ],
  returns: {
    type: "Pick<T, K>",
    description: {
      en: "A new object containing the requested properties that exist on the object or its prototype chain.",
      fa: "یک شیء جدید شامل ویژگی‌های درخواست‌شده‌ای که در شیء یا زنجیره prototype آن وجود دارند.",
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

pick(user, ["name", "age"]);
// {
//   name: "Amir",
//   age: 22,
// }`,
    },
    {
      title: {
        en: "Pick a single property",
        fa: "انتخاب یک ویژگی",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

pick(user, ["name"]);
// {
//   name: "Amir",
// }`,
    },
    {
      title: {
        en: "Pick multiple properties",
        fa: "انتخاب چند ویژگی",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
  email: "amir@example.com",
};

pick(user, ["name", "email"]);
// {
//   name: "Amir",
//   email: "amir@example.com",
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

pick(user, []);
// {}`,
    },
    {
      title: {
        en: "Undefined values are included",
        fa: "مقادیر undefined نیز انتخاب می‌شوند",
      },
      language: "ts",
      code: `const data = {
  value: undefined,
};

pick(data, ["value"]);
// {
//   value: undefined,
// }`,
    },
    {
      title: {
        en: "Inherited properties",
        fa: "ویژگی‌های inherited",
      },
      language: "ts",
      code: `const parent = {
  role: "admin",
};

const user = Object.create(parent);
user.name = "Amir";

pick(user, ["role"]);
// {
//   role: "admin",
// }`,
    },
    {
      title: {
        en: "Own and inherited properties",
        fa: "ویژگی‌های مستقیم و inherited",
      },
      language: "ts",
      code: `const parent = {
  role: "admin",
};

const user = Object.create(parent);
user.name = "Amir";

pick(user, ["name", "role"]);
// {
//   name: "Amir",
//   role: "admin",
// }`,
    },
    {
      title: {
        en: "Missing properties",
        fa: "ویژگی‌های موجود نبودن",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
};

pick(user, ["name"]);
// {
//   name: "Amir",
// }

// TypeScript restricts K to keyof T,
// so arbitrary missing keys cannot normally be passed.`,
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

const result = pick(user, ["name"]);

console.log(user);
// {
//   name: "Amir",
//   age: 22,
// }`,
    },
    {
      title: {
        en: "Nested values keep their references",
        fa: "مقادیر تو در تو reference خود را حفظ می‌کنند",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  profile: {
    age: 22,
  },
};

const result = pick(user, ["profile"]);

result.profile.age = 25;

console.log(user.profile.age);
// 25`,
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
        en: "The function creates a new object and checks each requested key with the in operator. If the key exists anywhere on the object or its prototype chain, its current value is copied to the result.",
        fa: "این تابع یک شیء جدید ایجاد می‌کند و هر کلید درخواست‌شده را با عملگر in بررسی می‌کند. اگر کلید در خود شیء یا هر جایی از زنجیره prototype وجود داشته باشد، مقدار فعلی آن در نتیجه قرار می‌گیرد.",
      },
    },
    {
      id: "prototype",
      title: {
        en: "Prototype chain",
        fa: "زنجیره prototype",
      },
      content: {
        en: "Unlike a check based on hasOwnProperty, the in operator also considers inherited properties. Therefore, an inherited property can be included in the resulting object.",
        fa: "برخلاف بررسی با hasOwnProperty، عملگر in ویژگی‌های inherited را نیز در نظر می‌گیرد. بنابراین یک ویژگی inherited می‌تواند وارد شیء خروجی شود.",
      },
    },
    {
      id: "shallow",
      title: {
        en: "Shallow copy",
        fa: "کپی سطحی",
      },
      content: {
        en: "The selected values are copied by reference. Nested objects and arrays are not cloned.",
        fa: "مقادیر انتخاب‌شده به‌صورت reference کپی می‌شوند. اشیای تو در تو و آرایه‌ها clone نمی‌شوند.",
      },
    },
    {
      id: "immutability",
      title: {
        en: "Original object",
        fa: "شیء اصلی",
      },
      content: {
        en: "The function creates a separate result object and does not directly modify the input object.",
        fa: "این تابع یک شیء نتیجه جداگانه ایجاد می‌کند و مستقیماً شیء ورودی را تغییر نمی‌دهد.",
      },
    },
  ],
  since: "1.38.0",
};
