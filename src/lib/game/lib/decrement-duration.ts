function decrementDuration<T extends { duration?: number }>(value: T): T {
  if (value.duration) {
    return {
      ...value,
      duration: value.duration - 1,
    }
  }

  return value
}

export { decrementDuration }
