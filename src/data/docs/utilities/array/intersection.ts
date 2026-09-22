import type { DocPage } from "../../types";

export const intersectionDoc: DocPage = {
  slug: "utilities/array/intersection",

  category: "array",

  title: {
    en: "intersection",
    fa: "intersection",
  },

  description: {
    en: "Returns the elements from the first array that are also included in the second array.",
    fa: "عناصری از آرایه اول را برمی‌گرداند که در آرایه دوم نیز وجود دارند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The first array whose elements are checked against the second array.",
        fa: "آرایه اول که عناصر آن با آرایه دوم بررسی می‌شوند.",
      },
    },
    {
      name: "values",
      type: "T[]",
      required: true,
      description: {
        en: "The array used to determine which elements from the first array should be included.",
        fa: "آرایه‌ای که برای تعیین عناصر مشترک با آرایه اول استفاده می‌شود.",
      },
    },
  ],

  returns: {
    type: "T[]",
    description: {
      en: "A new array containing elements from the first array that are also present in the second array.",
      fa: "یک آرایه جدید شامل عناصری از آرایه اول که در آرایه دوم نیز وجود دارند.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Find the elements that exist in both arrays.",
        fa: "عناصر مشترک بین دو آرایه را پیدا می‌کند.",
      },

      language: "ts",

      code: `import { intersection } from "@cyref/js";

const array = [1, 2, 3, 4];
const values = [3, 4, 5, 6];

const result = intersection(array, values);

console.log(result);
// [3, 4]`,
    },

    {
      title: {
        en: "With strings",
        fa: "با رشته‌ها",
      },

      description: {
        en: "The function also works with arrays of strings.",
        fa: "این تابع با آرایه‌هایی از رشته‌ها نیز کار می‌کند.",
      },

      language: "ts",

      code: `import { intersection } from "@cyref/js";

const array = ["javascript", "typescript", "python"];
const values = ["typescript", "python", "go"];

const result = intersection(array, values);

console.log(result);
// ["typescript", "python"]`,
    },

    {
      title: {
        en: "No common elements",
        fa: "بدون عنصر مشترک",
      },

      description: {
        en: "If the arrays have no matching elements, the function returns an empty array.",
        fa: "اگر دو آرایه هیچ عنصر مشترکی نداشته باشند، تابع یک آرایه خالی برمی‌گرداند.",
      },

      language: "ts",

      code: `import { intersection } from "@cyref/js";

const array = [1, 2, 3];
const values = [4, 5, 6];

const result = intersection(array, values);

console.log(result);
// []`,
    },

    {
      title: {
        en: "Duplicate elements",
        fa: "عناصر تکراری",
      },

      description: {
        en: "The function checks each element of the first array independently, so duplicate elements in the first array are preserved when they are included in the second array.",
        fa: "تابع هر عنصر آرایه اول را به‌صورت جداگانه بررسی می‌کند؛ بنابراین عناصر تکراری آرایه اول در صورت وجود در آرایه دوم حفظ می‌شوند.",
      },

      language: "ts",

      code: `import { intersection } from "@cyref/js";

const array = [1, 2, 2, 3];
const values = [2, 3];

const result = intersection(array, values);

console.log(result);
// [2, 2, 3]`,
    },

    {
      title: {
        en: "Empty arrays",
        fa: "آرایه‌های خالی",
      },

      description: {
        en: "An empty input array produces an empty result.",
        fa: "اگر آرایه ورودی خالی باشد، نتیجه نیز یک آرایه خالی خواهد بود.",
      },

      language: "ts",

      code: `import { intersection } from "@cyref/js";

const result = intersection([], [1, 2, 3]);

console.log(result);
// []`,
    },
  ],

  since: "1.38.0",
};
