import styled from '@emotion/styled'

const BottomTextContainer = styled.div`
  font-size: 1.2em;
  font-weight: 300;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 2px;
  margin-top: 6px;
  margin-left: 28px;
`
interface CounterProps {
  counts: number
  best: string
}

export const Counter: React.FC<CounterProps> = ({ counts, best }) => {
  return (
    <BottomTextContainer>
      <p style={{ margin: 0 }}>Counts: {counts}</p>
      <p style={{ margin: 0 }}>Best: {best}</p>
    </BottomTextContainer>
  )
}
