import React, { useCallback, useMemo, useRef, useState } from 'react'
import { HomeDrawer } from './components/HomeDrawer';
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Platform, Button } from 'react-native'
import { recentTransactions } from '../../dummy_data/recentTransactions'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import {
    StyledSafeAreaView,
    StyledButtonContainer,
} from './styles'
import styled from 'styled-components/native';
import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import { StyledBodyText, appColors } from '../../styles/global';

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
    background-color: ${appColors.green};
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
`

const StyledRowCards = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    gap: 10px;
`

const StyledRowCardsViews = styled(StyledCard)`
    flex:1;
`

const StyledRecentTransactions = styled(StyledMainView)`
`

const StyledRecentTransactionCard = styled.View`
    background-color: #1e1e1e;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
    border-radius: 10px;
`

const StyledRecentTransactionCardLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

const StyledRecentTransactionTitle = styled.View`
    display: flex;
    flex-direction: column;
`

const StyledRecentTransactionCardRight = styled.View`
    display: flex;
    flex-direction: column;
    margin-left: auto;
`

const SampleIcon = styled.View`
    background-color: #fafafa;
    min-height: 15px;
    height: 35px;
    aspect-ratio: 1/1;
    border-radius: 9999px;

`

const StyledText = styled.Text`
    color: #fafafa;
`

const Home = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['50%', '90%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [dateSelectorMode, setDateSelectorMode] = useState<boolean>(false)
    const openDatePicker = () => {
        
    }

    return (
        <StyledSafeAreaView>
            <GestureHandlerRootView>
                <BottomSheetModalProvider>
                    <StyledScrollView>
                        <StyledMainView>

                            <Button title={selectedDate.toString()} />

                            {
                                dateSelectorMode && (
                                    <DateTimePicker 
                                    maximumDate={new Date()} 
                                    value={selectedDate}

                                    />
                                ) 

                            }
                            

                            <StyledCard>
                                <StyledBodyText>Total Balance</StyledBodyText>
                            </StyledCard>

                    <StyledRowCards>
                        <StyledRowCardsViews>
                            <StyledBodyText>Total Income</StyledBodyText>
                        </StyledRowCardsViews>

                        <StyledRowCardsViews>
                            <StyledBodyText>Total Expense</StyledBodyText>
                        </StyledRowCardsViews>
                    </StyledRowCards>

                            <StyledBodyText>Recent Transactions</StyledBodyText>

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
                    <StyledText>{recentTransaction.title}</StyledText>
                    <StyledText>{recentTransaction.category}</StyledText>
                </StyledRecentTransactionTitle>
            </StyledRecentTransactionCardLeft>

            <StyledRecentTransactionCardRight>
                <StyledText>{recentTransaction.amount}</StyledText>
                <StyledText>{recentTransaction.date}</StyledText>
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
