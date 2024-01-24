import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext, useMemo, useRef } from 'react';
import { Login } from '../routes/login';
import { Register } from '../routes/register';
import { TTheme, appColors, lightTheme } from '../styles/global';
import { HomeBottomTabNavigator } from './HomeBottomTabNavigator';
import { HomeBottomSheet } from '../components/home-bottom-sheet';
import { ThemeContext, DefaultTheme } from 'styled-components/native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    const theme = useContext(ThemeContext);

    return (
        <Stack.Navigator
            initialRouteName='HomeBottomTab'
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    paddingTop: 0,
                    backgroundColor: theme?.backgroundColor ?? lightTheme.backgroundColor
                },
            }}>
            <Stack.Screen
                name={'HomeBottomSheet'}
                component={HomeBottomSheet}
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

            <Stack.Screen name="HomeBottomTab" component={HomeBottomTabNavigator}/>
        </Stack.Navigator>
    )
}




export { MainStack }
