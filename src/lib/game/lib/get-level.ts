function getLevel(experience: number) {
  return Math.floor(Math.cbrt(experience))
}

function getBaseExperience(level: number) {
  return Math.floor(Math.pow(level, 3))
}

function getExperienceToNextLevel(level: number, exp: number = 0) {
  return getBaseExperience(level + 1) - (getBaseExperience(level) + exp)
}

export { getBaseExperience, getExperienceToNextLevel, getLevel }
