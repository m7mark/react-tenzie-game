import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Die } from './components/Die';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import { Counter } from './components/Counter';

const MainContainer = styled.main`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`
const MainWrapper = styled.main`
  background-color: #F5F5F5;
  height: 500px;
  width: 700px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const HeadText = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-size: 28px;
  color: #2B283A;
  font-weight: 700;
`
const DescriptionText = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`
const DiesWrapper = styled.main`
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  gap: 20px;
`
const RollButton = styled.button`
  width: 130px;
  height: 50px;
  background-color: #5035FF;
  border-radius: 4px;
  margin-top: 30px;
  border: none;
  font-size: 18px;
  color: white;
  line-height: 19px;
  font-weight: 700;
  cursor: pointer;
  &:active {
    outline: none;
    box-shadow: inset 0px 0px 5px #c1c1c1;
  }
  &:focus {
    outline: none;
  }
`
function App() {

  const bestCount = localStorage.getItem('best') || '0'
  function holdDice(id: string) {
    setDice(prev => prev.map(dice => {
      return dice.id === id
        ? { ...dice, isHeld: !dice.isHeld }
        : dice
    }))
  }
  function rollDice() {
    setCounts(prev => prev + 1)
    setDice(prev => prev.map(dice => {
      return dice.isHeld
        ? dice
        : generateNewDie()
    }))
  }
  function newGame() {
    if (+bestCount > counts) {
      localStorage.setItem('best', counts.toString())
      setBest(counts.toString())
    }
    setCounts(0)
    setTenzies(false)
    setDice(allNewDice())
  }
  // Create array of random numbers from 1 to 6
  function allNewDice() {
    const dies = []
    for (let i = 0; i < 10; i++) {
      dies.push(generateNewDie())
    }
    return dies
  }
  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [counts, setCounts] = useState(0);
  const [best, setBest] = useState(bestCount);

  useEffect(() => {
    const firstValue = dice[0].value
    const winCombination = dice.every(el => el.isHeld && el.value === firstValue)
    if (winCombination) {
      setTenzies(true)
    }
  }, [dice]);

  const diceElements = dice.map(dice =>
    <Die
      key={dice.id}
      dice={dice.value}
      isHeld={dice.isHeld}
      handleClick={() => holdDice(dice.id)} />
  )

  return (
    <MainContainer>
      <MainWrapper>
        {tenzies && <Confetti height={window.innerHeight - 1} />}
        <HeadText>Tenzies</HeadText>
        <DescriptionText>
          Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
        </DescriptionText>
        <DiesWrapper>
          {diceElements}
        </DiesWrapper>
        {tenzies
          ? <RollButton onClick={() => newGame()}>New Game</RollButton>
          : <RollButton onClick={() => rollDice()}>Roll</RollButton>
        }
        <Counter best={best} counts={counts}/>
      </MainWrapper>
    </MainContainer>
  );
}

export default App;
