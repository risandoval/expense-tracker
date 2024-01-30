import styled from "styled-components/native"
import { appColors } from "../../../../styles/global"



const StyledBudgetCardView = styled.View`
    width: 150px;
    aspect-ratio: 1/1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${appColors.green};
    border-radius: 5px;
    align-self: center;
    margin: 0px 10px;
    gap: 10px;
`

const StyledBudgetAmount = styled.View`
    display: flex;
    flex-direction: column;
`


export {
    StyledBudgetCardView
    ,
    StyledBudgetAmount
}