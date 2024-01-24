import styled from "styled-components/native";

export const appColors = {

    darkMode: {
        background: '#17181C',
        text: '#FAFAFA'
    },

    lightMode: {
        text: '#17181C',
        background: '#FAFAFA'
    },

    green: '#8AC186',
    yellow: '#FFD47F',
    violet: '#7768D6',
    darkBlue: '#17181C',
    white: '#FAFAFA'
} 

export const StyledHeader1 = styled.Text`
    font-size: 28px;
    color: ${appColors.white};
`

export const StyledHeader2 = styled.Text`
    font-size: 22px;
    color: ${appColors.white};
`

export const StyledHeader3 = styled.Text`
    font-size: 20px;
    color: ${appColors.white};
`

export const StyledBodyText = styled.Text`
    font-size: 17px;
    color: ${appColors.white};
`

