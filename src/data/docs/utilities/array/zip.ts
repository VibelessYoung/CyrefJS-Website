import type { DocPage } from "../../types";

export const zipDoc: DocPage = {
  slug: "utilities/array/zip",

  category: "array",

  title: {
    en: "zip",
    fa: "zip",
  },

  description: {
    en: "Combines two arrays element by element into an array of pairs, stopping when the shorter array is exhausted.",
    fa: "دو آرایه را عنصر به عنصر بر اساس index با یکدیگر جفت می‌کند و زمانی که آرایه کوتاه‌تر تمام شود، متوقف می‌شود.",
  },

  parameters: [
    {
      name: "array1",
      type: "T[]",
      required: true,
      description: {
        en: "The first array whose elements will be paired with elements from the second array.",
        fa: "آرایه اول که عناصر آن با عناصر آرایه دوم جفت می‌شوند.",
      },
    },
    {
      name: "array2",
      type: "U[]",
      required: true,
      description: {
        en: "The second array whose elements will be paired with elements from the first array.",
        fa: "آرایه دوم که عناصر آن با عناصر آرایه اول جفت می‌شوند.",
      },
    },
  ],

  returns: {
    type: "[T, U][]",
    description: {
      en: "A new array containing pairs of corresponding elements from both input arrays. The result length is equal to the length of the shorter input array.",
      fa: "یک آرایه جدید شامل جفت‌های متناظر از عناصر هر دو آرایه. طول نتیجه برابر با طول آرایه کوتاه‌تر است.",
    },
  },

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      description: {
        en: "Combine two arrays element by element into pairs.",
        fa: "دو آرایه را عنصر به عنصر با یکدیگر جفت می‌کند.",
      },
      language: "ts",
      code: `import { zip } from "@cyref/js";

const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];

const result = zip(numbers, letters);

console.log(result);
// [[1, "a"], [2, "b"], [3, "c"]]`,
    },

    {
      title: {
        en: "Different array lengths",
        fa: "آرایه‌هایی با طول متفاوت",
      },
      description: {
        en: "When the arrays have different lengths, zip stops when the shorter array is exhausted.",
        fa: "اگر طول دو آرایه متفاوت باشد، zip زمانی متوقف می‌شود که آرایه کوتاه‌تر تمام شود.",
      },
      language: "ts",
      code: `import { zip } from "@cyref/js";

const numbers = [1, 2, 3, 4];
const letters = ["a", "b"];

const result = zip(numbers, letters);

console.log(result);
// [[1, "a"], [2, "b"]]`,
    },

    {
      title: {
        en: "Different types",
        fa: "انواع متفاوت",
      },
      description: {
        en: "The two arrays can contain different types of values.",
        fa: "دو آرایه می‌توانند شامل مقادیر با typeهای متفاوت باشند.",
      },
      language: "ts",
      code: `import { zip } from "@cyref/js";

const names = ["Alice", "Bob", "Charlie"];
const ages = [25, 30, 35];

const result = zip(names, ages);

console.log(result);
// [["Alice", 25], ["Bob", 30], ["Charlie", 35]]`,
    },

    {
      title: {
        en: "Empty arrays",
        fa: "آرایه‌های خالی",
      },
      description: {
        en: "If either input array is empty, the result is an empty array.",
        fa: "اگر هر کدام از آرایه‌های ورودی خالی باشد، نتیجه یک آرایه خالی خواهد بود.",
      },
      language: "ts",
      code: `import { zip } from "@cyref/js";

const numbers = [1, 2, 3];
const letters: string[] = [];

const result = zip(numbers, letters);

console.log(result);
// []`,
    },

    {
      title: {
        en: "Objects",
        fa: "اشیاء",
      },
      description: {
        en: "zip can also pair arrays containing objects and primitive values.",
        fa: "تابع zip می‌تواند آرایه‌های شامل objectها و مقادیر primitive را نیز با یکدیگر جفت کند.",
      },
      language: "ts",
      code: `import { zip } from "@cyref/js";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const roles = ["admin", "user"];

const result = zip(users, roles);

console.log(result);
// [
//   [{ id: 1, name: "Alice" }, "admin"],
//   [{ id: 2, name: "Bob" }, "user"],
// ]`,
    },
  ],

  since: "1.38.0",
};
