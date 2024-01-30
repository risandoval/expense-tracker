import React from 'react'
import styled from 'styled-components/native'
import { StyledBodyText3, StyledHeader3 } from '../../../../styles/global'
import { Text } from 'react-native'

const RecentTransactionCard = () => {
  return (
    <StyledRecentTransactionCardView>
      <StyledLeftSideView>

        <Text>O</Text>

        <StyledLabelView>
          <StyledHeader3>
            Allowance
          </StyledHeader3>
          <StyledBodyText3>
            Cash
          </StyledBodyText3>
        </StyledLabelView>
      </StyledLeftSideView>

      <StyledHeader3>
        P 15,000.00
      </StyledHeader3>

    </StyledRecentTransactionCardView>
  )
}

const StyledRecentTransactionCardView = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`

const StyledLeftSideView = styled.View`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledLabelView = styled.View`
  display: flex;
  flex-direction: column;
  gap: 5px;
`


export { RecentTransactionCard }