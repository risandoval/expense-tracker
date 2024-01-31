import BottomSheet from '@gorhom/bottom-sheet';
import React, { ReactNode, useContext } from 'react'
import { View } from 'react-native';
import { HomeDrawer } from '../home-drawer';
import { useBottomSheetHook } from '../../contexts/BottomSheetContext';
import { ThemeContext } from 'styled-components/native';
import { lightTheme } from '../../styles/global';

const HomeBottomSheetContainer = ({ children }: {children: ReactNode}) => {
    const { bottomSheetRef, snapPoints, handleSheetChange } = useBottomSheetHook();
    const theme = useContext(ThemeContext);

    // renders
    return (
        <View style={{ flex: 1 }}>
                {children}

            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                animateOnMount={true}
                onChange={handleSheetChange}
                enablePanDownToClose
                backgroundStyle={{
                    backgroundColor: theme?.backgroundColor ?? lightTheme.backgroundColor
                 }}
            >
                <HomeDrawer />
            </BottomSheet>
        </View>
    );
}

export { HomeBottomSheetContainer }