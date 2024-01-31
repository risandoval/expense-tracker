import React, { useState } from 'react'
import { Text } from 'react-native'
import {
    StyledView,
    StyledButtonContainer,
    StyledButtonLabel,
    StyledSectionView,
    StyledSeparatorContainer,
    StyledSeparatorLine,
    StyledAltButtonContainer,
    StyledAltButtonLabel,
    StyledSectionViewMd,
    StyledInputView,
    StyledCenterText,
    StyledHeaderView,
} from './styles'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { StyledBodyText1, StyledBodyText2, StyledHeader1, StyledSafeAreaView, StyledTextInput } from '../../styles/global';

type TLoginProps = NativeStackScreenProps<ParamListBase, 'Login'>

const Login = ({ navigation }: TLoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleAsGuestPress = () => {
        navigation.navigate('HomeNavigator', { screen: "Home" });
    };

    return (
        <StyledSafeAreaView>
            <StyledView>
                <StyledHeaderView>
                    <StyledHeader1 style={{ fontWeight: '700' }}>Log In</StyledHeader1>
                    <StyledBodyText1 style={{ opacity: 0.3 }}>Enter your credentials or continue as guest.</StyledBodyText1>
                </StyledHeaderView>

                <StyledSectionView>
                    <StyledAltButtonContainer>
                        <StyledAltButtonLabel>Continue with Google</StyledAltButtonLabel>
                    </StyledAltButtonContainer>
                    <StyledAltButtonContainer>
                        <StyledAltButtonLabel>Continue with Facebook</StyledAltButtonLabel>
                    </StyledAltButtonContainer>
                    <StyledAltButtonContainer>
                        <StyledAltButtonLabel onPress={handleAsGuestPress}>Continue as Guest</StyledAltButtonLabel>
                    </StyledAltButtonContainer>
                </StyledSectionView>

                <StyledSeparatorContainer>
                    <StyledSeparatorLine />
                    <Text>or</Text>
                    <StyledSeparatorLine />
                </StyledSeparatorContainer>

                <StyledSectionViewMd>
                    <StyledSectionView>
                        <StyledInputView>
                            <StyledBodyText2>Email</StyledBodyText2>
                            <StyledTextInput id='email' onChangeText={setEmail} />
                        </StyledInputView>
                        <StyledInputView>
                            <StyledBodyText2>Password</StyledBodyText2>
                            <StyledTextInput id='password' onChangeText={setPassword} />
                        </StyledInputView>
                    </StyledSectionView>

                    <StyledButtonContainer>
                        <StyledButtonLabel>Login</StyledButtonLabel>
                    </StyledButtonContainer>

                    <StyledCenterText>Don't have an account? <Text style={{ fontWeight: '700' }}>Register</Text></StyledCenterText>
                </StyledSectionViewMd>
            </StyledView>
        </StyledSafeAreaView>
    )
}

export { Login }
