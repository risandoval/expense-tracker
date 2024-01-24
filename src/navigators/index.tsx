import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import { MainStack } from './MainStack'
import { ThemeContext } from '../contexts/ThemeContext'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles/global'

const MainNavigation = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </ThemeProvider>
    )
}

export { MainNavigation }
