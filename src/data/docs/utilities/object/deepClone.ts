import type { DocPage } from "../../types";

export const deepCloneDoc: DocPage = {
  slug: "utilities/object/deep-clone",
  category: "object",
  title: {
    en: "deepClone",
    fa: "deepClone",
  },
  description: {
    en: "Creates a deep clone of a value while preserving object prototypes, property descriptors, special built-in types, and circular references.",
    fa: "یک کپی عمیق از یک مقدار ایجاد می‌کند و prototypeها، descriptorهای ویژگی‌ها، انواع داخلی خاص و ارجاع‌های دوری را حفظ می‌کند.",
  },
  parameters: [
    {
      name: "value",
      type: "T",
      required: true,
      description: {
        en: "The value to clone.",
        fa: "مقداری که باید clone شود.",
      },
    },
  ],
  returns: {
    type: "T",
    description: {
      en: "Returns a deep clone of the input value.",
      fa: "یک کپی عمیق از مقدار ورودی را برمی‌گرداند.",
    },
  },
  throws: [
    {
      en: "Throws a TypeError if the value contains a WeakMap.",
      fa: "اگر مقدار شامل WeakMap باشد، یک TypeError ایجاد می‌کند.",
    },
    {
      en: "Throws a TypeError if the value contains a WeakSet.",
      fa: "اگر مقدار شامل WeakSet باشد، یک TypeError ایجاد می‌کند.",
    },
  ],
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Creates an independent deep copy of a nested object.",
        fa: "یک کپی عمیق و مستقل از یک شیء تو در تو ایجاد می‌کند.",
      },
      language: "ts",
      code: `const original = {
  name: "Alice",
  profile: {
    age: 25,
  },
};

const copy = deepClone(original);

copy.profile.age = 30;

console.log(original.profile.age);
// 25

console.log(copy.profile.age);
// 30`,
    },
    {
      title: {
        en: "Nested arrays",
        fa: "آرایه‌های تو در تو",
      },
      description: {
        en: "Nested arrays are cloned recursively.",
        fa: "آرایه‌های تو در تو به‌صورت بازگشتی clone می‌شوند.",
      },
      language: "ts",
      code: `const original = [
  [1, 2],
  [3, 4],
];

const copy = deepClone(original);

copy[0][0] = 99;

console.log(original[0][0]);
// 1

console.log(copy[0][0]);
// 99`,
    },
    {
      title: {
        en: "Date",
        fa: "Date",
      },
      description: {
        en: "Date instances are cloned with the same timestamp.",
        fa: "نمونه‌های Date با همان timestamp clone می‌شوند.",
      },
      language: "ts",
      code: `const original = new Date("2026-01-01");

const copy = deepClone(original);

console.log(copy.getTime() === original.getTime());
// true

console.log(copy === original);
// false`,
    },
    {
      title: {
        en: "RegExp",
        fa: "RegExp",
      },
      description: {
        en: "RegExp instances preserve their source, flags, and lastIndex.",
        fa: "نمونه‌های RegExp مقدار source، flags و lastIndex خود را حفظ می‌کنند.",
      },
      language: "ts",
      code: `const original = /hello/gi;

original.lastIndex = 3;

const copy = deepClone(original);

console.log(copy.source);
// hello

console.log(copy.flags);
// gi

console.log(copy.lastIndex);
// 3`,
    },
    {
      title: {
        en: "Map",
        fa: "Map",
      },
      description: {
        en: "Map keys and values are cloned recursively.",
        fa: "کلیدها و مقادیر Map به‌صورت بازگشتی clone می‌شوند.",
      },
      language: "ts",
      code: `const original = new Map([
  ["user", { name: "Alice" }],
]);

const copy = deepClone(original);

copy.get("user")!.name = "Bob";

console.log(original.get("user")!.name);
// Alice

console.log(copy.get("user")!.name);
// Bob`,
    },
    {
      title: {
        en: "Set",
        fa: "Set",
      },
      description: {
        en: "Set values are cloned recursively.",
        fa: "مقادیر Set به‌صورت بازگشتی clone می‌شوند.",
      },
      language: "ts",
      code: `const original = new Set([
  { id: 1 },
]);

const copy = deepClone(original);

const clonedItem = [...copy][0];

clonedItem.id = 2;

console.log([...original][0].id);
// 1

console.log(clonedItem.id);
// 2`,
    },
    {
      title: {
        en: "Circular references",
        fa: "ارجاع‌های دوری",
      },
      description: {
        en: "Circular references are preserved without causing infinite recursion.",
        fa: "ارجاع‌های دوری بدون ایجاد recursion بی‌نهایت حفظ می‌شوند.",
      },
      language: "ts",
      code: `const original: {
  name: string;
  self?: unknown;
} = {
  name: "Node",
};

original.self = original;

const copy = deepClone(original);

console.log(copy !== original);
// true

console.log(copy.self === copy);
// true`,
    },
    {
      title: {
        en: "Shared references",
        fa: "ارجاع‌های مشترک",
      },
      description: {
        en: "Multiple references to the same source object remain references to the same cloned object.",
        fa: "چند ارجاع به یک شیء اصلی، پس از clone نیز به یک شیء clone‌شده مشترک اشاره می‌کنند.",
      },
      language: "ts",
      code: `const shared = {
  value: 42,
};

const original = {
  first: shared,
  second: shared,
};

const copy = deepClone(original);

console.log(copy.first === copy.second);
// true

console.log(copy.first === shared);
// false`,
    },
    {
      title: {
        en: "Prototype preservation",
        fa: "حفظ prototype",
      },
      description: {
        en: "Objects are created using the prototype of the original object.",
        fa: "اشیاء با استفاده از prototype شیء اصلی ایجاد می‌شوند.",
      },
      language: "ts",
      code: `class User {
  constructor(public name: string) {}
}

const original = new User("Alice");
const copy = deepClone(original);

console.log(copy instanceof User);
// true

console.log(copy === original);
// false`,
    },
    {
      title: {
        en: "Property descriptors",
        fa: "Property descriptorها",
      },
      description: {
        en: "Own property descriptors are preserved while their values are cloned.",
        fa: "descriptorهای ویژگی‌های own حفظ می‌شوند و مقدار آن‌ها clone می‌شود.",
      },
      language: "ts",
      code: `const original = {};

Object.defineProperty(original, "value", {
  value: { count: 1 },
  writable: false,
  enumerable: false,
  configurable: true,
});

const copy = deepClone(original);

const descriptor = Object.getOwnPropertyDescriptor(
  copy,
  "value",
);

console.log(descriptor?.writable);
// false

console.log(descriptor?.enumerable);
// false`,
    },
    {
      title: {
        en: "Primitive values",
        fa: "مقادیر primitive",
      },
      description: {
        en: "Primitive values are returned directly because they do not require cloning.",
        fa: "مقادیر primitive مستقیماً برگردانده می‌شوند چون نیازی به clone شدن ندارند.",
      },
      language: "ts",
      code: `console.log(deepClone(42));
// 42

console.log(deepClone("hello"));
// hello

console.log(deepClone(true));
// true

console.log(deepClone(null));
// null`,
    },
    {
      title: {
        en: "WeakMap",
        fa: "WeakMap",
      },
      description: {
        en: "WeakMap instances cannot be cloned and cause a TypeError.",
        fa: "نمونه‌های WeakMap قابل clone شدن نیستند و باعث TypeError می‌شوند.",
      },
      language: "ts",
      code: `const value = new WeakMap();

deepClone(value);
// TypeError: Cannot clone WeakMap`,
    },
    {
      title: {
        en: "WeakSet",
        fa: "WeakSet",
      },
      description: {
        en: "WeakSet instances cannot be cloned and cause a TypeError.",
        fa: "نمونه‌های WeakSet قابل clone شدن نیستند و باعث TypeError می‌شوند.",
      },
      language: "ts",
      code: `const value = new WeakSet();

deepClone(value);
// TypeError: Cannot clone WeakSet`,
    },
  ],
  since: "1.38.0",
};
