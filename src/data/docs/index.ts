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
import { flattenDeepDoc } from "./utilities/array/flattenDeep";
import { groupByDoc } from "./utilities/array/groupBy";
import { intersectionDoc } from "./utilities/array/intersection";
import { keyByDoc } from "./utilities/array/key-by";
import { lastDoc } from "./utilities/array/last";
import { partitionDoc } from "./utilities/array/partition";
import { sampleDoc } from "./utilities/array/sample";
import { shuffleDoc } from "./utilities/array/shuffle";
import { takeDoc } from "./utilities/array/take";
import { takeRightDoc } from "./utilities/array/takeRight";
import { unionDoc } from "./utilities/array/union";
import { uniqueDoc } from "./utilities/array/unique";
import { unzipDoc } from "./utilities/array/unzip";
import { zipDoc } from "./utilities/array/zip";
import { addDaysDoc } from "./utilities/date/addDays";
import { differenceInDaysDoc } from "./utilities/date/differenceInDays";
import { endOfDayDoc } from "./utilities/date/endOfDay";
import { isAfterDoc } from "./utilities/date/isAfter";
import { isBeforeDoc } from "./utilities/date/isBefore";
import { isValidDateDoc } from "./utilities/date/isValidDate";
import { startOfDayDoc } from "./utilities/date/startOfDay";
import { composeDoc } from "./utilities/function/compose";
import { curryDoc } from "./utilities/function/curry";
import { debounceDoc } from "./utilities/function/debounce";
import { identityDoc } from "./utilities/function/identity";
import { memoizeDoc } from "./utilities/function/memoize";

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
  flattenDeepDoc,
  groupByDoc,
  intersectionDoc,
  keyByDoc,
  lastDoc,
  partitionDoc,
  sampleDoc,
  shuffleDoc,
  takeDoc,
  takeRightDoc,
  unionDoc,
  uniqueDoc,
  unzipDoc,
  zipDoc,
  addDaysDoc,
  differenceInDaysDoc,
  endOfDayDoc,
  isAfterDoc,
  isBeforeDoc,
  isValidDateDoc,
  startOfDayDoc,
  composeDoc,
  curryDoc,
  debounceDoc,
  identityDoc,
  memoizeDoc,
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
