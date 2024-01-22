import React, { useCallback, useMemo, useRef } from 'react'
import { HomeDrawer } from './components/HomeDrawer';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { recentTransactions } from '../../dummy_data/recentTransactions'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import {
    StyledSafeAreaView,
    StyledButtonContainer,
} from './styles'

const StyledScrollView = styled.ScrollView`
    height: 100%;
    padding: 10px;
`

const StyledMainView = styled.View`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
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
    margin-bottom: 50px;
    gap: 10px;
`

const RowCardsViews = styled(StyledCard)`
    flex:1;
`

const RecentTransactions = styled(StyledMainView)`
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
    gap: 10px;
`

const RecentTransactionTitle = styled.View`
    display: flex;
    flex-direction: column;
`

const RecentTransactionCardRight = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: auto;
`

const SampleIcon = styled.View`
    background-color: #1e1e1e50;
    min-height: 15px;
    height: 35px;
    aspect-ratio: 1/1;
    border-radius: 9999px;

`

const Home = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['25%', '90%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <StyledSafeAreaView>
            <GestureHandlerRootView>
                <BottomSheetModalProvider>
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

                    <StyledButtonContainer onPress={handlePresentModalPress}>
                        <AntDesign name="pluscircle" size={50} color="black" />
                    </StyledButtonContainer>

                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        style={styles.bottomSheetModal}
                    >
                        <HomeDrawer />
                    </BottomSheetModal>
                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </StyledSafeAreaView>
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

const styles = StyleSheet.create({
    bottomSheetModal: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
});

export { Home }