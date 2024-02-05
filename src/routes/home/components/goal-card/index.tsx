import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { StyledBodyText1, StyledHeader1, StyledHeader3, appColors } from '../../../../styles/global'
import { StyledGoalCardView } from './style'

const StyledIconView = styled.View`
    background-color: ${appColors.cardIconBackground};
    width: 40px;
    height: 40px;
    border-radius: 5px;
`

const GoalCard = () => {
    return (
        <StyledGoalCardView>
            <StyledIconView>
                {/* ICON HERE */}
            </StyledIconView>

            <StyledBodyText1>Budget Name</StyledBodyText1>
            
            <View>
                <StyledBodyText1 numberOfLines={1}>P 4,950.00 left</StyledBodyText1>
                <StyledBodyText1 numberOfLines={1}>out of P 5,000.00</StyledBodyText1>
            </View>
        </StyledGoalCardView>
    )
}



export { GoalCard }