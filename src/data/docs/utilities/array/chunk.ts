import type { DocPage } from "../../types";

export const chunkDoc: DocPage = {
  slug: "utilities/array/chunk",

  category: "array",

  title: {
    en: "chunk",
    fa: "chunk",
  },

  description: {
    en: "Splits an array into smaller arrays of a specified size.",
    fa: "یک آرایه را به چند آرایه کوچک‌تر با اندازه مشخص تقسیم می‌کند.",
  },

  parameters: [
    {
      name: "array",
      type: "T[]",
      required: true,
      description: {
        en: "The array to split into smaller chunks.",
        fa: "آرایه‌ای که باید به بخش‌های کوچک‌تر تقسیم شود.",
      },
    },
    {
      name: "size",
      type: "number",
      required: true,
      description: {
        en: "The maximum number of elements in each chunk.",
        fa: "حداکثر تعداد عناصر در هر بخش.",
      },
    },
  ],

  returns: {
    type: "T[][]",
    description: {
      en: "A new array containing the generated chunks.",
      fa: "یک آرایه جدید شامل بخش‌های ایجادشده.",
    },
  },

  throws: [
    {
      en: "Throws an error when size is less than or equal to 0.",
      fa: "اگر size کوچک‌تر یا مساوی صفر باشد، خطا ایجاد می‌کند.",
    },
  ],

  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },

      description: {
        en: "Split an array into chunks of three elements.",
        fa: "یک آرایه را به بخش‌های سه‌تایی تقسیم می‌کند.",
      },

      language: "ts",

      code: `import { chunk } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = chunk(numbers, 3);

console.log(result);
// [[1, 2, 3], [4, 5, 6], [7]]`,
    },

    {
      title: {
        en: "The last chunk can be smaller",
        fa: "بخش آخر می‌تواند کوچک‌تر باشد",
      },

      description: {
        en: "When the array length is not evenly divisible by the chunk size, the final chunk contains the remaining elements.",
        fa: "اگر طول آرایه به اندازه بخش تقسیم‌پذیر نباشد، بخش آخر شامل عناصر باقی‌مانده خواهد بود.",
      },

      language: "ts",

      code: `import { chunk } from "@cyref/js";

const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = chunk(numbers, 3);

console.log(result);
// [[1, 2, 3], [4, 5, 6], [7]]`,
    },

    {
      title: {
        en: "Invalid chunk size",
        fa: "اندازه نامعتبر برای بخش",
      },

      description: {
        en: "The function throws an error when the chunk size is 0 or negative.",
        fa: "اگر اندازه بخش صفر یا منفی باشد، تابع خطا ایجاد می‌کند.",
      },

      language: "ts",

      code: `import { chunk } from "@cyref/js";

const numbers = [1, 2, 3, 4];

const result = chunk(numbers, 0);
// Error: Chunk size must be greater than 0`,
    },
  ],

  since: "1.38.0",
};
