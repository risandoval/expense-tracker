import React from 'react'
import { StyledAccountCardDetails, StyledAccountCardSubDetails, StyledAccountCardView } from './styles'
import { StyledBodyText1, StyledHeader2 } from '../../../../styles/global'

const AccountCard = ({...props}) => {
  const {index, item} = props;
  const {amount, id, name, type} = item;


  return (
    <StyledAccountCardView>
        <StyledAccountCardDetails>
            <StyledHeader2>{name}</StyledHeader2>
            <StyledHeader2>{amount}</StyledHeader2>
        </StyledAccountCardDetails>

        <StyledAccountCardSubDetails>
            <StyledBodyText1>{type}</StyledBodyText1>
            <StyledBodyText1>Icon Here</StyledBodyText1>
        </StyledAccountCardSubDetails>
    </StyledAccountCardView>
  )
}

export default AccountCard