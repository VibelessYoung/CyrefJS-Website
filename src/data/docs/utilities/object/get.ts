import type { DocPage } from "../../types";

export const getDoc: DocPage = {
  slug: "utilities/object/get",
  category: "object",
  title: {
    en: "get",
    fa: "get",
  },
  description: {
    en: "Gets a property value from an object by key, returning a default value when the property value is nullish.",
    fa: "مقدار یک ویژگی را بر اساس کلید از یک شیء دریافت می‌کند و اگر مقدار ویژگی null یا undefined باشد، مقدار پیش‌فرض را برمی‌گرداند.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The object to read the property from.",
        fa: "شیئی که باید مقدار ویژگی از آن خوانده شود.",
      },
    },
    {
      name: "path",
      type: "K",
      required: true,
      description: {
        en: "The key of the property to retrieve.",
        fa: "کلید ویژگی موردنظر برای دریافت مقدار.",
      },
    },
    {
      name: "defaultValue",
      type: "T[K]",
      required: false,
      description: {
        en: "The value returned when the property value is null or undefined.",
        fa: "مقداری که زمانی که مقدار ویژگی null یا undefined باشد برگردانده می‌شود.",
      },
    },
  ],
  returns: {
    type: "T[K] | undefined",
    description: {
      en: "The property value, or the default value when the property value is nullish.",
      fa: "مقدار ویژگی، یا در صورت null یا undefined بودن مقدار ویژگی، مقدار پیش‌فرض.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

get(user, "name");
// "Amir"`,
    },
    {
      title: {
        en: "Using a default value",
        fa: "استفاده از مقدار پیش‌فرض",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
};

get(user, "age", 18);
// 18`,
    },
    {
      title: {
        en: "Existing values are preserved",
        fa: "مقادیر موجود حفظ می‌شوند",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
  age: 22,
};

get(user, "age", 18);
// 22`,
    },
    {
      title: {
        en: "Null values use the default",
        fa: "مقادیر null از مقدار پیش‌فرض استفاده می‌کنند",
      },
      language: "ts",
      code: `const user = {
  name: null as string | null,
};

get(user, "name", "Unknown");
// "Unknown"`,
    },
    {
      title: {
        en: "Undefined values use the default",
        fa: "مقادیر undefined از مقدار پیش‌فرض استفاده می‌کنند",
      },
      language: "ts",
      code: `const user = {
  name: undefined as string | undefined,
};

get(user, "name", "Unknown");
// "Unknown"`,
    },
    {
      title: {
        en: "Falsy values are preserved",
        fa: "مقادیر falsy حفظ می‌شوند",
      },
      language: "ts",
      code: `const data = {
  count: 0,
  active: false,
  name: "",
};

get(data, "count", 10);
// 0

get(data, "active", true);
// false

get(data, "name", "Unknown");
// ""`,
    },
    {
      title: {
        en: "Without a default value",
        fa: "بدون مقدار پیش‌فرض",
      },
      language: "ts",
      code: `const user = {
  name: "Amir",
};

get(user, "age");
// undefined`,
    },
    {
      title: {
        en: "Nested objects are accessed by direct key only",
        fa: "اشیای تو در تو فقط با کلید مستقیم قابل دسترسی هستند",
      },
      language: "ts",
      code: `const user = {
  profile: {
    name: "Amir",
  },
};

get(user, "profile");
// { name: "Amir" }

// This implementation does not support:
// get(user, "profile.name")`,
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
        en: "The function reads the property using object[path]. If the resulting value is null or undefined, it returns defaultValue instead. Other falsy values such as 0, false, and an empty string are preserved.",
        fa: "این تابع مقدار ویژگی را با استفاده از object[path] می‌خواند. اگر مقدار به‌دست‌آمده null یا undefined باشد، defaultValue را برمی‌گرداند. سایر مقادیر falsy مانند 0، false و رشته خالی بدون تغییر حفظ می‌شوند.",
      },
    },
    {
      id: "shallow",
      title: {
        en: "Direct property access",
        fa: "دسترسی مستقیم به ویژگی",
      },
      content: {
        en: "The path parameter is a key of the object (K extends keyof T), so this utility accesses only a direct property. It does not parse dot-separated paths or traverse nested objects.",
        fa: "پارامتر path یک کلید از object است (K extends keyof T)، بنابراین این utility فقط به ویژگی مستقیم دسترسی دارد و مسیرهای نقطه‌ای یا اشیای تو در تو را پیمایش نمی‌کند.",
      },
    },
  ],
  since: "1.38.0",
};
