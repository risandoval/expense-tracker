import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Login } from '../routes/login';
import { Register } from '../routes/register';
import { appColors } from '../styles/global';
import { HomeDrawerNavigator } from './HomeDrawerNavigator';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: appColors.background
                }
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="HomeNavigator" component={HomeDrawerNavigator} />
        </Stack.Navigator>
    )
}

export { MainStack }
