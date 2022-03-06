import styled from "@emotion/styled"

const DieContainer = styled.div<{ isHeld: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 1.5em;
  font-weight: 700;
  background-color: ${props => props.isHeld ? '#59E391' : 'white'};
  cursor: pointer;
`
type Prop = {
  dice: number
  isHeld: boolean
  handleClick: () => void
}

export const Die: React.FC<Prop> = ({ dice, isHeld, handleClick }) => {
  return (
    <>
      <DieContainer isHeld={isHeld} onClick={handleClick}>
        {dice}
      </DieContainer>
    </>
  )
}