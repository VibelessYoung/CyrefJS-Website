import type { DocPage } from "../../types";

export const defaultsDoc: DocPage = {
  slug: "utilities/object/defaults",
  category: "object",
  title: {
    en: "defaults",
    fa: "defaults",
  },
  description: {
    en: "Fills undefined properties in an object with values from a source object.",
    fa: "ویژگی‌های undefined یک شیء را با مقادیر موجود در یک شیء منبع پر می‌کند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The target object whose undefined properties should receive default values.",
        fa: "شیء مقصد که ویژگی‌های undefined آن باید با مقادیر پیش‌فرض پر شوند.",
      },
    },
    {
      name: "source",
      type: "U",
      required: true,
      description: {
        en: "The source object containing default values.",
        fa: "شیء منبع که شامل مقادیر پیش‌فرض است.",
      },
    },
  ],
  returns: {
    type: "T & Omit<U, keyof T>",
    description: {
      en: "Returns a new object containing the properties of object, with undefined properties filled from source.",
      fa: "یک شیء جدید شامل ویژگی‌های object را برمی‌گرداند که ویژگی‌های undefined آن با مقادیر source پر شده‌اند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Missing values are filled from the source object.",
        fa: "مقادیر موجود در source جای مقادیر undefined را می‌گیرند.",
      },
      language: "ts",
      code: `const result = defaults(
  {
    name: "Alice",
    age: undefined,
  },
  {
    age: 25,
    active: true,
  },
);

console.log(result);
// {
//   name: "Alice",
//   age: 25,
//   active: true
// }`,
    },
    {
      title: {
        en: "Existing values are preserved",
        fa: "حفظ مقادیر موجود",
      },
      description: {
        en: "An existing defined value is not replaced by the source value.",
        fa: "یک مقدار موجود و تعریف‌شده با مقدار source جایگزین نمی‌شود.",
      },
      language: "ts",
      code: `const result = defaults(
  {
    name: "Alice",
    age: 30,
  },
  {
    name: "Bob",
    age: 25,
  },
);

console.log(result);
// {
//   name: "Alice",
//   age: 30
// }`,
    },
    {
      title: {
        en: "Undefined values",
        fa: "مقادیر undefined",
      },
      description: {
        en: "Only properties whose current value is undefined receive the source value.",
        fa: "فقط ویژگی‌هایی که مقدار فعلی آن‌ها undefined است، مقدار source را دریافت می‌کنند.",
      },
      language: "ts",
      code: `const result = defaults(
  {
    a: undefined,
    b: 0,
    c: false,
    d: "",
    e: null,
  },
  {
    a: 1,
    b: 2,
    c: true,
    d: "default",
    e: "value",
  },
);

console.log(result);
// {
//   a: 1,
//   b: 0,
//   c: false,
//   d: "",
//   e: null
// }`,
    },
    {
      title: {
        en: "Additional properties",
        fa: "ویژگی‌های اضافی",
      },
      description: {
        en: "Properties that exist only in the source object are added to the result.",
        fa: "ویژگی‌هایی که فقط در source وجود دارند به نتیجه اضافه می‌شوند.",
      },
      language: "ts",
      code: `const result = defaults(
  {
    name: "Alice",
  },
  {
    age: 25,
    active: true,
  },
);

console.log(result);
// {
//   name: "Alice",
//   age: 25,
//   active: true
// }`,
    },
    {
      title: {
        en: "Source undefined values",
        fa: "مقادیر undefined در source",
      },
      description: {
        en: "If a missing property in source is itself undefined, that undefined value is assigned.",
        fa: "اگر یک ویژگی موجود در source خودش undefined باشد، همان مقدار undefined قرار می‌گیرد.",
      },
      language: "ts",
      code: `const result = defaults(
  {
    name: undefined,
  },
  {
    name: undefined,
  },
);

console.log(result.name);
// undefined`,
    },
    {
      title: {
        en: "Nested objects",
        fa: "اشیای تو در تو",
      },
      description: {
        en: "The function performs a shallow operation and does not merge nested objects.",
        fa: "این تابع به‌صورت shallow عمل می‌کند و اشیای تو در تو را merge نمی‌کند.",
      },
      language: "ts",
      code: `const result = defaults(
  {
    settings: {
      theme: "dark",
    },
  },
  {
    settings: {
      language: "en",
    },
  },
);

console.log(result);
// {
//   settings: {
//     theme: "dark"
//   }
// }`,
    },
    {
      title: {
        en: "Returns a new object",
        fa: "برگرداندن شیء جدید",
      },
      description: {
        en: "The original object is not modified because the function starts with an object spread.",
        fa: "شیء اصلی تغییر نمی‌کند، چون تابع ابتدا یک شیء جدید با object spread ایجاد می‌کند.",
      },
      language: "ts",
      code: `const original = {
  name: "Alice",
  age: undefined,
};

const result = defaults(original, {
  age: 25,
});

console.log(result);
// { name: "Alice", age: 25 }

console.log(original.age);
// undefined

console.log(result === original);
// false`,
    },
    {
      title: {
        en: "Own enumerable source properties",
        fa: "ویژگی‌های enumerable در source",
      },
      description: {
        en: "Only enumerable own string-keyed properties from source are processed.",
        fa: "فقط ویژگی‌های own و enumerable با کلید string در source پردازش می‌شوند.",
      },
      language: "ts",
      code: `const source = {
  age: 25,
};

Object.defineProperty(source, "hidden", {
  value: true,
  enumerable: false,
});

const result = defaults(
  {
    age: undefined,
    hidden: undefined,
  },
  source,
);

console.log(result);
// {
//   age: 25,
//   hidden: undefined
// }`,
    },
  ],
  since: "1.38.0",
};
