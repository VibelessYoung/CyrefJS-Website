import type { DocPage } from "../../types";

export const isObjectDoc: DocPage = {
  slug: "utilities/type/is-object",
  category: "type",
  title: {
    en: "isObject",
    fa: "isObject",
  },
  description: {
    en: "Checks whether a value is a non-null JavaScript object.",
    fa: "بررسی می‌کند که آیا یک مقدار یک object غیر null در جاوااسکریپت است یا نه.",
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
    type: "value is object",
    description: {
      en: "Returns true when the value is not null and its typeof result is object; otherwise, returns false.",
      fa: "اگر مقدار null نباشد و typeof آن برابر object باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether different values are objects.",
        fa: "بررسی اینکه مقادیر مختلف object هستند یا خیر.",
      },
      language: "ts",
      code: `import { isObject } from "@cyref/js";

isObject({});
// true

isObject([]);
// true

isObject(new Date());
// true

isObject(null);
// false

isObject("hello");
// false

isObject(42);
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "isObject acts as a TypeScript type guard and narrows the value to object when it returns true.",
        fa: "isObject یک Type Guard در TypeScript است و در صورت true شدن، نوع مقدار را به object محدود می‌کند.",
      },
      language: "ts",
      code: `const value: string | object = {};

if (isObject(value)) {
  // value is object
}`,
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
        en: "The function first excludes null, then checks whether typeof value is object. Because of this, arrays and built-in object instances such as Date, Map, and Set also return true.",
        fa: "تابع ابتدا null را حذف می‌کند و سپس بررسی می‌کند که آیا typeof مقدار برابر object است یا خیر. به همین دلیل آرایه‌ها و نمونه‌های داخلی مانند Date، Map و Set نیز true برمی‌گردانند.",
      },
    },
    {
      id: "null",
      title: {
        en: "Null Handling",
        fa: "مدیریت null",
      },
      content: {
        en: "Although typeof null returns object in JavaScript, the function explicitly excludes null by checking value !== null.",
        fa: "اگرچه typeof null در جاوااسکریپت برابر object است، این تابع با بررسی value !== null، مقدار null را به‌صورت صریح حذف می‌کند.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type Guard",
        fa: "Type Guard",
      },
      content: {
        en: "The return type is value is object, allowing TypeScript to narrow the value to object inside a conditional branch.",
        fa: "نوع خروجی value is object است و به TypeScript اجازه می‌دهد داخل شرط، نوع مقدار را به object محدود کند.",
      },
    },
  ],
  since: "1.38.0",
};
