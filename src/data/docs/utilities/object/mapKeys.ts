import type { DocPage } from "../../types";

export const mapKeysDoc: DocPage = {
  slug: "utilities/object/map-keys",
  category: "object",
  title: {
    en: "mapKeys",
    fa: "mapKeys",
  },
  description: {
    en: "Creates a new object by transforming the keys of an object with an iteratee while preserving the original values.",
    fa: "یک شیء جدید ایجاد می‌کند که کلیدهای آن با استفاده از iteratee تغییر کرده‌اند و مقادیر اصلی حفظ می‌شوند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object whose keys should be transformed.",
        fa: "شیئی که کلیدهای آن باید تغییر داده شوند.",
      },
    },
    {
      name: "iteratee",
      type: "(value: T[keyof T], key: keyof T, object: T) => K",
      required: true,
      description: {
        en: "A function that receives the current value, key, and original object and returns the new key.",
        fa: "تابعی که مقدار فعلی، کلید و شیء اصلی را دریافت کرده و کلید جدید را برمی‌گرداند.",
      },
    },
  ],
  returns: {
    type: "Record<K, T[keyof T]>",
    description: {
      en: "A new object containing the original values under the keys returned by the iteratee.",
      fa: "یک شیء جدید که مقادیر اصلی را تحت کلیدهای برگشتی توسط iteratee قرار می‌دهد.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      language: "ts",
      code: `const users = {
  alice: 25,
  bob: 30,
};

mapKeys(users, (value, key) => key.toUpperCase());
// {
//   ALICE: 25,
//   BOB: 30,
// }`,
    },
    {
      title: {
        en: "Create keys from values",
        fa: "ساخت کلید از مقدار",
      },
      language: "ts",
      code: `const users = {
  alice: 25,
  bob: 30,
};

mapKeys(users, (value) => \`age-\${value}\`);
// {
//   "age-25": 25,
//   "age-30": 30,
// }`,
    },
    {
      title: {
        en: "Using the key and value",
        fa: "استفاده از کلید و مقدار",
      },
      language: "ts",
      code: `const users = {
  alice: 25,
  bob: 30,
};

mapKeys(users, (value, key) => \`\${key}-\${value}\`);
// {
//   "alice-25": 25,
//   "bob-30": 30,
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

mapKeys(data, (value, key, object) => {
  return key === "first"
    ? "primary"
    : String(value + object.first);
});
// {
//   primary: 10,
//   "30": 20,
// }`,
    },
    {
      title: {
        en: "Numeric keys",
        fa: "کلیدهای عددی",
      },
      language: "ts",
      code: `const data = {
  first: "A",
  second: "B",
};

mapKeys(data, (value, key) => key === "first" ? 1 : 2);
// {
//   "1": "A",
//   "2": "B",
// }`,
    },
    {
      title: {
        en: "Symbol keys",
        fa: "کلیدهای Symbol",
      },
      language: "ts",
      code: `const first = Symbol("first");
const second = Symbol("second");

const data = {
  first: "A",
  second: "B",
};

mapKeys(data, (value, key) => {
  return key === "first" ? first : second;
});

// The resulting object uses the returned symbols as keys.`,
    },
    {
      title: {
        en: "Duplicate new keys",
        fa: "کلیدهای جدید تکراری",
      },
      language: "ts",
      code: `const data = {
  first: 10,
  second: 20,
};

mapKeys(data, () => "value");
// {
//   value: 20,
// }`,
    },
    {
      title: {
        en: "Empty object",
        fa: "شیء خالی",
      },
      language: "ts",
      code: `mapKeys({}, () => "key");
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

const result = mapKeys(data, (value, key) => key.toUpperCase());

console.log(data);
// {
//   first: 10,
//   second: 20,
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
        en: "For each own enumerable string-keyed property, the iteratee receives the property's value, key, and the original object. The returned value becomes the new key while the original value is preserved.",
        fa: "برای هر ویژگی مستقیم، قابل‌شمارش و دارای کلید رشته‌ای، iteratee مقدار، کلید و شیء اصلی را دریافت می‌کند. مقدار برگشتی به کلید جدید تبدیل می‌شود و مقدار اصلی حفظ می‌شود.",
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
      id: "duplicate-keys",
      title: {
        en: "Duplicate keys",
        fa: "کلیدهای تکراری",
      },
      content: {
        en: "If multiple properties produce the same new key, the later property overwrites the earlier value.",
        fa: "اگر چند ویژگی یک کلید جدید یکسان تولید کنند، مقدار ویژگی بعدی مقدار قبلی را overwrite می‌کند.",
      },
    },
    {
      id: "properties",
      title: {
        en: "Processed properties",
        fa: "ویژگی‌های پردازش‌شده",
      },
      content: {
        en: "The implementation uses Object.keys, so inherited properties, non-enumerable properties, and symbol-keyed properties from the original object are ignored.",
        fa: "این implementation از Object.keys استفاده می‌کند، بنابراین ویژگی‌های inherited، غیرقابل‌شمارش و ویژگی‌های دارای کلید Symbol از شیء اصلی نادیده گرفته می‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
