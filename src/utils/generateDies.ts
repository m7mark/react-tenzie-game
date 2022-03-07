import { nanoid } from "nanoid"

  // Create array of rdandom numbers from 1 to 6
  export function allNewDice() {
    const dies = []
    for (let i = 0; i < 10; i++) {
      dies.push(generateNewDie())
    }
    return dies
  }
  export function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }