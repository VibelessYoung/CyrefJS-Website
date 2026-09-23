import type { DocPage } from "../../types";

export const isPlainObjectDoc: DocPage = {
  slug: "utilities/type/is-plain-object",
  category: "type",
  title: {
    en: "isPlainObject",
    fa: "isPlainObject",
  },
  description: {
    en: "Checks whether a value is a plain object with Object.prototype or null as its prototype.",
    fa: "بررسی می‌کند که آیا یک مقدار یک Plain Object با Object.prototype یا null به‌عنوان prototype است یا خیر.",
  },
  icon: "Box",
  parameters: [
    {
      name: "value",
      type: "unknown",
      required: true,
      description: {
        en: "The value to check.",
        fa: "مقداری که باید بررسی شود.",
      },
    },
  ],
  returns: {
    type: "value is Record<PropertyKey, unknown>",
    description: {
      en: "Returns true when the value is an object whose prototype is Object.prototype or null.",
      fa: "اگر مقدار یک object باشد که prototype آن Object.prototype یا null باشد، true برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether different values are plain objects.",
        fa: "بررسی اینکه مقادیر مختلف Plain Object هستند یا خیر.",
      },
      language: "ts",
      code: `import { isPlainObject } from "@cyref/js";

isPlainObject({});
// true

isPlainObject({ name: "Amir" });
// true

isPlainObject(Object.create(null));
// true

isPlainObject([]);
// false

isPlainObject(new Date());
// false

isPlainObject(null);
// false

isPlainObject("hello");
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "isPlainObject acts as a TypeScript type guard and narrows the value to Record<PropertyKey, unknown> when it returns true.",
        fa: "isPlainObject یک Type Guard در TypeScript است و در صورت true شدن، نوع مقدار را به Record<PropertyKey, unknown> محدود می‌کند.",
      },
      language: "ts",
      code: `const value: unknown = {
  name: "Amir",
};

if (isPlainObject(value)) {
  console.log(value.name);
}`,
    },
    {
      title: {
        en: "Objects with null prototypes",
        fa: "اشیاء با prototype برابر null",
      },
      description: {
        en: "Objects created with Object.create(null) are considered plain objects by this function.",
        fa: "اشیایی که با Object.create(null) ساخته شده‌اند، توسط این تابع Plain Object محسوب می‌شوند.",
      },
      language: "ts",
      code: `const value = Object.create(null);

isPlainObject(value);
// true`,
    },
  ],
  sections: [
    {
      id: "behavior",
      title: {
        en: "Behavior",
        fa: "نحوه عملکرد",
      },
      content: {
        en: "The function first rejects null and values whose typeof result is not object. It then checks the object's prototype and returns true only when the prototype is Object.prototype or null.",
        fa: "تابع ابتدا null و مقادیری را که typeof آن‌ها object نیست رد می‌کند. سپس prototype شیء را بررسی می‌کند و فقط زمانی true برمی‌گرداند که prototype برابر Object.prototype یا null باشد.",
      },
    },
    {
      id: "prototype",
      title: {
        en: "Prototype Check",
        fa: "بررسی Prototype",
      },
      content: {
        en: "Objects created with object literals or new Object() normally have Object.prototype as their prototype. Objects created with Object.create(null) have a null prototype and are also accepted.",
        fa: "اشیایی که با object literal یا new Object() ساخته می‌شوند معمولاً Object.prototype را به‌عنوان prototype دارند. اشیایی که با Object.create(null) ساخته می‌شوند prototype برابر null دارند و این تابع آن‌ها را نیز قبول می‌کند.",
      },
    },
    {
      id: "non-plain-objects",
      title: {
        en: "Non-Plain Objects",
        fa: "اشیای غیر Plain",
      },
      content: {
        en: "Arrays, Date instances, Map instances, Set instances, and instances of custom classes are not considered plain objects because their prototypes differ from Object.prototype and null.",
        fa: "آرایه‌ها، نمونه‌های Date، Map، Set و نمونه‌های کلاس‌های سفارشی Plain Object محسوب نمی‌شوند، زیرا prototype آن‌ها با Object.prototype و null متفاوت است.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type Guard",
        fa: "Type Guard",
      },
      content: {
        en: "The return type is value is Record<PropertyKey, unknown>, allowing TypeScript to narrow the value to a key-value object inside a conditional branch.",
        fa: "نوع خروجی value is Record<PropertyKey, unknown> است و به TypeScript اجازه می‌دهد داخل شرط، نوع مقدار را به یک object کلید-مقدار محدود کند.",
      },
    },
  ],
  since: "1.38.0",
};
