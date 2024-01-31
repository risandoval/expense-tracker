import React from 'react'
import styled from 'styled-components/native'
import { StyledBodyText2, StyledHeader3 } from '../../../../styles/global'
import { StyledAccountTypeText, StyledLabelView, StyledLeftSideView, StyledRecentTransactionCardView } from './styles'

const RecentTransactionCard = () => {
  return (
    <StyledRecentTransactionCardView>
      <StyledLeftSideView>

        <Icon></Icon>

        <StyledLabelView>
          <StyledHeader3>
            Allowance
          </StyledHeader3>
          <StyledAccountTypeText>
            Cash
          </StyledAccountTypeText>
        </StyledLabelView>
      </StyledLeftSideView>

      <StyledBodyText2>
        P 15,000.00
      </StyledBodyText2>

    </StyledRecentTransactionCardView>
  )
}

const Icon = styled.View`
  height: 35px;
  aspect-ratio: 1/1;
  background-color: #d1d1d1;
  border-radius: 99999px;
`




export { RecentTransactionCard }