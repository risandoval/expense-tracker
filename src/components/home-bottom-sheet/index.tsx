import BottomSheet from '@gorhom/bottom-sheet';
import React, { ReactNode } from 'react'
import { View } from 'react-native';
import { HomeDrawer } from '../home-drawer';
import { useBottomSheetHook } from '../../contexts/BottomSheetContext';

const HomeBottomSheetContainer = ({ children }: {children: ReactNode}) => {
    const { bottomSheetRef, snapPoints, handleSheetChange } = useBottomSheetHook();

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
            >
                <HomeDrawer />
            </BottomSheet>
        </View>
    );
}

export { HomeBottomSheetContainer }