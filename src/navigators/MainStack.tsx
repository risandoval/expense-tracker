import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useCallback, useContext, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Login } from '../routes/login';
import { Register } from '../routes/register';
import { appColors } from '../styles/global';
import { HomeDrawerNavigator } from './HomeDrawerNavigator';
import { ThemeContext } from '../contexts/ThemeContext';
import { HomeBottomTabNavigator } from './HomeBottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Stack.Navigator
            initialRouteName='HomeBottomTab'
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: appColors[theme].background
                },
            }}>
            <Stack.Screen
                name={'BottomSheet'}
                component={MyBottomSheet}
                options={{ 
                    contentStyle: {
                        backgroundColor: 'transparent'
                    },
                    presentation: 'transparentModal',
                    animation: 'none',
                }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            
            <Stack.Screen name="HomeBottomTab" component={HomeBottomTabNavigator} />
        </Stack.Navigator>
    )
}



const MyBottomSheet = ({ navigation }) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['80%'], []);

    // callbacks
    const handleSheetChanges = useCallback(
        (index: number) => {
            if (index === -1) {
                navigation.goBack();
            }
        },
        [navigation],
    );

    // renders
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose
            >
                <View style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                </View>
            </BottomSheet>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#1e1e1e95',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default MyBottomSheet;


export { MainStack }
