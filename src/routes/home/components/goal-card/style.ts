import styled from "styled-components/native"
import { appColors } from "../../../../styles/global"


const StyledGoalCardView = styled.View`
    width: auto;
    aspect-ratio: 1/1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${p => p.theme.cardColor};
    border-radius: 5px;
    align-self: center;
    margin: 0px 10px;
    gap: 10px;
`

const StyledGoalAmount = styled.View`
    display: flex;
    flex-direction: column;
`


export {
    StyledGoalCardView,
    StyledGoalAmount
}