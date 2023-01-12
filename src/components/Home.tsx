import styled from '@emotion/styled'
import Confetti from 'react-confetti'
import { useDice } from '../hooks/useDice'
import { Counter } from './Counter'

const HomeContainer = styled.div`
  margin-top: 4em;
  display: flex;
  justify-content: center;
`
const HomeWrapper = styled.main`
  background-color: #f5f5f5;
  height: 500px;
  width: 700px;
  padding-top: 2em;
  padding-bottom: 2em;
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const HeadText = styled.h1`
  margin: 0;
  margin-top: 0.3em;
  font-size: 2.4em;
  color: #2b283a;
  font-weight: 700;
`
const DescriptionText = styled.p`
  margin-top: 0;
  font-size: 1.2em;
  font-weight: 300;
  text-align: center;
  padding-left: 2em;
  padding-right: 2em;
`
const DicesWrapper = styled.main`
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  gap: 20px;
  @media (max-width: 480px) {
    gap: 16px;
  }
`
const RollButton = styled.button`
  width: 130px;
  height: 50px;
  background-color: #5035ff;
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

export const Home = () => {
  const { best, counts, isWin, newGame, rollDice, diceElements } = useDice()
  return (
    <HomeContainer>
      <HomeWrapper>
        {isWin && (
          <Confetti
            height={window.innerHeight - 1}
            width={window.innerWidth - 1}
          />
        )}
        <HeadText>Tenzies</HeadText>
        <DescriptionText>
          Roll until all dice are the same. Click on dice to freeze it at its
          current value between rolls.
        </DescriptionText>
        <DicesWrapper>{diceElements}</DicesWrapper>
        {isWin ? (
          <RollButton onClick={() => newGame()}>New Game</RollButton>
        ) : (
          <RollButton onClick={() => rollDice()}>Roll</RollButton>
        )}
        <Counter best={best} counts={counts} />
      </HomeWrapper>
    </HomeContainer>
  )
}
