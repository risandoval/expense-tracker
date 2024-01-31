import React from 'react'
import { StyledBudgetCardView } from './styles'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { StyledBodyText1, StyledHeader1, StyledHeader3 } from '../../../../styles/global'

const StyledView = styled.View`
    width: fit-content;
`


const BudgetCard = () => {
    return (
        <StyledBudgetCardView>
            <StyledView>
                <StyledHeader3 numberOfLines={1}>Icon</StyledHeader3>
            </StyledView>

            <StyledView>
                <StyledBodyText1>Name</StyledBodyText1>
            </StyledView>

            <StyledView>
                <StyledBodyText1 numberOfLines={1}>P 4,950.00 left</StyledBodyText1>
                <StyledBodyText1 numberOfLines={1}>out of P 5,000.00</StyledBodyText1>
            </StyledView>
        </StyledBudgetCardView>
    )
}



export { BudgetCard }