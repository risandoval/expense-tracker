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
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
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
import { RecentTransactionCard } from './components/recent-transaction-card';
import { GoalCard } from './components/goal-card';
import { StyledRecentTrasactionGroupView } from './components/recent-transaction-group/style';
import { RecentTransactionGroup } from './components/recent-transaction-group';
import { user } from '../../dummy_data/users';

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
                <StyledScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {/* temporary change theme button  */}

                    <Button title='Change theme' onPress={() => toggleTheme()} />

                    {/* add new screens below \/ */}

                    <StyledMainView>
                        <HomeSection key='accounts' label="Accounts" headerComponents={
                            [
                                <TouchableOpacity>
                                    <Text>+</Text>
                                </TouchableOpacity>
                            ]
                        }>
                            <StyledAccountsView>
                                <FlatList
                                    style={{
                                        overflow: "visible",
                                        paddingVertical: 10,
                                    }}
                                    data={user.accounts}
                                    renderItem={AccountCard}
                                    keyExtractor={item => item.id.toString()}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />

                                {/* <AccountCard/> */}
                            </StyledAccountsView>
                        </HomeSection>

                        <HomeSection key='budget' label="Budget">
                            <StyledBudgetsView>
                                <FlatList
                                    style={{
                                        overflow: "visible",
                                        paddingVertical: 10,
                                    }}
                                    data={user.budgets}
                                    renderItem={BudgetCard}
                                    keyExtractor={item => item.id.toString()}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </StyledBudgetsView>
                        </HomeSection>

                        <HomeSection key='goals' label="Goals">
                            <StyledSavingsView>
                                <FlatList
                                    style={{
                                        overflow: "visible",
                                        paddingVertical: 10,
                                    }}
                                    data={user.goals}
                                    renderItem={GoalCard}
                                    keyExtractor={item => item.id.toString()}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </StyledSavingsView>
                        </HomeSection>

                        <HomeSection key='recent-transactions' label="Recent Transactions">
                            <RecentTransactionGroup
                                date=''
                            >
                                <StyledRecentTransactionsView>
                                    {
                                        user.transactions.map((recentTransaction, index) => <RecentTransactionCard recentTransaction={recentTransaction} key={index} />)
                                    }
                                </StyledRecentTransactionsView>
                            </RecentTransactionGroup>
                        </HomeSection>

                    </StyledMainView>

                </StyledScrollView>
            </StyledSafeAreaView>
        )
    }
}


export { Home }
