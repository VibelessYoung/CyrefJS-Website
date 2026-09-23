import type { DocPage } from "../../types";

export const isNumberDoc: DocPage = {
  slug: "utilities/type/is-number",
  category: "type",
  title: {
    en: "isNumber",
    fa: "isNumber",
  },
  description: {
    en: "Checks whether a value is a number primitive.",
    fa: "بررسی می‌کند که آیا یک مقدار از نوع primitive number است یا نه.",
  },
  icon: "Hash",
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
    type: "value is number",
    description: {
      en: "Returns true when the value has the JavaScript number type; otherwise, returns false.",
      fa: "اگر مقدار از نوع number در جاوااسکریپت باشد true و در غیر این صورت false برمی‌گرداند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether different values are numbers.",
        fa: "بررسی اینکه مقادیر مختلف از نوع number هستند یا خیر.",
      },
      language: "ts",
      code: `import { isNumber } from "@cyref/js";

isNumber(42);
// true

isNumber(3.14);
// true

isNumber(NaN);
// true

isNumber("42");
// false

isNumber(null);
// false`,
    },
    {
      title: {
        en: "Type narrowing",
        fa: "محدود کردن نوع",
      },
      description: {
        en: "isNumber acts as a TypeScript type guard and narrows the value to number when it returns true.",
        fa: "isNumber یک Type Guard در TypeScript است و در صورت true شدن، نوع مقدار را به number محدود می‌کند.",
      },
      language: "ts",
      code: `const value: string | number = 42;

if (isNumber(value)) {
  // value is number
  console.log(value.toFixed(2));
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
        en: "The function checks the value using typeof and returns true when JavaScript classifies the value as number. This includes integers, floating-point numbers, Infinity, -Infinity, and NaN.",
        fa: "این تابع با استفاده از typeof مقدار را بررسی می‌کند و زمانی true برمی‌گرداند که جاوااسکریپت مقدار را از نوع number تشخیص دهد. این شامل اعداد صحیح، اعشاری، Infinity، -Infinity و NaN نیز می‌شود.",
      },
    },
    {
      id: "type-guard",
      title: {
        en: "Type Guard",
        fa: "Type Guard",
      },
      content: {
        en: "The return type is value is number, allowing TypeScript to narrow the value to number inside a conditional branch.",
        fa: "نوع خروجی value is number است و به TypeScript اجازه می‌دهد داخل شرط، نوع مقدار را به number محدود کند.",
      },
    },
    {
      id: "special-values",
      title: {
        en: "Special Number Values",
        fa: "مقادیر خاص Number",
      },
      content: {
        en: "NaN and Infinity are both considered numbers by typeof, so isNumber returns true for them.",
        fa: "مقادیر NaN و Infinity توسط typeof از نوع number محسوب می‌شوند، بنابراین isNumber برای آن‌ها true برمی‌گرداند.",
      },
    },
  ],
  since: "1.38.0",
};
