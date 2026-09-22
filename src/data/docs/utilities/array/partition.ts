import type { DocPage } from "../../types";

export const partitionDoc: DocPage = {
  slug: "utilities/array/partition",

  category: "array",

  title: {
    en: "partition",
    fa: "partition",
  },

  description: {
    en: "Splits an array into two arrays based on whether each element satisfies a predicate function.",
    fa: "یک آرایه را بر اساس نتیجه یک تابع شرطی به دو آرایه تقسیم می‌کند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array whose elements should be divided into two groups.",
        fa: "آرایه‌ای که عناصر آن باید به دو گروه تقسیم شوند.",
      },
    },
    {
      name: "predicate",
      type: "(item: T) => boolean",
      required: true,
      description: {
        en: "A function that determines which group each element belongs to. Elements returning true are placed in the first array, while elements returning false are placed in the second array.",
        fa: "تابعی که مشخص می‌کند هر عنصر در کدام گروه قرار بگیرد. عناصری که مقدار true برمی‌گردانند در آرایه اول و عناصری که false برمی‌گردانند در آرایه دوم قرار می‌گیرند.",
      },
    },
  ],

  returns: {
    type: "[T[], T[]]",
    description: {
      en: "A tuple containing two arrays: the first contains elements for which the predicate returned true, and the second contains elements for which it returned false.",
      fa: "یک tuple شامل دو آرایه؛ آرایه اول شامل عناصری است که predicate برای آن‌ها true برگردانده و آرایه دوم شامل عناصری است که predicate برای آن‌ها false برگردانده است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Separate numbers into even and odd groups.",
        fa: "اعداد را به دو گروه زوج و فرد تقسیم می‌کند.",
      },

      language: "ts",

      code: `import { partition } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5, 6];

const [even, odd] = partition(
  numbers,
  (item) => item % 2 === 0,
);

console.log(even);
// [2, 4, 6]

console.log(odd);
// [1, 3, 5]`,
    },

    {
      title: {
        en: "Partition objects",
        fa: "تقسیم آبجکت‌ها",
      },

      description: {
        en: "Partition objects based on a property or condition.",
        fa: "آبجکت‌ها را بر اساس یک property یا شرط مشخص تقسیم می‌کند.",
      },

      language: "ts",

      code: `import { partition } from "@cyref/js";

const users = [
  { name: "Amir", active: true },
  { name: "Sara", active: false },
  { name: "Reza", active: true },
];

const [activeUsers, inactiveUsers] = partition(
  users,
  (user) => user.active,
);

console.log(activeUsers);
// [
//   { name: "Amir", active: true },
//   { name: "Reza", active: true },
// ]

console.log(inactiveUsers);
// [
//   { name: "Sara", active: false },
// ]`,
    },

    {
      title: {
        en: "Predicate returns false",
        fa: "وقتی predicate مقدار false برمی‌گرداند",
      },

      description: {
        en: "Elements that do not satisfy the predicate are placed in the second array.",
        fa: "عناصری که شرط predicate را برآورده نمی‌کنند در آرایه دوم قرار می‌گیرند.",
      },

      language: "ts",

      code: `import { partition } from "@cyref/js";

const numbers = [1, 2, 3, 4];

const result = partition(
  numbers,
  (item) => item > 10,
);

console.log(result);
// [[], [1, 2, 3, 4]]`,
    },

    {
      title: {
        en: "Empty array",
        fa: "آرایه خالی",
      },

      description: {
        en: "An empty array produces two empty arrays.",
        fa: "یک آرایه خالی، دو آرایه خالی ایجاد می‌کند.",
      },

      language: "ts",

      code: `import { partition } from "@cyref/js";

const result = partition(
  [],
  (item) => item > 0,
);

console.log(result);
// [[], []]`,
    },
  ],

  since: "1.38.0",
};
