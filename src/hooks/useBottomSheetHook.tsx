import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { useCallback, useContext, useMemo, useRef } from 'react'
import { BottomSheetContext } from '../contexts/BottomSheetContext';

const useBottomSheetHookProvider = () => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ['80%'], []);

    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const handleSheetChanges = useCallback((index: number) => {
        // sheet change logic
    }, []);

    return {bottomSheetModalRef, snapPoints, handlePresentModalPress, handleSheetChanges}
}


export { useBottomSheetHookProvider }