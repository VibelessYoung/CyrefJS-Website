import type { DocPage } from "../../types";

export const filterObjectDoc: DocPage = {
  slug: "utilities/object/filter-object",
  category: "object",
  title: {
    en: "filterObject",
    fa: "filterObject",
  },
  description: {
    en: "Creates a new object containing the properties that satisfy a predicate.",
    fa: "یک شیء جدید شامل ویژگی‌هایی ایجاد می‌کند که شرط predicate را برآورده می‌کنند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object whose properties should be filtered.",
        fa: "شیئی که ویژگی‌های آن باید فیلتر شوند.",
      },
    },
    {
      name: "predicate",
      type: "(value: T[keyof T], key: keyof T, object: T) => boolean",
      required: true,
      description: {
        en: "A function called for each own enumerable string-keyed property. It receives the property value, key, and original object. Returning true includes the property in the result.",
        fa: "تابعی که برای هر ویژگی own و enumerable با کلید string اجرا می‌شود. این تابع مقدار، کلید و شیء اصلی را دریافت می‌کند. اگر true برگرداند، ویژگی در نتیجه قرار می‌گیرد.",
      },
    },
  ],
  returns: {
    type: "Partial<T>",
    description: {
      en: "Returns a new object containing only the properties for which the predicate returned true.",
      fa: "یک شیء جدید شامل فقط ویژگی‌هایی که predicate برای آن‌ها true برگردانده است.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Keeps only properties whose values are numbers.",
        fa: "فقط ویژگی‌هایی را نگه می‌دارد که مقدارشان number است.",
      },
      language: "ts",
      code: `const result = filterObject(
  {
    name: "Alice",
    age: 25,
    score: 90,
  },
  (value) => typeof value === "number",
);

console.log(result);
// {
//   age: 25,
//   score: 90
// }`,
    },
    {
      title: {
        en: "Filter by key",
        fa: "فیلتر بر اساس کلید",
      },
      description: {
        en: "The predicate can inspect the property key.",
        fa: "predicate می‌تواند کلید ویژگی را بررسی کند.",
      },
      language: "ts",
      code: `const result = filterObject(
  {
    name: "Alice",
    age: 25,
    active: true,
  },
  (_value, key) => key !== "active",
);

console.log(result);
// {
//   name: "Alice",
//   age: 25
// }`,
    },
    {
      title: {
        en: "Filter by value",
        fa: "فیلتر بر اساس مقدار",
      },
      description: {
        en: "The predicate receives each property's value.",
        fa: "predicate مقدار هر ویژگی را دریافت می‌کند.",
      },
      language: "ts",
      code: `const result = filterObject(
  {
    a: 5,
    b: 12,
    c: 20,
  },
  (value) => typeof value === "number" && value > 10,
);

console.log(result);
// {
//   b: 12,
//   c: 20
// }`,
    },
    {
      title: {
        en: "Using the original object",
        fa: "استفاده از شیء اصلی",
      },
      description: {
        en: "The third predicate argument is the original object.",
        fa: "سومین آرگومان predicate همان شیء اصلی است.",
      },
      language: "ts",
      code: `const result = filterObject(
  {
    min: 10,
    max: 20,
    value: 15,
  },
  (value, key, object) => {
    if (key === "value") {
      return (
        typeof value === "number" &&
        value >= object.min &&
        value <= object.max
      );
    }

    return false;
  },
);

console.log(result);
// {
//   value: 15
// }`,
    },
    {
      title: {
        en: "No matches",
        fa: "بدون نتیجه",
      },
      description: {
        en: "If the predicate returns false for every property, an empty object is returned.",
        fa: "اگر predicate برای تمام ویژگی‌ها false برگرداند، یک شیء خالی برگردانده می‌شود.",
      },
      language: "ts",
      code: `const result = filterObject(
  {
    a: 1,
    b: 2,
  },
  () => false,
);

console.log(result);
// {}`,
    },
    {
      title: {
        en: "All matches",
        fa: "همه ویژگی‌ها",
      },
      description: {
        en: "Returning true for every property copies all enumerable own string-keyed properties.",
        fa: "اگر برای تمام ویژگی‌ها true برگردانده شود، تمام ویژگی‌های own و enumerable با کلید string کپی می‌شوند.",
      },
      language: "ts",
      code: `const result = filterObject(
  {
    name: "Alice",
    age: 25,
  },
  () => true,
);

console.log(result);
// {
//   name: "Alice",
//   age: 25
// }`,
    },
    {
      title: {
        en: "Original object is unchanged",
        fa: "شیء اصلی بدون تغییر",
      },
      description: {
        en: "The function creates a separate result object and does not modify the input object.",
        fa: "تابع یک شیء نتیجه جداگانه ایجاد می‌کند و شیء ورودی را تغییر نمی‌دهد.",
      },
      language: "ts",
      code: `const original = {
  name: "Alice",
  age: 25,
};

const result = filterObject(
  original,
  (value) => typeof value === "string",
);

console.log(original);
// {
//   name: "Alice",
//   age: 25
// }

console.log(result);
// {
//   name: "Alice"
// }

console.log(result === original);
// false`,
    },
    {
      title: {
        en: "Inherited properties",
        fa: "ویژگی‌های inherited",
      },
      description: {
        en: "Inherited properties are not processed because the implementation uses Object.keys.",
        fa: "ویژگی‌های inherited پردازش نمی‌شوند، چون implementation از Object.keys استفاده می‌کند.",
      },
      language: "ts",
      code: `const parent = {
  inherited: true,
};

const object = Object.create(parent);

object.own = true;

const result = filterObject(
  object,
  () => true,
);

console.log(result);
// {
//   own: true
// }`,
    },
  ],
  since: "1.38.0",
};
