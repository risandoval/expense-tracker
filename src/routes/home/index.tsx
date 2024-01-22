import React, { useCallback, useMemo, useRef } from 'react'
import { HomeDrawer } from './components/HomeDrawer';
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { AntDesign } from '@expo/vector-icons';
import {
    StyledSafeAreaView,
    StyledScrollView,
    StyledMainView,
    StyledHomeText,
    StyledButtonContainer,
} from './styles'

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
                            <StyledHomeText>This is Home Screen</StyledHomeText>
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
    
};

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