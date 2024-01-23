import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native';
import { Login } from '../routes/login';
import { Register } from '../routes/register';
import { Home } from '../routes/home';
import { appColors } from '../styles/global';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeDrawerNavigator } from './HomeDrawerNavigator';

const Stack = createNativeStackNavigator();


const MainStack = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{
            headerShown: false, 
            contentStyle: {
                backgroundColor: appColors.background
            }
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={HomeDrawerNavigator} />
        </Stack.Navigator>
    )
}

export { MainStack }
