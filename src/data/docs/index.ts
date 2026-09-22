import type { DocPage } from "./types";

export const docs: DocPage[] = [];

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
