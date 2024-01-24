import React, { useContext } from 'react'
import {
    StyledAccountsView,
    StyledBudgetsView,
    StyledMainView,
    StyledRecentTransactionsView,
    StyledSavingsView,
    StyledScrollView,
} from './styles'
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledBodyText1, StyledSafeAreaView } from '../../styles/global';
import { HomeSection } from './components/home-section';
import { Button, Text } from 'react-native';
import {
    useFonts,
    Lexend_100Thin,
    Lexend_200ExtraLight,
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
    Lexend_800ExtraBold,
    Lexend_900Black,
} from '@expo-google-fonts/lexend';
import AccountCard from './components/account-card';


const Home = () => {
    let [fontsLoaded] = useFonts({
        Lexend_100Thin,
        Lexend_200ExtraLight,
        Lexend_300Light,
        Lexend_400Regular,
        Lexend_500Medium,
        Lexend_600SemiBold,
        Lexend_700Bold,
        Lexend_800ExtraBold,
        Lexend_900Black,
    });

    const { theme, toggleTheme } = useContext(ThemeContext);

    if (!fontsLoaded) {
        return <Text> Loading </Text>
    } else {
        return (
            <StyledSafeAreaView>
                <StyledScrollView >
                    {/* temporary change theme button  */}

                    <Button title='Change theme' onPress={() => toggleTheme()} />

                    {/* add new screens below \/ */}

                    <StyledMainView>
                        <HomeSection label="Accounts">
                            <StyledAccountsView>
                                <StyledBodyText1>Test</StyledBodyText1>
                                <AccountCard/>
                            </StyledAccountsView>
                        </HomeSection>

                        <HomeSection label="Budget">
                            <StyledBudgetsView>
                                <StyledBodyText1>Test</StyledBodyText1>
                            </StyledBudgetsView>
                        </HomeSection>

                        <HomeSection label="Savings">
                            <StyledSavingsView>
                                <StyledBodyText1>Test</StyledBodyText1>
                            </StyledSavingsView>
                        </HomeSection>

                        <HomeSection label="Recent Transactions">
                            <StyledRecentTransactionsView>
                                <StyledBodyText1>Test</StyledBodyText1>
                            </StyledRecentTransactionsView>
                        </HomeSection>

                    </StyledMainView>

                </StyledScrollView>
            </StyledSafeAreaView>
        )
    }

}

export { Home }
