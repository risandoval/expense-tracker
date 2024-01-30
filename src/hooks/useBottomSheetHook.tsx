import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef } from 'react'

const useBottomSheetHookProvider = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const snapPoints = useMemo(() => ['80%'], []);

    // callbacks
    const handleSheetChange = useCallback((index: number) => {
        // console.log('handleSheetChange', index);
    }, []);

    const handleSnapPress = useCallback((index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
    }, []);

    const handleExpandPress = useCallback(() => {
        bottomSheetRef.current?.expand();
    }, []);

    const handleCollapsePress = useCallback(() => {
        bottomSheetRef.current?.collapse();
    }, []);

    const handleClosePress = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);
    
    return { bottomSheetRef, snapPoints, handleExpandPress, handleSheetChange }
}


export { useBottomSheetHookProvider }