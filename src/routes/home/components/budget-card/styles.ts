import styled from "styled-components/native"
import { appColors } from "../../../../styles/global"


const StyledBudgetCardView = styled.View`
    position: relative;
    border-radius: 5px;
    background-color: ${p => p.theme.cardColor};
    margin: 0px 10px;
    overflow: hidden;
`

type TCardBackground = {
    percent: string
}

const StyledBudgetCardBackgroundView = styled.View<TCardBackground>`
    position: absolute;
    background-color: #25B570;
    top: ${p => p.percent};
    right: 0;
    left: 0;
    bottom: 0;
`

const StyledBudgetAmount = styled.View`
    display: flex;
    flex-direction: column;
`


export {
    StyledBudgetCardView,
    StyledBudgetAmount,
    StyledBudgetCardBackgroundView
}