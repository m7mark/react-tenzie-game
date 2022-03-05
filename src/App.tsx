import styled from '@emotion/styled';
import { useState } from 'react';
import { Die } from './components/Die';
import { nanoid } from 'nanoid'

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
`
const MainWrapper = styled.main`
  background-color: #F5F5F5;
  height: 400px;
  width: 800px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`

function App() {

  // Create array of random numbers from 1 to 6
  const allNewDice = () => {
    const dies = []
    for (let i = 0; i < 10; i++) {
      dies.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      })
    }
    return dies
  }

  const [dice, setDice] = useState(allNewDice());
  const diceElements = dice.map(dice => <Die key={dice.id} dice={dice.value} />)

  return (
    <MainContainer>
      <MainWrapper>
        <DiesWrapper>
          {diceElements}
        </DiesWrapper>
        <RollButton onClick={() => setDice(allNewDice())}>Roll</RollButton>
      </MainWrapper>
    </MainContainer>
  );
}

export default App;
