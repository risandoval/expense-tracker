import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { StyledBodyText2, StyledFormCont, StyledFormField, StyledTextInput } from '../../styles/global'
import {
    StyledColumnView,
    StyledRowView,
    StyledDrawerButton,
    StyledButtonText
} from './styles'


const HomeDrawer = () => {
    return (
        <SafeAreaView>
            <StyledColumnView>
                <StyledRowView>
                    <StyledDrawerButton>
                        <StyledButtonText>Income</StyledButtonText>
                    </StyledDrawerButton>
                    <StyledDrawerButton>
                        <StyledButtonText>Expense</StyledButtonText>
                    </StyledDrawerButton>
                    <StyledDrawerButton>
                        <StyledButtonText>Transfer</StyledButtonText>
                    </StyledDrawerButton>
                </StyledRowView>

                <StyledFormCont>
                    <StyledFormField>
                        <StyledBodyText2>Date</StyledBodyText2>
                        <StyledTextInput
                            placeholder="Date Picker and Tie"
                        />
                    </StyledFormField>

                    <StyledFormField>
                        <StyledBodyText2>Amount</StyledBodyText2>
                        <StyledTextInput
                            placeholder="Enter Amount"
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
                </StyledFormCont>

            </StyledColumnView>
        </SafeAreaView>
    )
}

export { HomeDrawer }