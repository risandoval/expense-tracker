import React from 'react'
import { StyledBodyText2, StyledFormContainer, StyledFormField, StyledTextInput } from '../../styles/global'

const transferForm = () => {
  return (
    <StyledFormContainer>
                        <StyledFormField>
                            <StyledBodyText2>Date</StyledBodyText2>
                            <StyledTextInput
                                placeholder="Date Picker and Time"
                            />
                        </StyledFormField>

                        <StyledFormField>
                            <StyledBodyText2>Amount</StyledBodyText2>
                            <StyledTextInput
                                placeholder="Should be numbers only"
                            />
                        </StyledFormField>

                        <StyledFormField>
                            <StyledBodyText2>Fee</StyledBodyText2>
                            <StyledTextInput
                                placeholder="Fee"
                            />
                        </StyledFormField>

                        <StyledFormField>
                            <StyledBodyText2>Wallet Source</StyledBodyText2>
                            <StyledTextInput
                                placeholder="Wallet Source"
                            />
                        </StyledFormField>

                        <StyledFormField>
                            <StyledBodyText2>Wallet Destination</StyledBodyText2>
                            <StyledTextInput
                                placeholder="Wallet Destination"
                            />
                        </StyledFormField>

                        <StyledFormField>
                            <StyledBodyText2>Note</StyledBodyText2>
                            <StyledTextInput
                                placeholder="Optional Note"
                            />
                        </StyledFormField>
                    </StyledFormContainer>
  )
}

export { transferForm }