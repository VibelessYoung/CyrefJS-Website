import type { DocPage } from "../../types";

export const setDoc: DocPage = {
  slug: "utilities/object/set",
  category: "object",
  title: {
    en: "set",
    fa: "set",
  },
  description: {
    en: "Creates a shallow copy of an object with the specified property replaced by a new value.",
    fa: "یک کپی سطحی از شیء ایجاد می‌کند و مقدار ویژگی مشخص‌شده را با مقدار جدید جایگزین می‌کند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object to copy and update.",
        fa: "شیئی که باید کپی و به‌روزرسانی شود.",
      },
    },
    {
      name: "key",
      type: "K",
      required: true,
      description: {
        en: "The key of the property to update.",
        fa: "کلید ویژگی‌ای که باید به‌روزرسانی شود.",
      },
    },
    {
      name: "value",
      type: "T[K]",
      required: true,
      description: {
        en: "The new value for the specified property. Its type must match the property's type.",
        fa: "مقدار جدید ویژگی مشخص‌شده. نوع آن باید با نوع همان ویژگی سازگار باشد.",
      },
    },
  ],
  returns: {
    type: "T",
    description: {
      en: "A new shallow copy of the object with the specified property set to the provided value.",
      fa: "یک کپی سطحی جدید از شیء که ویژگی مشخص‌شده در آن با مقدار داده‌شده تنظیم شده است.",
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

const result = set(user, "age", 25);

// {
//   name: "Amir",
//   age: 25,
// }`,
    },
    {
      title: {
        en: "Update a string property",
        fa: "به‌روزرسانی ویژگی رشته‌ای",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

set(user, "name", "Ali");
// {
//   name: "Ali",
//   age: 22,
// }`,
    },
    {
      title: {
        en: "Update a boolean property",
        fa: "به‌روزرسانی ویژگی boolean",
      },
      language: "ts",
      code: `const settings = {
  darkMode: false,
  notifications: true,
};

set(settings, "darkMode", true);
// {
//   darkMode: true,
//   notifications: true,
// }`,
    },
    {
      title: {
        en: "Type-safe values",
        fa: "مقادیر type-safe",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

set(user, "age", 25);
// Valid

// set(user, "age", "25");
// TypeScript error`,
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

const result = set(user, "age", 25);

console.log(user);
// {
//   name: "Amir",
//   age: 22,
// }`,
    },
    {
      title: {
        en: "Shallow copy",
        fa: "کپی سطحی",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  profile: {
    age: 22,
  },
};

const result = set(user, "name", "Ali");

result.profile.age = 25;

console.log(user.profile.age);
// 25`,
    },
    {
      title: {
        en: "Set a value to undefined",
        fa: "تنظیم مقدار روی undefined",
      },
      language: "ts",
      code: `const data = {
  value: 10 as number | undefined,
};

set(data, "value", undefined);
// {
//   value: undefined,
// }`,
    },
    {
      title: {
        en: "Set a value to null",
        fa: "تنظیم مقدار روی null",
      },
      language: "ts",
      code: `const data = {
  value: 10 as number | null,
};

set(data, "value", null);
// {
//   value: null,
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
        en: "The function first creates a shallow copy using object spread syntax, then assigns the provided value to the specified key on that copy.",
        fa: "این تابع ابتدا با استفاده از object spread syntax یک کپی سطحی ایجاد می‌کند و سپس مقدار داده‌شده را روی کلید مشخص‌شده در همان کپی قرار می‌دهد.",
      },
    },
    {
      id: "type-safety",
      title: {
        en: "Type safety",
        fa: "Type safety",
      },
      content: {
        en: "The key is constrained to keyof T and the value uses T[K]. This means TypeScript connects the selected key with its corresponding property type.",
        fa: "پارامتر key به keyof T محدود شده و value از T[K] استفاده می‌کند. بنابراین TypeScript نوع مقدار را به کلید انتخاب‌شده مرتبط می‌کند.",
      },
    },
    {
      id: "shallow",
      title: {
        en: "Shallow copy",
        fa: "کپی سطحی",
      },
      content: {
        en: "Only the top-level object is copied. Nested objects and arrays retain their original references.",
        fa: "فقط خود شیء در سطح اول کپی می‌شود. اشیای تو در تو و آرایه‌ها reference اصلی خود را حفظ می‌کنند.",
      },
    },
    {
      id: "immutability",
      title: {
        en: "Original object",
        fa: "شیء اصلی",
      },
      content: {
        en: "The input object is not directly modified. The assignment is performed on the newly created copy.",
        fa: "شیء ورودی مستقیماً تغییر نمی‌کند. عملیات انتساب روی کپی جدید انجام می‌شود.",
      },
    },
  ],
  since: "1.38.0",
};
