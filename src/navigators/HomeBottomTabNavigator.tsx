import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext } from 'react'
import { Home } from '../routes/home'
import { Login } from '../routes/login'
import { ThemeContext } from '../contexts/ThemeContext'
import { appColors } from '../styles/global'
import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { StyledButtonContainer } from '../routes/home/styles'
import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native'
import { useBottomSheetHook } from '../contexts/BottomSheetContext'



const BottomTab = createBottomTabNavigator()

const HomeBottomTabNavigator = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <BottomTab.Navigator
            tabBar={props => <TabBar {...props} />}
            initialRouteName='Home'
            sceneContainerStyle={{
                backgroundColor: appColors[theme].background
            }}
            screenOptions={{

                headerTitle: '',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: appColors[theme].background
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
`

const TabBar = ({ state, descriptors, navigation }) => {
    return (
        <StyledView>
            {
                state.routes.map((route, index) => {
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

                    if(index == 1) {
                        return <CustomButton key={index} />
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
                            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </StyledView>
    )
}

const CustomButton = () => {

    const { handlePresentModalPress } = useBottomSheetHook();

    return (
        <TouchableOpacity onPress={handlePresentModalPress}> 
            <Text>Testing Lang</Text>
        </TouchableOpacity>
    )
}
export { HomeBottomTabNavigator }