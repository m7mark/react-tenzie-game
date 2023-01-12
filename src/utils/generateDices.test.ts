import { generateNewDice, resetAllDices } from './generateDices'

test('generate numbers from 1 to 6', () => {
  expect(generateNewDice().value).toBeGreaterThanOrEqual(1)
  expect(generateNewDice().value).toBeLessThanOrEqual(6)
})

test('dices array length', () => {
  expect(resetAllDices()).toHaveLength(10)
})
