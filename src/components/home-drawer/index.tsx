import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import {
    StyledColumnView,
    StyledRowView,
    StyledDrawerButton,
    StyledButtonText,
    StyledFormCont,
    StyledTextInput,
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
                </StyledRowView>

                <StyledFormCont>
                    <StyledRowView style={{ justifyContent: 'flex-start' }}>
                        <Text style={{ flex: 1 }}>Amount</Text>
                        <StyledTextInput
                            placeholder="Enter Expense"
                        />
                    </StyledRowView>
                </StyledFormCont>

            </StyledColumnView>
        </SafeAreaView>
    )
}

export { HomeDrawer }