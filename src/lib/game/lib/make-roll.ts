function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function makeRoll(input: number, config: { min?: number; max?: number } = {}) {
  const { min = 0, max = 100 } = config
  const roll = Math.floor(rand(min, max))
  const success = input > roll
  return {
    roll,
    min,
    max,
    input,
    success,
  }
}

export { makeRoll, rand }
