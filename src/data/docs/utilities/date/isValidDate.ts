import type { DocPage } from "../../types";

export const isValidDateDoc: DocPage = {
  slug: "utilities/date/is-valid-date",

  category: "date",

  title: {
    en: "isValidDate",
    fa: "isValidDate",
  },

  description: {
    en: "Checks whether a value is a valid JavaScript Date object.",
    fa: "بررسی می‌کند که آیا یک مقدار یک شیء Date معتبر در جاوااسکریپت است یا خیر.",
  },

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
    type: "value is Date",
    description: {
      en: "true if the value is a Date instance with a valid timestamp; otherwise, false. The return type also acts as a TypeScript type guard.",
      fa: "اگر مقدار یک نمونه از Date با timestamp معتبر باشد true و در غیر این صورت false برمی‌گرداند. نوع بازگشتی همچنین به‌عنوان Type Guard در TypeScript عمل می‌کند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Check whether a value is a valid Date.",
        fa: "بررسی می‌کند که آیا یک مقدار Date معتبر است یا خیر.",
      },
      language: "ts",
      code: `import { isValidDate } from "@cyref/js";

const value = new Date("2026-01-15");

const result = isValidDate(value);

console.log(result);
// true`,
    },

    {
      title: {
        en: "Invalid Date",
        fa: "تاریخ نامعتبر",
      },
      description: {
        en: "An invalid Date object returns false because its timestamp is NaN.",
        fa: "یک شیء Date نامعتبر مقدار false برمی‌گرداند، زیرا timestamp آن برابر NaN است.",
      },
      language: "ts",
      code: `import { isValidDate } from "@cyref/js";

const value = new Date("invalid");

const result = isValidDate(value);

console.log(result);
// false`,
    },

    {
      title: {
        en: "Non-Date values",
        fa: "مقادیر غیر Date",
      },
      description: {
        en: "Values that are not Date instances return false.",
        fa: "مقادیر غیر از نمونه Date مقدار false برمی‌گردانند.",
      },
      language: "ts",
      code: `import { isValidDate } from "@cyref/js";

console.log(isValidDate("2026-01-15"));
// false

console.log(isValidDate(123456789));
// false

console.log(isValidDate(null));
// false`,
    },

    {
      title: {
        en: "TypeScript type guard",
        fa: "Type Guard در TypeScript",
      },
      description: {
        en: "The value is narrowed to Date inside the conditional block.",
        fa: "درون شرط، TypeScript مقدار را به Date محدود می‌کند.",
      },
      language: "ts",
      code: `import { isValidDate } from "@cyref/js";

const value: unknown = new Date("2026-05-20");

if (isValidDate(value)) {
  console.log(value.getFullYear());
  // 2026
}`,
    },

    {
      title: {
        en: "Valid Date object",
        fa: "شیء Date معتبر",
      },
      description: {
        en: "A Date object with a valid timestamp returns true.",
        fa: "یک شیء Date با timestamp معتبر مقدار true برمی‌گرداند.",
      },
      language: "ts",
      code: `import { isValidDate } from "@cyref/js";

const value = new Date("2026-08-25T12:30:00");

console.log(isValidDate(value));
// true`,
    },
  ],

  since: "1.38.0",
};
