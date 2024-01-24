import React, { useCallback, useContext, useMemo, useRef, useState } from 'react'
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
import { ThemeContext } from '../../contexts/ThemeContext';
import { useBottomSheetHook } from '../../contexts/BottomSheetContext';


const Home = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    const { handlePresentModalPress, bottomSheetModalRef, snapPoints,  handleSheetChanges} = useBottomSheetHook();

    return (
        <StyledSafeAreaView>
            <GestureHandlerRootView>
                <BottomSheetModalProvider>
                    <StyledScrollView>
                        <StyledMainView>
                            <Button title='Change theme' onPress={() => toggleTheme()} />
                            <Text>{theme}</Text>
                            {/* add new screens here */}

                        </StyledMainView>
                    </StyledScrollView>

                    <StyledBottomSheetModal
                        ref={bottomSheetModalRef}
                        index={0}
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
