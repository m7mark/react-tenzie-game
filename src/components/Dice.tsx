import styled from '@emotion/styled'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

const DiceContainer = styled.div<{ isHeld: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 1.5em;
  font-weight: 700;
  background-color: ${(props) => (props.isHeld ? '#59E391' : 'white')};
  user-select: none;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 46px;
    height: 46px;
  }
`
interface DiceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  dice: number
  isHeld: boolean
}

export const Dice = ({ dice, isHeld, ...rest }: DiceProps) => {
  return (
    <DiceContainer isHeld={isHeld} {...rest}>
      {dice}
    </DiceContainer>
  )
}
