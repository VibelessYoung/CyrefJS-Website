import type { DocPage } from "./types";

import { introductionDoc } from "./getting-started/introduction";
import { installationDoc } from "./getting-started/installation";
import { quickStartDoc } from "./getting-started/quick-start";
import { compactDoc } from "./utilities/array/compact";
import { chunkDoc } from "./utilities/array/chunk";
import { differenceDoc } from "./utilities/array/difference";
import { dropDoc } from "./utilities/array/drop";
import { dropRightDoc } from "./utilities/array/dropRight";
import { firstDoc } from "./utilities/array/first";
import { flattenDoc } from "./utilities/array/flatten";

export const docs: DocPage[] = [
  introductionDoc,
  installationDoc,
  quickStartDoc,
  compactDoc,
  chunkDoc,
  differenceDoc,
  dropDoc,
  dropRightDoc,
  firstDoc,
  flattenDoc,
];

export function getDocBySlug(slug: string): DocPage | undefined {
  return docs.find((doc) => doc.slug === slug);
}

export function getDocsByCategory(category: DocPage["category"]): DocPage[] {
  return docs.filter((doc) => doc.category === category);
}

export function searchDocs(query: string): DocPage[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return docs;
  }

  return docs.filter((doc) => {
    const searchableText = [
      doc.slug,
      doc.title.en,
      doc.title.fa,
      doc.description.en,
      doc.description.fa,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
