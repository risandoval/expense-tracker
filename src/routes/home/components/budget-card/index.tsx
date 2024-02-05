import React from 'react'
import { StyledBudgetCardBackgroundView, StyledBudgetCardView } from './styles'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { StyledBodyText1, StyledHeader1, StyledHeader3, appColors } from '../../../../styles/global'
import { formatCurrency } from '../../../../helpers/formatCurrency'
import { calculateCardBackgroundPercentage } from '../../../../helpers/calculateCardBackgroundPercentage'


const StyledIconView = styled.View`
    background-color: ${appColors.cardIconBackground};
    width: 40px;
    height: 40px;
    border-radius: 5px;
    
`

const WrapperView = styled.View`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    gap: 10px;
`

const BudgetCard = ({...props}) => {

    const {id, name, totalAmount, currentAmount} = props.item;



    return (
        <StyledBudgetCardView>

            <StyledBudgetCardBackgroundView percent={calculateCardBackgroundPercentage(parseFloat(currentAmount), parseFloat(totalAmount))}>

            </StyledBudgetCardBackgroundView>

            <WrapperView>
                <StyledIconView>
                    {/* ICON HERE */}
                </StyledIconView>

                <StyledBodyText1>{name}</StyledBodyText1>

                <View>
                    <StyledBodyText1 numberOfLines={1}>{formatCurrency(parseFloat(currentAmount))} left</StyledBodyText1>
                    <StyledBodyText1 numberOfLines={1}>out of {formatCurrency(parseFloat(totalAmount))}</StyledBodyText1>
                </View>
            </WrapperView>


        </StyledBudgetCardView>
    )
}



export { BudgetCard }