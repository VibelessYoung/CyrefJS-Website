import type { DocPage } from "../../types";

export const isEmptyObjectDoc: DocPage = {
  slug: "utilities/object/is-empty-object",
  category: "object",
  title: {
    en: "isEmptyObject",
    fa: "isEmptyObject",
  },
  description: {
    en: "Checks whether an object has no own enumerable string-keyed properties.",
    fa: "بررسی می‌کند که آیا یک شیء هیچ ویژگی رشته‌ای مستقیم و قابل‌شماری ندارد.",
  },
  parameters: [
    {
      name: "object",
      type: "object",
      required: true,
      description: {
        en: "The object to check.",
        fa: "شیئی که باید بررسی شود.",
      },
    },
  ],
  returns: {
    type: "boolean",
    description: {
      en: "true if the object has no own enumerable string-keyed properties; otherwise, false.",
      fa: "اگر شیء هیچ ویژگی رشته‌ای مستقیم و قابل‌شمارشی نداشته باشد true و در غیر این صورت false.",
    },
  },
  examples: [
    {
      title: {
        en: "Empty object",
        fa: "شیء خالی",
      },
      language: "ts",
      code: `isEmptyObject({});
// true`,
    },
    {
      title: {
        en: "Object with properties",
        fa: "شیء دارای ویژگی",
      },
      language: "ts",
      code: `isEmptyObject({
  name: "Amir",
});
// false`,
    },
    {
      title: {
        en: "Undefined values still count",
        fa: "مقادیر undefined همچنان حساب می‌شوند",
      },
      language: "ts",
      code: `isEmptyObject({
  value: undefined,
});
// false`,
    },
    {
      title: {
        en: "Null values still count",
        fa: "مقادیر null همچنان حساب می‌شوند",
      },
      language: "ts",
      code: `isEmptyObject({
  value: null,
});
// false`,
    },
    {
      title: {
        en: "Non-enumerable properties",
        fa: "ویژگی‌های غیرقابل‌شمارش",
      },
      language: "ts",
      code: `const object = {};

Object.defineProperty(object, "hidden", {
  value: 123,
  enumerable: false,
});

isEmptyObject(object);
// true`,
    },
    {
      title: {
        en: "Symbol properties",
        fa: "ویژگی‌های Symbol",
      },
      language: "ts",
      code: `const id = Symbol("id");

const object = {
  [id]: 123,
};

isEmptyObject(object);
// true`,
    },
    {
      title: {
        en: "Inherited properties",
        fa: "ویژگی‌های inherited",
      },
      language: "ts",
      code: `const parent = {
  name: "Amir",
};

const object = Object.create(parent);

isEmptyObject(object);
// true`,
    },
  ],
  sections: [
    {
      id: "behavior",
      title: {
        en: "How it works",
        fa: "نحوه عملکرد",
      },
      content: {
        en: "The function uses Object.keys and checks whether the resulting array contains zero keys.",
        fa: "این تابع از Object.keys استفاده می‌کند و بررسی می‌کند که آیا آرایه حاصل هیچ کلیدی ندارد یا خیر.",
      },
    },
    {
      id: "included-properties",
      title: {
        en: "Included properties",
        fa: "ویژگی‌های قابل بررسی",
      },
      content: {
        en: "Only own enumerable string-keyed properties are considered. Symbol properties, non-enumerable properties, and inherited properties are ignored.",
        fa: "فقط ویژگی‌های رشته‌ای، مستقیم و قابل‌شمارش بررسی می‌شوند. ویژگی‌های Symbol، غیرقابل‌شمارش و inherited نادیده گرفته می‌شوند.",
      },
    },
  ],
  since: "1.38.0",
};
