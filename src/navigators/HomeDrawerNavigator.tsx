import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useContext } from 'react'
import { appColors } from '../styles/global';
import { Home } from '../routes/home';
import { Login } from '../routes/login';
import { ThemeContext } from '../contexts/ThemeContext';

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {

    const { theme } = useContext(ThemeContext)
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerType: 'front',
                headerTitle: '',
                overlayColor: '#00000098',
                sceneContainerStyle: {
                    backgroundColor: appColors[theme].background
                },
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: appColors[theme].background
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
