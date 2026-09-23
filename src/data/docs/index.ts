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
import { negateDoc } from "./utilities/function/negate";
import { noopDoc } from "./utilities/function/noop";
import { onceDoc } from "./utilities/function/once";
import { pipeDoc } from "./utilities/function/pipe";
import { throttleDoc } from "./utilities/function/throttle";
import { ceilToDoc } from "./utilities/number/ceilTo";
import { clampDoc } from "./utilities/number/clamp";
import { floorToDoc } from "./utilities/number/floorTo";
import { lerpDoc } from "./utilities/number/lerp";
import { percentageDoc } from "./utilities/number/percentage";
import { randomIntDoc } from "./utilities/number/randomInt";
import { roundToDoc } from "./utilities/number/roundTo";
import { deepCloneDoc } from "./utilities/object/deepClone";
import { defaultsDoc } from "./utilities/object/defaults";
import { filterObjectDoc } from "./utilities/object/filterObject";
import { getDoc } from "./utilities/object/get";
import { hasDoc } from "./utilities/object/has";
import { invertDoc } from "./utilities/object/invert";
import { isEmptyObjectDoc } from "./utilities/object/isEmptyObject";
import { mapKeysDoc } from "./utilities/object/mapKeys";
import { mapValuesDoc } from "./utilities/object/mapValues";
import { mergeDoc } from "./utilities/object/merge";
import { omitDoc } from "./utilities/object/omit";
import { pickDoc } from "./utilities/object/pick";
import { setDoc } from "./utilities/object/set";
import { camelCaseDoc } from "./utilities/string/camelCase";
import { capitalizeDoc } from "./utilities/string/capitalize";
import { capitalizeWordsDoc } from "./utilities/string/capitalizeWords";
import { constantCaseDoc } from "./utilities/string/constantCase";
import { kebabCaseDoc } from "./utilities/string/kebabCase";
import { normalizeWhitespaceDoc } from "./utilities/string/normalizeWhitespace";
import { padDoc } from "./utilities/string/pad";
import { pascalCaseDoc } from "./utilities/string/pascalCase";
import { removeWhitespaceDoc } from "./utilities/string/removeWhitespace";
import { reverseDoc } from "./utilities/string/reverse";
import { slugifyDoc } from "./utilities/string/slugify";
import { snakeCaseDoc } from "./utilities/string/snakeCase";
import { truncateDoc } from "./utilities/string/truncate";
import { tokenizeDoc } from "./utilities/string/tokenize";
import { isArrayDoc } from "./utilities/type/isArray";
import { isBooleanDoc } from "./utilities/type/isBoolean";
import { isDateDoc } from "./utilities/type/isDate";
import { isFunctionDoc } from "./utilities/type/isFunction";
import { isNilDoc } from "./utilities/type/isNil";
import { isNullDoc } from "./utilities/type/isNull";
import { isNumberDoc } from "./utilities/type/isNumber";
import { isObjectDoc } from "./utilities/type/isObject";
import { isPlainObjectDoc } from "./utilities/type/isPlainObject";
import { isRegExpDoc } from "./utilities/type/isRegExp";
import { isStringDoc } from "./utilities/type/isString";
import { isUndefinedDoc } from "./utilities/type/isUndefined";
import { buildQueryDoc } from "./utilities/url/buildQuery";
import { getQueryParamDoc } from "./utilities/url/getQueryParam";
import { parseQueryDoc } from "./utilities/url/parseQuery";
import { removeQueryParamDoc } from "./utilities/url/removeQueryParam";
import { setQueryParamDoc } from "./utilities/url/setQueryParam";
import { isEmailDoc } from "./utilities/validation/isEmail";

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
  negateDoc,
  noopDoc,
  onceDoc,
  pipeDoc,
  throttleDoc,
  ceilToDoc,
  clampDoc,
  floorToDoc,
  lerpDoc,
  percentageDoc,
  randomIntDoc,
  roundToDoc,
  deepCloneDoc,
  defaultsDoc,
  filterObjectDoc,
  getDoc,
  hasDoc,
  invertDoc,
  isEmptyObjectDoc,
  mapKeysDoc,
  mapValuesDoc,
  mergeDoc,
  omitDoc,
  pickDoc,
  setDoc,
  camelCaseDoc,
  capitalizeDoc,
  capitalizeWordsDoc,
  constantCaseDoc,
  kebabCaseDoc,
  normalizeWhitespaceDoc,
  padDoc,
  pascalCaseDoc,
  removeWhitespaceDoc,
  reverseDoc,
  slugifyDoc,
  snakeCaseDoc,
  tokenizeDoc,
  truncateDoc,
  isArrayDoc,
  isBooleanDoc,
  isDateDoc,
  isFunctionDoc,
  isNilDoc,
  isNullDoc,
  isNumberDoc,
  isObjectDoc,
  isPlainObjectDoc,
  isRegExpDoc,
  isStringDoc,
  isUndefinedDoc,
  buildQueryDoc,
  getQueryParamDoc,
  parseQueryDoc,
  removeQueryParamDoc,
  setQueryParamDoc,
  isEmailDoc,
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
