import styled from "styled-components/native"
import { StyledBodyText3 } from "../../../../styles/global"

const StyledRecentTransactionCardView = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    padding: 10px;
`

const StyledLeftSideView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

const StyledLabelView = styled.View`
  display: flex;
  flex-direction: column;
`

const StyledAccountTypeText = styled(StyledBodyText3)`
  color: #1e1e1e90;
`

export {
    StyledRecentTransactionCardView,
    StyledLeftSideView,
    StyledLabelView,
    StyledAccountTypeText
}