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
} from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { StyledBodyText1, StyledBodyText2, StyledHeader1, StyledSafeAreaView, StyledTextInput } from '../../styles/global';

type TLoginProps = NativeStackScreenProps<ParamListBase, 'Login'>

const Register = ({ navigation }: TLoginProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterPress = () => {
        navigation.navigate('Register');
    }

    return (
        <StyledSafeAreaView>
            <StyledView>
                <StyledHeaderView>
                    <StyledHeader1 style={{ fontWeight: '700' }}>Register</StyledHeader1>
                    <StyledBodyText1 style={{ opacity: 0.3 }}>Create an account so you can access your information on other platforms!</StyledBodyText1>
                </StyledHeaderView>

                <StyledSectionView>
                    <StyledAltButtonContainer>
                        <StyledAltButtonLabel>Continue with Google</StyledAltButtonLabel>
                    </StyledAltButtonContainer>
                    <StyledAltButtonContainer>
                        <StyledAltButtonLabel>Continue with Facebook</StyledAltButtonLabel>
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
                            <StyledBodyText2>First Name</StyledBodyText2>
                            <StyledTextInput id='first_name' placeholder="Enter your first name" onChangeText={setEmail} />
                        </StyledInputView>
                        <StyledInputView>
                            <StyledBodyText2>Last Name</StyledBodyText2>
                            <StyledTextInput id='last_name' placeholder="Enter your last name" onChangeText={setEmail} />
                        </StyledInputView>
                        <StyledInputView>
                            <StyledBodyText2>Email</StyledBodyText2>
                            <StyledTextInput id='email' placeholder="Enter your email" onChangeText={setEmail} />
                        </StyledInputView>
                        <StyledInputView>
                            <StyledBodyText2>Password</StyledBodyText2>
                            <StyledTextInput id='password' placeholder="Enter your password" onChangeText={setPassword} />
                        </StyledInputView>
                        <StyledInputView>
                            <StyledBodyText2>Confirm Password</StyledBodyText2>
                            <StyledTextInput id='confirm_password' placeholder="Re-enter your password" onChangeText={setPassword} />
                        </StyledInputView>
                    </StyledSectionView>

                    <StyledButtonContainer>
                        <StyledButtonLabel>Create an Account</StyledButtonLabel>
                    </StyledButtonContainer>

                    <StyledCenterText>Already have an account? <Text style={{ fontWeight: '700' }} onPress={handleRegisterPress}>Login</Text></StyledCenterText>
                </StyledSectionViewMd>
            </StyledView>
        </StyledSafeAreaView>
    )
}

export { Register }
