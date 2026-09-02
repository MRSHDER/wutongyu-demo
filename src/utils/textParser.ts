export function normalizeText(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, '');
}

export function findMatchedTerms<T extends string>(
  text: string,
  dictionary: Array<{ value: T; terms: string[] }>,
): { values: T[]; terms: string[] } {
  const normalized = normalizeText(text);
  const values: T[] = [];
  const terms: string[] = [];

  dictionary.forEach((entry) => {
    entry.terms.forEach((term) => {
      if (normalized.includes(normalizeText(term))) {
        values.push(entry.value);
        terms.push(term);
      }
    });
  });

  return { values: [...new Set(values)], terms: [...new Set(terms)] };
}
