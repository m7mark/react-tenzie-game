import { nanoid } from 'nanoid'

// Create array of random numbers from 1 to 6
export function resetAllDices() {
  const dices = []
  for (let i = 0; i < 10; i++) {
    dices.push(generateNewDice())
  }
  return dices
}

export function generateNewDice() {
  return {
    id: nanoid(),
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
  }
}
