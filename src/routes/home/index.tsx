import React from 'react'
import { SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {
    StyledScrollView,
    StyledMainView,
    StyledHomeText,
    StyledButtonContainer
} from './styles'

const Home = () => {
  return (
    <SafeAreaView>
        <StyledScrollView>
            <StyledMainView>
                <StyledHomeText>This is Home Screen</StyledHomeText>
            </StyledMainView>
        </StyledScrollView>

        <StyledButtonContainer>
            <AntDesign name="pluscircle" size={50} color="black" />
        </StyledButtonContainer>
    </SafeAreaView>
  )
}

export { Home }