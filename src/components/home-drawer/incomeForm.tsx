import React from 'react'
import { StyledBodyText2, StyledFormContainer, StyledFormField, StyledTextInput } from '../../styles/global'

const incomeForm = () => {
    return (
        <StyledFormContainer>
            <StyledFormField>
                <StyledBodyText2>Income - Date</StyledBodyText2>
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
                <StyledBodyText2>Category</StyledBodyText2>
                <StyledTextInput
                    placeholder="Category Dropdown"
                />
            </StyledFormField>

            <StyledFormField>
                <StyledBodyText2>Account</StyledBodyText2>
                <StyledTextInput
                    placeholder="Account Dropdown"
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

export { incomeForm }