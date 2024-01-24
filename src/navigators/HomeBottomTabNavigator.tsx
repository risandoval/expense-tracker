import React, { useContext } from 'react'
import { BottomTabBarProps, BottomTabNavigationEventMap, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../routes/home'
import { Login } from '../routes/login'
import { appColors, lightTheme } from '../styles/global'
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import styled, { ThemeContext } from 'styled-components/native'
import { NavigationHelpers, ParamListBase } from '@react-navigation/native'
import { useBottomSheetHook } from '../contexts/BottomSheetContext'

const BottomTab = createBottomTabNavigator()


const HomeBottomTabNavigator = () => {
    const theme = useContext(ThemeContext);

    return (
        <BottomTab.Navigator
            tabBar={props => <TabBar {...props} />}
            initialRouteName='Home'

            sceneContainerStyle={{
                backgroundColor: theme?.backgroundColor ?? lightTheme.backgroundColor,
            }}

            screenOptions={{
                headerTitle: 'BASTA MAY LAMAN PA TO',
                headerTitleStyle: {
                    color: theme?.fontColor ?? lightTheme.fontColor
                },
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: theme?.backgroundColor ?? lightTheme.backgroundColor
                }
            }}
        >

            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="_placeholder" component={Home} />

            <BottomTab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
        </BottomTab.Navigator>
    )
}

const StyledView = styled.View`
    display: flex;
    flex-direction: row;
    padding: 30px 5px;
    justify-content: between;
    background-color: ${p => p.theme.backgroundColor};
`

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    return (
        <StyledView>
            {
                state.routes.map((route, index: number) => {
                    const { options } = descriptors[route.key];

                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    if (index == 1) {
                        return <BottomSheetButton key={index}/>
                    }

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={{ flex: 1, display: 'flex', alignItems: 'center' }}
                        >

                            <Text>
                                {label.toString()}
                            </Text>

                        </TouchableOpacity>
                    )
                })
            }
        </StyledView>
    )
}

const BottomSheetButton = () => {
    const { handleExpandPress } = useBottomSheetHook();

    return (
        <TouchableOpacity onPress={handleExpandPress}>
            <Text>Testing Lang</Text>
        </TouchableOpacity>
    )
}
export { HomeBottomTabNavigator }