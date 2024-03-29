import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { recentTransactions } from '../../dummy_data/recentTransactions'

const StyledScrollView = styled.ScrollView`
    height: 100%;
    padding: 10px;
`

const StyledMainView = styled.View`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10rem;
`

const StyledCard = styled.View`
    background-color: #1e1e1e50;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
`

const RowCards = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10rem;
    margin-bottom: 50px;
`

const RowCardsViews = styled(StyledCard)`
    flex:1;
`

const RecentTransactions = styled(StyledMainView)`
    gap: 5rem;
`

const RecentTransactionCard = styled.View`
    background-color: #1e1e1e50;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    border-radius: 10px;
`

const RecentTransactionCardLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20rem;
`

const RecentTransactionTitle = styled.View`
    display: flex;
    flex-direction: column;
    gap: 5rem
`

const RecentTransactionCardRight = styled.View`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin-left: auto;
`

const SampleIcon = styled.View`
    background-color: #1e1e1e50;
    min-height: 15px;
    height: 35px;
    aspect-ratio: 1/1;
    border-radius: 100%;

`

const Home = () => {
    return (
        <SafeAreaView>
            <StyledScrollView>
                <StyledMainView>

                    <StyledCard>
                        <Text>Total Balance</Text>
                    </StyledCard>

                    <RowCards>
                        <RowCardsViews>
                            <Text>Total Income</Text>
                        </RowCardsViews>

                        <RowCardsViews>
                            <Text>Total Expense</Text>
                        </RowCardsViews>
                    </RowCards>

                    <Text>Recent Transactions</Text>

                    <RecentTransactions>

                        <RecentTransactionsMap/>

                    </RecentTransactions>
                </StyledMainView>
            </StyledScrollView>
        </SafeAreaView>
    )
}

const RecentTransactionsMap = () => {
    return recentTransactions.map((recentTransaction, index) => (
        <RecentTransactionCard key={index}>
            <RecentTransactionCardLeft>
                <SampleIcon></SampleIcon>

                <RecentTransactionTitle>
                    <Text>{recentTransaction.title}</Text>
                    <Text>{recentTransaction.category}</Text>
                </RecentTransactionTitle>
            </RecentTransactionCardLeft>

            <RecentTransactionCardRight>
                <Text>{recentTransaction.amount}</Text>
                <Text>{recentTransaction.date}</Text>
            </RecentTransactionCardRight>
        </RecentTransactionCard>
    ))
}

export { Home }