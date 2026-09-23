import type { DocPage } from "../../types";

export const mapValuesDoc: DocPage = {
  slug: "utilities/object/map-values",
  category: "object",
  title: {
    en: "mapValues",
    fa: "mapValues",
  },
  description: {
    en: "Creates a new object by transforming the values of an object with an iteratee while preserving its keys.",
    fa: "یک شیء جدید ایجاد می‌کند که در آن مقادیر با استفاده از iteratee تغییر کرده‌اند و کلیدهای اصلی حفظ می‌شوند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object whose values should be transformed.",
        fa: "شیئی که مقادیر آن باید تغییر داده شوند.",
      },
    },
    {
      name: "iteratee",
      type: "(value: T[keyof T], key: keyof T, object: T) => R",
      required: true,
      description: {
        en: "A function that receives the current value, key, and original object and returns the new value.",
        fa: "تابعی که مقدار فعلی، کلید و شیء اصلی را دریافت کرده و مقدار جدید را برمی‌گرداند.",
      },
    },
  ],
  returns: {
    type: "{ [K in keyof T]: R }",
    description: {
      en: "A new object with the same keys as the original object and transformed values returned by the iteratee.",
      fa: "یک شیء جدید با همان کلیدهای شیء اصلی و مقادیر تبدیل‌شده‌ای که توسط iteratee برگردانده شده‌اند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      language: "ts",
      code: `const prices = {
  apple: 10,
  banana: 20,
};

mapValues(prices, (value) => value * 2);
// {
//   apple: 20,
//   banana: 40,
// }`,
    },
    {
      title: {
        en: "Transform values to strings",
        fa: "تبدیل مقادیر به رشته",
      },
      language: "ts",
      code: `const scores = {
  math: 18,
  physics: 20,
};

mapValues(scores, (value) => \`Score: \${value}\`);
// {
//   math: "Score: 18",
//   physics: "Score: 20",
// }`,
    },
    {
      title: {
        en: "Using the key",
        fa: "استفاده از کلید",
      },
      language: "ts",
      code: `const prices = {
  apple: 10,
  banana: 20,
};

mapValues(prices, (value, key) => \`\${key}: \${value}\`);
// {
//   apple: "apple: 10",
//   banana: "banana: 20",
// }`,
    },
    {
      title: {
        en: "Using the original object",
        fa: "استفاده از شیء اصلی",
      },
      language: "ts",
      code: `const data = {
  first: 10,
  second: 20,
};

mapValues(data, (value, key, object) => {
  return value + object.first;
});
// {
//   first: 20,
//   second: 30,
// }`,
    },
    {
      title: {
        en: "Different return type",
        fa: "تغییر نوع مقدار خروجی",
      },
      language: "ts",
      code: `const users = {
  alice: 25,
  bob: 30,
};

mapValues(users, (value) => value >= 30);
// {
//   alice: false,
//   bob: true,
// }`,
    },
    {
      title: {
        en: "Empty object",
        fa: "شیء خالی",
      },
      language: "ts",
      code: `mapValues({}, () => "value");
// {}`,
    },
    {
      title: {
        en: "Original object is unchanged",
        fa: "شیء اصلی تغییر نمی‌کند",
      },
      language: "ts",
      code: `const data = {
  first: 10,
  second: 20,
};

const result = mapValues(data, (value) => value * 2);

console.log(data);
// {
//   first: 10,
//   second: 20,
// }`,
    },
    {
      title: {
        en: "Inherited properties",
        fa: "ویژگی‌های inherited",
      },
      language: "ts",
      code: `const parent = {
  inherited: 10,
};

const data = Object.create(parent);
data.own = 20;

mapValues(data, (value) => value * 2);
// {
//   own: 40,
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
        en: "For each own enumerable string-keyed property, the iteratee receives the property's value, key, and the original object. Its return value becomes the new value while the original key is preserved.",
        fa: "برای هر ویژگی مستقیم، قابل‌شمارش و دارای کلید رشته‌ای، iteratee مقدار، کلید و شیء اصلی را دریافت می‌کند. مقدار برگشتی آن به مقدار جدید تبدیل می‌شود و کلید اصلی حفظ می‌شود.",
      },
    },
    {
      id: "iteratee",
      title: {
        en: "Iteratee arguments",
        fa: "آرگومان‌های iteratee",
      },
      content: {
        en: "The iteratee receives three arguments: the current value, the current key, and the original object.",
        fa: "iteratee سه آرگومان دریافت می‌کند: مقدار فعلی، کلید فعلی و شیء اصلی.",
      },
    },
    {
      id: "return-type",
      title: {
        en: "Return type",
        fa: "نوع خروجی",
      },
      content: {
        en: "The generic R represents the type returned by the iteratee. Every property in the resulting object therefore has the same R type.",
        fa: "جنریک R نوع مقداری را که iteratee برمی‌گرداند مشخص می‌کند. بنابراین تمام ویژگی‌های شیء خروجی دارای همان نوع R هستند.",
      },
    },
    {
      id: "properties",
      title: {
        en: "Processed properties",
        fa: "ویژگی‌های پردازش‌شده",
      },
      content: {
        en: "The implementation uses Object.keys, so only own enumerable string-keyed properties are processed. Inherited, non-enumerable, and symbol-keyed properties are ignored.",
        fa: "این implementation از Object.keys استفاده می‌کند، بنابراین فقط ویژگی‌های مستقیم، قابل‌شمارش و دارای کلید رشته‌ای پردازش می‌شوند. ویژگی‌های inherited، غیرقابل‌شمارش و Symbol نادیده گرفته می‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
