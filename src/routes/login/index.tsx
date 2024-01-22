import React, { useState } from 'react'
import { Text } from 'react-native'
import {
    StyledSafeAreaView,
    StyledView,
    StyledInputView,
    StyledTextInput,
    StyledButtonContainer,
    StyledButtonLabel,
    StyledSectionView,
    StyledSeparatorContainer,
    StyledSeparatorLine,
    StyledAltButtonContainer,
    StyledAltButtonLabel
} from './styles'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <StyledSafeAreaView>
            <StyledView>
                <StyledSectionView>
                    <StyledInputView>
                        <Text>Email</Text>
                        <StyledTextInput id='email' onChangeText={setEmail} />
                    </StyledInputView>
                    <StyledInputView>
                        <Text>Password</Text>
                        <StyledTextInput id='password' onChangeText={setPassword} />
                    </StyledInputView>
                    <StyledButtonContainer>
                        <StyledButtonLabel>Continue</StyledButtonLabel>
                    </StyledButtonContainer>
                </StyledSectionView>

                <StyledSeparatorContainer>
                    <StyledSeparatorLine />
                    <Text>or</Text>
                    <StyledSeparatorLine />
                </StyledSeparatorContainer>

                <StyledSectionView>
                    <StyledAltButtonContainer>
                        <StyledAltButtonLabel>Continue with Google</StyledAltButtonLabel>
                    </StyledAltButtonContainer>
                </StyledSectionView>
            </StyledView>
        </StyledSafeAreaView>
    )
}

export { Login }
