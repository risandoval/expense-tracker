import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { Login } from '../routes/login';
import { Register } from '../routes/register';
import { appColors } from '../styles/global';
import { HomeDrawerNavigator } from './HomeDrawerNavigator';
import { ThemeContext } from '../contexts/ThemeContext';
import { HomeBottomTabNavigator } from './HomeBottomTabNavigator';

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
                }
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="HomeBottomTab" component={HomeBottomTabNavigator} />
        </Stack.Navigator>
    )
}

export { MainStack }
