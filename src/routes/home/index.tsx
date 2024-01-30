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
import { Button, FlatList, Text, View } from 'react-native';
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
import { BudgetCard } from './components/budget-card';


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

    const _accounts = [
        {
            id: '1',
            name: 'Cash on Hand',
            amount: 'P 500.00',
            type: 'Cash'
        },
        {
            id: '2',
            name: 'GCash',
            amount: 'P 1,500.00',
            type: 'E-Wallet'
        },
    ]

    if (!fontsLoaded) {
        return <Text> Loading </Text>
    } else {
        return (
            <StyledSafeAreaView>
                <StyledScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {/* temporary change theme button  */}

                    <Button title='Change theme' onPress={() => toggleTheme()} />

                    {/* add new screens below \/ */}

                    <StyledMainView>
                        <HomeSection label="Accounts">
                            <StyledAccountsView>
                                <FlatList
                                    style={{
                                        overflow: "visible",
                                        paddingVertical: 10,
                                    }}
                                    data={_accounts}
                                    renderItem={AccountCard}
                                    keyExtractor={item => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />

                                {/* <AccountCard/> */}
                            </StyledAccountsView>
                        </HomeSection>

                        <HomeSection label="Budget">
                            <StyledBudgetsView>
                                <FlatList
                                    style={{
                                        overflow: "visible",
                                        paddingVertical: 10,
                                    }}
                                    data={_accounts}
                                    renderItem={BudgetCard}
                                    keyExtractor={item => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
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
