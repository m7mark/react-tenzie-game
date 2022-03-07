import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Die } from './components/Die';
import Confetti from 'react-confetti'
import { Counter } from './components/Counter';
import { allNewDice, generateNewDie } from './utils/generateDies';

const MainContainer = styled.main`
  margin-top: 4em;
  display: flex;
  justify-content: center;
`
const MainWrapper = styled.main`
  background-color: #F5F5F5;
  height: 500px;
  width: 700px;
  padding: 2em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const HeadText = styled.h1`
  margin: 0;
  margin-top: .3em;
  font-size: 2.4em;
  color: #2B283A;
  font-weight: 700;
`
const DescriptionText = styled.p`
  margin-top: 0;
  font-size: 1.2em;
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
  margin-top: 1em;
  border: none;
  font-size: 1.2em;
  color: white;
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
    if (counts < +bestCount || +bestCount === 0) {
      localStorage.setItem('best', counts.toString())
      setBest(counts.toString())
    }
    setCounts(0)
    setTenzies(false)
    setDice(allNewDice())
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
        <Counter best={best} counts={counts} />
      </MainWrapper>
    </MainContainer>
  );
}

export default App;
