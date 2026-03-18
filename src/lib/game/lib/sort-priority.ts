function sortPriority<T extends { priority?: number }>(
  array: Array<T>,
): Array<T> {
  return array.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0))
}

export { sortPriority }
