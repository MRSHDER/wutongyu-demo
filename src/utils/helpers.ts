export function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

export function hasIntersection<T>(left: T[], right: T[]): boolean {
  return left.some((item) => right.includes(item));
}
