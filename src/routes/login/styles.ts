import styled from "styled-components/native";

// Containers
const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;
    padding: 10px;
`;

const StyledHeaderView = styled.View`
    display: flex;
    flex-direction: column;
`;

const StyledSectionView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const StyledSectionViewMd = styled.View`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const StyledCenterText = styled.Text`
    text-align: center;
`

const StyledSectionHeaderView = styled.View`
    padding: 0px 10px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

// Input text
const StyledInputView = styled.View`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const StyledTextInput = styled.TextInput`
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
`;

// Login buttons
const StyledButtonContainer = styled.TouchableOpacity`
    background-color: #000000;
    border-radius: 10px;
`;

const StyledButtonLabel = styled.Text`
    color: #FFFFFF;
    padding: 16px;
    text-align: center;
    font-weight: bold;
`;

// Separator
const StyledSeparatorContainer = styled.View`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const StyledSeparatorLine = styled.View`
    flex: 1;
    height: 1px;
    background-color: #000;
    opacity: 0.2;
`;

// Alternative login buttons
const StyledAltButtonContainer = styled.TouchableOpacity`
    background-color: #E1E1E1;
    border-radius: 10px;
`;

const StyledAltButtonLabel = styled.Text`
    color: #000000;
    padding: 16px;
    font-size: 15px;
    color: ${p => p.theme.fontColor};
    font-family: 'Lexend_400Regular';
    text-align: center;
`;

export {
    StyledView,
    StyledHeaderView,
    StyledSectionView,
    StyledSectionViewMd,
    StyledSectionHeaderView,
    StyledCenterText,
    StyledInputView,
    StyledTextInput,
    StyledButtonContainer,
    StyledButtonLabel,
    StyledSeparatorContainer,
    StyledSeparatorLine,
    StyledAltButtonContainer,
    StyledAltButtonLabel
};
