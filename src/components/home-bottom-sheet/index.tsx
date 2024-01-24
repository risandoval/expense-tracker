import BottomSheet from '@gorhom/bottom-sheet';
import React, { createRef, useCallback, useMemo, useRef } from 'react'
import { StyleSheet, View } from 'react-native';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs';
import { HomeDrawer } from '../home-drawer';

const HomeBottomSheet = ({ navigation }: { navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap> } ) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const sheetClose = createRef();
    const snapPoints = useMemo(() => ['80%'], []);

    const handleSheetChanges = useCallback(
        (index: number) => {    
            if (index === -1) {
                navigation.goBack();
            }
        },
        [navigation],
    );

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                waitFor={[sheetClose]}
                enablePanDownToClose
                animateOnMount
            >
                <HomeDrawer />
            </BottomSheet>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#1e1e1e50',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export { HomeBottomSheet }