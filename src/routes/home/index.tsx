import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { recentTransactions } from '../../dummy_data/recentTransactions'
import {
    StyledScrollView,
    StyledMainView,
    StyledCard,
    StyledRowCards,
    StyledRowCardsViews,
    StyledRecentTransactions,
    StyledRecentTransactionCard,
    StyledRecentTransactionCardLeft,
    StyledRecentTransactionTitle,
    StyledRecentTransactionCardRight,
    SampleIcon
} from './styles'

import DateTimePicker from '@react-native-community/datetimepicker';

const Home = () => {
    return (
        <SafeAreaView>
            <StyledScrollView>
                <StyledMainView>

                    <DateTimePicker maximumDate={new Date()} value={new Date()}/>

                    <StyledCard>
                        <Text>Total Balance</Text>
                    </StyledCard>

                    <StyledRowCards>
                        <StyledRowCardsViews>
                            <Text>Total Income</Text>
                        </StyledRowCardsViews>

                        <StyledRowCardsViews>
                            <Text>Total Expense</Text>
                        </StyledRowCardsViews>
                    </StyledRowCards>

                    <Text>Recent Transactions</Text>

                    <StyledRecentTransactions>

                        <RecentTransactionsMap />

                    </StyledRecentTransactions>
                </StyledMainView>
            </StyledScrollView>
        </SafeAreaView>
    )
}

const RecentTransactionsMap = () => {
    return recentTransactions.map((recentTransaction, index) => (
        <StyledRecentTransactionCard key={index}>
            <StyledRecentTransactionCardLeft>
                <SampleIcon></SampleIcon>

                <StyledRecentTransactionTitle>
                    <Text>{recentTransaction.title}</Text>
                    <Text>{recentTransaction.category}</Text>
                </StyledRecentTransactionTitle>
            </StyledRecentTransactionCardLeft>

            <StyledRecentTransactionCardRight>
                <Text>{recentTransaction.amount}</Text>
                <Text>{recentTransaction.date}</Text>
            </StyledRecentTransactionCardRight>
        </StyledRecentTransactionCard>
    ))
}

export { Home }