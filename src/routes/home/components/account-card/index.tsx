import React from 'react'
import { StyledAccountCardDetails, StyledAccountCardSubDetails, StyledAccountCardView } from './styles'
import { StyledBodyText1, StyledHeader2 } from '../../../../styles/global'

const AccountCard = () => {
  return (
    <StyledAccountCardView>
        <StyledAccountCardDetails>
            <StyledHeader2>Cash on Hand</StyledHeader2>
            <StyledHeader2>P 500.00</StyledHeader2>
        </StyledAccountCardDetails>

        <StyledAccountCardSubDetails>
            <StyledBodyText1>Cash</StyledBodyText1>
            <StyledBodyText1>Icon Here</StyledBodyText1>
        </StyledAccountCardSubDetails>
    </StyledAccountCardView>
  )
}

export default AccountCard