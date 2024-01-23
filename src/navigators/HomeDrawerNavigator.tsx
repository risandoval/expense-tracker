import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { appColors } from '../styles/global';
import { Home } from '../routes/home';
import { Login } from '../routes/login';

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerType: 'front',
                headerTitle: '',
                overlayColor: '#00000098',
                sceneContainerStyle: {
                    backgroundColor: appColors.background
                },
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: appColors.background
                }
            }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    )
}

export { HomeDrawerNavigator }
