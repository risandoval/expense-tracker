import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import {
    StyledColumnView,
    StyledRowView,
    StyledDrawerButton,
    StyledButtonText,
    StyledConfirmButton,
    StyledConfirmText
} from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { incomeForm } from './incomeForm'
import { expenseForm } from './expenseForm'
import { transferForm } from './transferForm'

type ButtonName = 'Income' | 'Expense' | 'Transfer';

const HomeDrawer = () => {
    const [activeButton, setActiveButton] = useState<ButtonName>('Income');

    const handleButtonClick = (buttonName: ButtonName) => {
        setActiveButton(buttonName);
    };

    const renderForm = () => {
        switch (activeButton) {
            case 'Income':
                return incomeForm();
            case 'Expense':
                return expenseForm();
            case 'Transfer':
                return transferForm();
            default:
                return null;
        }
    };

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView>
                <StyledColumnView>
                    <StyledRowView>
                        <StyledDrawerButton
                            active={activeButton === 'Income'}
                            onPress={() => handleButtonClick('Income')}
                            buttonName="Income"
                        >
                            <StyledButtonText active={activeButton === 'Income'} buttonName="Income">
                                Income
                            </StyledButtonText>
                        </StyledDrawerButton>
                        <StyledDrawerButton
                            active={activeButton === 'Expense'}
                            onPress={() => handleButtonClick('Expense')}
                            buttonName="Expense"
                        >
                            <StyledButtonText active={activeButton === 'Expense'} buttonName="Expense">
                                Expense
                            </StyledButtonText>
                        </StyledDrawerButton>
                        <StyledDrawerButton
                            active={activeButton === 'Transfer'}
                            onPress={() => handleButtonClick('Transfer')}
                            buttonName="Transfer"
                        >
                            <StyledButtonText active={activeButton === 'Transfer'} buttonName="Transfer">
                                Transfer
                            </StyledButtonText>
                        </StyledDrawerButton>
                    </StyledRowView>

                    {renderForm()}

                    <StyledRowView>
                        <StyledConfirmButton>
                            <StyledConfirmText> 
                                Confirm
                            </StyledConfirmText>
                        </StyledConfirmButton>
                    </StyledRowView>

                </StyledColumnView>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export { HomeDrawer }