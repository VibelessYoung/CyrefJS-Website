import type { DocPage } from "../../types";

export const mergeDoc: DocPage = {
  slug: "utilities/object/merge",
  category: "object",
  title: {
    en: "merge",
    fa: "merge",
  },
  description: {
    en: "Creates a new object by shallowly merging the properties of an object and a source object, with source properties overriding existing properties.",
    fa: "یک شیء جدید با ترکیب سطحی ویژگی‌های یک شیء و یک source ایجاد می‌کند؛ در صورت وجود کلید مشترک، مقدار source جایگزین مقدار قبلی می‌شود.",
  },
  parameters: [
    {
      name: "object",
      type: "T",
      required: true,
      description: {
        en: "The base object to merge into.",
        fa: "شیء پایه‌ای که باید با source ترکیب شود.",
      },
    },
    {
      name: "source",
      type: "U",
      required: true,
      description: {
        en: "The object whose properties are added to or used to override the base object.",
        fa: "شیئی که ویژگی‌های آن به شیء پایه اضافه می‌شوند یا ویژگی‌های موجود را جایگزین می‌کنند.",
      },
    },
  ],
  returns: {
    type: "Omit<T, keyof U> & U",
    description: {
      en: "A new shallowly merged object containing properties from both objects, with source properties taking precedence over object properties.",
      fa: "یک شیء جدید با ترکیب سطحی ویژگی‌های هر دو شیء که در آن ویژگی‌های source اولویت دارند.",
    },
  },
  examples: [
    {
      title: {
        en: "Basic usage",
        fa: "استفاده پایه",
      },
      language: "ts",
      code: `const object = {
  name: "Amir",
  age: 22,
};

const source = {
  role: "developer",
};

merge(object, source);
// {
//   name: "Amir",
//   age: 22,
//   role: "developer",
// }`,
    },
    {
      title: {
        en: "Source overrides existing properties",
        fa: "source ویژگی‌های موجود را جایگزین می‌کند",
      },
      language: "ts",
      code: `const object = {
  name: "Amir",
  age: 22,
};

const source = {
  age: 25,
};

merge(object, source);
// {
//   name: "Amir",
//   age: 25,
// }`,
    },
    {
      title: {
        en: "Adding new properties",
        fa: "اضافه کردن ویژگی‌های جدید",
      },
      language: "ts",
      code: `const object = {
  name: "Amir",
};

const source = {
  age: 22,
  role: "developer",
};

merge(object, source);
// {
//   name: "Amir",
//   age: 22,
//   role: "developer",
// }`,
    },
    {
      title: {
        en: "Nested objects are not deeply merged",
        fa: "اشیای تو در تو به‌صورت عمیق merge نمی‌شوند",
      },
      language: "ts",
      code: `const object = {
  user: {
    name: "Amir",
    age: 22,
  },
};

const source = {
  user: {
    role: "developer",
  },
};

merge(object, source);
// {
//   user: {
//     role: "developer",
//   },
// }`,
    },
    {
      title: {
        en: "Empty objects",
        fa: "اشیای خالی",
      },
      language: "ts",
      code: `merge({}, {
  name: "Amir",
});
// {
//   name: "Amir",
// }

merge({
  name: "Amir",
}, {});
// {
//   name: "Amir",
// }`,
    },
    {
      title: {
        en: "Original objects are unchanged",
        fa: "اشیای اصلی تغییر نمی‌کنند",
      },
      language: "ts",
      code: `const object = {
  name: "Amir",
};

const source = {
  age: 22,
};

const result = merge(object, source);

console.log(object);
// {
//   name: "Amir",
// }

console.log(source);
// {
//   age: 22,
// }`,
    },
    {
      title: {
        en: "Falsy values are preserved",
        fa: "مقادیر falsy حفظ می‌شوند",
      },
      language: "ts",
      code: `const object = {
  active: true,
  count: 10,
};

const source = {
  active: false,
  count: 0,
};

merge(object, source);
// {
//   active: false,
//   count: 0,
// }`,
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
        en: "The function uses object spread syntax to create a new object. Properties from object are copied first, followed by properties from source.",
        fa: "این تابع از spread syntax استفاده می‌کند تا یک شیء جدید ایجاد کند. ابتدا ویژگی‌های object و سپس ویژگی‌های source کپی می‌شوند.",
      },
    },
    {
      id: "precedence",
      title: {
        en: "Property precedence",
        fa: "اولویت ویژگی‌ها",
      },
      content: {
        en: "When both objects contain the same key, the value from source replaces the value from object because source is spread afterward.",
        fa: "اگر هر دو شیء دارای یک کلید یکسان باشند، مقدار source جایگزین مقدار object می‌شود، زیرا source بعد از object spread می‌شود.",
      },
    },
    {
      id: "shallow",
      title: {
        en: "Shallow merge",
        fa: "ترکیب سطحی",
      },
      content: {
        en: "The merge is shallow. Nested objects and arrays are not recursively merged or cloned; their references are copied.",
        fa: "این merge سطحی است. اشیای تو در تو و آرایه‌ها به‌صورت بازگشتی merge یا clone نمی‌شوند و reference آن‌ها کپی می‌شود.",
      },
    },
  ],
  since: "1.38.0",
};
