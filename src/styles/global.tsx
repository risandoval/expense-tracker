import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const getStatusBarHeight = () => {
    return Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0;
};

export type TTheme = {
    fontColor: string;
    backgroundColor: string;
}

export const darkTheme: TTheme = {
    fontColor: '#FAFAFA',
    backgroundColor: '#17181C'
}

export const lightTheme: TTheme = {
    fontColor: '#17181C',
    backgroundColor: '#FAFAFA'
}

// yung mga kulay na ginagamit dito pero pag apektado ng light mode darkmode dun sa taas ilagay
export const appColors = {
    green: '#8AC186',
    yellow: '#FFD47F',
    violet: '#7768D6',
    darkBlue: '#17181C',
    white: '#FAFAFA'
}

const StyledSafeAreaView = styled.SafeAreaView`
      flex: 1;
`;
/* padding-top: ${getStatusBarHeight()}px; dagdag to sa taas*/

const StyledHeader1 = styled.Text`
    font-size: 28px;
    color: ${p => p.theme.fontColor};
    font-family: 'Lexend_400Regular';
`

const StyledHeader2 = styled.Text`
    font-size: 22px;
    color: ${p => p.theme.fontColor};
    font-family: 'Lexend_400Regular';

`

const StyledHeader3 = styled.Text`
    font-size: 20px;
    color: ${p => p.theme.fontColor};
    font-family: 'Lexend_400Regular';

`

const StyledBodyText1 = styled.Text`
    font-size: 17px;
    color: ${p => p.theme.fontColor};
    font-family: 'Lexend_400Regular';

`

const StyledBodyText2 = styled.Text`
    font-size: 15px;
    color: ${p => p.theme.fontColor};
    font-family: 'Lexend_400Regular';

`

const StyledBodyText3 = styled.Text`
    font-size: 13px;
    color: ${p => p.theme.fontColor};
    font-family: 'Lexend_400Regular';

`

// form input fields
const StyledFormCont = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-top: 10px;
`

const StyledFormField = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 5px;
  margin-top: 20px;
`

const StyledTextInput = styled.TextInput`
  background-color: #eaeaea;
  padding: 10px;
  border-radius: 5px;
  font-size: 17px;
`

export {
    StyledSafeAreaView,
    StyledHeader1,
    StyledHeader2,
    StyledHeader3,
    StyledBodyText1,
    StyledBodyText2,
    StyledBodyText3,
    StyledFormCont,
    StyledFormField,
    StyledTextInput

}
