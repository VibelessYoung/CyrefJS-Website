import type { DocPage } from "../../types";

export const isStringDoc: DocPage = {
  slug: "utilities/type/is-string",
  category: "type",
  title: {
    en: "isString",
    fa: "isString",
  },
  description: {
    en: "Checks whether a value is a string primitive.",
    fa: "بررسی می‌کند که آیا یک مقدار از نوع primitive string است یا نه.",
  },
  icon: "Type",
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
    type: "value is string",
    description: {
      en: "Returns true when the value has the JavaScript string type; otherwise, returns false.",
      fa: "اگر مقدار از نوع string در جاوااسکریپت باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether different values are strings.",
        fa: "بررسی اینکه مقادیر مختلف از نوع string هستند یا خیر.",
      },
      language: "ts",
      code: `import { isString } from "@cyref/js";

isString("hello");
// true

isString("");
// true

isString("123");
// true

isString(123);
// false

isString(null);
// false

isString(undefined);
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "isString acts as a TypeScript type guard and narrows the value to string when it returns true.",
        fa: "isString یک Type Guard در TypeScript است و در صورت true شدن، نوع مقدار را به string محدود می‌کند.",
      },
      language: "ts",
      code: `const value: string | number = "hello";

if (isString(value)) {
  console.log(value.toUpperCase());
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
        en: "The function checks the value using typeof and returns true only when JavaScript classifies the value as the primitive string type.",
        fa: "این تابع با استفاده از typeof مقدار را بررسی می‌کند و فقط زمانی true برمی‌گرداند که جاوااسکریپت مقدار را از نوع primitive string تشخیص دهد.",
      },
    },
    {
      id: "primitive",
      title: {
        en: "Primitive Strings",
        fa: "رشته‌های Primitive",
      },
      content: {
        en: 'String literals and values created as primitive strings return true. Objects such as new String("hello") do not return true because their typeof result is object.',
        fa: 'String literalها و مقادیر primitive از نوع string مقدار true برمی‌گردانند. اشیایی مانند new String("hello") به دلیل اینکه typeof آن‌ها object است، true برنمی‌گردانند.',
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type Guard",
        fa: "Type Guard",
      },
      content: {
        en: "The return type is value is string, allowing TypeScript to narrow the value to string inside a conditional branch.",
        fa: "نوع خروجی value is string است و به TypeScript اجازه می‌دهد داخل شرط، نوع مقدار را به string محدود کند.",
      },
    },
  ],
  since: "1.38.0",
};
