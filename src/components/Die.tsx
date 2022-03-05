import styled from "@emotion/styled"

const DieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  font-size: 25px;
  font-weight: 700;
  background-color: #FFFFFF;
  cursor: pointer;
`
type Prop = {
  dice: number
}

export const Die: React.FC<Prop> = ({ dice }) => {
  return (
    <>
      <DieContainer>
        {dice}
      </DieContainer>
    </>
  )
}