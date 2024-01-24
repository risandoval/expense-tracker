import React, { useCallback, useMemo, useRef, useState } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text, View, Platform, Button } from 'react-native'
import { recentTransactions } from '../../dummy_data/recentTransactions'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import {
    StyledSafeAreaView,
    StyledButtonContainer,
    StyledScrollView,
    StyledMainView,
    StyledBottomSheetModal,
} from './styles'
import { HomeDrawer } from './components/home-drawer';


const Home = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ['60%', '90%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        // sheet change logic
    }, []);

    return (
        <StyledSafeAreaView>
            <GestureHandlerRootView>
                <BottomSheetModalProvider>
                    <StyledScrollView>
                        <StyledMainView>
                            {/* add new screens here */}

                        </StyledMainView>
                    </StyledScrollView>

                    <StyledButtonContainer onPress={handlePresentModalPress}>
                        <AntDesign name="pluscircle" size={50} color="black" />
                    </StyledButtonContainer>

                    <StyledBottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <HomeDrawer />
                    </StyledBottomSheetModal>

                </BottomSheetModalProvider>
            </GestureHandlerRootView>
        </StyledSafeAreaView>
    )
}




export { Home }
