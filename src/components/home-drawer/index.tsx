import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { StyledBodyText2, StyledFormCont, StyledFormField, StyledTextInput } from '../../styles/global'
import {
    StyledColumnView,
    StyledRowView,
    StyledDrawerButton,
    StyledButtonText,
    StyledConfirmBtn,
    StyledConfirmTxt
} from './styles'

type ButtonName = 'Income' | 'Expense' | 'Transfer';

const HomeDrawer = () => {
    const [activeButton, setActiveButton] = useState<ButtonName>('Income');

    const handleButtonClick = (buttonName: ButtonName) => {
        setActiveButton(buttonName);
    };

    const renderForm = () => {
        switch (activeButton) {
            case 'Income':
                return (
                    <StyledFormCont>
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
                    </StyledFormCont>
                );
            case 'Expense':
                return (
                    <StyledFormCont>
                        <StyledFormField>
                            <StyledBodyText2>Expense - Date</StyledBodyText2>
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
                    </StyledFormCont>
                );
            case 'Transfer':
                return (
                    <StyledFormCont>
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
                    </StyledFormCont>
                );
            default:
                return null;
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
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

                    {/* <StyledFormCont>
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
                    </StyledFormCont> */}

                    {renderForm()}

                    <StyledRowView>
                        <StyledConfirmBtn>
                            <StyledConfirmTxt> 
                                Confirm
                            </StyledConfirmTxt>
                        </StyledConfirmBtn>
                    </StyledRowView>

                </StyledColumnView>
            </ScrollView>
        </SafeAreaView>
    )
}

export { HomeDrawer }