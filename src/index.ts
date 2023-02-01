export function removeDuplicatesOfArray<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}