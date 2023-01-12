import { useEffect, useState } from 'react'
import { Dice } from '../components/Dice'
import { generateNewDice, resetAllDices } from '../utils/generateDices'

export const useDice = () => {
  const bestCount = localStorage.getItem('best') || '0'

  const [dice, setDice] = useState(resetAllDices())
  const [isWin, setIsWin] = useState(false)
  const [counts, setCounts] = useState(0)
  const [best, setBest] = useState(bestCount)

  function holdDice(id: string) {
    setDice((prev) =>
      prev.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      })
    )
  }

  function rollDice() {
    setCounts((prev) => prev + 1)
    setDice((prev) =>
      prev.map((dice) => {
        return dice.isHeld ? dice : generateNewDice()
      })
    )
  }

  function newGame() {
    if (counts < +bestCount || +bestCount === 0) {
      localStorage.setItem('best', counts.toString())
      setBest(counts.toString())
    }
    setCounts(0)
    setIsWin(false)
    setDice(resetAllDices())
  }

  const diceElements = dice.map((dice) => (
    <Dice
      key={dice.id}
      dice={dice.value}
      isHeld={dice.isHeld}
      onClick={() => holdDice(dice.id)}
    />
  ))

  useEffect(() => {
    const firstValue = dice[0].value
    const winCombination = dice.every(
      (el) => el.isHeld && el.value === firstValue
    )
    if (winCombination) {
      setIsWin(true)
    }
  }, [dice])

  return { newGame, rollDice, isWin, best, counts, diceElements }
}
